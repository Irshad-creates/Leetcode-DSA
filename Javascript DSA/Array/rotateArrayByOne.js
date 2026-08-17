function rotateArrayByOne(nums) {
        let temp = nums[0]
        for( let i = 1 ; i < nums.length ; i++){
            nums[i-1] = nums[i]
        }
        nums[(nums.length - 1)] = temp;
        return nums
    }
  console.log(rotateArrayByOne([10, 0, 1, 1, 2]))
