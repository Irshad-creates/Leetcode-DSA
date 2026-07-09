public class array {
    public static void main(String[] args) {
        int[] num; // declaration of array .n um is getting defined in the stack

        num =  new int[5]; //initialisation : actually here the object is being created in the memory (Heap).

        // System.out.println(num[1]);

        //String
        String[] str = new String[4];
        System.out.println(str[1]);
    }
}
