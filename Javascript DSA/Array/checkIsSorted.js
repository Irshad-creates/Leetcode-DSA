function isSorted(nums) {
        //your code goes here

        for( let i = 1; i < nums.length; i++){
            if(nums[i] >= nums[i-1]){
                
            }else{
                return false
            }
        }
        return true
    }

    console.log(isSorted([1,9,6,8,5,4,0]));
    