// types.ts
export const SELECT_COMPONENT = 'SELECT_COMPONENT' as const
export const SELECTED_COMPONENT_CONFIG = 'SELECT_COMPONENT_CONFIG' as const

// Action types
export type SelectComponentAction = {
  type: typeof SELECT_COMPONENT
  payload: string
}

export type SelectedComponentConfigAction = {
  type: typeof SELECTED_COMPONENT_CONFIG
  payload: unknown
}
