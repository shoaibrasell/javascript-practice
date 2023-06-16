public class StringExample {
    public static void main(String[] args) {
        String str = "Hello, World!";
        
        // get the length of the string
        int length = str.length();
        System.out.println("The length of the string is: " + length);
        
        // check if the string contains a substring
        boolean contains = str.contains("World");
        System.out.println("The string contains 'World': " + contains);
        
        // get a substring
        String substring = str.substring(7);
        System.out.println("The substring is: " + substring);
    }
}
