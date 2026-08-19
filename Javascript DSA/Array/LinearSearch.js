function linearSearch(nums, target) {
        // Your code goes here
        for(let i = 0 ; i < nums.length ; i++){
            if(nums[i]==target){
               return  i
            }
            
        }
        return -1
    }

    console.log(linearSearch([0,1,2,2,5,0,3,],2))