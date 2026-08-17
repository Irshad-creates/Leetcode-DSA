function moveZeroes(nums) {


    // brute force
        // {
        //     let temp =[]
        //     let count = 0;
        //     // step 1 gathering non zero in temp
        //     for(let i=0; i<nums.length ; i++){
        //        if(nums[i]!=0){
        //             temp[count]= nums[i];
        //             count++;
        //         }
        //     }

        //     // 2 adding all the non zero in fornt of nums
        //     for(let i = 0; i <temp.length; i++){
        //         nums[i] = temp[i];
        //     }

        //     // filling the remaining space with zero
        //     for(let i = temp.length ; i < nums.length; i++ ){
        //         nums[i] = 0;
        //     }
        //     return nums
        // }


        // optimal

        let j = -1
        
        // step 1 to let the j be arrays first zero 
        for(let i = 0; i<nums.length; i++){
            if(nums[i]==0){
                j = i
                break;
            }
        }
        // if j remain unchanged the array doesnt have 0 so return array
        if(j === -1) return nums; //[1,2,0,1,0,1]

        // loop to run the i at j+1 and whenever the i hits a non zero it swaps with j's 0 and j++ 
        for(let i = j+1; i<nums.length ;i++){
            if(nums[i]!=0){
                let temp =  nums[j]
                nums[j] = nums[i]
                nums[i]= temp
                j++
            }
        }
        return nums
    }
console.log(moveZeroes([0,0,0,1,2,0,5,0,3,]))
