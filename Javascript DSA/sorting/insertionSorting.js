const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter numbers separated by commas: ", (answer) => {
    const nums = answer.split(',').map(Number);
    console.log("Sorted:", insertionSort(nums));
    rl.close();
});


function  insertionSort(nums) {
        let n = nums.length;
        for(let i = 0 ; i <= n-1 ; i++)
        { let j = i ;

            while(j > 0 && nums[j - 1] > nums[j]){
                let temp = nums[j - 1]
                nums[j - 1] = nums[j]
                nums[j] =  temp

                j--;
            }
        }
        return nums
    }
