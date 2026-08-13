const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter numbers separated by commas: ", (answer) => {
    const nums = answer.split(',').map(Number);
    console.log("Sorted:", selectionSort(nums));
    rl.close();
});




function  selectionSort(nums) {
        let n = nums.length;
        for(let i = 0 ; i <= n-2 ; i++)
        {
            let mini  = i;
            for(let j = i ; j <= n-1 ; j++){
                if(nums[j]< nums[mini]){
                    mini = j;
                }
            }
            let temp = nums[mini];
            nums[mini] = nums[i];
            nums[i] =  temp;
        }
        return nums
    }

