 function   NnumbersSum(N, count = N,sum = 0) {
        if(count <1){
            return sum
        }
        sum += count
        return this.NnumbersSum(n, count - 1, sum)
    }