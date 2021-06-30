// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2021 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License-AGPL.txt in the project root for license information.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var log_pb = require('./log_pb.js');

function serialize_contentservice_ListPrebuildLogsRequest(arg) {
  if (!(arg instanceof log_pb.ListPrebuildLogsRequest)) {
    throw new Error('Expected argument of type contentservice.ListPrebuildLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_ListPrebuildLogsRequest(buffer_arg) {
  return log_pb.ListPrebuildLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_ListPrebuildLogsResponse(arg) {
  if (!(arg instanceof log_pb.ListPrebuildLogsResponse)) {
    throw new Error('Expected argument of type contentservice.ListPrebuildLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_ListPrebuildLogsResponse(buffer_arg) {
  return log_pb.ListPrebuildLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_LogDownloadURLRequest(arg) {
  if (!(arg instanceof log_pb.LogDownloadURLRequest)) {
    throw new Error('Expected argument of type contentservice.LogDownloadURLRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_LogDownloadURLRequest(buffer_arg) {
  return log_pb.LogDownloadURLRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contentservice_LogDownloadURLResponse(arg) {
  if (!(arg instanceof log_pb.LogDownloadURLResponse)) {
    throw new Error('Expected argument of type contentservice.LogDownloadURLResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contentservice_LogDownloadURLResponse(buffer_arg) {
  return log_pb.LogDownloadURLResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LogServiceService = exports.LogServiceService = {
  // LogDownloadURL provides a URL from where the content of a workspace can be downloaded from
logDownloadURL: {
    path: '/contentservice.LogService/LogDownloadURL',
    requestStream: false,
    responseStream: false,
    requestType: log_pb.LogDownloadURLRequest,
    responseType: log_pb.LogDownloadURLResponse,
    requestSerialize: serialize_contentservice_LogDownloadURLRequest,
    requestDeserialize: deserialize_contentservice_LogDownloadURLRequest,
    responseSerialize: serialize_contentservice_LogDownloadURLResponse,
    responseDeserialize: deserialize_contentservice_LogDownloadURLResponse,
  },
  // ListPrebuildLogs returns a list of taskIds for the specified workspace instance
listPrebuildLogs: {
    path: '/contentservice.LogService/ListPrebuildLogs',
    requestStream: false,
    responseStream: false,
    requestType: log_pb.ListPrebuildLogsRequest,
    responseType: log_pb.ListPrebuildLogsResponse,
    requestSerialize: serialize_contentservice_ListPrebuildLogsRequest,
    requestDeserialize: deserialize_contentservice_ListPrebuildLogsRequest,
    responseSerialize: serialize_contentservice_ListPrebuildLogsResponse,
    responseDeserialize: deserialize_contentservice_ListPrebuildLogsResponse,
  },
};

exports.LogServiceClient = grpc.makeGenericClientConstructor(LogServiceService);
