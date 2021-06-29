/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License-AGPL.txt in the project root for license information.
 */

 import {MigrationInterface, QueryRunner} from "typeorm";
 import { tableExists, columnExists } from "./helper/helper";

export class AddProjectIdToWorkspace1624962141719 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        if (await tableExists(queryRunner, "d_b_workspace")) {
            if (!(await columnExists(queryRunner, "d_b_workspace", "projectId"))) {
                await queryRunner.query("ALTER TABLE d_b_workspace ADD COLUMN `projectId` char(36) DEFAULT NULL, ADD COLUMN `branch` varchar(255) DEFAULT NULL");
            }
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
