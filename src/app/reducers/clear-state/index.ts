import { Action } from '@ngrx/store';

export class ActionTypes {
  static CLEAR_STATE = '[App] clear App Staste]';
}

export class ClearAppState implements Action {
  readonly type = ActionTypes.CLEAR_STATE;
}

export function clearState(reducer: any) {
  return (state: any, action: any) => {
    if (action.type === ActionTypes.CLEAR_STATE) {
      state = undefined;
    }

    return reducer(state, action);
  };
}
