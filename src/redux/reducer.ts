/* eslint-disable indent */
// reducers.ts
import { combineReducers } from 'redux'
import {
  SELECT_COMPONENT,
  SELECTED_COMPONENT_CONFIG,
  SelectComponentAction,
  SelectedComponentConfigAction,
} from './types'

export interface ComponentState {
  selectedComponentPath: string | null
}

export interface ConfigState {
  selectedComponentConfig: unknown | null
}

export interface RootState {
  component: ComponentState
  config: ConfigState
}

const initialComponentState: ComponentState = {
  selectedComponentPath: null,
}

const initialConfigState: ConfigState = {
  selectedComponentConfig: null,
}

const componentReducer = (
  state: ComponentState = initialComponentState,
  action: SelectComponentAction
): ComponentState => {
  switch (action.type) {
    case SELECT_COMPONENT:
      return {
        ...state,
        selectedComponentPath: action.payload,
      }
    default:
      return state
  }
}

const configReducer = (
  state: ConfigState = initialConfigState,
  action: SelectedComponentConfigAction
): ConfigState => {
  switch (action.type) {
    case SELECTED_COMPONENT_CONFIG:
      return {
        ...state,
        selectedComponentConfig: action.payload,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  component: componentReducer,
  config: configReducer,
})

export default rootReducer
