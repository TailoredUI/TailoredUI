export interface WindowWithEyeDropper extends Window {
  EyeDropper?: {
    new (): {
      open(): Promise<{ sRGBHex: string }>
    }
  }
}
