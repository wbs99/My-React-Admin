export const getSiderbarOpenKey = (path: string) => {
  let i = 1
  const arr: string[] = []
  while (true) {
    i = path.indexOf('/', i)
    if (i === -1) {
      break
    }
    arr.push(path.slice(0, i))
    i = path.indexOf('/', i) + 1
  }
  return arr
}