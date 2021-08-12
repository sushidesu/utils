/**
 * Remove specific element from array
 * @param array
 * @param index - index of target element
 * @returns array
 */
export const removeElementOfArray = <T>(
  array: readonly T[],
  index: number
): T[] => {
  if (index < 0 || array.length <= index) {
    return [...array];
  }
  return array.slice(0, index).concat(array.slice(index + 1));
};
