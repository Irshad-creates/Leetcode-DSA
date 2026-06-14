// loops and conditions 

public class Main{
    public static void main(String[] args){
        int salary = 3000;
        
        
        // if(salary>10000){
        //     salary += 1000;
        // }else{
        //     salary+=2000;
        // }
        

        //multi if conditions i.e else if
        if(salary>10000){
            salary+=1000;
        }else if(salary>5000){
            salary += 2000;
        }else {
            salary+=5000
        };

        System.out.println(salary);
    } 
}