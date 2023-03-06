import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WorkspaceItem } from 'src/app/models/WorkspaceItem';
import { WorkspaceService } from '../../services/workspace.service';
import * as WorkspaceActions from '../actions/workspace.actions';

@Injectable()
export class WorkspaceEffects {

    getWorkspace$ = createEffect((): any => this.actions$.pipe(
        ofType(WorkspaceActions.getWorkspace),
        mergeMap((action: any) => this.workspaceService.getWorkspace(action.payload.workspace).pipe(
            map((workspace: WorkspaceItem[]) => ({ type: WorkspaceActions.GET_WORKSPACE_SUCCESS, payload: workspace })),
            catchError((error) => WorkspaceActions.getWorkspaceFailure([]))
        )))
    );

    constructor(
        private actions$: Actions,
        private workspaceService: WorkspaceService
    ) { }
}