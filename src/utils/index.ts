export const makeRandomNumber = (): number => {
  const LENGTH = 1
  const array = new Uint32Array(LENGTH)
  self.crypto.getRandomValues(array)
  return array[LENGTH - 1]
}
