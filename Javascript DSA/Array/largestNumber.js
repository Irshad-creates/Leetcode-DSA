function  largestElement(nums) {
    let largest = nums[0];
    for(let i = 0; i < nums.length ; i++){
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
    return largest;
}

console.log(largestElement([1,5,6,2,3,5]))