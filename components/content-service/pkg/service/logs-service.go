// Copyright (c) 2021 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License-AGPL.txt in the project root for license information.

package service

import (
	"context"

	"github.com/opentracing/opentracing-go"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/gitpod-io/gitpod/common-go/log"
	"github.com/gitpod-io/gitpod/common-go/tracing"
	"github.com/gitpod-io/gitpod/content-service/api"
	"github.com/gitpod-io/gitpod/content-service/pkg/logs"
	"github.com/gitpod-io/gitpod/content-service/pkg/storage"
)

// LogService implements LogServiceServer
type LogService struct {
	cfg storage.Config
	s   storage.PresignedAccess
	d   storage.DirectAccess

	api.UnimplementedLogServiceServer
}

// NewLogService create a new content service
func NewLogService(cfg storage.Config) (res *LogService, err error) {
	s, err := storage.NewPresignedAccess(&cfg)
	if err != nil {
		return nil, err
	}
	d, err := storage.NewDirectAccess(&cfg)
	if err != nil {
		return nil, err
	}
	return &LogService{
		cfg: cfg,
		s:   s,
		d:   d,
	}, nil
}

// LogDownloadURL provides a URL from where the content of a workspace log stream can be downloaded from
func (ls *LogService) LogDownloadURL(ctx context.Context, req *api.LogDownloadURLRequest) (resp *api.LogDownloadURLResponse, err error) {
	span, ctx := opentracing.StartSpanFromContext(ctx, "WorkspaceDownloadURL")
	span.SetTag("user", req.OwnerId)
	span.SetTag("workspaceId", req.WorkspaceId)
	span.SetTag("instanceId", req.InstanceId)
	defer tracing.FinishSpan(span, &err)

	blobName := ls.s.InstanceObject(req.WorkspaceId, req.InstanceId, logs.UploadedPrebuildLogPath(req.TaskId))
	info, err := ls.s.SignDownload(ctx, ls.s.Bucket(req.OwnerId), blobName, &storage.SignedURLOptions{})
	if err != nil {
		log.WithFields(log.OWI(req.OwnerId, req.WorkspaceId, "")).
			WithField("bucket", ls.s.Bucket(req.OwnerId)).
			WithField("blobName", blobName).
			WithError(err).
			Error("error getting SignDownload URL")
		if err == storage.ErrNotFound {
			return nil, status.Error(codes.NotFound, err.Error())
		}
		return nil, status.Error(codes.Unknown, err.Error())
	}

	return &api.LogDownloadURLResponse{
		Url: info.URL,
	}, nil
}

// ListPrebuildLogs returns a list of taskIds for the specified workspace instance
func (ls *LogService) ListPrebuildLogs(ctx context.Context, req *api.ListPrebuildLogsRequest) (resp *api.ListPrebuildLogsResponse, err error) {
	// all files under this prefix are logs prebuild log files, named after their respective taskIds
	prefix := ls.s.InstanceObject(req.WorkspaceId, req.InstanceId, logs.UploadedPrebuildLogPathPrefix)
	objects, err := ls.d.ListObjects(ctx, prefix)
	if err != nil {
		return nil, err
	}

	return &api.ListPrebuildLogsResponse{
		TaskId: objects,
	}, nil
}
