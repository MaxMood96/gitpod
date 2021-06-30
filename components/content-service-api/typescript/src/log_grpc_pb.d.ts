/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

// package: contentservice
// file: log.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as log_pb from "./log_pb";

interface ILogServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    logDownloadURL: ILogServiceService_ILogDownloadURL;
    listPrebuildLogs: ILogServiceService_IListPrebuildLogs;
}

interface ILogServiceService_ILogDownloadURL extends grpc.MethodDefinition<log_pb.LogDownloadURLRequest, log_pb.LogDownloadURLResponse> {
    path: "/contentservice.LogService/LogDownloadURL";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<log_pb.LogDownloadURLRequest>;
    requestDeserialize: grpc.deserialize<log_pb.LogDownloadURLRequest>;
    responseSerialize: grpc.serialize<log_pb.LogDownloadURLResponse>;
    responseDeserialize: grpc.deserialize<log_pb.LogDownloadURLResponse>;
}
interface ILogServiceService_IListPrebuildLogs extends grpc.MethodDefinition<log_pb.ListPrebuildLogsRequest, log_pb.ListPrebuildLogsResponse> {
    path: "/contentservice.LogService/ListPrebuildLogs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<log_pb.ListPrebuildLogsRequest>;
    requestDeserialize: grpc.deserialize<log_pb.ListPrebuildLogsRequest>;
    responseSerialize: grpc.serialize<log_pb.ListPrebuildLogsResponse>;
    responseDeserialize: grpc.deserialize<log_pb.ListPrebuildLogsResponse>;
}

export const LogServiceService: ILogServiceService;

export interface ILogServiceServer extends grpc.UntypedServiceImplementation {
    logDownloadURL: grpc.handleUnaryCall<log_pb.LogDownloadURLRequest, log_pb.LogDownloadURLResponse>;
    listPrebuildLogs: grpc.handleUnaryCall<log_pb.ListPrebuildLogsRequest, log_pb.ListPrebuildLogsResponse>;
}

export interface ILogServiceClient {
    logDownloadURL(request: log_pb.LogDownloadURLRequest, callback: (error: grpc.ServiceError | null, response: log_pb.LogDownloadURLResponse) => void): grpc.ClientUnaryCall;
    logDownloadURL(request: log_pb.LogDownloadURLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: log_pb.LogDownloadURLResponse) => void): grpc.ClientUnaryCall;
    logDownloadURL(request: log_pb.LogDownloadURLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: log_pb.LogDownloadURLResponse) => void): grpc.ClientUnaryCall;
    listPrebuildLogs(request: log_pb.ListPrebuildLogsRequest, callback: (error: grpc.ServiceError | null, response: log_pb.ListPrebuildLogsResponse) => void): grpc.ClientUnaryCall;
    listPrebuildLogs(request: log_pb.ListPrebuildLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: log_pb.ListPrebuildLogsResponse) => void): grpc.ClientUnaryCall;
    listPrebuildLogs(request: log_pb.ListPrebuildLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: log_pb.ListPrebuildLogsResponse) => void): grpc.ClientUnaryCall;
}

export class LogServiceClient extends grpc.Client implements ILogServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public logDownloadURL(request: log_pb.LogDownloadURLRequest, callback: (error: grpc.ServiceError | null, response: log_pb.LogDownloadURLResponse) => void): grpc.ClientUnaryCall;
    public logDownloadURL(request: log_pb.LogDownloadURLRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: log_pb.LogDownloadURLResponse) => void): grpc.ClientUnaryCall;
    public logDownloadURL(request: log_pb.LogDownloadURLRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: log_pb.LogDownloadURLResponse) => void): grpc.ClientUnaryCall;
    public listPrebuildLogs(request: log_pb.ListPrebuildLogsRequest, callback: (error: grpc.ServiceError | null, response: log_pb.ListPrebuildLogsResponse) => void): grpc.ClientUnaryCall;
    public listPrebuildLogs(request: log_pb.ListPrebuildLogsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: log_pb.ListPrebuildLogsResponse) => void): grpc.ClientUnaryCall;
    public listPrebuildLogs(request: log_pb.ListPrebuildLogsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: log_pb.ListPrebuildLogsResponse) => void): grpc.ClientUnaryCall;
}
