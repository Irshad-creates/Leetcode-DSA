function isSorted(nums) {
        //your code goes here

        for( let i = 1; i < nums.length - 1; i++){
            if(nums[i] >= nums[i-1]){
                
            }else{
                return false
            }
        }
        return true
    }

    console.log();
    