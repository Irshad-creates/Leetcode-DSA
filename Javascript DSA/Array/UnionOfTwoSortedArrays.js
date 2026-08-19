function unionArray(nums1, nums2) {
        let i=0
        let j=0
        let n1 = nums1.length
        let n2 = nums2.length
        let union = []
        let count = 0


        // will check if the nums1 element is same as union's last element and also for nums2 untill they both are less then i , j respectfully.
        while( i < n1 && j < n2){
            if(nums1[i] <= nums2[j]){
                if(union.length == 0 || union[count-1] != nums1[i] ){
                    union.push(nums1[i])
                    count++
                }
                i++
            }else {
                if(union.length == 0 ||  union[count-1] != nums2[j]){
                    union.push(nums2[j])
                    count++
                }
                j++
            }
        }
        // if nums1 got end , nums2 will be ittrated 
        while(j < n2){
            if(union.length == 0 ||  union[count-1] != nums2[j]){
                union.push(nums2[j])
                count++
            }
            j++
        }

        // if nums2 got end ,nums1  will be ittrated 
        while(i < n1){
            if(union.length == 0 || union[count-1] != nums1[i] ){
                union.push(nums1[i])
                count++
            }
            i++
        }
        return union
    }

console.log(unionArray([1,2,3,4,5],[0,1,2,6,7]))