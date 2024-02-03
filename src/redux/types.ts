// types.ts
export const SELECT_COMPONENT = 'SELECT_COMPONENT' as const
export const SELECTED_COMPONENT_CONFIG = 'SELECT_COMPONENT_CONFIG' as const
export const SELECTED_COLLECTION = 'SELECTED_COLLECTION' as const

// Action types
export type SelectComponentAction = {
  type: typeof SELECT_COMPONENT
  payload: string
}

export type SelectedComponentConfigAction = {
  type: typeof SELECTED_COMPONENT_CONFIG
  payload: unknown
}

export type SelectedCollectionAction = {
  type: typeof SELECTED_COLLECTION
  payload: string
}
