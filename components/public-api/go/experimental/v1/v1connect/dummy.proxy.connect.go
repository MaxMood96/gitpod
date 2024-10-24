// Copyright (c) 2024 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License.AGPL.txt in the project root for license information.

// Code generated by protoc-proxy-gen. DO NOT EDIT.

package v1connect

import (
	context "context"
	connect_go "github.com/bufbuild/connect-go"
	v1 "github.com/gitpod-io/gitpod/components/public-api/go/experimental/v1"
)

var _ HelloServiceHandler = (*ProxyHelloServiceHandler)(nil)

type ProxyHelloServiceHandler struct {
	Client v1.HelloServiceClient
	UnimplementedHelloServiceHandler
}

func (s *ProxyHelloServiceHandler) SayHello(ctx context.Context, req *connect_go.Request[v1.SayHelloRequest]) (*connect_go.Response[v1.SayHelloResponse], error) {
	resp, err := s.Client.SayHello(ctx, req.Msg)
	if err != nil {
		// TODO(milan): Convert to correct status code
		return nil, err
	}

	return connect_go.NewResponse(resp), nil
}
