function mergeSort(nums){

    if(nums.length <= 1) return nums;

    // divide arraya into 2
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0, mid);
    let right = nums.slice(mid)

    //recuresive sorting on each array
    left = mergeSort(left)
    right = mergeSort(right)
    
    return merge(left, right)
}

function merge(left, right){

    let result = []
    let i = 0 //pointer to left
    let j = 0 //pointer to right
    
    //compare elements form both arrays and pick smallest one
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }

    //one of the array may still have left over elements which will be added to result
    while(i < left.length){
        result.push(left[i])
        i++
    }
    while(j < right.length){
        result.push(right[j])
        j++
    }
    return result
}
// const input = [1, 5, 3, 6, 9, 6, 4, 2];
// mergeSort(input)

console.log(mergeSort([1, 5, 3, 6, 9, 6, 4, 2]));
