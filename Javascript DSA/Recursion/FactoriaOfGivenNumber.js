
function    factorial(n, count = n, fact = 1) {
        
        
        if(count < 1 ){
            return fact;
        }
        fact *= count;
        return this.factorial(n, count -1, fact )

    }
