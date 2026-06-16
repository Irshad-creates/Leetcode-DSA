import java.util.Scanner;

public class FindBiggestNumber{
    public static void main(String[] args){

        // Q- find the biggest number in 3 inputs

        Scanner sc =  new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        
        int max = a;

        if(b>a){
            max = b;
        }else if(c > b){
            max = c;
        }

        System.out.println("The maximum number is "+ max);
    }
}