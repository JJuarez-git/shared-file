import { createAction, props } from '@ngrx/store';
import { WorkspaceItem } from '../../models/WorkspaceItem';

// Effects
export const GET_WORKSPACE = '[Workspace Component] Get Workspace';
export const GET_WORKSPACE_SUCCESS = '[Workspace Component] Get Workspace Success';
export const GET_WORKSPACE_FAILURE = '[Workspace Component] Get Workspace Failure';

export const ADD_FOLDER = '[Workspace Component] Add Folder';
export const DELETE_FOLDER = '[Workspace Component] Delete Folder';

export const getWorkspace = createAction(GET_WORKSPACE);
export const getWorkspaceSuccess = createAction(GET_WORKSPACE_SUCCESS, props<{ payload: WorkspaceItem[] }>());
export const getWorkspaceFailure = createAction(GET_WORKSPACE_FAILURE, props<any>());

export const addFolder = createAction(ADD_FOLDER, props<{ payload: WorkspaceItem }>());
export const deleteFolder = createAction(DELETE_FOLDER, props<{ payload: string }>());