// actions.ts
import {
  SELECT_COMPONENT,
  SELECTED_COMPONENT_CONFIG,
  SELECTED_COLLECTION,
  SelectComponentAction,
  SelectedComponentConfigAction,
  SelectedCollectionAction,
} from './types'

export const selectComponent = (
  componentPath: string
): SelectComponentAction => ({
  type: SELECT_COMPONENT,
  payload: componentPath,
})

export const selectedComponentConfig = (
  config: unknown
): SelectedComponentConfigAction => ({
  type: SELECTED_COMPONENT_CONFIG,
  payload: config,
})

export const selectedCollection = (
  collection: string
): SelectedCollectionAction => ({
  type: SELECTED_COLLECTION,
  payload: collection,
})
