// Copyright (c) 2022 Gitpod GmbH. All rights reserved.
// Licensed under the GNU Affero General Public License (AGPL).
// See License.AGPL.txt in the project root for license information.

package db

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type TeamMembership struct {
	ID uuid.UUID `gorm:"primary_key;column:id;type:char;size:36;" json:"id"`

	TeamID uuid.UUID          `gorm:"column:teamId;type:char;size:36;" json:"teamId"`
	UserID uuid.UUID          `gorm:"column:userId;type:char;size:36;" json:"userId"`
	Role   TeamMembershipRole `gorm:"column:role;type:varchar;size:255;" json:"role"`

	CreationTime VarcharTime `gorm:"column:creationTime;type:varchar;size:255;" json:"creationTime"`
	// Read-only (-> property).
	LastModified time.Time `gorm:"->:column:_lastModified;type:timestamp;default:CURRENT_TIMESTAMP(6);" json:"_lastModified"`

	// deleted column is reserved for use by periodic deleter
	_ bool `gorm:"column:deleted;type:tinyint;default:0;" json:"deleted"`
}

// TableName sets the insert table name for this struct type
func (d *TeamMembership) TableName() string {
	return "d_b_team_membership"
}

type TeamMembershipRole string

const (
	TeamMembershipRole_Owner  = TeamMembershipRole("owner")
	TeamMembershipRole_Member = TeamMembershipRole("member")
)

func GetTeamMembership(ctx context.Context, conn *gorm.DB, userID, teamID uuid.UUID) (TeamMembership, error) {
	if userID == uuid.Nil {
		return TeamMembership{}, errors.New("user ID must not be empty")
	}

	if teamID == uuid.Nil {
		return TeamMembership{}, errors.New("team ID must not be empty")
	}

	var membership TeamMembership
	tx := conn.WithContext(ctx).
		Where("userId = ?", userID.String()).
		Where("teamId = ?", teamID.String()).
		Where("deleted = ?", false).
		First(&membership)
	if tx.Error != nil {
		if errors.Is(tx.Error, gorm.ErrRecordNotFound) {
			return TeamMembership{}, fmt.Errorf("no membership record for user %s and team %s exists: %w", userID.String(), teamID.String(), ErrorNotFound)
		}
		return TeamMembership{}, fmt.Errorf("failed to retrieve team membership for user %s, team %s: %w", userID.String(), teamID.String(), tx.Error)
	}

	return membership, nil
}

func DeleteTeamMembership(ctx context.Context, conn *gorm.DB, userID uuid.UUID, teamID uuid.UUID) error {
	if userID == uuid.Nil {
		return errors.New("user ID must not be empty")
	}

	if teamID == uuid.Nil {
		return errors.New("team ID must not be empty")
	}

	tx := conn.WithContext(ctx).
		Model(&TeamMembership{}).
		Where("userId = ?", userID.String()).
		Where("teamId = ?", teamID.String()).
		Where("deleted = ?", 0).
		Update("deleted", 1)
	if tx.Error != nil {
		return fmt.Errorf("failed to retrieve team membership for user %s, team %s: %w", userID.String(), teamID.String(), tx.Error)
	}
	if tx.RowsAffected == 0 {
		return fmt.Errorf("no membership record for user %s and team %s exists: %w", userID.String(), teamID.String(), ErrorNotFound)
	}

	return nil
}
