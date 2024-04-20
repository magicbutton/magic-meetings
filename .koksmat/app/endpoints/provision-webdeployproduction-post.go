// -------------------------------------------------------------------
// Generated by 365admin-publish/api/20 makeschema.ps1
// -------------------------------------------------------------------
/*
---
title: Web deploy to production
---
*/
package endpoints

import (
	"context"

	"github.com/swaggest/usecase"

	"github.com/magicbutton/magic-meetings/execution"
)

func ProvisionWebdeployproductionPost() usecase.Interactor {
	type Request struct {
	}
	u := usecase.NewInteractor(func(ctx context.Context, input Request, output *string) error {

		_, err := execution.ExecutePowerShell("john", "*", "magic-meetings", "60-provision", "10-web.ps1", "")
		if err != nil {
			return err
		}

		return err

	})
	u.SetTitle("Web deploy to production")
	// u.SetExpectedErrors(status.InvalidArgument)
	u.SetTags("Provision")
	return u
}
