/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

// package: contentservice
// file: log.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class LogDownloadURLRequest extends jspb.Message {
    getOwnerId(): string;
    setOwnerId(value: string): LogDownloadURLRequest;
    getWorkspaceId(): string;
    setWorkspaceId(value: string): LogDownloadURLRequest;
    getInstanceId(): string;
    setInstanceId(value: string): LogDownloadURLRequest;
    getTaskId(): string;
    setTaskId(value: string): LogDownloadURLRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogDownloadURLRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogDownloadURLRequest): LogDownloadURLRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogDownloadURLRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogDownloadURLRequest;
    static deserializeBinaryFromReader(message: LogDownloadURLRequest, reader: jspb.BinaryReader): LogDownloadURLRequest;
}

export namespace LogDownloadURLRequest {
    export type AsObject = {
        ownerId: string,
        workspaceId: string,
        instanceId: string,
        taskId: string,
    }
}

export class LogDownloadURLResponse extends jspb.Message {
    getUrl(): string;
    setUrl(value: string): LogDownloadURLResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogDownloadURLResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogDownloadURLResponse): LogDownloadURLResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogDownloadURLResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogDownloadURLResponse;
    static deserializeBinaryFromReader(message: LogDownloadURLResponse, reader: jspb.BinaryReader): LogDownloadURLResponse;
}

export namespace LogDownloadURLResponse {
    export type AsObject = {
        url: string,
    }
}

export class ListPrebuildLogsRequest extends jspb.Message {
    getOwnerId(): string;
    setOwnerId(value: string): ListPrebuildLogsRequest;
    getWorkspaceId(): string;
    setWorkspaceId(value: string): ListPrebuildLogsRequest;
    getInstanceId(): string;
    setInstanceId(value: string): ListPrebuildLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPrebuildLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPrebuildLogsRequest): ListPrebuildLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPrebuildLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPrebuildLogsRequest;
    static deserializeBinaryFromReader(message: ListPrebuildLogsRequest, reader: jspb.BinaryReader): ListPrebuildLogsRequest;
}

export namespace ListPrebuildLogsRequest {
    export type AsObject = {
        ownerId: string,
        workspaceId: string,
        instanceId: string,
    }
}

export class ListPrebuildLogsResponse extends jspb.Message {
    clearTaskidList(): void;
    getTaskidList(): Array<string>;
    setTaskidList(value: Array<string>): ListPrebuildLogsResponse;
    addTaskid(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPrebuildLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPrebuildLogsResponse): ListPrebuildLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPrebuildLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPrebuildLogsResponse;
    static deserializeBinaryFromReader(message: ListPrebuildLogsResponse, reader: jspb.BinaryReader): ListPrebuildLogsResponse;
}

export namespace ListPrebuildLogsResponse {
    export type AsObject = {
        taskidList: Array<string>,
    }
}
