import java.util.Scanner;

public class NestedSwitchStatements {

    public static void main(String[] args) {
        Scanner sc =  new Scanner(System.in);
        int empId = sc.nextInt();
        String Department = sc.next();

        switch (empId) {
            case 1:
                System.out.println("Irshad ansari");
                break;
            case 2:
                System.out.println("Aman pal");
                break;
            case 3:
                System.out.println("Anshu kharwar");
                break;
            case 4:
                System.out.println("emp Number 4");
                
                switch (Department) {
                    case "IT":
                        System.out.println("IT Department");
                        break;
                    case "Management" :
                        System.out.println("Management Department");
                    break;
                    default :
                        System.out.println("No Department Entered"); 
                }
                break;
            default:
                System.out.println("Enter vaild empId");
        }
    }
}
