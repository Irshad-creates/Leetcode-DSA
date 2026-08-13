const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter numbers separated by commas: ", (answer) => {
    const nums = answer.split(',').map(Number);
    console.log("Sorted:", bubbleSort(nums));
    rl.close();
});


function 
    bubbleSort(nums) {
        let n= nums.length;
        for(let i  = n-1 ; i >= 0;i--)
        {
            for(let j = 0 ; j <= i -1 ; j++){
                if(nums[j] > nums[j + 1]){
                    let temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp
                }
            }
        }
        return nums
    }
