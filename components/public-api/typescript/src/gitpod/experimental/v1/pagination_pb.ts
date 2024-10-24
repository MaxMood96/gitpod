/**
 * Copyright (c) 2024 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file gitpod/experimental/v1/pagination.proto (package gitpod.experimental.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message gitpod.experimental.v1.Pagination
 */
export class Pagination extends Message<Pagination> {
  /**
   * Page size is the maximum number of results to retrieve per page.
   * Defaults to 25. Maximum 100.
   *
   * @generated from field: int32 page_size = 1;
   */
  pageSize = 0;

  /**
   * Page is the page number of results to retrieve.
   * The first page starts at 1.
   * Defaults to 1.
   *
   * @generated from field: int32 page = 2;
   */
  page = 0;

  constructor(data?: PartialMessage<Pagination>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "gitpod.experimental.v1.Pagination";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pagination {
    return new Pagination().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pagination {
    return new Pagination().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pagination {
    return new Pagination().fromJsonString(jsonString, options);
  }

  static equals(a: Pagination | PlainMessage<Pagination> | undefined, b: Pagination | PlainMessage<Pagination> | undefined): boolean {
    return proto3.util.equals(Pagination, a, b);
  }
}
