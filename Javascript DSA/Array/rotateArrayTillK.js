function rotateArray(nums, k) {
        let n = nums.length
        k = k % n
    
        for( let count = 0 ; count < k ; count++){
            let temp = nums[0]
            for(i = 1;i < n; i++){
                nums[i-n] = nums[i]
            }
            nums[n-1] = temp
        }
        return nums
    }
    console.log(rotateArray([1,2,3,4,5,6], 8))
