// @flow

// mutates array
export const removeFromArray = (array: any[], element: any): void => {
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (array[i] === element) array.splice(i, 1)
  }
}
