import java.util.Scanner;

public class Calculator {
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // Take inputs form user till user does not press X or x
        
        int ans = 0;
        while (true) {
            // Take operater as input
            System.err.println("Enter the operator");
            char op = in.next().trim().charAt(0);
            System.out.println();
            if ( op == '+' || op == '-' || op == '*' || op == '/' || op == '%' ){
                // input 2 numbers
                System.err.println("Enter Two numbers");

                int num1 = in.nextInt(); 
                int num2 = in.nextInt();
                System.err.println();

                if(op == '+'){
                    ans = num1 + num2;
                }else if (op == '-') {
                    ans = num1 + num2;
                }else if (op == '*') {
                    ans = num1 * num2;
                }else if (op == '/') {
                    if (num2 != 0) {
                        ans = num1 / num2;
                    }
                }else if (op == '%') {
                    ans = num1 % num2;
                }else if (op == 'X' || op == 'x') {
                    break ;
                }else{
                    System.out.println("Invaild operations");
                }
            }
            System.out.println(ans);
        }
    }
}
