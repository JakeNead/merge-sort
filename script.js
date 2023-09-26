function merge(left, right) {
  const result = [];
  const combinedLength = left.length + right.length;
  for (let i = 0; i < combinedLength; i += 1) {
    if (left.length > 0 && right.length === 0) {
      result.push(left.shift());
    } else if (right.length > 0 && left.length === 0) {
      result.push(right.shift());
    } else if (left[0] < right[0]) {
      result.push(left.shift());
    } else if (left[0] > right[0]) {
      result.push(right.shift());
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 0) return "Pease enter an array with nulmbers to sort!";
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle, arr.length));
  return merge(left, right);
}

console.log(mergeSort([])); // Pease enter an array with nulmbers to sort!
console.log(mergeSort([542])); // [542]
console.log(mergeSort([9, 2, 6, 4, 5, 1, 3, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeSort([-9, -2, -6, -4, -5, -1, -3, -7, -8])); //[-9, -8, -7, -6, -5, -4, -3, -2, -1]
