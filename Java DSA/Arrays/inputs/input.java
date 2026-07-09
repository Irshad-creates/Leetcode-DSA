package inputs;

import java.util.Arrays;
import java.util.Scanner;

public class input {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);


        // manually

        int[]num = new int[5];
        num[0]=17;
        num[1]=1245;
        num[2]=12;
        num[3]=125;
        num[4]=112;

        System.out.println(num[3]);

        // foreach loop


        int[] arr = new int[6];
        

        for(int n : arr){
            arr[n] = in.nextInt();
            // System.out.println(n);
        }
    
    
    // toString method

        System.out.println(Arrays.toString(arr));
    
    }

}
