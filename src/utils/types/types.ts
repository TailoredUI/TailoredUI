export interface Component {
  name: string
  path: string
}

export type CustomizableComponentOptions = {
  name: string
  type: 'text' | 'group' | 'color'
  default: string
  className: string
  options?: CustomizableComponentOptions[]
}

export type CustomizableComponentSchema = {
  name: string
  options: CustomizableComponentOptions[]
}
