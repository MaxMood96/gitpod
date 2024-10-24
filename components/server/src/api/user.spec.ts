/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

import { suite, test } from "mocha-typescript";
import { APIUserService } from "./user";
import { Container } from "inversify";
import { testContainer } from "@gitpod/gitpod-db/lib";
import { WorkspaceStarter } from "../workspace/workspace-starter";
import { UserService } from "../user/user-service";
import { BlockUserRequest, BlockUserResponse } from "@gitpod/public-api/lib/gitpod/experimental/v1/user_pb";
import { User } from "@gitpod/gitpod-protocol";
import { StopWorkspacePolicy } from "@gitpod/ws-manager/lib";
import { Workspace } from "@gitpod/gitpod-protocol/lib/protocol";
import { TraceContext } from "@gitpod/gitpod-protocol/lib/util/tracing";
import { v4 as uuidv4 } from "uuid";
import { ConnectError, Code } from "@bufbuild/connect";
import * as chai from "chai";

const expect = chai.expect;

@suite()
export class APIUserServiceSpec {
    private container: Container;
    private workspaceStarterMock: WorkspaceStarter = {
        stopRunningWorkspacesForUser: async (
            ctx: TraceContext,
            userID: string,
            reason: string,
            policy?: StopWorkspacePolicy,
        ): Promise<Workspace[]> => {
            return [];
        },
    } as WorkspaceStarter;
    private userServiceMock: UserService = {
        blockUser: async (targetUserId: string, block: boolean): Promise<User> => {
            return {
                id: targetUserId,
            } as User;
        },
    } as UserService;

    async before() {
        this.container = testContainer.createChild();

        this.container.bind(WorkspaceStarter).toConstantValue(this.workspaceStarterMock);
        this.container.bind(UserService).toConstantValue(this.userServiceMock);
        this.container.bind(APIUserService).toSelf().inSingletonScope();
    }

    @test async blockUser_rejectsInvalidArguments() {
        const scenarios: BlockUserRequest[] = [
            new BlockUserRequest({ userId: "", reason: "naughty" }), // no user id
            new BlockUserRequest({ userId: "foo", reason: "naughty" }), // user id is not a uuid
            new BlockUserRequest({ userId: uuidv4(), reason: "" }), // no reason value
        ];

        const sut = this.container.get<APIUserService>(APIUserService);

        for (let scenario of scenarios) {
            try {
                await sut.blockUser(scenario);
                expect.fail("blockUser did not throw an exception");
            } catch (err) {
                expect(err).to.be.an.instanceof(ConnectError);
                expect(err.code).to.equal(Code.InvalidArgument);
            }
        }
    }

    @test async blockUser_delegatesToUserServiceAndWorkspaceStarter() {
        const sut = this.container.get<APIUserService>(APIUserService);

        const response = await sut.blockUser(new BlockUserRequest({ userId: uuidv4(), reason: "naughty" }));
        expect(response).to.deep.equal(new BlockUserResponse());
    }
}
