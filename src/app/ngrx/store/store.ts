import { workspaceReducer } from '../reducers/workspace.reducers';
import { WorkspaceEffects } from '../effects/workspace.effects';
import { WorkspaceItem } from '../../models/WorkspaceItem';
import { authReducer } from '../reducers/auth.reducers';
import { AuthEffects } from '../effects/auth.effects';

export interface StoreEntity {
    workspace: any,
    auth: {
        token: string,
        email: string,
        username: string
    }
}

export const STORE = {
    workspace: workspaceReducer,
    auth: authReducer
}

export const STORE_EFFECTS = [WorkspaceEffects, AuthEffects]