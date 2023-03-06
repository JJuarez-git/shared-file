import { createReducer, on } from '@ngrx/store';
import * as WorkspaceActions from '../actions/workspace.actions';

export const workspaceState: any[] = [];

export const workspaceReducer = createReducer(
    workspaceState,
    on(WorkspaceActions.getWorkspace, (state) => state),
    on(WorkspaceActions.getWorkspaceSuccess, (state, result) => result.payload),
    on(WorkspaceActions.getWorkspaceFailure, (state, result) => result.payload),
    on(WorkspaceActions.addFolder, (state, result) => [...state, result.payload]),
    on(WorkspaceActions.deleteFolder, (state, result) => [...state].filter(item => item.name !== result.payload))
);

