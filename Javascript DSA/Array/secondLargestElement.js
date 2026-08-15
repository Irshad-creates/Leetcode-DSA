function secondLargestElement(nums) {
        let largest = nums[0];
        let sLargest = -1

        for(let i = 0; i < nums.length; i++){
            if( nums[i] > largest){
                sLargest = largest
                largest = nums[i]
            }else if( nums[i] < largest  && nums[i] > sLargest  ){
                sLargest = nums[i]
            }
        }
        return sLargest;
    }

console.log(secondLargestElement([1,2,5,6,8,8,7]))