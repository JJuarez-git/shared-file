import { workspaceReducer } from '../reducers/workspace.reducer';
import { WorkspaceEffects } from '../effects/workspace.effects';

export interface StoreEntity {
    workspace: any
}

export const STORE = {
    workspace: workspaceReducer
}

export const STORE_EFFECTS = [WorkspaceEffects]