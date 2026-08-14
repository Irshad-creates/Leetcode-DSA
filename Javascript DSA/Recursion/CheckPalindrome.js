function palindromeCheck(s, n = s.length, i = 0) {
     
    if(i >= n/2 ) return true
    if(s[i] != s[n -i -1]) return false;
        
    return this.palindromeCheck(s , n, i + 1)
    }