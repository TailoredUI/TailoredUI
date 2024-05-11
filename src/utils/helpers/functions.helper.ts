export const extractLastPart = (path: string) => {
  const parts = path.split('/')

  return parts[parts.length - 1]
}
