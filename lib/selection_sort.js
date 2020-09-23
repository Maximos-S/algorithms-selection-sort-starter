// Try to implement swap on your own, this time.
function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function selectionSort(list) {
  // list  : array of items
  // n     : size of list
  let n = list.length;

  for (let i = 0; i < n-1; i++) {
    // for i = 1 to n - 1

    let min = i
    // /* set current element as minimum*/
    //    min = i
    
    //    /* check the element to be minimum */
    for (let j = i + 1; j < n; j++)
    //    for j = i+1 to n
    //       if list[j] < list[min] then
      if (list[j] < list[min]) {
        //          min = j;
        min = j
        //       end if
        //    end for

      }
  
    //
    //    /* swap the minimum element with the current element
    //       using the above swap function*/
    if (min != i) {
      //    if indexMin != i  then
      swap(list, min, i)
      //       swap list[min] and list[i]
    }
    //    end if
    // end for
  }
}

module.exports = {
  selectionSort,
  swap
};
