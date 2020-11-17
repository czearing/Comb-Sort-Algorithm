/**
 * Swaps two values within in an array.
 *
 * @param data
 * @param firstIndex
 * @param secondIndex
 */
const swap = (data: number[], firstIndex: number, secondIndex: number) => {
  return ([data[firstIndex], data[secondIndex]] = [
    data[secondIndex],
    data[firstIndex]
  ]);
};

/**
 * Finds the gap between elements.
 *
 * @param gap
 */
const gapNextGap = (gap: number) => {
  gap = (gap * 10) / 13;
  if (gap < 1) {
    return 1;
  }
  return gap;
};

/**
 * Sorts an array via the comb sort algorithm.
 *
 * @param data
 */
export const combSort = (data: number[]) => {
  if (data) {
    let gap = data.length;
    let swapped = true;
    while (gap !== 1 || swapped === true) {
      gap = gapNextGap(gap);
      swapped = false;
      for (let index = 0; index < data.length - gap; index++) {
        if (data[index] > data[index + gap]) {
          swap(data, index, index + gap);
          swapped = true;
        }
      }
    }
  }
  return data;
};
