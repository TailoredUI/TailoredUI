/* eslint-disable indent */
// reducers.ts
import { combineReducers } from 'redux'
import {
  SELECT_COMPONENT,
  SELECTED_COMPONENT_CONFIG,
  SelectComponentAction,
  SelectedComponentConfigAction,
  SelectedCollectionAction,
  SELECTED_COLLECTION,
} from './types'

export interface CollectionState {
  selectedCollection: string | null
}

export interface ComponentState {
  selectedComponentPath: string | null
}

export interface ConfigState {
  selectedComponentConfig: unknown | null
}

export interface RootState {
  collection: CollectionState
  component: ComponentState
  config: ConfigState
}

const initialCollectionState: CollectionState = {
  selectedCollection: null,
}

const initialComponentState: ComponentState = {
  selectedComponentPath: null,
}

const initialConfigState: ConfigState = {
  selectedComponentConfig: null,
}

const collectionReducer = (
  state: CollectionState = initialCollectionState,
  action: SelectedCollectionAction
): CollectionState => {
  switch (action.type) {
    case SELECTED_COLLECTION:
      return {
        ...state,
        selectedCollection: action.payload,
      }
    default:
      return state
  }
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
  collection: collectionReducer,
  component: componentReducer,
  config: configReducer,
})

export default rootReducer
