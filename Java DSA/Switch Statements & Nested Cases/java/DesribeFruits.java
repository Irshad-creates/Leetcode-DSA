import java.util.Scanner;

public class DesribeFruits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String fruit = sc.next();

        switch (fruit) {
            case "Mango":
                System.out.println("King of Fruits");
                break;
            
            case "Apple":
                System.out.println("Healer of Fruits");
                break;
            
            case "Orange":
                System.out.println("Lemon of Fruits");
                break;

            case "Grapes":
                System.out.println("Small Fruit");
                break;
            default:
                System.out.println("Please Enter a vaild fruit");
        }
        
    }
}
