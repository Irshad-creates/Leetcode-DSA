    public class armStrongNumber {
    public static void main(String[] args) {
        // Scanner in = new Scanner(System.in);
        // int n = in.nextInt();

        // boolean ans = isArmstrong(n);
        // System.out.println(isArmstrong(n));

        for(int i = 1 ; i < 10000 ; i++){
            if(isArmstrong
                (i)){
                System.out.println(i);
            }
        }
        
    }

    static boolean isArmstrong(int n){
        int original = n ;
        int digits = String.valueOf(n).length();
        int sum = 0;
        while (n > 0){
            int rem = n % 10;
            n = n / 10;
            sum += (int) Math.pow(rem, digits) ;
        }
        return original == sum ;
    } 


    
}
