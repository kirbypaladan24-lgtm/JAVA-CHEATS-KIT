/* ===================================================================
   Java Cheats — cheats.js
   All topic data lives here. Add a topic = add one key to `cheats`.
   Each topic: { title, category, description, syntax, parameters,
                 returnValue, methods[], example, output, commonMistakes[],
                 cpp, related[] }
   =================================================================== */

const cheats = {
  /* ============================================================ HOME */
  home: {
    title: "Java Cheats",
    category: "Home",
    description: "A fast, searchable single-page Java reference. Every topic follows the same layout — description, syntax, parameters, example, output, common mistakes, and the C++ equivalent. Click any topic in the sidebar or search to jump instantly.",
    isHome: true,
  },

  /* ============================================================ BASICS */
  "java-basics": {
    beginnerExplanation: `Think of Java like a recipe book for a computer. Just like a recipe tells you step-by-step how to bake a cake, a Java program tells the computer step-by-step how to do a task. The 'class' is like the recipe card itself, and 'main' is the first instruction the computer reads — like 'Step 1: Preheat the oven.' When you run the program, the computer follows those instructions exactly, one by one, and shows you the result on the screen. That's all programming really is: writing instructions a computer can follow.

Why does it matter? Every app on your phone, every website, every video game — they all started as instructions like these. Java is special because you write it once, and it can run on any device: Windows, Mac, Linux, Android. That's why it's one of the most popular programming languages in the world.`,
    methods: [
      "public class Name { ... } — declares a class (the recipe card)",
      "public static void main(String[] args) — the entry point (Step 1)",
      "System.out.println(msg) — prints a line of text to the screen",
      "System.out.print(msg) — prints without a newline",
      "System.getProperty(\"java.version\") — gets the Java version running",
      "// comment — text the computer ignores (for humans to read)",
    ],
    title: "Java Basics",
    category: "Basics",
    description: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It follows the Write Once, Run Anywhere (WORA) principle — compiled Java bytecode runs on any JVM without recompilation. A Java program is organized into classes, and execution begins from the main() method.",
    syntax: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
    parameters: [
      ["public", "Access modifier — the class/method is visible everywhere"],
      ["class", "Keyword used to declare a class"],
      ["static", "main() can be called without creating an instance"],
      ["void", "main() returns nothing"],
      ["String[] args", "Command-line arguments passed to the program"],
    ],
    returnValue: "A basic Java program prints output to the console. main() returns void. The JVM exits with code 0 on success.",
    example: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
        System.out.println("Java version: " + System.getProperty("java.version"));
    }
}`,
    output: `Hello, Java!
Java version: 17.0.8`,
    commonMistakes: [
      "Filename must match the public class name (Main.java for class Main).",
      "Forgetting String[] args in the main signature — JVM will not find the entry point.",
      "Using System.print() instead of System.out.print() — there is no System.print.",
    ],
    cpp: `#include <iostream>
int main() {
    std::cout << "Hello, C++!\\n";
    return 0;
}`,
    related: ["variables", "data-types", "methods", "input-output"],
  },

  "data-types": {
    beginnerExplanation: `Imagine you have different-shaped boxes for storing different things. A small box for coins, a tall box for letters, a flat box for photos. You wouldn't try to stuff a photo into a coin box — it just wouldn't fit right. Java works the same way: it has different 'boxes' (called data types) for different kinds of information.

A whole number like your age (19) goes in an 'int' box. A decimal like the price of coffee (4.50) goes in a 'double' box. A single letter like your grade ('A') goes in a 'char' box. A yes/no fact like 'is it raining?' goes in a 'boolean' box. And text like your name goes in a 'String' box. By telling Java what kind of box to use, the computer knows how much memory to set aside and what operations make sense (you can add two numbers, but you can't add two names).

Why does it matter? If Java didn't know the type, it might try to do something silly like multiply your name by your age. Types keep everything organized and prevent mistakes.`,
    methods: [
      "byte — 8-bit whole number (-128 to 127)",
      "short — 16-bit whole number",
      "int — 32-bit whole number (the default for counting)",
      "long — 64-bit whole number (for very big counts)",
      "float — 32-bit decimal (use f suffix: 3.14f)",
      "double — 64-bit decimal (the default for decimals)",
      "char — single character in single quotes ('A')",
      "boolean — true or false only",
      "String — text in double quotes (\"Hello\") — a reference type",
    ],
    title: "Data Types",
    category: "Basics",
    description: "Java is a strongly-typed language — every variable must have a declared type. There are two categories: primitive types (8 built-in value types) and reference types (objects, arrays, strings). Primitives store values directly; reference types store addresses to objects on the heap.",
    syntax: `// Primitive types
byte    b = 127;
short   s = 32767;
int     i = 1000000;
long    l = 9000000000L;
float   f = 3.14f;
double  d = 3.14159;
char    c = 'A';
boolean flag = true;

// Reference types
String  name = "Java";
int[]   arr  = {1, 2, 3};`,
    parameters: [
      ["byte", "8-bit signed integer, range -128 to 127"],
      ["short", "16-bit signed integer, range -32,768 to 32,767"],
      ["int", "32-bit signed integer, default for whole numbers"],
      ["long", "64-bit signed integer, suffix L"],
      ["float", "32-bit single-precision float, suffix f"],
      ["double", "64-bit double-precision float, default for decimals"],
      ["char", "16-bit Unicode character in single quotes"],
      ["boolean", "true or false, 1 bit logically"],
    ],
    returnValue: "Primitive variables hold the actual value. Reference variables hold a memory address pointing to the object.",
    example: `public class Main {
    public static void main(String[] args) {
        int age = 19;
        double price = 49.99;
        char grade = 'A';
        boolean isJavaFun = true;
        String lang = "Java";

        System.out.println("Age: " + age);
        System.out.println("Price: " + price);
        System.out.println("Grade: " + grade);
        System.out.println("Fun? " + isJavaFun);
        System.out.println("Language: " + lang);
    }
}`,
    output: `Age: 19
Price: 49.99
Grade: A
Fun? true
Language: Java`,
    commonMistakes: [
      "Forgetting the L suffix on long literals (long l = 9000000000; won't compile — too big for int).",
      "Forgetting the f suffix on float literals (float f = 3.14; is a compile error — 3.14 is double).",
      "Using double quotes for a char (\"A\" is a String, 'A' is a char).",
    ],
    cpp: `int age = 19;
double price = 49.99;
char grade = 'A';
bool isJavaFun = true;
std::string lang = "Java";`,
    related: ["variables", "operators", "java-basics"],
  },

  variables: {
    beginnerExplanation: `A variable is just a labeled box where you store something so you can use it later. Think of it like a kitchen jar labeled 'SUGAR' — when you need sugar, you reach for the jar. If you change what's inside (refill with brown sugar), the label stays the same but the contents changed.

In Java, you create a variable in one line: you say what type of thing it holds (the jar shape), give it a name (the label), and optionally put something inside right away. For example: 'int age = 19;' means 'make a number jar, label it age, put 19 inside.' Later you can read age, change it (age = 20), or use it in calculations (age + 1).

There are three kinds: local variables live inside a single method and disappear when the method ends; instance variables live inside an object and each object has its own copy; static variables belong to the whole class and are shared by everyone. The 'final' keyword makes a variable a permanent label — once you fill it, you can never change it, like engraving the jar's contents.`,
    methods: [
      "type name = value; — declare and initialize (int age = 19;)",
      "type name; — declare without a value (must assign before use)",
      "type a, b, c; — declare multiple variables of the same type",
      "final type NAME = value; — a constant that can't be changed",
      "static type name; — shared across all instances of the class",
      "var name = value; — let Java figure out the type (Java 10+)",
    ],
    title: "Variables",
    category: "Basics",
    description: "A variable is a named memory location used to store data. Java has three kinds of variables: local (declared inside methods), instance (declared in a class, outside methods — each object gets its own copy), and static (declared with static — shared across all instances of the class). Variables must be declared with a type before use.",
    syntax: `// Declaration
type variableName;

// Declaration + initialization
type variableName = value;

// Multiple variables of same type
int a, b, c;

// Instance variable
public class Player {
    int score;          // instance — per-object
    static int count;   // static  — shared
}

// Local variable
public void play() {
    int level = 1;      // local — must init before use
}`,
    parameters: [
      ["type", "Primitive (int, double…) or reference (String, int[]…)"],
      ["variableName", "Identifier — starts with letter/underscore/$, camelCase by convention"],
      ["value", "Initial value, must be assignment-compatible with type"],
      ["final", "Keyword to make a variable a constant — can only be assigned once"],
    ],
    returnValue: "A variable holds a value of its declared type. Reading an uninitialized local variable is a compile error; instance/static fields default to 0, 0.0, false, or null.",
    example: `public class Main {
    static int totalPlayers = 0;   // static
    int id;                        // instance, defaults to 0

    public static void main(String[] args) {
        int level = 1;             // local
        final double PI = 3.14159; // constant

        Main a = new Main();
        Main b = new Main();
        a.id = 101;
        b.id = 102;
        Main.totalPlayers = 2;

        System.out.println("Player A id: " + a.id);
        System.out.println("Player B id: " + b.id);
        System.out.println("Total: " + Main.totalPlayers);
        System.out.println("PI = " + PI);
    }
}`,
    output: `Player A id: 101
Player B id: 102
Total: 2
PI = 3.14159`,
    commonMistakes: [
      "Using a local variable before assigning it — Java requires definite assignment.",
      "Trying to reassign a final variable — compile error.",
      "Naming a variable with a reserved word like class, int, or new.",
    ],
    cpp: `int level = 1;
const double PI = 3.14159;
static int totalPlayers = 0; // inside a class`,
    related: ["data-types", "operators", "methods"],
  },

  operators: {
    beginnerExplanation: `Operators are like the verbs of Java — they DO things to values. Just like in math class, '+' adds, '-' subtracts, '*' multiplies, '/' divides. But Java has extra verbs too: '==' asks 'are these equal?' (returns true or false), '&&' means 'and' (both must be true), '||' means 'or' (either can be true), and '!' means 'not' (flips true to false).

Here's a real-life analogy: imagine you're ordering pizza. 'price + tax' uses the + operator to get the total. 'slices > 0' uses > to check if there's still pizza left. 'hasCheese && hasPepperoni' uses && to check if you want both toppings. '!isVegetarian' uses ! to mean 'NOT vegetarian.' The ternary operator 'condition ? A : B' is like a quick either/or choice: 'hungry ? eat : wait' means 'if hungry, eat; otherwise wait.'

Why does it matter? Without operators, you couldn't do any math, make any decisions, or compare anything. They're the action words that make programs actually do work instead of just storing data.`,
    methods: [
      "+ - * / % — arithmetic (add, subtract, multiply, divide, remainder)",
      "++ -- — increment/decrement by 1 (x++ or ++x)",
      "== != > < >= <= — comparison (equal, not-equal, greater, less)",
      "&& || ! — logical AND, OR, NOT",
      "& | ^ ~ << >> >>> — bitwise (rarely used by beginners)",
      "= += -= *= /= %= — assignment (x += 5 means x = x + 5)",
      "condition ? a : b — ternary (if-then-else in one line)",
    ],
    title: "Operators",
    category: "Basics",
    description: "Operators are special symbols that perform operations on one, two, or three operands. Java groups them into: arithmetic, relational, logical, bitwise, assignment, unary, and ternary. Operators have precedence and associativity — multiplication binds tighter than addition, && binds tighter than ||, and parentheses override everything.",
    syntax: `// Arithmetic
a + b    a - b    a * b    a / b    a % b
a++      ++a      a--      --a

// Relational
a == b   a != b   a > b    a < b    a >= b   a <= b

// Logical
a && b   a || b   !a

// Bitwise
a & b    a | b    a ^ b    ~a   a << n   a >> n   a >>> n

// Assignment
=  +=  -=  *=  /=  %=  &=  |=  ^=  <<=  >>=

// Ternary
condition ? valueIfTrue : valueIfFalse`,
    parameters: [
      ["% (modulo)", "Remainder of integer division, e.g. 10 % 3 == 1"],
      ["&& (short-circuit AND)", "Evaluates right side only if left is true"],
      ["|| (short-circuit OR)", "Evaluates right side only if left is false"],
      ["++x vs x++", "Pre-increment returns new value; post-increment returns old value"],
      [">>> (unsigned shift)", "Shifts right and fills with zeros (no sign extension)"],
      ["?: (ternary)", "If condition is true, returns first value, otherwise second"],
    ],
    returnValue: "Arithmetic operators return numeric values. Relational and logical operators return boolean. The ternary returns one of two values based on the condition.",
    example: `public class Main {
    public static void main(String[] args) {
        int a = 10, b = 3;

        System.out.println("a + b = " + (a + b));
        System.out.println("a / b = " + (a / b));     // integer division
        System.out.println("a % b = " + (a % b));     // remainder

        boolean adult = a >= 18;
        System.out.println("Adult? " + adult);

        String mood = (a > b) ? "happy" : "sad";
        System.out.println("Mood: " + mood);

        int x = 5;
        System.out.println("x++ : " + (x++));  // prints 5, x becomes 6
        System.out.println("++x : " + (++x));  // x becomes 7, prints 7
    }
}`,
    output: `a + b = 13
a / b = 3
a % b = 1
Adult? false
Mood: happy
x++ : 5
++x : 7`,
    commonMistakes: [
      "Using = (assignment) instead of == (comparison) inside if conditions.",
      "Integer division: 5 / 2 gives 2, not 2.5 — cast one operand to double first.",
      "Chaining ternaries without parentheses — a ? b : c ? d : e is legal but unreadable.",
    ],
    cpp: `int sum = a + b;
bool adult = a >= 18;
std::string mood = (a > b) ? "happy" : "sad";`,
    related: ["data-types", "conditionals", "loops"],
  },

  "input-output": {
    beginnerExplanation: `Input is how a program listens to you (like you typing on the keyboard), and output is how a program talks back to you (like text appearing on the screen). Without input and output, a program would be like a person who can't hear or speak — it couldn't interact with anyone.

Think of a calculator app. You tap numbers and operators (that's INPUT — the program is listening to your taps). The program does some math, then shows the answer on the display (that's OUTPUT — the program is talking back to you). In Java, 'System.out.println' is how the program speaks (it prints a line of text), and 'Scanner' is how the program listens (it reads what you type). There's also 'System.err' for error messages — like the program raising its voice to say something went wrong.

Why does it matter? Every useful program needs input (to know what you want) and output (to give you the result). Even a video game is just: input from your controller → the game logic → output on your screen.`,
    methods: [
      "System.out.print(msg) — print text without a newline",
      "System.out.println(msg) — print text and move to the next line",
      "System.out.printf(format, args...) — print with formatting",
      "System.err.print(msg) — print to the error stream (often red text)",
      "System.in — the standard input stream (keyboard) — usually wrapped in Scanner",
      "Scanner.nextLine() — read a whole line the user typed",
      "Scanner.nextInt() — read a whole number the user typed",
      "BufferedReader.readLine() — faster line reading (alternative to Scanner)",
    ],
    title: "Input & Output",
    category: "Basics",
    description: "Input and output in Java go through the standard streams: System.in (keyboard), System.out (console, normal), and System.err (console, error). For input, Scanner is the simplest choice; for output, System.out.print / println / printf. Java also supports BufferedReader for high-performance line reading and BufferedWriter / PrintWriter for fast output.",
    syntax: `// Output
System.out.print("no newline");
System.out.println("with newline");
System.out.printf("pi = %.2f%n", 3.14159);

// Input (Scanner)
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();

// Input (BufferedReader — faster)
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
String line = br.readLine();`,
    parameters: [
      ["System.out", "Standard PrintStream for normal output"],
      ["System.err", "Standard PrintStream for error output"],
      ["System.in", "Standard InputStream (keyboard)"],
      ["print()", "Print without trailing newline"],
      ["println()", "Print and append a newline"],
      ["printf()/format()", "Print with format specifiers (%d %f %s %n)"],
    ],
    returnValue: "print/println/printf return void. Scanner.nextInt() etc. return the typed value. BufferedReader.readLine() returns a String (or null at end of stream).",
    example: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Name: ");
        String name = sc.nextLine();

        System.out.print("Age: ");
        int age = sc.nextInt();

        System.out.printf("Hi %s, you are %d years old.%n", name, age);
        System.out.println("Next year: " + (age + 1));
    }
}`,
    output: `Name: Ana
Age: 19
Hi Ana, you are 19 years old.
Next year: 20`,
    commonMistakes: [
      "Forgetting to flush System.out when mixing with System.err — output order can look scrambled.",
      "Calling nextInt() then nextLine() and getting an empty string — see Scanner topic.",
      "Not closing Scanner tied to System.in — closing it closes System.in for the rest of the program.",
    ],
    cpp: `#include <iostream>
std::string name;
int age;
std::cin >> name >> age;
std::cout << "Hi " << name << ", " << age << "\\n";`,
    related: ["scanner", "printf", "strings"],
  },

  scanner: {
    beginnerExplanation: `Scanner is Java's way of listening to what you type. Imagine a waitress taking your order at a restaurant — she listens, writes down what you say, and hands it to the kitchen. Scanner does the same for your program: it listens to the keyboard (or a file, or any text), breaks what you typed into pieces (words, numbers), and hands them to your program one at a time.

Here's the catch: Scanner reads tokens separated by whitespace (spaces, tabs, newlines). 'nextInt()' reads the next number, 'next()' reads the next single word, 'nextLine()' reads everything up to the next Enter. The famous beginner trap: if you call 'nextInt()' followed by 'nextLine()', the nextLine() returns an empty string — because nextInt() leaves the Enter key in the input buffer, and nextLine() consumes it immediately. The fix is to call an extra 'nextLine()' to 'flush' the leftover Enter before reading the real line.

Why does it matter? Scanner is the simplest way to make your programs interactive — you ask the user a question, they type an answer, your program responds. It's how every beginner program gets input.`,
    title: "Scanner",
    category: "Basics",
    description: "Scanner (java.util.Scanner) is a simple text parser that breaks input into tokens using a delimiter (whitespace by default). It can read from System.in, a file, or a String. It provides type-specific methods like nextInt(), nextDouble(), nextBoolean(), next() for a single word, and nextLine() for the rest of the current line.",
    syntax: `Scanner scanner = new Scanner(System.in);

int     n = scanner.nextInt();
double  d = scanner.nextDouble();
boolean b = scanner.nextBoolean();
String  word = scanner.next();
String  line = scanner.nextLine();
char    ch   = scanner.next().charAt(0);`,
    methods: [
      "nextInt() — reads next token as int",
      "nextDouble() — reads next token as double",
      "nextBoolean() — reads next token as boolean",
      "next() — reads next token as String (up to whitespace)",
      "nextLine() — reads the rest of the current line",
      "next().charAt(0) — reads a single char",
      "hasNextInt() — returns true if next token is an int",
      "useDelimiter(String) — changes the token separator",
      "close() — closes the underlying stream",
    ],
    parameters: [
      ["source", "InputStream, File, Path, or String to read from"],
      ["delimiter", "Regex used to separate tokens, default is \\s+"],
    ],
    returnValue: "next*() methods return the parsed value. hasNext*() return boolean. nextLine() returns the rest of the current line, including spaces, ending at the newline.",
    example: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Age: ");
        int age = scanner.nextInt();

        // clear the leftover newline before reading a line
        scanner.nextLine();

        System.out.print("Full name: ");
        String name = scanner.nextLine();

        System.out.print("Grade: ");
        char grade = scanner.next().charAt(0);

        System.out.printf("Age=%d, Name=%s, Grade=%c%n", age, name, grade);
    }
}`,
    output: `Age: 19
Full name: Ana Cruz
Grade: A
Age=19, Name=Ana Cruz, Grade=A`,
    commonMistakes: [
      "Using nextInt() then nextLine() without clearing the newline — nextLine() returns an empty string because it consumes the leftover \\n.",
      "Calling scanner.close() on a Scanner wrapping System.in — closes System.in for the whole program.",
      "Forgetting that next() stops at whitespace — use nextLine() to read a full sentence.",
    ],
    cpp: `#include <iostream>
#include <string>
int age;
std::cin >> age;
std::cin.ignore();
std::string name;
std::getline(std::cin, name);
char grade;
std::cin >> grade;`,
    related: ["input-output", "printf", "strings"],
  },

  printf: {
    beginnerExplanation: `Printf stands for 'print formatted' — it's like filling in a form letter. Imagine you have a template that says 'Hello, [NAME]! You are [AGE] years old.' Instead of manually gluing the words together, you write the template with placeholders and tell Java what to fill in.

The placeholders are called 'format specifiers' and they start with %. '%d' means 'put a whole number here,' '%f' means 'put a decimal here,' '%s' means 'put text here.' So 'System.out.printf("Hello, %s! You are %d.", name, age)' fills in the name and age automatically. You can also control how things look: '%.2f' means 'show this decimal with exactly 2 digits after the dot' (so 3.14159 becomes 3.14), and '%10d' means 'reserve 10 spaces for this number' (right-aligned).

Why does it matter? When you want to show numbers nicely (like prices with 2 decimals, or a table where everything lines up), printf is much easier than gluing strings together with +. It's the difference between a messy handwritten note and a neatly printed form.`,
    methods: [
      "printf(format, args...) — prints formatted text (no newline)",
      "String.format(format, args...) — builds a formatted String without printing",
      "%d — placeholder for a whole number (int, long)",
      "%f — placeholder for a decimal (float, double)",
      "%s — placeholder for text (String)",
      "%c — placeholder for a single character",
      "%b — placeholder for true/false (boolean)",
      "%n — platform-correct newline (use instead of \\n)",
      "%.2f — decimal with 2 digits after the dot",
      "%10d — right-align number in a 10-character field",
      "%-10s — left-align text in a 10-character field",
      "%05d — pad number with zeros (00042)",
    ],
    title: "printf",
    category: "Basics",
    description: "System.out.printf (and the equivalent format()) prints formatted text using format specifiers. Each specifier starts with % and ends with a conversion character — %d for integers, %f for decimals, %s for strings, %c for chars, %b for booleans, %n for a platform-independent newline. You can control width, precision, alignment, and padding.",
    syntax: `System.out.printf(format, arg1, arg2, ...);

// Common specifiers
%d   integer
%f   floating-point
%s   string
%c   character
%b   boolean
%n   newline (platform-independent)
%%   literal percent

// Flags & width
%5d       right-align in width 5
%-5d      left-align in width 5
%05d      zero-pad to width 5
%.2f      2 decimal places
%+d       always show sign
%,d       grouping separator (1,000,000)`,
    parameters: [
      ["%d", "Decimal integer (byte, short, int, long)"],
      ["%f", "Floating-point (float, double), default 6 decimals"],
      ["%s", "String, calls toString() on the arg"],
      ["%c", "Single Unicode character"],
      ["%b", "Boolean — prints \"true\" or \"false\""],
      ["width", "Minimum field width, e.g. %8.2f reserves 8 chars, 2 decimals"],
      ["flag -", "Left-align within the field"],
      ["flag 0", "Pad with zeros (numbers only)"],
      ["flag ,", "Use grouping separators"],
    ],
    returnValue: "printf returns a PrintStream (System.out), not a String. To get a formatted String without printing, use String.format(format, args...).",
    example: `public class Main {
    public static void main(String[] args) {
        String name = "Ana";
        int age = 19;
        double gpa = 3.857;

        System.out.printf("Name: %s%n", name);
        System.out.printf("Age: %d (hex %x)%n", age, age);
        System.out.printf("GPA: %.2f%n", gpa);
        System.out.printf("Salary: $%,.2f%n", 1_250_000.0);
        System.out.printf("|%-10s|%10s|%n", "left", "right");
        System.out.printf("Padded: %05d%n", 42);

        // String.format builds a String instead of printing
        String card = String.format("[%s | %d | %.1f]", name, age, gpa);
        System.out.println(card);
    }
}`,
    output: `Name: Ana
Age: 19 (hex 13)
GPA: 3.86
Salary: $1,250,000.00
|left      |     right|
Padded: 00042
[Ana | 19 | 3.9]`,
    commonMistakes: [
      "Using \\n instead of %n — \\n works but %n is platform-correct (\\r\\n on Windows).",
      "Mismatching specifier and argument type — %d with a double throws IllegalFormatConversionException.",
      "Forgetting that %f always defaults to 6 decimals — use %.2f to round.",
    ],
    cpp: `#include <cstdio>
printf("Name: %s\\nAge: %d\\nGPA: %.2f\\n", name, age, gpa);`,
    related: ["input-output", "scanner", "strings"],
  },

  strings: {
    beginnerExplanation: `A String is just text — a sequence of characters. "Hello," "Java," "123 Main St" are all Strings. The name 'String' comes from the idea of characters 'strung together' on a thread, like beads on a necklace.

The most important thing to know: Strings in Java are IMMUTABLE — once you create one, it can never change. This sounds limiting, but it's actually a safety feature. When you call 's.toUpperCase()', it doesn't modify s — it returns a brand new String that's the uppercase version. So you must write 's = s.toUpperCase()' to update your variable. If you're building a string piece by piece in a loop (like adding one character at a time), use 'StringBuilder' instead — it's mutable and much faster.

The second most important thing: use '.equals()' to compare Strings, never '=='. The '==' operator checks if two variables point to the SAME object in memory, but two Strings with the same text might be different objects. 's1.equals(s2)' checks if they have the same characters, which is almost always what you want. This is the #1 source of beginner bugs.

Common operations: '.length()' for the character count, '.charAt(i)' for the character at position i, '.substring(start, end)' for a piece, '.toUpperCase()' / '.toLowerCase()' for case changes, '.split(regex)' to chop it into pieces, '.replace(old, new)' to swap text, '.indexOf(sub)' to find where something appears.`,
    title: "Strings",
    category: "Basics",
    description: "String (java.lang.String) represents an immutable sequence of characters. Once created, a String cannot be modified — methods like toUpperCase() return a new String. For mutable character sequences, use StringBuilder (single-threaded, faster) or StringBuffer (thread-safe, slower). Strings are reference types but support + concatenation and live in a special String pool.",
    syntax: `String s = "hello";
String s = new String("hello");

// Common operations
s.length()
s.charAt(i)
s.substring(start)
s.substring(start, end)
s.toUpperCase() / s.toLowerCase()
s.trim() / s.strip()
s.replace(old, new)
s.split(regex)
s.indexOf(sub)
s.equals(other)
s.compareTo(other)

// Mutable
StringBuilder sb = new StringBuilder();
sb.append("a").append("b").reverse();`,
    methods: [
      "length() — number of characters",
      "charAt(int) — character at index",
      "substring(int) — from index to end",
      "substring(int, int) — from start (incl.) to end (excl.)",
      "indexOf(String) — first index of substring, -1 if not found",
      "toUpperCase() / toLowerCase() — new String with changed case",
      "trim() — removes leading/trailing whitespace (ASCII ≤ U+0020)",
      "strip() — Unicode-aware trim (Java 11+)",
      "replace(CharSequence, CharSequence) — literal replacement",
      "replaceAll(regex, repl) — regex replacement",
      "split(regex) — String[] of pieces",
      "equals(Object) — value equality",
      "equalsIgnoreCase(String) — value equality ignoring case",
      "compareTo(String) — lexicographic comparison",
      "isEmpty() / isBlank() — length 0 / only whitespace",
    ],
    parameters: [
      ["index", "Zero-based character position, 0 to length()-1"],
      ["regex", "A regular expression for split/replaceAll"],
      ["start, end", "substring bounds — start inclusive, end exclusive"],
    ],
    returnValue: "Most String methods return a new String (since Strings are immutable). equals() returns boolean. compareTo() returns negative, zero, or positive int.",
    example: `public class Main {
    public static void main(String[] args) {
        String s = "  Hello, Java!  ";

        System.out.println(s.length());            // 16
        System.out.println(s.strip());             // "Hello, Java!"
        System.out.println(s.toUpperCase());       // "  HELLO, JAVA!  "
        System.out.println(s.substring(2, 7));     // "Hello"

        String[] parts = "a,b,c".split(",");
        for (String p : parts) System.out.println(p);

        // Mutable: StringBuilder for fast concatenation in loops
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 3; i++) sb.append(i);
        System.out.println(sb);                    // "012"

        // Equality: == compares references, .equals compares values
        String a = "java";
        String b = new String("java");
        System.out.println(a == b);                // false
        System.out.println(a.equals(b));           // true
    }
}`,
    output: `16
Hello, Java!
  HELLO, JAVA!
Hello
a
b
c
012
false
true`,
    commonMistakes: [
      "Using == to compare Strings — compares references, not values. Always use .equals().",
      "Calling s.replace(\"x\",\"y\") and ignoring the return value — Strings are immutable, the original is unchanged.",
      "Building strings in a loop with + — creates a new String every iteration. Use StringBuilder.",
      "Forgetting that substring end index is exclusive.",
    ],
    cpp: `#include <string>
std::string s = "hello";
s.length();
s.substr(0, 3);
s.find("ll");
s.replace(pos, len, "new");
s == "hello";`,
    related: ["input-output", "printf", "arrays", "methods"],
  },

  "math-library": {
    beginnerExplanation: `The Math class is Java's built-in calculator. You don't create a Math object — you just call its methods directly, like 'Math.sqrt(144)' or 'Math.max(3, 9)'. It's like having a scientific calculator app on your phone: you tap the function, type the number, get the answer. No setup required.

The most useful methods for beginners: 'Math.max(a, b)' and 'Math.min(a, b)' return the bigger/smaller of two numbers. 'Math.abs(x)' gives the absolute value (turns -5 into 5). 'Math.round(x)' rounds to the nearest whole number (3.7 → 4, 3.4 → 3). 'Math.pow(base, exp)' raises a number to a power (Math.pow(2, 10) = 1024). 'Math.sqrt(x)' is square root. 'Math.random()' gives a random decimal between 0.0 and 1.0.

One common gotcha: trig functions like 'Math.sin()' and 'Math.cos()' expect RADIANS, not degrees. If you want the sine of 90 degrees, you must convert first: 'Math.sin(Math.toRadians(90))'. A full circle is 360 degrees = 2π radians. The constants 'Math.PI' (3.14159...) and 'Math.E' (2.71828...) are built in for when you need them.

Why does it matter? Instead of writing your own square root or power function (which is hard), you just call Math.sqrt() and Math.pow(). The Math class is fast, tested, and always available.`,
    title: "Math Library",
    category: "Basics",
    description: "java.lang.Math is a final utility class that exposes common mathematical functions as static methods — abs, min, max, round, floor, ceil, pow, sqrt, cbrt, log, exp, sin, cos, tan, random, and constants PI and E. All methods are stateless and thread-safe. For high-precision decimal arithmetic, use BigDecimal instead of double.",
    syntax: `Math.method(args);

// Constants
Math.PI        // 3.141592653589793
Math.E         // 2.718281828459045

// Rounding & comparison
Math.abs(x)
Math.max(a, b)
Math.min(a, b)
Math.round(x)   // long, halves to +inf
Math.floor(x)   // largest int ≤ x
Math.ceil(x)    // smallest int ≥ x

// Powers & roots
Math.pow(base, exp)
Math.sqrt(x)
Math.cbrt(x)
Math.hypot(x, y)

// Log & trig
Math.log(x)     // natural log
Math.log10(x)
Math.exp(x)
Math.sin(r) Math.cos(r) Math.tan(r)

// Random
Math.random()   // double in [0.0, 1.0)`,
    methods: [
      "abs(int|long|float|double) — absolute value",
      "max(a, b) / min(a, b) — larger / smaller of two values",
      "round(double) — round to nearest long (halves go to +inf)",
      "floor(double) — largest double ≤ x, returned as double",
      "ceil(double) — smallest double ≥ x, returned as double",
      "pow(double, double) — base raised to exponent",
      "sqrt(double) — square root, NaN for negative",
      "cbrt(double) — cube root, defined for negatives",
      "hypot(double, double) — sqrt(x²+y²) without overflow",
      "log(double) / log10(double) — natural / base-10 logarithm",
      "exp(double) — e raised to power",
      "sin / cos / tan(double) — trig, argument in radians",
      "toRadians(deg) / toDegrees(rad) — angle conversion",
      "random() — double in [0.0, 1.0)",
    ],
    parameters: [
      ["x, y, a, b", "Numeric arguments (int, long, float, or double depending on method)"],
      ["r", "Angle in radians for trig functions — use toRadians(deg) first"],
    ],
    returnValue: "All Math methods return numeric values. round() returns long; floor/ceil return double; abs/max/min return the same type as the widest argument.",
    example: `public class Main {
    public static void main(String[] args) {
        System.out.println(Math.abs(-7));         // 7
        System.out.println(Math.max(3, 9));       // 9
        System.out.println(Math.min(3, 9));       // 3
        System.out.println(Math.round(3.5));      // 4
        System.out.println(Math.round(3.4));      // 3
        System.out.println(Math.floor(3.9));      // 3.0
        System.out.println(Math.ceil(3.1));       // 4.0
        System.out.println(Math.pow(2, 10));      // 1024.0
        System.out.println(Math.sqrt(144));       // 12.0
        System.out.println(Math.hypot(3, 4));     // 5.0
        System.out.println(Math.log(Math.E));     // 1.0
        System.out.println(Math.toDegrees(Math.PI)); // 180.0
        System.out.println(Math.random());        // e.g. 0.4813...
    }
}`,
    output: `7
9
3
4
3
3.0
4.0
1024.0
12.0
5.0
1.0
180.0
0.4813759 (varies)`,
    commonMistakes: [
      "Passing degrees to sin/cos/tan — they expect radians. Use Math.toRadians(deg).",
      "Using Math.round() and expecting a double — it returns long (or int for float).",
      "Trusting Math.random() for cryptography — use java.security.SecureRandom instead.",
    ],
    cpp: `#include <cmath>
std::abs(-7);
std::max(3, 9);
std::pow(2, 10);
std::sqrt(144.0);
std::sin(angle_rad);`,
    related: ["random", "data-types", "operators"],
  },

  random: {
    beginnerExplanation: `Random is Java's way of rolling dice. If you're making a game and need a random number — for damage, for a dice roll, for shuffling cards — Random generates them for you. It's like having a tiny slot machine inside your program.

There are a few ways to get random numbers. 'Math.random()' is the quickest — it returns a decimal between 0.0 and 1.0. To get a dice roll (1 to 6), you multiply and add: '(int)(Math.random() * 6) + 1'. The 'java.util.Random' class gives you more control: 'rand.nextInt(6)' gives you 0 to 5, 'rand.nextBoolean()' gives true or false, 'rand.nextDouble()' gives a decimal. For multi-threaded programs, 'ThreadLocalRandom' is faster. For security-sensitive things like passwords or tokens, use 'SecureRandom' — it's slower but unpredictable enough that attackers can't guess it.

A useful trick: if you create 'new Random(42)' with a seed number, you get the SAME sequence of random numbers every time you run the program. This is great for testing and debugging — your 'random' results become reproducible. Remove the seed for true randomness in production.

Why does it matter? Games, simulations, shuffling, sampling, password generation — all need randomness. Java gives you simple options for everyday use and secure options for crypto.`,
    title: "Random",
    category: "Basics",
    description: "Java has several ways to generate random numbers. Math.random() is the quickest — a double in [0,1). java.util.Random gives you ints, doubles, booleans, and Gaussians. For concurrent code use ThreadLocalRandom, and for security-sensitive tokens use java.security.SecureRandom. Java 17+ adds RandomGeneratorFactory for pluggable algorithms.",
    syntax: `// 1. Quickest — single double
double r = Math.random();            // [0.0, 1.0)

// 2. java.util.Random — full API
Random rand = new Random();          // optional seed
rand.nextInt(bound);                 // 0 .. bound-1
rand.nextInt();
rand.nextDouble();
rand.nextBoolean();
rand.nextGaussian();                 // mean 0, sd 1

// 3. ThreadLocalRandom — concurrent, faster
int n = ThreadLocalRandom.current().nextInt(1, 100);

// 4. SecureRandom — for crypto
SecureRandom sr = new SecureRandom();
byte[] token = new byte[16];
sr.nextBytes(token);

// 5. Java 17+ — ints() stream
rand.ints(5, 1, 100).forEach(System.out::println); // 5 ints in [1,100)`,
    methods: [
      "nextInt() — full range int",
      "nextInt(int bound) — int in [0, bound)",
      "nextLong() — full range long",
      "nextDouble() — double in [0.0, 1.0)",
      "nextBoolean() — true or false",
      "nextFloat() — float in [0.0, 1.0)",
      "nextGaussian() — double from normal(0,1)",
      "nextBytes(byte[]) — fills array with random bytes",
      "ints(size, origin, bound) — IntStream of random ints",
      "setSeed(long) — re-seeds the generator (deterministic after)",
    ],
    parameters: [
      ["bound", "Exclusive upper limit for nextInt(bound), must be > 0"],
      ["origin, bound", "Inclusive lower / exclusive upper for ints(streamSize, origin, bound)"],
      ["seed", "Initial seed — same seed gives same sequence (useful for testing)"],
    ],
    returnValue: "next*() methods return a primitive value of the corresponding type. ints/longs/doubles return a stream.",
    example: `import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class Main {
    public static void main(String[] args) {
        Random rand = new Random(42);     // seeded → reproducible

        System.out.println(rand.nextInt(100));     // 0..99
        System.out.println(rand.nextDouble());
        System.out.println(rand.nextBoolean());

        // Dice roll 1..6
        int dice = ThreadLocalRandom.current().nextInt(1, 7);
        System.out.println("Dice: " + dice);

        // Pick a random element from an array
        String[] names = {"Ana", "Bob", "Cy"};
        String pick = names[rand.nextInt(names.length)];
        System.out.println("Pick: " + pick);
    }
}`,
    output: `30
0.7275635815257243
true
Dice: 4
Pick: Cy`,
    commonMistakes: [
      "Calling new Random() repeatedly in a tight loop — it reseeds from time and can collide. Reuse one instance.",
      "Forgetting nextInt(bound) is exclusive — nextInt(6) gives 0–5, not 0–6.",
      "Using java.util.Random for tokens/passwords — use SecureRandom instead.",
    ],
    cpp: `#include <random>
std::mt19937 rng(42);
std::uniform_int_distribution<int> dist(1, 6);
int dice = dist(rng);`,
    related: ["math-library", "arrays", "loops"],
  },

  arrays: {
    beginnerExplanation: `An array is a numbered list of values, all of the same type, with a fixed size. Think of it like a row of mailboxes: they're all the same shape, they're numbered 0, 1, 2, 3..., and you can put one thing in each. Once you build the row, you can't add or remove mailboxes — the size is fixed. (If you need a resizable list, use ArrayList instead.)

The numbering starts at ZERO, not one. This trips up every beginner. The first element is at index 0, the second at index 1, the tenth at index 9. If your array has 5 elements and you try to read index 5, Java throws 'ArrayIndexOutOfBoundsException' — there is no mailbox #5 in a 5-mailbox row (the valid indices are 0, 1, 2, 3, 4).

You create an array with 'new int[5]' (5 zeros) or with a literal '{1, 2, 3}'. You read and write with brackets: 'arr[0] = 42;' sets the first element, 'int x = arr[0];' reads it. The length is a field, not a method: 'arr.length' (no parentheses). The 'Arrays' utility class gives you handy operations: 'Arrays.sort(arr)' sorts in place, 'Arrays.toString(arr)' gives a readable string like '[1, 2, 3]', 'Arrays.copyOf(arr, n)' makes a copy.

Why does it matter? Arrays are the simplest, fastest way to store a fixed collection of values. They're the foundation that ArrayList and other collections are built on.`,
    title: "Arrays",
    category: "Basics",
    description: "An array is a fixed-size, indexed, homogeneous container of values. Once created, its length cannot change. Elements are accessed by zero-based index in O(1). For resizable arrays, use ArrayList. The java.util.Arrays utility class provides sort, binarySearch, fill, copyOf, equals, toString, and asList.",
    syntax: `// Declaration
int[] a;                 // preferred
int a[];                 // C-style, allowed

// Creation
int[] a = new int[5];                // all zeros
int[] a = {1, 2, 3, 4, 5};           // literal
int[] a = new int[]{1, 2, 3};        // explicit

// Access
a[0] = 10;
int x = a[0];
int len = a.length;                  // field, not method

// Multi-dimensional
int[][] grid = new int[3][4];
int[][] jagged = {{1}, {2,3}, {4,5,6}};

// Utilities
Arrays.sort(a);
Arrays.fill(a, 0);
int[] copy = Arrays.copyOf(a, a.length);
int idx = Arrays.binarySearch(a, 3);
System.out.println(Arrays.toString(a));`,
    methods: [
      "length (field) — fixed size of the array",
      "Arrays.sort(arr) — in-place sort (dual-pivot quicksort for primitives)",
      "Arrays.binarySearch(arr, key) — index of key in a sorted array, else negative",
      "Arrays.fill(arr, val) — fills every element with val",
      "Arrays.copyOf(arr, newLen) — new array, truncated/padded with zeros",
      "Arrays.copyOfRange(arr, from, to) — sub-array copy",
      "Arrays.equals(a, b) — true if same length and elements",
      "Arrays.toString(arr) — readable form like [1, 2, 3]",
      "Arrays.deepToString(arr2d) — for nested arrays",
      "Arrays.asList(arr) — fixed-size List backed by the array",
    ],
    parameters: [
      ["index", "Zero-based int in [0, length-1]. Out of bounds → ArrayIndexOutOfBoundsException"],
      ["from, to", "copyOfRange bounds — from inclusive, to exclusive"],
      ["key", "Value to search for in binarySearch (array must be sorted)"],
    ],
    returnValue: "a[i] returns the element at index i. length is an int field. Arrays.* methods return new arrays or ints as documented. Array access is O(1); sort is O(n log n).",
    example: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] scores = {88, 72, 95, 60, 81};

        System.out.println("Length: " + scores.length);
        System.out.println("First: " + scores[0]);

        Arrays.sort(scores);
        System.out.println("Sorted: " + Arrays.toString(scores));

        int idx = Arrays.binarySearch(scores, 81);
        System.out.println("Index of 81: " + idx);

        int[] top3 = Arrays.copyOfRange(scores, scores.length - 3, scores.length);
        System.out.println("Top 3: " + Arrays.toString(top3));

        // 2D array
        int[][] grid = {{1, 2}, {3, 4}};
        System.out.println(Arrays.deepToString(grid));

        // Enhanced for loop
        int sum = 0;
        for (int s : scores) sum += s;
        System.out.println("Sum: " + sum);
    }
}`,
    output: `Length: 5
First: 88
Sorted: [60, 72, 81, 88, 95]
Index of 81: 2
Top 3: [81, 88, 95]
[[1, 2], [3, 4]]
Sum: 396`,
    commonMistakes: [
      "Using a.length() — length is a field on arrays, not a method. Use a.length.",
      "Accessing a[a.length] — off-by-one. Last valid index is a.length - 1.",
      "Expecting Arrays.asList(arr) of an int[] to give List<Integer> — it gives List<int[]> of size 1. Use Ints or stream(arr).boxed().collect(...).",
    ],
    cpp: `int scores[5] = {88, 72, 95, 60, 81};
int len = sizeof(scores)/sizeof(scores[0]);
std::sort(scores, scores + len);`,
    related: ["loops", "collections", "methods", "generics"],
  },

  methods: {
    beginnerExplanation: `A method is a named recipe inside your program. Instead of writing the same steps over and over every time you need them, you write them once, give them a name, and then just call that name whenever you want those steps to happen. It's like teaching someone to make coffee: you show them once, name it 'makeCoffee,' and from then on you just say 'makeCoffee' instead of listing every step.

A method can take inputs (called parameters) — like saying 'makeCoffee with 2 sugars' — and it can give back an output (called a return value) — like handing you the finished cup. Some methods do something but don't hand anything back (these are 'void' methods, like 'cleanTheKitchen'). Java also lets you have multiple methods with the same name as long as they take different inputs — this is called 'overloading.' So 'makeCoffee()' makes a default coffee, and 'makeCoffee(int sugars)' makes one with a specific amount of sugar.

Why does it matter? Methods let you organize your program into reusable chunks. Without them, every program would be one giant list of instructions, and you'd have to copy-paste the same steps everywhere. Methods make code shorter, cleaner, and easier to fix when something breaks.`,
    methods: [
      "returnType name(params) { body } — declare a method",
      "return value; — send a value back to the caller (for non-void methods)",
      "name(args) — call a method",
      "void name(params) — a method that does something but returns nothing",
      "static returnType name(params) — a method that belongs to the class, not an instance",
      "type... name — varargs: accept any number of arguments (treated as an array inside)",
      "@Override — annotation marking that this replaces a parent class's method",
      "overloading — same method name, different parameter lists",
    ],
    title: "Methods",
    category: "Basics",
    description: "A method is a named block of code that performs a task, optionally takes parameters, and optionally returns a value. Methods enable code reuse and modularity. Java supports method overloading (multiple methods with the same name but different parameter lists) and varargs (variable-length arguments). Methods can be static (belong to the class) or instance (belong to an object).",
    syntax: `modifiers returnType name(parameters) throws Exceptions {
    // body
    return value;          // if returnType is not void
}

// Overloading
int  add(int a, int b)        { return a + b; }
int  add(int a, int b, int c) { return a + b + c; }
double add(double a, double b){ return a + b; }

// Varargs
int sum(int... nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}`,
    parameters: [
      ["modifiers", "public/private/protected, static, final, abstract, synchronized"],
      ["returnType", "Primitive, reference type, or void. Use return; in void."],
      ["name", "camelCase identifier"],
      ["parameters", "Comma-separated type+name list, or empty"],
      ["varargs (Type...)", "Last parameter, treated as an array inside the body"],
      ["throws", "Declares checked exceptions the method may throw"],
    ],
    returnValue: "A method with returnType T returns a value of type T via `return value;`. A void method returns nothing (bare `return;` exits early). Methods that don't return on all paths are a compile error.",
    example: `public class Main {

    // Static method, returns int
    static int square(int n) {
        return n * n;
    }

    // Overloaded: same name, different params
    static double square(double n) {
        return n * n;
    }

    // Varargs
    static int sum(int... nums) {
        int total = 0;
        for (int n : nums) total += n;
        return total;
    }

    // Pass-by-value: changes to primitive don't propagate
    static void bump(int x) {
        x++;
        System.out.println("inside: " + x);
    }

    public static void main(String[] args) {
        System.out.println(square(5));       // 25
        System.out.println(square(2.5));     // 6.25
        System.out.println(sum(1, 2, 3, 4)); // 10

        int v = 10;
        bump(v);
        System.out.println("after: " + v);   // still 10
    }
}`,
    output: `25
6.25
10
inside: 11
after: 10`,
    commonMistakes: [
      "Forgetting `return` in a non-void method on some branch — compile error: missing return statement.",
      "Confusing pass-by-value with pass-by-reference — Java is always pass-by-value; for objects, the reference is passed by value.",
      "Putting varargs anywhere but last — varargs must be the final parameter.",
    ],
    cpp: `int square(int n) { return n * n; }
double square(double n) { return n * n; }
int sum(std::initializer_list<int> nums);`,
    related: ["classes", "objects", "constructors", "conditionals"],
  },

  loops: {
    beginnerExplanation: `A loop is how you tell the computer 'do this again and again until I say stop.' Imagine you have to write 'I will not talk in class' on a whiteboard 100 times. Instead of writing the sentence 100 times in your code, you write it once and tell the computer 'repeat this 100 times.' That's a loop.

Java has a few kinds. A 'for' loop is best when you know how many times to repeat (like 'repeat 100 times' or 'count from 1 to 10'). A 'while' loop is best when you don't know how many times — you just keep going while some condition is true (like 'keep asking for a password while the user gets it wrong'). A 'do-while' loop is like a while loop but it always runs at least once (like 'roll the dice at least once, then keep rolling while you get a 6'). And the enhanced for loop (for-each) walks through a list one item at a time without you counting.

Why does it matter? Computers are amazing at doing the same thing millions of times without getting bored. Loops are how you tap into that power — processing every item in a list, retrying a failed operation, animating a game frame by frame. Without loops, you'd have to write every repetition by hand.`,
    methods: [
      "for (init; cond; update) { } — classic counted loop",
      "while (cond) { } — loop while condition is true (may run 0 times)",
      "do { } while (cond); — loop at least once, then check condition",
      "for (Type item : collection) { } — enhanced for-each loop",
      "break — exit the loop immediately",
      "continue — skip to the next iteration",
      "label: for (...) — named loop, used with break label; for nested loops",
    ],
    title: "Loops",
    category: "Basics",
    description: "Loops repeat a block of code. Java has four loop constructs: for (classic counter), while (pre-test condition), do-while (post-test, runs at least once), and enhanced for / for-each (iterates collections and arrays without an index). break exits the loop immediately; continue jumps to the next iteration. Java also supports labeled loops for breaking out of nested loops.",
    syntax: `// Classic for
for (init; condition; update) { ... }

// while (pre-test)
while (condition) { ... }

// do-while (post-test, runs at least once)
do { ... } while (condition);

// Enhanced for (arrays & Iterable)
for (Type item : collection) { ... }

// break / continue
for (int i = 0; i < n; i++) {
    if (i == 3) continue;   // skip 3
    if (i == 7) break;      // stop at 7
}

// Labeled loop
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i + j == 4) break outer;
    }
}`,
    parameters: [
      ["init", "Loop variable initialization, runs once before the loop"],
      ["condition", "Boolean checked before each iteration — loop runs while true"],
      ["update", "Runs after each iteration (e.g., i++)"],
      ["item", "Loop variable holding each element in turn (enhanced for)"],
      ["label", "Optional name followed by colon, used with break/continue to target an outer loop"],
    ],
    returnValue: "Loops don't return values. They repeat the body while the condition is true. An empty for(;;) is an infinite loop.",
    example: `public class Main {
    public static void main(String[] args) {
        // 1. Classic for
        for (int i = 0; i < 3; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        // 2. while
        int n = 5;
        while (n > 0) {
            System.out.print(n-- + " ");
        }
        System.out.println();

        // 3. do-while (runs at least once)
        int k = 0;
        do {
            System.out.print(k++ + " ");
        } while (k < 3);
        System.out.println();

        // 4. Enhanced for-each
        int[] arr = {10, 20, 30};
        for (int x : arr) System.out.print(x + " ");
        System.out.println();

        // 5. break + continue
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) continue;
            if (i == 7) break;
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`,
    output: `0 1 2
5 4 3 2 1
0 1 2
10 20 30
1 3 5`,
    commonMistakes: [
      "Infinite loop: forgetting the update step in for, or never changing the condition in while.",
      "Off-by-one: using <= when you mean <, or vice versa.",
      "Modifying the loop variable inside the body, defeating the for-update.",
      "Using for-each when you need the index — for-each has no index.",
    ],
    cpp: `for (int i = 0; i < n; ++i) { ... }
while (cond) { ... }
do { ... } while (cond);
for (int x : arr) { ... }   // range-based for`,
    related: ["conditionals", "arrays", "operators"],
  },

  conditionals: {
    beginnerExplanation: `Conditionals are how a program makes decisions — they're the 'if this, then that' of code. Imagine you're ordering at a restaurant: 'IF I'm hungry, I'll order a main; OTHERWISE I'll just get dessert.' That's exactly what an if/else statement does in Java. The program checks a yes/no question, and depending on the answer, it takes a different path.

There are a few flavors. A simple 'if' does something only when the condition is true (like 'if it's raining, take an umbrella'). An 'if-else' chooses between two options (like 'if you're 18+, you can vote; else, you can't'). An 'if-else if-else' handles multiple options (like 'if grade >= 90 → A; else if >= 80 → B; else if >= 70 → C; else → F'). And a 'switch' is a cleaner way to pick between many specific values (like 'switch on the day of the week: case Monday → ...; case Tuesday → ...').

Why does it matter? Without conditionals, every program would do exactly the same thing every time. Conditionals let programs adapt — to user input, to data, to the situation. They're the brain of any program that makes choices.`,
    methods: [
      "if (cond) { } — do something only if cond is true",
      "if (cond) { } else { } — choose between two paths",
      "if (a) { } else if (b) { } else { } — multi-way branch",
      "switch (value) { case X: ...; break; default: ...; } — classic switch",
      "switch (value) { case X -> result; } — modern switch expression (Java 14+)",
      "cond ? valueIfTrue : valueIfFalse — ternary (one-line if/else)",
      "break — exit a switch case (prevents fall-through)",
    ],
    title: "Conditionals",
    category: "Basics",
    description: "Conditional statements let a program choose between paths based on a boolean condition. Java provides if, if-else, if-else if-else chains, the ternary operator (? :), and switch (classic and modern expression form since Java 14). switch works on byte, short, int, char, String, and enums. Modern switch returns a value and uses arrow labels that don't fall through.",
    syntax: `if (condition) { ... }

if (condition) { ... } else { ... }

if (a) { ... } else if (b) { ... } else { ... }

// Ternary
result = condition ? valueIfTrue : valueIfFalse;

// Classic switch (fall-through — needs break)
switch (day) {
    case 1: System.out.println("Mon"); break;
    case 2: System.out.println("Tue"); break;
    default: System.out.println("Other");
}

// Modern switch expression (Java 14+) — no fall-through
String name = switch (day) {
    case 1 -> "Monday";
    case 2, 3 -> "Tue/Wed";
    default -> "Other";
};`,
    parameters: [
      ["condition", "Any boolean expression — must evaluate to true or false"],
      ["case value", "Constant (compile-time) literal/enum/String matched against the switch subject"],
      ["default", "Optional fallback when no case matches"],
      ["break", "Exits the switch in classic form; arrow labels don't need it"],
    ],
    returnValue: "if/else statements don't return a value. The ternary returns one of two values. Modern switch expressions return a value of the case branch type.",
    example: `public class Main {
    public static void main(String[] args) {
        int score = 85;

        // if-else if-else
        if (score >= 90)      System.out.println("A");
        else if (score >= 80) System.out.println("B");
        else if (score >= 70) System.out.println("C");
        else                  System.out.println("F");

        // Ternary
        String pass = score >= 75 ? "PASS" : "FAIL";
        System.out.println(pass);

        // Modern switch expression on a String
        String day = "WED";
        int dayNum = switch (day) {
            case "MON" -> 1;
            case "TUE" -> 2;
            case "WED" -> 3;
            case "THU", "FRI" -> 4;
            default -> 0;
        };
        System.out.println("Day #: " + dayNum);
    }
}`,
    output: `B
PASS
Day #: 3`,
    commonMistakes: [
      "Using = (assignment) instead of == (comparison) inside if.",
      "Forgetting break in classic switch — execution falls through to the next case.",
      "Comparing Strings with == inside if — use .equals() for value comparison.",
      "Switching on a double or float — switch only accepts int-like, String, and enum.",
    ],
    cpp: `if (score >= 90) { ... } else { ... }
switch (day) { case 1: ...; break; default: ...; }`,
    related: ["operators", "loops", "methods"],
  },

  /* ============================================================ OOP */
  classes: {
    beginnerExplanation: `A class is a blueprint, and an object is what you build from that blueprint. Think of a class like the blueprint for a house. The blueprint describes what the house looks like and what rooms it has, but you can't live in a blueprint — you have to actually build a house from it. One blueprint can build many houses, all with the same layout but each one a separate, independent house.

In Java, a class describes two things: the data an object holds (called fields — like the rooms and dimensions of a house) and the actions an object can perform (called methods — like 'open the front door' or 'turn on the lights'). When you write 'new House()', Java builds an actual house in the computer's memory based on the blueprint. You can build as many as you want, and each one is its own separate house with its own data.

Why does it matter? Classes let you model real things in code. A 'Player' class for a game, a 'User' class for an app, a 'Product' class for a store — each one bundles related data and behavior into a clean, reusable package. Without classes, code becomes a giant pile of loose variables and functions.`,
    methods: [
      "class Name { fields; constructors; methods; } — declare a class",
      "new Name(args) — create a new object from the class",
      "this.field — refers to the current object's field (disambiguates from params)",
      "private Type field; — data hidden inside the object",
      "public returnType method() { } — an action the object can perform",
      "static — belongs to the class, not individual objects",
      "final class — cannot be extended by subclasses",
    ],
    title: "Classes",
    category: "OOP",
    description: "A class is a blueprint for creating objects. It bundles state (fields) and behavior (methods) into a single unit. A class is declared with the class keyword and contains fields, constructors, methods, and nested types. Java is single-rooted: every class implicitly extends java.lang.Object unless it extends another class. A file can have only one public class, and its name must match the filename.",
    syntax: `public class ClassName {
    // Fields (state)
    private Type field;

    // Constructor
    public ClassName(Type field) {
        this.field = field;
    }

    // Methods (behavior)
    public Type getField() { return field; }
    public void doSomething() { /* ... */ }
}

// Instantiation
ClassName obj = new ClassName(arg);`,
    parameters: [
      ["class", "Keyword to declare a class"],
      ["fields", "Variables holding object state — usually private for encapsulation"],
      ["constructor", "Special method with same name as class, no return type, runs on new"],
      ["this", "Reference to the current object, used to disambiguate fields or chain constructors"],
      ["new", "Operator that allocates a new object and calls its constructor"],
    ],
    returnValue: "new returns a reference to the newly allocated object on the heap. The constructor has no return type — not even void.",
    example: `public class Player {
    private String name;
    private int score;

    // Constructor
    public Player(String name) {
        this.name = name;
        this.score = 0;
    }

    // Methods
    public void addScore(int pts) { score += pts; }
    public String getName()  { return name; }
    public int    getScore() { return score; }
}

class Main {
    public static void main(String[] args) {
        Player p = new Player("Ana");
        p.addScore(50);
        p.addScore(25);
        System.out.println(p.getName() + ": " + p.getScore());
    }
}`,
    output: `Ana: 75`,
    commonMistakes: [
      "Forgetting the () in new ClassName() — compile error.",
      "Defining a return type on a constructor — it stops being a constructor and becomes a regular method.",
      "Declaring multiple public top-level classes in the same .java file — only one is allowed.",
    ],
    cpp: `class Player {
public:
    Player(std::string n) : name(n), score(0) {}
    void addScore(int pts) { score += pts; }
private:
    std::string name; int score;
};`,
    related: ["objects", "constructors", "access-modifiers", "encapsulation"],
  },

  constructors: {
    beginnerExplanation: `A constructor is the setup crew for a new object. When you build a new house, someone has to install the doors, paint the walls, and connect the electricity before you can move in. A constructor does that for a new object — it runs automatically when the object is created, and its job is to set up the object's starting state (give the fields their initial values).

A constructor looks like a method but with two special rules: it has the exact same name as the class, and it has no return type (not even void). If you don't write one, Java gives you a free 'default' one that does nothing special. But usually you write your own so the object starts with the right values — like 'new Player("Ana", 100)' creates a player named Ana with 100 health points, ready to play.

You can have multiple constructors for the same class (called overloading) — like a restaurant offering a kids' menu, a regular menu, and a deluxe menu. 'new Player()' might give you a default character, while 'new Player("Ana", 100)' gives you a custom one. They can even call each other with 'this(...)' to share setup work.`,
    methods: [
      "public ClassName(params) { } — declare a constructor (same name as class, no return type)",
      "new ClassName(args) — create an object (calls the constructor)",
      "this(args) — call another constructor in the same class (must be first statement)",
      "super(args) — call the parent class's constructor (must be first statement)",
      "default constructor — auto-generated if you write none (no-arg, does nothing)",
      "private constructor — prevents outsiders from creating instances directly (used for singletons)",
    ],
    title: "Constructors",
    category: "OOP",
    description: "A constructor is a special block of code that runs when an object is created with new. Its name matches the class, it has no return type, and its job is to initialize fields. If you don't write any constructor, Java gives you a no-arg default constructor. You can overload constructors and chain them with this(...) — a call to another constructor in the same class that must be the first statement.",
    syntax: `public class Box {
    private int w, h;

    // No-arg constructor (delegates to another)
    public Box() {
        this(1, 1);
    }

    // Parameterized constructor
    public Box(int w, int h) {
        this.w = w;
        this.h = h;
    }

    // Copy constructor (by convention, not built-in)
    public Box(Box other) {
        this(other.w, other.h);
    }
}`,
    parameters: [
      ["this(...)", "Calls another constructor in the same class — must be the first statement"],
      ["super(...)", "Calls a parent class constructor — must be the first statement if used"],
      ["access modifier", "public, protected, package-private, or private (private enables singletons / factory pattern)"],
      ["no-arg default", "Auto-generated only if you write zero constructors yourself"],
    ],
    returnValue: "Constructors have no return type. They implicitly return a reference to the newly constructed object, but you don't write `return` for it.",
    example: `public class Point {
    private int x, y;

    public Point()             { this(0, 0); }
    public Point(int v)        { this(v, v); }
    public Point(int x, int y) { this.x = x; this.y = y; }

    public String toString() { return "(" + x + ", " + y + ")"; }
}

class Main {
    public static void main(String[] args) {
        Point a = new Point();      // (0,0)
        Point b = new Point(5);     // (5,5)
        Point c = new Point(3, 7);  // (3,7)
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}`,
    output: `(0, 0)
(5, 5)
(3, 7)`,
    commonMistakes: [
      "Adding a return type (even void) — Java treats it as a method, not a constructor.",
      "Writing this(...) anywhere but the first statement — compile error.",
      "Once you define any constructor, the default no-arg one disappears. If callers use new Box() you must declare it explicitly.",
    ],
    cpp: `class Point {
public:
    Point() : Point(0, 0) {}            // delegating (C++11)
    Point(int v) : Point(v, v) {}
    Point(int x, int y) : x(x), y(y) {}
private:
    int x, y;
};`,
    related: ["classes", "objects", "inheritance", "access-modifiers"],
  },

  objects: {
    beginnerExplanation: `If a class is a blueprint, an object is the actual house you build from it. The blueprint describes the structure, but you can't live in a blueprint — you need the real thing. One blueprint can produce many houses; each house is a separate object with its own address, its own furniture, its own family inside.

In Java, when you write 'new Player("Ana")', you're telling the computer: 'Build me a real, concrete Player object based on the Player blueprint, and put "Ana" inside it.' The computer finds a spot in memory, builds the object, fills in its data, and hands you a reference (like the address of the house). You use that reference to interact with the object: 'player.score()' asks the object for its score, 'player.move()' tells it to move.

A critical gotcha: when you assign an object variable to another variable, you're copying the ADDRESS, not the house. So 'Player p2 = p1' doesn't build a second player — it just gives p2 the same address as p1. Both names now point to the same player. Change one, and the other sees the change. To actually copy an object, you have to build a new one explicitly.`,
    methods: [
      "new ClassName(args) — create a new object on the heap",
      "obj.method() — call a method on the object",
      "obj.field — access a field on the object (if visible)",
      "obj1 == obj2 — do both variables point to the SAME object?",
      "obj1.equals(obj2) — do both objects have the SAME contents?",
      "obj = null — drop the reference (object becomes eligible for garbage collection)",
      "instanceof — check what type an object is",
    ],
    title: "Objects",
    category: "OOP",
    description: "An object is an instance of a class — a concrete entity with state (field values) and behavior (methods). Objects are created with new, live on the heap, and are garbage-collected when no references remain. Java references are like C pointers but you can't do arithmetic on them. Assignment of references does not copy the object — both variables point to the same instance.",
    syntax: `// Create
ClassName obj = new ClassName(args);

// Use
obj.method();
Type v = obj.field;

// Compare references
obj1 == obj2            // same instance?
obj1.equals(obj2)       // logical equality (override)

// Null
obj = null;             // no longer points anywhere
if (obj != null) { ... }

// Copying — must be explicit
Box copy = new Box(original);
Box clone = (Box) original.clone();  // if Cloneable`,
    parameters: [
      ["new", "Allocates memory and runs the constructor"],
      ["reference variable", "Holds the address of the object on the heap"],
      ["null", "Special value meaning \"no object\" — dereferencing throws NullPointerException"],
      ["this", "Inside a method, the reference to the current object"],
    ],
    returnValue: "new returns a reference to the heap-allocated object. Methods called on the object return whatever their declared return type is.",
    example: `public class Book {
    String title;
    int pages;

    public Book(String t, int p) { title = t; pages = p; }
    public String toString()     { return title + " (" + pages + "p)"; }
}

class Main {
    public static void main(String[] args) {
        Book a = new Book("Java Basics", 300);
        Book b = a;                       // same object, two references
        b.title = "Advanced Java";

        System.out.println(a);            // sees the change — same instance
        System.out.println(a == b);       // true

        Book c = new Book("Java Basics", 300);
        System.out.println(a == c);       // false — different instances
        System.out.println(a.title.equals(c.title)); // true — value match

        a = null;                         // drop reference
        // System.gc();                   // hint, not a command
    }
}`,
    output: `Advanced Java (300p)
true
false
true`,
    commonMistakes: [
      "Assuming Book b = a; copies the object — it only copies the reference. Both still point to the same instance.",
      "Dereferencing null — throws NullPointerException. Always null-check when a value might be unset.",
      "Comparing objects with == when you mean logical equality — use .equals() (and override it).",
    ],
    cpp: `Book* a = new Book("Java Basics", 300);
Book* b = a;        // same pointer
delete a;           // must free manually — no GC in C++`,
    related: ["classes", "constructors", "inheritance", "polymorphism"],
  },

  "access-modifiers": {
    beginnerExplanation: `Access modifiers are like the locks on doors in a building. Some doors are open to the public (a storefront), some are only for employees (the back office), some are only for family (your home), and some are private to just you (your diary). In Java, access modifiers control who's allowed to use a class, field, or method.

There are four levels. 'public' means anyone, anywhere can use it — like a public park. 'private' means only the class itself can use it — like your diary. 'protected' means the class, its subclasses, and neighbors in the same package can use it — like a family-only room. And if you write nothing (the default), it's 'package-private' — anyone in the same package (think: same folder) can use it, but nobody outside. The rule of thumb is: start everything private, and only make it more public when you have a reason.

Why does it matter? Imagine if anyone in your city could walk into your house and rearrange your furniture. Chaos. Access modifiers prevent that in code — they keep the inside of a class safe from outsiders who might mess things up. This is part of 'encapsulation' — the idea of hiding your internals and only exposing a safe, controlled interface.`,
    methods: [
      "public — accessible from anywhere",
      "private — accessible only within the same class",
      "protected — accessible within the same package and by subclasses",
      "(no modifier) — package-private: accessible only within the same package",
      "final — can't be overridden (methods) or extended (classes) or reassigned (variables)",
      "abstract — must be overridden by a subclass (methods) or can't be instantiated (classes)",
    ],
    title: "Access Modifiers",
    category: "OOP",
    description: "Access modifiers control visibility of classes, fields, methods, and constructors. Java has four levels: public (everywhere), protected (same package + subclasses), package-private/default (same package only, no keyword), and private (same class only). The principle of least privilege says: start private and widen only when needed.",
    syntax: `public class Account {
    public  String owner;        // anyone
    private  double balance;     // this class only
    protected int    accountId;  // package + subclasses
    String   note;               // package-private (default)

    public   void deposit(double amt) { balance += amt; }
    private  void audit()             { /* internal */ }
    protected void logTxn()           { /* for subclasses */ }
}`,
    parameters: [
      ["public", "Accessible from any class in any package"],
      ["protected", "Accessible within the same package and by subclasses anywhere"],
      ["(default / package-private)", "No keyword — accessible only within the same package"],
      ["private", "Accessible only within the same class (not even subclasses)"],
    ],
    returnValue: "Access modifiers don't affect return values — they control who can call the method or read the field.",
    example: `// File: bank/Account.java
package bank;
public class Account {
    public    String owner;
    private   double balance;
    protected int    id;
              String internalNote;  // package-private

    public Account(String o, double b) { owner = o; balance = b; id = nextId(); }

    public double getBalance() { return balance; }   // controlled access
    private static int nextId() { return (int)(Math.random()*10000); }
}

// File: Main.java
import bank.Account;
class Main {
    public static void main(String[] args) {
        Account acc = new Account("Ana", 100.0);
        System.out.println(acc.owner);          // OK: public
        System.out.println(acc.getBalance());   // OK: public getter
        // acc.balance;                         // ERROR: private
        // acc.id;                              // ERROR: protected, not subclass, different pkg
        // acc.internalNote;                    // ERROR: package-private, different pkg
    }
}`,
    output: `Ana
100.0`,
    commonMistakes: [
      "Forgetting that the default (no modifier) is package-private, not private.",
      "Making fields public just to skip writing getters — breaks encapsulation.",
      "Trying to narrow access when overriding a method (e.g., parent public, child protected) — not allowed in Java.",
    ],
    cpp: `class Account {
public:
    std::string owner;
    double getBalance() const { return balance; }
protected:
    int id;
private:
    double balance;
};`,
    related: ["classes", "encapsulation", "inheritance", "objects"],
  },

  encapsulation: {
    beginnerExplanation: `Encapsulation is the programming version of 'don't touch the engine, just drive the car.' When you drive, you use the steering wheel, pedals, and buttons — you don't open the hood and rewire the spark plugs every time. The engine is hidden away (private), and you interact with the car only through its controls (public methods). That's encapsulation: hiding the messy internals and exposing a clean, safe interface.

In Java, you do this by making all your fields private (so outsiders can't change them directly) and providing public 'getter' and 'setter' methods. A getter lets outsiders READ the value safely; a setter lets them CHANGE it — but only after you've checked that the new value makes sense. For example, a BankAccount's balance field is private, and the deposit() method checks that you're not depositing a negative amount before updating it. Without encapsulation, someone could write 'account.balance = -9999' and break everything.

Why does it matter? Encapsulation protects your data from being put into a broken state. It also lets you change the internals later without breaking anyone's code — as long as the public methods still work the same way, you can completely rewrite what's inside.`,
    methods: [
      "private Type field; — hide the field from outside",
      "public Type getField() — let outsiders read the value safely",
      "public void setField(Type v) — let outsiders change it (with validation)",
      "read-only field — provide a getter but no setter",
      "write-only field — provide a setter but no getter (rare, e.g., passwords)",
      "Collections.unmodifiableList(list) — return a read-only view of a collection",
    ],
    title: "Encapsulation",
    category: "OOP",
    description: "Encapsulation is the practice of bundling state and behavior together while hiding internal details behind a public interface. In Java this means: make fields private, expose them through getters and setters, and validate inside those methods. Encapsulation protects invariants, lets you change internals without breaking callers, and is one of the four pillars of OOP (along with inheritance, polymorphism, abstraction).",
    syntax: `public class Temperature {
    private double celsius;   // hidden

    public Temperature(double celsius) {
        setCelsius(celsius);  // reuse validation
    }

    // Controlled read
    public double getCelsius()      { return celsius; }
    public double getFahrenheit()   { return celsius * 9/5 + 32; }

    // Controlled write with validation
    public void setCelsius(double c) {
        if (c < -273.15) throw new IllegalArgumentException("Below absolute zero");
        this.celsius = c;
    }
}`,
    parameters: [
      ["private fields", "State is hidden from outside the class"],
      ["public getters", "Methods like getX() that return the value (read-only access)"],
      ["public setters", "Methods like setX(v) that validate and assign (controlled write)"],
      ["read-only", "Provide a getter but no setter — value can be read but not changed"],
      ["write-only", "Provide a setter but no getter — rare, e.g., password setters"],
    ],
    returnValue: "Getters return the field's value. Setters return void. Validation inside setters can throw IllegalArgumentException when invariants are violated.",
    example: `public class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double opening) {
        this.owner = owner;
        setBalance(opening);   // reuse validation
    }

    public String getOwner()   { return owner; }
    public double getBalance() { return balance; }

    public void deposit(double amt) {
        if (amt <= 0) throw new IllegalArgumentException("amt must be > 0");
        balance += amt;
    }

    public void withdraw(double amt) {
        if (amt > balance) throw new IllegalArgumentException("insufficient funds");
        balance -= amt;
    }

    private void setBalance(double b) {
        if (b < 0) throw new IllegalArgumentException("negative balance");
        this.balance = b;
    }
}

class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount("Ana", 100);
        acc.deposit(50);
        acc.withdraw(30);
        System.out.println(acc.getOwner() + ": $" + acc.getBalance());
        // acc.balance = 9999;  // ERROR: private — can't bypass validation
    }
}`,
    output: `Ana: $120.0`,
    commonMistakes: [
      "Exposing fields as public \"for simplicity\" — callers depend on them and you can never change the implementation.",
      "Writing getters/setters that don't validate — encapsulation without invariants is just ceremony.",
      "Returning the raw mutable object (e.g., a List) from a getter — callers can mutate your internals. Return a copy or unmodifiable view.",
    ],
    cpp: `class BankAccount {
public:
    std::string getOwner() const { return owner; }
    double getBalance() const { return balance; }
    void deposit(double amt);
private:
    std::string owner;
    double balance;
};`,
    related: ["access-modifiers", "classes", "objects", "inheritance"],
  },

  inheritance: {
    beginnerExplanation: `Inheritance is how one class inherits the features of another — like how a child inherits traits from a parent. If you have a general 'Animal' class that knows how to eat and sleep, you don't need to rewrite those abilities for 'Dog,' 'Cat,' and 'Bird.' You just say 'Dog extends Animal,' and Dog automatically gets all of Animal's fields and methods — then you add the dog-specific stuff (bark, fetch, wag tail).

Think of it like a family tree. The general 'Animal' is the grandparent — it has the basics that every animal shares. 'Mammal' extends Animal and adds mammal-specific things (fur, warm blood). 'Dog' extends Mammal and adds dog-specific things (bark). A Dog IS an Animal, IS a Mammal, and IS a Dog — all at once. In Java, a class can only have ONE parent (single inheritance), which keeps things simpler than C++ where a class can have multiple parents.

The child class can also OVERRIDE a parent's method — meaning it provides its own version. So Animal might have a 'sound()' method that returns "...", and Dog overrides it to return "Woof." When you call 'animal.sound()' on a Dog object, you get "Woof" — Java automatically uses the most specific version.

Why does it matter? Inheritance eliminates duplication. Instead of writing 'eat()' and 'sleep()' in every animal class, you write them once in Animal and everyone inherits them. It also enables polymorphism (the next topic).`,
    methods: [
      "class Child extends Parent { } — declare a subclass",
      "super(args) — call the parent's constructor (must be first statement)",
      "super.method() — call the parent's version of a method",
      "@Override — annotation: mark a method as overriding the parent's",
      "protected — visibility level for things subclasses should access",
      "final class — cannot be extended (e.g., String is final)",
      "instanceof — check if an object is an instance of a class or its ancestors",
    ],
    title: "Inheritance",
    category: "OOP",
    description: "Inheritance lets a class acquire fields and methods from another class. Java uses the extends keyword for class inheritance and is single-inheritance (a class can extend only one parent). Every class implicitly extends Object. Use inheritance for is-a relationships (Dog is an Animal); prefer composition for has-a relationships (Car has an Engine). Subclasses can override methods (marked @Override) and add new ones.",
    syntax: `class Parent {
    protected int x;
    public Parent(int x)      { this.x = x; }
    public void describe()    { System.out.println("Parent x=" + x); }
}

class Child extends Parent {
    private int y;
    public Child(int x, int y) {
        super(x);              // call parent constructor — first statement
        this.y = y;
    }
    @Override
    public void describe() {   // override parent method
        super.describe();      // call parent version
        System.out.println("Child y=" + y);
    }
}`,
    parameters: [
      ["extends", "Keyword to declare a subclass"],
      ["super", "Reference to the parent class — super.method() or super(args)"],
      ["@Override", "Annotation telling the compiler \"I intend to override a parent method\" — catches typos"],
      ["protected", "Visibility needed for fields/methods used by subclasses"],
      ["final class", "Cannot be extended (e.g., String, Integer)"],
    ],
    returnValue: "Inheritance doesn't return a value. A subclass instance IS-A parent instance — it can be assigned to a parent-typed variable and used polymorphically.",
    example: `class Animal {
    protected String name;
    public Animal(String name) { this.name = name; }
    public String sound()       { return "..."; }
}

class Dog extends Animal {
    public Dog(String name) { super(name); }
    @Override
    public String sound()   { return "Woof"; }
    public String fetch()   { return name + " fetches the ball"; }
}

class Cat extends Animal {
    public Cat(String name) { super(name); }
    @Override
    public String sound()   { return "Meow"; }
}

class Main {
    public static void main(String[] args) {
        Animal a = new Dog("Rex");    // upcast — implicit
        System.out.println(a.name + ": " + a.sound());
        // a.fetch();                  // ERROR — fetch not on Animal

        Cat c = new Cat("Mia");
        System.out.println(c.name + ": " + c.sound());
    }
}`,
    output: `Rex: Woof
Mia: Meow`,
    commonMistakes: [
      "Forgetting super(...) as the first statement when the parent has no no-arg constructor — compile error.",
      "Using inheritance for code reuse alone — prefer composition. \"Bag is a List\" is wrong even if it saves typing.",
      "Overriding a method but forgetting @Override — typos (e.g., describe() vs desribe()) silently create a new method instead.",
      "Overriding a private method — you can't; you're just declaring a new method with the same name.",
    ],
    cpp: `class Dog : public Animal {
public:
    Dog(std::string n) : Animal(std::move(n)) {}
    std::string sound() const override { return "Woof"; }
};`,
    related: ["polymorphism", "objects", "classes", "abstract-classes", "interfaces"],
  },

  polymorphism: {
    beginnerExplanation: `Polymorphism is a fancy Greek word that means 'many forms.' In programming, it means the same instruction can behave differently depending on what kind of object you give it. Imagine you tell a group of animals 'make your sound!' — the dog barks, the cat meows, the duck quacks. Same instruction, different results based on who's receiving it. That's polymorphism.

Here's how it works in Java. Suppose you have a parent class 'Animal' with a method 'sound(),' and subclasses 'Dog' and 'Cat' that each override 'sound()' with their own version. Now you can have a list of Animals (some dogs, some cats), loop through them, and call 'sound()' on each. Java automatically figures out the actual type of each animal at runtime and calls the right version — Dog.sound() for dogs, Cat.sound() for cats. You don't have to write 'if it's a dog, bark; if it's a cat, meow.' Java does that for you.

Why does this matter? Polymorphism lets you write code that works with the general type (Animal) but automatically does the right thing for each specific type (Dog, Cat). You can add new animal types later (Bird, Fish) without changing the loop that calls sound(). This makes code flexible and easy to extend — a huge win as programs grow.`,
    methods: [
      "Override — subclass provides its own version of a parent method (same name, same params)",
      "Upcast — assigning a subclass to a parent variable (implicit, always safe): Animal a = new Dog();",
      "Downcast — casting a parent back to a subclass (explicit, runtime-checked): Dog d = (Dog) a;",
      "instanceof — check the actual type before casting: if (a instanceof Dog d) { ... }",
      "Dynamic dispatch — JVM picks the right override at runtime based on the actual object type",
      "final method — prevents subclasses from overriding it (no polymorphism for that method)",
    ],
    title: "Polymorphism",
    category: "OOP",
    description: "Polymorphism (\"many forms\") means the same call behaves differently based on the actual object type. Java achieves it through method overriding and dynamic dispatch — at runtime, the JVM looks up the actual class of the object and calls its version of the overridden method. The reference type can be the parent; the method called is the child's. This is the foundation of flexible, extensible code.",
    syntax: `Animal a = new Dog();
a.sound();   // calls Dog.sound() — runtime dispatch

// Upcast: implicit, always safe
Animal a = new Dog();

// Downcast: explicit, can fail at runtime
Dog d = (Dog) a;
if (a instanceof Dog) { Dog d = (Dog) a; }   // safe pattern

// Java 16+ pattern variable
if (a instanceof Dog d) { d.fetch(); }

// Virtual dispatch in action
List<Animal> zoo = List.of(new Dog(), new Cat());
for (Animal x : zoo) x.sound();   // Woof, Meow`,
    parameters: [
      ["override", "Subclass provides its own implementation of a parent method — same name, same params, compatible return"],
      ["upcast", "Assigning a subclass reference to a parent variable — implicit, always safe"],
      ["downcast", "Casting a parent reference back to a subclass — explicit, runtime-checked"],
      ["instanceof", "Tests whether an object is an instance of a class (or subtype) — avoids ClassCastException"],
      ["dynamic dispatch", "JVM chooses which override to call based on the actual object's class at runtime"],
    ],
    returnValue: "Polymorphic calls return whatever the actual object's method returns. The compiler only knows the declared (reference) type; the JVM uses the actual runtime type for non-static methods.",
    example: `abstract class Shape {
    public abstract double area();
}

class Circle extends Shape {
    private final double r;
    public Circle(double r) { this.r = r; }
    @Override public double area() { return Math.PI * r * r; }
}

class Rectangle extends Shape {
    private final double w, h;
    public Rectangle(double w, double h) { this.w = w; this.h = h; }
    @Override public double area() { return w * h; }
}

class Main {
    static double totalArea(Shape[] shapes) {
        double sum = 0;
        for (Shape s : shapes) sum += s.area();   // polymorphic call
        return sum;
    }
    public static void main(String[] args) {
        Shape[] shapes = { new Circle(2), new Rectangle(3, 4), new Circle(1) };
        System.out.printf("Total area: %.2f%n", totalArea(shapes));
    }
}`,
    output: `Total area: 28.28`,
    commonMistakes: [
      "Casting without instanceof first — ClassCastException at runtime.",
      "Declaring a parent method non-virtual by accident — in Java all non-static, non-final instance methods are virtual, so this rarely happens; marking a method final prevents overriding.",
      "Static methods are NOT polymorphic — `Parent p = new Child(); p.staticMethod();` calls Parent's version. Don't hide static methods.",
    ],
    cpp: `class Shape { public: virtual double area() = 0; virtual ~Shape() = default; };
class Circle : public Shape { double area() const override { return 3.14*r*r; } };
// Need virtual in C++; Java methods are virtual by default.`,
    related: ["inheritance", "abstract-classes", "interfaces", "objects"],
  },

  interfaces: {
    beginnerExplanation: `An interface is a contract — a list of promises a class makes about what it can do. Think of it like a job description: 'A Driver must be able to drive() and stop().' The job description doesn't say HOW to drive — that's up to whoever fills the role. A Person can be a Driver. A Robot can be a Driver. A SelfDrivingCar can be a Driver. As long as they can drive() and stop(), they qualify.

In Java, an interface lists method signatures (the name and parameters) but usually no body. A class then 'implements' the interface, meaning it promises to provide bodies for all those methods. The cool part: a class can implement MULTIPLE interfaces — like a person who's both a Driver AND a Cook AND a Singer. (Java only lets a class extend one parent class, but it can implement as many interfaces as it wants.)

Since Java 8, interfaces can also have 'default' methods — methods with a body that implementing classes inherit by default but can override. This lets you add new features to an interface without breaking all the classes that already implement it.

Why does it matter? Interfaces let you write code that works with anything that fulfills a contract, regardless of what it actually is. A method that takes a 'Comparable' parameter will work with anything that can be compared — numbers, strings, dates, your own classes — without caring what they are.`,
    methods: [
      "interface Name { ... } — declare an interface (a contract)",
      "class X implements Name { ... } — promise to fulfill the interface",
      "abstract method — signature only, no body (the contract)",
      "default method — a method with a body that implementers inherit (Java 8+)",
      "static method — a utility method on the interface itself (Java 8+)",
      "class X implements A, B, C — a class can implement multiple interfaces",
    ],
    title: "Interfaces",
    category: "OOP",
    description: "An interface is a contract — a list of method signatures (and constants) that a class promises to implement. Java allows a class to implement multiple interfaces, which is how Java achieves multiple-inheritance-of-type. Since Java 8, interfaces can have default and static methods with bodies; since Java 9, private helper methods. Fields in an interface are implicitly public static final.",
    syntax: `public interface Comparable<T> {
    int compareTo(T other);                  // abstract
}

public interface Drawable {
    void draw();
    default void drawTwice() { draw(); draw(); }   // Java 8+
    static Drawable empty() { return () -> {}; }   // Java 8+
}

// Implement one interface
class Point implements Comparable<Point> {
    public int compareTo(Point o) { return 0; }
}

// Implement multiple interfaces
class Widget implements Drawable, Cloneable {
    public void draw() { /* ... */ }
}`,
    parameters: [
      ["implements", "Keyword used by a class to fulfill an interface contract"],
      ["abstract method", "Method without a body — implementing class must provide one"],
      ["default method", "Method with a body, added in Java 8 — implementing class inherits it but can override"],
      ["static method", "Utility method on the interface itself, called as Interface.method()"],
      ["private method (Java 9+)", "Helper used by default methods in the same interface"],
      ["fields", "Implicitly public static final — constants only"],
    ],
    returnValue: "Interface methods declare a return type but no body (unless default/static). Implementations return whatever they want as long as the type matches.",
    example: `interface Animal {
    String name();
    default String sound() { return "..."; }     // default impl
}

interface Swimmer {
    void swim();
}

// Implements two interfaces
class Duck implements Animal, Swimmer {
    public String name()  { return "Duck"; }
    @Override public String sound() { return "Quack"; }
    public void swim()    { System.out.println(name() + " swims"); }
}

class Main {
    public static void main(String[] args) {
        Duck d = new Duck();
        System.out.println(d.name() + ": " + d.sound());
        d.swim();

        // Polymorphic through interface
        Swimmer s = d;
        s.swim();
    }
}`,
    output: `Duck: Quack
Duck swims
Duck swims`,
    commonMistakes: [
      "Forgetting to implement every abstract method — class must be abstract or implement them all.",
      "Thinking interface fields are instance fields — they are public static final constants.",
      "Diamond problem: implementing two interfaces with the same default method — must override and disambiguate with Interface.super.method().",
    ],
    cpp: `struct Animal { virtual std::string name() = 0; virtual ~Animal() = default; };
struct Swimmer { virtual void swim() = 0; virtual ~Swimmer() = default; };
class Duck : public Animal, public Swimmer { /* ... */ };`,
    related: ["abstract-classes", "inheritance", "polymorphism", "generics"],
  },

  "abstract-classes": {
    beginnerExplanation: `An abstract class is a half-finished blueprint — it has some real methods ready to use, but it leaves some methods empty on purpose, saying 'I'll let my subclasses fill these in.' Think of it like a recipe that says 'Step 3: Add your favorite sauce.' The recipe is mostly complete, but one step is intentionally left blank because different people will use different sauces.

Unlike a regular class, you can't create an object directly from an abstract class — you can't build a house from a half-finished blueprint. You have to create a subclass that fills in the blanks, and then you build objects from that subclass. The abstract class gives its subclasses a head start: all the ready-made methods are inherited, and the subclass only has to implement the abstract (blank) ones.

For example, an abstract 'Shape' class might have a concrete 'describe()' method that prints 'I am a shape with area X' — but 'area()' is abstract because each shape calculates area differently. 'Circle' extends Shape and fills in area() as πr². 'Rectangle' extends Shape and fills in area() as width × height. Both inherit describe() for free.

Why use an abstract class instead of an interface? Abstract classes can have fields and constructors (interfaces can't, mostly). Use an abstract class when subclasses share substantial code; use an interface when you just need a contract.`,
    methods: [
      "abstract class Name { } — declare a class that can't be instantiated directly",
      "abstract returnType method(); — declare a method with no body (subclasses must implement)",
      "concrete method — a regular method with a body, inherited as-is by subclasses",
      "extends — a subclass extends one abstract class (single inheritance)",
      "final method — prevent subclasses from overriding (the opposite of abstract)",
      "constructor — abstract classes CAN have constructors, called via super()",
    ],
    title: "Abstract Classes",
    category: "OOP",
    description: "An abstract class is a partially-implemented class — it can have both concrete methods (with bodies) and abstract methods (without bodies). Use abstract classes when subclasses share substantial implementation but each fills in some details. Unlike interfaces, abstract classes can have instance fields and constructors. A class extends one abstract class; it can implement many interfaces.",
    syntax: `public abstract class Vehicle {
    protected String name;
    protected double speed;

    public Vehicle(String name) { this.name = name; }    // constructor

    // Concrete method — inherited as-is
    public void stop() { speed = 0; }

    // Abstract method — subclasses MUST implement
    public abstract void accelerate(double amount);

    // Final method — subclasses CANNOT override
    public final String getName() { return name; }
}

class Car extends Vehicle {
    public Car(String name) { super(name); }
    @Override public void accelerate(double a) { speed += a * 1.5; }
}`,
    parameters: [
      ["abstract class", "Class declared with the abstract keyword — cannot be instantiated directly"],
      ["abstract method", "Method signature without a body — subclasses must implement it"],
      ["concrete method", "Regular method with a body — inherited normally"],
      ["final method", "Cannot be overridden by subclasses"],
      ["constructor", "Yes, abstract classes can have constructors — called via super(...)"],
    ],
    returnValue: "Abstract methods declare a return type but no body. Subclasses provide the body. You can't call new AbstractClass(); — you must call new ConcreteSubclass();.",
    example: `abstract class Shape {
    protected String name;
    public Shape(String name) { this.name = name; }

    // Concrete: shared by all subclasses
    public String describe() { return name + " area = " + area(); }

    // Abstract: each subclass fills this in
    public abstract double area();
}

class Square extends Shape {
    private final double side;
    public Square(double s) { super("Square"); this.side = s; }
    @Override public double area() { return side * side; }
}

class Triangle extends Shape {
    private final double b, h;
    public Triangle(double b, double h) { super("Triangle"); this.b = b; this.h = h; }
    @Override public double area() { return 0.5 * b * h; }
}

class Main {
    public static void main(String[] args) {
        Shape[] shapes = { new Square(4), new Triangle(6, 3) };
        for (Shape s : shapes) System.out.println(s.describe());
    }
}`,
    output: `Square area = 16.0
Triangle area = 9.0`,
    commonMistakes: [
      "Trying to call new Shape() on an abstract class — compile error. You must instantiate a concrete subclass.",
      "Forgetting to implement an abstract method in a concrete subclass — compile error.",
      "Using abstract class when an interface would do — prefer interfaces for pure contracts; abstract class when there's shared state/code.",
    ],
    cpp: `class Shape {
public:
    virtual double area() = 0;   // pure virtual
    virtual ~Shape() = default;
    std::string name;
};
class Square : public Shape { /* ... */ };`,
    related: ["interfaces", "inheritance", "polymorphism", "classes"],
  },

  packages: {
    beginnerExplanation: `A package is just a folder for your classes — it keeps related code together and prevents name conflicts. Think of it like organizing files on your computer: you don't dump every photo, document, and song in one giant folder. You have a 'Photos' folder, a 'Documents' folder, a 'Music' folder. Packages do the same for Java classes.

Without packages, if you and I both wrote a class called 'User' and tried to use them in the same project, Java wouldn't know which one to pick — a name clash. Packages solve this by giving each class a full name that includes its folder. My User is 'com.kirby.app.User' and yours is 'com.you.app.User' — no clash. By convention, package names use a reversed domain name (com.company.project) so they're globally unique.

The 'package' statement goes at the very top of a file (it must be the first line), and the 'import' statement brings in classes from other packages so you can use them by their short name. Without 'import java.util.List', you'd have to write 'java.util.List' everywhere — annoying. The package name also maps to a real folder path on disk: 'com.kirby.app' lives in 'com/kirby/app/'.`,
    methods: [
      "package name; — declare the package (must be the first line of the file)",
      "import package.Class; — bring in one class from another package",
      "import package.*; — bring in all classes from a package",
      "import static package.Class.member; — import a static field/method directly",
      "default package — no package statement (classes live in an unnamed folder)",
    ],
    title: "Packages",
    category: "OOP",
    description: "A package is a namespace that groups related classes and interfaces. Packages prevent name conflicts, control visibility (package-private access), and make large codebases manageable. The package statement must be the first line of a file. The convention is a reversed domain name: com.company.project.module. The import statement brings in specific classes or whole packages (import com.company.project.*;).",
    syntax: `// File: com/example/util/Logger.java
package com.example.util;

public class Logger {
    public void log(String msg) { System.out.println("[LOG] " + msg); }
}

// File: com/example/app/Main.java
package com.example.app;

import com.example.util.Logger;          // single class
import com.example.util.*;                // whole package
import static java.lang.Math.*;           // static import

public class Main {
    public static void main(String[] args) {
        Logger log = new Logger();
        log.log("Hello");
        double r = sqrt(16);              // static import
    }
}`,
    parameters: [
      ["package", "First statement in the file — declares the namespace"],
      ["import", "Brings a class or all classes of a package into scope"],
      ["import static", "Imports static members so you can use them unqualified (e.g., PI, out)"],
      ["default package", "No package statement — class lives in the unnamed package; can't be imported from named packages"],
    ],
    returnValue: "Packages don't return anything — they are a namespace mechanism. The package name maps directly to a directory path on disk (com/example/util/Logger.java).",
    example: `// File: animals/Animal.java
package animals;
public class Animal {
    public String name() { return "Animal"; }
}

// File: Main.java (default package)
import animals.Animal;
import animals.*;             // alternative: whole package
import static java.lang.System.out;

class Main {
    public static void main(String[] args) {
        Animal a = new Animal();
        out.println(a.name());     // static import of System.out
    }
}`,
    output: `Animal`,
    commonMistakes: [
      "File path doesn't match the package — com.example.Foo must live in com/example/Foo.java or the compiler won't find it.",
      "Putting import statements before the package declaration — package must come first.",
      "Using import to load classes at runtime — imports are compile-time only; class loading uses the classpath.",
      "Naming a package starting with java or javax — reserved, won't compile.",
    ],
    cpp: `// C++ has namespaces, not packages
namespace animals { class Animal { /* ... */ }; }
using animals::Animal;`,
    related: ["classes", "access-modifiers", "interfaces"],
  },

  /* ============================================================ COLLECTIONS */
  collections: {
    beginnerExplanation: `The Collections Framework is Java's library of ready-made data structures — different ways to organize groups of items. Instead of building your own list or map from scratch (which is hard to get right), you pick one from the framework and it just works.

There are four main types, each for a different need:

• 'List' — an ordered, indexed collection that allows duplicates. Like a shopping list: items stay in the order you added them, and you can have 'milk' twice. Use 'ArrayList' for fast random access, 'LinkedList' for frequent insertions at the start/end.

• 'Set' — a collection that rejects duplicates. Like a club membership list: each person can only be on it once. Use 'HashSet' for speed (no order), 'TreeSet' for sorted order.

• 'Queue/Deque' — designed for FIFO (first-in-first-out) or stack (last-in-first-out) behavior. Like a line at a café: first person in line gets served first. Use 'ArrayDeque'.

• 'Map' — a mapping from keys to values. Like a phone book: name → phone number. Each key is unique. Use 'HashMap' for speed, 'TreeMap' for sorted keys.

All collections work with generics for type safety: 'List<String>' only holds Strings. The biggest gotcha: don't modify a collection while iterating with a for-each loop — you'll get 'ConcurrentModificationException'. Use 'iterator.remove()' or 'list.removeIf(...)' instead.`,
    title: "Collections",
    category: "Collections",
    description: "The Java Collections Framework (java.util) provides ready-to-use data structures: List (ordered, indexed), Set (no duplicates), Queue / Deque (FIFO / both ends), and Map (key → value). Each interface has multiple implementations — ArrayList vs LinkedList, HashSet vs TreeSet, HashMap vs TreeMap. Choose by access pattern and ordering needs. All collections work with generics for type safety.",
    syntax: `import java.util.*;

// List — ordered, indexed, allows duplicates
List<String> list = new ArrayList<>();
list.add("a"); list.add("b");
String first = list.get(0);

// Set — no duplicates
Set<Integer> set = new HashSet<>();
set.add(1); set.add(1);           // ignored
boolean has = set.contains(1);

// Map — key → value
Map<String, Integer> map = new HashMap<>();
map.put("ana", 19);
int age = map.get("ana");

// Queue / Deque
Deque<String> stack = new ArrayDeque<>();
stack.push("x"); stack.push("y");
String top = stack.pop();

// Iterate
for (String s : list) System.out.println(s);
list.forEach(System.out::println);
map.forEach((k, v) -> System.out.println(k + "=" + v));`,
    methods: [
      "Collection: add(e), remove(e), contains(e), size(), isEmpty(), clear(), iterator()",
      "List: get(i), set(i, e), indexOf(e), subList(from, to)",
      "Set: add(e), remove(e), contains(e) — all O(1) for HashSet, O(log n) for TreeSet",
      "Map: put(k,v), get(k), containsKey(k), containsValue(v), remove(k), keySet(), values(), entrySet()",
      "Queue: offer(e), poll(), peek()",
      "Deque: push(e), pop(), offerFirst/Last(), peekFirst/Last()",
      "Collections.sort(list) — in-place sort",
      "Collections.reverse(list), Collections.shuffle(list)",
      "Collections.unmodifiableList/Set/Map — read-only view",
      "Collections.synchronizedList/Set/Map — thread-safe wrapper",
    ],
    parameters: [
      ["<Type>", "Generic type parameter — List<String> only accepts Strings"],
      ["initialCapacity", "Optional constructor hint, e.g. new HashMap<>(64) — avoids resizing"],
      ["loadFactor", "HashMap tunable, default 0.75 — when to resize"],
      ["Comparator", "Optional ordering for TreeSet/TreeMap or Collections.sort"],
    ],
    returnValue: "add() returns boolean (false if rejected, e.g., duplicate in a Set). put() returns the previous value for the key (or null). get() returns the value or null. Iterator.next() returns the next element.",
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // List
        List<String> langs = new ArrayList<>(List.of("Java", "Python", "C++"));
        langs.add("Go");
        System.out.println("List: " + langs);
        System.out.println("Get 0: " + langs.get(0));

        // Set — dedupe
        Set<Integer> nums = new HashSet<>(List.of(1, 2, 2, 3, 3, 3));
        System.out.println("Set: " + nums);

        // Map
        Map<String, Integer> ages = new HashMap<>();
        ages.put("Ana", 19);
        ages.put("Bob", 21);
        ages.forEach((k, v) -> System.out.println(k + " -> " + v));
        System.out.println("Ana's age: " + ages.get("Ana"));

        // Deque as stack
        Deque<String> stack = new ArrayDeque<>();
        stack.push("first");
        stack.push("second");
        System.out.println("Pop: " + stack.pop());

        // Sort
        Collections.sort(langs);
        System.out.println("Sorted: " + langs);
    }
}`,
    output: `List: [Java, Python, C++, Go]
Get 0: Java
Set: [1, 2, 3]
Ana -> 19
Bob -> 21
Ana's age: 19
Pop: second
Sorted: [C++, Go, Java, Python]`,
    commonMistakes: [
      "Using new ArrayList<>() with a capacity assumption and being surprised when add still resizes — capacity is just a hint.",
      "Modifying a collection while iterating with a for-each — ConcurrentModificationException. Use Iterator.remove() or removeIf().",
      "Using HashMap and expecting sorted keys — use TreeMap or sort keySet() afterwards.",
      "Returning the internal List from a getter — callers can mutate it. Wrap with Collections.unmodifiableList().",
    ],
    cpp: `#include <vector>     // List -> std::vector
#include <unordered_set> // Set  -> std::unordered_set
#include <unordered_map> // Map  -> std::unordered_map
std::vector<std::string> langs = {"Java", "Python"};
std::unordered_map<std::string,int> ages;`,
    related: ["arrays", "generics", "loops", "classes"],
  },

  /* ============================================================ UTILITIES */
  "exception-handling": {
    beginnerExplanation: `An exception is Java's way of saying 'something went wrong, I can't continue.' It's like a fire alarm going off in a building — the normal work stops, and someone has to deal with the problem. Without exceptions, a program would just crash or produce garbage when something unexpected happens. With exceptions, you can catch the problem, handle it gracefully, and keep going.

Think of a calculator app. If a user tries to divide by zero, the program can't compute the answer — that's an ArithmeticException. Without handling, the app crashes. With handling, you wrap the risky code in a 'try' block, and if something goes wrong, the matching 'catch' block runs instead — maybe showing a friendly 'Can't divide by zero!' message. There's also 'finally' for cleanup that should always happen (like closing a file), whether or not something went wrong.

Java has two kinds of exceptions. 'Checked' exceptions are things the compiler forces you to handle (like a file not being found) — you must either catch them or declare that your method 'throws' them. 'Unchecked' exceptions (like NullPointerException) are programming bugs — the compiler doesn't force you to handle them, but you should still avoid causing them.`,
    methods: [
      "try { risky code } — block of code that might throw an exception",
      "catch (ExceptionType e) { handle } — handle a specific exception type",
      "finally { cleanup } — always runs, exception or not (use for closing resources)",
      "throw new ExceptionType(\"msg\"); — raise a new exception manually",
      "throws ExceptionType — declare that a method may propagate this exception",
      "try (Resource r = ...) { } — try-with-resources: auto-closes the resource (Java 7+)",
      "catch (A | B e) — multi-catch: handle multiple exception types in one block",
    ],
    title: "Exception Handling",
    category: "Utilities",
    description: "Exceptions are objects representing abnormal conditions during execution. Java uses try/catch/finally to handle them. There are two families: checked (subclasses of Exception, must be declared or caught — e.g., IOException) and unchecked (subclasses of RuntimeException, e.g., NullPointerException). Use try-with-resources (Java 7+) to auto-close AutoCloseable resources. The try/catch/finally order matters: try, then one or more catch, then optional finally.",
    syntax: `try {
    risky();
} catch (SpecificException e) {
    handle(e);
} catch (Exception e) {
    fallback(e);
} finally {
    always();   // runs regardless (skip on System.exit)
}

// Multi-catch (Java 7+)
try { ... } catch (IOException | SQLException e) { ... }

// Try-with-resources — auto-close
try (BufferedReader br = new BufferedReader(new FileReader(f))) {
    String line = br.readLine();
} // br.close() called automatically

// Throw + declare
public void load(String path) throws IOException {
    if (path == null) throw new IllegalArgumentException("path");
    Files.readString(Path.of(path));
}`,
    parameters: [
      ["try", "Block of code that may throw an exception"],
      ["catch", "Handles a specific exception type — first matching block wins"],
      ["finally", "Always runs after try/catch — use for cleanup"],
      ["throw", "Re-raises an exception or raises a new one"],
      ["throws", "Declares checked exceptions a method may propagate"],
      ["try-with-resources", "Declares AutoCloseable resources that are closed automatically"],
    ],
    returnValue: "try/catch blocks don't return values. The method's return type is what matters. If an exception propagates out of main, the JVM prints the stack trace and exits with non-zero code.",
    example: `import java.io.*;

public class Main {
    static int divide(int a, int b) {
        if (b == 0) throw new ArithmeticException("div by zero");
        return a / b;
    }

    static String firstLine(String path) throws IOException {
        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            return br.readLine();     // br auto-closed even on exception
        }
    }

    public static void main(String[] args) {
        try {
            System.out.println(divide(10, 0));
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage());
        } finally {
            System.out.println("Done.");
        }

        try {
            String s = firstLine("nope.txt");
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage());
        }
    }
}`,
    output: `Caught: div by zero
Done.
File error: nope.txt (No such file or directory)`,
    commonMistakes: [
      "Catching Exception/Throwable broadly and swallowing it — hides bugs. Log or rethrow.",
      "Forgetting try-with-resources and leaking files/connections — always use it for AutoCloseable.",
      "Returning from finally — it overrides any return or exception from the try block. Never return from finally.",
      "Throwing a checked exception without declaring throws or catching it — compile error.",
    ],
    cpp: `try {
    risky();
} catch (const std::exception& e) {
    std::cerr << e.what() << "\\n";
}
// No checked exceptions in C++; no finally (use RAII instead).`,
    related: ["methods", "classes", "file-handling", "input-output"],
  },

  "file-handling": {
    beginnerExplanation: `File handling is how a program reads from and writes to files on your computer. Without it, every time your program ended, all its data would disappear — like writing on a whiteboard that gets wiped clean. Files let your program save data permanently: settings, documents, game saves, logs.

Java has two file APIs. The old one (java.io) uses 'File', 'FileReader', 'BufferedReader' — clunky and verbose. The modern one (java.nio.file, Java 7+) uses 'Path' and 'Files' — one-liners for most tasks. 'Files.readString(path)' reads a whole text file into a String. 'Files.writeString(path, text)' writes a String to a file. 'Files.readAllLines(path)' gives you a List of lines. 'Files.lines(path)' gives you a stream of lines for memory-efficient processing of huge files. Always prefer the modern API for new code.

The #1 rule of file handling: ALWAYS close your files when done. Open files use up system resources (file descriptors), and if you forget to close them, your program eventually can't open any more. The easiest way is 'try-with-resources': 'try (var br = new BufferedReader(...)) { ... }' — Java automatically closes the resource when the block ends, even if an exception is thrown.

Why does it matter? Any program that saves user data, reads configuration, or processes documents needs file I/O. It's the bridge between your program's temporary memory and permanent storage.`,
    title: "File Handling",
    category: "Utilities",
    description: "Java has two main APIs for files: the classic java.io package (File, FileInputStream, BufferedReader) and the modern java.nio.file package (Path, Files) introduced in Java 7. The modern Files class is almost always better — one-liners for read/write/copy/move/delete, proper exception handling, and stream-based directory walking. Files.readString / writeString (Java 11+) make small file I/O trivial.",
    syntax: `import java.nio.file.*;
import java.io.*;
import java.util.stream.*;

// Modern (preferred)
Path p = Path.of("data.txt");
Files.writeString(p, "hello");
String content = Files.readString(p);
List<String> lines = Files.readAllLines(p);
byte[] bytes = Files.readAllBytes(p);

// Stream lines lazily
try (Stream<String> s = Files.lines(p)) {
    s.filter(l -> l.startsWith("#")).forEach(System.out::println);
}

// Append
Files.writeString(p, "\\nmore", StandardOpenOption.APPEND);

// Copy / move / delete
Files.copy(src, dst, StandardCopyOption.REPLACE_EXISTING);
Files.move(src, dst);
Files.delete(p);

// Classic (legacy)
BufferedReader br = new BufferedReader(new FileReader("x.txt"));
String line = br.readLine();`,
    methods: [
      "Files.writeString(path, text) — write a String (UTF-8), Java 11+",
      "Files.readString(path) — read entire file as a String, Java 11+",
      "Files.readAllLines(path) — List<String>, one per line",
      "Files.readAllBytes(path) — byte[] of entire file",
      "Files.lines(path) — lazy Stream<String>, must close",
      "Files.exists(path) / Files.notExists(path)",
      "Files.copy(src, dst, options) — copy with REPLACE_EXISTING / COPY_ATTRIBUTES",
      "Files.move(src, dst, options) — rename/move",
      "Files.delete(path) — throws if missing; use deleteIfExists to be lenient",
      "Files.createDirectory / createDirectories(path) — mkdir -p style",
      "Files.list(dir) — Stream<Path> of immediate children",
      "Files.walk(dir) — recursive Stream<Path>",
    ],
    parameters: [
      ["Path", "Modern replacement for File — use Path.of(\"a/b.txt\")"],
      ["StandardOpenOption", "CREATE, APPEND, TRUNCATE_EXISTING, READ, WRITE"],
      ["StandardCopyOption", "REPLACE_EXISTING, COPY_ATTRIBUTES, ATOMIC_MOVE"],
      ["Charset", "Defaults to UTF-8 — pass explicitly for legacy files"],
    ],
    returnValue: "readString returns String. readAllLines returns List<String>. readAllBytes returns byte[]. lines/list/walk return Stream<Path> that must be closed in try-with-resources. writeString returns the Path written.",
    example: `import java.nio.file.*;
import java.io.IOException;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Path dir  = Path.of("demo");
        Path file = dir.resolve("note.txt");

        Files.createDirectories(dir);
        Files.writeString(file, "Line 1\\nLine 2\\nLine 3\\n");

        // Read back
        String all = Files.readString(file);
        System.out.println("--- readString ---");
        System.out.print(all);

        // Read lines as a list
        System.out.println("--- readAllLines ---");
        Files.readAllLines(file).forEach(System.out::println);

        // Filter lines lazily
        System.out.println("--- lines().filter ---");
        try (Stream<String> s = Files.lines(file)) {
            s.filter(l -> l.contains("2")).forEach(System.out::println);
        }

        // Walk directory
        System.out.println("--- walk ---");
        try (Stream<Path> w = Files.walk(dir)) {
            w.forEach(System.out::println);
        }

        Files.deleteIfExists(file);
        Files.deleteIfExists(dir);
    }
}`,
    output: `--- readString ---
Line 1
Line 2
Line 3
--- readAllLines ---
Line 1
Line 2
Line 3
--- lines().filter ---
Line 2
--- walk ---
demo
demo/note.txt`,
    commonMistakes: [
      "Forgetting to close Files.lines() / Files.walk() streams — they hold open file handles. Use try-with-resources.",
      "Using java.io.File for new code — prefer java.nio.file.Path / Files.",
      "Loading huge files entirely with readAllBytes / readAllLines — out-of-memory risk. Stream them with Files.lines().",
      "Ignoring the IOException — declare it or handle it; silently swallowing loses data.",
    ],
    cpp: `#include <fstream>
std::ifstream in("data.txt");
std::string line;
while (std::getline(in, line)) { ... }
std::ofstream out("data.txt"); out << "hello";`,
    related: ["exception-handling", "input-output", "collections"],
  },

  "date-time": {
    beginnerExplanation: `The Date & Time API is how Java handles dates, times, and durations. Need to know what day it is? Calculate someone's age? Schedule something for next Tuesday? Find the days between two dates? This API does all of that.

Java 8 introduced the modern 'java.time' package, and you should ALWAYS use it — the old 'Date' and 'Calendar' classes are confusing, mutable, and have weird quirks (months were 0-indexed in Calendar, so January was 0). The modern types are immutable (safe), clear, and well-designed.

The main types: 'LocalDate' is a date with no time (2025-12-31). 'LocalTime' is a time with no date (23:59). 'LocalDateTime' is both. 'ZonedDateTime' adds a timezone. 'Instant' is a moment on the global timeline (UTC). 'Duration' is a length of time in hours/minutes/seconds. 'Period' is a length of time in years/months/days. You create them with '.now()' for the current moment or '.of(...)' for a specific value. Arithmetic returns a NEW value (they're immutable): 'today.plusDays(1)' gives tomorrow without changing today.

Formatting uses 'DateTimeFormatter' with patterns like 'yyyy-MM-dd HH:mm'. Parsing is the reverse: 'LocalDate.parse("2025-12-31", formatter)'. To find the days between two dates, use 'ChronoUnit.DAYS.between(start, end)'.

Why does it matter? Every app deals with time — birthdays, deadlines, scheduling, logging, expiry. Getting dates right is surprisingly hard (timezones, leap years, daylight saving), and the java.time API handles all of it correctly.`,
    title: "Date & Time",
    category: "Utilities",
    description: "The modern Date & Time API (java.time, introduced in Java 8) is immutable, thread-safe, and clear. The legacy classes (Date, Calendar, SimpleDateFormat) are mutable and error-prone — avoid them. Core types: LocalDate (date only), LocalTime (time only), LocalDateTime (both), ZonedDateTime (with timezone), Instant (UTC moment), Duration (hours/minutes), Period (years/months/days). DateTimeFormatter parses and formats.",
    syntax: `import java.time.*;
import java.time.format.*;

// Current
LocalDate  today = LocalDate.now();
LocalTime  now   = LocalTime.now();
LocalDateTime dt = LocalDateTime.now();
ZonedDateTime zdt = ZonedDateTime.now(ZoneId.of("Asia/Manila"));
Instant    inst  = Instant.now();           // UTC

// Create specific
LocalDate  d  = LocalDate.of(2025, 12, 31);
LocalTime  t  = LocalTime.of(23, 59, 0);
LocalDateTime ldt = LocalDateTime.of(d, t);

// Parse / format
DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
LocalDateTime parsed = LocalDateTime.parse("2025-12-31 23:59", fmt);
String s = parsed.format(fmt);

// Arithmetic — returns NEW instance (immutable)
LocalDate tomorrow = today.plusDays(1);
LocalDate lastWeek = today.minusWeeks(1);
Duration twoHours  = Duration.ofHours(2);
Period  fiveYears  = Period.ofYears(5);

// Difference
long daysBetween = ChronoUnit.DAYS.between(d1, d2);`,
    methods: [
      "now() — current moment in the type's natural zone",
      "of(...) — create a specific value",
      "parse(text) / parse(text, formatter) — parse a String",
      "format(formatter) — produce a String",
      "plusDays / plusMonths / plusYears / minusX — arithmetic (returns new instance)",
      "isBefore / isAfter / isEqual — comparison",
      "Duration.between(start, end) — time-based amount",
      "Period.between(start, end) — date-based amount (years, months, days)",
      "ChronoUnit.DAYS.between(a, b) — total units between two dates",
      "atZone(ZoneId) — convert LocalDateTime to ZonedDateTime",
      "toInstant() / Instant.ofEpochMilli(ms) — interop with legacy",
    ],
    parameters: [
      ["year, month, day", "Integers; month can be Month.JANUARY enum to avoid off-by-one"],
      ["ZoneId", "Timezone identifier like \"Asia/Manila\", \"UTC\", or systemDefault()"],
      ["pattern", "DateTimeFormatter pattern: yyyy MM dd HH mm ss SSS"],
      ["Duration vs Period", "Duration = hours/min/sec (exact), Period = years/months/days (calendar-aware)"],
    ],
    returnValue: "All java.time types are immutable — arithmetic methods return new instances. now()/of() return the type. format() returns String. parse() returns the type. between() returns a long or a Duration/Period.",
    example: `import java.time.*;
import java.time.format.*;
import java.time.temporal.ChronoUnit;

public class Main {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        LocalDate newYear = LocalDate.of(2026, 1, 1);

        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("MMM d, yyyy");
        System.out.println("Today:    " + today.format(fmt));
        System.out.println("New Year: " + newYear.format(fmt));

        long days = ChronoUnit.DAYS.between(today, newYear);
        System.out.println("Days to New Year: " + days);

        LocalTime meeting = LocalTime.of(14, 30);
        LocalTime end     = meeting.plusHours(1).plusMinutes(15);
        System.out.println("Meeting ends: " + end);

        ZonedDateTime here = ZonedDateTime.now(ZoneId.of("Asia/Manila"));
        ZonedDateTime utc  = here.withZoneSameInstant(ZoneId.of("UTC"));
        System.out.println("Here: " + here);
        System.out.println("UTC : " + utc);

        // Parse + arithmetic
        LocalDate dob = LocalDate.parse("2000-05-15");
        Period age = Period.between(dob, today);
        System.out.printf("Age: %d years %d months%n", age.getYears(), age.getMonths());
    }
}`,
    output: `Today:    Aug 6, 2026
New Year: Jan 1, 2026
Days to New Year: 148
Meeting ends: 15:45
Here: 2026-08-06T...+08:00[Asia/Manila]
UTC : 2026-08-06T...Z[UTC]
Age: 26 years 2 months`,
    commonMistakes: [
      "Using the old Date / Calendar — they are mutable, months are 0-indexed in Calendar, and thread-unsafe. Use java.time.",
      "Forgetting that plus/minus return a new instance — LocalDate d = today.plusDays(1); doesn't change today.",
      "Mixing Duration and Period — Duration.ofDays(1) is exactly 24 hours; Period.ofDays(1) is one calendar day (can be 23 or 25 across DST).",
      "Using LocalDateTime when you actually need an instant — LocalDateTime has no timezone, can't represent a moment.",
    ],
    cpp: `#include <chrono>
auto now = std::chrono::system_clock::now();
auto t = std::chrono::year{2026}/1/1;     // C++20 calendar`,
    related: ["strings", "exception-handling", "collections"],
  },

  generics: {
    beginnerExplanation: `Generics let you write code that works with any type, while still keeping type safety. Imagine you have a magic box that can hold anything — sometimes a book, sometimes a phone, sometimes a sandwich. Without generics, you'd have to label the box 'Object' (holds anything), but then every time you reach in, you don't know what you grabbed — you might think it's a book and bite into a sandwich. With generics, you label the box 'Box<Book>' or 'Box<Phone>' — Java guarantees only books go in the book box, and only phones go in the phone box.

The most common place you'll see generics is with collections. 'List<String>' means 'a list that only holds Strings.' 'Map<String, Integer>' means 'a map from String keys to Integer values.' If you try to put an Integer into a List<String>, Java stops you at compile time — no runtime surprises. The '<String>' part is called a type parameter, and by convention it's a single uppercase letter: T for Type, E for Element, K for Key, V for Value.

You can also write your own generic classes and methods. 'class Box<T> { T value; }' defines a Box that can hold any type T — then 'Box<String>' creates a string box, 'Box<Integer>' creates an integer box. One class definition, infinite type-safe uses.

Why does it matter? Before generics (Java 1.4 and earlier), collections held 'Object' and you had to cast every time you pulled something out — slow and error-prone. Generics eliminated that entire class of bugs.`,
    methods: [
      "class Box<T> { } — declare a generic class with type parameter T",
      "<T> returnType method(T arg) — declare a generic method",
      "<T extends Bound> — restrict T to be a Bound or subclass",
      "List<String> — a List that only holds Strings",
      "Map<K, V> — a Map from key type K to value type V",
      "? — wildcard: any type (List<?>)",
      "? extends T — covariant: T or any subclass (read-only)",
      "? super T — contravariant: T or any superclass (write-only)",
    ],
    title: "Generics",
    category: "Utilities",
    description: "Generics let you write code that works on a type you specify later, with compile-time type safety. The most common use is generic collections: List<String> only holds Strings. Generics are implemented by erasure — at runtime, List<String> and List<Integer> are both just List. Type parameters are conventionally single uppercase letters: T (Type), E (Element), K (Key), V (Value), R (Result).",
    syntax: `// Generic class
public class Box<T> {
    private T value;
    public void set(T v) { value = v; }
    public T get()       { return value; }
}

// Generic method
public static <T> T first(List<T> list) { return list.get(0); }

// Bounded type parameter
public static <T extends Comparable<T>> T max(List<T> l) { /* ... */ }

// Wildcards
List<?>              anything;            // unknown type
List<? extends Number>  readOnlyNumbers;  // covariant, read-only
List<? super Integer>   writeOnlyInts;    // contravariant, write-only

// Usage
Box<String> name = new Box<>();
name.set("Ana");
String s = name.get();`,
    parameters: [
      ["<T>", "Type parameter — placeholder for a real type"],
      ["<T extends Bound>", "T must be Bound or a subtype — gives access to Bound's methods"],
      ["<?>", "Unbounded wildcard — any type, but you can't add (except null)"],
      ["<? extends T>", "Covariant — \"T or a subclass\"; safe to read, unsafe to write"],
      ["<? super T>", "Contravariant — \"T or a superclass\"; safe to write, read returns Object"],
      ["<T, K, V>", "Multiple type parameters"],
    ],
    returnValue: "Generic classes/methods work with the declared type parameter. Because of erasure, you can't say new T() or new T[] at runtime — generics are a compile-time feature.",
    example: `import java.util.*;

public class Main {
    // Generic method
    public static <T> List<T> reverse(List<T> in) {
        List<T> out = new ArrayList<>(in);
        Collections.reverse(out);
        return out;
    }

    // Bounded — T must be Comparable
    public static <T extends Comparable<T>> T max(List<T> l) {
        T best = l.get(0);
        for (T x : l) if (x.compareTo(best) > 0) best = x;
        return best;
    }

    // PECS example
    public static double sum(List<? extends Number> nums) {
        double s = 0;
        for (Number n : nums) s += n.doubleValue();
        return s;
    }

    public static void main(String[] args) {
        List<String> names = List.of("Ana", "Bob", "Cy");
        System.out.println(reverse(names));
        System.out.println(max(List.of(3, 9, 1, 7)));
        System.out.println(sum(List.of(1, 2.5, 3)));   // List<Number>-ish
    }
}`,
    output: `[Cy, Bob, Ana]
9
6.5`,
    commonMistakes: [
      "Trying new T() or new T[] — erasure means T isn't known at runtime. Pass a Class<T> or Supplier<T>.",
      "Mixing List<Integer> and List<Number> — they're not related even though Integer extends Number. Use <? extends Number> for read-only.",
      "Forgetting PECS — Producer Extends, Consumer Super. Read from ? extends, write to ? super.",
      "Casting (List<String>) a List<Object> — runtime ClassCastException. Use wildcards instead.",
    ],
    cpp: `template <typename T>
T max(const std::vector<T>& v) { /* ... */ }
// C++ templates are compile-time code generation; Java generics are erasure.`,
    related: ["collections", "classes", "methods", "interfaces"],
  },

  /* ============================================================ ADVANCED */
  multithreading: {
    beginnerExplanation: `Multithreading is how a program does multiple things at the same time. Imagine you're cooking dinner: while the pasta boils (8 minutes), you chop onions, and while those fry, you set the table. You're one person doing three tasks 'simultaneously' by switching between them. A computer with multiple CPU cores can genuinely run multiple threads in parallel — like having three chefs in the kitchen.

In Java, you create a thread with 'new Thread(() -> { work }).start()'. The 'work' is a block of code that runs in the background while your main program continues. The classic example: a download manager that downloads three files at once, each in its own thread, instead of one after another — three times faster on a multi-core machine.

The danger: when multiple threads share data, things can go wrong. If two threads try to update the same counter at the same time, you can lose updates (both read 5, both add 1, both write 6 — should be 7). Solutions: 'synchronized' blocks ensure only one thread enters a section at a time; 'AtomicInteger' and friends do safe lock-free updates; 'ConcurrentHashMap' is a thread-safe map. The modern way is 'ExecutorService' — a thread pool that manages threads for you, so you submit tasks and let the pool handle the scheduling.

Why does it matter? Modern CPUs have many cores. Multithreading lets you use them all — for faster downloads, responsive UIs, handling thousands of users at once. But it adds complexity, so use it when the speedup is worth it.`,
    title: "Multithreading",
    category: "Advanced",
    description: "Java has built-in multithreading — every program runs on at least one thread. Create threads by extending Thread, implementing Runnable, or submitting Callable tasks to an ExecutorService (preferred). Shared mutable state must be synchronized — use synchronized methods/blocks, atomic variables (AtomicInteger), or higher-level concurrency utilities from java.util.concurrent: Lock, ConcurrentHashMap, CountDownLatch, CompletableFuture. The modern way is to use virtual threads (Project Loom, Java 21+) for cheap massive concurrency.",
    syntax: `// 1. Extend Thread
class MyThread extends Thread {
    public void run() { System.out.println("running"); }
}
new MyThread().start();

// 2. Implement Runnable
Runnable task = () -> System.out.println("running");
new Thread(task).start();

// 3. ExecutorService (preferred)
ExecutorService pool = Executors.newFixedThreadPool(4);
Future<Integer> f = pool.submit(() -> 42);
int result = f.get();
pool.shutdown();

// 4. Synchronization
public synchronized void add(int x) { count += x; }

// 5. Atomic
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();

// 6. Virtual thread (Java 21+)
Thread.startVirtualThread(() -> System.out.println("vt"));`,
    methods: [
      "Thread.start() — begins a new thread and calls run()",
      "Thread.sleep(ms) — pause current thread",
      "Thread.currentThread() — reference to the running thread",
      "thread.join() — wait for thread to finish",
      "ExecutorService.submit(Callable) — returns Future",
      "Future.get() — block for the result",
      "synchronized (lock) { ... } — mutual exclusion block",
      "wait() / notify() / notifyAll() — on a synchronized object's monitor",
      "AtomicInteger.incrementAndGet() / get() — lock-free counter",
      "CountDownLatch.await() / countDown() — thread coordination",
      "CompletableFuture.supplyAsync(supplier) — async pipeline",
    ],
    parameters: [
      ["Runnable", "Zero-arg, void task — basic unit of work"],
      ["Callable<V>", "Zero-arg task that returns V and may throw"],
      ["ExecutorService", "Thread pool — manages a queue of tasks"],
      ["synchronized", "Mutual exclusion on an object's monitor"],
      ["volatile", "Field flag: reads/writes go straight to main memory (visibility, not atomicity)"],
    ],
    returnValue: "Thread.run() returns void. Callable.call() returns a value of type V. Future.get() blocks until the task completes and returns the result (or throws ExecutionException wrapping any error).",
    example: `import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

public class Main {
    public static void main(String[] args) throws Exception {
        AtomicInteger counter = new AtomicInteger();

        Runnable task = () -> {
            for (int i = 0; i < 1000; i++) counter.incrementAndGet();
        };

        ExecutorService pool = Executors.newFixedThreadPool(4);
        for (int i = 0; i < 4; i++) pool.submit(task);

        // Submit a Callable
        Future<Integer> sum = pool.submit(() -> 1 + 2 + 3);

        pool.shutdown();
        pool.awaitTermination(2, TimeUnit.SECONDS);

        System.out.println("Counter: " + counter.get());
        System.out.println("Sum: " + sum.get());
    }
}`,
    output: `Counter: 4000
Sum: 6`,
    commonMistakes: [
      "Calling run() instead of start() — runs on the current thread, no new thread is created.",
      "Sharing a mutable HashMap across threads — use ConcurrentHashMap instead.",
      "Forgetting to shutdown() an ExecutorService — JVM won't exit. Always call shutdown() in finally.",
      "Using synchronized on a non-final field — if the field is reassigned, you lock a different object.",
    ],
    cpp: `#include <thread>
std::thread t([]{ /* work */ });
t.join();
std::atomic<int> counter{0};
// Or use std::async / std::future for tasks.`,
    related: ["classes", "methods", "exception-handling", "collections"],
  },

  networking: {
    beginnerExplanation: `Networking is how a Java program talks to other computers — over the internet, over a local network, or even between processes on the same machine. Every time you open a web browser, send a message, or stream a video, networking is happening under the hood.

There are two main ways Java does networking:

1. Low-level TCP/UDP with 'Socket' and 'ServerSocket'. This is like making a phone call: one side (the server) listens, the other side (the client) dials, and once connected, they can send data back and forth until one hangs up. TCP is reliable — data arrives in order, no losses. UDP is faster but unreliable — like sending postcards, some might get lost.

2. High-level HTTP with 'HttpClient' (Java 11+). This is the modern way to talk to web servers. You build an 'HttpRequest' with a URL and method (GET, POST), send it, and get an 'HttpResponse' back with the status code (200 OK, 404 Not Found) and body (the HTML, JSON, or whatever the server returned). It supports HTTP/2, async requests, and timeouts.

Always set timeouts on network calls — without one, a slow or dead server will make your program hang forever. And use try-with-resources for sockets so they're closed even if an error occurs. For production HTTP, consider a library like OkHttp or the Spring WebClient — they add connection pooling, retries, and JSON parsing on top of HttpClient.`,
    title: "Networking",
    category: "Advanced",
    description: "Java's java.net package supports TCP/IP and UDP networking. Socket and ServerSocket are the classic low-level TCP primitives. For HTTP, the modern HttpClient (Java 11+) is far simpler than HttpURLConnection — it supports HTTP/2, async requests, and JSON via BodyHandlers. URI / URL represent resource addresses. Always close sockets and use try-with-resources.",
    syntax: `import java.net.*;
import java.net.http.*;
import java.time.*;

// TCP client
try (Socket sock = new Socket("example.com", 80)) {
    var out = sock.getOutputStream();
    var in  = sock.getInputStream();
    // write/read bytes
}

// TCP server
try (ServerSocket server = new ServerSocket(8080)) {
    Socket client = server.accept();
    // handle client
}

// HTTP client (Java 11+) — preferred for HTTP
HttpClient http = HttpClient.newBuilder()
    .version(HttpClient.Version.HTTP_2)
    .connectTimeout(Duration.ofSeconds(5))
    .build();

HttpRequest req = HttpRequest.newBuilder()
    .uri(URI.create("https://api.github.com/zen"))
    .timeout(Duration.ofSeconds(5))
    .GET().build();

HttpResponse<String> resp = http.send(req, HttpResponse.BodyHandlers.ofString());
System.out.println(resp.statusCode());
System.out.println(resp.body());

// Async
http.sendAsync(req, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println);`,
    methods: [
      "new Socket(host, port) — open a TCP connection",
      "new ServerSocket(port) — listen for incoming connections",
      "server.accept() — block until a client connects, return Socket",
      "HttpClient.newHttpClient() — default client",
      "HttpClient.send(req, handler) — synchronous request",
      "HttpClient.sendAsync(req, handler) — returns CompletableFuture<HttpResponse>",
      "HttpRequest.newBuilder().uri(u).GET().build() — build a request",
      "HttpResponse.statusCode() / body() / headers()",
      "BodyHandlers.ofString / ofByteArray / ofFile / ofInputStream",
    ],
    parameters: [
      ["host", "Hostname or IP, e.g., \"example.com\" or \"127.0.0.1\""],
      ["port", "TCP port 1..65535"],
      ["HTTP method", "GET, POST, PUT, DELETE — via .GET() / .POST(body) / etc."],
      ["BodyHandler", "Tells Java how to consume the response body"],
      ["timeout", "Connect or request Duration; throws HttpTimeoutException on expiry"],
    ],
    returnValue: "Socket I/O methods return bytes or -1 at end of stream. HttpClient.send() returns HttpResponse<T> — statusCode() is the HTTP code, body() is the deserialized body.",
    example: `import java.net.*;
import java.net.http.*;
import java.time.Duration;

public class Main {
    public static void main(String[] args) throws Exception {
        HttpClient http = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(5))
            .build();

        HttpRequest req = HttpRequest.newBuilder()
            .uri(URI.create("https://httpbin.org/get"))
            .header("Accept", "application/json")
            .timeout(Duration.ofSeconds(5))
            .GET().build();

        HttpResponse<String> resp = http.send(req, HttpResponse.BodyHandlers.ofString());
        System.out.println("Status: " + resp.statusCode());
        System.out.println("First 120 chars:");
        System.out.println(resp.body().substring(0, Math.min(120, resp.body().length())));

        // Async example
        http.sendAsync(req, HttpResponse.BodyHandlers.ofString())
            .thenApply(HttpResponse::statusCode)
            .thenAccept(code -> System.out.println("Async status: " + code))
            .join();
    }
}`,
    output: `Status: 200
First 120 chars:
{
  "args": {}, 
  "headers": {
    "Accept": "application/json", 
    "Content-Length": "0", 
    "Host": "httpbin.org"
Async status: 200`,
    commonMistakes: [
      "Forgetting to set a timeout — a hung server will block forever.",
      "Using the legacy HttpURLConnection for new code — HttpClient is cleaner, supports HTTP/2 and async.",
      "Not closing sockets — use try-with-resources; otherwise file-descriptor leaks.",
      "Calling send() on the main thread for slow requests — UI freezes. Use sendAsync() instead.",
    ],
    cpp: `// C++ has no standard HTTP client; use a library like cpr or libcurl.
// For raw sockets:
#include <sys/socket.h>
int s = socket(AF_INET, SOCK_STREAM, 0);
connect(s, ...);`,
    related: ["exception-handling", "multithreading", "file-handling", "jdbc"],
  },

  jdbc: {
    beginnerExplanation: `JDBC (Java Database Connectivity) is how Java programs talk to databases. A database is like a giant, organized spreadsheet that lives on a server — it stores your app's users, products, orders, etc. JDBC is the bridge that lets your Java code send SQL queries to the database and get results back.

The flow is always the same four steps:
1. Connect: 'DriverManager.getConnection(url, user, pass)' — like logging into the database.
2. Prepare: 'con.prepareStatement(sql)' — write your SQL with '?' placeholders for values.
3. Execute: 'ps.executeQuery()' for SELECT (returns rows), 'ps.executeUpdate()' for INSERT/UPDATE/DELETE (returns row count).
4. Read: loop through 'ResultSet' with 'rs.next()' and 'rs.getInt("column")' / 'rs.getString("column")'.

The #1 rule of JDBC: ALWAYS use 'PreparedStatement' with '?' placeholders for any user-supplied value, NEVER concatenate strings to build SQL. String concatenation leads to SQL injection — a security hole where attackers type SQL into your input fields and trick your database into running it. With PreparedStatement, the values are sent separately from the SQL, so injection is impossible.

The #2 rule: ALWAYS use try-with-resources to close connections, statements, and result sets. Database connections are expensive and limited — leak them and your app will eventually fail to connect. Try-with-resources guarantees closure even on exceptions.`,
    title: "JDBC",
    category: "Advanced",
    description: "JDBC (Java Database Connectivity) is the standard API for talking to relational databases from Java. The core types are DriverManager / Connection, Statement / PreparedStatement, and ResultSet. For any value coming from user input, ALWAYS use PreparedStatement with ? placeholders — String concatenation leads to SQL injection. Try-with-resources ensures connections, statements, and result sets are closed even on exceptions.",
    syntax: `import java.sql.*;

// 1. Get a connection
String url = "jdbc:postgresql://localhost:5432/mydb";
try (Connection con = DriverManager.getConnection(url, "user", "pass")) {

    // 2. Query with parameters (safe from SQL injection)
    String sql = "SELECT id, name FROM users WHERE age > ?";
    try (PreparedStatement ps = con.prepareStatement(sql)) {
        ps.setInt(1, 18);

        // 3. Execute
        try (ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                int    id   = rs.getInt("id");
                String name = rs.getString("name");
                System.out.println(id + " " + name);
            }
        }
    }

    // 4. Insert / update — use executeUpdate()
    try (PreparedStatement ps = con.prepareStatement(
            "INSERT INTO users(name, age) VALUES (?, ?)")) {
        ps.setString(1, "Ana");
        ps.setInt(2, 19);
        int rows = ps.executeUpdate();
        System.out.println("Inserted " + rows + " row(s)");
    }
}  // all resources auto-closed`,
    methods: [
      "DriverManager.getConnection(url, user, pass) — open a Connection",
      "con.prepareStatement(sql) — precompiled SQL with ? placeholders",
      "ps.setInt(i, v) / setString(i, v) / setDouble / setNull / setObject — bind values, 1-indexed",
      "ps.executeQuery() — run SELECT, returns ResultSet",
      "ps.executeUpdate() — run INSERT/UPDATE/DELETE, returns affected row count",
      "ps.executeBatch() — batch multiple updates",
      "rs.next() — move cursor; returns false at end",
      "rs.getInt / getString / getDouble / getDate(col) — read a column value",
      "con.setAutoCommit(false) + commit() / rollback() — manual transactions",
      "con.close() — release the connection back to the pool",
    ],
    parameters: [
      ["jdbc URL", "jdbc:postgresql://host:port/db — driver-specific"],
      ["? placeholder", "Bind with setXxx(index, value) — index is 1-based"],
      ["column index or name", "rs.getInt(1) or rs.getInt(\"id\") — name is more readable"],
      ["autoCommit", "Default true; set false for multi-statement transactions"],
    ],
    returnValue: "executeQuery() returns a ResultSet (cursor before first row). executeUpdate() returns the number of affected rows. rs.getXxx() returns the column value (0 / null if SQL NULL — use wasNull() to distinguish).",
    example: `import java.sql.*;

public class Main {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:h2:mem:test";      // in-memory H2 database
        try (Connection con = DriverManager.getConnection(url, "sa", "")) {

            // Create a table
            try (Statement st = con.createStatement()) {
                st.execute("CREATE TABLE users (id INT AUTO_INCREMENT, name VARCHAR(50), age INT)");
            }

            // Insert with parameters — safe from injection
            try (PreparedStatement ps = con.prepareStatement(
                    "INSERT INTO users(name, age) VALUES (?, ?)")) {
                ps.setString(1, "Ana");  ps.setInt(2, 19); ps.executeUpdate();
                ps.setString(1, "Bob");  ps.setInt(2, 21); ps.executeUpdate();
                ps.setString(1, "Cy");   ps.setInt(2, 17); ps.executeUpdate();
            }

            // Query
            try (PreparedStatement ps = con.prepareStatement(
                    "SELECT id, name, age FROM users WHERE age >= ? ORDER BY name")) {
                ps.setInt(1, 18);
                try (ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        System.out.printf("%d  %-4s  %d%n",
                            rs.getInt("id"), rs.getString("name"), rs.getInt("age"));
                    }
                }
            }
        }
    }
}`,
    output: `1  Ana   19
2  Bob   21`,
    commonMistakes: [
      "Concatenating user input into SQL — SQL injection. ALWAYS use PreparedStatement with ? placeholders.",
      "Forgetting try-with-resources — connections leak and the pool exhausts.",
      "Calling rs.getInt(\"id\") after rs.next() returned false — cursor is past the end.",
      "Mixing up 1-based JDBC indices with 0-based Java indices — JDBC columns and bind parameters are 1-based.",
    ],
    cpp: `// No standard C++ DB API. Use a library like libpqxx (PostgreSQL) or soci.
pqxx::connection c("dbname=test");
pqxx::work tx(c);
pqxx::result r = tx.exec("SELECT id, name FROM users WHERE age > $1", 18);`,
    related: ["exception-handling", "collections", "classes"],
  },

  javafx: {
    beginnerExplanation: `JavaFX is Java's toolkit for building graphical desktop apps — windows with buttons, text fields, tables, charts. If you've ever used a desktop application (not a website), it was built with something like JavaFX. Think of it as Java's answer to HTML/CSS/JavaScript, but for native desktop programs.

A JavaFX app has a hierarchy: a 'Stage' (the window) contains a 'Scene' (the content area), which contains a 'root' layout (like VBox for vertical stack, HBox for horizontal, BorderPane for top/center/bottom/left/right regions), which contains 'controls' (Button, Label, TextField, etc.). You build this tree in code or declare it in FXML (an XML format), style it with CSS, and JavaFX renders it.

The event-driven model is key: instead of your code running top-to-bottom, it waits for events (button clicks, key presses) and runs 'handlers' in response. You register a handler with 'button.setOnAction(e -> { ... })' — when the user clicks, the lambda runs. This is how every GUI works, from JavaFX to web pages to mobile apps.

The big rule: NEVER do slow work (file I/O, network, database) on the JavaFX Application Thread — it's the same thread that draws the UI, so if you block it, the UI freezes. Use a background 'Task' for slow work, then call 'Platform.runLater(() -> ...)' to safely update the UI from the background thread. Since Java 11, JavaFX is a separate module you add to your project (it's no longer bundled with the JDK).`,
    title: "JavaFX (Optional)",
    category: "Advanced",
    description: "JavaFX is Java's modern UI toolkit for desktop applications — the successor to Swing. It uses a scene graph of Nodes organized into Stage > Scene > Parent > children. Layouts include VBox, HBox, BorderPane, GridPane. Controls are Button, Label, TextField, TableView, ListView. JavaFX is event-driven: you register handlers with setOnAction(...). Styling uses CSS, and FXML lets you declare UI declaratively in XML. Since Java 11, JavaFX is a separate module.",
    syntax: `import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class App extends Application {
    @Override
    public void start(Stage stage) {
        Label label = new Label("Counter: 0");
        Button btn  = new Button("Click me");

        btn.setOnAction(e -> {
            count++;
            label.setText("Counter: " + count);
        });

        VBox root = new VBox(10, label, btn);
        root.setStyle("-fx-padding: 20; -fx-alignment: center;");

        Scene scene = new Scene(root, 300, 200);
        stage.setScene(scene);
        stage.setTitle("JavaFX Demo");
        stage.show();
    }

    private int count = 0;

    public static void main(String[] args) { launch(args); }
}`,
    methods: [
      "Application.launch(args) — entry point, calls start(Stage)",
      "stage.setScene(scene) — set the scene to display",
      "stage.show() — display the window",
      "node.setOnAction(handler) — register an event handler",
      "scene.getRoot() — top of the scene graph",
      "label.setText(s) / getText()",
      "button.setOnAction(e -> ...)",
      "textField.getText() / setEditable(boolean)",
      "tableView.setItems(observableList) — bind data",
      "root.getChildren().add(node) — add a child to a Pane",
    ],
    parameters: [
      ["Stage", "Top-level window — one per app by default"],
      ["Scene", "Content area inside a Stage — can be swapped"],
      ["Node", "Anything in the scene graph: controls, shapes, layouts"],
      ["layout", "Container that positions children: VBox, HBox, BorderPane, GridPane, StackPane"],
      ["CSS", "Style with -fx-background-color, -fx-font-size, etc."],
    ],
    returnValue: "UI methods are void — they mutate the scene graph. Event handlers run on the JavaFX Application Thread.",
    example: `import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class CounterApp extends Application {
    private int count = 0;

    @Override
    public void start(Stage stage) {
        Label label = new Label("Count: 0");
        label.setStyle("-fx-font-size: 18px;");

        Button plus  = new Button("+");
        Button minus = new Button("-");

        plus.setOnAction(e -> label.setText("Count: " + (++count)));
        minus.setOnAction(e -> label.setText("Count: " + (--count)));

        VBox root = new VBox(12, label, plus, minus);
        root.setStyle("-fx-padding: 24; -fx-alignment: center;");

        stage.setScene(new Scene(root, 240, 200));
        stage.setTitle("Counter");
        stage.show();
    }

    public static void main(String[] args) { launch(args); }
}`,
    output: `// A 240x200 window opens with:
//   Count: 0
//   [ + ] [ - ]
// Clicking + increments the displayed counter,
// clicking - decrements it.`,
    commonMistakes: [
      "Updating UI from a background thread — must use Platform.runLater(() -> ...) to get back on the JavaFX Application Thread.",
      "Forgetting to call stage.show() — the window is created but invisible.",
      "Using JavaFX without adding the JavaFX modules (Java 11+) — VM exits with \"Missing JavaFX runtime\". Add --module-path /path/to/javafx-sdk/lib --add-modules javafx.controls.",
      "Heavy work on the JavaFX Application Thread — UI freezes. Offload to a Task / background thread.",
    ],
    cpp: `// C++ has no standard GUI toolkit. Use Qt:
#include <QApplication>
#include <QPushButton>
int main(int argc, char** argv) {
    QApplication app(argc, argv);
    QPushButton btn("Click me");
    btn.show();
    return app.exec();
}`,
    related: ["classes", "inheritance", "multithreading", "methods"],
  },

  "practice-examples": {
    beginnerExplanation: `This topic is a collection of small, complete, runnable Java programs. Reading about syntax is one thing — seeing it all come together in a working program is another. These examples are like training wheels: each one is short enough to read in a minute, but complete enough to actually run. Type them out, change them, break them, fix them. That's how you learn.

The examples cover classic beginner problems: FizzBuzz (the 'hello world' of logic), reversing a string, checking if a number is prime, counting word frequencies in a file. Each one combines several concepts from this cheat sheet — loops, conditionals, strings, methods, collections — so they double as a review of everything you've learned. Don't just read them; copy each one into a .java file, compile it with 'javac', run it with 'java', and watch what happens. Then change something and predict what the new output will be.

Why does this matter? Programming is a skill, and skills are built by doing, not by reading. These examples are your starting point — once you can run and modify them confidently, you're ready to write your own programs from scratch.`,
    methods: [
      "javac Main.java — compile a Java file into bytecode (.class)",
      "java Main — run the compiled program",
      "java -cp .:lib/jar Main — run with a custom classpath",
      "main(String[] args) — the entry point the JVM looks for",
      "System.out.println — the most common way to print output",
      "for / while / if — the building blocks of every program",
    ],
    title: "Practice Examples",
    category: "Advanced",
    description: "A curated set of small programs that tie together the topics in this cheat sheet. Each example shows a complete, runnable Main class — copy any one into a .java file, compile with javac, run with java. Use these as a quick warm-up before interviews, as homework starting points, or as a sanity check that a concept really clicked.",
    syntax: `// 1. Compile
javac Main.java

// 2. Run
java Main

// 3. Run with classpath (if using external jars)
java -cp .:lib/gson.jar Main`,
    parameters: [
      ["filename", "Must match the public class name (Main.java for class Main)"],
      ["classpath", "Where to find classes — current dir by default; add -cp for jars"],
      ["JDK version", "Most examples here target Java 17+ (LTS)"],
    ],
    returnValue: "These are runnable programs — each has a main() entry point and prints to the console. Modify and rerun to experiment.",
    example: `// Example 1 — FizzBuzz
public class FizzBuzz {
    public static void main(String[] args) {
        for (int i = 1; i <= 15; i++) {
            if (i % 15 == 0)      System.out.println("FizzBuzz");
            else if (i % 3 == 0)  System.out.println("Fizz");
            else if (i % 5 == 0)  System.out.println("Buzz");
            else                  System.out.println(i);
        }
    }
}

// Example 2 — Reverse a string
class Reverse {
    public static void main(String[] args) {
        String s = "Java";
        String r = new StringBuilder(s).reverse().toString();
        System.out.println(r);                       // avaJ
    }
}

// Example 3 — Check prime
class Prime {
    static boolean isPrime(int n) {
        if (n < 2) return false;
        for (int i = 2; (long) i * i <= n; i++)
            if (n % i == 0) return false;
        return true;
    }
    public static void main(String[] args) {
        for (int n = 2; n <= 20; n++)
            if (isPrime(n)) System.out.print(n + " ");
        System.out.println();
    }
}

// Example 4 — Read file, count word frequencies
class WordCount {
    public static void main(String[] args) throws java.io.IOException {
        var path = java.nio.file.Path.of("input.txt");
        var freq = new java.util.HashMap<String, Integer>();
        try (var lines = java.nio.file.Files.lines(path)) {
            lines.flatMap(l -> java.util.Arrays.stream(l.split("\\W+")))
                 .filter(w -> !w.isEmpty())
                 .forEach(w -> freq.merge(w, 1, Integer::sum));
        }
        freq.entrySet().stream()
            .sorted((a, b) -> b.getValue() - a.getValue())
            .limit(5)
            .forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));
    }
}`,
    output: `// FizzBuzz output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

// Reverse output:
avaJ

// Prime output:
2 3 5 7 11 13 17 19

// WordCount output (depends on input.txt):
the: 14
java: 9
and: 7
to: 6
in: 5`,
    commonMistakes: [
      "Naming the file differently from the public class — javac Main.java requires class Main.",
      "Forgetting that String is immutable — calling s.reverse() doesn't exist and s.toUpperCase() doesn't change s.",
      "Reading the whole file when a stream would do — use Files.lines() for large files.",
      "Not closing streams — Files.lines() holds an open file handle; always wrap in try-with-resources.",
    ],
    cpp: `// FizzBuzz in C++:
#include <iostream>
int main() {
    for (int i = 1; i <= 15; i++) {
        if (i % 15 == 0) std::cout << "FizzBuzz\\n";
        else if (i % 3 == 0) std::cout << "Fizz\\n";
        else if (i % 5 == 0) std::cout << "Buzz\\n";
        else std::cout << i << "\\n";
    }
}`,
    related: ["java-basics", "loops", "conditionals", "strings", "collections", "file-handling"],
  },

  /* ============================================================ BASICS — extras */
  "wrapper-classes": {
    beginnerExplanation: `Wrapper classes are object versions of primitives. Java has a split personality: 'int', 'double', 'boolean' are primitives (fast, simple, not objects), but 'Integer', 'Double', 'Boolean' are wrapper classes (objects, with methods, can be null). Wrappers exist because some parts of Java (like the Collections Framework) can only work with objects — you can't make a 'List<int>', but you can make a 'List<Integer>'.

The good news: since Java 5, you rarely think about wrappers because of 'autoboxing' and 'unboxing.' When you write 'list.add(42)', Java automatically converts the int 42 to an Integer object behind the scenes. When you write 'int n = list.get(0)', it automatically unboxes the Integer back to an int. It's invisible — you write code as if collections held primitives.

The dangerous part: wrappers can be null, primitives can't. If you have a 'List<Integer>' with a null element and you try to unbox it (e.g., in a sum loop), you get NullPointerException. Also, comparing wrappers with '==' is unreliable due to caching: 'Integer a = 100; Integer b = 100; a == b' is true (cached), but 'Integer a = 200; Integer b = 200; a == b' is false (not cached). Always use '.equals()' to compare wrapper values.

Wrappers also provide useful static methods: 'Integer.parseInt("42")' converts a string to int, 'Integer.MAX_VALUE' is the largest int, 'Character.isDigit('5')' checks if a character is a digit, 'Integer.toBinaryString(10)' gives '1010'. Use these instead of writing your own conversions.`,
    title: "Wrapper Classes",
    category: "Basics",
    description: "Wrapper classes (Integer, Double, Long, Boolean, Character, Byte, Short, Float) wrap primitive values in objects. They're needed because Java collections (List, Map, Set) can only store objects, not primitives. Java 5 added autoboxing (primitive to wrapper) and unboxing (wrapper to primitive) so the conversion happens automatically. Wrappers are immutable and cached for small values (Integer cache: -128 to 127).",
    syntax: `// Manual boxing (rarely needed since Java 5)
Integer i = Integer.valueOf(42);
int n = i.intValue();

// Autoboxing / unboxing (automatic)
Integer wrapped = 42;        // autoboxes int -> Integer
int primitive = wrapped;     // unboxes Integer -> int

// Parse from String
int    n = Integer.parseInt("42");
double d = Double.parseDouble("3.14");

// Convert to String
String s1 = Integer.toString(42);
String s2 = String.valueOf(3.14);

// Common constants and helpers
Integer.MAX_VALUE / Integer.MIN_VALUE
Character.isDigit('5')
Character.isLetter('a')
Character.toUpperCase('a')`,
    methods: [
      "valueOf(primitive) — returns a cached or new wrapper instance",
      "xxxValue() — intValue(), doubleValue(), etc. — returns the primitive",
      "parseXxx(String) — parseInt, parseDouble, parseBoolean — primitive from String",
      "toString() — String representation of the value",
      "compareTo(Wrapper) — for ordering",
      "equals(Object) — value equality (since wrappers are objects, == is unreliable)",
      "Character.isDigit / isLetter / isWhitespace / isUpperCase / toUpperCase",
      "Integer.MAX_VALUE / MIN_VALUE — constants for the type's range",
      "Integer.bitCount(int) — number of 1-bits",
      "Integer.toBinaryString / toHexString / toOctalString",
    ],
    parameters: [
      ["primitive", "The matching primitive: int→Integer, double→Double, etc."],
      ["String", "Text to parse — must be a valid number or throws NumberFormatException"],
      ["cache", "Integer caches -128..127; Byte/Short/Long cache -128..127; Character caches 0..127"],
    ],
    returnValue: "valueOf returns the wrapper type. xxxValue returns the primitive. parseXxx returns the primitive. toString returns String. All wrappers are immutable.",
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Autoboxing in collections
        List<Integer> nums = new ArrayList<>();
        nums.add(1);    // autoboxes int -> Integer
        nums.add(2);
        nums.add(3);
        int sum = 0;
        for (Integer n : nums) sum += n;   // unboxes Integer -> int
        System.out.println("Sum: " + sum);

        // Parsing
        int age = Integer.parseInt("19");
        double pi = Double.parseDouble("3.14159");
        boolean flag = Boolean.parseBoolean("true");
        System.out.printf("age=%d, pi=%.2f, flag=%b%n", age, pi, flag);

        // Integer cache surprise
        Integer a = 100;     // cached
        Integer b = 100;     // same cached instance
        System.out.println(a == b);         // true

        Integer c = 200;     // outside cache
        Integer d = 200;     // different instances
        System.out.println(c == d);         // false!
        System.out.println(c.equals(d));    // true — always use equals

        // Character helpers
        System.out.println(Character.isDigit('5'));      // true
        System.out.println(Character.isLetter('A'));     // true
        System.out.println(Character.toUpperCase('a'));  // A

        // Constants and conversions
        System.out.println(Integer.MAX_VALUE);           // 2147483647
        System.out.println(Integer.toBinaryString(10));  // 1010
    }
}`,
    output: `Sum: 6
age=19, pi=3.14, flag=true
true
false
true
true
true
A
2147483647
1010`,
    commonMistakes: [
      "Comparing wrappers with == — works for cached values (-128..127 for Integer) but breaks for larger values. Always use .equals().",
      "Unboxing a null wrapper — NullPointerException. List<Integer> with null element, auto-unboxing throws.",
      "Using Integer when int would do — wrappers add 16+ bytes of overhead per value and indirection cost.",
    ],
    cpp: `// C++ has no wrappers — primitives work directly in containers.
std::vector<int> nums = {1, 2, 3};
int n = std::stoi("42");
double d = std::stod("3.14");`,
    related: ["data-types", "collections", "generics", "type-casting", "methods"],
  },

  "type-casting": {
    beginnerExplanation: `Type casting is converting a value from one type to another. Think of it like converting units: you can convert 1.5 hours to 90 minutes (widening — no info lost), or convert 90 minutes to 1 hour (narrowing — you lose the half-hour). Java has the same two kinds of conversions.

'Widening' conversions are safe and automatic — like pouring a small glass of water into a big bucket. An int (which holds up to ~2 billion) fits easily into a long (which holds much bigger numbers), so Java just does it for you: 'long big = smallInt;' works with no extra work. 'Narrowing' conversions can lose information — like pouring a big bucket into a small glass, some water might spill. So Java makes you write the cast explicitly to say 'I know I might lose data, do it anyway': 'int small = (int) 3.99;' gives you 3 (the .99 is lost).

There's also object casting, which is different. If you have an Object variable that actually holds a String, you can cast it back to String: 'String s = (String) obj;' But if obj actually holds an Integer, this crashes with ClassCastException at runtime. That's why you should always check with 'instanceof' first: 'if (obj instanceof String) { String s = (String) obj; }'`,
    methods: [
      "(TargetType) value — explicit cast operator",
      "Widening: int → long → float → double — automatic, no info lost",
      "Narrowing: double → float → long → int — explicit, may lose precision",
      "(String) obj — downcast an Object reference to String (runtime-checked)",
      "instanceof — check an object's type before casting (safe pattern)",
      "Integer.parseInt(\"42\") — convert String to int (not a cast, a parse)",
      "String.valueOf(42) — convert int to String",
    ],
    title: "Type Casting",
    category: "Basics",
    description: "Type casting converts a value from one type to another. Java has two kinds: implicit (widening) — automatic, safe, no information loss (int to long to float to double); and explicit (narrowing) — requires you to write the target type in parens, may lose information (double to int). For object references, casting changes the compile-time type; a downcast can fail at runtime with ClassCastException.",
    syntax: `// Widening (implicit, automatic)
int    i = 100;
long   l = i;          // int  -> long
float  f = l;          // long -> float
double d = f;          // float -> double

// Narrowing (explicit cast)
double d = 3.99;
int    i = (int) d;    // 3 — truncates toward zero
long   l = 1000L;
int    n = (int) l;    // 1000 — may overflow if l > Integer.MAX_VALUE

// Object reference casts
Object o = "Hello";
String s = (String) o;             // downcast — runtime-checked

// Safe pattern: instanceof first
if (o instanceof String s2) {      // Java 16+ pattern variable
    System.out.println(s2.length());
}

// Numeric string -> primitive
int n = Integer.parseInt("42");

// Primitive -> String
String s = String.valueOf(42);
String s = "" + 42;`,
    parameters: [
      ["(TargetType)", "Cast operator — converts the value to TargetType"],
      ["widening", "int to long to float to double — automatic, no loss"],
      ["narrowing", "double to float to long to int — explicit, may lose precision or overflow"],
      ["downcast", "(Subclass) parentRef — runtime-checked, throws ClassCastException if wrong"],
      ["upcast", "Subclass to Parent — implicit, always safe"],
    ],
    returnValue: "Casting returns the value in the new type. Numeric narrowing truncates (toward zero) or overflows silently. Object downcasts return the same reference with a different compile-time type, or throw ClassCastException.",
    example: `public class Main {
    public static void main(String[] args) {
        // Widening — automatic
        int i = 42;
        long l = i;
        double d = l;
        System.out.println("int=" + i + " long=" + l + " double=" + d);

        // Narrowing — explicit, loses data
        double price = 19.99;
        int rounded = (int) price;        // 19 — truncates
        System.out.println("rounded: " + rounded);

        // Overflow on narrowing
        long big = 3_000_000_000L;
        int truncated = (int) big;        // wraps around
        System.out.println("overflow: " + truncated);   // -1294967296

        // Object casting
        Object obj = "Java";
        String s = (String) obj;          // OK — obj actually is a String
        System.out.println(s.length());   // 4

        // Safe instanceof pattern (Java 16+)
        Object[] items = {"hello", 42, "world", 3.14};
        for (Object o : items) {
            if (o instanceof String str) {
                System.out.println("String of length " + str.length());
            } else {
                System.out.println("Not a string: " + o.getClass().getSimpleName());
            }
        }

        // String <-> primitive
        int n = Integer.parseInt("100");
        String text = String.valueOf(n);
        System.out.println("n=" + n + ", text=" + text);
    }
}`,
    output: `int=42 long=42 double=42.0
rounded: 19
overflow: -1294967296
4
String of length 5
Not a string: Integer
String of length 5
Not a string: Double
n=100, text=100`,
    commonMistakes: [
      "Casting a sibling type — (String) someObject where someObject is actually an Integer throws ClassCastException at runtime.",
      "Trusting the cast compiles — for primitives, casting between unrelated types (boolean to int) is a compile error; for objects, the compiler only checks the type hierarchy, not the actual runtime type.",
      "Forgetting that narrowing truncates toward zero — (int) -3.99 gives -3, not -4.",
    ],
    cpp: `// C++ has implicit and explicit (static_cast) conversions
double d = 3.99;
int i = static_cast<int>(d);   // 3
// C-style cast also works: int i = (int)d;`,
    related: ["data-types", "variables", "wrapper-classes", "polymorphism", "objects"],
  },

  recursion: {
    beginnerExplanation: `Recursion is when a function calls itself to solve a smaller version of the same problem. Imagine you're standing in a long line and want to know how many people are ahead of you. You can't see the front, so you ask the person in front of you: 'How many people are ahead of YOU?' They ask the same question to the person ahead of them, and so on, until someone is at the front and says 'zero.' Then each person adds 1 to the answer they got and passes it back. That's recursion — each call asks a smaller version of the same question.

Every recursion needs two things: a BASE CASE (when to stop — 'I'm at the front, return 0') and a RECURSIVE CASE (call yourself with a smaller input — 'ask the person ahead of me'). Without a base case, the calls never stop and the program crashes with StackOverflowError. The classic example is factorial: 5! = 5 × 4!, and 4! = 4 × 3!, down to 1! = 1 (the base case). You write 'factorial(5)' and it calls 'factorial(4)' which calls 'factorial(3)'... all the way down, then the answers multiply back up.

Recursion shines for problems that are naturally recursive: tree traversal (a tree contains smaller trees), divide-and-conquer algorithms (split a problem in half, solve each half), and fractals. But for simple loops, plain iteration is usually faster and uses less memory — Java doesn't optimize tail recursion, so deep recursion can crash. Use recursion when the problem is naturally recursive; use loops otherwise.`,
    methods: [
      "ReturnType method(params) — define a recursive method",
      "Base case: if (smallest input) return answer; — stop condition",
      "Recursive case: return method(smaller input); — call self",
      "StackOverflowError — what happens if you forget the base case",
      "Accumulator parameter — carry the result so far (tail-recursion style)",
      "Memoization — cache results to avoid re-computing (Fibonacci optimization)",
    ],
    title: "Recursion",
    category: "Basics",
    description: "Recursion is when a method calls itself to solve a smaller instance of the same problem. Every recursion needs a base case (when to stop) and a recursive case (call with smaller input). Without a base case you get StackOverflowError. Recursion shines on tree-structured problems (factorials, Fibonacci, tree traversal, divide-and-conquer). For deep recursion, prefer iteration or tail-call style; Java doesn't optimize tail calls.",
    syntax: `ReturnType method(params) {
    if (baseCase) {
        return baseValue;            // stop
    }
    // recursive case — call with smaller input
    return method(smallerParams);
}

// Two common patterns:

// 1. Return value up the chain (factorial)
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 2. Accumulator (tail-recursive style)
int factorial(int n, int acc) {
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}`,
    parameters: [
      ["base case", "Condition that stops recursion — without it, StackOverflowError"],
      ["recursive case", "Call self with smaller / simpler input that approaches the base case"],
      ["accumulator", "Optional parameter that carries the result so far — enables tail recursion"],
      ["max depth", "JVM default stack is ~512KB-1MB, allowing ~10,000 frames (varies)"],
    ],
    returnValue: "A recursive method returns whatever its base case returns, or what the recursive call returns (often combined with current-step work).",
    example: `public class Main {
    // Classic factorial
    static int factorial(int n) {
        if (n <= 1) return 1;            // base case
        return n * factorial(n - 1);     // recursive
    }

    // Fibonacci — naive (exponential, slow)
    static int fib(int n) {
        if (n < 2) return n;
        return fib(n - 1) + fib(n - 2);
    }

    // Sum of digits
    static int sumDigits(int n) {
        if (n == 0) return 0;
        return n % 10 + sumDigits(n / 10);
    }

    // Power
    static double power(double base, int exp) {
        if (exp == 0) return 1;
        if (exp < 0)  return 1 / power(base, -exp);
        return base * power(base, exp - 1);
    }

    // Reverse a string
    static String reverse(String s) {
        if (s.isEmpty()) return s;
        return reverse(s.substring(1)) + s.charAt(0);
    }

    public static void main(String[] args) {
        System.out.println("5! = " + factorial(5));        // 120
        System.out.println("fib(10) = " + fib(10));        // 55
        System.out.println("sumDigits(1234) = " + sumDigits(1234));  // 10
        System.out.println("2^10 = " + power(2, 10));      // 1024.0
        System.out.println("reverse(Java) = " + reverse("Java"));    // avaJ
    }
}`,
    output: `5! = 120
fib(10) = 55
sumDigits(1234) = 10
2^10 = 1024.0
reverse(Java) = avaJ`,
    commonMistakes: [
      "Forgetting the base case — infinite recursion leads to StackOverflowError.",
      "Not making progress toward the base case — same error even with a base case if the input doesn't shrink.",
      "Naive Fibonacci is O(2^n) — fine for n=30, unusable for n=50. Memoize or iterate.",
      "Deep recursion on linear problems — Java's stack is limited. Convert to iteration for n > ~10,000.",
    ],
    cpp: `int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
// Same recursive pattern in C++; same stack limits.`,
    related: ["methods", "loops", "conditionals", "arrays", "strings"],
  },

  /* ============================================================ OOP — extras */
  annotations: {
    beginnerExplanation: `Annotations are sticky notes you attach to your code. They don't change what the code does by themselves — they're labels that other tools (the compiler, frameworks, or your own runtime code) can read and act on. Think of them like the labels on moving boxes: 'FRAGILE,' 'THIS SIDE UP,' 'KITCHEN.' The label doesn't move the box, but it tells the movers how to handle it.

Java has built-in annotations. '@Override' tells the compiler 'I intend to override a parent method — if I made a typo, yell at me.' '@Deprecated' marks something as 'don't use this anymore, there's a better way.' '@SuppressWarnings("unused")' tells the compiler 'I know this variable looks unused, stop warning me about it.' Frameworks add their own: JUnit uses '@Test' to mark test methods, Spring uses '@Autowired' to inject dependencies, Hibernate uses '@Entity' to mark database-mapped classes.

You can also create your own annotations with '@interface' — like defining a new kind of sticky note. For example, you might create '@Author(name="Kirby")' to tag who wrote each class, then write a tool that reads those tags and generates a credits file. Annotations become most powerful when combined with reflection — code that inspects other code at runtime.`,
    methods: [
      "@Override — tell the compiler you intend to override a parent method",
      "@Deprecated — mark as outdated; callers get a compile warning",
      "@SuppressWarnings(\"type\") — silence a specific compiler warning",
      "@FunctionalInterface — assert an interface has exactly one abstract method",
      "@interface Name { } — declare a custom annotation type",
      "@Retention(RetentionPolicy.RUNTIME) — make the annotation readable at runtime",
      "@Target(ElementType.TYPE) — restrict where the annotation can be used",
    ],
    title: "Annotations",
    category: "OOP",
    description: "Annotations are metadata markers that start with @ and attach to classes, methods, fields, parameters, or other declarations. Java has built-in annotations (@Override, @Deprecated, @SuppressWarnings, @FunctionalInterface), and frameworks like JUnit, Spring, and Hibernate add their own. You can define custom annotations with @interface and process them at compile time or runtime via reflection.",
    syntax: `// Built-in annotations
@Override                    // method overrides a parent
@Deprecated                  // API is outdated, shouldn't be used
@SuppressWarnings("unused")  // suppress a compiler warning
@FunctionalInterface         // interface has exactly one abstract method

// On declarations
@Override
public String toString() { return "..."; }

@Deprecated(since = "1.5", forRemoval = true)
public void oldMethod() { }

// Custom annotation
public @interface Author {
    String name();
    String date() default "";
}

@Author(name = "Kirby", date = "2025-01-01")
public class MyService { ... }`,
    parameters: [
      ["@Override", "Compiler checks that the method actually overrides a parent — catches typos"],
      ["@Deprecated", "Marks API as outdated; callers get a compile warning"],
      ["@SuppressWarnings", "Silences specific compiler warnings (unused, unchecked, etc.)"],
      ["@FunctionalInterface", "Asserts interface has exactly one abstract method (enables lambdas)"],
      ["@interface", "Keyword to declare a custom annotation type"],
      ["RetentionPolicy", "SOURCE (compile-only), CLASS (default), RUNTIME (reflectable)"],
      ["Target", "Where it applies: TYPE, METHOD, FIELD, PARAMETER, etc."],
    ],
    returnValue: "Annotations don't directly return values — they're metadata. Custom annotations can have elements (method-like declarations) that return values when read via reflection.",
    example: `import java.lang.annotation.*;
import java.lang.reflect.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface Author {
    String name();
    String date() default "";
}

@Author(name = "Kirby Paladan", date = "2025-08-06")
public class Main {
    @Override
    public String toString() { return "Main class"; }

    @SuppressWarnings("unused")
    private void helper() { }   // no warning for unused method

    @Deprecated(since = "1.0", forRemoval = true)
    public void legacyApi() { }

    public static void main(String[] args) {
        Main obj = new Main();
        System.out.println(obj);

        // Read custom annotation via reflection
        Author a = Main.class.getAnnotation(Author.class);
        if (a != null) {
            System.out.println("Author: " + a.name());
            System.out.println("Date: " + a.date());
        }
    }
}`,
    output: `Main class
Author: Kirby Paladan
Date: 2025-08-06`,
    commonMistakes: [
      "Adding @Override to a method that doesn't actually override — compile error (which is the point of the annotation).",
      "Forgetting @Retention(RUNTIME) on a custom annotation you want to read via reflection — defaults to CLASS, not visible at runtime.",
      "Using @SuppressWarnings too broadly — it hides real bugs. Apply to the smallest scope possible.",
    ],
    cpp: `// C++ has attributes: [[deprecated]], [[nodiscard]], [[maybe_unused]], [[fallthrough]]
[[deprecated("use newApi() instead")]] void oldApi();
[[nodiscard]] int compute();
[[maybe_unused]] static int x;`,
    related: ["classes", "interfaces", "methods", "lambda-expressions"],
  },

  enums: {
    beginnerExplanation: `An enum (short for 'enumeration') is a special type for when something can only be one of a fixed set of values. Think of traffic lights: a light can only be RED, YELLOW, or GREEN — never blue, never 'maybe.' An enum lets you express exactly that: 'enum TrafficLight { RED, YELLOW, GREEN }'. Nowhere in your code can a TrafficLight be anything else.

Without enums, you'd use integers (1=red, 2=yellow, 3=green) or strings ("RED"). Both are error-prone: a typo like 'trafifcLight = 5' compiles fine but breaks at runtime. With enums, the compiler catches typos — 'TrafficLight.BLUE' is a compile error. Enums are type-safe.

Java enums are more powerful than C/C++ enums. Each constant is a singleton object, and the enum can have fields, constructors, and methods. For example: 'enum Coin { PENNY(1), NICKEL(5), DIME(10), QUARTER(25); private final int cents; Coin(int c) { this.cents = c; } public int getCents() { return cents; } }'. Now 'Coin.QUARTER.getCents()' returns 25. You can even add methods that behave differently per constant.

Enums work great with switch statements (Java doesn't require the enum name in cases — just 'case RED:'). Common uses: days of the week, status codes (PENDING, ACTIVE, CLOSED), directions (UP, DOWN, LEFT, RIGHT), card suits. Use enums whenever a variable can only be one of a known, fixed set of values.`,
    title: "Enums",
    category: "OOP",
    description: "An enum (short for enumeration) is a special type for a fixed set of named constants. Java enums are more powerful than C/C++ — they're full classes that can have fields, constructors, methods, and even implement interfaces. Each constant is a singleton instance of the enum class. Enums are type-safe (can't compare apples to oranges), implement Comparable and Serializable, and are commonly used for state, direction, status, etc.",
    syntax: `public enum Direction {
    UP, DOWN, LEFT, RIGHT
}

// With fields and methods
public enum Planet {
    MERCURY (3.303e+23, 2.4397e6),
    EARTH   (5.976e+24, 6.37814e6),
    MARS    (6.421e+23, 3.3972e6);

    private final double mass;     // in kg
    private final double radius;   // in meters

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double surfaceGravity() {
        return 6.67300E-11 * mass / (radius * radius);
    }
}`,
    methods: [
      "values() — array of all constants, in declaration order",
      "valueOf(String) — returns the constant with that name (case-sensitive)",
      "name() — the constant's name as a String",
      "ordinal() — zero-based position in declaration order (avoid relying on this)",
      "compareTo(E) — by ordinal (implements Comparable)",
      "toString() — name by default, override for custom",
    ],
    parameters: [
      ["enum keyword", "Declares an enum type"],
      ["constants", "Comma-separated UPPERCASE names — each is a static final instance"],
      ["constructor", "Private by default — only called for the declared constants"],
      ["fields/methods", "Optional — make the enum carry data and behavior"],
    ],
    returnValue: "Enum constants are singleton instances of the enum class. values() returns E[]. valueOf returns E. name() and toString() return String. ordinal() returns int.",
    example: `enum Status {
    PENDING,
    IN_PROGRESS,
    COMPLETED,
    FAILED;

    public boolean isTerminal() {
        return this == COMPLETED || this == FAILED;
    }
}

enum Coin {
    PENNY(1), NICKEL(5), DIME(10), QUARTER(25);

    private final int cents;
    Coin(int c) { this.cents = c; }
    public int getCents() { return cents; }
}

class Main {
    public static void main(String[] args) {
        Status s = Status.IN_PROGRESS;
        System.out.println(s);                 // IN_PROGRESS
        System.out.println(s.ordinal());       // 1
        System.out.println(s.isTerminal());    // false

        // Iterate all
        for (Status st : Status.values()) {
            System.out.println(st + " terminal? " + st.isTerminal());
        }

        // valueOf from string
        Status fromStr = Status.valueOf("COMPLETED");
        System.out.println(fromStr);           // COMPLETED

        // Switch on enum (no qualifier needed in cases)
        Coin coin = Coin.QUARTER;
        switch (coin) {
            case PENNY   -> System.out.println("Lucky!");
            case QUARTER -> System.out.println("25 cents");
            default      -> System.out.println(coin.getCents() + " cents");
        }
    }
}`,
    output: `IN_PROGRESS
1
false
PENDING terminal? false
IN_PROGRESS terminal? false
COMPLETED terminal? true
FAILED terminal? true
COMPLETED
25 cents`,
    commonMistakes: [
      "Relying on ordinal() for logic — if someone reorders the constants, your code breaks. Add an explicit field instead.",
      "Forgetting the semicolon after the last constant when the enum has fields/methods — compile error.",
      "Trying to call new on an enum — not allowed; constants are created by the JVM.",
    ],
    cpp: `enum class Status { Pending, InProgress, Completed, Failed };
Status s = Status::InProgress;
// C++ enums are integers, not classes. No fields/methods.`,
    related: ["classes", "conditionals", "annotations", "switch-pattern"],
  },

  /* ============================================================ UTILITIES — extras */
  "regular-expressions": {
    beginnerExplanation: `Regular expressions (regex) are a mini-language for describing text patterns. Imagine you're a librarian searching for books, but instead of saying 'find books with the word Java,' you can say 'find books where the title starts with J, followed by any 3 letters, followed by a number.' Regex lets you express patterns like that.

The basic building blocks: '.' means 'any single character,' '\\d' means 'any digit (0-9),' '\\w' means 'any letter or digit,' '\\s' means 'any whitespace.' You can combine them: '\\d\\d\\d-\\d\\d\\d\\d' matches a phone number like '555-1234.' Quantifiers control repetition: '+' means 'one or more,' '*' means 'zero or more,' '?' means 'zero or one,' '{3}' means 'exactly 3.' So '\\d{3}-\\d{4}' is a cleaner way to write the phone number pattern.

In Java, regex lives in 'java.util.regex'. 'Pattern.compile("\\\\d+")' compiles a pattern (note: backslashes must be doubled in Java strings). 'matcher.find()' searches for the next match. 'string.matches(regex)' checks if the whole string matches. 'string.split(regex)' chops the string on matches. 'string.replaceAll(regex, replacement)' substitutes.

Why does it matter? Regex is the go-to tool for validating formats (emails, phone numbers, dates), extracting data from text (find all URLs in a page), and transforming text (reformat dates). It's powerful but can be hard to read — comment complex patterns liberally.`,
    title: "Regular Expressions",
    category: "Utilities",
    description: "Java's regex support lives in java.util.regex. The two main classes are Pattern (compiled regex) and Matcher (applies the pattern to input). The String class also has convenience methods: matches(regex), split(regex), replaceAll(regex, repl). Common regex syntax: . (any char), \\d \\w \\s (digit/word/space), [a-z] (char class), + * ? {n,m} (quantifiers), ^ $ (anchors), (group) (capture). Always compile a regex once if you use it in a loop.",
    syntax: `import java.util.regex.*;

// Compile + match
Pattern p = Pattern.compile("\\\\d+");     // one or more digits
Matcher m = p.matcher("abc 123 def 456");
while (m.find()) {
    System.out.println(m.group());         // 123, then 456
}

// String convenience methods
"abc123".matches("[a-z]+\\\\d+");          // true
"a,b,c".split(",");                        // [a, b, c]
"hello".replaceAll("l", "L");              // heLLo

// Common patterns
"\\\\d+"                // integer
"\\\\d+\\\\.\\\\d+"      // decimal
"[a-zA-Z]+"             // letters
"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$"   // email
"\\\\b\\\\w+\\\\b"        // words`,
    methods: [
      "Pattern.compile(regex) — compile a regex string into a Pattern",
      "Pattern.compile(regex, flags) — with flags like CASE_INSENSITIVE, MULTILINE, DOTALL",
      "pattern.matcher(input) — create a Matcher for the input string",
      "matcher.matches() — true if the ENTIRE input matches",
      "matcher.find() — true if there's a next match anywhere (use in a loop)",
      "matcher.group() — the last match found (group 0 = whole match)",
      "matcher.group(n) — the nth capture group",
      "matcher.start() / end() — index of the match in the input",
      "matcher.replaceAll(repl) — replace all matches",
      "string.matches(regex) — true if the whole string matches",
      "string.split(regex) — split into pieces",
      "string.replaceAll(regex, repl) — replace all",
    ],
    parameters: [
      ["regex", "A regex string — backslashes must be doubled in Java string literals (\"\\\\d\" for \\d)"],
      ["flags", "Optional: Pattern.CASE_INSENSITIVE, MULTILINE, DOTALL, UNICODE_CASE"],
      ["capture group", "Parenthesized sub-pattern — accessed by group(n) or group(\"name\")"],
      ["replacement", "Replace string — $1, $2 refer to capture groups"],
    ],
    returnValue: "Pattern.compile returns a Pattern. matcher.matches/find return boolean. matcher.group returns the matched String. String.matches returns boolean. String.split returns String[].",
    example: `import java.util.regex.*;

public class Main {
    public static void main(String[] args) {
        // Find all integers in a string
        Pattern p = Pattern.compile("\\\\d+");
        Matcher m = p.matcher("I have 3 cats, 2 dogs, and 1 fish");
        while (m.find()) {
            System.out.println("Found: " + m.group() + " at index " + m.start());
        }

        // Validate email
        String email = "ana@example.com";
        boolean valid = email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$");
        System.out.println("Valid email? " + valid);

        // Capture groups
        Pattern dateP = Pattern.compile("(\\\\d{4})-(\\\\d{2})-(\\\\d{2})");
        Matcher dm = dateP.matcher("Date: 2025-08-06");
        if (dm.find()) {
            System.out.println("Year: " + dm.group(1));   // 2025
            System.out.println("Month: " + dm.group(2));  // 08
            System.out.println("Day: " + dm.group(3));    // 06
        }

        // Replace with capture groups
        String swapped = "2025-08-06".replaceAll("(\\\\d{4})-(\\\\d{2})-(\\\\d{2})", "$3/$2/$1");
        System.out.println(swapped);    // 06/08/2025

        // Split
        String[] parts = "apple,banana;cherry|date".split("[,;|]");
        for (String s : parts) System.out.println(s);

        // Case-insensitive
        Pattern ci = Pattern.compile("hello", Pattern.CASE_INSENSITIVE);
        System.out.println(ci.matcher("HELLO world").find());   // true
    }
}`,
    output: `Found: 3 at index 7
Found: 2 at index 14
Found: 1 at index 26
Valid email? true
Year: 2025
Month: 08
Day: 06
06/08/2025
apple
banana
cherry
date
true`,
    commonMistakes: [
      "Forgetting to double backslashes in Java string literals — \"\\\\d\" for regex \\d, not \"\\d\".",
      "Recompiling the same regex in a loop — compile once with Pattern.compile, reuse the Pattern.",
      "Using matches() when you mean find() — matches() requires the ENTIRE string to match.",
      "Greedy quantifiers eating too much — use reluctant *? or ++ when needed, e.g., \".*?\".",
    ],
    cpp: `#include <regex>
std::regex p("\\\\d+");
std::sregex_iterator it(s.begin(), s.end(), p), end;
for (; it != end; ++it) std::cout << it->str();`,
    related: ["strings", "methods", "scanner", "exception-handling"],
  },

  /* ============================================================ MODERN JAVA */
  "lambda-expressions": {
    beginnerExplanation: `A lambda is a tiny unnamed function you can pass around like a value. Before Java 8, if you wanted to pass behavior into a method, you had to write a whole class implementing an interface — verbose and clunky. Lambdas let you do it in one line. Think of the difference between mailing someone a printed recipe book (a class) versus texting them the recipe (a lambda) — same information, way less packaging.

The syntax is '(parameters) -> body.' For example, '() -> System.out.println("hi")' is a lambda that takes no arguments and prints 'hi.' '(x) -> x * x' is a lambda that takes a number and returns its square. '(a, b) -> a + b' takes two numbers and returns their sum. The '->' arrow separates the inputs from the output. If the body is one expression, it's returned automatically; if it's multiple statements, wrap them in {} and use 'return.'

Lambdas work because of 'functional interfaces' — interfaces with exactly one abstract method. When you assign a lambda to a functional interface variable, Java matches the lambda's signature to that method. Common ones: 'Runnable' (no args, void), 'Comparator<T>' (two args, int), 'Function<T,R>' (one arg, returns R), 'Predicate<T>' (one arg, returns boolean). You'll see lambdas everywhere with the Streams API — they make collection processing concise and readable.`,
    methods: [
      "(params) -> expression — single-expression lambda (auto-returns)",
      "(params) -> { statements; } — multi-statement lambda (use return)",
      "() -> ... — zero-parameter lambda",
      "x -> ... — one-parameter lambda (parens optional)",
      "(a, b) -> ... — two-parameter lambda",
      "ClassName::methodName — method reference (shorthand for a lambda)",
      "FunctionalInterface — an interface with exactly one abstract method",
    ],
    title: "Lambda Expressions",
    category: "Modern Java",
    description: "Lambda expressions, introduced in Java 8, let you treat functionality as method arguments — pass a block of code as if it were a value. A lambda has the form (parameters) -> expression or (parameters) -> { statements; }. They enable functional programming style, especially with the Streams API. The target type of a lambda must be a functional interface (an interface with exactly one abstract method).",
    syntax: `(parameters) -> expression
(parameters) -> { statements; }

// Examples
() -> 42
x -> x * x
(x, y) -> x + y
(String s) -> { System.out.println(s); return s.length(); }

// Assign to a functional interface
Runnable r = () -> System.out.println("hi");
Comparator<Integer> cmp = (a, b) -> a - b;
Function<String, Integer> len = s -> s.length();

// Method reference shorthand
Function<String, Integer> len = String::length;
Supplier<List<String>> factory = ArrayList::new;`,
    parameters: [
      ["parameters", "Comma-separated input params, types optional (inferred). Empty () for none."],
      ["->", "Arrow token separating params from body"],
      ["body", "Single expression (returned) or { statements; } block"],
      ["functional interface", "Target type — must have exactly one abstract method"],
      ["method reference", "Shorthand: ClassName::methodName or instance::method"],
    ],
    returnValue: "A lambda evaluates to an instance of its target functional interface. If the body is a single expression, it's returned automatically. In block form, you must use an explicit return.",
    example: `import java.util.*;
import java.util.function.*;

public class Main {
    public static void main(String[] args) {
        // Lambda assigned to functional interfaces
        Runnable greet = () -> System.out.println("Hello!");
        greet.run();

        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println(isEven.test(4));   // true

        Function<String, Integer> length = String::length;   // method reference
        System.out.println(length.apply("Java")); // 4

        // Used inline with collections
        List<String> names = List.of("Ana", "Bob", "Cy");
        names.forEach(n -> System.out.println(n));
        names.stream()
             .filter(n -> n.startsWith("A"))
             .forEach(System.out::println);

        // Sort with lambda comparator
        List<Integer> nums = new ArrayList<>(List.of(3, 1, 4, 1, 5));
        nums.sort((a, b) -> b - a);   // descending
        System.out.println(nums);
    }
}`,
    output: `Hello!
true
4
Ana
Bob
Cy
Ana
[5, 4, 3, 1, 1]`,
    commonMistakes: [
      "Trying to assign a lambda to a non-functional interface (more than one abstract method) — compile error.",
      "Forgetting that single-expression lambdas auto-return; using return inside them is a syntax error.",
      "Using outer variables that aren't effectively final — lambdas can only capture final or effectively-final locals.",
    ],
    cpp: `// C++ lambdas: [capture](params){ body }
auto greet = []{ std::cout << "Hello!\\n"; };
auto isEven = [](int n){ return n % 2 == 0; };`,
    related: ["streams-api", "interfaces", "methods", "optional", "generics"],
  },

  "streams-api": {
    beginnerExplanation: `The Streams API is a powerful way to process collections of data in a clean, declarative style. Instead of writing a loop that says 'do this, then this, then this,' you describe WHAT you want (filter, transform, collect) and let Java figure out the HOW. It's like the difference between cooking from scratch (imperative) and ordering from a menu (declarative).

A stream pipeline has three parts:
1. Source: where the data comes from (a list, array, file lines).
2. Intermediate operations: transformations that return a new stream — 'filter' (keep matching items), 'map' (transform each item), 'sorted' (order), 'distinct' (remove duplicates), 'limit' (take first N). These are LAZY — they don't run until a terminal operation is called.
3. Terminal operation: produces a result — 'collect' (gather into a List/Set/Map), 'forEach' (do something with each), 'reduce' (combine into one value), 'count', 'findFirst'.

Example: 'names.stream().filter(n -> n.startsWith("A")).map(String::toUpperCase).collect(Collectors.toList())' gives you all names starting with 'A', uppercased, as a list. Compare that to the old way: a for loop, an if check, an uppercase call, an add to a list — five lines instead of one.

Key gotcha: streams are single-use. Once you call a terminal operation, the stream is consumed — you can't reuse it. Generate a new stream from the source if you need to process again. And don't modify the source collection during streaming — you'll get a ConcurrentModificationException.`,
    title: "Streams API",
    category: "Modern Java",
    description: "The Streams API (java.util.stream, Java 8+) lets you process sequences of elements — collections, arrays, I/O channels — declaratively. A pipeline has a source, zero or more intermediate operations (lazy: filter, map, sorted, distinct, limit), and one terminal operation (eager: forEach, collect, reduce, count, toList). Streams don't store data; they pipeline it through operations.",
    syntax: `collection.stream()
    .intermediateOp1(...)
    .intermediateOp2(...)
    .terminalOp();

// Common intermediate ops
.filter(predicate)       // keep matching
.map(function)           // transform each
.flatMap(function)       // flatten
.sorted()                // natural order
.sorted(comparator)      // custom
.distinct()              // remove duplicates
.limit(n)                // first n
.skip(n)                 // skip first n
.peek(action)            // debug side-effect

// Common terminal ops
.forEach(action)         // side-effect per element
.collect(collector)      // gather into List/Set/Map
.toList()                // unmodifiable List (Java 16+)
.reduce(accum)           // combine into one
.count()                 // number of elements
.anyMatch / allMatch / noneMatch(predicate)
.findFirst()             // Optional<T>
.max / min(comparator)`,
    methods: [
      "stream() — create a stream from a collection",
      "Arrays.stream(arr) — stream from an array",
      "Stream.of(values...) — stream from values",
      "Stream.generate(supplier) — infinite stream",
      "filter(Predicate) — keep elements matching",
      "map(Function) — transform each element",
      "flatMap(Function) — transform + flatten",
      "sorted() / sorted(Comparator) — order",
      "distinct() — remove duplicates",
      "limit(n) / skip(n) — truncate",
      "forEach(Consumer) — terminal side-effect",
      "collect(Collector) — gather into collection",
      "toList() — unmodifiable List (Java 16+)",
      "reduce(BinaryOperator) — combine to one",
      "count() — count elements",
      "anyMatch / allMatch / noneMatch(Predicate)",
      "findFirst() — returns Optional<T>",
    ],
    parameters: [
      ["Predicate<T>", "lambda taking T, returning boolean — for filter/match"],
      ["Function<T, R>", "lambda taking T, returning R — for map"],
      ["BinaryOperator<T>", "lambda taking (T, T), returning T — for reduce"],
      ["Collector", "Gathers elements — Collectors.toList(), toSet(), joining(), groupingBy()"],
    ],
    returnValue: "Intermediate ops return a new Stream (lazy). Terminal ops return a value, Optional, collection, or void. The stream is consumed after a terminal op — it can't be reused.",
    example: `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = List.of(5, 2, 8, 1, 9, 3, 7, 4, 6);

        // Filter even, sort, collect
        List<Integer> evens = nums.stream()
            .filter(n -> n % 2 == 0)
            .sorted()
            .toList();
        System.out.println("Evens: " + evens);

        // Map to squares
        List<Integer> squares = nums.stream()
            .map(n -> n * n)
            .toList();
        System.out.println("Squares: " + squares);

        // Reduce — sum
        int sum = nums.stream().reduce(0, Integer::sum);
        System.out.println("Sum: " + sum);

        // Stats
        int max = nums.stream().max(Integer::compareTo).orElse(-1);
        long count = nums.stream().count();
        System.out.println("Max: " + max + ", Count: " + count);

        // Strings
        List<String> names = List.of("Ana", "Bob", "Cy", "Dave");
        String joined = names.stream()
            .filter(s -> s.length() <= 3)
            .map(String::toUpperCase)
            .collect(Collectors.joining(", "));
        System.out.println("Joined: " + joined);

        // Grouping
        Map<Integer, List<String>> byLen = names.stream()
            .collect(Collectors.groupingBy(String::length));
        System.out.println("By length: " + byLen);
    }
}`,
    output: `Evens: [2, 4, 6, 8]
Squares: [25, 4, 64, 1, 81, 9, 49, 16, 36]
Sum: 45
Max: 9, Count: 9
Joined: ANA, BOB, CY
By length: {3=[Ana, Bob], 2=[Cy], 4=[Dave]}`,
    commonMistakes: [
      "Forgetting that streams are single-use — calling a terminal op twice throws IllegalStateException. Generate a new stream.",
      "Confusing intermediate (lazy) and terminal (eager) ops — nothing runs until a terminal op is called.",
      "Using forEach for side-effects when you should use collect — functional style prefers collecting results over mutating external state.",
      "Modifying the source collection during stream processing — ConcurrentModificationException.",
    ],
    cpp: `// C++ ranges (C++20) or algorithms library
#include <algorithm>
#include <ranges>
auto evens = nums | std::views::filter([](int n){ return n%2==0; });
int sum = std::accumulate(nums.begin(), nums.end(), 0);`,
    related: ["lambda-expressions", "collections", "optional", "generics", "methods"],
  },

  records: {
    beginnerExplanation: `A record is a super-short way to write a class whose only job is to hold data. Before records, if you wanted a simple 'Point' class with x and y coordinates, you had to write: fields, constructor, getters, equals, hashCode, toString — easily 30 lines of boilerplate for two pieces of data. A record does all that in one line: 'record Point(int x, int y) {}' — Java automatically generates the constructor, accessors, equals, hashCode, and toString for you.

Think of records like a pre-filled form: you specify the fields at the top, and the rest of the form is auto-completed. The fields are final (can't be changed after creation), which makes records immutable — a fancy way of saying 'once you build a Point, it stays that Point forever.' Immutability is great for safety: immutable objects can't be accidentally modified, can be shared between threads without synchronization, and make great map keys.

Accessing fields is slightly different from regular classes: instead of 'point.getX()', you write 'point.x()'. And you can add validation with a 'compact constructor': 'public Point { if (x < 0) throw ...; }'. Records can also implement interfaces and have additional methods, but they can't be extended (they're implicitly final).

Why does it matter? Records eliminate boilerplate for data-carrying classes — DTOs, value objects, configuration. Less code, fewer bugs, easier to read.`,
    methods: [
      "record Name(Type field1, Type field2) { } — declare a record",
      "new Name(val1, val2) — create a record instance",
      "obj.field1() — accessor (NOT getField1())",
      "obj.equals(other) — value equality (auto-generated)",
      "obj.hashCode() — hash code (auto-generated)",
      "obj.toString() — 'Name[field1=val1, field2=val2]' (auto-generated)",
      "public Name { validation } — compact constructor for validation",
    ],
    title: "Records",
    category: "Modern Java",
    description: "Records (Java 16+) are transparent data carriers — classes whose main job is to hold data. A record auto-generates the constructor, field accessors, equals, hashCode, and toString. They're immutable, final, and concise. Use records for DTOs, value objects, and any class that's mostly state. They can implement interfaces but cannot extend other classes.",
    syntax: `public record Name(Type1 field1, Type2 field2, ...) {
    // optional compact constructor for validation
    public Name {
        if (field1 == null) throw new IllegalArgumentException();
        // assignments happen automatically after this block
    }

    // optional additional methods
    public Type method() { ... }
}

// Usage
Name obj = new Name(value1, value2);
obj.field1();   // accessor (not getField1)
obj.equals(other);
obj.toString();`,
    parameters: [
      ["record", "Keyword to declare a record"],
      ["header", "Parenthesized list of components (Type name) — defines fields and accessors"],
      ["compact constructor", "Optional — same name as record, no params, no parens, for validation"],
      ["components", "Final fields — auto-generated, accessed via obj.fieldName()"],
    ],
    returnValue: "Records auto-generate: a canonical constructor, accessor methods (obj.fieldName()), equals(), hashCode(), and toString(). The record itself cannot be subclassed (implicitly final).",
    example: `public record Point(int x, int y) {
    // Compact constructor with validation
    public Point {
        if (x < 0 || y < 0) throw new IllegalArgumentException("negative");
    }
    public double distanceFromOrigin() {
        return Math.hypot(x, y);
    }
}

public record Person(String name, int age, String email) {}

class Main {
    public static void main(String[] args) {
        Point p1 = new Point(3, 4);
        Point p2 = new Point(3, 4);
        System.out.println(p1.x());              // 3 — accessor
        System.out.println(p1.y());              // 4
        System.out.println(p1.distanceFromOrigin()); // 5.0
        System.out.println(p1.equals(p2));       // true — value equality
        System.out.println(p1);                  // Point[x=3, y=4]

        Person ana = new Person("Ana", 19, "ana@x.com");
        System.out.println(ana.name());          // Ana
    }
}`,
    output: `3
4
5.0
true
Point[x=3, y=4]
Ana`,
    commonMistakes: [
      "Using getX() instead of x() — records use field-name accessors, not JavaBean naming.",
      "Trying to extend a record — records are implicitly final, can't be subclassed.",
      "Mutating fields in the compact constructor — components are final. You can only validate.",
    ],
    cpp: `// C++ doesn't have records. Closest is a struct with operator==:
struct Point {
    int x, y;
    bool operator==(const Point& o) const = default;
};`,
    related: ["classes", "objects", "encapsulation", "constructors", "lambda-expressions"],
  },

  optional: {
    beginnerExplanation: `Optional is a container that might hold a value, or might be empty. It's Java's way of saying 'this might be missing, and I want you to deal with that explicitly.' Think of it like a gift box: sometimes there's something inside, sometimes it's empty. Optional forces you to open the box carefully and decide what to do if it's empty, instead of just assuming there's something inside (which leads to NullPointerException).

Before Optional, methods that couldn't always return a value would return 'null'. The caller then had to remember to check for null, and if they forgot, the program would crash with NullPointerException — the most common bug in Java. Optional makes the 'might be missing' part explicit in the type: a method returning 'Optional<String>' is clearly telling you 'this might be empty.'

The safe way to use an Optional: 'opt.orElse(default)' returns the value if present, or the default if empty. 'opt.ifPresent(v -> use(v))' runs an action only if there's a value. 'opt.map(v -> v.length())' transforms the value if present (returns Optional<Integer>). Avoid 'opt.get()' — it throws NoSuchElementException if empty, defeating the purpose.

Important: Optional is designed for return types only. Don't use it as a field type (it's not serializable) or a parameter type (it adds overhead). Just return it from methods that might not have a result, and let callers handle the emptiness explicitly.`,
    title: "Optional<T>",
    category: "Modern Java",
    description: "Optional<T> (java.util.Optional, Java 8+) is a container that may or may not hold a value. It's designed to make the absence of a value explicit in the type system, reducing NullPointerException. Methods return Optional instead of null; callers must check with isPresent() or unwrap with orElse()/orElseGet()/orElseThrow(). Never assign null to an Optional — use Optional.empty() instead.",
    syntax: `// Create
Optional<String> empty = Optional.empty();
Optional<String> of     = Optional.of("hi");         // null throws NPE
Optional<String> ofN    = Optional.ofNullable(maybeNull);

// Check
opt.isPresent();     // true if value exists
opt.isEmpty();       // true if empty (Java 11+)

// Consume
opt.ifPresent(v -> use(v));
opt.ifPresentOrElse(v -> use(v), () -> handleEmpty());

// Unwrap with fallback
String v  = opt.orElse("default");
String v2 = opt.orElseGet(() -> computeDefault());
String v3 = opt.orElseThrow();                       // throws NoSuchElementException
String v4 = opt.orElseThrow(() -> new MyException());

// Transform
opt.map(v -> v.length());        // Optional<Integer>
opt.filter(v -> v.length() > 3); // Optional<String>
opt.flatMap(v -> parse(v));      // Optional<...>`,
    methods: [
      "empty() — empty Optional (static)",
      "of(value) — Optional with non-null value; throws NPE if null",
      "ofNullable(value) — Optional that's empty if value is null",
      "isPresent() — true if a value exists",
      "isEmpty() — true if no value (Java 11+)",
      "ifPresent(Consumer) — run action if value exists",
      "ifPresentOrElse(action, emptyAction) — Java 9+",
      "orElse(other) — return value or fallback",
      "orElseGet(Supplier) — return value or lazily-computed fallback",
      "orElseThrow() — return value or throw NoSuchElementException",
      "orElseThrow(Supplier) — return value or throw custom exception",
      "map(Function) — transform the value if present",
      "filter(Predicate) — keep only if predicate matches",
      "flatMap(Function) — transform to another Optional (no nesting)",
      "get() — return value or throw (avoid in new code)",
    ],
    parameters: [
      ["T", "The type of value the Optional may hold"],
      ["other / Supplier", "Fallback value or supplier used when empty"],
      ["Function / Predicate", "Lambda for map/filter transformations"],
    ],
    returnValue: "of/ofNullable/empty return Optional<T>. map/filter/flatMap return Optional. orElse/orElseGet return T. orElseThrow returns T or throws.",
    example: `import java.util.Optional;
import java.util.Map;

public class Main {
    static Optional<String> findName(String key) {
        var db = Map.of("a", "Ana", "b", "Bob");
        return Optional.ofNullable(db.get(key));
    }

    public static void main(String[] args) {
        // Safe unwrap with fallback
        String name = findName("a").orElse("Unknown");
        System.out.println(name);            // Ana

        String missing = findName("z").orElse("Unknown");
        System.out.println(missing);         // Unknown

        // Transform if present
        Optional<Integer> len = findName("a").map(String::length);
        System.out.println(len.orElse(-1));  // 3

        // Filter
        Optional<String> longName = findName("a").filter(s -> s.length() > 2);
        System.out.println(longName.isPresent());  // true

        // Side effect if present
        findName("b").ifPresent(n -> System.out.println("Found: " + n));

        // Throw if missing
        String required = findName("a").orElseThrow();
        System.out.println("Required: " + required);
    }
}`,
    output: `Ana
Unknown
3
true
Found: Bob
Required: Ana`,
    commonMistakes: [
      "Calling get() without checking isPresent() — throws NoSuchElementException. Prefer orElse/orElseThrow.",
      "Using Optional as a field or parameter type — it's designed for return types only. Fields don't serialize, and params add overhead.",
      "Assigning null to an Optional variable — defeats the purpose. Use Optional.empty().",
      "Chaining .map(x -> null) — the result is empty Optional, not Optional<null>.",
    ],
    cpp: `// C++ has std::optional<T> (C++17)
#include <optional>
std::optional<std::string> findName(std::string key);
auto name = findName("a").value_or("Unknown");`,
    related: ["lambda-expressions", "streams-api", "exception-handling", "generics"],
  },

  /* ============================================================ BOOK COMPANION */
  "liang-textbook-companion": {
    beginnerExplanation: `This topic is an index that connects this cheat sheet to a popular Java textbook: Y. Daniel Liang's 'Introduction to Java Programming and Data Structures' (12th edition). If you're using that book in a course or for self-study, this index helps you jump from any chapter in the book to the matching quick-reference topic on this site.

How to use it: open the book to a chapter (say, Chapter 11 on Inheritance). Open this companion topic. Find 'Ch 11' in the Methods list below. Click the 'Jump to' link, and you'll be taken to the Inheritance cheat sheet on this site — a quick syntax reference to use alongside the book's deeper explanations.

The book has 44 chapters organized into five parts: Fundamentals of Programming (Ch 1-7), Object-Oriented Programming (Ch 9-13), GUI Programming (Ch 14-17), Data Structures and Algorithms (Ch 18-30), and Advanced Topics (Ch 31-44, available online). It also has 10 appendices covering keywords, ASCII, operator precedence, modifiers, floating-point, number systems, bitwise operations, regex, enums, and Big-O notation.

This companion is an INDEX only — it lists chapter numbers, titles, and page numbers (which are facts). It does NOT reproduce the book's prose, code, or exercises (which are copyrighted). Use the book for depth, examples, and exercises; use this cheat sheet for quick syntax lookup.`,
    title: "Liang Textbook Companion",
    category: "Reference",
    description: "A companion index for Y. Daniel Liang's \"Introduction to Java Programming and Data Structures, Comprehensive Version\" (12th Edition, Pearson, 2020, ISBN 978-0-13-6520238). This topic maps every chapter and appendix in the 1,200+ page textbook to the matching topic on this cheats site, so you can use the two side by side. The book is organized into five parts: Fundamentals of Programming, Object-Oriented Programming, GUI Programming, Data Structures and Algorithms, and Advanced Topics. Chapters 31–44 are available from the companion website. Use this index to jump from a book chapter to the corresponding quick reference on this site.",
    syntax: `Book: Introduction to Java Programming and Data Structures
Author: Y. Daniel Liang (Georgia Southern University)
Publisher: Pearson, 12th Edition (2020)
ISBN: 978-0-13-6520238 (paperback) / 0-13-651996-2
Pages: ~1,200 (Comprehensive Version)

Structure: 5 parts · 44 chapters · 10 appendices
- Part I:   Fundamentals of Programming  (Ch 1–7)
- Part II:  Object-Oriented Programming   (Ch 9–13)
- Part III: GUI Programming               (Ch 14–17)
- Part IV:  Data Structures & Algorithms  (Ch 18–30)
- Part V:   Advanced Topics               (Ch 31–44, online)

Chapters 31–44 are available from the companion website:
www.pearsonhighered.com/liang`,
    parameters: [
      ["Part I — Fundamentals of Programming", "Ch 1–7: basics, I/O, math, strings, loops, methods, arrays"],
      ["Part II — Object-Oriented Programming", "Ch 9–13: classes, inheritance, polymorphism, exceptions, abstract classes, interfaces"],
      ["Part III — GUI Programming", "Ch 14–17: JavaFX basics, events, controls, binary I/O"],
      ["Part IV — Data Structures & Algorithms", "Ch 18–30: recursion, generics, lists, trees, hashing, graphs, sorting"],
      ["Part V — Advanced Topics", "Ch 31–44 (online): multithreading, networking, JDBC, servlets, JSP, web services, advanced trees, JUnit"],
      ["Appendices A–J", "Keywords, ASCII, operator precedence, modifiers, floating-point, number systems, bitwise, regex, enums, Big-O"],
    ],
    returnValue: "This is a reference index — it maps each chapter of the Liang textbook to the corresponding cheat-sheet topic on this site. Click any 'Jump to →' link to open that topic instantly.",
    example: `/* Example: reading Chapter 11 (Inheritance and Polymorphism)
   in the Liang book? Jump to the matching cheat-sheet topic. */

// Liang Ch 11.1–11.4: inheritance basics, super keyword
//   → Jump to: Inheritance

// Liang Ch 11.5–11.7: overriding methods, toString(), equals()
//   → Jump to: Objects, Inheritance

// Liang Ch 11.8–11.11: polymorphism, dynamic binding, casting
//   → Jump to: Polymorphism

// Liang Ch 11.12–11.14: protected, final, object class
//   → Jump to: Access Modifiers`,
    output: `Use this companion alongside the book:
1. Open the Liang book to a chapter.
2. Find that chapter number in the Methods table below.
3. Click "Jump to →" to load the matching cheat-sheet topic.
4. Use the cheat sheet for quick syntax lookup;
   use the book for depth, examples, and exercises.`,
    commonMistakes: [
      "Treating this companion as a substitute for the book — it's an index, not a replacement. The book has detailed explanations, case studies, and exercises this cheats site doesn't.",
      "Chapters 31–44 are not in the printed book — they're on the companion website. Don't search for them in the physical pages.",
      "Chapter numbering differs between the Comprehensive Version and the Brief Version of the Liang book. This index is for the Comprehensive Version only.",
    ],
    cpp: `// The Liang book also covers C++ comparisons in places.
// Use the "Equivalent in C++" section of each cheat-sheet topic
// for the matching C++ syntax.`,
    related: ["java-basics", "inheritance", "polymorphism", "collections", "recursion", "generics", "exception-handling", "multithreading", "networking", "jdbc", "javafx", "regular-expressions"],
    methods: [
      // PART I — Fundamentals of Programming (Ch 1–7)
      "Ch 1  Introduction to Computers, Programs, and Java (p.1) — Jump to: Java Basics",
      "Ch 2  Elementary Programming (p.33) — Jump to: Variables, Data Types, Operators, Input & Output, Type Casting",
      "Ch 3  Selections (p.77) — Jump to: Conditionals, Operators",
      "Ch 4  Mathematical Functions, Characters, and Strings (p.121) — Jump to: Math Library, Strings, Wrapper Classes",
      "Ch 5  Loops (p.159) — Jump to: Loops, Recursion",
      "Ch 6  Methods (p.205) — Jump to: Methods, Recursion",
      "Ch 7  Single-Dimensional Arrays (p.249) — Jump to: Arrays, Collections",
      // Ch 8
      "Ch 8  Multidimensional Arrays (p.289) — Jump to: Arrays",
      // PART II — OOP (Ch 9–13)
      "Ch 9  Objects and Classes (p.323) — Jump to: Classes, Objects, Constructors, Encapsulation",
      "Ch 10 Object-Oriented Thinking (p.367) — Jump to: Classes, Objects, Access Modifiers",
      "Ch 11 Inheritance and Polymorphism (p.411) — Jump to: Inheritance, Polymorphism, Objects",
      "Ch 12 Exception Handling and Text I/O (p.453) — Jump to: Exception Handling, File Handling, Input & Output",
      "Ch 13 Abstract Classes and Interfaces (p.499) — Jump to: Abstract Classes, Interfaces, Annotations, Enums",
      // PART III — GUI (Ch 14–17)
      "Ch 14 JavaFX Basics (p.541) — Jump to: JavaFX",
      "Ch 15 Event-Driven Programming and Animations (p.593) — Jump to: JavaFX",
      "Ch 16 JavaFX UI Controls and Multimedia (p.643) — Jump to: JavaFX",
      "Ch 17 Binary I/O (p.691) — Jump to: File Handling",
      // PART IV — Data Structures & Algorithms (Ch 18–30)
      "Ch 18 Recursion (p.719) — Jump to: Recursion, Methods",
      "Ch 19 Generics (p.751) — Jump to: Generics",
      "Ch 20 Lists, Stacks, Queues, and Priority Queues (p.775) — Jump to: Collections",
      "Ch 21 Sets and Maps (p.815) — Jump to: Collections",
      "Ch 22 Developing Efficient Algorithms (p.839) — (algorithm design — no direct cheat-sheet topic; see Big-O in Appendix J)",
      "Ch 23 Sorting (p.887) — (sorting algorithms — see Arrays for Arrays.sort)",
      "Ch 24 Implementing Lists, Stacks, Queues, and Priority Queues (p.923) — Jump to: Collections, Generics",
      "Ch 25 Binary Search Trees (p.959) — Jump to: Collections",
      "Ch 26 AVL Trees (p.995) — (self-balancing trees — advanced data structure)",
      "Ch 27 Hashing (p.1015) — Jump to: Collections (HashMap)",
      "Ch 28 Graphs and Applications (p.1045) — (graph data structures — advanced)",
      "Ch 29 Weighted Graphs and Applications (p.1091) — (weighted graphs — advanced)",
      "Ch 30 Aggregate Operations for Collection Streams (p.1129) — Jump to: Streams API, Lambda Expressions",
      // PART V — Advanced Topics (Ch 31–44, online)
      "Ch 31 Advanced JavaFX and FXML — Jump to: JavaFX",
      "Ch 32 Multithreading and Parallel Programming — Jump to: Multithreading",
      "Ch 33 Networking — Jump to: Networking",
      "Ch 34 Java Database Programming — Jump to: JDBC",
      "Ch 35 Advanced Java Database Programming — Jump to: JDBC",
      "Ch 36 Internationalization — (Locale, ResourceBundle — advanced I/O)",
      "Ch 37 Servlets — (server-side Java — advanced)",
      "Ch 38 JavaServer Pages (JSP) — (server-side templating — advanced)",
      "Ch 39 JavaServer Faces (JSF) — (component-based web framework — advanced)",
      "Ch 40 RMI (Remote Method Invocation) — (distributed Java — advanced)",
      "Ch 41 Web Services — (REST/SOAP in Java — advanced)",
      "Ch 42 2-4 Trees and B-Trees — (advanced tree data structures)",
      "Ch 43 Red-Black Trees — (self-balancing BST variant)",
      "Ch 44 Testing Using JUnit — (unit testing framework)",
      // Appendices
      "Appendix A  Java Keywords and Reserved Words (p.1163) — see syntax highlight keywords throughout",
      "Appendix B  The ASCII Character Set (p.1164) — Jump to: Wrapper Classes (Character)",
      "Appendix C  Operator Precedence Chart (p.1166) — Jump to: Operators",
      "Appendix D  Java Modifiers (p.1168) — Jump to: Access Modifiers",
      "Appendix E  Special Floating-Point Values (p.1170) — Jump to: Data Types",
      "Appendix F  Number Systems (p.1171) — (binary, hex, octal — see Integer.toBinaryString in Wrapper Classes)",
      "Appendix G  Bitwise Operations (p.1175) — Jump to: Operators",
      "Appendix H  Regular Expressions (p.1176) — Jump to: Regular Expressions",
      "Appendix I  Enumerated Types (p.1182) — Jump to: Enums",
      "Appendix J  The Big-O, Big-Omega, and Big-Theta Notations (p.1187) — (algorithm complexity — reference)",
    ],
  },

  /* BASICS */
  "comments": {
    title: "Comments",
    category: "Basics",
    beginnerExplanation: `Comments are notes you write inside your code that the computer completely ignores. They're like sticky notes you attach to your program — only humans read them, never the computer. You use comments to explain WHY something is done, to leave reminders for yourself, or to temporarily disable a line of code without deleting it.

Java has three kinds. Single-line comments start with // and go to the end of the line — quick notes like '// calculate the total'. Multi-line comments start with /* and end with */ — for longer explanations spanning several lines. Javadoc comments start with /** and end with */ — special comments that tools can turn into HTML documentation, used above classes and public methods to describe what they do for other programmers.

Good comments explain WHY, not WHAT. The code already shows what's happening; the comment should explain the reasoning behind it. Bad comment: 'i++; // increment i'. Good comment: 'i++; // advance to next page after current is full'. Over-commenting obvious code is just noise; under-commenting tricky code is a bug waiting to happen.`,
    description: "Comments are non-executable text in source code, ignored by the compiler. Java supports three types: single-line (//), multi-line (/* */), and Javadoc (/** */). Javadoc comments can be processed by the javadoc tool to generate HTML API documentation.",
    syntax: `// single-line comment — everything after // to end of line is ignored

/* multi-line comment
   spans multiple lines
   everything between /* and */ is ignored */

/** Javadoc comment — generates HTML documentation
 * @param name the name to greet
 * @return a greeting string
 */
public String greet(String name) { ... }`,
    parameters: [
      ["//", "Single-line comment — from // to end of line"],
      ["/* ... */", "Multi-line comment — everything between /* and */"],
      ["/** ... */", "Javadoc comment — processed by javadoc tool into HTML docs"],
      ["@param", "Javadoc tag: documents a method parameter"],
      ["@return", "Javadoc tag: documents the return value"],
      ["@throws", "Javadoc tag: documents exceptions thrown"],
      ["@see", "Javadoc tag: cross-reference to another class/method"],
    ],
    returnValue: "Comments produce no output — they're stripped out by the compiler. Javadoc comments are preserved in the .class file's metadata and can be read by the javadoc tool.",
    methods: [
      "// — single-line comment",
      "/* ... */ — multi-line block comment",
      "/** ... */ — Javadoc comment (generates HTML documentation)",
      "@param name desc — document a parameter",
      "@return desc — document the return value",
      "@throws ExceptionType desc — document a thrown exception",
      "@see ClassName — cross-reference another class or method",
      "@since version — since when this API exists",
      "@deprecated — mark as outdated",
    ],
    example: `/**
 * Calculates the area of a circle.
 * @param radius the radius of the circle (must be >= 0)
 * @return the area
 * @throws IllegalArgumentException if radius is negative
 */
public double circleArea(double radius) {
    // Validate input — radius can't be negative
    if (radius < 0) {
        throw new IllegalArgumentException("negative radius");
    }
    /* Use the formula π * r²
       Math.PI gives us 3.14159... */
    return Math.PI * radius * radius;
}

public static void main(String[] args) {
    System.out.println(circleArea(5));
}`,
    output: `78.53981633974483`,
    commonMistakes: [
      "Commenting out code with // inside a multi-line /* */ comment — the */ closes the block early and causes syntax errors.",
      "Writing comments that just restate the code (// increment i) — useless noise. Explain WHY, not WHAT.",
      "Forgetting to update comments when you change the code — stale comments are worse than no comments.",
    ],
    cpp: `// single-line in C++
/* multi-line in C++ */
/// documentation comment (Doxygen style)`,
    related: ["java-basics","methods","classes"],
  },

  /* BASICS */
  "command-line-args": {
    title: "Command-Line Arguments",
    category: "Basics",
    beginnerExplanation: `Command-line arguments are values you pass to your program when you start it from the terminal — like extra instructions you give before the program runs. Imagine a recipe app: you could launch it normally, or you could launch it with 'recipe-app --ingredient eggs' to tell it immediately what you want to cook with. Those extra words after the program name are command-line arguments.

In Java, every program's main method receives a String array called args. When you run 'java MyProgram hello 42', the args array contains ["hello", "42"]. Note that ALL arguments are Strings — even 42 comes in as text. If you need it as a number, you must convert it with Integer.parseInt(args[1]).

Command-line arguments are great for configuration that doesn't change often — file paths, port numbers, mode flags (like --verbose or --dry-run). For more complex configurations, look into property files or libraries like Apache Commons CLI or Picocli that parse flags, options, and help text for you.`,
    description: "Command-line arguments are values passed to a program at launch time, received in the main method's String[] args parameter. They allow configuration without modifying code. All arguments arrive as Strings, so numeric arguments must be parsed.",
    syntax: `// Program receives args in main
public static void main(String[] args) {
    // args[0] is the first argument, args[1] the second, etc.
    if (args.length == 0) {
        System.out.println("Usage: java Main <name> <age>");
        return;
    }
    String name = args[0];
    int age = Integer.parseInt(args[1]);
}

// Run from terminal:
// java Main Ana 19`,
    parameters: [
      ["args", "String[] — array of command-line arguments, 0-indexed"],
      ["args.length", "Number of arguments passed"],
      ["args[0]", "First argument (always a String)"],
      ["Integer.parseInt(args[i])", "Convert argument i from String to int"],
    ],
    returnValue: "args is a String array. args.length is the count. Accessing args[i] beyond args.length-1 throws ArrayIndexOutOfBoundsException — always check args.length first.",
    methods: [
      "args.length — number of arguments passed",
      "args[i] — get the i-th argument (0-indexed, always a String)",
      "Integer.parseInt(args[i]) — convert argument to int",
      "Double.parseDouble(args[i]) — convert argument to double",
      "Arrays.toString(args) — debug: print all arguments",
    ],
    example: `public class Main {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Usage: java Main <name> <age>");
            System.exit(1);
        }

        String name = args[0];
        System.out.println("Hello, " + name + "!");

        if (args.length >= 2) {
            try {
                int age = Integer.parseInt(args[1]);
                System.out.println("You are " + age + " years old.");
                System.out.println("Next year: " + (age + 1));
            } catch (NumberFormatException e) {
                System.out.println("Age must be a number, got: " + args[1]);
            }
        }

        // Show all args for debugging
        System.out.println("All args: " + java.util.Arrays.toString(args));
    }
}`,
    output: `# Run: java Main Ana 19
Hello, Ana!
You are 19 years old.
Next year: 20
All args: [Ana, 19]`,
    commonMistakes: [
      "Accessing args[0] without checking args.length — crashes if no arguments are passed.",
      "Forgetting all args are Strings — Integer.parseInt(args[0]) is needed to get a number.",
      "Not handling NumberFormatException when parsing — crashes on bad input like 'java Main Ana abc'.",
    ],
    cpp: `int main(int argc, char* argv[]) {
    // argc = count, argv[0] = program name, argv[1] = first real arg
    std::string name = argv[1];
    int age = std::stoi(argv[2]);
}`,
    related: ["java-basics","arrays","input-output","exception-handling"],
  },

  /* BASICS */
  "jshell": {
    title: "JShell (Java REPL)",
    category: "Basics",
    beginnerExplanation: `JShell is Java's interactive playground — you type a line of Java, press Enter, and it runs immediately. No need to write a whole class, no need to compile, no need for a main method. It's like a calculator for Java: you can experiment with code, test ideas, and see results instantly. Before JShell (Java 9), trying a quick idea meant writing a full .java file, compiling, running, deleting — tedious. Now you just open a terminal, type 'jshell', and start playing.

Use JShell to learn Java (try snippets without writing a whole program), to test a method or expression before putting it in real code, to explore an API (what does String.toUpperCase() return?), or to prototype a quick algorithm. You can define variables, methods, and even classes inline. JShell remembers everything you've defined in the session, so you can build up state step by step.

Special commands start with /: '/list' shows everything you've typed, '/vars' shows your variables, '/methods' shows methods, '/save file.java' exports your session, '/reset' clears everything, '/exit' quits. You can also edit multi-line snippets — JShell waits for a complete statement before running.`,
    description: "JShell is Java's Read-Eval-Print Loop (REPL), introduced in Java 9. It lets you evaluate Java expressions, statements, and declarations interactively without writing a full class or compiling. Useful for learning, prototyping, and API exploration.",
    syntax: `# Start JShell from the terminal
$ jshell

# Inside JShell:
jshell> int x = 5;
jshell> System.out.println(x * x);
jshell> String greet(String name) { return "Hi " + name; }
jshell> greet("Ana")

# Slash commands
jshell> /list      — show all snippets
jshell> /vars      — show all variables
jshell> /methods   — show all methods
jshell> /save file.java — export session
jshell> /reset     — clear everything
jshell> /exit      — quit`,
    parameters: [
      ["/list", "Show all snippets entered in this session"],
      ["/vars", "List all declared variables with their current values"],
      ["/methods", "List all declared methods"],
      ["/types", "List all declared classes/interfaces/enums"],
      ["/save <file>", "Save session snippets to a file"],
      ["/open <file>", "Load snippets from a file"],
      ["/reset", "Clear all state and start fresh"],
      ["/exit", "Quit JShell"],
      ["/help", "Show all available commands"],
    ],
    returnValue: "JShell prints the value of each expression immediately. Variables show as 'variabName = value'. void statements print nothing extra. Errors show with location hints.",
    methods: [
      "/list — show all snippets entered",
      "/vars — list all variables and their values",
      "/methods — list all defined methods",
      "/types — list all declared types",
      "/imports — list active imports",
      "/save <file> — save session to file",
      "/open <file> — load and run a file",
      "/reset — clear everything",
      "/edit <name> — edit a snippet in an editor",
      "/exit — quit JShell",
    ],
    example: `# Terminal session
$ jshell
|  Welcome to JShell -- Version 17
|  For an introduction type: /help intro

jshell> int x = 5
x ==> 5

jshell> x * x
$2 ==> 25

jshell> String greet(String name) { return "Hi " + name; }
|  created method greet(String)

jshell> greet("Ana")
$4 ==> "Hi Ana"

jshell> var list = java.util.List.of(1, 2, 3)
list ==> [1, 2, 3]

jshell> list.stream().map(n -> n * 10).toList()
$6 ==> [10, 20, 30]

jshell> /exit`,
    output: `JShell prints each result with ==> after the expression name.
Methods and types show 'created method/type' confirmation.
Errors show with ^ markers pointing to the problem location.`,
    commonMistakes: [
      "Forgetting the semicolon at the end of a statement — JShell waits for it before running.",
      "Expecting JShell to persist state between sessions — it doesn't. Use /save to export.",
      "Trying to use package-private classes from another package — JShell uses a default package.",
    ],
    cpp: `// C++ has no built-in REPL. Use Cling (a C++ interpreter) for similar functionality:
$ cling
[cling]$ int x = 5;
[cling]$ x * x
(int) 25`,
    related: ["java-basics","methods","variables","lambda-expressions"],
  },

  /* OOP */
  "static-keyword": {
    title: "static Keyword",
    category: "OOP",
    beginnerExplanation: `The 'static' keyword means something belongs to the CLASS itself, not to individual objects of that class. Think of it like a bulletin board in a school. Regular (non-static) things are like personal notebooks — each student has their own. Static things are like the bulletin board — there's only ONE, shared by everyone.

A 'static field' (also called a class variable) is shared across all instances. If you have a 'static int count = 0' in a Player class, every Player object sees the same count. If one player increments it, all players see the new value. This is perfect for counting how many players exist, tracking a shared resource, or defining constants (static final).

A 'static method' belongs to the class, not an instance. You call it as 'ClassName.method()' without creating an object. Math.sqrt(), Integer.parseInt(), and System.out.println() (well, System.out is a static field) are all examples. Static methods can't use 'this' (there's no current object) and can only directly access other static members.

A 'static block' runs once when the class is loaded — useful for complex initialization. 'static final' makes a constant that can't change. The main method is static so the JVM can call it without creating an instance of your class.`,
    description: "The static keyword marks a member (field, method, nested class, or block) as belonging to the class itself rather than to instances of the class. Static members are shared across all instances and can be accessed without creating an object. Static fields are initialized when the class is loaded; static methods can't use 'this' or directly access instance members.",
    syntax: `public class Counter {
    // Static field — shared by all instances
    static int count = 0;

    // Static constant — can never change
    static final double PI = 3.14159;

    // Instance field — each object has its own
    int id;

    // Static initializer — runs once when class loads
    static {
        System.out.println("Counter class loaded");
    }

    // Static method — callable without an instance
    public static int getCount() { return count; }

    public Counter() {
        count++;           // increment shared counter
        this.id = count;   // each instance gets unique id
    }
}`,
    parameters: [
      ["static field", "Variable shared by all instances — only one copy exists"],
      ["static method", "Method callable as ClassName.method() without an instance"],
      ["static final", "A constant — value set once, never changes (e.g., Math.PI)"],
      ["static block", "Code that runs once when the class is loaded"],
      ["static nested class", "A nested class that doesn't need an outer instance"],
    ],
    returnValue: "static doesn't change return types. Static methods return the same type as instance methods would. Static fields hold one shared value across all instances.",
    methods: [
      "static Type field — class-level variable, shared by all instances",
      "static final Type NAME — a constant (by convention, UPPERCASE)",
      "static returnType method() — callable without an instance",
      "static { ... } — static initializer block, runs at class load",
      "static class Nested — static nested class (no outer instance needed)",
      "ClassName.method() — how to call a static method",
      "ClassName.field — how to access a static field",
    ],
    example: `public class Main {
    static int instances = 0;
    static final String APP_NAME = "MyApp";

    static {
        System.out.println(APP_NAME + " loaded");
    }

    static int doubleIt(int n) { return n * 2; }

    public Main() { instances++; }

    public static void main(String[] args) {
        System.out.println("Double 5: " + Main.doubleIt(5));

        new Main();
        new Main();
        new Main();
        System.out.println("Instances created: " + Main.instances);

        // Static import — use static members without class name
        // import static java.lang.Math.*;
        // double r = sqrt(16);  // instead of Math.sqrt(16)
    }
}`,
    output: `MyApp loaded
Double 5: 10
Instances created: 3`,
    commonMistakes: [
      "Calling an instance method or field from a static method — 'this' doesn't exist in static context. The main method is static, so it can only directly access static members.",
      "Using static excessively — makes code hard to test and creates hidden global state. Prefer instance members unless you have a clear reason for static.",
      "Forgetting that static fields are shared across ALL instances in a multi-threaded app — need synchronization for mutable static state.",
    ],
    cpp: `class Counter {
public:
    static int count;           // declaration
    static int getCount() { return count; }
};
int Counter::count = 0;         // definition (required in C++)`,
    related: ["classes","objects","methods","variables","this-super"],
  },

  /* OOP */
  "this-super": {
    title: "this and super",
    category: "OOP",
    beginnerExplanation: `'this' and 'super' are two special keywords that point to objects. 'this' points to the CURRENT object — the one whose method is running. 'super' points to the PARENT class's version of the current object — like asking your parent for help.

Use 'this' in three ways. First, to tell apart a field from a parameter with the same name: 'public Player(String name) { this.name = name; }' — 'this.name' is the field, 'name' is the parameter. Second, to call another constructor in the same class: 'this()' or 'this(args)' — must be the first statement. Third, to pass the current object to another method: 'register(this)'.

Use 'super' in two ways. First, to call the parent's constructor: 'super(args)' — must be the first statement in a child constructor, and it's required if the parent has no no-arg constructor. Second, to call the parent's version of an overridden method: 'super.describe()' — useful when you override a method but still want to use the parent's behavior as part of yours.

Think of it like this: 'this' is saying 'in THIS object,' and 'super' is saying 'in my parent's version of this object.' You use 'this' to disambiguate and to chain constructors; you use 'super' to reach up to the parent class.`,
    description: "this is a reference to the current object. super is a reference to the parent class's version of the current object. this is used to access fields/methods of the current object, disambiguate field names from parameters, and chain constructors. super is used to call the parent's constructor and to call the parent's version of an overridden method. Both this(...) and super(...) must be the first statement in a constructor if used.",
    syntax: `// this — current object
this.field              // access a field (disambiguate from param)
this.method()           // call a method on current object
this(args)              // call another constructor in same class
this                    // pass current object as argument

// super — parent class
super.field             // access parent's field
super.method()          // call parent's version of an overridden method
super(args)             // call parent's constructor`,
    parameters: [
      ["this", "Reference to the current object whose method/constructor is running"],
      ["this.field", "Access the current object's field (disambiguates from same-name parameter)"],
      ["this(args)", "Call another constructor in the same class — must be first statement"],
      ["super", "Reference to the parent class's portion of the current object"],
      ["super.method()", "Call the parent's version of an overridden method"],
      ["super(args)", "Call the parent's constructor — must be first statement in child constructor"],
    ],
    returnValue: "this and super are references, not method calls — they don't 'return' a value per se. this(args) and super(args) are constructor calls that don't return anything (constructors have no return type).",
    methods: [
      "this.field — access current object's field",
      "this.method() — call current object's method",
      "this(args) — chain to another constructor (first statement only)",
      "this — pass current object as a method argument or return it",
      "super.field — access parent's field",
      "super.method() — call parent's overridden method",
      "super(args) — call parent's constructor (first statement only)",
    ],
    example: `class Animal {
    protected String name;
    public Animal(String name) {
        this.name = name;     // 'this.name' = field, 'name' = parameter
    }
    public String sound() { return "..."; }
    public String describe() {
        return name + " says " + sound();
    }
}

class Dog extends Animal {
    private String breed;
    public Dog(String name, String breed) {
        super(name);          // call parent constructor — FIRST
        this.breed = breed;   // disambiguate field
    }
    @Override
    public String sound() { return "Woof"; }
    @Override
    public String describe() {
        String parent = super.describe();   // call parent's version
        return parent + " (a " + breed + ")";
    }
}

class Main {
    public static void main(String[] args) {
        Dog d = new Dog("Rex", "Labrador");
        System.out.println(d.describe());
    }
}`,
    output: `Rex says Woof (a Labrador)`,
    commonMistakes: [
      "Putting this(args) or super(args) anywhere but the first statement — compile error.",
      "Forgetting super(args) when the parent has no no-arg constructor — compile error.",
      "Using 'this' inside a static method — there's no current object in static context.",
      "Calling super.super.method() — Java doesn't allow skipping a level.",
    ],
    cpp: `class Dog : public Animal {
public:
    Dog(std::string n, std::string b) : Animal(std::move(n)), breed(std::move(b)) {}
    // C++ uses initializer lists, not super(). Call parent methods with Animal::method().`,
    related: ["classes","constructors","inheritance","objects","static-keyword"],
  },

  /* OOP */
  "object-class": {
    title: "Object Class (toString, equals, hashCode)",
    category: "OOP",
    beginnerExplanation: `Every class in Java secretly inherits from a class called 'Object' — even if you don't write 'extends Object.' Object is the great-grandparent of everything: it provides a few default methods that every class gets for free. The three you'll override most often are toString(), equals(), and hashCode().

toString() is what Java calls when you print an object or concatenate it with a string. The default returns something ugly like 'Player@1b6d3586' (class name + memory address). You override it to return a useful description: 'Player[name=Ana, score=75]'. Then 'System.out.println(player)' shows something readable instead of garbage.

equals() checks if two objects are 'logically equal' — same meaningful content. The default uses == (same object in memory). You override it to compare values: two Player objects with the same name and score should be 'equal.' If you override equals(), you MUST also override hashCode() — these two are a package deal. The rule: if a.equals(b) is true, then a.hashCode() must equal b.hashCode(). This is critical for HashMap and HashSet to work correctly.

Also note: equals() must be reflexive (a.equals(a) is true), symmetric (a.equals(b) implies b.equals(a)), and transitive (a.equals(b) and b.equals(c) implies a.equals(c)). Getting this wrong causes subtle bugs in collections.`,
    description: "java.lang.Object is the root of Java's class hierarchy — every class implicitly extends it. It provides default implementations of toString() (returns 'ClassName@hashcode'), equals() (uses ==), hashCode() (memory address-based), getClass(), and wait/notify (for threading). Overriding toString(), equals(), and hashCode() is essential for objects that are printed, compared, or stored in hash-based collections.",
    syntax: `public class Player {
    private String name;
    private int score;

    @Override
    public String toString() {
        return "Player[name=" + name + ", score=" + score + "]";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;              // same object
        if (o == null || getClass() != o.getClass()) return false;
        Player p = (Player) o;
        return score == p.score && name.equals(p.name);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(name, score);
    }
}`,
    parameters: [
      ["toString()", "Returns a String representation — called by println, string concatenation"],
      ["equals(Object)", "Tests logical equality — override for value comparison instead of =="],
      ["hashCode()", "Returns an int hash — must be consistent with equals() for HashMap/HashSet"],
      ["getClass()", "Returns the runtime Class object — can't be overridden (final)"],
      ["wait() / notify() / notifyAll()", "Used for thread synchronization — called on the object's monitor"],
    ],
    returnValue: "toString() returns String. equals() returns boolean. hashCode() returns int. getClass() returns Class<?>. The equals/hashCode contract: equal objects MUST have equal hash codes.",
    methods: [
      "toString() — return a readable String representation",
      "equals(Object o) — true if o is logically equal to this",
      "hashCode() — int hash code, consistent with equals()",
      "getClass() — runtime Class<?> of the object (final, can't override)",
      "clone() — shallow copy (rarely used; must implement Cloneable)",
      "wait() / wait(ms) — release monitor and wait to be notified",
      "notify() / notifyAll() — wake up waiting threads",
      "finalize() — deprecated, called by GC before reclamation (avoid)",
    ],
    example: `import java.util.*;

public class Player {
    private String name;
    private int score;

    public Player(String name, int score) {
        this.name = name;
        this.score = score;
    }

    @Override
    public String toString() {
        return "Player[name=" + name + ", score=" + score + "]";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Player p)) return false;
        return score == p.score && name.equals(p.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, score);
    }

    public static void main(String[] args) {
        Player a = new Player("Ana", 75);
        Player b = new Player("Ana", 75);
        Player c = new Player("Bob", 80);

        System.out.println(a);              // toString()
        System.out.println(a.equals(b));    // true — same content
        System.out.println(a.equals(c));    // false — different content
        System.out.println(a == b);         // false — different objects

        // hashCode matters for HashSet/HashMap
        Set<Player> set = new HashSet<>();
        set.add(a);
        System.out.println(set.contains(b)); // true — equals+hashCode work
    }
}`,
    output: `Player[name=Ana, score=75]
true
false
false
true`,
    commonMistakes: [
      "Overriding equals() but not hashCode() — HashSet/HashMap break because equal objects end up in different hash buckets.",
      "equals() not handling null or wrong type — must check 'if (!(o instanceof Player)) return false;' first.",
      "Changing fields that participate in equals/hashCode after putting the object in a HashSet — it becomes unfindable.",
    ],
    cpp: `// C++ has no universal base class. You write operator== and a hash function:
struct Player {
    std::string name; int score;
    bool operator==(const Player& o) const { return name == o.name && score == o.score; }
};
// std::hash specialization for unordered_set<Player>`,
    related: ["classes","objects","inheritance","collections","this-super"],
  },

  /* OOP */
  "nested-classes": {
    title: "Nested Classes",
    category: "OOP",
    beginnerExplanation: `A nested class is a class defined inside another class. Think of it like a folder inside a folder — the inner folder only makes sense in the context of the outer one. You use nested classes when one class is so tightly coupled to another that it doesn't make sense on its own — like a Car and its Engine, or a List and its Iterator.

Java has four kinds. A 'static nested class' is the simplest — it's just a class that lives inside another for organization, but doesn't need an instance of the outer class. Use it when the inner class is logically part of the outer but doesn't use its instance data. Example: Map.Entry inside Map.

An 'inner class' (non-static nested) DOES have access to the outer class's instance fields and methods. Each inner object is secretly linked to an outer object. Use it when the inner class needs to use the outer's state — like a linked list's Node needing to access the list's head.

A 'local class' is declared inside a method and only exists within that method — like a temporary helper you create for one specific job. An 'anonymous class' is a local class with no name — you create it and use it in one expression. Anonymous classes were the way to do 'callbacks' before lambdas came along in Java 8.`,
    description: "A nested class is a class declared inside another class. There are four types: static nested class (no access to outer instance), inner class (non-static, has access to outer instance), local class (declared inside a method), and anonymous class (no name, declared and instantiated in one expression). Nested classes improve encapsulation and code organization when one class is only used by another.",
    syntax: `public class Outer {
    private int x = 10;

    // 1. Static nested class — no access to outer instance
    static class StaticNested {
        void show() { System.out.println("static nested"); }
    }

    // 2. Inner class — has access to outer instance fields
    class Inner {
        void show() { System.out.println("inner, x=" + x); }
    }

    // 3. Local class — declared inside a method
    public void doSomething() {
        class Local {
            void show() { System.out.println("local, x=" + x); }
        }
        new Local().show();
    }

    // 4. Anonymous class — implements an interface in one expression
    Runnable r = new Runnable() {
        public void run() { System.out.println("anonymous, x=" + x); }
    };
}`,
    parameters: [
      ["static nested class", "Class nested with 'static' — no access to outer instance fields"],
      ["inner class", "Non-static nested class — has a hidden reference to the outer instance"],
      ["local class", "Class declared inside a method — only visible within that method"],
      ["anonymous class", "Nameless class that implements an interface or extends a class in one expression"],
      ["Outer.this", "From an inner class, refers to the enclosing outer instance"],
    ],
    returnValue: "Nested classes produce instances like any other class. Static nested: 'new Outer.StaticNested()'. Inner: 'outer.new Inner()'. Anonymous: assigned to an interface/parent type variable immediately.",
    methods: [
      "static class Name { } — declare a static nested class",
      "class Name { } — declare an inner class (non-static)",
      "new Outer.StaticNested() — instantiate a static nested class",
      "outer.new Inner() — instantiate an inner class (needs an outer instance)",
      "Outer.this — from inner class, reference the enclosing outer instance",
      "new Interface() { ... } — anonymous class implementing an interface",
    ],
    example: `import java.util.*;

public class LinkedList<E> {
    private Node head;
    private int size = 0;

    // Inner class — each Node belongs to a list
    private class Node {
        E data;
        Node next;
        Node(E data) { this.data = data; }
    }

    // Static nested — Iterator doesn't need list instance at compile time,
    // but here we make it inner so it can access head/size
    public class ListIterator implements Iterator<E> {
        private Node current = head;
        public boolean hasNext() { return current != null; }
        public E next() {
            E data = current.data;
            current = current.next;
            return data;
        }
    }

    public void add(E item) {
        Node node = new Node(item);
        node.next = head;
        head = node;
        size++;
    }

    public static void main(String[] args) {
        var list = new LinkedList<String>();
        list.add("c"); list.add("b"); list.add("a");

        var it = list.new ListIterator();
        while (it.hasNext()) System.out.print(it.next() + " ");
    }
}`,
    output: `a b c `,
    commonMistakes: [
      "Forgetting that inner classes hold a hidden reference to the outer instance — this can cause memory leaks if the outer is large and the inner outlives it.",
      "Trying to instantiate an inner class as 'new Inner()' from a static context — must use 'outer.new Inner()'.",
      "Using anonymous classes where a lambda would be cleaner — anonymous classes are verbose; use lambdas for single-method interfaces.",
    ],
    cpp: `// C++ has nested classes, but they're always 'static' (no outer instance link):
class Outer {
    class Inner { /* can't access Outer's instance members */ };
};`,
    related: ["classes","objects","inheritance","lambda-expressions","interfaces"],
  },

  /* OOP */
  "singleton-pattern": {
    title: "Singleton Pattern",
    category: "OOP",
    beginnerExplanation: `A singleton is a class that only ever has ONE instance — no matter how many times you ask for it, you get the same object. Think of it like a country's president: there's only one at a time, and everyone who needs to talk to 'the president' talks to the same person.

Why would you want this? Some things in a program should exist only once: a database connection pool, a configuration manager, a logging service, a print spooler. If you created multiple instances, they'd conflict with each other or waste resources. A singleton ensures there's exactly one, shared by everyone who needs it.

There are several ways to implement a singleton in Java. The classic way: make the constructor private (so nobody can call 'new Singleton()'), keep a private static instance, and provide a public static getInstance() method that creates the instance on first call and returns it thereafter. The modern, simplest way (Java 5+) is an 'enum singleton' — just 'public enum Singleton { INSTANCE; }' — it's thread-safe, serialization-safe, and one line. Joshua Bloch's 'Effective Java' recommends the enum approach.

A warning: singletons are often overused. They make code hard to test (you can't easily swap in a fake) and create hidden global dependencies. Use a singleton only when you genuinely need exactly one instance, not just as a convenient way to access something globally.`,
    description: "The Singleton pattern ensures a class has exactly one instance and provides a global access point to it. Common implementations: eager initialization (create at class load), lazy initialization (create on first request, needs synchronization), double-checked locking (lazy + thread-safe), and the enum singleton (simplest, thread-safe, serialization-safe — recommended by Effective Java).",
    syntax: `// 1. Enum singleton — RECOMMENDED (thread-safe, serialization-safe)
public enum Database {
    INSTANCE;
    public void query(String sql) { ... }
}
// Usage: Database.INSTANCE.query("SELECT *");

// 2. Classic lazy with double-checked locking
public class Logger {
    private static volatile Logger instance;
    private Logger() {}   // private — no one else can construct

    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }
}`,
    parameters: [
      ["private constructor", "Prevents anyone else from calling 'new Singleton()'"],
      ["private static instance", "The single instance, held in a static field"],
      ["public static getInstance()", "Returns the single instance, creating it on first call if lazy"],
      ["volatile", "Ensures all threads see the fully-initialized instance (needed for double-checked locking)"],
      ["enum singleton", "Simplest form: 'public enum X { INSTANCE; }' — thread-safe and serialization-safe"],
    ],
    returnValue: "getInstance() always returns the same instance — the one and only object of the class.",
    methods: [
      "private constructor — prevents external instantiation",
      "private static instance — holds the single object",
      "public static getInstance() — global access point",
      "volatile — ensures safe publication in multi-threaded lazy init",
      "enum { INSTANCE } — the recommended one-line singleton",
    ],
    example: `// Enum singleton — recommended approach
public enum Config {
    INSTANCE;

    private java.util.Map<String, String> settings = new java.util.HashMap<>();

    public void set(String key, String value) { settings.put(key, value); }
    public String get(String key) { return settings.get(key); }

    public static void main(String[] args) {
        Config.INSTANCE.set("theme", "dark");
        Config.INSTANCE.set("lang", "en");

        // Same instance everywhere
        System.out.println(Config.INSTANCE.get("theme"));
        System.out.println(Config.INSTANCE == Config.INSTANCE); // true
    }
}`,
    output: `dark
true`,
    commonMistakes: [
      "Forgetting 'volatile' in double-checked locking — without it, another thread might see a partially-constructed object.",
      "Using a singleton for everything — singletons create hidden global state, make testing hard, and violate the Single Responsibility Principle. Use sparingly.",
      "Forgetting that a classic singleton breaks on serialization (deserialization creates a new instance) — use enum singleton to avoid this.",
    ],
    cpp: `// C++11 thread-safe local static (Meyers Singleton):
class Logger {
public:
    static Logger& getInstance() {
        static Logger instance;  // thread-safe in C++11+
        return instance;
    }
private:
    Logger() {}
    Logger(const Logger&) = delete;
    Logger& operator=(const Logger&) = delete;
};`,
    related: ["classes","objects","static-keyword","multithreading","design-patterns"],
  },

  /* COLLECTIONS */
  "arraylist": {
    title: "ArrayList",
    category: "Collections",
    beginnerExplanation: `ArrayList is Java's most popular list — think of it as a smart array that can grow and shrink. Regular arrays have a fixed size: once you create 'new int[5]', it's always 5 elements. ArrayList has no such limit — you can add as many items as you want, and it automatically resizes itself behind the scenes. It's like a stretchy bag that expands when you put more in.

ArrayList keeps elements in the order you added them, allows duplicates, and lets you access any element by index in O(1) time — just like a regular array. Adding at the end is usually O(1) (super fast). Adding or removing from the middle is O(n) because all the elements after that point have to shift over — like inserting a card into the middle of a deck.

When to use ArrayList vs LinkedList? Almost always ArrayList. It's faster for almost everything because of CPU cache locality (elements are stored contiguously in memory). Use LinkedList only if you frequently insert/remove at the BEGINNING of the list — and even then, consider ArrayDeque. ArrayList is the default choice for an ordered, indexable collection.

Note: ArrayList is NOT thread-safe. If multiple threads modify it, use CopyOnWriteArrayList or Collections.synchronizedList, or just use Vector (legacy).`,
    description: "ArrayList is a resizable array implementation of the List interface, backed by a regular array that grows automatically when full. It provides O(1) random access by index, O(1) amortized add at the end, and O(n) insertion/removal from the middle. ArrayList is not synchronized — use CopyOnWriteArrayList or Collections.synchronizedList for thread safety.",
    syntax: `import java.util.ArrayList;
import java.util.List;

// Create
List<String> list = new ArrayList<>();          // empty
List<String> list = new ArrayList<>(100);       // with initial capacity
List<String> list = new ArrayList<>(otherList); // copy another list

// Add
list.add("a");                  // add to end
list.add(0, "first");           // insert at index 0

// Access
String first = list.get(0);     // O(1)
list.set(0, "new");             // replace at index

// Remove
list.remove(0);                 // remove by index
list.remove("a");               // remove first occurrence of "a"
list.clear();                   // remove all

// Query
int size = list.size();
boolean has = list.contains("a");
int idx = list.indexOf("a");    // -1 if not found`,
    parameters: [
      ["initial capacity", "Optional constructor hint for the backing array size — avoids resizing"],
      ["index", "Zero-based position — must be 0 to size()-1 or throws IndexOutOfBoundsException"],
      ["element", "Value to add/remove/find — must match the generic type"],
    ],
    returnValue: "add() returns boolean (true). set() returns the old element. remove(int) returns the removed element. remove(Object) returns boolean. get() returns the element. size() returns int. contains() returns boolean.",
    methods: [
      "add(e) — append to end, O(1) amortized",
      "add(index, e) — insert at index, O(n) — shifts elements",
      "get(index) — get element at index, O(1)",
      "set(index, e) — replace element at index, returns old, O(1)",
      "remove(index) — remove at index, returns element, O(n)",
      "remove(Object) — remove first occurrence, returns boolean, O(n)",
      "size() — number of elements",
      "isEmpty() — true if size == 0",
      "contains(o) — true if present, O(n)",
      "indexOf(o) — index of first occurrence, -1 if not found",
      "clear() — remove all elements",
      "subList(from, to) — view of elements from 'from' (incl) to 'to' (excl)",
      "toArray() — convert to Object[] or typed array",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("apple");
        fruits.add("banana");
        fruits.add("cherry");

        System.out.println("Size: " + fruits.size());
        System.out.println("First: " + fruits.get(0));
        System.out.println("Has banana? " + fruits.contains("banana"));

        // Insert at index
        fruits.add(1, "blueberry");
        System.out.println("After insert: " + fruits);

        // Replace
        fruits.set(0, "AVOCADO");
        System.out.println("After set: " + fruits);

        // Remove
        fruits.remove("cherry");
        System.out.println("After remove: " + fruits);

        // Iterate
        for (String f : fruits) System.out.print(f + " ");
        System.out.println();

        // Sort
        Collections.sort(fruits);
        System.out.println("Sorted: " + fruits);

        // Convert to array
        String[] arr = fruits.toArray(new String[0]);
        System.out.println("Array length: " + arr.length);
    }
}`,
    output: `Size: 3
First: apple
Has banana? true
After insert: [apple, blueberry, banana, cherry]
After set: [AVOCADO, blueberry, banana, cherry]
After remove: [AVOCADO, blueberry, banana]
AVOCADO blueberry banana 
Sorted: [AVOCADO, banana, blueberry]`,
    commonMistakes: [
      "Using remove(Object) when you meant remove(int) — list.remove(1) removes the element at index 1, but list.remove(Integer.valueOf(1)) removes the Integer 1.",
      "Modifying the list while iterating with a for-each — ConcurrentModificationException. Use iterator.remove() or removeIf().",
      "SubList returns a VIEW, not a copy — changes to the sublist affect the original list and vice versa.",
    ],
    cpp: `#include <vector>
std::vector<std::string> fruits;
fruits.push_back("apple");
fruits[0];
fruits.size();
fruits.erase(fruits.begin() + 1);`,
    related: ["collections","linkedlist","arrays","iterator-iterable","comparable-comparator"],
  },

  /* COLLECTIONS */
  "linkedlist": {
    title: "LinkedList",
    category: "Collections",
    beginnerExplanation: `A LinkedList stores items like a chain — each item (called a 'node') holds a value plus a link to the next item, and in Java's version, also a link to the previous item. Imagine a treasure hunt where each clue tells you where the next clue is. To find the 50th item, you have to start at the beginning and follow 49 links — you can't jump directly like with an array.

Why use LinkedList instead of ArrayList? LinkedList is faster at adding and removing from the BEGINNING or END of the list — O(1) instead of O(n), because you just relink a few pointers, no shifting needed. But it's SLOWER at random access — getting the 50th element is O(n) because you walk the chain. In practice, ArrayList beats LinkedList for almost everything due to CPU cache effects (arrays are cache-friendly; linked nodes scattered in memory are not).

Java's LinkedList implements BOTH List and Deque, so you can use it as a list, a stack (push/pop), or a queue (offer/poll). But if you need a stack, use ArrayDeque instead — it's faster. If you need a queue, use ArrayDeque too. Honestly, the main reason to use LinkedList in modern Java is when you need to frequently insert/remove at both ends of a list AND you also need list operations.

The honest truth: most experienced Java developers almost never use LinkedList. ArrayList or ArrayDeque covers nearly all use cases better. But it's important to understand how it works — linked lists are a fundamental data structure you'll see in other languages and in interviews.`,
    description: "LinkedList is a doubly-linked list implementation of both List and Deque. Each node holds a value plus references to the previous and next nodes. Insertion and removal at the ends is O(1); random access by index is O(n). In practice, ArrayList outperforms LinkedList for most use cases due to CPU cache locality — use LinkedList only when you need frequent insertion/removal at both ends.",
    syntax: `import java.util.LinkedList;
import java.util.List;
import java.util.Deque;

// As a List
List<String> list = new LinkedList<>();
list.add("a"); list.add("b");
list.get(0);               // O(n) — walks from head

// As a Deque (stack or queue)
Deque<String> stack = new LinkedList<>();
stack.push("first");       // add to front
stack.pop();               // remove from front

Deque<String> queue = new LinkedList<>();
queue.offer("a");          // add to end
queue.poll();              // remove from front`,
    parameters: [
      ["index", "Zero-based position — accessing is O(n) because it walks the chain"],
      ["element", "Value to store in a node"],
      ["head/tail", "The two ends — operations here are O(1)"],
    ],
    returnValue: "Same as ArrayList for List methods. Deque methods: push/offer return void or boolean, pop/poll return the element (or null if empty), peek returns without removing.",
    methods: [
      "add(e) — append to end, O(1)",
      "add(index, e) — insert at index, O(n) to find + O(1) to insert",
      "addFirst(e) / addLast(e) — O(1) at ends",
      "get(index) — O(n), walks from nearest end",
      "getFirst() / getLast() — O(1)",
      "removeFirst() / removeLast() — O(1)",
      "remove(index) — O(n)",
      "push(e) — same as addFirst (stack usage)",
      "pop() — same as removeFirst",
      "offer(e) — same as addLast (queue usage)",
      "poll() — same as removeFirst, returns null if empty",
      "peek() — look at first element without removing",
      "size() — O(1)",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("B");
        list.add("C");
        list.addFirst("A");     // O(1) — would be O(n) in ArrayList
        list.addLast("D");
        System.out.println("List: " + list);

        // Stack operations
        list.push("Z");         // adds to front
        System.out.println("After push: " + list);
        System.out.println("Pop: " + list.pop());
        System.out.println("After pop: " + list);

        // Queue operations
        System.out.println("Peek: " + list.peek());    // look at front
        System.out.println("Poll: " + list.poll());    // remove front
        System.out.println("After poll: " + list);

        // Random access is SLOW — O(n)
        System.out.println("Index 1: " + list.get(1));

        // Ends are fast
        System.out.println("First: " + list.getFirst());
        System.out.println("Last: " + list.getLast());
    }
}`,
    output: `List: [A, B, C, D]
After push: [Z, A, B, C, D]
Pop: Z
After pop: [A, B, C, D]
Peek: A
Poll: A
After poll: [B, C, D]
Index 1: C
First: B
Last: D`,
    commonMistakes: [
      "Using get(index) in a loop — O(n²) total. Use an iterator or for-each instead.",
      "Choosing LinkedList for 'performance' when ArrayList is actually faster — cache locality matters more than Big-O for small/medium lists.",
      "Forgetting that LinkedList is not thread-safe — use ConcurrentLinkedQueue or Collections.synchronizedList.",
    ],
    cpp: `#include <list>
std::list<std::string> list;
list.push_back("a");
list.push_front("z");
list.pop_front();  // O(1)
// C++ std::list is doubly-linked; std::forward_list is singly-linked.`,
    related: ["collections","arraylist","stack-deque","iterator-iterable"],
  },

  /* COLLECTIONS */
  "hashmap": {
    title: "HashMap",
    category: "Collections",
    beginnerExplanation: `A HashMap is like a phone book — you look up a person's name (the 'key') to find their phone number (the 'value'). The magic is that the lookup is extremely fast — O(1) on average — no matter how many entries are in the map. Compare that to searching through a list, which gets slower as the list grows.

How does it work? When you put a key-value pair in, HashMap runs a math function (a 'hash function') on the key to compute a number, then uses that number to decide which 'bucket' to store the entry in. When you ask for a key later, it hashes the key again, goes straight to the right bucket, and finds the value. It's like a library that uses the first letter of a book's title to decide which shelf to put it on — you don't search every shelf, you go straight to the right one.

Key rules: keys must be unique (putting the same key twice replaces the old value). Keys should be immutable (if you change a key's fields after putting it in, you'll never find it again). Keys must have a proper equals() and hashCode() — if two keys are 'equal,' they MUST produce the same hash code. HashMap allows one null key and multiple null values. HashMap does NOT guarantee any order — if you need sorted keys, use TreeMap; if you need insertion order, use LinkedHashMap.`,
    description: "HashMap is a hash-table-based implementation of the Map interface. It stores key-value pairs with O(1) average-time get/put/containsKey operations. Keys must properly implement equals() and hashCode(). HashMap allows one null key and multiple null values, does not guarantee order, and is not synchronized (use ConcurrentHashMap for thread safety).",
    syntax: `import java.util.HashMap;
import java.util.Map;

// Create
Map<String, Integer> map = new HashMap<>();
Map<String, Integer> map = new HashMap<>(100);  // initial capacity

// Add / update
map.put("Ana", 19);          // adds or replaces
map.putIfAbsent("Bob", 21);  // only if key not present

// Access
Integer age = map.get("Ana");        // null if not found
Integer age = map.getOrDefault("Cy", 0);

// Remove
map.remove("Ana");           // remove by key
map.clear();                 // remove all

// Check
boolean has = map.containsKey("Ana");
boolean has = map.containsValue(19);
int size = map.size();

// Iterate
for (Map.Entry<String, Integer> e : map.entrySet()) {
    System.out.println(e.getKey() + " = " + e.getValue());
}`,
    parameters: [
      ["key", "The lookup key — must have proper equals() and hashCode()"],
      ["value", "The associated value — can be any object, including null"],
      ["initialCapacity", "Optional starting bucket count — avoids resizing"],
      ["loadFactor", "Optional, default 0.75 — when to resize (size > capacity * loadFactor)"],
    ],
    returnValue: "put() returns the PREVIOUS value for that key (or null if none). get() returns the value or null. remove() returns the previous value or null. containsKey/containsValue return boolean. size() returns int.",
    methods: [
      "put(key, value) — add or replace, returns old value",
      "putIfAbsent(key, value) — only add if key not present",
      "get(key) — retrieve value, null if not found",
      "getOrDefault(key, default) — retrieve value, or default if not found",
      "remove(key) — remove entry, returns old value",
      "containsKey(key) — true if key exists",
      "containsValue(value) — true if value exists (O(n))",
      "size() — number of entries",
      "isEmpty() — true if no entries",
      "clear() — remove all entries",
      "keySet() — Set of all keys",
      "values() — Collection of all values",
      "entrySet() — Set of Map.Entry objects (key-value pairs)",
      "forEach((k, v) -> ...) — iterate with a BiConsumer",
      "merge(key, value, remappingFunction) — combine old and new values",
      "compute(key, remappingFunction) — compute a new value from the old",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> ages = new HashMap<>();
        ages.put("Ana", 19);
        ages.put("Bob", 21);
        ages.put("Cy", 19);

        System.out.println("Ana: " + ages.get("Ana"));
        System.out.println("Unknown: " + ages.get("Zoe"));           // null
        System.out.println("Default: " + ages.getOrDefault("Zoe", 0));

        // put returns old value
        Integer old = ages.put("Ana", 20);
        System.out.println("Old Ana: " + old + ", new: " + ages.get("Ana"));

        // putIfAbsent — doesn't overwrite
        ages.putIfAbsent("Ana", 99);
        System.out.println("Ana still: " + ages.get("Ana"));   // 20

        // Iterate
        ages.forEach((k, v) -> System.out.println(k + " -> " + v));

        // Count occurrences with merge
        Map<String, Integer> wordCount = new HashMap<>();
        for (String w : new String[]{"a", "b", "a", "c", "b", "a"}) {
            wordCount.merge(w, 1, Integer::sum);
        }
        System.out.println("Word counts: " + wordCount);

        // Keys, values, entries
        System.out.println("Keys: " + ages.keySet());
        System.out.println("Values: " + ages.values());
        System.out.println("Size: " + ages.size());
    }
}`,
    output: `Ana: 19
Unknown: null
Default: 0
Old Ana: 19, new: 20
Ana -> 20
Bob -> 21
Cy -> 19
Word counts: {a=3, b=2, c=1}
Keys: [Ana, Bob, Cy]
Values: [20, 21, 19]
Size: 3`,
    commonMistakes: [
      "Using a mutable object as a key and then changing its fields — the entry becomes unfindable because hashCode changed.",
      "Forgetting that get() returns null for missing keys — use getOrDefault() or containsKey() to distinguish 'absent' from 'value is null'.",
      "Modifying the map while iterating — ConcurrentModificationException. Use the iterator's remove() or computeIfAbsent/merge.",
      "Expecting iteration order — HashMap has no order. Use LinkedHashMap for insertion order, TreeMap for sorted keys.",
    ],
    cpp: `#include <unordered_map>
std::unordered_map<std::string, int> ages;
ages["Ana"] = 19;
int a = ages["Ana"];
ages.erase("Ana");
ages.size();
// std::map is the sorted (red-black tree) version.`,
    related: ["collections","treemap","hashset","object-class","concurrent-collections"],
  },

  /* COLLECTIONS */
  "treemap": {
    title: "TreeMap",
    category: "Collections",
    beginnerExplanation: `A TreeMap is like a HashMap but with one big difference: it keeps its keys SORTED. Imagine a dictionary — the words are in alphabetical order, so you can flip to a section and browse. A HashMap is more like a pile of index cards in random order — fast to find a specific card, but you can't browse in order. TreeMap gives you both: fast lookup AND sorted iteration.

The tradeoff is speed. HashMap operations are O(1) (constant time, super fast). TreeMap operations are O(log n) (slower, but still efficient). TreeMap uses a red-black tree (a self-balancing binary search tree) internally. Use TreeMap when you need sorted keys, or when you need operations like 'give me all keys between X and Y' (subMap, headMap, tailMap) or 'give me the smallest/largest key' (firstKey, lastKey).

By default, TreeMap uses the keys' natural ordering (Strings alphabetically, Integers numerically). You can pass a custom Comparator to the constructor if you want a different order. Keys must be mutually comparable — you can't mix Strings and Integers. null keys are NOT allowed (unlike HashMap, which allows one null key), because you can't compare null to other keys.`,
    description: "TreeMap is a red-black tree-based implementation of the NavigableMap interface. Keys are kept sorted either by natural ordering or by a Comparator. Operations are O(log n). Useful when you need sorted iteration, range queries (subMap/headMap/tailMap), or nearest-key lookups (higher/lower/floor/ceiling). Does not allow null keys.",
    syntax: `import java.util.TreeMap;
import java.util.Map;

// Natural ordering
Map<String, Integer> map = new TreeMap<>();

// Custom ordering (e.g., reverse)
Map<String, Integer> map = new TreeMap<>(Collections.reverseOrder());

map.put("banana", 2);
map.put("apple", 5);
map.put("cherry", 10);

// Sorted iteration
for (Map.Entry<String, Integer> e : map.entrySet()) { ... }

// Range queries (NavigableMap)
SortedMap<String, Integer> sub = ((TreeMap<String,Integer>)map).subMap("a", "c");
String first = ((TreeMap<String,Integer>)map).firstKey();
String last  = ((TreeMap<String,Integer>)map).lastKey();`,
    parameters: [
      ["key", "Must be Comparable or use a Comparator — null keys NOT allowed"],
      ["Comparator", "Optional constructor arg for custom key ordering"],
      ["natural ordering", "Default — uses key.compareTo() (Strings alphabetical, Numbers numerical)"],
    ],
    returnValue: "Same as HashMap for basic operations, but O(log n) instead of O(1). NavigableMap methods return keys, entries, or sub-maps. firstKey/lastKey throw NoSuchElementException if empty.",
    methods: [
      "put(k, v) / get(k) / remove(k) — O(log n)",
      "containsKey(k) — O(log n)",
      "firstKey() / lastKey() — smallest / largest key",
      "firstEntry() / lastEntry() — key-value pair for smallest/largest",
      "higherKey(k) / lowerKey(k) — smallest key > k / largest key < k",
      "floorKey(k) / ceilingKey(k) — largest key <= k / smallest key >= k",
      "subMap(from, to) — view of entries from 'from' (incl) to 'to' (excl)",
      "headMap(to) — view of entries with keys < to",
      "tailMap(from) — view of entries with keys >= from",
      "descendingKeySet() — keys in reverse order",
      "pollFirstEntry() / pollLastEntry() — remove and return first/last entry",
      "keySet() / values() / entrySet() — all in sorted order",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        TreeMap<String, Integer> prices = new TreeMap<>();
        prices.put("banana", 2);
        prices.put("apple", 5);
        prices.put("cherry", 10);
        prices.put("date", 7);

        // Keys are sorted!
        System.out.println("All: " + prices);
        System.out.println("First: " + prices.firstKey());
        System.out.println("Last: " + prices.lastKey());

        // Range queries
        System.out.println("a-c: " + prices.subMap("a", "d"));
        System.out.println("Before d: " + prices.headMap("d"));
        System.out.println("From d: " + prices.tailMap("d"));

        // Nearest keys
        System.out.println("Higher than 'banana': " + prices.higherKey("banana"));
        System.out.println("Floor of 'blueberry': " + prices.floorKey("blueberry"));
        System.out.println("Ceiling of 'blueberry': " + prices.ceilingKey("blueberry"));

        // Poll (remove + return)
        System.out.println("Poll first: " + prices.pollFirstEntry());

        // Reverse order
        TreeMap<String, Integer> rev = new TreeMap<>(Collections.reverseOrder());
        rev.putAll(prices);
        System.out.println("Reversed: " + rev);
    }
}`,
    output: `All: {apple=5, banana=2, cherry=10, date=7}
First: apple
Last: date
a-c: {apple=5, banana=2, cherry=10}
Before d: {apple=5, banana=2, cherry=10}
From d: {date=7}
Higher than 'banana': cherry
Floor of 'blueberry': banana
Ceiling of 'blueberry': cherry
Poll first: apple=5
Reversed: {date=7, cherry=10, banana=2}`,
    commonMistakes: [
      "Using TreeMap when you don't need sorted keys — HashMap is faster (O(1) vs O(log n)).",
      "Putting a null key — throws NullPointerException. HashMap allows one null key; TreeMap does not.",
      "Mixing non-comparable key types — putting a String then an Integer throws ClassCastException.",
    ],
    cpp: `#include <map>   // std::map is a sorted red-black tree (like TreeMap)
std::map<std::string, int> prices;
prices["apple"] = 5;
prices.begin()->first;  // smallest key
// std::unordered_map is the O(1) version (like HashMap).`,
    related: ["collections","hashmap","comparable-comparator","hashset","treeset"],
  },

  /* COLLECTIONS */
  "hashset": {
    title: "HashSet",
    category: "Collections",
    beginnerExplanation: `A HashSet is a collection that REJECTS duplicates — like a club where each member can only be on the roster once. If you try to add 'apple' and 'apple' is already in the set, the second add is silently ignored. This makes HashSet perfect for: removing duplicates from a list, checking if something exists (fast membership test), and tracking which items you've seen.

How does it work? Under the hood, HashSet is just a HashMap where the values are ignored — only the keys matter. When you add an item, HashSet computes its hash code, finds the right bucket, and checks if an equal item is already there. If yes, it doesn't add. If no, it adds. This makes add, remove, and contains all O(1) on average — blazing fast.

The catch: HashSet has NO ORDER. If you iterate over it, the items come out in whatever order the hash function produced — not insertion order, not sorted order. If you need insertion order, use LinkedHashSet. If you need sorted order, use TreeSet. Also, like HashMap, items must have proper equals() and hashCode() methods, and you shouldn't modify an item's fields after adding it (it'd become unfindable).

Common pattern: 'new HashSet<>(listWithDuplicates)' gives you a set with duplicates removed. Or 'list.stream().collect(Collectors.toSet())'. To convert back to a list: 'new ArrayList<>(set)'.`,
    description: "HashSet is a hash-table-based implementation of the Set interface. It rejects duplicate elements and provides O(1) average-time add, remove, and contains operations. Elements must properly implement equals() and hashCode(). HashSet does not maintain any order — use LinkedHashSet for insertion order, TreeSet for sorted order.",
    syntax: `import java.util.HashSet;
import java.util.Set;

// Create
Set<String> set = new HashSet<>();
Set<String> set = new HashSet<>(100);           // initial capacity

// Add (returns false if already present)
set.add("apple");
boolean added = set.add("apple");   // false — already there

// Check
boolean has = set.contains("apple");

// Remove
set.remove("apple");
set.clear();

// Size
int n = set.size();

// Remove duplicates from a list
List<String> unique = new ArrayList<>(new HashSet<>(listWithDups));`,
    parameters: [
      ["element", "Must have proper equals() and hashCode() — null is allowed (once)"],
      ["initialCapacity", "Optional starting bucket count"],
      ["loadFactor", "Optional, default 0.75 — when to resize"],
    ],
    returnValue: "add() returns boolean — true if the element was added, false if it was already present. contains() returns boolean. remove() returns boolean. size() returns int.",
    methods: [
      "add(e) — add if not present, returns true if added",
      "contains(o) — true if present, O(1)",
      "remove(o) — remove if present, returns true if removed",
      "size() — number of elements",
      "isEmpty() — true if empty",
      "clear() — remove all",
      "iterator() — iterate (no guaranteed order)",
      "addAll(coll) — union (add all from another collection)",
      "retainAll(coll) — intersection (keep only elements also in coll)",
      "removeAll(coll) — difference (remove elements in coll)",
      "containsAll(coll) — true if all elements present",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<String> fruits = new HashSet<>();
        fruits.add("apple");
        fruits.add("banana");
        fruits.add("cherry");

        // Duplicate — silently ignored
        boolean added = fruits.add("apple");
        System.out.println("Added apple again? " + added);  // false
        System.out.println("Size: " + fruits.size());        // 3

        // Contains — O(1)
        System.out.println("Has banana? " + fruits.contains("banana"));

        // Remove duplicates from a list
        List<String> list = List.of("a", "b", "a", "c", "b", "d");
        Set<String> unique = new HashSet<>(list);
        System.out.println("Unique: " + unique);
        System.out.println("Unique count: " + unique.size());

        // Set operations
        Set<String> a = new HashSet<>(List.of("x", "y", "z"));
        Set<String> b = new HashSet<>(List.of("y", "z", "w"));

        Set<String> union = new HashSet<>(a); union.addAll(b);
        Set<String> inter = new HashSet<>(a); inter.retainAll(b);
        Set<String> diff  = new HashSet<>(a); diff.removeAll(b);
        System.out.println("Union: " + union);     // [x, y, z, w]
        System.out.println("Intersection: " + inter); // [y, z]
        System.out.println("Difference: " + diff);   // [x]

        // Null is allowed (once)
        fruits.add(null);
        System.out.println("Has null? " + fruits.contains(null));
    }
}`,
    output: `Added apple again? false
Size: 3
Has banana? true
Unique: [a, b, c, d]
Unique count: 4
Union: [x, y, z, w]
Intersection: [y, z]
Difference: [x]
Has null? true`,
    commonMistakes: [
      "Relying on iteration order — HashSet has no order. Use LinkedHashSet for insertion order, TreeSet for sorted.",
      "Modifying an element's fields after adding it — the set can no longer find it (hashCode changed).",
      "Expecting addAll to fail on duplicates — it silently skips them. Check the return value if you care.",
    ],
    cpp: `#include <unordered_set>
std::unordered_set<std::string> fruits;
fruits.insert("apple");
fruits.count("apple");  // 1 if present, 0 if not
fruits.erase("apple");
// std::set is the sorted version (like TreeSet).`,
    related: ["collections","treeset","hashmap","object-class","arraylist"],
  },

  /* COLLECTIONS */
  "treeset": {
    title: "TreeSet",
    category: "Collections",
    beginnerExplanation: `A TreeSet is like a HashSet but it keeps its elements SORTED. Imagine a bookshelf organized alphabetically — you can find any book quickly, AND you can browse them in order, AND you can say 'show me all books between D and M.' A HashSet is more like a pile of books — fast to find a specific one, but no browsing order.

TreeSet uses a red-black tree internally (a self-balancing binary search tree). Operations are O(log n) — slightly slower than HashSet's O(1), but still efficient. The big advantage: iteration is in sorted order, and you get powerful navigation methods like 'first()' (smallest), 'last()' (largest), 'higher(e)' (smallest element greater than e), 'lower(e)' (largest element less than e), and 'subSet(from, to)' (all elements in a range).

By default, TreeSet uses natural ordering — Strings alphabetically, Integers numerically. You can pass a custom Comparator to the constructor for a different order. Elements must be mutually comparable (you can't mix types). Unlike HashSet, TreeSet does NOT allow null — because you can't compare null to other elements.

Use TreeSet when: you need sorted iteration, you need range queries ('give me all scores between 80 and 90'), you need to find the nearest element ('what's the closest temperature to 72?'). Use HashSet when you just need fast deduplication and membership testing.`,
    description: "TreeSet is a red-black tree implementation of the NavigableSet interface. Elements are kept sorted by natural ordering or a Comparator. Operations are O(log n). Useful for sorted iteration, range queries (subSet/headSet/tailSet), and nearest-element lookups (higher/lower/floor/ceiling). Does not allow null elements.",
    syntax: `import java.util.TreeSet;
import java.util.Set;

// Natural ordering
Set<Integer> set = new TreeSet<>();

// Custom ordering
Set<String> set = new TreeSet<>(Collections.reverseOrder());

set.add(5); set.add(1); set.add(3);

// Sorted iteration
for (Integer n : set) { ... }  // 1, 3, 5

// NavigableSet operations
TreeSet<Integer> ts = (TreeSet<Integer>) set;
Integer first = ts.first();
Integer last  = ts.last();
Integer higher = ts.higher(3);  // 5 — smallest > 3`,
    parameters: [
      ["element", "Must be Comparable or use a Comparator — null NOT allowed"],
      ["Comparator", "Optional constructor arg for custom ordering"],
    ],
    returnValue: "add() returns boolean. contains() returns boolean. first()/last() throw NoSuchElementException if empty. higher/lower/floor/ceiling return the element or null. All operations O(log n).",
    methods: [
      "add(e) — add if not present, returns true if added",
      "contains(o) — true if present, O(log n)",
      "remove(o) — remove if present",
      "first() — smallest element",
      "last() — largest element",
      "higher(e) — smallest element strictly greater than e",
      "lower(e) — largest element strictly less than e",
      "floor(e) — largest element less than or equal to e",
      "ceiling(e) — smallest element greater than or equal to e",
      "subSet(from, to) — view of elements from 'from' (incl) to 'to' (excl)",
      "headSet(to) — view of elements < to",
      "tailSet(from) — view of elements >= from",
      "pollFirst() / pollLast() — remove and return first/last",
      "descendingSet() — reverse-order view",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        TreeSet<Integer> scores = new TreeSet<>();
        scores.add(85);
        scores.add(92);
        scores.add(78);
        scores.add(95);
        scores.add(88);

        // Sorted iteration
        System.out.println("All: " + scores);
        System.out.println("First: " + scores.first());
        System.out.println("Last: " + scores.last());

        // Navigation
        System.out.println("Higher than 88: " + scores.higher(88));
        System.out.println("Lower than 88: " + scores.lower(88));
        System.out.println("Floor of 90: " + scores.floor(90));
        System.out.println("Ceiling of 90: " + scores.ceiling(90));

        // Range queries
        System.out.println("80-90: " + scores.subSet(80, 91));
        System.out.println("Before 85: " + scores.headSet(85));
        System.out.println("From 88: " + scores.tailSet(88));

        // Poll
        System.out.println("Poll first: " + scores.pollFirst());
        System.out.println("After poll: " + scores);

        // Descending
        System.out.println("Descending: " + scores.descendingSet());
    }
}`,
    output: `All: [78, 85, 88, 92, 95]
First: 78
Last: 95
Higher than 88: 92
Lower than 88: 85
Floor of 90: 88
Ceiling of 90: 92
80-90: [85, 88]
Before 85: [78]
From 88: [88, 92, 95]
Poll first: 78
After poll: [85, 88, 92, 95]
Descending: [95, 92, 88, 85]`,
    commonMistakes: [
      "Adding null — throws NullPointerException. HashSet allows null; TreeSet does not.",
      "Using TreeSet when HashSet would do — TreeSet is slower (O(log n) vs O(1)). Only use it when you need sorting.",
      "Mixing non-comparable types — adding a String to a TreeSet of Integers throws ClassCastException.",
    ],
    cpp: `#include <set>
std::set<int> scores;          // sorted (like TreeSet)
scores.insert(85);
scores.begin();                // smallest
scores.rbegin();               // largest
scores.lower_bound(88);        // ceiling
// std::unordered_set is the O(1) version (like HashSet).`,
    related: ["collections","hashset","treemap","comparable-comparator"],
  },

  /* COLLECTIONS */
  "priority-queue": {
    title: "PriorityQueue",
    category: "Collections",
    beginnerExplanation: `A PriorityQueue is a special queue where elements come out in ORDER OF PRIORITY, not in the order they went in. Imagine a hospital emergency room: patients arrive in random order, but the most critical ones get treated first. A regular queue is first-come-first-served; a PriorityQueue serves the 'most important' element first, regardless of when it arrived.

By default, the 'most important' element is the SMALLEST one (called a 'min-heap'). So if you add 5, 1, 3, the first thing you pull out is 1, then 3, then 5. If you want the LARGEST first (a 'max-heap'), pass 'Collections.reverseOrder()' to the constructor. You can also pass a custom Comparator for any priority scheme — like processing jobs by urgency, or tasks by deadline.

The key operations are 'offer' (add an element) and 'poll' (remove and return the highest-priority element). Both are O(log n). 'peek' looks at the highest-priority element without removing it — O(1). You can't access arbitrary elements by index (it's not a list), and the internal ordering is not fully sorted — only the front element is guaranteed to be the right one.

Common uses: finding the K largest/smallest elements in a stream (keep a PQ of size K), Dijkstra's shortest path algorithm, scheduling tasks by priority, merging K sorted lists. The iterator does NOT return elements in priority order — use poll() in a loop to get them sorted.`,
    description: "PriorityQueue is a min-heap implementation of the Queue interface. Elements are ordered by natural ordering or a Comparator. The head (peek/poll) is always the smallest element (or largest, with a reverse comparator). offer/poll are O(log n), peek is O(1). The internal structure is a binary heap — not fully sorted, only the root is guaranteed correct.",
    syntax: `import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Collections;

// Min-heap (default) — smallest first
Queue<Integer> pq = new PriorityQueue<>();

// Max-heap — largest first
Queue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

// Custom comparator
Queue<String> pq = new PriorityQueue<>(Comparator.comparingInt(String::length));

pq.offer(5);        // add
pq.offer(1);
pq.offer(3);

int next = pq.peek(); // look at front (1), don't remove
int smallest = pq.poll(); // remove and return front (1)`,
    parameters: [
      ["element", "Must be Comparable or use a Comparator"],
      ["Comparator", "Optional constructor arg for custom priority ordering"],
      ["initialCapacity", "Optional constructor arg — starting heap size"],
    ],
    returnValue: "offer() returns boolean (true if added). poll() returns the highest-priority element or null if empty. peek() returns the head without removing, or null if empty. size() returns int.",
    methods: [
      "offer(e) — add an element, returns true (O(log n))",
      "poll() — remove and return the highest-priority element, or null if empty (O(log n))",
      "peek() — look at the highest-priority element without removing (O(1))",
      "add(e) — same as offer, throws if capacity-limited (not for unbounded PQ)",
      "remove() — same as poll, throws if empty",
      "element() — same as peek, throws if empty",
      "size() — number of elements",
      "isEmpty() — true if empty",
      "clear() — remove all",
      "contains(o) — true if present (O(n))",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Min-heap — smallest comes out first
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        minHeap.offer(5);
        minHeap.offer(1);
        minHeap.offer(3);
        minHeap.offer(8);
        minHeap.offer(2);

        System.out.println("Peek: " + minHeap.peek());  // 1
        System.out.print("Poll order: ");
        while (!minHeap.isEmpty()) System.out.print(minHeap.poll() + " ");
        System.out.println();

        // Max-heap — largest first
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        maxHeap.addAll(List.of(5, 1, 3, 8, 2));
        System.out.print("Max-heap order: ");
        while (!maxHeap.isEmpty()) System.out.print(maxHeap.poll() + " ");
        System.out.println();

        // Top 3 largest from a stream
        int[] data = {7, 2, 9, 1, 5, 8, 3, 6, 4};
        PriorityQueue<Integer> topK = new PriorityQueue<>(); // min-heap of size 3
        for (int n : data) {
            topK.offer(n);
            if (topK.size() > 3) topK.poll(); // evict smallest
        }
        System.out.println("Top 3: " + topK);

        // Custom priority — shortest strings first
        PriorityQueue<String> byLen = new PriorityQueue<>(Comparator.comparingInt(String::length));
        byLen.addAll(List.of("banana", "kiwi", "apple", "fig"));
        System.out.print("By length: ");
        while (!byLen.isEmpty()) System.out.print(byLen.poll() + " ");
        System.out.println();
    }
}`,
    output: `Peek: 1
Poll order: 1 2 3 5 8 
Max-heap order: 8 5 3 2 1 
Top 3: [7, 8, 9]
By length: fig kiwi apple banana `,
    commonMistakes: [
      "Iterating with a for-each and expecting priority order — the iterator does NOT return elements sorted. Use poll() in a loop instead.",
      "Using PriorityQueue as a regular queue (FIFO) — it's NOT FIFO. Elements come out by priority, not insertion order. Use LinkedList or ArrayDeque for FIFO.",
      "Forgetting that null is not allowed — throws NullPointerException.",
    ],
    cpp: `#include <queue>
std::priority_queue<int> pq;                    // max-heap (default in C++)
std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
pq.push(5); pq.push(1);
pq.top();    // 1 (largest in max-heap)
pq.pop();`,
    related: ["collections","stack-deque","comparable-comparator","heaps"],
  },

  /* COLLECTIONS */
  "stack-deque": {
    title: "Stack and Deque",
    category: "Collections",
    beginnerExplanation: `A stack is like a stack of plates: you add to the top (push) and remove from the top (pop). The last plate you put on is the first one you take off — this is called LIFO (Last In, First Out). A queue is like a line at a store: you add to the back (enqueue/offer) and remove from the front (dequeue/poll). The first person in line is the first one served — FIFO (First In, First Out).

A deque (pronounced 'deck,' short for 'double-ended queue') can do BOTH — you can add and remove from both ends. It can act as a stack (use addFirst/removeFirst) or a queue (use addLast/removeFirst), plus anything in between. In modern Java, the ArrayDeque class is the recommended implementation for both stacks and queues — it's faster than the legacy Stack class (which is synchronized and slow) and faster than LinkedList for most operations.

Use a stack when you need to reverse things, track function calls, implement undo/redo, or parse nested structures (like matching brackets). Use a queue for breadth-first search, task scheduling, or buffering. Use a deque when you need both ends (like a sliding window problem).

Common methods: push(e) adds to the front, pop() removes from the front, peek() looks at the front. offer(e) adds to the back, poll() removes from the front. offerFirst/offerLast and pollFirst/pollLast give you full control over both ends.`,
    description: "Stack is a LIFO (Last-In-First-Out) collection. Deque (double-ended queue) supports adding and removing from both ends — it can serve as both a stack and a queue. ArrayDeque is the recommended implementation (faster than legacy Stack and LinkedList). Deque methods: push/pop/peek for stack usage, offer/poll/peek for queue usage, plus addFirst/addLast/removeFirst/removeLast for full control.",
    syntax: `import java.util.ArrayDeque;
import java.util.Deque;

// As a stack (LIFO)
Deque<String> stack = new ArrayDeque<>();
stack.push("a");     // add to front
stack.push("b");
stack.pop();         // remove from front → "b"
stack.peek();        // look at front → "a"

// As a queue (FIFO)
Deque<String> queue = new ArrayDeque<>();
queue.offer("a");    // add to back
queue.offer("b");
queue.poll();        // remove from front → "a"

// Full deque — both ends
deque.addFirst("x");
deque.addLast("y");
deque.removeFirst();
deque.removeLast();`,
    parameters: [
      ["element", "Value to add — null is NOT allowed in ArrayDeque"],
      ["front (first)", "The 'top' of the stack / 'head' of the queue"],
      ["back (last)", "The 'bottom' of the stack / 'tail' of the queue"],
    ],
    returnValue: "push/offer/addFirst/addLast return void or boolean. pop/poll/removeFirst/removeLast return the element or null/throw. peek/peekFirst/peekLast return without removing.",
    methods: [
      "push(e) — add to front (stack operation)",
      "pop() — remove and return front, throws if empty",
      "peek() — look at front without removing",
      "offer(e) — add to back (queue operation)",
      "poll() — remove and return front, returns null if empty",
      "offerFirst(e) / offerLast(e) — add to front / back",
      "pollFirst() / pollLast() — remove from front / back",
      "peekFirst() / peekLast() — look at front / back",
      "addFirst(e) / addLast(e) — add (throws if capacity-limited)",
      "removeFirst() / removeLast() — remove (throws if empty)",
      "getFirst() / getLast() — look (throws if empty)",
      "size() / isEmpty() / clear()",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Stack — LIFO (like undo history)
        Deque<String> undo = new ArrayDeque<>();
        undo.push("type A");
        undo.push("type B");
        undo.push("type C");
        System.out.println("Top: " + undo.peek());   // C
        System.out.println("Undo: " + undo.pop());    // C
        System.out.println("Undo: " + undo.pop());    // B
        System.out.println("Remaining: " + undo);     // [type A]

        // Queue — FIFO (like a print queue)
        Deque<String> printQueue = new ArrayDeque<>();
        printQueue.offer("doc1.pdf");
        printQueue.offer("doc2.pdf");
        printQueue.offer("doc3.pdf");
        System.out.println("\\nNext to print: " + printQueue.peek());  // doc1
        System.out.println("Printing: " + printQueue.poll());           // doc1
        System.out.println("Printing: " + printQueue.poll());           // doc2

        // Bracket matching with a stack
        String code = "{[()]}";
        Deque<Character> brackets = new ArrayDeque<>();
        boolean balanced = true;
        for (char c : code.toCharArray()) {
            if ("{[(".indexOf(c) >= 0) brackets.push(c);
            else if ("}])".indexOf(c) >= 0) {
                if (brackets.isEmpty()) { balanced = false; break; }
                char open = brackets.pop();
                if (open != "{[(".charAt("}])".indexOf(c))) { balanced = false; break; }
            }
        }
        System.out.println("\\nBrackets balanced? " + (balanced && brackets.isEmpty()));
    }
}`,
    output: `Top: type C
Undo: type C
Undo: type B
Remaining: [type A]

Next to print: doc1.pdf
Printing: doc1.pdf
Printing: doc2.pdf

Brackets balanced? true`,
    commonMistakes: [
      "Using the legacy Stack class — it's synchronized (slow) and extends Vector (bad design). Use ArrayDeque instead.",
      "Adding null to ArrayDeque — throws NullPointerException. Use LinkedList if you need nulls.",
      "Confusing push (adds to FRONT) with offer (adds to BACK) — they go to opposite ends.",
    ],
    cpp: `#include <stack>
#include <queue>
std::stack<int> s;       // LIFO
s.push(1); s.top(); s.pop();
std::queue<int> q;       // FIFO
q.push(1); q.front(); q.pop();
std::deque<int> d;       // both ends
d.push_front(1); d.push_back(2);`,
    related: ["collections","priority-queue","linkedlist","arrays"],
  },

  /* COLLECTIONS */
  "iterator-iterable": {
    title: "Iterator and Iterable",
    category: "Collections",
    beginnerExplanation: `An iterator is a pointer that walks through a collection one element at a time. Think of it like a bookmark in a book — it remembers where you are, and you can ask for 'the next page' repeatedly until you reach the end. The 'Iterable' interface is the promise that a collection CAN be iterated — it's what lets you use the for-each loop.

Every Java collection gives you an iterator via the 'iterator()' method. The iterator has three key methods: 'hasNext()' (are there more elements?), 'next()' (give me the next one), and 'remove()' (delete the last one returned). The for-each loop ('for (String s : list)') is actually just shorthand for using an iterator — Java writes the iterator code for you behind the scenes.

Why would you use an iterator explicitly instead of a for-each? Two reasons. First, if you need to REMOVE elements while iterating — a for-each doesn't let you, but iterator.remove() does. Second, if you're writing your own collection class, you need to implement Iterable so users can for-each over it.

The big rule: NEVER modify a collection while iterating with a for-each — you'll get ConcurrentModificationException. If you need to remove elements during iteration, use the iterator's remove() method, or use Java 8's 'list.removeIf(condition)' which handles it safely.`,
    description: "Iterable is an interface that marks a class as usable in a for-each loop — it provides an Iterator. Iterator is an interface with hasNext(), next(), and remove() methods for walking through a collection one element at a time. The for-each loop is syntactic sugar over Iterable/Iterator. Iterator.remove() is the only safe way to remove elements during iteration.",
    syntax: `import java.util.Iterator;
import java.util.List;

// Iterable — enables for-each
List<String> list = List.of("a", "b", "c");
for (String s : list) { ... }   // uses Iterator internally

// Explicit Iterator
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    System.out.println(s);
}

// Remove during iteration — only safe way
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    String s = it.next();
    if (s.startsWith("x")) it.remove();   // safe!
}

// Modern: removeIf does this for you
list.removeIf(s -> s.startsWith("x"));`,
    parameters: [
      ["hasNext()", "Returns true if there are more elements"],
      ["next()", "Returns the next element — throws NoSuchElementException if none"],
      ["remove()", "Removes the last element returned by next() — optional operation"],
      ["forEachRemaining(action)", "Performs an action on each remaining element"],
    ],
    returnValue: "hasNext() returns boolean. next() returns the next element. remove() returns void. iterator() on a collection returns an Iterator<E>.",
    methods: [
      "iterator() — get an Iterator from an Iterable",
      "hasNext() — true if more elements remain",
      "next() — return the next element (throws if none)",
      "remove() — remove the last element returned by next() (optional)",
      "forEachRemaining(Consumer) — apply an action to each remaining element",
      "Iterable.forEach(Consumer) — Java 8+ shortcut, no explicit iterator needed",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>(List.of("Ana", "Bob", "Cy", "Dave", "Eve"));

        // for-each uses Iterator internally
        for (String n : names) System.out.print(n + " ");
        System.out.println();

        // Explicit Iterator
        Iterator<String> it = names.iterator();
        while (it.hasNext()) {
            String n = it.next();
            System.out.print(n.length() + " ");
        }
        System.out.println();

        // Safe removal during iteration
        Iterator<String> it2 = names.iterator();
        while (it2.hasNext()) {
            String n = it2.next();
            if (n.length() <= 3) it2.remove();   // remove short names
        }
        System.out.println("After removing short: " + names);

        // Modern: removeIf (uses iterator internally)
        names.removeIf(n -> n.contains("a"));
        System.out.println("After removeIf: " + names);

        // Custom Iterable — for-each on your own class
        Range range = new Range(1, 5);
        for (int i : range) System.out.print(i + " ");
        System.out.println();
    }
}

// Implementing Iterable enables for-each
class Range implements Iterable<Integer> {
    private final int start, end;
    Range(int start, int end) { this.start = start; this.end = end; }
    public Iterator<Integer> iterator() {
        return new Iterator<>() {
            int current = start;
            public boolean hasNext() { return current <= end; }
            public Integer next() { return current++; }
        };
    }
}`,
    output: `Ana Bob Cy Dave Eve 
3 3 2 4 3 
After removing short: [Dave]
After removeIf: [Dave]
1 2 3 4 5 `,
    commonMistakes: [
      "Calling next() without checking hasNext() — throws NoSuchElementException at the end.",
      "Modifying the collection while iterating with a for-each — ConcurrentModificationException. Use iterator.remove() or removeIf().",
      "Calling remove() before next() — IllegalStateException. remove() only removes what next() just returned.",
    ],
    cpp: `// C++ iterators are pointer-like:
for (auto it = vec.begin(); it != vec.end(); ++it) { std::cout << *it; }
// C++ range-based for: for (auto& x : vec) { ... }
// No ConcurrentModificationException — but modifying during iteration is still UB.`,
    related: ["collections","arraylist","linkedlist","for-each","lambda-expressions"],
  },

  /* COLLECTIONS */
  "comparable-comparator": {
    title: "Comparable and Comparator",
    category: "Collections",
    beginnerExplanation: `Comparable and Comparator are two ways to tell Java how to sort objects. The difference is WHERE you define the sorting logic. Comparable is like a person's built-in 'natural order' — the sorting logic lives INSIDE the class itself. Comparator is like an external judge — the sorting logic lives in a SEPARATE object, so you can define multiple different orderings for the same class.

Use Comparable when a class has ONE obvious natural ordering. For example, a Person class might naturally sort by name — you'd implement 'Comparable<Person>' and write 'compareTo(Person other)' that returns negative/zero/positive. Then 'Collections.sort(people)' just works. String, Integer, LocalDate all implement Comparable — that's why you can sort lists of them without any extra code.

Use Comparator when you need MULTIPLE orderings or when you can't modify the class. For example, for a Person, you might want to sort by name sometimes, by age other times, by height a third time. You create separate Comparator objects for each: 'Comparator.comparing(Person::getAge)' or 'Comparator.comparing(Person::getName)'. Pass these to 'Collections.sort(people, comparator)' or 'people.sort(comparator)'.

Comparator methods: 'comparing(keyExtractor)' sorts by a derived key, 'reversed()' reverses the order, 'thenComparing(nextKey)' breaks ties. Example: 'Comparator.comparing(Person::getLastName).thenComparing(Person::getFirstName)' sorts by last name, then first name for ties.`,
    description: "Comparable<T> defines a class's natural ordering by implementing compareTo(T) inside the class. Comparator<T> defines an external ordering by implementing compare(T, T) in a separate object — allows multiple orderings for the same class. Both are functional interfaces (Comparator since Java 8) and work with Collections.sort(), List.sort(), TreeSet/TreeMap, and PriorityQueue.",
    syntax: `// Comparable — natural ordering, defined INSIDE the class
public class Person implements Comparable<Person> {
    private String name;
    private int age;
    public int compareTo(Person other) {
        return this.name.compareTo(other.name);  // sort by name
    }
}
// Usage: Collections.sort(people);  // uses natural ordering

// Comparator — external ordering, defined SEPARATELY
Comparator<Person> byAge = Comparator.comparingInt(Person::getAge);
Comparator<Person> byNameDesc = Comparator.comparing(Person::getName).reversed();
Comparator<Person> byLastThenFirst = Comparator
    .comparing(Person::getLastName)
    .thenComparing(Person::getFirstName);

// Usage:
Collections.sort(people, byAge);
people.sort(byNameDesc);`,
    parameters: [
      ["compareTo(T other)", "Returns negative if this < other, zero if equal, positive if this > other"],
      ["compare(T a, T b)", "Same contract — returns negative/zero/positive"],
      ["Comparator.comparing(key)", "Creates a comparator that sorts by the extracted key"],
      ["reversed()", "Returns a comparator with the opposite order"],
      ["thenComparing(key)", "Secondary sort for ties — chain after comparing()"],
    ],
    returnValue: "compareTo/compare return int: negative if first is 'less than' second, zero if equal, positive if 'greater than.' Never return a specific value like 1 or -1 — just the sign matters, so use Integer.compare(a, b) for safety.",
    methods: [
      "compareTo(T) — Comparable method, defines natural ordering",
      "compare(T, T) — Comparator method, defines external ordering",
      "Comparator.comparing(keyExtractor) — sort by a derived key",
      "Comparator.comparingInt(keyExtractor) — sort by an int key (avoids boxing)",
      "Comparator.comparingDouble / comparingLong — for other primitives",
      "reversed() — reverse the comparator's order",
      "thenComparing(other) — secondary sort for ties",
      "thenComparing(keyExtractor) — secondary sort by another key",
      "nullsFirst / nullsLast — handle nulls in sorting",
      "naturalOrder() / reverseOrder() — use the Comparable's ordering",
    ],
    example: `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        var people = new ArrayList<>(List.of(
            new Person("Ana", 19),
            new Person("Bob", 25),
            new Person("Cy", 19),
            new Person("Dave", 30)
        ));

        // Natural ordering (Comparable — by name)
        Collections.sort(people);
        System.out.println("By name: " + people);

        // By age (Comparator)
        people.sort(Comparator.comparingInt(Person::getAge));
        System.out.println("By age: " + people);

        // By age descending
        people.sort(Comparator.comparingInt(Person::getAge).reversed());
        System.out.println("By age desc: " + people);

        // By age, then name for ties
        people.sort(Comparator.comparingInt(Person::getAge)
                              .thenComparing(Person::getName));
        System.out.println("By age, then name: " + people);

        // Top 2 oldest
        people.stream()
              .sorted(Comparator.comparingInt(Person::getAge).reversed())
              .limit(2)
              .forEach(System.out::println);
    }
}

class Person implements Comparable<Person> {
    private String name;
    private int age;
    Person(String n, int a) { name = n; age = a; }
    public String getName() { return name; }
    public int getAge() { return age; }
    public int compareTo(Person o) { return name.compareTo(o.name); }
    public String toString() { return name + "(" + age + ")"; }
}`,
    output: `By name: [Ana(19), Bob(25), Cy(19), Dave(30)]
By age: [Ana(19), Cy(19), Bob(25), Dave(30)]
By age desc: [Dave(30), Bob(25), Ana(19), Cy(19)]
By age, then name: [Ana(19), Cy(19), Bob(25), Dave(30)]
Dave(30)
Bob(25)`,
    commonMistakes: [
      "Returning 1 or -1 instead of the difference — use Integer.compare(a, b) to avoid integer overflow bugs (e.g., a-b overflows for large values).",
      "Forgetting that compareTo must be consistent with equals — if a.compareTo(b) == 0, a.equals(b) should be true, or TreeSet/TreeMap will behave unexpectedly.",
      "Implementing Comparable after the class is widely used — changing the natural ordering can break existing code. Add a Comparator instead.",
    ],
    cpp: `// C++ uses operator< for natural ordering, and a comparison function/functor for custom:
struct Person { std::string name; int age; };
bool byAge(const Person& a, const Person& b) { return a.age < b.age; }
std::sort(people.begin(), people.end(), byAge);`,
    related: ["collections","treemap","treeset","priority-queue","lambda-expressions"],
  },

  /* COLLECTIONS */
  "collections-utility": {
    title: "Collections Utility Class",
    category: "Collections",
    beginnerExplanation: `The 'Collections' class (note the 's' — it's a utility class, not the 'Collection' interface) is a toolbox of static helper methods for working with collections. Think of it like a Swiss Army knife — it has tools for sorting, searching, shuffling, reversing, making things unmodifiable, synchronizing for thread safety, and more. You don't create a Collections object; you just call its static methods like 'Collections.sort(list)'.

The most-used methods: 'sort(list)' sorts a List in place (uses the natural ordering or a Comparator). 'reverse(list)' flips the order. 'shuffle(list)' randomizes the order (great for card games). 'binarySearch(list, key)' finds an element in a SORTED list in O(log n) — but the list must already be sorted. 'frequency(coll, obj)' counts how many times an element appears. 'max(coll)' and 'min(coll)' find the extremes.

The wrapper methods are powerful too: 'unmodifiableList(list)' returns a read-only view — any attempt to modify it throws UnsupportedOperationException. 'synchronizedList(list)' returns a thread-safe wrapper — useful for legacy code, though java.util.concurrent collections are better for new code. 'singleton(obj)' creates a one-element Set, 'emptyList()' returns an immutable empty list.

Note: Java 8+ added many of these as instance methods on List/Collection (list.sort(comparator) instead of Collections.sort(list, comparator)), and the Streams API covers most transformation needs. But Collections still has unique methods like shuffle, frequency, disjoint, and the wrappers.`,
    description: "java.util.Collections is a utility class with static methods for operating on collections. Key methods: sort, binarySearch, reverse, shuffle, frequency, min/max, and wrappers (unmodifiable*, synchronized*, singleton*, empty*). The class also defines constants like EMPTY_LIST. Many methods now have instance equivalents on List (list.sort) but Collections still has unique operations.",
    syntax: `import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

List<Integer> list = new ArrayList<>(List.of(3, 1, 4, 1, 5, 9, 2, 6));

// Sorting & searching
Collections.sort(list);                    // [1, 1, 2, 3, 4, 5, 6, 9]
Collections.sort(list, Collections.reverseOrder());  // descending
int idx = Collections.binarySearch(list, 4);  // must be sorted first

// Reordering
Collections.reverse(list);
Collections.shuffle(list);                 // random order
Collections.swap(list, 0, 1);              // swap two elements

// Queries
int freq = Collections.frequency(list, 1);  // count of 1
int max = Collections.max(list);
int min = Collections.min(list);

// Wrappers
List<Integer> readOnly = Collections.unmodifiableList(list);
List<Integer> threadSafe = Collections.synchronizedList(list);
List<Integer> one = Collections.singletonList(42);
List<Integer> empty = Collections.emptyList();`,
    parameters: [
      ["list", "Must be a List for sort/binarySearch/reverse/shuffle/swap"],
      ["comparator", "Optional Comparator for sort/max/min/binarySearch"],
      ["key", "Element to search for in binarySearch — list must be sorted"],
    ],
    returnValue: "sort/reverse/shuffle/swap return void (in-place). binarySearch returns int index (or negative if not found). frequency returns int. max/min return the element. Wrappers return a wrapped collection.",
    methods: [
      "sort(list) — sort in place using natural ordering",
      "sort(list, comparator) — sort with a custom Comparator",
      "binarySearch(list, key) — O(log n) search in a sorted list",
      "reverse(list) — reverse the order in place",
      "shuffle(list) — randomly permute the elements",
      "swap(list, i, j) — swap elements at indices i and j",
      "frequency(coll, obj) — count occurrences of obj",
      "max(coll) / min(coll) — find the largest/smallest",
      "disjoint(c1, c2) — true if collections have no elements in common",
      "unmodifiableList/Set/Map(coll) — read-only wrapper",
      "synchronizedList/Set/Map(coll) — thread-safe wrapper",
      "singleton(obj) / singletonList(obj) / singletonMap(k, v) — one-element collections",
      "emptyList() / emptySet() / emptyMap() — immutable empty collections",
      "addAll(coll, elements...) — add multiple elements at once",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = new ArrayList<>(List.of(3, 1, 4, 1, 5, 9, 2, 6));

        // Sort
        Collections.sort(nums);
        System.out.println("Sorted: " + nums);

        // Binary search (list must be sorted!)
        System.out.println("Index of 4: " + Collections.binarySearch(nums, 4));
        System.out.println("Index of 7: " + Collections.binarySearch(nums, 7));  // negative

        // Frequency and max/min
        System.out.println("Count of 1: " + Collections.frequency(nums, 1));
        System.out.println("Max: " + Collections.max(nums));
        System.out.println("Min: " + Collections.min(nums));

        // Reverse and shuffle
        Collections.reverse(nums);
        System.out.println("Reversed: " + nums);
        Collections.shuffle(nums);
        System.out.println("Shuffled: " + nums);

        // Unmodifiable wrapper
        List<Integer> readOnly = Collections.unmodifiableList(nums);
        System.out.println("Read-only: " + readOnly);
        try { readOnly.add(99); } catch (UnsupportedOperationException e) {
            System.out.println("Can't modify read-only list");
        }

        // Singleton and empty
        List<String> one = Collections.singletonList("only");
        List<String> empty = Collections.emptyList();
        System.out.println("Singleton: " + one + ", empty: " + empty);

        // addAll
        List<String> fruits = new ArrayList<>();
        Collections.addAll(fruits, "apple", "banana", "cherry");
        System.out.println("Fruits: " + fruits);
    }
}`,
    output: `Sorted: [1, 1, 2, 3, 4, 5, 6, 9]
Index of 4: 4
Index of 7: -6
Count of 1: 2
Max: 9
Min: 1
Reversed: [9, 6, 5, 4, 3, 2, 1, 1]
Shuffled: [3, 1, 9, 1, 5, 6, 2, 4]
Read-only: [3, 1, 9, 1, 5, 6, 2, 4]
Can't modify read-only list
Singleton: [only], empty: []
Fruits: [apple, banana, cherry]`,
    commonMistakes: [
      "Calling binarySearch on an UNSORTED list — returns garbage. Sort first.",
      "Forgetting that unmodifiable wrappers return a VIEW, not a copy — changes to the original are visible through the wrapper.",
      "Using synchronizedList for new concurrent code — prefer java.util.concurrent collections (ConcurrentHashMap, CopyOnWriteArrayList) which are more efficient.",
    ],
    cpp: `// C++ equivalents: std::sort, std::reverse, std::random_shuffle (deprecated, use std::shuffle),
// std::binary_search, std::count, std::min_element, std::max_element
#include <algorithm>
std::sort(vec.begin(), vec.end());
std::reverse(vec.begin(), vec.end());`,
    related: ["collections","arraylist","comparable-comparator","concurrent-collections"],
  },

  /* UTILITIES */
  "serialization": {
    title: "Serialization",
    category: "Utilities",
    beginnerExplanation: `Serialization is the process of turning a live Java object into a stream of bytes so you can save it to a file, send it over a network, or store it in a database. Think of it like freezing a meal — you take something fresh (a live object in memory), freeze it into a compact form (bytes), and later thaw it back into the original meal (deserialization).

To make a class serializable, just add 'implements Serializable' to it. This is a 'marker interface' — it has no methods, it just tells Java 'this class is OK to serialize.' Then you use ObjectOutputStream to write the object and ObjectInputStream to read it back. Java handles converting all the fields automatically, including nested objects (as long as they're also Serializable).

Important rules: static fields are NOT serialized (they belong to the class, not the object). transient fields are skipped (use this for sensitive data like passwords, or for fields that don't make sense to save, like a cache). If you change the class after serializing (add/remove fields), deserialization may fail unless you declare 'private static final long serialVersionUID' — a version number that tells Java the class is still compatible.

A warning: Java's built-in serialization is considered insecure for untrusted data — a malicious byte stream can trigger arbitrary code execution. For new projects, prefer JSON (with Jackson or Gson) or Protocol Buffers. Use Java serialization only for trusted internal communication.`,
    description: "Serialization converts an object into a byte stream for storage or transmission; deserialization reverses it. A class must implement java.io.Serializable (a marker interface with no methods). Use ObjectOutputStream.writeObject() and ObjectInputStream.readObject(). Static and transient fields are not serialized. Define serialVersionUID for version compatibility. Java serialization is insecure for untrusted data — prefer JSON for new code.",
    syntax: `import java.io.*;

// Make a class serializable
public class Player implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int score;
    private transient String password;  // NOT serialized
    // static fields are also NOT serialized
}

// Serialize
try (ObjectOutputStream oos = new ObjectOutputStream(
        new FileOutputStream("player.dat"))) {
    oos.writeObject(player);
}

// Deserialize
try (ObjectInputStream ois = new ObjectInputStream(
        new FileInputStream("player.dat"))) {
    Player p = (Player) ois.readObject();
}`,
    parameters: [
      ["Serializable", "Marker interface — no methods, just signals that a class can be serialized"],
      ["transient", "Keyword to skip a field during serialization"],
      ["serialVersionUID", "Version number — declare it to handle class evolution"],
      ["ObjectOutputStream", "Stream that writes objects as bytes"],
      ["ObjectInputStream", "Stream that reads objects from bytes"],
    ],
    returnValue: "writeObject() returns void. readObject() returns Object — you must cast it to the expected type. Throws ClassNotFoundException if the class can't be found.",
    methods: [
      "implements Serializable — mark a class as serializable",
      "transient field — skip during serialization",
      "serialVersionUID — version compatibility constant",
      "ObjectOutputStream.writeObject(obj) — serialize to a stream",
      "ObjectInputStream.readObject() — deserialize, returns Object",
    ],
    example: `import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Player p1 = new Player("Ana", 75, "secret123");

        // Serialize
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("player.dat"))) {
            oos.writeObject(p1);
            System.out.println("Saved: " + p1);
        }

        // Deserialize
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("player.dat"))) {
            Player p2 = (Player) ois.readObject();
            System.out.println("Loaded: " + p2);
            System.out.println("Password after deserialization: " + p2.password);
            // password is null because it was transient
        }
    }
}

class Player implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
    int score;
    transient String password;  // won't be saved

    Player(String name, int score, String password) {
        this.name = name;
        this.score = score;
        this.password = password;
    }
    public String toString() {
        return "Player[name=" + name + ", score=" + score + ", password=" + password + "]";
    }
}`,
    output: `Saved: Player[name=Ana, score=75, password=secret123]
Loaded: Player[name=Ana, score=75, password=null]
Password after deserialization: null`,
    commonMistakes: [
      "Forgetting to implement Serializable — throws NotSerializableException.",
      "Not declaring serialVersionUID — if you change the class, old serialized files become unreadable.",
      "Serializing sensitive data without marking it transient — passwords, keys, etc. get saved in plain bytes.",
      "Using Java serialization for untrusted data — security risk. Use JSON instead.",
    ],
    cpp: `// C++ has no built-in serialization. Use libraries like Boost.Serialization,
// or serialize manually to JSON/protobuf. C++ objects don't carry runtime type info
// the way Java objects do, so automatic serialization isn't possible.`,
    related: ["file-handling","exception-handling","objects","classes"],
  },

  /* UTILITIES */
  "buffered-io": {
    title: "Buffered I/O",
    category: "Utilities",
    beginnerExplanation: `Buffered I/O is like using a water tank instead of turning on the tap every time you want a sip. Without buffering, every read or write goes directly to the disk (or network), which is slow — each operation has overhead. With buffering, Java reads or writes a big chunk at once into memory (the 'buffer'), then doles it out to your program in small pieces. This is dramatically faster for many small reads or writes.

Think of it like grocery shopping: without a buffer, you walk to the store for each item. With a buffer, you make one trip and bring back a cartload. The 'BufferedReader' and 'BufferedWriter' classes wrap other readers/writers and add this buffering automatically.

BufferedReader is the standard way to read text files line by line. 'readLine()' returns one line at a time (without the newline character), or null at end of file. BufferedWriter is the standard way to write text efficiently — 'write()' adds to the buffer, and 'newLine()' adds a platform-correct line separator. Always flush or close a BufferedWriter when done, or the last partial buffer might never reach the disk.

The golden rule: wrap your I/O. Never read directly from a FileReader or write directly to a FileWriter in performance-sensitive code — always wrap them in BufferedReader/BufferedWriter. The difference can be 10-100x faster.`,
    description: "Buffered I/O uses an in-memory buffer to reduce the number of actual I/O operations. BufferedReader and BufferedWriter wrap other readers/writers and read/write large chunks at once, then serve small pieces to/from your program. This is dramatically faster than unbuffered I/O for many small operations. Always wrap file I/O in buffered streams for performance.",
    syntax: `import java.io.*;

// Buffered reading
try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}

// Buffered writing
try (BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {
    bw.write("First line");
    bw.newLine();              // platform-correct newline
    bw.write("Second line");
}  // automatically flushes and closes

// Buffered byte I/O
try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("data.bin"));
     BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("copy.bin"))) {
    byte[] buffer = new byte[8192];
    int n;
    while ((n = bis.read(buffer)) != -1) bos.write(buffer, 0, n);
}`,
    parameters: [
      ["buffer size", "Optional constructor arg — default is 8192 bytes (8KB), usually fine"],
      ["Reader/Writer", "The underlying text stream to wrap (FileReader, InputStreamReader, etc.)"],
      ["InputStream/OutputStream", "The underlying byte stream to wrap"],
    ],
    returnValue: "readLine() returns a String (without newline) or null at end of file. read() returns int (byte 0-255, or -1 at end). write() returns void. lines() (Java 8+) returns a Stream<String>.",
    methods: [
      "BufferedReader(Reader) — wrap a reader with an 8KB buffer",
      "BufferedReader(Reader, int size) — specify a custom buffer size",
      "readLine() — read one line, returns null at end",
      "read() — read a single character",
      "lines() — Java 8+ Stream<String> of lines (lazy, close the reader)",
      "BufferedWriter(Writer) — wrap a writer with buffering",
      "write(String) — write text to the buffer",
      "newLine() — write a platform-correct line separator",
      "flush() — force the buffer contents to the underlying stream",
      "BufferedInputStream/BufferedOutputStream — byte versions",
    ],
    example: `import java.io.*;
import java.nio.file.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // Write a file with BufferedWriter
        Path file = Path.of("demo.txt");
        try (BufferedWriter bw = Files.newBufferedWriter(file)) {
            bw.write("Line 1: Hello");
            bw.newLine();
            bw.write("Line 2: World");
            bw.newLine();
            bw.write("Line 3: Goodbye");
        }

        // Read with BufferedReader
        System.out.println("--- readLine loop ---");
        try (BufferedReader br = Files.newBufferedReader(file)) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        }

        // Read with lines() stream (Java 8+)
        System.out.println("--- lines().filter ---");
        try (var lines = Files.lines(file)) {
            lines.filter(l -> l.contains("World"))
                 .forEach(System.out::println);
        }

        // Count lines
        try (var lines = Files.lines(file)) {
            System.out.println("Line count: " + lines.count());
        }

        Files.deleteIfExists(file);
    }
}`,
    output: `--- readLine loop ---
Line 1: Hello
Line 2: World
Line 3: Goodbye
--- lines().filter ---
Line 2: World
Line count: 3`,
    commonMistakes: [
      "Forgetting to close/flush a BufferedWriter — the last partial buffer never reaches disk.",
      "Using FileReader/FileWriter directly (unbuffered) for performance-sensitive code — 10-100x slower.",
      "Not closing Files.lines() streams — they hold open file handles. Always use try-with-resources.",
    ],
    cpp: `#include <fstream>
std::ifstream in("file.txt");
std::string line;
while (std::getline(in, line)) { ... }
// C++ file streams are already buffered by default.`,
    related: ["file-handling","input-output","exception-handling","nio"],
  },

  /* UTILITIES */
  "nio": {
    title: "NIO (New I/O)",
    category: "Utilities",
    beginnerExplanation: `NIO (New I/O, introduced in Java 1.4) is a more powerful alternative to the classic java.io package. Think of classic I/O as a pipe — data flows through it one byte at a time, blocking (waiting) until each byte is ready. NIO is more like a channel — you can read or write big blocks of data, and in some modes, you don't have to wait (non-blocking).

The three core concepts: Channels are like pipes connected to files, sockets, or other data sources. Buffers are blocks of memory you fill from a channel or empty into one — instead of reading one byte at a time, you read a whole buffer at once. Selectors let one thread monitor many channels at once (great for servers handling thousands of connections).

For everyday file I/O, the modern java.nio.file package (Java 7+) is what you'll use — it has Path (a better File), Files (one-liners for read/write/copy/move), and file system operations like walking directories, watching for changes, and reading file attributes. This is the recommended API for all new file code — it's clearer and more correct than the old java.io.File.

For high-performance networking, NIO's non-blocking channels and selectors let a server handle tens of thousands of concurrent connections with a single thread — impossible with classic blocking I/O. Frameworks like Netty build on this. But NIO is complex; for most apps, classic I/O or the Files utility class is simpler and fast enough.`,
    description: "NIO (java.nio) provides buffer-oriented, channel-based I/O as an alternative to the stream-based java.io. Core concepts: Channel (connection to file/socket), Buffer (block of memory for bulk data transfer), Selector (monitors multiple channels for events). The java.nio.file package (Java 7+) provides Path and Files — the modern API for file operations. NIO enables non-blocking I/O for high-performance networking.",
    syntax: `import java.nio.file.*;
import java.nio.ByteBuffer;
import java.nio.channels.*;

// Modern file I/O (java.nio.file — recommended)
Path p = Path.of("data.txt");
Files.writeString(p, "hello");
String content = Files.readString(p);
List<String> lines = Files.readAllLines(p);
byte[] bytes = Files.readAllBytes(p);
Files.copy(src, dst, StandardCopyOption.REPLACE_EXISTING);
Files.delete(p);

// Channel + Buffer (classic NIO)
try (FileChannel ch = FileChannel.open(path, StandardOpenOption.READ)) {
    ByteBuffer buf = ByteBuffer.allocate(1024);
    int bytesRead = ch.read(buf);  // fill buffer from channel
    buf.flip();                     // prepare for reading
    while (buf.hasRemaining()) {
        byte b = buf.get();
    }
}`,
    parameters: [
      ["Path", "Modern replacement for File — use Path.of(\"a/b.txt\")"],
      ["Files", "Utility class with static methods: read/write/copy/move/delete"],
      ["ByteBuffer", "Block of memory for channel I/O — allocate, read, flip, get"],
      ["Channel", "Connection to a data source (FileChannel, SocketChannel)"],
      ["Selector", "Monitors multiple channels for readiness (for non-blocking servers)"],
      ["StandardOpenOption", "CREATE, APPEND, TRUNCATE_EXISTING, READ, WRITE"],
    ],
    returnValue: "Files.readString returns String. readAllLines returns List<String>. readAllBytes returns byte[]. Files.copy returns the target Path. Channel.read returns int bytes read (-1 at end).",
    methods: [
      "Path.of(\"path\") — create a Path (modern File replacement)",
      "Files.readString(path) — read entire file as String (Java 11+)",
      "Files.writeString(path, text) — write String to file (Java 11+)",
      "Files.readAllLines(path) — List<String>, one per line",
      "Files.readAllBytes(path) — byte[] of entire file",
      "Files.lines(path) — lazy Stream<String>, must close",
      "Files.copy(src, dst, options) — copy file",
      "Files.move(src, dst) — move/rename",
      "Files.delete(path) — delete (throws if missing)",
      "Files.deleteIfExists(path) — delete (no throw if missing)",
      "Files.exists(path) — check existence",
      "Files.list(dir) — Stream<Path> of immediate children",
      "Files.walk(dir) — recursive Stream<Path>",
      "Files.createDirectories(dir) — mkdir -p style",
      "ByteBuffer.allocate(n) — create a buffer of n bytes",
      "buffer.flip() — switch from write mode to read mode",
      "channel.read(buf) — fill buffer from channel",
      "channel.write(buf) — write buffer to channel",
    ],
    example: `import java.nio.file.*;
import java.nio.charset.StandardCharsets;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Path dir = Path.of("demo");
        Path file = dir.resolve("note.txt");

        // Create directory
        Files.createDirectories(dir);

        // Write
        Files.writeString(file, "Line 1\\nLine 2\\nLine 3\\n");

        // Read all at once
        String all = Files.readString(file);
        System.out.println("readString:\\n" + all);

        // Read lines as a list
        System.out.println("readAllLines: " + Files.readAllLines(file));

        // Stream lines lazily (for large files)
        System.out.print("lines().filter: ");
        try (Stream<String> s = Files.lines(file)) {
            s.filter(l -> l.contains("2")).forEach(System.out::println);
        }

        // Walk directory tree
        System.out.println("Walk:");
        try (Stream<Path> w = Files.walk(dir)) {
            w.forEach(System.out::println);
        }

        // File attributes
        System.out.println("Size: " + Files.size(file) + " bytes");
        System.out.println("Exists? " + Files.exists(file));

        // Copy
        Path copy = dir.resolve("copy.txt");
        Files.copy(file, copy, StandardCopyOption.REPLACE_EXISTING);
        System.out.println("Copied to: " + copy.getFileName());

        // Cleanup
        Files.deleteIfExists(file);
        Files.deleteIfExists(copy);
        Files.deleteIfExists(dir);
    }
}`,
    output: `readString:
Line 1
Line 2
Line 3

readAllLines: [Line 1, Line 2, Line 3]
lines().filter: Line 2
Walk:
demo
demo/note.txt
Size: 21 bytes
Exists? true
Copied to: copy.txt`,
    commonMistakes: [
      "Forgetting to close Files.lines() / Files.walk() streams — they hold file handles. Use try-with-resources.",
      "Confusing Path with File — they're different types. Convert with file.toPath() or path.toFile().",
      "Reading huge files entirely with readAllBytes — out of memory. Stream with Files.lines() instead.",
      "Forgetting buffer.flip() after channel.read() — the buffer is in write mode and get() returns nothing useful.",
    ],
    cpp: `// C++ has no NIO equivalent. File I/O is via std::fstream (already buffered).
// For non-blocking I/O, use platform-specific APIs (epoll on Linux, IOCP on Windows)
// or libraries like Boost.Asio.`,
    related: ["file-handling","buffered-io","input-output","streams-api"],
  },

  /* UTILITIES */
  "console-class": {
    title: "Console Class",
    category: "Utilities",
    beginnerExplanation: `The Console class (java.io.Console, Java 6+) is a specialized tool for interacting with the terminal — especially for reading passwords securely. Think of it as a smarter version of Scanner that's built specifically for command-line apps. Its superpower: it can read passwords without echoing them to the screen, so someone looking over your shoulder can't see what you typed.

System.console() returns the Console object if your program is running in a real terminal. If it's running in an IDE (like IntelliJ or Eclipse) or with redirected input, System.console() returns null — IDEs don't provide a real console. This is a common gotcha: your code works in the terminal but crashes in the IDE.

The main methods are readLine() (reads a line of text, like Scanner.nextLine()), readPassword() (reads a password without echoing — returns a char[], NOT a String), and printf() (formatted output, like System.out.printf). The reason readPassword returns a char[] instead of a String: Strings are immutable and live in memory until garbage collected, so a password String could be snooped. A char[] can be explicitly zeroed out (Arrays.fill(password, '\\0')) immediately after use, erasing it from memory.

Use Console when you're writing a command-line tool that needs secure password input. For general input, Scanner is more convenient and works in IDEs.`,
    description: "java.io.Console (Java 6+) provides terminal-specific I/O, especially for reading passwords securely. System.console() returns the Console instance (or null if there's no real terminal, e.g., in IDEs). readPassword() returns a char[] (not String) so you can zero it out after use. Console also provides printf() and flush(). Use it for CLI tools needing secure input.",
    syntax: `import java.io.Console;

Console console = System.console();
if (console == null) {
    System.err.println("No console available (running in IDE?)");
    return;
}

// Read a line
String name = console.readLine("Enter your name: ");

// Read a password (no echo)
char[] password = console.readPassword("Enter password: ");

// Format output
console.printf("Hello, %s!%n", name);

// Always zero out the password when done
java.util.Arrays.fill(password, '\\0');`,
    parameters: [
      ["System.console()", "Returns the Console, or null if no real terminal (e.g., IDE)"],
      ["readLine()", "Read a line of text (echoes to screen)"],
      ["readLine(format, args)", "Read with a formatted prompt"],
      ["readPassword()", "Read a password WITHOUT echoing — returns char[]"],
      ["readPassword(format, args)", "Read password with a formatted prompt"],
      ["printf(format, args)", "Print formatted text to the console"],
    ],
    returnValue: "readLine returns String. readPassword returns char[] (NOT String — for security). printf returns the Console (for chaining). System.console() returns Console or null.",
    methods: [
      "System.console() — get the Console (null if no terminal)",
      "readLine() — read a line, echoes to screen",
      "readLine(format, args) — read with a formatted prompt",
      "readPassword() — read without echo, returns char[]",
      "readPassword(format, args) — read password with prompt",
      "printf(format, args) — print formatted text",
      "flush() — flush any buffered output",
      "reader() — get a Reader for the console",
      "writer() — get a PrintWriter for the console",
    ],
    example: `import java.io.Console;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Console console = System.console();
        if (console == null) {
            System.out.println("No console (running in IDE?). Use Scanner instead.");
            return;
        }

        // Read username
        String username = console.readLine("Username: ");

        // Read password securely (no echo)
        char[] password = console.readPassword("Password: ");

        // Verify (in real code, hash and compare, never store plain)
        if (username.equals("admin") && new String(password).equals("1234")) {
            console.printf("Welcome, %s!%n", username);
        } else {
            console.printf("Invalid credentials.%n");
        }

        // CRITICAL: zero out the password from memory
        Arrays.fill(password, '\\0');

        console.printf("Password erased from memory.%n");
    }
}`,
    output: `# Run from a real terminal (NOT an IDE):
Username: admin
Password:           ← you type here but nothing shows
Welcome, admin!
Password erased from memory.

# In an IDE, System.console() returns null:
No console (running in IDE?). Use Scanner instead.`,
    commonMistakes: [
      "Calling System.console() in an IDE — returns null, and calling methods on null crashes. Always null-check.",
      "Storing passwords in Strings — Strings can't be securely erased. Use char[] and zero it out after use.",
      "Forgetting to zero out the password char[] — it sits in memory until garbage collection.",
    ],
    cpp: `// C++ equivalent for password input:
#include <iostream>
#include <termios.h>
// Disable echo on Unix: tcgetattr/tcsetattr with ECHO flag
// Or use getpass() from <unistd.h> (POSIX)
// Cross-platform: libraries like libreadline or rlutil`,
    related: ["input-output","scanner","printf","exception-handling"],
  },

  /* MODERN JAVA */
  "var-keyword": {
    title: "var (Local Variable Type Inference)",
    category: "Modern Java",
    beginnerExplanation: `The 'var' keyword (Java 10+) lets you skip writing the type when declaring a local variable — Java figures it out from the value you assign. It's like ordering 'the usual' at a restaurant where the waiter knows what you mean — shorter, but the result is the same.

Before var: 'HashMap<String, List<Integer>> map = new HashMap<>();' — you write the long type twice. With var: 'var map = new HashMap<String, List<Integer>>();' — you write the type once (on the right), and var on the left means 'figure it out.' Java still knows map is a HashMap at compile time; it just saves you typing.

Important: var is NOT dynamic typing. Java is still 100% statically typed — the variable's type is fixed at declaration, you just didn't have to write it. Once 'var x = 5;', x is an int forever; you can't later do 'x = "hello"'. The type is inferred, not absent.

var only works for LOCAL variables inside methods — not fields, not parameters, not return types. Use it when the type is obvious from the right side ('var name = "Ana"', 'var list = new ArrayList<>()'). Don't use it when the type isn't clear ('var result = process(data)' — what type is result?). Readability is the goal; if var makes code less clear, write the explicit type.`,
    description: "var (Java 10+) allows local variable type inference — the compiler determines the type from the initializer. var is NOT dynamic typing; the variable is still statically typed. It only works for local variables (not fields, parameters, or return types). Use it when the type is obvious from the right-hand side; use explicit types when the type isn't clear.",
    syntax: `// Before var (Java 9 and earlier)
HashMap<String, List<Integer>> map = new HashMap<>();
ArrayList<String> names = new ArrayList<>();
String name = "Ana";
int age = 19;

// With var (Java 10+)
var map = new HashMap<String, List<Integer>>();
var names = new ArrayList<String>();
var name = "Ana";     // inferred as String
var age = 19;         // inferred as int
var list = List.of(1, 2, 3);  // inferred as List<Integer>

// Works in for loops and try-with-resources too
for (var item : list) { ... }
try (var reader = Files.newBufferedReader(path)) { ... }

// Does NOT work for fields, parameters, or return types
// private var x = 5;            // ERROR
// public var compute() { ... }  // ERROR
// void method(var arg) { ... }  // ERROR`,
    parameters: [
      ["var", "Keyword for local variable type inference — type is determined by the initializer"],
      ["initializer required", "var x; is illegal — you must assign a value: var x = 5;"],
      ["local only", "Works in methods, constructors, initializer blocks — NOT fields, params, returns"],
      ["compile-time", "The type is fixed at compile time, not runtime — Java is still statically typed"],
    ],
    returnValue: "var doesn't change return types. The variable has the inferred type for its entire lifetime.",
    methods: [
      "var name = value; — declare a local variable with inferred type",
      "var x = 5; — inferred as int",
      "var s = \"hi\"; — inferred as String",
      "var list = new ArrayList<String>(); — inferred as ArrayList<String>",
      "var pair = Map.entry(1, \"a\"); — inferred as Map.Entry<Integer,String>",
      "for (var item : collection) — var in enhanced for loop",
      "try (var r = ...) — var in try-with-resources",
    ],
    example: `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        // var with obvious types
        var name = "Ana";
        var age = 19;
        var scores = List.of(95, 88, 76, 91);

        System.out.println(name + " is " + age);
        System.out.println("Scores: " + scores);

        // var saves typing with complex generics
        var map = new HashMap<String, List<Integer>>();
        map.put("math", List.of(90, 85, 92));
        map.put("science", List.of(88, 91));
        System.out.println("Map: " + map);

        // var in streams
        var filtered = scores.stream()
            .filter(s -> s >= 85)
            .sorted()
            .toList();
        System.out.println("Filtered: " + filtered);

        // var in for-each
        for (var score : scores) {
            System.out.print(score + " ");
        }
        System.out.println();

        // var in try-with-resources
        try (var reader = new java.io.StringReader("hello")) {
            var ch = reader.read();
            System.out.println("First char: " + (char) ch);
        } catch (java.io.IOException e) {
            e.printStackTrace();
        }
    }
}`,
    output: `Ana is 19
Scores: [95, 88, 76, 91]
Map: {math=[90, 85, 92], science=[88, 91]}
Filtered: [88, 91, 95]
95 88 76 91 
First char: h`,
    commonMistakes: [
      "Using var when the type isn't obvious — 'var result = process(data)' leaves the reader guessing. Use explicit types when readability suffers.",
      "Thinking var changes type at runtime — it doesn't. 'var x = 5; x = \"hi\";' is a compile error (x is int).",
      "Using var for fields, parameters, or return types — only local variables are allowed.",
      "Using var with null initializers — 'var x = null;' is illegal because the type can't be inferred.",
    ],
    cpp: `// C++ uses 'auto' (C++11+) — same concept, local type inference:
auto x = 5;              // int
auto s = std::string("hi"); // std::string
auto v = std::vector<int>{1,2,3};
// C++ auto also works in return types and lambdas (more powerful than Java's var).`,
    related: ["variables","data-types","lambda-expressions","records","java-basics"],
  },

  /* MODERN JAVA */
  "switch-expressions": {
    title: "Switch Expressions (Java 14+)",
    category: "Modern Java",
    beginnerExplanation: `Switch expressions (Java 14+) are a modernized, cleaner version of the classic switch statement. The old switch had two problems: you had to write 'break' in every case (forget it and execution falls through to the next case — a classic bug source), and it was a statement (it does something) rather than an expression (it produces a value). The new switch fixes both.

The new arrow syntax 'case X -> result' doesn't fall through — each case is independent, no break needed. And the whole switch can be used as an expression that returns a value: 'String day = switch (n) { case 1 -> "Monday"; case 2 -> "Tuesday"; ... };'. You can assign the result to a variable, return it, or pass it to a method.

You can also combine multiple values with commas: 'case 1, 2, 3 -> "Q1"'. And if a case needs multiple statements, use a block with 'yield': 'case 0 -> { log("zero"); yield "nothing"; }'. The switch must be exhaustive — for enums, you need a default or all cases; for ints/Strings, a default is required.

This is one of the most popular modern Java features — it makes code shorter, safer (no fall-through bugs), and more expressive. If you're on Java 14+, prefer the arrow form over the classic colon form.`,
    description: "Switch expressions (standardized in Java 14) modernize the switch statement. The arrow form 'case X -> value' doesn't fall through (no break needed) and the switch can be used as an expression that returns a value. Multiple case labels can be combined with commas. Multi-line cases use 'yield' to return a value. The switch must be exhaustive.",
    syntax: `// Switch expression — returns a value, no fall-through
String day = switch (n) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    case 4, 5 -> "Midweek";
    case 6, 7 -> "Weekend";
    default -> "Unknown";
};

// With multi-line blocks — use 'yield'
String label = switch (score) {
    case 0 -> {
        System.out.println("zero");
        yield "nothing";
    }
    case int n when n > 90 -> "excellent";  // guarded (Java 21+)
    default -> "other";
};

// Statement form (still works, but arrow is preferred)
switch (n) {
    case 1 -> System.out.println("one");
    case 2 -> System.out.println("two");
    default -> System.out.println("many");
}`,
    parameters: [
      ["->", "Arrow label — no fall-through, returns the value or runs the block"],
      ["yield", "Returns a value from a multi-line case block"],
      ["case X, Y, Z", "Multiple values share the same case"],
      ["default", "Required for non-enum switches (or when not all enum cases covered)"],
      ["exhaustiveness", "Switch expressions must cover all possible values (or have default)"],
    ],
    returnValue: "A switch expression evaluates to a value of the type common to all branches. The arrow form returns the expression after ->. Block cases return the yield value.",
    methods: [
      "case X -> value — arrow label, no fall-through",
      "case X, Y -> value — multiple values, same case",
      "case X -> { ...; yield value; } — multi-line block",
      "default -> value — catch-all",
      "case X when condition -> value — guarded pattern (Java 21+)",
    ],
    example: `public class Main {
    enum Day { MON, TUE, WED, THU, FRI, SAT, SUN }

    public static void main(String[] args) {
        // Switch expression returning a String
        Day day = Day.WED;
        String type = switch (day) {
            case MON, TUE, WED, THU, FRI -> "Weekday";
            case SAT, SUN -> "Weekend";
        };
        System.out.println(day + " is a " + type);

        // Switch expression with calculation
        int n = 3;
        int squares = switch (n) {
            case 1 -> 1;
            case 2 -> 4;
            case 3 -> 9;
            default -> n * n;
        };
        System.out.println(n + "² = " + squares);

        // Multi-line block with yield
        int score = 85;
        String grade = switch (score / 10) {
            case 10, 9 -> "A";
            case 8 -> "B";
            case 7 -> "C";
            case 6 -> "D";
            default -> {
                System.out.println("Failing grade: " + score);
                yield "F";
            }
        };
        System.out.println("Grade: " + grade);

        // Assign to variable, return, or use inline
        System.out.println("Type length: " + (switch (type.length()) {
            case 0, 1, 2 -> "short";
            default -> "long";
        }));
    }
}`,
    output: `WED is a Weekday
3² = 9
Grade: B
Type length: short`,
    commonMistakes: [
      "Forgetting 'yield' in a multi-line block — the value is lost and compilation fails.",
      "Not covering all enum cases — compile error for non-exhaustive switch. Add default or all cases.",
      "Mixing arrow (->) and colon (:) syntax in the same switch — not allowed. Pick one.",
    ],
    cpp: `// C++ doesn't have switch expressions yet (proposed for C++23/C++26).
// Use the classic switch statement with case/break:
switch (n) {
    case 1: result = "one"; break;
    case 2: result = "two"; break;
    default: result = "many";
}`,
    related: ["conditionals","enums","pattern-matching","java-basics"],
  },

  /* MODERN JAVA */
  "text-blocks": {
    title: "Text Blocks (Java 15+)",
    category: "Modern Java",
    beginnerExplanation: `Text blocks (Java 15+) let you write multi-line strings without the mess of concatenation and escape characters. Before text blocks, embedding a JSON string or SQL query in Java was painful — every line ended with \\n, every quote was \\", and you used + to join lines. Text blocks fix this with triple quotes """, like Python's triple-quoted strings.

A text block starts with """ followed by a newline, then your text, then closing """. Everything in between is preserved as-is: newlines, quotes (no escaping needed), and indentation is intelligently managed. Java removes the common leading whitespace (the incidental indentation from your code's nesting), so the string content is clean. If you need to keep specific indentation, use trailing spaces or the .stripIndent() / .formatted() methods.

Text blocks are great for: JSON, XML, SQL, HTML templates, shell scripts embedded in Java, multi-line error messages, configuration text. You can still use escape sequences (\\n, \\t) inside them, and Java 15+ added \\s for a non-trailing space and \\\\[newline] for line continuation (join two lines into one).

A text block is just a String — there's no special type. You can pass it anywhere a String is accepted, use .formatted() for interpolation (Java 15+), or .replace() for templating.`,
    description: "Text blocks (Java 15+) provide multi-line string literals using triple quotes (\"\"\"). They preserve newlines and quotes without escaping, and intelligently strip incidental leading whitespace. Useful for JSON, SQL, HTML, and any multi-line text. Escape sequences still work; \\s preserves a trailing space and \\\\[newline] joins lines.",
    syntax: `// Old way — painful
String json = "{\\n" +
              "  \\"name\\": \\"Ana\\",\\n" +
              "  \\"age\\": 19\\n" +
              "}";

// Text block — clean
String json = """
        {
          "name": "Ana",
          "age": 19
        }
        """;`,
    parameters: [
      ["\"\"\"", "Opening delimiter — must be followed by a line break"],
      ["\"\"\";", "Closing delimiter — can be on its own line or at end of content"],
      ["incidental whitespace", "Common leading indentation is automatically stripped"],
      ["\\s", "Preserve a trailing space that would otherwise be stripped"],
      ["\\\\[newline]", "Line continuation — join two source lines into one string line"],
    ],
    returnValue: "A text block produces a regular String — there's no special type. It can be used anywhere a String is accepted.",
    methods: [
      "\"\"\" ... \"\"\" — text block literal",
      ".stripIndent() — explicitly strip incidental whitespace",
      ".translateEscapes() — interpret escape sequences in a string",
      ".formatted(args) — String.format on a text block (Java 15+)",
    ],
    example: `public class Main {
    public static void main(String[] args) {
        // JSON — no escaping needed
        String json = """
                {
                  "name": "Ana",
                  "age": 19,
                  "active": true
                }
                """;
        System.out.println("JSON:");
        System.out.println(json);

        // SQL — readable
        String sql = """
                SELECT u.name, COUNT(o.id) AS order_count
                FROM users u
                LEFT JOIN orders o ON u.id = o.user_id
                WHERE u.active = true
                GROUP BY u.name
                HAVING COUNT(o.id) > 5
                ORDER BY order_count DESC
                """;
        System.out.println("SQL (first line): " + sql.lines().findFirst().get());

        // HTML
        String html = """
                <html>
                  <body>
                    <h1>Hello, %s!</h1>
                  </body>
                </html>
                """.formatted("Ana");
        System.out.println("HTML:");
        System.out.println(html);

        // Line continuation with \\
        String joined = """
                This is one line \\
                even though it spans \\
                three source lines.
                """;
        System.out.println("Joined: " + joined);

        // Preserve trailing space with \\s
        String withSpaces = """
                name   s
                age    s
                """;
        System.out.println("With spaces: [" + withSpaces + "]");
    }
}`,
    output: `JSON:
{
  "name": "Ana",
  "age": 19,
  "active": true
}
SQL (first line): SELECT u.name, COUNT(o.id) AS order_count
HTML:
<html>
  <body>
    <h1>Hello, Ana!</h1>
  </body>
</html>

Joined: This is one line even though it spans three source lines.

With spaces: [name   
age   
]`,
    commonMistakes: [
      "Putting text on the same line as the opening \"\"\" — the opening must be followed by a newline.",
      "Forgetting that incidental whitespace is stripped — if you need specific indentation, use .stripIndent() carefully or \\s.",
      "Expecting the closing \"\"\" position to not matter — it does. Placing it further left preserves more indentation in the content.",
    ],
    cpp: `// C++ has raw string literals (C++11):
// R"(
//   {
//     "name": "Ana"
//   }
// )";
// Similar concept, different syntax. No automatic indentation stripping.`,
    related: ["strings","printf","java-basics","lambda-expressions"],
  },

  /* MODERN JAVA */
  "pattern-matching": {
    title: "Pattern Matching (instanceof & switch)",
    category: "Modern Java",
    beginnerExplanation: `Pattern matching is a modern feature that makes type checking and casting cleaner. Before pattern matching, you had to write three steps: check the type with instanceof, cast to that type, and assign to a variable. Pattern matching does all three in one step — like a smart shortcut that says 'if this is a String, give it to me as a String.'

For instanceof (Java 16+): instead of 'if (obj instanceof String) { String s = (String) obj; ... }', you write 'if (obj instanceof String s) { ... use s directly ... }'. The variable s is automatically cast and scoped to the if block. Cleaner, less boilerplate.

For switch (Java 21+): you can switch on types, not just values. 'switch (obj) { case String s -> ...; case Integer i -> ...; case null -> ...; default -> ... }'. This is incredibly powerful for processing mixed-type values (like parsing JSON or handling events). You can also add 'when' guards: 'case String s when s.length() > 10 -> ...'.

The 'null' case is new — you can now handle null directly in switch instead of always needing an outer null check. And switch patterns must be exhaustive (cover all types or have a default).

Pattern matching makes code that processes mixed types much cleaner — no more cascading if-else chains with casts. It's especially useful for sealed class hierarchies and records, where the compiler can verify exhaustiveness.`,
    description: "Pattern matching (instanceof since Java 16, switch since Java 21) simplifies type checking and casting. 'instanceof Type var' binds the cast value to var in one step. Switch patterns match on types, not just values, with 'when' guards for conditions. The null case is supported. Switch patterns must be exhaustive (especially powerful with sealed classes and records).",
    syntax: `// instanceof pattern (Java 16+)
if (obj instanceof String s) {
    System.out.println(s.length());  // s is already cast
}

// Combined with && — s is in scope
if (obj instanceof String s && s.length() > 5) {
    System.out.println("Long string: " + s);
}

// Switch pattern matching (Java 21+)
String describe = switch (obj) {
    case null              -> "null";
    case String s          -> "String of length " + s.length();
    case Integer i when i < 0 -> "negative integer";
    case Integer i         -> "integer: " + i;
    case int[] arr         -> "array of length " + arr.length;
    default                -> "something else";
};`,
    parameters: [
      ["Type var", "Pattern: if obj is a Type, bind it to var (cast automatically)"],
      ["case Type var", "Switch pattern: match on type, bind to var"],
      ["case Type var when condition", "Guarded pattern: match type AND condition"],
      ["case null", "Match null directly (new in switch patterns)"],
      ["exhaustiveness", "Switch patterns must cover all cases or have a default"],
    ],
    returnValue: "instanceof returns boolean; the pattern variable is in scope where the pattern matches. Switch pattern matching returns a value like any switch expression.",
    methods: [
      "obj instanceof Type var — check and bind in one step (Java 16+)",
      "case Type var -> — switch on type (Java 21+)",
      "case Type var when cond -> — guarded pattern",
      "case null -> — match null (Java 21+)",
      "case Type(var1, var2) -> — deconstruct a record (Java 21+)",
    ],
    example: `public class Main {
    sealed interface Shape permits Circle, Rectangle, Triangle {}
    record Circle(double r) implements Shape {}
    record Rectangle(double w, double h) implements Shape {}
    record Triangle(double a, double b, double c) implements Shape {}

    static double area(Shape s) {
        // Switch pattern matching with record deconstruction
        return switch (s) {
            case Circle(double r) -> Math.PI * r * r;
            case Rectangle(double w, double h) -> w * h;
            case Triangle(double a, double b, double c) -> {
                double p = (a + b + c) / 2;
                yield Math.sqrt(p * (p-a) * (p-b) * (p-c));
            }
        };
    }

    static String describe(Object obj) {
        // instanceof pattern
        if (obj == null) return "null";
        if (obj instanceof String s && s.length() > 10) return "long string";
        if (obj instanceof String s) return "string: " + s;
        if (obj instanceof Integer i) return "integer: " + i;

        // Switch pattern with types and guards
        return switch (obj) {
            case Double d when d.isNaN() -> "NaN";
            case Double d -> "double: " + d;
            case int[] arr -> "int array of length " + arr.length;
            case Shape s -> "shape with area " + area(s);
            default -> "unknown: " + obj.getClass().getSimpleName();
        };
    }

    public static void main(String[] args) {
        System.out.println(describe("hello"));
        System.out.println(describe("this is a very long string"));
        System.out.println(describe(42));
        System.out.println(describe(Double.NaN));
        System.out.println(describe(new int[]{1, 2, 3}));
        System.out.println(describe(new Circle(5)));
        System.out.println(describe(null));

        System.out.printf("Circle area: %.2f%n", area(new Circle(3)));
        System.out.printf("Rectangle area: %.2f%n", area(new Rectangle(4, 5)));
    }
}`,
    output: `string: hello
long string
integer: 42
NaN
int array of length 3
shape with area 78.54
null
Circle area: 28.27
Rectangle area: 20.00`,
    commonMistakes: [
      "Using pattern variables outside their scope — the variable from 'instanceof String s' is only in scope where the instanceof is definitely true (inside the if block, after && in the condition).",
      "Forgetting exhaustiveness — switch patterns must cover all possible types or have a default. The compiler enforces this for sealed hierarchies.",
      "Not handling null in switch patterns — without 'case null', a null input throws NullPointerException even if you have a default.",
    ],
    cpp: `// C++ uses std::holds_alternative and std::get for std::variant (C++17):
// if (std::holds_alternative<int>(v)) { auto i = std::get<int>(v); }
// C++ doesn't have pattern matching yet (proposed for C++23/C++26).`,
    related: ["conditionals","switch-expressions","records","sealed-classes","inheritance"],
  },

  /* MODERN JAVA */
  "sealed-classes": {
    title: "Sealed Classes (Java 17+)",
    category: "Modern Java",
    beginnerExplanation: `A sealed class is a class that explicitly lists which other classes are allowed to extend it. Think of it like an exclusive club — the class says 'only these specific subclasses can inherit from me, nobody else.' This gives you a middle ground between 'open' classes (anyone can extend, like normal Java classes) and 'final' classes (nobody can extend).

Why would you want this? Normally, when you write an interface or abstract class, anyone can implement it — you can't enumerate all the subclasses. This means a switch on the type can never be 'exhaustive' (there might be subclasses you don't know about). Sealed classes fix this: when you seal a hierarchy, the compiler KNOWS all possible subclasses, and can tell you if your switch is missing a case.

Use 'sealed' on the parent, and 'permits' to list the allowed children: 'public sealed interface Shape permits Circle, Rectangle, Triangle {}'. The children must be 'final' (no further subclassing), 'sealed' (they also restrict their children), or 'non-sealed' (open to anyone). This creates a closed hierarchy.

Sealed classes shine with records and pattern matching. A typical setup: 'sealed interface Shape permits Circle, Rectangle {}' + 'record Circle(double r) implements Shape {}' + 'record Rectangle(double w, double h) implements Shape {}'. Now 'switch (shape) { case Circle c -> ...; case Rectangle r -> ... }' is exhaustive — the compiler verifies you covered all cases. No default needed.`,
    description: "Sealed classes and interfaces (Java 17+) restrict which classes can extend or implement them. Declare with 'sealed' and list permitted subtypes with 'permits'. Permitted subtypes must be final, sealed, or non-sealed. This enables closed hierarchies where the compiler can verify exhaustiveness in switch pattern matching — no default case needed. Especially powerful when combined with records.",
    syntax: `// Sealed interface with three permitted implementations
public sealed interface Shape permits Circle, Rectangle, Triangle {}

// Records make perfect sealed hierarchy members
public record Circle(double radius) implements Shape {}
public record Rectangle(double width, double height) implements Shape {}
public record Triangle(double a, double b, double c) implements Shape {}

// Now a switch can be exhaustive — no default needed
double area = switch (shape) {
    case Circle c -> Math.PI * c.radius() * c.radius();
    case Rectangle r -> r.width() * r.height();
    case Triangle t -> {
        double s = (t.a() + t.b() + t.c()) / 2;
        yield Math.sqrt(s * (s-t.a()) * (s-t.b()) * (s-t.c()));
    }
    // no default — compiler knows all cases are covered
};`,
    parameters: [
      ["sealed", "Keyword marking a class/interface as restricted"],
      ["permits", "Lists the allowed subtypes — must be in the same module or file"],
      ["final", "A permitted subtype that can't be extended further"],
      ["sealed", "A permitted subtype that itself restricts its children"],
      ["non-sealed", "A permitted subtype that opens back up — anyone can extend it"],
    ],
    returnValue: "Sealed classes don't affect return values. They control the inheritance hierarchy, enabling the compiler to verify exhaustiveness in switch.",
    methods: [
      "sealed class/interface — restrict who can extend",
      "permits A, B, C — list the allowed subtypes",
      "final — permitted subtype, no further extension",
      "sealed — permitted subtype, also restricts its children",
      "non-sealed — permitted subtype, opens back up to anyone",
    ],
    example: `public class Main {
    // Sealed hierarchy
    sealed interface Shape permits Circle, Rectangle {}
    record Circle(double radius) implements Shape {}
    record Rectangle(double width, double height) implements Shape {}

    // Exhaustive switch — no default needed!
    static double area(Shape s) {
        return switch (s) {
            case Circle c -> Math.PI * c.radius() * c.radius();
            case Rectangle r -> r.width() * r.height();
        };
    }

    static String describe(Shape s) {
        return switch (s) {
            case Circle c -> String.format("Circle(r=%.1f)", c.radius());
            case Rectangle r -> String.format("Rect(%.1f x %.1f)", r.width(), r.height());
        };
    }

    public static void main(String[] args) {
        Shape[] shapes = { new Circle(3), new Rectangle(4, 5), new Circle(1) };
        for (Shape s : shapes) {
            System.out.printf("%s → area = %.2f%n", describe(s), area(s));
        }

        // If you add a new Shape subtype, the switch above won't compile
        // until you handle it — that's the safety of sealed hierarchies.
    }
}`,
    output: `Circle(r=3.0) → area = 28.27
Rect(4.0 x 5.0) → area = 20.00
Circle(r=1.0) → area = 3.14`,
    commonMistakes: [
      "Forgetting that permitted subtypes must be final, sealed, or non-sealed — the compiler requires an explicit choice.",
      "Adding a new subtype to the permits list but forgetting to update switches — the compiler catches this (which is the whole point).",
      "Using non-sealed too liberally — it reopens the hierarchy, defeating the purpose of sealing. Use only when you genuinely want to open that branch.",
    ],
    cpp: `// C++ doesn't have sealed classes built-in (Java 17 concept).
// C++11 has 'final' for classes and methods:
// class Foo final {};  // can't be subclassed
// But no 'permits' — you can't enumerate allowed subclasses.`,
    related: ["records","pattern-matching","switch-expressions","abstract-classes","interfaces"],
  },

  /* MODERN JAVA */
  "virtual-threads": {
    title: "Virtual Threads (Java 21+)",
    category: "Modern Java",
    beginnerExplanation: `Virtual threads (Java 21+) are a game-changer for concurrent programming. Regular 'platform threads' (the kind Java has always had) are expensive — each one takes about 1MB of memory and is tied to an OS thread. You can maybe have a few thousand of them before running out of memory. Virtual threads are ultra-lightweight — they take a few hundred bytes each, so you can have MILLIONS of them.

The magic: virtual threads are managed by the JVM, not the OS. When a virtual thread blocks (waits for I/O, sleeps, waits on a lock), the JVM parks it and runs another virtual thread on the same OS thread. It's like a restaurant with one chef (OS thread) but millions of orders (virtual threads) — the chef switches between orders whenever one is waiting for the oven.

Why does this matter? Server applications that handle thousands of concurrent connections used to need complex async/reactive code (CompletableFuture, reactive frameworks) to avoid running out of threads. With virtual threads, you can write simple, blocking, straightforward code — 'Thread.sleep(1000)' or 'httpClient.send(...)' — and the JVM handles the concurrency efficiently. One virtual thread per request, millions of requests, simple code.

Create virtual threads with 'Thread.startVirtualThread(() -> { ... })' or use 'Executors.newVirtualThreadPerTaskExecutor()'. You use the same Thread API you already know — virtual threads just make blocking cheap. They're NOT for CPU-intensive work (that still needs platform threads); they're for I/O-bound work (network, files, database).`,
    description: "Virtual threads (Java 21+) are lightweight threads managed by the JVM, not the OS. They take ~200 bytes each (vs ~1MB for platform threads), so you can have millions. When a virtual thread blocks, the JVM parks it and runs another on the same carrier thread. Ideal for I/O-bound concurrent work — write simple blocking code at massive scale. Not for CPU-intensive work (use platform threads).",
    syntax: `import java.util.concurrent.*;

// Start a single virtual thread
Thread vt = Thread.startVirtualThread(() -> {
    System.out.println("Running in: " + Thread.currentThread());
});

// Use an executor that creates a virtual thread per task
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 10_000; i++) {
        executor.submit(() -> {
            Thread.sleep(Duration.ofSeconds(1));
            return fetchFromNetwork();
        });
    }
}  // waits for all tasks to complete

// Check if current thread is virtual
boolean isVirtual = Thread.currentThread().isVirtual();`,
    parameters: [
      ["Thread.startVirtualThread(Runnable)", "Create and start a virtual thread"],
      ["Executors.newVirtualThreadPerTaskExecutor()", "Executor that spawns a virtual thread per submitted task"],
      ["isVirtual()", "Check if a thread is a virtual thread"],
      ["carrier thread", "The platform thread that runs virtual threads — managed by the JVM"],
    ],
    returnValue: "Virtual threads use the same Thread API. startVirtualThread returns a Thread. The executor returns Future<T> from submit(). No new return types — it's the concurrency model that changes.",
    methods: [
      "Thread.startVirtualThread(Runnable) — create and start a virtual thread",
      "Thread.ofVirtual().start(Runnable) — alternative creation method",
      "Thread.ofVirtual().name(\"worker-\").start(Runnable) — named virtual thread",
      "Executors.newVirtualThreadPerTaskExecutor() — one virtual thread per task",
      "Thread.currentThread().isVirtual() — check if running on a virtual thread",
      "Thread.join() — wait for a virtual thread to finish (same as platform)",
      "Thread.sleep(Duration) — virtual threads park cheaply during sleep",
    ],
    example: `import java.util.concurrent.*;
import java.time.Duration;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) throws Exception {
        long start = System.currentTimeMillis();

        // Launch 10,000 virtual threads — each sleeps 1 second
        // With platform threads, this would need ~10GB of memory.
        // With virtual threads, it's trivial.
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            var futures = new java.util.ArrayList<Future<String>>();
            for (int i = 0; i < 10_000; i++) {
                final int id = i;
                futures.add(executor.submit(() -> {
                    Thread.sleep(Duration.ofSeconds(1));  // blocks cheaply
                    return "Task " + id + " done on " + Thread.currentThread();
                }));
            }

            // Wait for a few and print
            for (int i = 0; i < 3; i++) {
                System.out.println(futures.get(i).get());
            }
        }

        long elapsed = System.currentTimeMillis() - start;
        System.out.println("All 10,000 tasks completed in " + elapsed + " ms");
        System.out.println("(Should be ~1 second, not ~10,000 seconds)");

        // Check current thread
        System.out.println("Main thread is virtual? " + Thread.currentThread().isVirtual());
    }
}`,
    output: `Task 0 done on VirtualThread[#33]/runnable@ForkJoinPool-1-worker-1
Task 1 done on VirtualThread[#34]/runnable@ForkJoinPool-1-worker-2
Task 2 done on VirtualThread[#35]/runnable@ForkJoinPool-1-worker-3
All 10,000 tasks completed in 1087 ms
(Should be ~1 second, not ~10,000 seconds)
Main thread is virtual? false`,
    commonMistakes: [
      "Using virtual threads for CPU-intensive work — they don't speed up computation; use platform threads (ForkJoinPool) for CPU work.",
      "Calling Thread.sleep or I/O in a synchronized block inside a virtual thread — it 'pins' the carrier thread, losing the benefit. Use ReentrantLock instead of synchronized for long waits.",
      "Pooling virtual threads — they're cheap to create and destroy; don't reuse them. One virtual thread per task.",
    ],
    cpp: `// C++ has no virtual threads equivalent. C++ threads are OS threads.
// For massive concurrency in C++, use async I/O libraries (Boost.Asio)
// or coroutines (C++20) which provide similar benefits with different syntax.`,
    related: ["multithreading","executor-service","completable-future","concurrent-collections"],
  },

  /* CONCURRENCY */
  "synchronized": {
    title: "synchronized Keyword",
    category: "Concurrency",
    beginnerExplanation: `The 'synchronized' keyword is Java's simplest tool for thread safety. When multiple threads share data, they can step on each other — two threads might try to update the same counter at once and lose an update. synchronized prevents this by saying 'only one thread can run this code at a time.' It's like a bathroom door with a lock — the first person in locks the door, others wait outside until it's free.

There are two ways to use it. A 'synchronized method' locks the whole method — only one thread can run it at a time on the same object. A 'synchronized block' locks just a section — you specify which object to lock on: 'synchronized(lockObject) { ... }'. Blocks are better because they're finer-grained (less of your code is locked, so more concurrency).

The lock is on an OBJECT, not on the code. If you have two synchronized methods on the same object, they share the same lock — a thread running one blocks threads running the other. If you have synchronized methods on DIFFERENT objects, they don't block each other. Static synchronized methods lock on the Class object, so they're shared across all instances.

synchronized is simple but has downsides: it's not very flexible (you can't time out, interrupt, or try-lock), and over-synchronizing kills performance. For new code, consider java.util.concurrent.locks.ReentrantLock (more flexible) or atomic variables (for simple counters) instead. But synchronized is still perfectly fine for simple cases.`,
    description: "synchronized is Java's built-in mechanism for mutual exclusion. A synchronized method or block ensures only one thread can execute it at a time on a given object (the monitor). Instance methods lock on 'this'; static methods lock on the Class object; blocks lock on a specified object. Simple but inflexible — consider ReentrantLock or atomic variables for new code.",
    syntax: `// Synchronized method — locks on 'this'
public synchronized void increment() {
    count++;
}

// Synchronized static method — locks on the Class object
public static synchronized int getCount() {
    return count;
}

// Synchronized block — locks on a specific object
private final Object lock = new Object();
public void increment() {
    synchronized (lock) {
        count++;
    }
}

// Block with 'this' — same as synchronized method
synchronized (this) {
    count++;
}`,
    parameters: [
      ["monitor object", "The object whose lock is acquired — 'this' for instance methods, ClassName.class for static"],
      ["synchronized method", "Locks on 'this' (instance) or the Class (static) for the entire method body"],
      ["synchronized block", "Locks on a specified object for a section of code — finer-grained"],
    ],
    returnValue: "synchronized doesn't change return values. It only ensures mutual exclusion — one thread at a time can execute the protected code.",
    methods: [
      "synchronized void method() — lock on 'this' for the whole method",
      "static synchronized void method() — lock on the Class object",
      "synchronized (obj) { ... } — lock on a specific object for a block",
      "obj.wait() — release the lock and wait to be notified (must hold the lock)",
      "obj.notify() / notifyAll() — wake up waiting threads (must hold the lock)",
    ],
    example: `public class Main {
    private static int count = 0;
    private static final Object lock = new Object();

    // Thread-unsafe — would lose updates without synchronized
    public static synchronized void increment() {
        count++;
    }

    // Block form — same lock, finer control
    public static void incrementBlock() {
        synchronized (lock) {
            count++;
        }
    }

    public static void main(String[] args) throws Exception {
        Runnable task = () -> {
            for (int i = 0; i < 10_000; i++) increment();
        };

        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);
        t1.start(); t2.start();
        t1.join(); t2.join();

        System.out.println("Final count: " + count);  // 20000 — no lost updates

        // Without synchronized, count would be ~12000-18000 (lost updates)
    }
}`,
    output: `Final count: 20000`,
    commonMistakes: [
      "Synchronizing on a non-final field — if the field is reassigned, threads lock on different objects and the protection fails. Always lock on a final field.",
      "Synchronizing on String literals or boxed primitives — they might be interned/cached, so unrelated code could lock on the same object, causing deadlocks.",
      "Holding a lock during long I/O or computation — kills concurrency. Lock only around the critical section that accesses shared state.",
      "Calling wait()/notify() without holding the lock — throws IllegalMonitorStateException.",
    ],
    cpp: `// C++ uses std::mutex and std::lock_guard (RAII):
#include <mutex>
std::mutex m;
{
    std::lock_guard<std::mutex> lock(m);
    count++;
}  // automatically unlocks`,
    related: ["multithreading","volatile","locks","atomic-variables","concurrent-collections"],
  },

  /* CONCURRENCY */
  "volatile": {
    title: "volatile Keyword",
    category: "Concurrency",
    beginnerExplanation: `The 'volatile' keyword is a lighter alternative to synchronized for a specific problem: making sure all threads see the latest value of a variable. Here's the issue it solves: for performance, the JVM lets each thread cache variables in its own CPU cache. So thread A might write 'flag = true' to its cache, but thread B still sees 'flag = false' from its own cache — they disagree because the write hasn't propagated to main memory yet.

Marking a field 'volatile' tells the JVM: 'don't cache this — every read goes straight to main memory, and every write immediately flushes to main memory.' Now when thread A writes 'flag = true', thread B sees it immediately. No caching, no stale values.

But volatile is NOT a substitute for synchronized in most cases. It only guarantees VISIBILITY (all threads see the same value), not ATOMICITY (compound operations like 'count++' are still unsafe — read-modify-write is three steps, another thread can interrupt). Use volatile for simple flags ('volatile boolean running = true'), not for counters or compound updates.

Typical use: a 'volatile boolean running' flag that one thread sets to false to signal another thread to stop. The other thread checks 'while (running) { ... }' and reliably sees the update. For anything more complex (counters, multi-field invariants), use synchronized, AtomicXxx, or locks.

volatile also establishes a happens-before relationship: everything that happened before a volatile write is visible to threads that read the volatile variable after. This makes it useful for safe publication of immutable objects.`,
    description: "volatile guarantees visibility of a field across threads — reads always go to main memory, writes always flush immediately. It does NOT guarantee atomicity for compound operations (count++ is still unsafe). Use volatile for simple flags and single-reference publication. For compound operations, use synchronized or AtomicXxx classes. volatile establishes happens-before ordering.",
    syntax: `// A flag visible across threads
private volatile boolean running = true;

// A published reference
private volatile Config config;

// Thread 1: stop the loop
public void stop() { running = false; }

// Thread 2: check the flag — always sees the latest value
public void run() {
    while (running) {
        doWork();
    }
}`,
    parameters: [
      ["visibility", "All threads see the same value — no CPU caching"],
      ["happens-before", "Writes before a volatile write are visible after a volatile read"],
      ["NOT atomic", "count++ is still unsafe — use AtomicInteger for that"],
      ["NOT for long fields pre-Java 5", "long/double writes were not atomic; volatile fixed this since Java 5"],
    ],
    returnValue: "volatile doesn't change return values. It only affects memory visibility semantics.",
    methods: [
      "volatile Type field — mark a field for cross-thread visibility",
      "volatile boolean flag — common pattern for stop signals",
      "volatile Type reference — safe publication of an immutable object",
    ],
    example: `public class Main {
    // Without volatile, the worker thread might cache 'running' and never stop.
    private static volatile boolean running = true;

    public static void main(String[] args) throws Exception {
        Thread worker = new Thread(() -> {
            int count = 0;
            // The worker reads 'running' each iteration.
            // Without volatile, it might cache 'true' and loop forever.
            while (running) {
                count++;
            }
            System.out.println("Worker stopped after " + count + " iterations");
        });
        worker.start();

        Thread.sleep(100);  // let it run for 100ms
        running = false;     // worker sees this immediately (volatile)
        worker.join();
        System.out.println("Main thread done");
    }
}`,
    output: `Worker stopped after 48372910 iterations
Main thread done`,
    commonMistakes: [
      "Using volatile for counters (count++) — still a race condition. Use AtomicInteger instead.",
      "Expecting volatile to make multi-field updates atomic — it doesn't. If you update two volatile fields, another thread can see one update but not the other.",
      "Forgetting that volatile doesn't provide mutual exclusion — if you need 'check then act' (if (x > 0) x--), you still need synchronized or atomics.",
    ],
    cpp: `// C++11 equivalent: std::atomic<T>
#include <atomic>
std::atomic<bool> running{true};
// std::atomic provides both visibility AND atomicity (stronger than Java's volatile).`,
    related: ["multithreading","synchronized","atomic-variables","concurrent-collections"],
  },

  /* CONCURRENCY */
  "locks": {
    title: "Locks (ReentrantLock, ReadWriteLock)",
    category: "Concurrency",
    beginnerExplanation: `Locks (java.util.concurrent.locks) are a more flexible alternative to the synchronized keyword. synchronized is simple but limited — you can't time out, you can't interrupt a waiting thread, and you can't try to acquire without blocking. Lock objects give you all these options.

The most common lock is 'ReentrantLock'. 'Reentrant' means the thread holding the lock can acquire it again (it counts how many times you locked and requires the same number of unlocks). This is useful when method A calls method B, and both are synchronized — with a regular lock you'd deadlock yourself, but reentrant locks handle it. The pattern is: lock.lock() at the start, try { ... } finally { lock.unlock(); } — the finally ensures you always release the lock even if an exception is thrown.

ReentrantLock has extra features: 'tryLock()' returns immediately (true if acquired, false if not) — great for avoiding deadlocks. 'tryLock(timeout)' waits up to a duration. 'lockInterruptibly()' lets a waiting thread be interrupted. 'newCondition()' creates condition variables (like wait/notify but more flexible).

'ReadWriteLock' is for read-heavy data: multiple threads can read simultaneously, but only one can write. 'ReentrantReadWriteLock' is the implementation. If 100 threads are reading and one wants to write, the writer waits for all readers to finish, then gets exclusive access. This can dramatically improve performance for read-mostly caches.`,
    description: "java.util.concurrent.locks provides flexible locking beyond synchronized. ReentrantLock is the most common — reentrant (same thread can lock multiple times), with tryLock (non-blocking), tryLock with timeout, lockInterruptibly, and Conditions. ReadWriteLock (ReentrantReadWriteLock) allows multiple concurrent readers but exclusive writers — great for read-heavy data. Always use try/finally to ensure unlock.",
    syntax: `import java.util.concurrent.locks.*;

// ReentrantLock
ReentrantLock lock = new ReentrantLock();
lock.lock();
try {
    // critical section
} finally {
    lock.unlock();   // ALWAYS in finally
}

// tryLock — non-blocking attempt
if (lock.tryLock()) {
    try { ... } finally { lock.unlock(); }
} else {
    // lock not available, do something else
}

// tryLock with timeout
if (lock.tryLock(5, TimeUnit.SECONDS)) {
    try { ... } finally { lock.unlock(); }
}

// ReadWriteLock
ReadWriteLock rwLock = new ReentrantReadWriteLock();
rwLock.readLock().lock();   // multiple readers OK
try { /* read */ } finally { rwLock.readLock().unlock(); }

rwLock.writeLock().lock();  // exclusive — blocks readers
try { /* write */ } finally { rwLock.writeLock().unlock(); }`,
    parameters: [
      ["lock()", "Acquire the lock — blocks until available. Cannot be interrupted."],
      ["lockInterruptibly()", "Acquire, but can be interrupted while waiting."],
      ["tryLock()", "Non-blocking attempt — returns true if acquired, false if not."],
      ["tryLock(timeout, unit)", "Wait up to timeout to acquire."],
      ["unlock()", "Release the lock — MUST be in a finally block."],
      ["newCondition()", "Create a Condition for await/signal (like wait/notify)."],
    ],
    returnValue: "lock/lockInterruptibly return void. tryLock returns boolean. newCondition returns a Condition object.",
    methods: [
      "lock() — acquire, block until available",
      "lockInterruptibly() — acquire, but interruptible",
      "tryLock() — non-blocking attempt, returns boolean",
      "tryLock(timeout, unit) — wait up to timeout, returns boolean",
      "unlock() — release the lock (always in finally)",
      "newCondition() — create a Condition for await/signal",
      "isHeldByCurrentThread() — true if current thread holds the lock",
      "getHoldCount() — how many times the current thread has locked (reentrant)",
      "ReadWriteLock.readLock() — shared read lock",
      "ReadWriteLock.writeLock() — exclusive write lock",
    ],
    example: `import java.util.concurrent.locks.*;
import java.util.*;

public class Main {
    private final ReentrantLock lock = new ReentrantLock();
    private final Map<String, Integer> cache = new HashMap<>();
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();

    // ReentrantLock — counter
    private int count = 0;
    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
    public int getCount() {
        lock.lock();
        try { return count; } finally { lock.unlock(); }
    }

    // tryLock — avoid deadlock
    public boolean tryDoWork() {
        if (!lock.tryLock()) return false;
        try {
            // do work
            return true;
        } finally {
            lock.unlock();
        }
    }

    // ReadWriteLock — read-heavy cache
    public Integer get(String key) {
        rwLock.readLock().lock();
        try { return cache.get(key); }
        finally { rwLock.readLock().unlock(); }
    }
    public void put(String key, int value) {
        rwLock.writeLock().lock();
        try { cache.put(key, value); }
        finally { rwLock.writeLock().unlock(); }
    }

    public static void main(String[] args) throws Exception {
        var m = new Main();

        // Two threads incrementing 10000 times each
        Runnable task = () -> { for (int i = 0; i < 10000; i++) m.increment(); };
        Thread t1 = new Thread(task), t2 = new Thread(task);
        t1.start(); t2.start(); t1.join(); t2.join();
        System.out.println("Count: " + m.getCount());  // 20000

        // Cache with ReadWriteLock
        m.put("a", 1); m.put("b", 2);
        System.out.println("Get a: " + m.get("a"));
        System.out.println("Lock held by me? " + m.lock.isHeldByCurrentThread());
    }
}`,
    output: `Count: 20000
Get a: 1
Lock held by me? false`,
    commonMistakes: [
      "Forgetting to put unlock() in a finally block — if the code throws, the lock is never released and other threads wait forever (deadlock).",
      "Forgetting to unlock the same number of times you locked (reentrant) — the lock isn't released until all holds are undone.",
      "Using ReadWriteLock when writes are frequent — the overhead of tracking readers negates the benefit. Best for read-heavy (90%+ reads) data.",
      "Calling await/signal on a Condition without holding the lock — throws IllegalMonitorStateException.",
    ],
    cpp: `// C++ equivalents: std::mutex, std::recursive_mutex, std::shared_mutex (C++17)
#include <mutex>
std::mutex m;
std::lock_guard<std::mutex> lock(m);  // RAII — auto unlocks
std::shared_mutex rw;
std::shared_lock<std::shared_mutex> rlock(rw);  // read lock
std::unique_lock<std::shared_mutex> wlock(rw);  // write lock`,
    related: ["multithreading","synchronized","concurrent-collections","countdown-latch","atomic-variables"],
  },

  /* CONCURRENCY */
  "executor-service": {
    title: "ExecutorService",
    category: "Concurrency",
    beginnerExplanation: `ExecutorService is Java's modern way to manage threads. Instead of creating threads manually (which is error-prone and expensive), you submit tasks to an ExecutorService and it manages a pool of reusable threads for you. It's like a temp agency — you submit jobs, the agency assigns workers, and when a worker finishes one job they pick up the next.

Why is this better than 'new Thread().start()'? Three reasons. First, creating threads is expensive (~1MB each), so reusing them from a pool is much faster. Second, a pool limits how many threads run at once — without a limit, a burst of 10,000 tasks could create 10,000 threads and crash your app. Third, ExecutorService gives you powerful features: 'submit' returns a Future you can use to get the result, 'invokeAll' runs a batch of tasks, 'schedule' runs tasks after a delay.

The 'Executors' factory class creates common pool types: 'newFixedThreadPool(n)' — exactly n threads, tasks queue up if all are busy. 'newCachedThreadPool()' — creates threads as needed, reuses idle ones, removes threads idle for 60 seconds. 'newSingleThreadExecutor()' — one thread, tasks run in order. 'newVirtualThreadPerTaskExecutor()' (Java 21+) — one virtual thread per task, massive scale.

The critical rule: ALWAYS shut down the executor when done. 'shutdown()' stops accepting new tasks and lets running tasks finish. 'shutdownNow()' tries to cancel running tasks. If you forget, the JVM won't exit because the pool threads keep running.`,
    description: "ExecutorService (java.util.concurrent) manages a pool of threads for running tasks asynchronously. Instead of new Thread().start(), you submit Runnable or Callable tasks to the service. Common types: FixedThreadPool (fixed thread count), CachedThreadPool (elastic), SingleThreadExecutor (sequential), VirtualThreadPerTaskExecutor (Java 21+, massive scale). Always shutdown() when done. submit() returns a Future for retrieving results.",
    syntax: `import java.util.concurrent.*;

// Create an executor
ExecutorService pool = Executors.newFixedThreadPool(4);
ExecutorService cached = Executors.newCachedThreadPool();
ExecutorService single = Executors.newSingleThreadExecutor();
ExecutorService vt = Executors.newVirtualThreadPerTaskExecutor();  // Java 21+

// Submit a Runnable (no result)
pool.submit(() -> System.out.println("running"));

// Submit a Callable (returns a result)
Future<Integer> future = pool.submit(() -> {
    Thread.sleep(1000);
    return 42;
});
Integer result = future.get();  // blocks until done

// Submit a batch
List<Callable<String>> tasks = List.of(() -> "a", () -> "b");
List<Future<String>> futures = pool.invokeAll(tasks);

// Shutdown
pool.shutdown();           // finish running tasks, no new ones
pool.awaitTermination(60, TimeUnit.SECONDS);
// pool.shutdownNow();     // cancel running tasks`,
    parameters: [
      ["n threads", "Fixed pool size — number of concurrent threads"],
      ["Runnable", "A task with no return value — void run()"],
      ["Callable<V>", "A task that returns V — V call() can throw checked exceptions"],
      ["Future<V>", "A handle to a submitted task — get() blocks for the result"],
      ["timeout", "How long to wait in awaitTermination or future.get"],
    ],
    returnValue: "submit(Runnable) returns Future<?>. submit(Callable<V>) returns Future<V>. invokeAll returns List<Future<V>>. future.get() blocks and returns V (or throws ExecutionException wrapping the task's exception).",
    methods: [
      "submit(Runnable) — submit a task, returns Future<?>",
      "submit(Callable<V>) — submit a task, returns Future<V>",
      "invokeAll(Collection<Callable>) — run all, returns List<Future> when all complete",
      "invokeAny(Collection<Callable>) — run all, returns the first successful result",
      "shutdown() — stop accepting tasks, finish running ones",
      "shutdownNow() — cancel running tasks, return pending ones",
      "awaitTermination(timeout, unit) — block until all tasks done or timeout",
      "isShutdown() / isTerminated() — check executor state",
      "Executors.newFixedThreadPool(n) — pool of exactly n threads",
      "Executors.newCachedThreadPool() — elastic pool, reuses idle threads",
      "Executors.newSingleThreadExecutor() — one thread, sequential execution",
      "Executors.newVirtualThreadPerTaskExecutor() — Java 21+, one virtual thread per task",
      "Executors.newScheduledThreadPool(n) — for delayed/periodic tasks",
    ],
    example: `import java.util.concurrent.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        try (var pool = Executors.newFixedThreadPool(3)) {

            // Submit 5 tasks to a 3-thread pool
            List<Future<String>> futures = new ArrayList<>();
            for (int i = 0; i < 5; i++) {
                final int id = i;
                futures.add(pool.submit(() -> {
                    Thread.sleep(500);
                    return "Task " + id + " on " + Thread.currentThread().getName();
                }));
            }

            // Get results as they complete
            for (Future<String> f : futures) {
                System.out.println(f.get());  // blocks until this one is done
            }
        }  // try-with-resources calls shutdown() (Java 19+)

        // invokeAll — run a batch, wait for all
        try (var pool = Executors.newVirtualThreadPerTaskExecutor()) {
            List<Callable<Integer>> tasks = List.of(
                () -> { Thread.sleep(300); return 1; },
                () -> { Thread.sleep(200); return 2; },
                () -> { Thread.sleep(100); return 3; }
            );
            List<Future<Integer>> results = pool.invokeAll(tasks);
            int sum = 0;
            for (Future<Integer> f : results) sum += f.get();
            System.out.println("Sum: " + sum);
        }

        // invokeAny — first successful result wins
        try (var pool = Executors.newCachedThreadPool()) {
            String winner = pool.invokeAny(List.of(
                () -> { Thread.sleep(300); return "slow"; },
                () -> { Thread.sleep(100); return "fast"; },
                () -> { Thread.sleep(200); return "medium"; }
            ));
            System.out.println("First to finish: " + winner);
        }
    }
}`,
    output: `Task 0 on pool-1-thread-1
Task 1 on pool-1-thread-2
Task 2 on pool-1-thread-3
Task 3 on pool-1-thread-1
Task 4 on pool-1-thread-2
Sum: 6
First to finish: fast`,
    commonMistakes: [
      "Forgetting to shutdown() — the JVM won't exit because pool threads are non-daemon. Use try-with-resources (Java 19+) or finally.",
      "Calling future.get() without a timeout — blocks forever if the task hangs. Always pass a timeout: future.get(5, TimeUnit.SECONDS).",
      "Submitting too many tasks to an unbounded queue — OutOfMemoryError. Use a bounded queue (ThreadPoolExecutor) or a semaphore to limit in-flight tasks.",
    ],
    cpp: `// C++ doesn't have a built-in executor. Use std::async or a thread pool library:
#include <future>
auto f = std::async(std::launch::async, []{ return 42; });
int result = f.get();
// For pools: Boost.Asio thread_pool, or TBB, or write your own.`,
    related: ["multithreading","completable-future","virtual-threads","locks","atomic-variables"],
  },

  /* CONCURRENCY */
  "completable-future": {
    title: "CompletableFuture",
    category: "Concurrency",
    beginnerExplanation: `CompletableFuture (Java 8+) is Java's tool for async programming — starting a task, then chaining follow-up tasks that run when it finishes, without blocking the main thread. Think of it like ordering food at a restaurant: you place your order (start a task), get a buzzer (the CompletableFuture), and when it buzzes you pick up your food (get the result). You don't stand at the counter blocking — you sit down and do other things.

The power is in chaining. 'future.thenApply(x -> x * 2)' transforms the result when it's ready. 'future.thenAccept(x -> System.out.println(x))' uses the result. 'future.thenCompose(x -> startAnotherAsync(x))' chains another async task. 'future.exceptionally(e -> fallback)' handles errors. You can also combine multiple futures: 'future1.thenCombine(future2, (a, b) -> a + b)' waits for both and combines their results.

To start an async task: 'CompletableFuture.supplyAsync(() -> compute())' runs on the common ForkJoinPool and returns a CompletableFuture. You can pass a custom executor if you want. The whole chain is non-blocking — the main thread moves on immediately, and the follow-up tasks run on a pool thread when the upstream completes.

CompletableFuture is the modern alternative to Future for anything more than 'submit and get.' It's especially powerful for fan-out/fan-in patterns: start 10 API calls in parallel, wait for all to finish, combine the results. 'CompletableFuture.allOf(f1, f2, f3).join()' waits for all; 'anyOf(...)' waits for the first to finish.`,
    description: "CompletableFuture (Java 8+) enables async, non-blocking programming with a fluent chaining API. Start with supplyAsync/runAsync, chain with thenApply (transform), thenAccept (consume), thenCompose (chain async), exceptionally (handle errors). Combine multiple futures with thenCombine, allOf, anyOf. Runs on ForkJoinPool.commonPool() by default; pass a custom executor for control.",
    syntax: `import java.util.concurrent.*;

// Start an async task
CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> {
    return computeExpensive();
});

// Chain transformations
CompletableFuture<String> chained = future
    .thenApply(x -> x * 2)              // transform Integer -> Integer
    .thenApply(x -> "result: " + x)     // Integer -> String
    .thenApply(String::toUpperCase);    // String -> String

// Consume the result (no return)
chained.thenAccept(System.out::println);

// Chain another async task
future.thenCompose(x -> CompletableFuture.supplyAsync(() -> process(x)));

// Handle errors
future.exceptionally(e -> { e.printStackTrace(); return 0; });

// Combine two futures
f1.thenCombine(f2, (a, b) -> a + b);

// Wait for all / any
CompletableFuture.allOf(f1, f2, f3).join();
CompletableFuture.anyOf(f1, f2, f3).join();

// Block and get
Integer result = future.get();     // blocking
Integer result = future.join();    // blocking, throws unchecked`,
    parameters: [
      ["supplyAsync(Supplier)", "Start an async task that returns a value"],
      ["runAsync(Runnable)", "Start an async task with no return value"],
      ["thenApply(Function)", "Transform the result when ready (sync)"],
      ["thenAccept(Consumer)", "Use the result when ready (sync, no return)"],
      ["thenCompose(Function)", "Chain another async task (flatmap)"],
      ["exceptionally(Function)", "Handle errors, return a fallback value"],
      ["thenCombine(other, BiFunction)", "Combine results of two futures"],
      ["allOf(futures...)", "Complete when all complete"],
      ["anyOf(futures...)", "Complete when any one completes"],
    ],
    returnValue: "supplyAsync returns CompletableFuture<T>. thenApply returns CompletableFuture<R>. thenAccept returns CompletableFuture<Void>. join/get return the result value (blocking).",
    methods: [
      "supplyAsync(Supplier<U>) — start async, returns CompletableFuture<U>",
      "runAsync(Runnable) — start async, no result",
      "thenApply(Function<T,R>) — transform result",
      "thenAccept(Consumer<T>) — consume result",
      "thenRun(Runnable) — run after completion, no input",
      "thenCompose(Function<T,CompletableFuture<R>>) — chain async (flatmap)",
      "thenCombine(CompletableFuture<U>, BiFunction<T,U,R>) — combine two",
      "exceptionally(Function<Throwable,T>) — handle error, return fallback",
      "handle(BiFunction<T,Throwable,R>) — handle both result and error",
      "whenComplete(BiConsumer<T,Throwable>) — side effect, no transform",
      "allOf(CompletableFuture<?>...) — complete when all complete",
      "anyOf(CompletableFuture<?>...) — complete when first completes",
      "join() — block and get result (throws CompletionException)",
      "get() — block and get result (throws checked exceptions)",
      "get(timeout, unit) — block with timeout",
      "complete(value) — manually complete the future",
      "cancel(boolean) — cancel the future",
    ],
    example: `import java.util.concurrent.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // Chain of async operations
        CompletableFuture<String> pipeline = CompletableFuture
            .supplyAsync(() -> {
                sleep(200);
                return 21;
            })
            .thenApply(x -> x * 2)                    // 42
            .thenCompose(x -> CompletableFuture.supplyAsync(() -> {
                sleep(200);
                return "value-" + x;
            }))
            .exceptionally(e -> "error: " + e.getMessage());

        System.out.println("Pipeline started, doing other work...");
        System.out.println("Result: " + pipeline.join());

        // Parallel API calls — fan out, then combine
        long start = System.currentTimeMillis();
        CompletableFuture<String> user = CompletableFuture.supplyAsync(() -> {
            sleep(300); return "Ana";
        });
        CompletableFuture<Integer> age = CompletableFuture.supplyAsync(() -> {
            sleep(300); return 19;
        });
        CompletableFuture<String> combined = user.thenCombine(age, (u, a) ->
            u + " is " + a + " years old");

        System.out.println(combined.join());
        long elapsed = System.currentTimeMillis() - start;
        System.out.println("Took " + elapsed + "ms (parallel, not 600ms)");

        // allOf — wait for multiple
        List<CompletableFuture<Integer>> futures = List.of(
            CompletableFuture.supplyAsync(() -> { sleep(100); return 1; }),
            CompletableFuture.supplyAsync(() -> { sleep(100); return 2; }),
            CompletableFuture.supplyAsync(() -> { sleep(100); return 3; })
        );
        CompletableFuture<Void> all = CompletableFuture.allOf(
            futures.toArray(new CompletableFuture[0]));
        all.join();
        int sum = futures.stream().mapToInt(CompletableFuture::join).sum();
        System.out.println("Sum of parallel results: " + sum);
    }

    static void sleep(int ms) {
        try { Thread.sleep(ms); } catch (InterruptedException e) {}
    }
}`,
    output: `Pipeline started, doing other work...
Result: value-42
Ana is 19 years old
Took 308ms (parallel, not 600ms)
Sum of parallel results: 6`,
    commonMistakes: [
      "Calling join() or get() too early — blocks the main thread, defeating the purpose. Chain with thenApply/thenAccept instead.",
      "Forgetting exceptionally() or handle() — exceptions are silently swallowed unless you handle them.",
      "Using the default ForkJoinPool for long-running tasks — it has few threads (CPU cores - 1). Pass a custom executor for I/O-bound work.",
      "Confusing thenApply (sync transform) with thenCompose (async chain) — thenCompose is needed when the transform itself returns a CompletableFuture.",
    ],
    cpp: `// C++ equivalent: std::future + std::async (less featureful, no chaining).
// For chaining, use libraries like Boost.Asio, or C++20 coroutines:
// auto result = co_await async_task();
// TypeScript/JS promises are a closer match to CompletableFuture.`,
    related: ["multithreading","executor-service","virtual-threads","lambda-expressions","optional"],
  },

  /* CONCURRENCY */
  "atomic-variables": {
    title: "Atomic Variables (AtomicInteger, etc.)",
    category: "Concurrency",
    beginnerExplanation: `Atomic variables are the simplest way to do thread-safe counting and simple state updates without the overhead of synchronized. 'count++' looks like one operation, but it's actually three: read count, add 1, write count. Two threads doing count++ at the same time can interleave and lose updates. AtomicInteger fixes this — 'atomicInt.incrementAndGet()' does all three steps atomically (as one indivisible unit), so no updates are lost.

The magic behind atomic variables is CAS (Compare-And-Swap), a CPU instruction that atomically checks 'is the value still X? if so, set it to Y.' If another thread changed it first, the CAS fails and you retry. This is lock-free — no thread blocks, they just retry. It's faster than synchronized for simple operations because there's no lock acquisition overhead.

Java provides AtomicInteger, AtomicLong, AtomicBoolean, AtomicReference, and array versions (AtomicIntegerArray, etc.). Common methods: 'get()' reads, 'set(v)' writes, 'incrementAndGet()' adds 1 and returns the new value, 'compareAndSet(expected, newValue)' atomically sets if the current value equals expected (returns boolean), 'updateAndGet(fn)' atomically applies a function.

Use atomics for: counters, flags, simple accumulators, lock-free data structure building blocks. For anything more complex (multi-variable invariants, compound operations on multiple fields), use locks or synchronized. Atomics are the right tool for simple, high-contention updates — they're faster and simpler than locking.`,
    description: "Atomic variables (java.util.concurrent.atomic) provide lock-free thread-safe operations on single variables using CAS (Compare-And-Swap) CPU instructions. Classes: AtomicInteger, AtomicLong, AtomicBoolean, AtomicReference, plus array variants and high-performance accumulators (LongAdder, LongAccumulator). Faster than synchronized for simple counters and flags. Use compareAndSet for custom atomic update logic.",
    syntax: `import java.util.concurrent.atomic.*;

AtomicInteger counter = new AtomicInteger(0);
AtomicLong sum = new AtomicLong(0);
AtomicBoolean flag = new AtomicBoolean(false);
AtomicReference<String> ref = new AtomicReference<>("initial");

// Common operations
counter.get();                   // read
counter.set(42);                 // write
counter.incrementAndGet();       // ++counter (returns new value)
counter.getAndIncrement();       // counter++ (returns old value)
counter.decrementAndGet();       // --counter
counter.addAndGet(5);            // counter += 5
counter.getAndAdd(5);            // old value, then += 5

// Compare-And-Swap — atomic conditional update
boolean success = counter.compareAndSet(42, 43);  // if 42, set to 43

// Atomic function application
counter.updateAndGet(x -> x * 2);           // atomically double
counter.accumulateAndGet(5, (a, b) -> a * b); // atomically multiply by 5`,
    parameters: [
      ["initialValue", "Optional constructor arg — starting value"],
      ["expected", "The value compareAndSet expects to see"],
      ["newValue", "The value to set if the expected value matches"],
      ["updateFunction", "A function applied atomically to the current value"],
    ],
    returnValue: "get() returns the value. incrementAndGet/decrementAndGet/addAndGet return the NEW value. getAndIncrement/getAndAdd return the OLD value. compareAndSet returns boolean (success).",
    methods: [
      "get() — read the current value",
      "set(v) — write a value",
      "getAndSet(v) — atomically set and return the old value",
      "incrementAndGet() — ++counter, returns new",
      "getAndIncrement() — counter++, returns old",
      "decrementAndGet() — --counter, returns new",
      "addAndGet(delta) — counter += delta, returns new",
      "getAndAdd(delta) — returns old, then counter += delta",
      "compareAndSet(expect, update) — if value == expect, set to update, return boolean",
      "updateAndGet(UnaryOperator) — atomically apply a function",
      "accumulateAndGet(x, BinaryOperator) — atomically combine with x",
      "LongAdder — high-throughput counter (use instead of AtomicLong for hot counters)",
    ],
    example: `import java.util.concurrent.atomic.*;
import java.util.concurrent.*;

public class Main {
    private static final AtomicInteger counter = new AtomicInteger(0);
    private static final AtomicBoolean running = new AtomicBoolean(true);
    private static final LongAdder sum = new LongAdder();  // high-throughput

    public static void main(String[] args) throws Exception {
        // 10 threads, each incrementing 10000 times — no lost updates
        try (var pool = Executors.newFixedThreadPool(10)) {
            for (int i = 0; i < 10; i++) {
                pool.submit(() -> {
                    for (int j = 0; j < 10000; j++) {
                        counter.incrementAndGet();  // atomic
                        sum.increment();             // high-throughput
                    }
                });
            }
        }
        System.out.println("Counter: " + counter.get());    // 100000
        System.out.println("Sum: " + sum.sum());             // 100000

        // compareAndSet — lock-free update loop
        AtomicInteger val = new AtomicInteger(5);
        boolean updated = val.compareAndSet(5, 10);  // was 5, now 10
        System.out.println("CAS succeeded? " + updated + ", val=" + val);

        boolean failed = val.compareAndSet(5, 20);   // was 10, not 5
        System.out.println("CAS succeeded? " + failed + ", val=" + val);

        // Atomic function application
        AtomicInteger n = new AtomicInteger(3);
        n.updateAndGet(x -> x * x);   // 3*3 = 9
        System.out.println("Squared: " + n.get());

        // AtomicReference — safe publication
        AtomicReference<String> config = new AtomicReference<>("v1");
        config.set("v2");
        System.out.println("Config: " + config.get());
    }
}`,
    output: `Counter: 100000
Sum: 100000
CAS succeeded? true, val=10
CAS succeeded? false, val=10
Squared: 9
Config: v2`,
    commonMistakes: [
      "Using AtomicLong for a high-contention counter — LongAdder is much faster under heavy contention (it shards across cells).",
      "Assuming atomic variables make compound operations safe — 'if (map.get(k) == null) map.put(k, v);' is still a race even with atomic map. Use ConcurrentHashMap.computeIfAbsent.",
      "Forgetting that compareAndSet can fail — always check the return value and retry if needed (the standard CAS loop pattern).",
    ],
    cpp: `// C++ equivalent: std::atomic<T> (C++11)
#include <atomic>
std::atomic<int> counter{0};
counter.fetch_add(1);          // atomic increment
counter.compare_exchange_strong(expected, desired);  // CAS`,
    related: ["multithreading","synchronized","volatile","concurrent-collections","locks"],
  },

  /* CONCURRENCY */
  "concurrent-collections": {
    title: "Concurrent Collections",
    category: "Concurrency",
    beginnerExplanation: `Concurrent collections are thread-safe versions of the regular collections (List, Map, Set, Queue). Regular collections like HashMap and ArrayList are NOT thread-safe — if two threads modify one at the same time, they can corrupt its internal data structure or lose updates. Concurrent collections fix this, allowing safe concurrent access.

The three main types: ConcurrentHashMap is the most popular — a thread-safe HashMap that's much faster than the old Hashtable (which locks the whole map on every operation). ConcurrentHashMap uses fine-grained locking — it divides the map into segments and locks only the relevant segment, so multiple threads can read and write different parts simultaneously. It's the go-to map for multi-threaded code.

CopyOnWriteArrayList and CopyOnWriteArraySet are for read-heavy, write-rare scenarios. Every write (add, set, remove) creates a brand new copy of the underlying array. Reads are completely lock-free and fast. This sounds expensive, but if you have 99% reads and 1% writes, it's faster than locking on every read. Great for listener lists and configuration that rarely changes.

ConcurrentLinkedQueue is a lock-free FIFO queue (uses CAS internally). BlockingQueue (with implementations like ArrayBlockingQueue, LinkedBlockingQueue) is for producer-consumer patterns — 'put' blocks if the queue is full, 'take' blocks if it's empty. This makes it easy to build thread pools and work queues.

Rule of thumb: prefer these over 'Collections.synchronizedXxx()' wrappers — the concurrent versions are designed for concurrency from the ground up and are much faster under contention.`,
    description: "Concurrent collections (java.util.concurrent) are thread-safe alternatives to regular collections. ConcurrentHashMap (fine-grained locking, much faster than Hashtable), CopyOnWriteArrayList/Set (lock-free reads, copy on write — for read-heavy data), ConcurrentLinkedQueue (lock-free FIFO), BlockingQueue (blocks on put/take — for producer-consumer). Prefer these over Collections.synchronizedXxx() wrappers.",
    syntax: `import java.util.concurrent.*;

// ConcurrentHashMap — thread-safe map
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("a", 1);                       // thread-safe
map.get("a");
map.computeIfAbsent("b", k -> 2);      // atomic put-if-absent
map.merge("a", 1, Integer::sum);       // atomic increment

// CopyOnWriteArrayList — read-heavy, write-rare
CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
list.add("x");                         // creates a new copy
list.get(0);                           // lock-free read

// ConcurrentLinkedQueue — lock-free FIFO
ConcurrentLinkedQueue<String> queue = new ConcurrentLinkedQueue<>();
queue.offer("a");                      // non-blocking
queue.poll();                          // non-blocking

// BlockingQueue — producer/consumer
BlockingQueue<String> bq = new ArrayBlockingQueue<>(100);
bq.put("item");                        // blocks if full
String item = bq.take();               // blocks if empty`,
    parameters: [
      ["initialCapacity / concurrencyLevel", "Optional constructor args for ConcurrentHashMap"],
      ["capacity", "Required for ArrayBlockingQueue — max elements"],
      ["timeout, unit", "For offer/poll with timeout on BlockingQueue"],
    ],
    returnValue: "ConcurrentHashMap methods return like HashMap (put returns old value, get returns value). BlockingQueue.put returns void (blocks if full). take returns E (blocks if empty). offer returns boolean. poll returns E or null.",
    methods: [
      "ConcurrentHashMap.put/get/remove — thread-safe, no external locking",
      "ConcurrentHashMap.computeIfAbsent(key, fn) — atomic put-if-absent",
      "ConcurrentHashMap.compute(key, fn) — atomic update",
      "ConcurrentHashMap.merge(key, value, fn) — atomic combine",
      "ConcurrentHashMap.forEach(parallelismThreshold, fn) — parallel iteration",
      "CopyOnWriteArrayList.add/get/remove — safe for concurrent reads",
      "ConcurrentLinkedQueue.offer/poll/peek — non-blocking FIFO",
      "BlockingQueue.put(e) — blocks if full",
      "BlockingQueue.take() — blocks if empty",
      "BlockingQueue.offer(e, timeout, unit) — non-blocking with timeout",
      "BlockingQueue.poll(timeout, unit) — non-blocking with timeout",
      "BlockingQueue.remainingCapacity() — space left",
    ],
    example: `import java.util.concurrent.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // ConcurrentHashMap — atomic operations
        ConcurrentHashMap<String, Integer> counts = new ConcurrentHashMap<>();
        counts.put("apple", 1);
        counts.merge("apple", 1, Integer::sum);     // atomically: 2
        counts.computeIfAbsent("banana", k -> 5);   // put 5 if absent
        System.out.println("Counts: " + counts);

        // Parallel word count
        String text = "the cat sat on the mat the cat ran";
        ConcurrentHashMap<String, Integer> wc = new ConcurrentHashMap<>();
        for (String w : text.split(" ")) {
            wc.merge(w, 1, Integer::sum);   // atomic increment
        }
        System.out.println("Word count: " + wc);

        // BlockingQueue — producer/consumer
        BlockingQueue<String> queue = new ArrayBlockingQueue<>(5);

        Runnable producer = () -> {
            try {
                for (int i = 0; i < 3; i++) {
                    queue.put("item-" + i);
                    System.out.println("Produced item-" + i);
                }
                queue.put("DONE");
            } catch (InterruptedException e) {}
        };

        Runnable consumer = () -> {
            try {
                while (true) {
                    String item = queue.take();  // blocks if empty
                    System.out.println("Consumed " + item);
                    if (item.equals("DONE")) break;
                }
            } catch (InterruptedException e) {}
        };

        Thread p = new Thread(producer);
        Thread c = new Thread(consumer);
        p.start(); c.start();
        p.join(); c.join();

        // CopyOnWriteArrayList — safe iteration (no ConcurrentModificationException)
        CopyOnWriteArrayList<String> listeners = new CopyOnWriteArrayList<>();
        listeners.add("L1"); listeners.add("L2");
        for (String l : listeners) {
            listeners.add("L3");  // safe — iterates the old snapshot
        }
        System.out.println("Listeners: " + listeners);
    }
}`,
    output: `Counts: {banana=5, apple=2}
Word count: {mat=1, ran=1, cat=2, on=1, sat=1, the=3}
Produced item-0
Consumed item-0
Produced item-1
Consumed item-1
Produced item-2
Consumed item-2
Consumed DONE
Listeners: [L1, L2, L3, L3, L3]`,
    commonMistakes: [
      "Using Hashtable or Collections.synchronizedMap for new code — ConcurrentHashMap is much faster and equally safe.",
      "Calling size() on ConcurrentHashMap during concurrent updates — it's an estimate, not exact. Don't rely on it for synchronization.",
      "Modifying a CopyOnWriteArrayList during iteration — the iteration uses a snapshot, so changes aren't visible in the current loop (no ConcurrentModificationException, but also no effect).",
      "Using a non-blocking queue (ConcurrentLinkedQueue) when you need backpressure — use BlockingQueue for producer-consumer with bounded capacity.",
    ],
    cpp: `// C++ has no built-in concurrent collections. Use:
// - Intel TBB concurrent_hash_map, concurrent_vector
// - Or wrap std:: containers with std::mutex (coarse)
// - Or use third-party libraries like Folly, Boost`,
    related: ["collections","hashmap","multithreading","synchronized","atomic-variables","executor-service"],
  },

  /* CONCURRENCY */
  "countdown-latch": {
    title: "CountDownLatch & CyclicBarrier",
    category: "Concurrency",
    beginnerExplanation: `CountDownLatch and CyclicBarrier are synchronization tools for coordinating multiple threads. They solve the 'everyone wait here until we're all ready' problem — like a starting gate at a race where all runners wait until the gun fires.

CountDownLatch is a one-shot countdown. You create it with a count (say, 3), and threads call 'await()' to wait. Other threads call 'countDown()' to decrement the count. When the count reaches zero, all waiting threads are released. It's a one-way gate — once it opens, it stays open. Use it when the main thread needs to wait for N worker threads to finish initialization, or when N services need to be ready before processing starts.

CyclicBarrier is reusable — it's a meeting point. You create it with a party count (say, 3), and each thread calls 'await()' when it reaches the barrier. When the last thread arrives, all are released simultaneously, and the barrier resets for reuse. It's like a group of friends agreeing to meet at a checkpoint, and once everyone's there, they all continue together. Use it for phased computations where threads must sync between phases (like a parallel game loop: all threads compute physics, sync, all compute rendering, sync).

Related: Semaphore controls access to N permits (like parking spots) — threads acquire a permit before entering and release it when done. Phaser is a more flexible barrier that supports dynamic party registration and multiple phases.`,
    description: "CountDownLatch (one-shot countdown) and CyclicBarrier (reusable barrier) coordinate thread synchronization. CountDownLatch: initialize with count N, threads await() until N countDown() calls release them. CyclicBarrier: N threads await() at a barrier point, all released when the last arrives, then resets for reuse. Also: Semaphore (N permits for resource pooling), Phaser (flexible multi-phase barrier).",
    syntax: `import java.util.concurrent.*;

// CountDownLatch — one-shot
CountDownLatch latch = new CountDownLatch(3);
// Worker threads:
latch.countDown();          // decrement
// Main thread:
latch.await();              // block until count reaches 0
latch.await(10, TimeUnit.SECONDS);  // with timeout

// CyclicBarrier — reusable
CyclicBarrier barrier = new CyclicBarrier(3, () -> {
    System.out.println("Barrier tripped!");  // runs when all arrive
});
// Each of 3 threads:
barrier.await();            // block until all 3 arrive, then all released
barrier.await();            // resets — can use again

// Semaphore — N permits
Semaphore sem = new Semaphore(5);  // 5 permits
sem.acquire();              // take a permit (blocks if none available)
sem.release();              // return a permit`,
    parameters: [
      ["count", "Initial count for CountDownLatch — how many countDown() calls before release"],
      ["parties", "Number of threads for CyclicBarrier — how many must arrive"],
      ["barrierAction", "Optional Runnable for CyclicBarrier — runs when the barrier trips"],
      ["permits", "Initial permits for Semaphore — how many can acquire simultaneously"],
    ],
    returnValue: "countDown() and release() return void. await() returns void (CountDownLatch) or int (CyclicBarrier — arrival index). acquire() returns void. All can throw InterruptedException.",
    methods: [
      "CountDownLatch(count) — create with initial count",
      "countDown() — decrement the count",
      "await() — block until count reaches 0",
      "await(timeout, unit) — block with timeout, returns boolean",
      "getCount() — current count",
      "CyclicBarrier(parties) — create with party count",
      "CyclicBarrier(parties, barrierAction) — with action on trip",
      "await() — block until all parties arrive, returns arrival index",
      "await(timeout, unit) — block with timeout",
      "reset() — reset the barrier (careful — can strand waiting threads)",
      "Semaphore(permits) — create with permit count",
      "acquire() — take a permit (block if none)",
      "release() — return a permit",
      "tryAcquire() — non-blocking attempt",
      "tryAcquire(timeout, unit) — wait with timeout",
    ],
    example: `import java.util.concurrent.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // CountDownLatch — wait for 3 workers to initialize
        int nWorkers = 3;
        CountDownLatch initLatch = new CountDownLatch(nWorkers);
        CountDownLatch startLatch = new CountDownLatch(1);  // signal to start

        for (int i = 0; i < nWorkers; i++) {
            final int id = i;
            new Thread(() -> {
                System.out.println("Worker " + id + " initializing...");
                sleep(100 + id * 50);
                System.out.println("Worker " + id + " ready");
                initLatch.countDown();          // signal: I'm ready
                try { startLatch.await(); }     // wait for start signal
                catch (InterruptedException e) {}
                System.out.println("Worker " + id + " working!");
            }).start();
        }

        initLatch.await();                       // wait for all workers
        System.out.println("All workers ready. Starting!");
        startLatch.countDown();                  // release all workers
        sleep(300);

        // CyclicBarrier — phased computation
        System.out.println("\\n--- CyclicBarrier ---");
        int parties = 3;
        CyclicBarrier barrier = new CyclicBarrier(parties, () ->
            System.out.println("  [barrier tripped — phase complete]"));

        for (int i = 0; i < parties; i++) {
            final int id = i;
            new Thread(() -> {
                for (int phase = 1; phase <= 2; phase++) {
                    System.out.println("Thread " + id + " phase " + phase + " done");
                    try { barrier.await(); }
                    catch (Exception e) {}
                }
            }).start();
        }
        sleep(500);

        // Semaphore — limit concurrent access to 2
        System.out.println("\\n--- Semaphore (2 permits) ---");
        Semaphore sem = new Semaphore(2);
        for (int i = 0; i < 5; i++) {
            final int id = i;
            new Thread(() -> {
                try {
                    sem.acquire();
                    System.out.println("Thread " + id + " got permit");
                    sleep(200);
                    System.out.println("Thread " + id + " releasing");
                    sem.release();
                } catch (InterruptedException e) {}
            }).start();
        }
        sleep(1500);
    }

    static void sleep(int ms) {
        try { Thread.sleep(ms); } catch (InterruptedException e) {}
    }
}`,
    output: `Worker 0 initializing...
Worker 1 initializing...
Worker 2 initializing...
Worker 0 ready
Worker 1 ready
Worker 2 ready
All workers ready. Starting!
Worker 0 working!
Worker 1 working!
Worker 2 working!

--- CyclicBarrier ---
Thread 0 phase 1 done
Thread 1 phase 1 done
Thread 2 phase 1 done
  [barrier tripped — phase complete]
Thread 0 phase 2 done
Thread 1 phase 2 done
Thread 2 phase 2 done
  [barrier tripped — phase complete]

--- Semaphore (2 permits) ---
Thread 0 got permit
Thread 1 got permit
Thread 0 releasing
Thread 2 got permit
Thread 1 releasing
Thread 3 got permit
Thread 2 releasing
Thread 4 got permit
Thread 3 releasing
Thread 4 releasing`,
    commonMistakes: [
      "Reusing CountDownLatch — it's one-shot. Once the count hits 0, await() returns immediately forever. Use CyclicBarrier for reusable barriers.",
      "Forgetting to countDown() in a finally block — if a worker crashes before countDown(), the latch never opens and await() blocks forever.",
      "Calling CyclicBarrier.reset() while threads are waiting — strands them indefinitely. Avoid unless you're shutting down.",
    ],
    cpp: `// C++ equivalents (C++20):
// std::latch — one-shot countdown (like CountDownLatch)
// std::barrier — reusable barrier (like CyclicBarrier)
// std::counting_semaphore<N> — permits (like Semaphore)
// Before C++20, use condition_variables or Boost.`,
    related: ["multithreading","executor-service","locks","synchronized","concurrent-collections"],
  },

  /* ADVANCED */
  "reflection": {
    title: "Reflection",
    category: "Advanced",
    beginnerExplanation: `Reflection is Java's way of inspecting and modifying its own code at runtime. Imagine a program that can look at itself in a mirror — it can see what classes exist, what methods and fields they have, and even call those methods or change those fields without having written them at compile time. It's powerful but use it carefully.

Why would you need this? Frameworks like Spring, Hibernate, and JUnit use reflection heavily. Spring scans your classes for @Autowired annotations and injects dependencies. JUnit finds methods marked @Test and runs them. Hibernate reads your @Entity classes and generates SQL. None of this is possible without reflection — the framework didn't write your classes, so it has to discover them at runtime.

The core classes are Class (represents a class), Method (a method), Field (a field), and Constructor. You get a Class object with 'MyClass.class', 'obj.getClass()', or 'Class.forName("pkg.MyClass")'. From there: 'clazz.getMethods()' returns all public methods, 'clazz.getDeclaredFields()' returns all fields (including private), 'clazz.getConstructor(String.class)' finds a constructor, and 'constructor.newInstance("arg")' creates an instance.

Reflection breaks encapsulation — you can access private fields with 'field.setAccessible(true)'. This is powerful for testing and frameworks, but dangerous in production (bypasses security, breaks when internals change). Use reflection when you genuinely need runtime discovery (frameworks, serializers, test runners); avoid it in application code where normal calls work.`,
    description: "Reflection (java.lang.reflect) lets a program inspect and modify its own classes, methods, fields, and constructors at runtime. Core types: Class, Method, Field, Constructor. Used heavily by frameworks (Spring, Hibernate, JUnit) for annotation processing, dependency injection, and serialization. Powerful but breaks encapsulation — use sparingly in application code.",
    syntax: `import java.lang.reflect.*;

// Get a Class object
Class<?> clazz = MyClass.class;
Class<?> clazz = obj.getClass();
Class<?> clazz = Class.forName("com.example.MyClass");

// Inspect
Method[] methods = clazz.getMethods();           // public methods (incl. inherited)
Method[] declMethods = clazz.getDeclaredMethods(); // all methods declared in this class
Field[] fields = clazz.getDeclaredFields();
Constructor<?>[] ctors = clazz.getConstructors();

// Find a specific method
Method m = clazz.getMethod("setName", String.class);
Field f = clazz.getDeclaredField("name");
Constructor<?> c = clazz.getConstructor(String.class, int.class);

// Create an instance
Object obj = c.newInstance("Ana", 19);

// Invoke a method
m.invoke(obj, "Bob");

// Access a private field
f.setAccessible(true);
Object value = f.get(obj);
f.set(obj, newValue);`,
    parameters: [
      ["Class<?>", "Represents a class at runtime — entry point for reflection"],
      ["getMethod(name, paramTypes...)", "Find a public method by name and parameter types"],
      ["getDeclaredMethod(name, paramTypes...)", "Find any method declared in this class (incl. private)"],
      ["setAccessible(true)", "Bypass access control on private members — use carefully"],
      ["invoke(obj, args...)", "Call the method on obj with the given args"],
    ],
    returnValue: "getMethod/getDeclaredMethod return Method. getConstructor returns Constructor. newInstance returns Object (must cast). invoke returns Object (the method's return value, boxed if primitive).",
    methods: [
      "Class.forName(name) — load a class by fully-qualified name",
      "clazz.getMethods() — all public methods (incl. inherited)",
      "clazz.getDeclaredMethods() — all methods declared in this class",
      "clazz.getFields() / getDeclaredFields() — public / all fields",
      "clazz.getConstructors() — public constructors",
      "clazz.getMethod(name, types...) — find a public method",
      "clazz.getDeclaredMethod(name, types...) — find any method",
      "clazz.getConstructor(types...) — find a public constructor",
      "constructor.newInstance(args...) — create a new instance",
      "method.invoke(obj, args...) — call the method",
      "field.get(obj) / field.set(obj, value) — read/write a field",
      "field.setAccessible(true) — bypass private access",
      "clazz.isAnnotationPresent(Ann.class) — check for an annotation",
      "clazz.getAnnotation(Ann.class) — get an annotation",
    ],
    example: `import java.lang.reflect.*;

public class Main {
    public static void main(String[] args) throws Exception {
        // Inspect a class
        Class<?> clazz = String.class;
        System.out.println("Class: " + clazz.getName());
        System.out.println("Modifiers: " + Modifier.toString(clazz.getModifiers()));
        System.out.println("Methods (first 3):");
        for (Method m : clazz.getMethods()) {
            if (m.getName().length() <= 5) {
                System.out.println("  " + m.getName() + "(" +
                    m.getParameterCount() + " params)");
                if (--count <= 0) break;
            }
        }
        int count = 3;

        // Create an instance via reflection
        Constructor<String> ctor = String.class.getConstructor(byte[].class);
        String s = ctor.newInstance(new byte[]{72, 73});  // "HI"
        System.out.println("\\nCreated: " + s);

        // Invoke a method
        Method m = String.class.getMethod("toUpperCase");
        String upper = (String) m.invoke(s);
        System.out.println("Uppercase: " + upper);

        // Custom class with a private field
        class Box {
            private String secret = "hidden";
            public String getSecret() { return secret; }
        }
        Box box = new Box();
        Field f = Box.class.getDeclaredField("secret");
        f.setAccessible(true);  // bypass private
        System.out.println("\\nSecret (via reflection): " + f.get(box));
        f.set(box, "changed");
        System.out.println("After modification: " + box.getSecret());
    }
}`,
    output: `Class: java.lang.String
Modifiers: public final
Methods (first 3):
  length(0 params)
  charAt(1 params)
  equals(1 params)

Created: HI
Uppercase: HI

Secret (via reflection): hidden
After modification: changed`,
    commonMistakes: [
      "Using reflection when normal code works — reflection is slower, less type-safe, and breaks when internals change. Use it only for frameworks, serializers, and tools.",
      "Forgetting setAccessible(true) for private members — throws IllegalAccessException.",
      "Catching broad exceptions — reflection throws checked exceptions like InvocationTargetException (wraps the target method's exceptions) that you must handle.",
      "Relying on reflection for performance-critical code — method.invoke() is 10-100x slower than a direct call. Cache Method objects and consider MethodHandle (Java 7+) for better performance.",
    ],
    cpp: `// C++ has limited RTTI (run-time type information):
// typeid(obj).name() — type name
// dynamic_cast<Derived*>(basePtr) — safe downcast
// No full reflection like Java. Libraries like Qt add reflection via MOC.`,
    related: ["annotations","classes","objects","inheritance","design-patterns"],
  },

  /* ADVANCED */
  "modules": {
    title: "Modules (JPMS, Java 9+)",
    category: "Advanced",
    beginnerExplanation: `The Java Module System (JPMS, Java 9+) is a way to organize large Java projects into clearly defined, self-contained modules — think of it like organizing a big library into sections, where each section has a sign saying what books it offers and what books it needs from other sections. Before modules, Java had packages (folders), but there was no way to say 'this package is internal, don't use it from outside' or 'I depend on these specific other packages.'

A module is a group of packages with a module-info.java file that declares what it exports (makes available to others) and what it requires (needs from others). This creates strong encapsulation: even a public class in a non-exported package is invisible to other modules. No more accidentally using internal APIs.

Why does this matter? For large applications and libraries, modules enforce boundaries. If you change an internal package, you know no one outside depends on it. They also improve security (smaller attack surface) and startup performance (the JVM can skip loading modules you don't need).

For small projects, modules are optional — you can keep using the classpath. But Java's own API was split into modules in Java 9 (java.base, java.sql, java.desktop, etc.), and some libraries require module usage. If you see 'module not found' errors, you're hitting module system boundaries.

A module-info.java looks like: 'module com.example.app { requires java.sql; exports com.example.app.api; }' — this module needs java.sql and exposes only its api package.`,
    description: "The Java Platform Module System (JPMS, Java 9+) organizes code into modules with explicit dependencies and exports. A module-info.java declares 'requires' (dependencies) and 'exports' (visible packages). Strong encapsulation: even public classes in non-exported packages are invisible to other modules. Java's own API was split into modules (java.base, java.sql, etc.). Optional for application code; required for some libraries.",
    syntax: `// File: src/com.example.app/module-info.java
module com.example.app {
    requires java.sql;              // depends on java.sql module
    requires transitive com.lib;   // dependents also get com.lib
    exports com.example.app.api;   // only api package is visible
    exports com.example.app.internal to com.test; // export to one module
    opens com.example.app.data;    // open for reflection (Spring, Hibernate)
    uses com.example.app.spi.Service;       // service consumer
    provides Service with Impl;             // service provider
}

// Compile with module path
javac -d out --module-source-path src $(find src -name "*.java")

// Run
java --module-path out --module com.example.app/com.example.app.Main`,
    parameters: [
      ["requires", "Declare a dependency on another module"],
      ["requires transitive", "Dependency that also applies to modules depending on this one"],
      ["exports", "Make a package visible to other modules"],
      ["exports to", "Export only to specific modules (qualified export)"],
      ["opens", "Allow reflection on a package (for frameworks like Spring)"],
      ["uses / provides", "Service loader: declare a service consumer or provider"],
    ],
    returnValue: "Modules don't affect return values — they control visibility and dependencies at compile and runtime.",
    methods: [
      "module name { ... } — declare a module",
      "requires moduleName — depend on a module",
      "requires transitive moduleName — dependents inherit this dependency",
      "exports packageName — make a package public",
      "exports packageName to module1, module2 — qualified export",
      "opens packageName — allow runtime reflection on a package",
      "uses ServiceInterface — declare a service consumer",
      "provides ServiceInterface with Implementation — declare a service provider",
    ],
    example: `// File: module-info.java for a simple app
module com.example.app {
    requires java.sql;           // need JDBC
    requires java.net.http;      // need HttpClient (Java 11+)
    exports com.example.app.api; // only 'api' package is public
    // 'internal' package is NOT exported — invisible outside
    opens com.example.app.models to org.hibernate.orm.core; // for Hibernate
}

// File: com/example/app/api/PublicService.java
package com.example.app.api;
public class PublicService {
    public String greet() { return "Hello from module!"; }
}

// File: com/example/app/internal/Secret.java
package com.example.app.internal;
public class Secret { /* not visible outside this module */ }

// Compile and run
// javac -d out --module-source-path src $(find src -name "*.java")
// java --module-path out --module com.example.app/com.example.app.api.Main`,
    output: `// Module boundary checks at compile time:
// src/com.example.app/com/example/app/internal/Secret.java → can't be
// imported from another module. The compiler rejects it.
//
// At runtime:
// java --module-path out --module com.example.app/...
// → "Hello from module!"`,
    commonMistakes: [
      "Forgetting that packages not in 'exports' are invisible — even public classes. This breaks code that used to work on the classpath.",
      "Mixing classpath and module path — when a module is on the module path, it follows module rules; on the classpath, it's treated as an unnamed module (everything visible).",
      "Not adding 'opens' for frameworks that use reflection (Spring, Hibernate, Jackson) — they can't access your classes at runtime.",
      "Adding too many 'exports' — defeats the purpose of modules. Export only the API, keep internals hidden.",
    ],
    cpp: `// C++20 added modules (similar concept, different syntax):
// export module math;
// import math;
// But C++ modules are not widely adopted yet (2024). Most C++ code
// still uses #include headers.`,
    related: ["packages","access-modifiers","jar-files","classpath","encapsulation"],
  },

  /* ADVANCED */
  "jar-files": {
    title: "JAR Files",
    category: "Advanced",
    beginnerExplanation: `A JAR (Java Archive) file is a ZIP file containing compiled Java classes plus metadata. Think of it like a zipped folder of your code — instead of shipping hundreds of .class files separately, you bundle them into one .jar for easy distribution. When you download a library (like Gson or Jackson), it comes as a .jar file you add to your project.

A JAR contains .class files organized in folders matching their package names (com/example/Foo.class), plus a META-INF folder with metadata. The most important metadata is the MANIFEST.MF file — a text file with information like which class has the main method (so 'java -jar app.jar' knows where to start), the version, dependencies, and more.

You create a JAR with the 'jar' tool that comes with the JDK: 'jar cf mylib.jar com/' packages the 'com' folder into mylib.jar. To make an executable JAR (one you can run with 'java -jar'), you need a manifest specifying the Main-Class. Modern build tools (Maven, Gradle) handle all this automatically — you rarely run 'jar' by hand.

There are special JAR types. A 'fat JAR' (or uber-JAR) bundles all dependencies into one file — convenient for distribution. A 'modular JAR' (Java 9+) includes a module-info.class. A 'WAR' (Web Archive) is for web apps deployed to servers like Tomcat. An 'EAR' (Enterprise Archive) bundles multiple WARs and EJBs.`,
    description: "A JAR (Java Archive) is a ZIP file containing compiled .class files, resources, and a META-INF/MANIFEST.MF metadata file. Created with the 'jar' tool or build tools (Maven, Gradle). The manifest specifies Main-Class for executable JARs. Special types: fat/uber JAR (includes dependencies), modular JAR (Java 9+), WAR (web apps), EAR (enterprise).",
    syntax: `# Create a JAR from compiled classes
jar cf mylib.jar -C out .

# Create an executable JAR with a manifest
echo "Main-Class: com.example.Main" > manifest.txt
jar cfm app.jar manifest.txt -C out .

# Run an executable JAR
java -jar app.jar

# List JAR contents
jar tf mylib.jar

# Extract a JAR
jar xf mylib.jar

# Update a JAR
jar uf mylib.jar new-file.txt

# Maven: build a JAR
mvn package
# Gradle: build a JAR
gradle jar`,
    parameters: [
      ["c", "Create a new JAR"],
      ["t", "List table of contents"],
      ["x", "Extract all files"],
      ["u", "Update an existing JAR"],
      ["f", "Specify the JAR file name"],
      ["m", "Include a manifest file"],
      ["e", "Specify the main class (for executable JARs)"],
      ["Main-Class", "Manifest attribute — the entry point class for 'java -jar'"],
    ],
    returnValue: "JAR tools return exit codes (0 = success). 'java -jar' runs the Main-Class and returns its exit code.",
    methods: [
      "jar cf file.jar files... — create a JAR",
      "jar cfm file.jar manifest.txt files... — create with custom manifest",
      "jar cfe file.jar com.example.Main files... — create executable JAR",
      "jar tf file.jar — list contents",
      "jar xf file.jar — extract all",
      "jar uf file.jar new-files... — update (add files)",
      "java -jar file.jar — run an executable JAR",
      "mvn package — Maven: build a JAR (target/*.jar)",
      "gradle jar — Gradle: build a JAR (build/libs/*.jar)",
    ],
    example: `# Project structure:
#   src/com/example/Main.java
#   src/com/example/Util.java

# 1. Compile
javac -d out src/com/example/*.java

# 2. Create an executable JAR
jar cfe app.jar com.example.Main -C out .
#    c = create, f = file app.jar, e = entry point com.example.Main

# 3. List contents
jar tf app.jar
# Output:
#   META-INF/
#   META-INF/MANIFEST.MF
#   com/
#   com/example/
#   com/example/Main.class
#   com/example/Util.class

# 4. Run it
java -jar app.jar
# Runs com.example.Main

# 5. Maven pom.xml (modern way)
# <project>
#   <groupId>com.example</groupId>
#   <artifactId>myapp</artifactId>
#   <version>1.0</version>
#   <packaging>jar</packaging>
# </project>
# Then: mvn package → produces target/myapp-1.0.jar`,
    output: `# jar tf app.jar output:
META-INF/
META-INF/MANIFEST.MF
com/
com/example/
com/example/Main.class
com/example/Util.class

# The MANIFEST.MF looks like:
Manifest-Version: 1.0
Created-By: 17 (Oracle Corporation)
Main-Class: com.example.Main

# java -jar app.jar runs Main-Class`,
    commonMistakes: [
      "Forgetting to specify Main-Class — 'java -jar' fails with 'no main manifest attribute'.",
      "Including source .java files in the JAR instead of compiled .class files — bloats the JAR and serves no purpose at runtime.",
      "Building a fat JAR manually is error-prone — use Maven Shade Plugin or Gradle Shadow Plugin to handle dependency shading correctly.",
      "Not signing JARs for applets/Web Start — unsigned JARs can't access privileged operations (though Web Start is deprecated).",
    ],
    cpp: `// C++ has no direct equivalent. Static libraries (.a, .lib) and dynamic
// libraries (.so, .dll) serve a similar purpose for compiled code.
// Java's JAR is closer to a .zip of .class files with metadata.`,
    related: ["classpath","modules","packages","build-tools","java-basics"],
  },

  /* ADVANCED */
  "classpath": {
    title: "Classpath",
    category: "Advanced",
    beginnerExplanation: `The classpath is the list of places Java looks for your classes — like a list of folders and JAR files where Java searches when you reference a class. Think of it like a library catalog: when your code says 'use ArrayList,' Java looks through the classpath to find where ArrayList's .class file lives. If it's not on the classpath, you get a ClassNotFoundException.

The classpath can include directories (where .class files live in package-named subfolders), JAR files (which are ZIPs of .class files), or even wildcards (a folder/*.jar loads all JARs in that folder). You set it with the -cp or -classpath flag: 'java -cp out:libs/gson.jar:libs/jackson.jar com.example.Main' (on Linux/Mac, use : as separator; on Windows, use ;).

Common gotcha: the current directory (.) is NOT automatically on the classpath in modern Java. If your compiled classes are in 'out/', you must explicitly add -cp out. Also, JAR files must be listed individually — 'java -cp libs/*' (with wildcard) works, but 'java -cp libs' does NOT include the JARs inside libs.

Build tools (Maven, Gradle) manage the classpath for you — they download dependencies and construct the right -cp flag. In an IDE (IntelliJ, Eclipse), the IDE builds the classpath from your project settings. You only deal with -cp directly when running Java by hand or in scripts. The CLASSPATH environment variable exists but is discouraged — it pollutes all Java programs; prefer -cp.`,
    description: "The classpath tells Java where to find compiled .class files and JARs. Set with -cp / -classpath flag (colon-separated on Unix, semicolon on Windows). Can include directories, JAR files, or wildcards (dir/* loads all JARs in dir). Build tools (Maven, Gradle) manage it automatically. CLASSPATH env var exists but is discouraged.",
    syntax: `# Run with a classpath (Linux/Mac — colon separator)
java -cp out com.example.Main

# Multiple entries
java -cp out:libs/gson.jar:libs/jackson.jar com.example.Main

# Wildcard — load all JARs in a folder
java -cp "out:libs/*" com.example.Main

# Windows — semicolon separator
java -cp "out;libs/gson.jar;libs/jackson.jar" com.example.Main

# Compile with classpath (for dependencies)
javac -cp "libs/*" -d out src/com/example/*.java

# Set CLASSPATH environment variable (discouraged)
export CLASSPATH="out:libs/*"
java com.example.Main   # uses $CLASSPATH`,
    parameters: [
      ["-cp / -classpath", "Set the classpath for a single command (preferred)"],
      ["CLASSPATH env var", "Sets classpath for all Java commands — discouraged"],
      [":", "Path separator on Linux/Mac"],
      [";", "Path separator on Windows"],
      ["dir/*", "Wildcard — includes all .jar files in dir (not subdirs)"],
    ],
    returnValue: "Classpath doesn't affect return values — it controls where Java finds classes at runtime and compile time.",
    methods: [
      "-cp path1:path2 — set classpath (Unix)",
      "-cp path1;path2 — set classpath (Windows)",
      "dir/* — wildcard: all JARs in dir",
      "-classpath — same as -cp",
      "CLASSPATH env var — global setting (discouraged)",
      "java.class.path system property — read the current classpath at runtime",
      "Class-Path manifest attribute — set classpath for executable JARs",
    ],
    example: `# Project layout:
#   src/com/example/Main.java    (imports com.google.gson.Gson)
#   libs/gson-2.10.jar
#
# 1. Compile (need gson on the classpath to find the import)
javac -cp "libs/gson-2.10.jar" -d out src/com/example/*.java

# 2. Run (need both your classes AND gson)
java -cp "out:libs/gson-2.10.jar" com.example.Main

# 3. Use wildcard for many JARs
java -cp "out:libs/*" com.example.Main

# 4. Inspect the classpath at runtime
# In Main.java:
System.out.println(System.getProperty("java.class.path"));
// prints: out:libs/gson-2.10.jar

# 5. Common error when classpath is wrong:
#   Exception in thread "main" java.lang.NoClassDefFoundError:
#   com/google/gson/Gson
#   → means gson JAR is not on the classpath`,
    output: `# System.getProperty("java.class.path") prints:
out:libs/gson-2.10.jar

# Common error messages when classpath is wrong:
# ClassNotFoundException — class not found at RUNTIME
# NoClassDefFoundError — class was there at compile time but missing at runtime
# Could not find or load main class — main class not on classpath`,
    commonMistakes: [
      "Forgetting to include your own compiled classes (out directory) on the runtime classpath — you only added the JARs.",
      "Using 'libs' (the folder) instead of 'libs/*' (wildcard) — the folder itself doesn't load the JARs inside it.",
      "Mixing : and ; separators — use : on Linux/Mac, ; on Windows.",
      "Setting CLASSPATH env var globally — it affects ALL Java programs, causing confusing conflicts. Use -cp instead.",
    ],
    cpp: `// C++ equivalent: -I (include path for headers), -L (library path),
// -l (link library), LD_LIBRARY_PATH / PATH (runtime dynamic libraries).
// Much more manual than Java's classpath.`,
    related: ["jar-files","modules","packages","build-tools","java-basics"],
  },

  /* ADVANCED */
  "logging": {
    title: "Logging",
    category: "Advanced",
    beginnerExplanation: `Logging is how a program records what it's doing — like a ship's logbook where the captain notes '10:00 — left port, 11:30 — engine check, 14:00 — arrived.' Instead of using System.out.println (which you have to delete before production), logging lets you leave diagnostic messages that can be turned on or off by level, sent to different destinations (file, console, network), and formatted consistently.

Logging levels let you control verbosity. DEBUG is for developers (very detailed), INFO is for normal operation ('server started on port 8080'), WARN is for concerning but non-fatal issues, ERROR is for failures, FATAL is for crashes. In production you might only show WARN and above; when debugging, you turn on DEBUG. You change this in a config file without recompiling.

Java has several logging options. The built-in java.util.logging (JUL) is fine for small apps. For real projects, most teams use SLF4J as the API (a logging facade — your code calls SLF4J, which routes to any backend) with Logback as the implementation (the actual backend that writes the logs). Another popular combo is SLF4J + Log4j2. The advantage of SLF4J: you can swap the backend without changing your code.

Good logging practices: use parameterized messages ('log.info("User {} logged in", userId)' — avoids string concatenation when the level is off), log exceptions with the exception object ('log.error("Failed", e)' — includes the stack trace), and don't log inside tight loops (performance). Each class usually has its own logger: 'private static final Logger log = LoggerFactory.getLogger(MyClass.class);'.`,
    description: "Logging records application events for debugging and monitoring. Levels: TRACE, DEBUG, INFO, WARN, ERROR, FATAL. Java has java.util.logging (JUL) built-in, but most projects use SLF4J (API) + Logback or Log4j2 (backend). SLF4J is a facade — swap backends without code changes. Use parameterized messages and pass exceptions to the logger for stack traces.",
    syntax: `import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UserService {
    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    public void login(String username) {
        log.info("User {} attempting login", username);  // parameterized

        try {
            authenticate(username);
            log.info("User {} logged in successfully", username);
        } catch (Exception e) {
            log.error("Login failed for user {}", username, e);  // exception last
        }

        if (log.isDebugEnabled()) {
            log.debug("Detailed state: {}", computeExpensiveState());
        }
    }
}

// logback.xml configuration (src/main/resources/logback.xml)
<configuration>
  <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
    <encoder><pattern>%d{HH:mm:ss} %-5level %logger{36} - %msg%n</pattern></encoder>
  </appender>
  <root level="INFO">
    <appender-ref ref="STDOUT" />
  </root>
</configuration>`,
    parameters: [
      ["Logger", "Object that emits log messages — usually one per class"],
      ["LoggerFactory.getLogger(Class)", "Get a logger for a class (SLF4J)"],
      ["Level", "Severity: TRACE < DEBUG < INFO < WARN < ERROR"],
      ["Appender", "Where logs go: ConsoleAppender, FileAppender, RollingFileAppender"],
      ["Pattern", "Format of log messages — %d (date), %level, %logger, %msg, %n"],
    ],
    returnValue: "Logging methods return void. isXxxEnabled() returns boolean — useful to avoid expensive computation when the level is off.",
    methods: [
      "LoggerFactory.getLogger(Class) — get a logger (SLF4J)",
      "log.trace(msg, args) — most detailed level",
      "log.debug(msg, args) — developer diagnostics",
      "log.info(msg, args) — normal operation events",
      "log.warn(msg, args) — concerning but non-fatal",
      "log.error(msg, args) — failures",
      "log.error(msg, exception) — log with stack trace (exception is last arg)",
      "log.info(\"{} did {}\", a, b) — parameterized message (no string concat if level off)",
      "log.isDebugEnabled() / isInfoEnabled() — check before expensive logging",
      "MDC.put(\"userId\", id) — add context visible in log patterns",
    ],
    example: `import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;

public class Main {
    private static final Logger log = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        log.info("Application starting");

        // Parameterized messages — no string concat if level is off
        String user = "Ana";
        log.info("User {} logged in", user);

        // MDC — context added to every log line
        MDC.put("requestId", "req-123");
        MDC.put("userId", user);
        log.info("Processing order");

        // Exception logging — pass the exception as the last arg
        try {
            int x = 1 / 0;
        } catch (ArithmeticException e) {
            log.error("Division failed for user {}", user, e);
        }

        // Level-guarded expensive logging
        if (log.isDebugEnabled()) {
            String state = computeExpensiveState();
            log.debug("Current state: {}", state);
        }

        MDC.clear();
        log.info("Application done");
    }

    static String computeExpensiveState() {
        return "[big state object]";
    }
}`,
    output: `14:23:01 INFO  Main - Application starting
14:23:01 INFO  Main - User Ana logged in
14:23:01 INFO  Main [requestId=req-123, userId=Ana] - Processing order
14:23:01 ERROR Main [requestId=req-123, userId=Ana] - Division failed for user Ana
java.lang.ArithmeticException: / by zero
    at Main.main(Main.java:18)
14:23:01 INFO  Main [requestId=req-123, userId=Ana] - Application done`,
    commonMistakes: [
      "Using System.out.println instead of a logger — can't be turned off, no levels, no formatting, can't route to files.",
      "String concatenation in log statements — 'log.info(\"User \" + user)' always builds the string, even if INFO is off. Use 'log.info(\"User {}\", user)' instead.",
      "Forgetting to pass the exception — 'log.error(\"Failed: \" + e.getMessage())' loses the stack trace. Use 'log.error(\"Failed\", e)'.",
      "Logging sensitive data (passwords, tokens, PII) — sanitize or mask before logging.",
      "Logging inside tight loops — can flood the logs and slow the app. Aggregate and log summaries.",
    ],
    cpp: `// C++ has no built-in logging. Popular libraries:
// - spdlog (fast, fmt-based formatting)
// - glog (Google's logging library)
// - log4cxx (port of log4j to C++)
// spdlog is the most popular modern choice:
// spdlog::info("User {} logged in", username);`,
    related: ["exception-handling","input-output","file-handling","debugging","build-tools"],
  },

  /* ADVANCED */
  "json-processing": {
    title: "JSON Processing",
    category: "Advanced",
    beginnerExplanation: `JSON (JavaScript Object Notation) is the most common format for sending data between programs — especially between a web server and a browser. It's just text, but structured: objects use curly braces {"name": "Ana", "age": 19}, arrays use square brackets [1, 2, 3], and values can be strings, numbers, booleans, null, objects, or arrays. Java doesn't have JSON built into the language, so you use a library.

The two most popular libraries are Jackson and Gson. Jackson is the default in Spring and most enterprise Java; Gson (by Google) is simpler and popular in Android. Both do the same thing: convert Java objects to JSON text (serialization) and convert JSON text back to Java objects (deserialization).

The simplest usage: 'objectMapper.writeValueAsString(myObject)' converts a Java object to a JSON string, and 'objectMapper.readValue(json, MyClass.class)' converts a JSON string back to a Java object. The library uses reflection to match JSON keys to Java field names automatically. So a Java class 'class Person { String name; int age; }' becomes '{"name":"Ana","age":19}' with zero configuration.

For web APIs (REST), frameworks like Spring Boot handle JSON automatically — your controller method returns a Java object, and Spring converts it to JSON for the HTTP response. You rarely call Jackson directly. But knowing how it works helps when you need custom serialization (dates, nested objects, ignoring fields) — you annotate fields with @JsonProperty, @JsonIgnore, @JsonFormat, etc.`,
    description: "JSON processing in Java is done via libraries — Jackson (most popular, Spring default) and Gson (Google, simpler). Both serialize Java objects to JSON strings and deserialize JSON back to objects using reflection. Core methods: ObjectMapper.writeValueAsString(obj) and readValue(json, Class). Spring Boot auto-converts JSON for REST APIs. Annotate fields with @JsonProperty, @JsonIgnore for custom mapping.",
    syntax: `import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.annotation.*;

// Java object → JSON
ObjectMapper mapper = new ObjectMapper();
String json = mapper.writeValueAsString(person);
// {"name":"Ana","age":19}

// JSON → Java object
Person p = mapper.readValue(json, Person.class);

// Pretty print
String pretty = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(person);

// Lists and maps
List<Person> people = mapper.readValue(json, new TypeReference<List<Person>>(){});

// Custom field mapping
public class Person {
    @JsonProperty("full_name")  // JSON key is "full_name", Java field is "name"
    private String name;

    @JsonIgnore               // don't serialize this field
    private String password;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate birthday;
}`,
    parameters: [
      ["ObjectMapper", "Jackson's main class — thread-safe after configuration, reuse one instance"],
      ["writeValueAsString(obj)", "Serialize a Java object to a JSON string"],
      ["readValue(json, Class)", "Deserialize JSON to a Java object of the given class"],
      ["TypeReference<T>", "Used for generic types like List<Person> — new TypeReference<List<Person>>(){}"],
      ["@JsonProperty", "Map a JSON key to a differently-named Java field"],
      ["@JsonIgnore", "Exclude a field from serialization/deserialization"],
      ["@JsonFormat", "Control formatting (dates, numbers)"],
    ],
    returnValue: "writeValueAsString returns String. readValue returns the deserialized object of the specified type. Both throw checked JsonProcessingException.",
    methods: [
      "ObjectMapper — main Jackson class (create once, reuse)",
      "writeValueAsString(obj) — object → JSON string",
      "writeValue(file, obj) — write JSON to a file",
      "writeValueAsBytes(obj) — object → JSON bytes",
      "readValue(json, Class) — JSON string → object",
      "readValue(json, TypeReference) — JSON → generic type (List, Map)",
      "readTree(json) — parse JSON into a JsonNode tree (for unknown structure)",
      "writerWithDefaultPrettyPrinter() — pretty-print JSON",
      "@JsonProperty(\"name\") — map JSON key to Java field",
      "@JsonIgnore — skip a field",
      "@JsonFormat(pattern=\"yyyy-MM-dd\") — format dates",
      "@JsonCreator / @JsonProperty — custom constructor for deserialization",
    ],
    example: `import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.core.type.TypeReference;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        // Serialize
        Person ana = new Person("Ana", 19, "secret123");
        String json = mapper.writeValueAsString(ana);
        System.out.println("JSON: " + json);

        // Pretty print
        System.out.println("\\nPretty:");
        System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(ana));

        // Deserialize
        Person parsed = mapper.readValue(json, Person.class);
        System.out.println("\\nParsed: " + parsed.name + ", " + parsed.age);

        // Deserialize a list
        String listJson = "[{\\"name\\":\\"A\\",\\"age\\":1},{\\"name\\":\\"B\\",\\"age\\":2}]";
        List<Person> people = mapper.readValue(listJson, new TypeReference<List<Person>>(){});
        System.out.println("List size: " + people.size());

        // Parse unknown structure into a tree
        var tree = mapper.readTree("{\\"a\\":1,\\"b\\":[2,3]}");
        System.out.println("a = " + tree.get("a").asInt());
        System.out.println("b[0] = " + tree.get("b").get(0).asInt());
    }
}

class Person {
    @JsonProperty("full_name")
    public String name;
    public int age;
    @JsonIgnore
    public String password;

    public Person() {}  // Jackson needs a no-arg constructor
    public Person(String name, int age, String password) {
        this.name = name; this.age = age; this.password = password;
    }
}`,
    output: `JSON: {"full_name":"Ana","age":19}

Pretty:
{
  "full_name" : "Ana",
  "age" : 19
}

Parsed: Ana, 19
List size: 2
a = 1
b[0] = 2`,
    commonMistakes: [
      "Forgetting a no-arg constructor — Jackson can't deserialize without one. Add one or use @JsonCreator.",
      "Creating a new ObjectMapper for every conversion — it's expensive to construct and thread-safe after setup. Create once, reuse.",
      "Exposing sensitive fields (passwords, tokens) in JSON — annotate them with @JsonIgnore.",
      "Using java.util.Date — use java.time (LocalDate, Instant) with @JsonFormat for proper ISO-8601 formatting.",
    ],
    cpp: `// C++ JSON libraries: nlohmann/json (most popular), RapidJSON (fast),
// simdjson (fastest for parsing). nlohmann/json is the easiest:
#include <nlohmann/json.hpp>
nlohmann::json j;
j["name"] = "Ana"; j["age"] = 19;
std::string s = j.dump();  // {"name":"Ana","age":19}
auto p = nlohmann::json::parse(s);`,
    related: ["classes","objects","reflection","annotations","networking","records"],
  },

  /* ADVANCED */
  "junit-testing": {
    title: "JUnit Testing",
    category: "Advanced",
    beginnerExplanation: `JUnit is Java's most popular testing framework. It lets you write small test methods that verify your code works correctly — like a checklist you run automatically after every change. Imagine building a calculator: you write a test that says 'when I add 2 + 3, the result should be 5.' Every time you change the code, you run all the tests; if any test fails, you know you broke something, and the test name tells you exactly what.

A test is just a method annotated with @Test. Inside, you call your code and check the result with assertion methods: 'assertEquals(expected, actual)' checks they're equal, 'assertTrue(condition)' checks something is true, 'assertThrows(Exception.class, () -> { ... })' checks that a code block throws an exception. If an assertion fails, the test fails and JUnit shows you what went wrong.

Tests run in isolation. @BeforeEach methods run before each test (to set up fresh state — like creating a new empty list), and @AfterEach runs after (for cleanup). @BeforeAll runs once before all tests (for expensive setup like starting a database). This isolation means one test's failure doesn't affect others.

The big benefit: confidence to change code. Without tests, every change is scary — did I break something? With a good test suite, you change the code, run the tests, and if they all pass, you're confident. This is called regression testing — catching bugs before they reach users. Most professional Java projects have hundreds or thousands of tests that run automatically on every commit (continuous integration).`,
    description: "JUnit (currently JUnit 5 / Jupiter) is Java's standard testing framework. Annotate test methods with @Test, verify with assertions (assertEquals, assertTrue, assertThrows, assertAll). Lifecycle: @BeforeEach, @AfterEach, @BeforeAll, @AfterAll. Run with Maven Surefire, Gradle, or IDE. Use with Mockito for mocking and AssertJ for fluent assertions.",
    syntax: `import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    private Calculator calc;

    @BeforeAll
    static void setUpOnce() { /* runs once before all tests */ }

    @BeforeEach
    void setUp() {
        calc = new Calculator();  // fresh instance per test
    }

    @AfterEach
    void tearDown() { /* cleanup after each test */ }

    @Test
    void addReturnsSum() {
        assertEquals(5, calc.add(2, 3));
    }

    @Test
    void divideByZeroThrows() {
        assertThrows(ArithmeticException.class, () -> calc.divide(1, 0));
    }

    @Test
    void multipleAssertions() {
        assertAll("calculator",
            () -> assertEquals(4, calc.add(2, 2)),
            () -> assertEquals(0, calc.subtract(2, 2)),
            () -> assertEquals(6, calc.multiply(2, 3))
        );
    }

    @DisplayName("Empty list has size 0")
    @Test
    void emptyList() {
        assertEquals(0, new ArrayList<>().size());
    }

    @Disabled("until bug #123 is fixed")
    @Test
    void knownFailure() { /* skipped */ }
}`,
    parameters: [
      ["@Test", "Marks a method as a test method"],
      ["@BeforeEach", "Method runs before EACH test — for setup"],
      ["@AfterEach", "Method runs after EACH test — for cleanup"],
      ["@BeforeAll", "Runs once before all tests (must be static) — expensive setup"],
      ["@AfterAll", "Runs once after all tests (must be static) — final cleanup"],
      ["@DisplayName", "Custom name shown in test reports"],
      ["@Disabled", "Skip this test (with reason)"],
      ["@Nested", "Group related tests in a nested class"],
      ["@ParameterizedTest", "Run the same test with different inputs"],
    ],
    returnValue: "Tests don't return values — they pass or fail based on assertions. assertEquals throws AssertionError on mismatch, which JUnit catches and reports.",
    methods: [
      "@Test — mark a test method",
      "@BeforeEach / @AfterEach — per-test setup/teardown",
      "@BeforeAll / @AfterAll — once-per-class setup/teardown (static)",
      "@DisplayName(\"name\") — custom display name",
      "@Disabled(\"reason\") — skip a test",
      "@Nested — group tests in a nested class",
      "@ParameterizedTest + @ValueSource — run with multiple inputs",
      "assertEquals(expected, actual) — check equality",
      "assertTrue(cond) / assertFalse(cond) — check boolean",
      "assertNull(obj) / assertNotNull(obj) — check null",
      "assertThrows(Exception.class, () -> {...}) — check exception",
      "assertAll(\"group\", () -> ..., () -> ...) — run all, report all failures",
      "assertTimeout(Duration.ofMillis(100), () -> {...}) — check timing",
    ],
    example: `import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.junit.jupiter.params.provider.CsvSource;
import java.util.*;

class CalculatorTest {
    private Calculator calc;

    @BeforeEach
    void setUp() {
        calc = new Calculator();
    }

    @Test
    @DisplayName("2 + 3 = 5")
    void add() {
        assertEquals(5, calc.add(2, 3));
    }

    @Test
    @DisplayName("Division by zero throws")
    void divideByZero() {
        assertThrows(ArithmeticException.class, () -> calc.divide(1, 0));
    }

    @ParameterizedTest
    @CsvSource({"1, 1, 2", "2, 3, 5", "10, -5, 5", "0, 0, 0"})
    void addMultiple(int a, int b, int expected) {
        assertEquals(expected, calc.add(a, b));
    }

    @ParameterizedTest
    @ValueSource(ints = {2, 4, 6, 8, 100})
    void evenNumbersAreEven(int n) {
        assertTrue(n % 2 == 0);
    }

    @Test
    void listOperations() {
        List<String> list = new ArrayList<>(List.of("a", "b"));
        assertAll("list operations",
            () -> assertEquals(2, list.size()),
            () -> assertTrue(list.contains("a")),
            () -> assertEquals("a", list.get(0))
        );
    }

    @Nested
    @DisplayName("Edge cases")
    class EdgeCases {
        @Test void emptyString() { assertEquals("", ""); }
        @Test void maxValue() { assertEquals(Integer.MAX_VALUE, calc.add(Integer.MAX_VALUE, 0)); }
    }
}

class Calculator {
    int add(int a, int b) { return a + b; }
    int divide(int a, int b) { return a / b; }
}`,
    output: `# Running with Maven: mvn test
# Running with Gradle: gradle test
# Output (typical):
[INFO] Running CalculatorTest
[INFO] Tests run: 8, Failures: 0, Errors: 0, Skipped: 0
[INFO] BUILD SUCCESS

# With a failure:
[ERROR] Tests run: 8, Failures: 1, Errors: 0, Skipped: 0
[ERROR] CalculatorTest.add:25 expected: <5> but was: <4>
# → the assertEquals showed expected 5 but got 4`,
    commonMistakes: [
      "Using System.out.println for assertions — use assertEquals etc. so failures are reported clearly with expected vs. actual.",
      "Tests that depend on each other or on shared mutable state — tests must be independent and order-independent. Use @BeforeEach for fresh state.",
      "Catching exceptions in tests instead of asserting them — 'try { ... fail(); } catch (e) {}' is the old way; use 'assertThrows(Exception.class, () -> ...)' instead.",
      "Testing too much in one test — one test, one behavior. If a test has 10 assertions, split it. Makes failures easier to diagnose.",
    ],
    cpp: `// C++ equivalents: Google Test (gtest), Catch2, doctest
// #include <gtest/gtest.h>
// TEST(Calculator, Add) { EXPECT_EQ(5, calc.add(2, 3)); }
// Run with: ./test_binary or CTest`,
    related: ["methods","exception-handling","annotations","build-tools","debugging"],
  },

  /* ADVANCED */
  "build-tools": {
    title: "Build Tools (Maven & Gradle)",
    category: "Advanced",
    beginnerExplanation: `Build tools automate the boring parts of Java development: downloading dependencies, compiling code, running tests, packaging JARs, and deploying. Without a build tool, you'd manually download every library JAR, set up the classpath, run javac by hand, and pray you didn't miss a dependency. With a build tool, you write a small config file listing your dependencies, and one command does everything.

Maven is the older, more established tool (since 2002). It uses an XML file called pom.xml (Project Object Model) where you declare dependencies, plugins, and build steps. Maven is conventional — it expects your code in src/main/java, tests in src/test/java, and it has a fixed lifecycle (compile, test, package, install). 'Convention over configuration' makes Maven predictable but rigid.

Gradle is newer (2008) and more flexible. It uses a Groovy or Kotlin DSL (build.gradle or build.gradle.kts) instead of XML — much cleaner and programmable. Gradle is faster (incremental builds, build cache) and more flexible (custom tasks are easy). It's the default for Android projects and increasingly popular for backend Java.

Both download dependencies from repositories (Maven Central is the main one). When you add 'junit:junit:4.13' to your config, the tool downloads it automatically and puts it on the classpath. No more manual JAR downloading.

For new projects: Gradle (Kotlin DSL) is generally recommended — faster, cleaner syntax, more flexible. But Maven is fine too and has a massive ecosystem. Most enterprise Java still uses Maven. Pick one and learn it well.`,
    description: "Build tools automate dependency management, compilation, testing, and packaging. Maven (2002) uses pom.xml (XML, convention-over-configuration, fixed lifecycle). Gradle (2008) uses build.gradle (Groovy or Kotlin DSL, more flexible, faster incremental builds). Both download dependencies from Maven Central. Maven: 'mvn package'. Gradle: 'gradle build'. Gradle is default for Android.",
    syntax: `<!-- Maven: pom.xml -->
<project xmlns="http://maven.apache.org/POM/4.0.0">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>myapp</artifactId>
  <version>1.0.0</version>
  <packaging>jar</packaging>

  <dependencies>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.10.0</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>

// Gradle: build.gradle.kts (Kotlin DSL)
plugins {
    kotlin("jvm") version "1.9.0"
    application
}

dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter:5.10.0")
    implementation("com.google.code.gson:gson:2.10.1")
}

application {
    mainClass.set("com.example.Main")
}

tasks.test {
    useJUnitPlatform()
}`,
    parameters: [
      ["groupId / artifactId / version", "Maven coordinates — uniquely identify a library (GAV)"],
      ["dependency", "A library your project needs — Maven/Gradle downloads it automatically"],
      ["scope (Maven)", "compile (default), test, provided, runtime — when the dependency is needed"],
      ["implementation / testImplementation (Gradle)", "Configuration — where the dependency is used"],
      ["repository", "Where dependencies are downloaded from — Maven Central by default"],
    ],
    returnValue: "Build tools don't affect return values. They produce build artifacts (JAR/WAR files in target/ or build/libs/) and exit with 0 on success, non-zero on failure.",
    methods: [
      "mvn compile — compile main code",
      "mvn test — run tests",
      "mvn package — compile, test, and build JAR/WAR",
      "mvn install — package and install to local ~/.m2 repository",
      "mvn clean — remove target/ directory",
      "mvn clean install — full clean build",
      "gradle build — compile, test, package (all in one)",
      "gradle test — run tests",
      "gradle jar — build JAR",
      "gradle clean — remove build/ directory",
      "gradle run — run the application",
      "gradle dependencies — show dependency tree",
    ],
    example: `# === Maven project ===
# pom.xml declares dependencies and build config
# Common commands:
mvn clean package      # clean, compile, test, package → target/myapp-1.0.0.jar
mvn test               # run tests only
mvn dependency:tree    # show all dependencies (including transitive)

# === Gradle project ===
# build.gradle.kts declares dependencies and tasks
# Common commands:
gradle build           # compile, test, package → build/libs/myapp-1.0.0.jar
gradle test            # run tests
gradle dependencies    # show dependency tree
gradle run             # run the application

# === Project structure (both Maven and Gradle expect this) ===
# myapp/
#   pom.xml  OR  build.gradle.kts
#   src/
#     main/
#       java/com/example/Main.java    ← your source code
#       resources/                    ← config files, images
#     test/
#       java/com/example/MainTest.java ← your tests
#       resources/

# === Adding a dependency ===
# Maven (pom.xml):
#   <dependency>
#     <groupId>com.google.code.gson</groupId>
#     <artifactId>gson</artifactId>
#     <version>2.10.1</version>
#   </dependency>
#
# Gradle (build.gradle.kts):
#   implementation("com.google.code.gson:gson:2.10.1")
#
# Both download gson from Maven Central automatically.`,
    output: `# mvn clean package output:
[INFO] Building myapp 1.0.0
[INFO] --- maven-compiler-plugin:3.11.0:compile ---
[INFO] Compiling 5 source files
[INFO] --- maven-surefire-plugin:3.1.2:test ---
[INFO] Tests run: 12, Failures: 0, Errors: 0
[INFO] --- maven-jar-plugin:3.3.0:jar ---
[INFO] Building jar: target/myapp-1.0.0.jar
[INFO] BUILD SUCCESS

# gradle build output:
> Task :compileJava
> Task :processResources
> Task :classes
> Task :compileTestJava
> Task :test
> Task :jar
BUILD SUCCESSFUL in 3s
build/libs/myapp-1.0.0.jar`,
    commonMistakes: [
      "Committing the target/ or build/ directories to version control — they're build artifacts. Add them to .gitignore.",
      "Version conflicts — if two dependencies pull in different versions of the same transitive dependency, use 'mvn dependency:tree' or 'gradle dependencies' to find and resolve the conflict.",
      "Using SNAPSHOT versions in production — '1.0.0-SNAPSHOT' means 'unstable, can change' in Maven. Use release versions (no -SNAPSHOT) for production.",
      "Not pinning dependency versions — 'gson:2.10.+' in Gradle picks the latest 2.10.x, which can break unexpectedly. Pin exact versions.",
    ],
    cpp: `// C++ equivalents: CMake (most common), Make, Meson, Bazel
// CMakeLists.txt:
// cmake_minimum_required(VERSION 3.10)
// project(myapp)
// find_package(GTest REQUIRED)
// add_executable(myapp src/main.cpp)
// target_link_libraries(myapp GTest::GTest)
// C++ has no built-in package manager (vcpkg and Conan are popular third-party ones).`,
    related: ["jar-files","classpath","junit-testing","modules","java-basics"],
  },

  /* DATA STRUCTURES */
  "linked-list-impl": {
    title: "Linked List Implementation",
    category: "Data Structures",
    beginnerExplanation: `A linked list is a data structure where each item (a 'node') holds a value and a pointer to the next item — like a treasure hunt where each clue tells you where the next clue is. Unlike an array (where items sit side by side in memory), linked list nodes can be scattered anywhere in memory, connected only by their pointers.

The key operations: 'addFirst' puts a new node at the front (O(1) — just update the head pointer). 'addLast' walks to the end and appends (O(n) unless you keep a tail pointer). 'removeFirst' detaches the head (O(1)). Finding the i-th element is O(n) — you must walk from the head, following pointers, i times. This is the big tradeoff vs. arrays: linked lists are fast at the ends but slow at random access.

A doubly-linked list has two pointers per node: next and prev. This lets you walk both directions and delete a node in O(1) if you have a reference to it (no need to walk from the head to find the previous node). Java's java.util.LinkedList is doubly-linked.

Why implement your own? It's a classic interview question and teaches pointer manipulation. In real code, use java.util.LinkedList or ArrayDeque instead — they're tested and optimized. But understanding how they work is fundamental.`,
    description: "A linked list is a linear data structure where each node holds a value and a reference to the next node. Singly-linked: next only. Doubly-linked: next and prev. Operations: addFirst/removeFirst O(1), addLast O(n) (or O(1) with tail pointer), get(i) O(n). Java's LinkedList is doubly-linked. Implementing your own is a classic interview exercise.",
    syntax: `// Singly-linked list node
class Node<E> {
    E data;
    Node<E> next;
    Node(E data) { this.data = data; }
}

// Doubly-linked list node
class DNode<E> {
    E data;
    DNode<E> prev, next;
    DNode(E data) { this.data = data; }
}

// Basic singly-linked list
public class MyLinkedList<E> {
    private Node<E> head;
    private int size = 0;

    public void addFirst(E e) {
        Node<E> node = new Node<>(e);
        node.next = head;
        head = node;
        size++;
    }

    public E get(int i) {
        Node<E> cur = head;
        for (int j = 0; j < i; j++) cur = cur.next;
        return cur.data;
    }
}`,
    parameters: [
      ["head", "Pointer to the first node — null if list is empty"],
      ["tail", "Optional pointer to the last node — makes addLast O(1)"],
      ["next", "Pointer from a node to the next one (null for the last node)"],
      ["prev", "Doubly-linked only — pointer to the previous node"],
    ],
    returnValue: "get returns the element. addFirst/addLast return void (or boolean). remove returns the removed element. size returns int.",
    methods: [
      "addFirst(e) — insert at head, O(1)",
      "addLast(e) — insert at tail, O(n) or O(1) with tail pointer",
      "removeFirst() — remove head, O(1)",
      "get(index) — walk from head, O(n)",
      "size() — return element count",
      "isEmpty() — true if head == null",
      "contains(e) — walk and compare, O(n)",
    ],
    example: `public class Main {
    public static void main(String[] args) {
        MyLinkedList<String> list = new MyLinkedList<>();
        list.addFirst("c");
        list.addFirst("b");
        list.addFirst("a");
        System.out.println("First: " + list.get(0));
        System.out.println("Second: " + list.get(1));
        System.out.println("Size: " + list.size());
        System.out.println("Has b? " + list.contains("b"));
        System.out.println("Removed: " + list.removeFirst());
        System.out.println("Size now: " + list.size());
    }
}

class MyLinkedList<E> {
    private static class Node<E> {
        E data; Node<E> next;
        Node(E d) { data = d; }
    }
    private Node<E> head;
    private int size = 0;

    public void addFirst(E e) {
        Node<E> n = new Node<>(e);
        n.next = head;
        head = n;
        size++;
    }

    public E removeFirst() {
        if (head == null) throw new java.util.NoSuchElementException();
        E data = head.data;
        head = head.next;
        size--;
        return data;
    }

    public E get(int i) {
        Node<E> cur = head;
        for (int j = 0; j < i; j++) cur = cur.next;
        return cur.data;
    }

    public boolean contains(E e) {
        for (Node<E> cur = head; cur != null; cur = cur.next)
            if (cur.data.equals(e)) return true;
        return false;
    }

    public int size() { return size; }
}`,
    output: `First: a
Second: b
Size: 3
Has b? true
Removed: a
Size now: 2`,
    commonMistakes: [
      "Forgetting to update size — leads to incorrect size() reports.",
      "Losing the head pointer — if you do 'head = head.next' without saving the old head, you can't return the removed value.",
      "Not handling the empty list case — removeFirst on an empty list should throw or return null.",
      "Infinite loops — make sure your 'cur = cur.next' eventually reaches null. A common bug is a circular reference.",
    ],
    cpp: `template <typename E>
struct Node { E data; Node* next; };
// Same pointer-based implementation. C++ requires manual memory management
// (new/delete) or smart pointers (std::unique_ptr, std::shared_ptr).`,
    related: ["linkedlist","stack-impl","queue-impl","collections","arrays"],
  },

  /* DATA STRUCTURES */
  "stack-impl": {
    title: "Stack Implementation",
    category: "Data Structures",
    beginnerExplanation: `A stack is a LIFO (Last-In, First-Out) data structure — the last item you put in is the first one you take out, like a stack of plates where you add and remove from the top. The three core operations: 'push' (add to top), 'pop' (remove from top), and 'peek' (look at top without removing). All three are O(1) — constant time.

There are two common ways to implement a stack: with an array (or ArrayList) or with a linked list. The array version is simpler and usually faster (better cache locality): push is 'list.add(item)', pop is 'list.remove(list.size()-1)', peek is 'list.get(list.size()-1)'. The linked list version: push is addFirst, pop is removeFirst, peek is get(0).

Stacks are everywhere in computer science. The call stack (where method invocations live) is a stack — the most recent call returns first. Undo/redo features use stacks — each action is pushed, and undo pops the most recent. Browser back button uses a stack of visited pages. Parsing nested structures (brackets, HTML tags, expressions) uses a stack — push opening brackets, pop when you see closing brackets.

In Java, use ArrayDeque (not the legacy Stack class) for stacks: 'Deque<Integer> stack = new ArrayDeque<>(); stack.push(1); stack.pop();'. The Stack class extends Vector, which is synchronized and slow. ArrayDeque is faster and not synchronized (use Collections.synchronizedDeque if you need thread safety).`,
    description: "A stack is a LIFO (Last-In-First-Out) data structure with O(1) push, pop, and peek. Implement with an array (faster, cache-friendly) or a linked list. Java's ArrayDeque is the recommended Stack implementation (not the legacy synchronized Stack class). Used for: function call stacks, undo/redo, bracket matching, expression evaluation, DFS traversal.",
    syntax: `// Array-based stack
public class ArrayStack<E> {
    private E[] items;
    private int size = 0;

    public ArrayStack(int capacity) {
        items = (E[]) new Object[capacity];
    }
    public void push(E e) { items[size++] = e; }
    public E pop() { return items[--size]; }
    public E peek() { return items[size - 1]; }
    public boolean isEmpty() { return size == 0; }
}

// Linked-list-based stack
public class ListStack<E> {
    private Node<E> top;
    public void push(E e) {
        Node<E> n = new Node<>(e);
        n.next = top; top = n;
    }
    public E pop() {
        E data = top.data; top = top.next;
        return data;
    }
}`,
    parameters: [
      ["capacity", "For array-based — starting size (can resize when full)"],
      ["top", "For linked-list-based — pointer to the top node"],
    ],
    returnValue: "push returns void. pop returns the removed element (throws if empty). peek returns the top element without removing. isEmpty returns boolean.",
    methods: [
      "push(e) — add to top, O(1)",
      "pop() — remove and return top, O(1)",
      "peek() — look at top without removing, O(1)",
      "isEmpty() — true if size == 0",
      "size() — number of elements",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Using Java's built-in (recommended)
        Deque<String> stack = new ArrayDeque<>();
        stack.push("a");
        stack.push("b");
        stack.push("c");
        System.out.println("Top: " + stack.peek());   // c
        System.out.println("Pop: " + stack.pop());     // c
        System.out.println("Pop: " + stack.pop());     // b
        System.out.println("Size: " + stack.size());   // 1

        // Bracket matching — classic stack use case
        System.out.println("\\nBalanced? " + isBalanced("{[()]}"));   // true
        System.out.println("Balanced? " + isBalanced("{[(])}"));     // false
        System.out.println("Balanced? " + isBalanced("((()))"));     // true

        // Reverse a string using a stack
        String s = "hello";
        Deque<Character> chars = new ArrayDeque<>();
        for (char c : s.toCharArray()) chars.push(c);
        StringBuilder rev = new StringBuilder();
        while (!chars.isEmpty()) rev.append(chars.pop());
        System.out.println("\\nReversed: " + rev);     // olleh
    }

    static boolean isBalanced(String expr) {
        Deque<Character> stack = new ArrayDeque<>();
        for (char c : expr.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char open = stack.pop();
                if ((c == ')' && open != '(') ||
                    (c == ']' && open != '[') ||
                    (c == '}' && open != '{')) return false;
            }
        }
        return stack.isEmpty();
    }
}`,
    output: `Top: c
Pop: c
Pop: b
Size: 1

Balanced? true
Balanced? false
Balanced? true

Reversed: olleh`,
    commonMistakes: [
      "Popping from an empty stack — throws NoSuchElementException or returns null. Always check isEmpty() or handle the exception.",
      "Using the legacy java.util.Stack class — it's synchronized (slow) and extends Vector (bad design). Use ArrayDeque instead.",
      "Confusing push (adds to top/front) with add (adds to end/back) — they go to opposite ends of a Deque.",
    ],
    cpp: `#include <stack>
std::stack<int> s;
s.push(1);
s.top();   // peek (C++ calls it top, not peek)
s.pop();   // remove (returns void in C++, unlike Java)
s.size();
s.empty();`,
    related: ["stack-deque","queue-impl","linked-list-impl","collections","arrays"],
  },

  /* DATA STRUCTURES */
  "queue-impl": {
    title: "Queue Implementation",
    category: "Data Structures",
    beginnerExplanation: `A queue is a FIFO (First-In, First-Out) data structure — the first item you put in is the first one you take out, like a line at a store. The core operations: 'enqueue' (add to the back), 'dequeue' (remove from the front), and 'peek' (look at the front without removing). All should be O(1) for a good implementation.

There are two common implementations. An array-based 'circular queue' uses a fixed-size array with two pointers (head and tail) that wrap around — when you reach the end of the array, you continue at the beginning. This avoids shifting elements and keeps everything O(1). The catch: a fixed capacity (you must resize to grow). A linked-list-based queue keeps head and tail pointers — enqueue adds to tail, dequeue removes from head, both O(1) with no capacity limit.

Queues are essential for: task scheduling (a printer queue processes documents in order), breadth-first search (BFS) in graphs and trees uses a queue to visit nodes level by level, message passing between threads (producer-consumer pattern), buffering (network packets arrive faster than they can be processed).

In Java, use ArrayDeque for a simple queue: 'Deque<String> q = new ArrayDeque<>(); q.offer("a"); q.poll();'. For producer-consumer across threads, use a BlockingQueue like LinkedBlockingQueue or ArrayBlockingQueue — 'put' blocks if full, 'take' blocks if empty. For priority-based ordering (not FIFO), use PriorityQueue.`,
    description: "A queue is a FIFO (First-In-First-Out) data structure with O(1) enqueue, dequeue, and peek. Implementations: circular array (fixed capacity, wrap-around pointers) or linked list (head and tail pointers). Java's ArrayDeque is recommended for simple queues. For thread-safe producer-consumer, use BlockingQueue (LinkedBlockingQueue, ArrayBlockingQueue). For priority ordering, use PriorityQueue.",
    syntax: `// Array-based circular queue
public class CircularQueue<E> {
    private E[] items;
    private int head = 0, tail = 0, size = 0;

    public CircularQueue(int capacity) {
        items = (E[]) new Object[capacity];
    }
    public void enqueue(E e) {
        items[tail] = e;
        tail = (tail + 1) % items.length;
        size++;
    }
    public E dequeue() {
        E e = items[head];
        items[head] = null;
        head = (head + 1) % items.length;
        size--;
        return e;
    }
}

// Linked-list-based queue
public class LinkedQueue<E> {
    private Node<E> head, tail;
    public void enqueue(E e) {
        Node<E> n = new Node<>(e);
        if (tail == null) head = tail = n;
        else { tail.next = n; tail = n; }
    }
    public E dequeue() {
        E e = head.data; head = head.next;
        if (head == null) tail = null;
        return e;
    }
}`,
    parameters: [
      ["head", "Index/pointer to the front — where dequeue reads"],
      ["tail", "Index/pointer to the back — where enqueue writes"],
      ["capacity", "For array-based — maximum size (must resize to grow)"],
    ],
    returnValue: "enqueue/offer returns void or boolean. dequeue/poll returns the element (or null if empty). peek returns the front without removing.",
    methods: [
      "enqueue(e) / offer(e) — add to back, O(1)",
      "dequeue() / poll() — remove from front, O(1)",
      "peek() — look at front without removing, O(1)",
      "isEmpty() — true if size == 0",
      "size() — number of elements",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Java's built-in queue (recommended)
        Deque<String> queue = new ArrayDeque<>();
        queue.offer("Alice");
        queue.offer("Bob");
        queue.offer("Carol");
        System.out.println("Front: " + queue.peek());    // Alice
        System.out.println("Served: " + queue.poll());   // Alice
        System.out.println("Served: " + queue.poll());   // Bob
        System.out.println("Size: " + queue.size());     // 1

        // BFS using a queue — level-order tree traversal
        TreeNode root = new TreeNode(1,
            new TreeNode(2, new TreeNode(4), null),
            new TreeNode(3, null, new TreeNode(5)));
        System.out.print("\\nBFS: ");
        bfs(root);
        System.out.println();

        // Producer-consumer with BlockingQueue
        BlockingQueue<String> bq = new ArrayBlockingQueue<>(3);
        new Thread(() -> {
            try { for (int i = 0; i < 5; i++) bq.put("item-" + i); }
            catch (InterruptedException e) {}
        }).start();
        new Thread(() -> {
            try { for (int i = 0; i < 5; i++) {
                System.out.println("Consumed: " + bq.take());
            }} catch (InterruptedException e) {}
        }).start();
    }

    static void bfs(TreeNode root) {
        if (root == null) return;
        Deque<TreeNode> q = new ArrayDeque<>();
        q.offer(root);
        while (!q.isEmpty()) {
            TreeNode n = q.poll();
            System.out.print(n.val + " ");
            if (n.left != null) q.offer(n.left);
            if (n.right != null) q.offer(n.right);
        }
    }
}

class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int v) { val = v; }
    TreeNode(int v, TreeNode l, TreeNode r) { val = v; left = l; right = r; }
}`,
    output: `Front: Alice
Served: Alice
Served: Bob
Size: 1

BFS: 1 2 3 4 5 
Consumed: item-0
Consumed: item-1
Consumed: item-2
Consumed: item-3
Consumed: item-4`,
    commonMistakes: [
      "Using a regular ArrayList as a queue — remove(0) is O(n) because all elements shift. Use ArrayDeque instead.",
      "Not handling the empty queue — poll() returns null, remove() throws. Pick the right method for your case.",
      "For array-based circular queues: off-by-one in the wrap-around. The classic fix is to waste one slot (capacity + 1 array) so head == tail means empty, not full.",
    ],
    cpp: `#include <queue>
std::queue<int> q;
q.push(1);     // enqueue
q.front();     // peek
q.pop();       // dequeue (returns void in C++)
q.size();
q.empty();`,
    related: ["stack-impl","stack-deque","priority-queue","linked-list-impl","collections"],
  },

  /* DATA STRUCTURES */
  "binary-trees": {
    title: "Binary Trees",
    category: "Data Structures",
    beginnerExplanation: `A binary tree is a data structure where each node has at most two children (left and right), like a family tree where each person has at most two children. The top node is the 'root'; nodes with no children are 'leaves.' Trees model hierarchical data: file systems (folders contain folders), HTML/XML (tags contain tags), organizational charts, decision trees, and more.

The key terms: 'root' (top), 'leaf' (no children), 'parent' (a node above), 'child' (a node below), 'depth' (distance from root), 'height' (longest path from root to leaf). A 'balanced' tree has roughly equal left and right subtrees — this keeps operations fast (O(log n)). An unbalanced tree (e.g., everything on the right) degrades to a linked list (O(n)).

There are three classic ways to traverse (visit every node): 'in-order' (left, root, right — visits in sorted order for a BST), 'pre-order' (root, left, right — good for copying a tree), and 'post-order' (left, right, root — good for deleting a tree). All three are naturally recursive: visit the current node, then recurse on children. There's also 'level-order' (BFS) which uses a queue instead of recursion.

Binary trees are the foundation for: binary search trees (BSTs — sorted data), heaps (priority queues), AVL/red-black trees (self-balancing BSTs), Huffman trees (compression), and expression trees (compilers). Understanding trees is essential for any serious programming.`,
    description: "A binary tree is a hierarchical data structure where each node has at most two children (left and right). Key terms: root, leaf, parent, child, depth, height. Traversals: in-order (left-root-right), pre-order (root-left-right), post-order (left-right-root), level-order (BFS with a queue). Balanced trees keep operations O(log n); unbalanced degrade to O(n). Foundation for BSTs, heaps, AVL/red-black trees.",
    syntax: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

// Build a tree:
//       1
//      / \\
//     2   3
//    / \\
//   4   5
TreeNode root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Recursive traversals
void inOrder(TreeNode n) {
    if (n == null) return;
    inOrder(n.left);
    System.out.print(n.val + " ");
    inOrder(n.right);
}`,
    parameters: [
      ["root", "The top node — entry point for all operations"],
      ["leaf", "A node with no children"],
      ["depth", "Distance from the root (root has depth 0)"],
      ["height", "Longest path from a node to a leaf (leaf has height 0)"],
    ],
    returnValue: "Traversal methods return void (they visit each node). Search/insert/delete return the node or boolean. Height/depth return int.",
    methods: [
      "in-order traversal — left, root, right (sorted order for BST)",
      "pre-order traversal — root, left, right (good for copying)",
      "post-order traversal — left, right, root (good for deleting)",
      "level-order traversal — BFS using a queue",
      "height(node) — longest path to a leaf",
      "depth(node) — distance from root",
      "size(node) — count of nodes",
      "contains(value) — search for a value",
    ],
    example: `import java.util.*;

public class Main {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int v) { val = v; }
    }

    // In-order: left → root → right
    static void inOrder(TreeNode n) {
        if (n == null) return;
        inOrder(n.left);
        System.out.print(n.val + " ");
        inOrder(n.right);
    }

    // Pre-order: root → left → right
    static void preOrder(TreeNode n) {
        if (n == null) return;
        System.out.print(n.val + " ");
        preOrder(n.left);
        preOrder(n.right);
    }

    // Post-order: left → right → root
    static void postOrder(TreeNode n) {
        if (n == null) return;
        postOrder(n.left);
        postOrder(n.right);
        System.out.print(n.val + " ");
    }

    // Level-order (BFS) — uses a queue
    static void levelOrder(TreeNode root) {
        if (root == null) return;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            TreeNode n = q.poll();
            System.out.print(n.val + " ");
            if (n.left != null) q.offer(n.left);
            if (n.right != null) q.offer(n.right);
        }
    }

    static int height(TreeNode n) {
        if (n == null) return -1;
        return 1 + Math.max(height(n.left), height(n.right));
    }

    static int size(TreeNode n) {
        if (n == null) return 0;
        return 1 + size(n.left) + size(n.right);
    }

    public static void main(String[] args) {
        //       1
        //      / \\
        //     2   3
        //    / \\
        //   4   5
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);

        System.out.print("In-order: ");
        inOrder(root);      // 4 2 5 1 3
        System.out.print("\\nPre-order: ");
        preOrder(root);     // 1 2 4 5 3
        System.out.print("\\nPost-order: ");
        postOrder(root);    // 4 5 2 3 1
        System.out.print("\\nLevel-order: ");
        levelOrder(root);   // 1 2 3 4 5
        System.out.println("\\nHeight: " + height(root));  // 2
        System.out.println("Size: " + size(root));          // 5
    }
}`,
    output: `In-order: 4 2 5 1 3 
Pre-order: 1 2 4 5 3 
Post-order: 4 5 2 3 1 
Level-order: 1 2 3 4 5 
Height: 2
Size: 5`,
    commonMistakes: [
      "Forgetting the base case (if n == null return) — causes NullPointerException or infinite recursion.",
      "Confusing height and depth — height is from a node DOWN to the deepest leaf; depth is from a node UP to the root.",
      "Building an unbalanced tree (e.g., inserting sorted data into a BST) — degrades to O(n). Use a self-balancing tree (AVL, red-black) or shuffle input.",
    ],
    cpp: `struct TreeNode {
    int val;
    TreeNode* left; TreeNode* right;
    TreeNode(int v) : val(v), left(nullptr), right(nullptr) {}
};
// Same recursive traversals. C++ requires manual delete or smart pointers.`,
    related: ["bst","heaps","recursion","collections","graphs"],
  },

  /* DATA STRUCTURES */
  "bst": {
    title: "Binary Search Tree (BST)",
    category: "Data Structures",
    beginnerExplanation: `A Binary Search Tree is a binary tree with one special rule: for every node, all values in its LEFT subtree are smaller, and all values in its RIGHT subtree are larger. This simple rule makes searching fast — at each node, you decide left or right and eliminate half the tree, like looking up a word in a dictionary (you don't read every page; you jump to the right section).

The big operations: 'search(value)' starts at the root, goes left if value < node, right if value > node, and returns when found or hits null (not found) — O(log n) if balanced. 'insert(value)' does the same search and adds the new node where the search falls off. 'delete(value)' is trickier: if the node has no children, just remove it; if one child, replace with the child; if two children, find the in-order successor (smallest in right subtree), copy its value, and delete the successor.

The catch: if you insert sorted data (1, 2, 3, 4, 5), the tree becomes a linked list (every node only has a right child), and operations degrade to O(n). To fix this, use a self-balancing BST like AVL or red-black tree — they rotate nodes during insertion to keep the tree balanced. Java's TreeMap and TreeSet use red-black trees internally.

BSTs are used for: ordered data with fast search/insert/delete (dictionaries, indexes), range queries ('find all values between 10 and 20'), and as the foundation for balanced trees. For most real code, use TreeMap/TreeSet instead of implementing your own.`,
    description: "A Binary Search Tree (BST) is a binary tree where for each node: left subtree values < node < right subtree values. This enables O(log n) search, insert, and delete (if balanced). Without balancing, sorted insertions degrade to O(n). Self-balancing variants (AVL, red-black) maintain O(log n). Java's TreeMap/TreeSet use red-black trees. In-order traversal yields sorted order.",
    syntax: `class BSTNode {
    int val;
    BSTNode left, right;
    BSTNode(int v) { val = v; }
}

class BST {
    BSTNode root;

    // Search — O(log n) if balanced
    boolean contains(int target) {
        BSTNode cur = root;
        while (cur != null) {
            if (target == cur.val) return true;
            cur = target < cur.val ? cur.left : cur.right;
        }
        return false;
    }

    // Insert — O(log n) if balanced
    void insert(int val) {
        root = insert(root, val);
    }
    BSTNode insert(BSTNode node, int val) {
        if (node == null) return new BSTNode(val);
        if (val < node.val) node.left = insert(node.left, val);
        else if (val > node.val) node.right = insert(node.right, val);
        return node;
    }
}`,
    parameters: [
      ["root", "The top node — entry point for all operations"],
      ["balance factor", "Difference in height between left and right subtrees — must stay small for O(log n)"],
    ],
    returnValue: "contains returns boolean. insert returns void (or the new root in recursive implementations). In-order traversal yields values in sorted order.",
    methods: [
      "insert(val) — add a value, O(log n) if balanced",
      "contains(val) / search(val) — check existence, O(log n) if balanced",
      "delete(val) — remove a value (3 cases: leaf, one child, two children)",
      "in-order traversal — yields sorted order",
      "min() — leftmost node",
      "max() — rightmost node",
      "rangeSearch(low, high) — all values in [low, high]",
    ],
    example: `import java.util.*;

public class Main {
    static class BSTNode {
        int val; BSTNode left, right;
        BSTNode(int v) { val = v; }
    }

    static BSTNode insert(BSTNode node, int val) {
        if (node == null) return new BSTNode(val);
        if (val < node.val) node.left = insert(node.left, val);
        else if (val > node.val) node.right = insert(node.right, val);
        return node;
    }

    static boolean contains(BSTNode node, int target) {
        if (node == null) return false;
        if (target == node.val) return true;
        return target < node.val
            ? contains(node.left, target)
            : contains(node.right, target);
    }

    static void inOrder(BSTNode node, List<Integer> out) {
        if (node == null) return;
        inOrder(node.left, out);
        out.add(node.val);
        inOrder(node.right, out);
    }

    static int min(BSTNode node) {
        while (node.left != null) node = node.left;
        return node.val;
    }

    public static void main(String[] args) {
        BSTNode root = null;
        int[] values = {50, 30, 70, 20, 40, 60, 80, 10};
        for (int v : values) root = insert(root, v);

        //       50
        //      /  \\
        //     30   70
        //    / \\  / \\
        //   20 40 60 80
        //  /
        // 10

        System.out.println("Contains 40? " + contains(root, 40));   // true
        System.out.println("Contains 55? " + contains(root, 55));   // false

        List<Integer> sorted = new ArrayList<>();
        inOrder(root, sorted);
        System.out.println("In-order (sorted): " + sorted);
        System.out.println("Min: " + min(root));                     // 10

        // Using Java's built-in BST (TreeSet)
        TreeSet<Integer> set = new TreeSet<>();
        for (int v : values) set.add(v);
        System.out.println("\\nTreeSet: " + set);
        System.out.println("Subset [30, 60): " + set.subSet(30, 60));
        System.out.println("Higher than 40: " + set.higher(40));    // 50
    }
}`,
    output: `Contains 40? true
Contains 55? false
In-order (sorted): [10, 20, 30, 40, 50, 60, 70, 80]
Min: 10

TreeSet: [10, 20, 30, 40, 50, 60, 70, 80]
Subset [30, 60): [30, 40, 50]
Higher than 40: 50`,
    commonMistakes: [
      "Inserting sorted data — creates a degenerate (linked-list) tree with O(n) operations. Use a balanced BST (TreeMap/TreeSet) or shuffle before inserting.",
      "Forgetting to handle the two-children case in delete — find the in-order successor (min of right subtree), copy its value, delete the successor.",
      "Modifying the tree during in-order traversal — can cause subtle bugs. Collect results into a list instead.",
    ],
    cpp: `// C++ std::set and std::map are red-black trees (self-balancing BSTs):
#include <set>
std::set<int> s;
s.insert(5);
s.count(5);    // 1 if present
s.lower_bound(3);  // ceiling
s.upper_bound(3);  // higher`,
    related: ["binary-trees","treemap","treeset","heaps","collections"],
  },

  /* DATA STRUCTURES */
  "hash-table-impl": {
    title: "Hash Table Implementation",
    category: "Data Structures",
    beginnerExplanation: `A hash table is a data structure that stores key-value pairs and finds values incredibly fast — O(1) on average. The magic is a 'hash function': a math function that takes a key and produces an array index. When you put('Ana', 19), the hash function converts 'Ana' to (say) index 7, and the value 19 goes in slot 7 of the array. When you get('Ana'), the same hash function gives 7, and you read slot 7 directly — no searching.

The problem: two different keys might hash to the same index (a 'collision'). There are two solutions. 'Chaining' puts a linked list at each array slot — collisions just append to the list. 'Open addressing' (linear probing, etc.) finds the next empty slot when there's a collision. Java's HashMap uses chaining with a tree fallback (red-black tree when a bucket has too many entries).

A good hash function is fast and spreads keys uniformly across the array — if all keys hash to the same slot, you get a long linked list and O(n) performance. Java's String.hashCode() is well-designed. When the table gets too full (above the 'load factor', default 0.75), the array is doubled and all entries are rehashed into the new array.

Why implement your own? To understand how it works. In real code, use HashMap — it's highly optimized. But knowing the internals helps you debug performance issues (bad hashCode causing collisions) and design custom keys correctly.`,
    description: "A hash table stores key-value pairs with O(1) average lookup. A hash function maps keys to array indices. Collisions are handled by chaining (linked list per bucket) or open addressing (probe for next slot). Java's HashMap uses chaining with red-black tree fallback. Load factor (default 0.75) triggers resize. A good hashCode() spreads keys uniformly.",
    syntax: `// Simple hash table with chaining
public class SimpleHashMap<K, V> {
    private static class Entry<K, V> {
        K key; V value; Entry<K, V> next;
        Entry(K k, V v) { key = k; value = v; }
    }

    private Entry<K, V>[] buckets;
    private int size = 0;

    @SuppressWarnings("unchecked")
    public SimpleHashMap(int capacity) {
        buckets = (Entry<K, V>[]) new Entry[capacity];
    }

    private int index(K key) {
        return Math.abs(key.hashCode() % buckets.length);
    }

    public void put(K key, V value) {
        int i = index(key);
        for (Entry<K, V> e = buckets[i]; e != null; e = e.next) {
            if (e.key.equals(key)) { e.value = value; return; }
        }
        Entry<K, V> entry = new Entry<>(key, value);
        entry.next = buckets[i];
        buckets[i] = entry;
        size++;
    }

    public V get(K key) {
        int i = index(key);
        for (Entry<K, V> e = buckets[i]; e != null; e = e.next) {
            if (e.key.equals(key)) return e.value;
        }
        return null;
    }
}`,
    parameters: [
      ["capacity", "Number of buckets (array length) — larger means fewer collisions"],
      ["load factor", "size / capacity — when it exceeds 0.75, resize"],
      ["hash function", "Maps a key to an int — must be consistent (same key → same hash)"],
    ],
    returnValue: "put returns the old value (or null). get returns the value (or null if not found). containsKey returns boolean. size returns int.",
    methods: [
      "put(key, value) — add or update, returns old value",
      "get(key) — retrieve value, null if not found",
      "remove(key) — remove entry",
      "containsKey(key) — true if key exists",
      "size() — number of entries",
      "index(key) — internal: hash → bucket index",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Using Java's built-in (recommended)
        Map<String, Integer> map = new HashMap<>();
        map.put("Ana", 19);
        map.put("Bob", 21);
        map.put("Cy", 19);
        System.out.println("Ana: " + map.get("Ana"));
        System.out.println("Bob: " + map.get("Bob"));
        System.out.println("Unknown: " + map.get("Zoe"));
        System.out.println("Size: " + map.size());

        // Custom hash table demo
        SimpleHashMap<String, Integer> custom = new SimpleHashMap<>(10);
        custom.put("apple", 5);
        custom.put("banana", 3);
        custom.put("cherry", 8);
        System.out.println("\\nCustom - apple: " + custom.get("apple"));
        System.out.println("Custom - cherry: " + custom.get("cherry"));
        System.out.println("Custom - missing: " + custom.get("grape"));

        // The importance of hashCode
        System.out.println("\\n"Ana".hashCode() = " + "Ana".hashCode());
        System.out.println(""ana".hashCode() = " + "ana".hashCode());
        // Different case → different hash → different bucket
    }
}

class SimpleHashMap<K, V> {
    private static class Entry<K, V> {
        K key; V value; Entry<K, V> next;
        Entry(K k, V v) { key = k; value = v; }
    }
    private Entry<K, V>[] buckets;
    private int size = 0;

    @SuppressWarnings("unchecked")
    SimpleHashMap(int capacity) { buckets = (Entry<K, V>[]) new Entry[capacity]; }

    private int index(K key) { return Math.abs(key.hashCode() % buckets.length); }

    public void put(K key, V value) {
        int i = index(key);
        for (Entry<K, V> e = buckets[i]; e != null; e = e.next) {
            if (e.key.equals(key)) { e.value = value; return; }
        }
        Entry<K, V> entry = new Entry<>(key, value);
        entry.next = buckets[i];
        buckets[i] = entry;
        size++;
    }

    public V get(K key) {
        int i = index(key);
        for (Entry<K, V> e = buckets[i]; e != null; e = e.next) {
            if (e.key.equals(key)) return e.value;
        }
        return null;
    }

    public int size() { return size; }
}`,
    output: `Ana: 19
Bob: 21
Unknown: null
Size: 3

Custom - apple: 5
Custom - cherry: 8
Custom - missing: null

"Ana".hashCode() = 65604
"ana".hashCode() = 97299
`,
    commonMistakes: [
      "Not overriding hashCode when you override equals — equal objects end up in different buckets, breaking HashMap. The contract: equal objects must have equal hash codes.",
      "Using mutable keys and changing them after insertion — the entry becomes unfindable (it's in the wrong bucket).",
      "A bad hashCode (e.g., return 0 for everything) — all keys land in one bucket, degrading to O(n).",
      "Not resizing when load factor gets high — performance degrades as chains get long.",
    ],
    cpp: `#include <unordered_map>
std::unordered_map<std::string, int> map;
map["Ana"] = 19;
int a = map["Ana"];
// std::map is the sorted (red-black tree) version.`,
    related: ["hashmap","object-class","collections","arrays","wrapper-classes"],
  },

  /* DATA STRUCTURES */
  "heaps": {
    title: "Heaps",
    category: "Data Structures",
    beginnerExplanation: `A heap is a special binary tree where the parent is always smaller (min-heap) or larger (max-heap) than its children. Think of it like a corporate hierarchy where the CEO (smallest or largest value) is at the top, and every manager is smaller/larger than their direct reports. The result: the most extreme value is always at the root, instantly accessible.

Heaps are usually stored in an array (not with pointers) because they're 'complete' — every level is full except possibly the last, which fills left to right. This lets you find a node's parent and children with simple math: parent of index i is (i-1)/2, children are 2i+1 and 2i+2. No pointers needed — very memory-efficient.

The key operations: 'insert' adds at the end, then 'bubbles up' (swaps with parent until the heap property is restored) — O(log n). 'extractMin' (or max) removes the root, moves the last element to the root, then 'sifts down' (swaps with smaller child until restored) — O(log n). 'peek' reads the root in O(1).

Heaps power priority queues — when you need 'the next most important item' repeatedly (hospital triage, task scheduling, Dijkstra's shortest path). Java's PriorityQueue is a min-heap. For a max-heap, pass Collections.reverseOrder(). Heaps are also used for: finding the K largest/smallest elements in a stream (keep a heap of size K), median of a stream (two heaps — one for lower half, one for upper), and heap sort (insert all, extract all — O(n log n)).`,
    description: "A heap is a complete binary tree where each parent is smaller (min-heap) or larger (max-heap) than its children. Stored in an array (parent of i is (i-1)/2, children are 2i+1 and 2i+2). Operations: insert (bubble up, O(log n)), extractMin/max (sift down, O(log n)), peek (O(1)). Java's PriorityQueue is a min-heap. Used for: priority queues, K-largest/smallest, Dijkstra, heapsort.",
    syntax: `// Min-heap stored in an array
public class MinHeap {
    private int[] heap;
    private int size = 0;

    public MinHeap(int capacity) { heap = new int[capacity]; }

    public void insert(int val) {
        heap[size] = val;
        bubbleUp(size);
        size++;
    }

    public int extractMin() {
        int min = heap[0];
        heap[0] = heap[--size];
        siftDown(0);
        return min;
    }

    public int peek() { return heap[0]; }

    private void bubbleUp(int i) {
        while (i > 0 && heap[i] < heap[(i - 1) / 2]) {
            swap(i, (i - 1) / 2);
            i = (i - 1) / 2;
        }
    }

    private void siftDown(int i) {
        while (true) {
            int left = 2 * i + 1, right = 2 * i + 2, smallest = i;
            if (left < size && heap[left] < heap[smallest]) smallest = left;
            if (right < size && heap[right] < heap[smallest]) smallest = right;
            if (smallest == i) break;
            swap(i, smallest);
            i = smallest;
        }
    }

    private void swap(int a, int b) { int t = heap[a]; heap[a] = heap[b]; heap[b] = t; }
}`,
    parameters: [
      ["capacity", "Maximum size of the heap array"],
      ["min-heap", "Parent ≤ children — root is the minimum"],
      ["max-heap", "Parent ≥ children — root is the maximum"],
    ],
    returnValue: "peek returns the root without removing. extractMin/extractMax returns and removes the root. insert returns void. size returns int.",
    methods: [
      "insert(val) — add and bubble up, O(log n)",
      "extractMin() / extractMax() — remove root and sift down, O(log n)",
      "peek() — read the root, O(1)",
      "size() — number of elements",
      "isEmpty() — true if size == 0",
      "heapify(array) — build a heap from an unordered array, O(n)",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Using Java's PriorityQueue (min-heap by default)
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        minHeap.offer(5);
        minHeap.offer(1);
        minHeap.offer(3);
        minHeap.offer(8);
        minHeap.offer(2);

        System.out.println("Peek (min): " + minHeap.peek());  // 1
        System.out.print("Extract in order: ");
        while (!minHeap.isEmpty()) System.out.print(minHeap.poll() + " ");
        System.out.println();

        // Max-heap — use reverseOrder
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        maxHeap.addAll(List.of(5, 1, 3, 8, 2));
        System.out.print("Max-heap order: ");
        while (!maxHeap.isEmpty()) System.out.print(maxHeap.poll() + " ");
        System.out.println();

        // Top 3 largest from a stream
        int[] data = {7, 2, 9, 1, 5, 8, 3, 6, 4};
        PriorityQueue<Integer> top3 = new PriorityQueue<>(); // min-heap of size 3
        for (int n : data) {
            top3.offer(n);
            if (top3.size() > 3) top3.poll();  // evict smallest
        }
        System.out.println("Top 3: " + top3);

        // Heap sort — insert all, extract all
        int[] arr = {4, 10, 3, 5, 1, 8, 2};
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int n : arr) pq.offer(n);
        System.out.print("Heap sorted: ");
        while (!pq.isEmpty()) System.out.print(pq.poll() + " ");
        System.out.println();
    }
}`,
    output: `Peek (min): 1
Extract in order: 1 2 3 5 8 
Max-heap order: 8 5 3 2 1 
Top 3: [7, 8, 9]
Heap sorted: 1 2 3 4 5 8 10 `,
    commonMistakes: [
      "Confusing min-heap (default in Java) with max-heap — for a max-heap, pass Collections.reverseOrder() to the constructor.",
      "Iterating with a for-each and expecting sorted order — the iterator does NOT return sorted. Use poll() in a loop.",
      "Forgetting that a heap is NOT a sorted structure — only the root is guaranteed to be the min/max. The rest is partially ordered.",
    ],
    cpp: `#include <queue>
std::priority_queue<int> pq;        // max-heap (default in C++)
std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
pq.push(5); pq.top(); pq.pop();`,
    related: ["priority-queue","binary-trees","sorting-algorithms","collections","arrays"],
  },

  /* DATA STRUCTURES */
  "graphs": {
    title: "Graphs",
    category: "Data Structures",
    beginnerExplanation: `A graph is a data structure that represents connections between things. It has 'nodes' (also called vertices — the things) and 'edges' (the connections between them). Think of a social network: each person is a node, and each friendship is an edge connecting two nodes. Or a map: each city is a node, each road is an edge. Graphs are everywhere — the internet is a graph of web pages (nodes) and links (edges), your GPS uses a graph of roads, and recommendation systems use graphs of users and products.

There are two main types. A 'directed graph' has edges with direction (A follows B, but B might not follow A back) — like Twitter. An 'undirected graph' has symmetric edges (if A is friends with B, B is friends with A) — like Facebook. Edges can also have 'weights' (the distance between cities, the cost of a flight).

There are two common ways to store a graph. An 'adjacency list' stores, for each node, a list of its neighbors — memory-efficient for sparse graphs (few edges). An 'adjacency matrix' is a 2D array where matrix[i][j] = 1 if there's an edge from i to j — fast lookups but uses O(V²) memory. Most real graphs are sparse, so adjacency lists are more common.

The two classic graph traversal algorithms: 'BFS' (Breadth-First Search) uses a queue, visits nodes level by level — good for finding the shortest path in an unweighted graph. 'DFS' (Depth-First Search) uses a stack (or recursion), goes as deep as possible before backtracking — good for detecting cycles, topological sorting, and exploring mazes. Dijkstra's algorithm finds the shortest path in a weighted graph; A* adds heuristics for faster pathfinding.`,
    description: "A graph is a set of vertices (nodes) connected by edges. Types: directed/undirected, weighted/unweighted. Representations: adjacency list (sparse graphs, memory-efficient) or adjacency matrix (dense graphs, O(V²) memory). Traversals: BFS (queue, shortest path in unweighted) and DFS (stack/recursion, cycle detection, topological sort). Algorithms: Dijkstra (shortest path weighted), A* (heuristic pathfinding).",
    syntax: `// Adjacency list representation
import java.util.*;

class Graph {
    private Map<Integer, List<Integer>> adj = new HashMap<>();

    void addEdge(int from, int to) {
        adj.computeIfAbsent(from, k -> new ArrayList<>()).add(to);
        adj.computeIfAbsent(to, k -> new ArrayList<>());  // for undirected
    }

    // BFS — shortest path in unweighted graph
    void bfs(int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        visited.add(start);
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            for (int neighbor : adj.getOrDefault(node, List.of())) {
                if (visited.add(neighbor)) queue.offer(neighbor);
            }
        }
    }

    // DFS — recursive
    void dfs(int start, Set<Integer> visited) {
        if (!visited.add(start)) return;
        System.out.print(start + " ");
        for (int n : adj.getOrDefault(start, List.of())) dfs(n, visited);
    }
}`,
    parameters: [
      ["V", "Number of vertices (nodes)"],
      ["E", "Number of edges"],
      ["directed", "Edges have direction (one-way)"],
      ["undirected", "Edges are bidirectional"],
      ["weighted", "Edges have a cost/weight"],
    ],
    returnValue: "Traversal methods print or collect visited nodes. BFS finds shortest path in unweighted graphs. DFS detects cycles and does topological sort.",
    methods: [
      "addEdge(from, to) — add a connection",
      "addEdge(from, to, weight) — add a weighted edge",
      "bfs(start) — breadth-first traversal (queue, shortest path)",
      "dfs(start) — depth-first traversal (recursion or stack)",
      "shortestPath(src, dst) — BFS for unweighted, Dijkstra for weighted",
      "hasCycle() — DFS-based cycle detection",
      "topologicalSort() — DFS-based ordering (DAG only)",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Graph:
        //   1 → 2 → 3
        //   |   |
        //   v   v
        //   4   5
        Map<Integer, List<Integer>> adj = new HashMap<>();
        addEdge(adj, 1, 2);
        addEdge(adj, 1, 4);
        addEdge(adj, 2, 3);
        addEdge(adj, 2, 5);

        // BFS from 1
        System.out.print("BFS from 1: ");
        bfs(adj, 1);
        System.out.println();

        // DFS from 1
        System.out.print("DFS from 1: ");
        dfs(adj, 1, new HashSet<>());
        System.out.println();

        // Shortest path (BFS) from 1 to 3
        System.out.println("Shortest path 1→3: " + bfsShortestPath(adj, 1, 3));
    }

    static void addEdge(Map<Integer, List<Integer>> adj, int from, int to) {
        adj.computeIfAbsent(from, k -> new ArrayList<>()).add(to);
        adj.computeIfAbsent(to, k -> new ArrayList<>());
    }

    static void bfs(Map<Integer, List<Integer>> adj, int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> q = new LinkedList<>();
        q.offer(start); visited.add(start);
        while (!q.isEmpty()) {
            int node = q.poll();
            System.out.print(node + " ");
            for (int n : adj.getOrDefault(node, List.of())) {
                if (visited.add(n)) q.offer(n);
            }
        }
    }

    static void dfs(Map<Integer, List<Integer>> adj, int node, Set<Integer> visited) {
        if (!visited.add(node)) return;
        System.out.print(node + " ");
        for (int n : adj.getOrDefault(node, List.of())) dfs(adj, n, visited);
    }

    static List<Integer> bfsShortestPath(Map<Integer, List<Integer>> adj, int src, int dst) {
        Map<Integer, Integer> parent = new HashMap<>();
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> q = new LinkedList<>();
        q.offer(src); visited.add(src); parent.put(src, -1);
        while (!q.isEmpty()) {
            int node = q.poll();
            if (node == dst) break;
            for (int n : adj.getOrDefault(node, List.of())) {
                if (visited.add(n)) { parent.put(n, node); q.offer(n); }
            }
        }
        if (!parent.containsKey(dst)) return List.of();
        List<Integer> path = new ArrayList<>();
        for (int at = dst; at != -1; at = parent.get(at)) path.add(at);
        Collections.reverse(path);
        return path;
    }
}`,
    output: `BFS from 1: 1 2 4 3 5 
DFS from 1: 1 2 3 5 4 
Shortest path 1→3: [1, 2, 3]`,
    commonMistakes: [
      "Forgetting to mark nodes as visited — causes infinite loops in cyclic graphs.",
      "Using DFS when you need the shortest path — DFS doesn't find shortest paths; use BFS (unweighted) or Dijkstra (weighted).",
      "Confusing directed and undirected — adding an edge A→B in an undirected graph means also adding B→A.",
      "Stack overflow with recursive DFS on large graphs — use an explicit stack or increase the stack size.",
    ],
    cpp: `// C++ graph with adjacency list:
#include <vector>
std::vector<std::vector<int>> adj(n);
adj[0].push_back(1);  // edge 0 → 1
// BFS with std::queue, DFS with std::stack or recursion.
// Boost.Graph is a comprehensive C++ graph library.`,
    related: ["binary-trees","queue-impl","stack-impl","collections","recursion"],
  },

  /* ALGORITHMS */
  "sorting-algorithms": {
    title: "Sorting Algorithms",
    category: "Algorithms",
    beginnerExplanation: `Sorting is putting things in order — numbers from smallest to largest, names alphabetically, dates chronologically. It sounds simple, but there are many ways to do it, each with different tradeoffs. Why does this matter? Sorted data is much faster to search (binary search on sorted data is O(log n) vs O(n) on unsorted), and many algorithms require sorted input.

The main algorithms to know:

'Bubble Sort' — repeatedly swap adjacent out-of-order pairs. Simple but O(n²) — fine for tiny lists, terrible for big ones.

'Insertion Sort' — build a sorted section one element at a time, inserting each new element in the right spot. O(n²) worst case, but O(n) for nearly-sorted data. Good for small or almost-sorted lists.

'Merge Sort' — split in half, sort each half, merge. O(n log n) always, stable (equal elements keep their order), but uses O(n) extra memory. Reliable and predictable.

'Quick Sort' — pick a pivot, partition (smaller left, larger right), recurse. O(n log n) average, O(n²) worst case (rare with good pivot choice). In-place (O(log n) stack space). Usually the fastest in practice.

'Heap Sort' — build a heap, repeatedly extract the min/max. O(n log n) always, in-place, but not stable and slower than quicksort in practice.

In real Java code, just use Arrays.sort() (which uses a tuned quicksort for primitives and merge sort for objects) or Collections.sort(). But understanding the algorithms helps you make smart choices and ace interviews.`,
    description: "Sorting algorithms put elements in order. Main types: Bubble (O(n²), simple), Insertion (O(n²), good for small/nearly-sorted), Merge (O(n log n), stable, O(n) space), Quick (O(n log n) avg, O(n²) worst, in-place, fast in practice), Heap (O(n log n), in-place, not stable). Java's Arrays.sort uses dual-pivot quicksort (primitives) and TimSort (objects). Use Arrays.sort/Collections.sort in production.",
    syntax: `// Use Java's built-in (recommended for production)
int[] arr = {5, 2, 8, 1, 9, 3};
Arrays.sort(arr);                          // [1, 2, 3, 5, 8, 9]

List<String> list = List.of("banana", "apple", "cherry");
Collections.sort(list);                    // [apple, banana, cherry]

list.sort(Comparator.reverseOrder());      // descending

// Custom sort by a key
list.sort(Comparator.comparingInt(String::length));  // by length`,
    parameters: [
      ["n", "Number of elements to sort"],
      ["stable", "Equal elements keep their original relative order"],
      ["in-place", "Uses O(1) extra memory (no copy of the array)"],
      ["comparator", "Optional function defining custom ordering"],
    ],
    returnValue: "Java's sort methods return void (they sort in place). The sorted array/list is the same object, just reordered.",
    methods: [
      "Bubble Sort — O(n²), swap adjacent pairs, simple",
      "Insertion Sort — O(n²), insert each into sorted prefix, good for small/nearly-sorted",
      "Selection Sort — O(n²), find min, swap to front",
      "Merge Sort — O(n log n), divide-and-conquer, stable, O(n) space",
      "Quick Sort — O(n log n) avg, partition around pivot, in-place",
      "Heap Sort — O(n log n), build heap and extract, in-place",
      "Arrays.sort(arr) — Java's built-in (dual-pivot quicksort for primitives)",
      "Arrays.sort(arr, from, to) — sort a range",
      "Arrays.sort(objects) — TimSort (stable merge sort)",
      "Collections.sort(list) — sort a List in place",
      "list.sort(comparator) — sort with a custom comparator",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 9, 3, 7, 4, 6};

        // Bubble sort (educational)
        int[] bubble = arr.clone();
        bubbleSort(bubble);
        System.out.println("Bubble: " + Arrays.toString(bubble));

        // Quick sort (educational)
        int[] quick = arr.clone();
        quickSort(quick, 0, quick.length - 1);
        System.out.println("Quick:  " + Arrays.toString(quick));

        // Merge sort (educational)
        int[] merged = mergeSort(arr.clone());
        System.out.println("Merge:  " + Arrays.toString(merged));

        // Built-in (recommended)
        int[] builtin = arr.clone();
        Arrays.sort(builtin);
        System.out.println("Built:  " + Arrays.toString(builtin));

        // Sort objects with a custom comparator
        String[] names = {"Ana", "Bob", "Cy", "Dave", "Eve"};
        Arrays.sort(names, Comparator.comparingInt(String::length));
        System.out.println("By length: " + Arrays.toString(names));
    }

    static void bubbleSort(int[] a) {
        for (int i = 0; i < a.length; i++)
            for (int j = 0; j < a.length - 1 - i; j++)
                if (a[j] > a[j+1]) { int t = a[j]; a[j] = a[j+1]; a[j+1] = t; }
    }

    static void quickSort(int[] a, int lo, int hi) {
        if (lo >= hi) return;
        int pivot = a[hi], i = lo;
        for (int j = lo; j < hi; j++) {
            if (a[j] < pivot) { int t = a[i]; a[i] = a[j]; a[j] = t; i++; }
        }
        int t = a[i]; a[i] = a[hi]; a[hi] = t;
        quickSort(a, lo, i - 1);
        quickSort(a, i + 1, hi);
    }

    static int[] mergeSort(int[] a) {
        if (a.length <= 1) return a;
        int mid = a.length / 2;
        int[] left = mergeSort(Arrays.copyOfRange(a, 0, mid));
        int[] right = mergeSort(Arrays.copyOfRange(a, mid, a.length));
        int[] merged = new int[a.length];
        int i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length)
            merged[k++] = left[i] <= right[j] ? left[i++] : right[j++];
        while (i < left.length) merged[k++] = left[i++];
        while (j < right.length) merged[k++] = right[j++];
        return merged;
    }
}`,
    output: `Bubble: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Quick:  [1, 2, 3, 4, 5, 6, 7, 8, 9]
Merge:  [1, 2, 3, 4, 5, 6, 7, 8, 9]
Built:  [1, 2, 3, 4, 5, 6, 7, 8, 9]
By length: [Cy, Ana, Bob, Dave, Eve]`,
    commonMistakes: [
      "Writing your own sort for production — use Arrays.sort/Collections.sort. They're highly optimized and battle-tested.",
      "Forgetting that Arrays.sort on primitives is NOT stable (uses quicksort) — if stability matters, sort objects (uses TimSort) or use a stable comparator.",
      "Bad pivot choice in quicksort (always first or last) — O(n²) on sorted input. Use median-of-three or random pivot.",
      "Comparing objects with == in a custom sort — use .compareTo() or a Comparator.",
    ],
    cpp: `#include <algorithm>
std::sort(vec.begin(), vec.end());           // introsort (quicksort + heapsort)
// std::stable_sort preserves order of equal elements
// C++ also has std::partial_sort, std::nth_element for special cases.`,
    related: ["searching-algorithms","big-o-notation","arrays","collections","comparable-comparator","heaps"],
  },

  /* ALGORITHMS */
  "searching-algorithms": {
    title: "Searching Algorithms",
    category: "Algorithms",
    beginnerExplanation: `Searching is finding a specific item in a collection. There are two fundamental approaches: linear search (check each item one by one) and binary search (repeatedly halve a SORTED collection). The difference in speed is dramatic — linear search on a million items takes up to a million comparisons; binary search takes about 20.

'Linear Search' is the simplest: start at the beginning, check each element until you find the target or reach the end. Works on any collection (sorted or not). O(n) — if the target is at the end or not present, you check every element. Use it for small or unsorted collections.

'Binary Search' is dramatically faster but requires the collection to be SORTED first. You compare the target to the middle element; if the target is smaller, search the left half; if larger, search the right half; repeat. Each step halves the search space, so O(log n) — for a million items, about 20 comparisons. This is why we sort databases and indexes.

In Java, use Arrays.binarySearch(sortedArray, target) for arrays and Collections.binarySearch(sortedList, target) for lists. Both require the collection to be sorted. If found, they return the index; if not found, they return a negative number (-(insertionPoint) - 1) — useful for finding where to insert.

Beyond searching, binary search is the foundation for: finding insertion points, range queries ('count elements between 10 and 20'), square root estimation, and many optimization problems where you binary-search on the answer.`,
    description: "Searching finds an element in a collection. Linear search: O(n), works on any collection. Binary search: O(log n), requires sorted collection, halves search space each step. Java: Arrays.binarySearch(sortedArr, key) and Collections.binarySearch(sortedList, key). Binary search is also the basis for finding insertion points, range queries, and many optimization problems.",
    syntax: `// Linear search — O(n)
int index = -1;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) { index = i; break; }
}

// Binary search — O(log n), array MUST be sorted
Arrays.sort(arr);  // sort first!
int idx = Arrays.binarySearch(arr, target);
// idx >= 0: found at index idx
// idx < 0: not found, insertion point is (-idx - 1)

// Binary search on a List
int idx = Collections.binarySearch(sortedList, target);

// Custom binary search implementation
int binarySearch(int[] a, int target) {
    int lo = 0, hi = a.length - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;  // avoids overflow
        if (a[mid] == target) return mid;
        else if (a[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}`,
    parameters: [
      ["target", "The value to search for"],
      ["sorted", "Binary search requires the collection to be sorted first"],
      ["comparator", "Optional — for searching with a custom ordering"],
    ],
    returnValue: "Linear search returns the index (or -1). Arrays.binarySearch returns the index if found, or (-(insertion point) - 1) if not found. The insertion point is where you'd insert the target to keep the array sorted.",
    methods: [
      "Linear search — O(n), check each element",
      "Arrays.binarySearch(arr, key) — O(log n), array must be sorted",
      "Arrays.binarySearch(arr, from, to, key) — search a range",
      "Collections.binarySearch(list, key) — O(log n), list must be sorted",
      "Collections.binarySearch(list, key, comparator) — with custom ordering",
      "list.indexOf(obj) — linear search on a List",
      "list.contains(obj) — boolean version of indexOf",
      "set.contains(obj) — O(1) for HashSet, O(log n) for TreeSet",
      "map.containsKey(key) — O(1) for HashMap, O(log n) for TreeMap",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 9, 3, 7, 4, 6};

        // Linear search (works on unsorted)
        int target = 8;
        int linearIdx = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) { linearIdx = i; break; }
        }
        System.out.println("Linear search for 8: index " + linearIdx);

        // Binary search (requires sorted)
        Arrays.sort(arr);
        System.out.println("Sorted: " + Arrays.toString(arr));
        int binIdx = Arrays.binarySearch(arr, 8);
        System.out.println("Binary search for 8: index " + binIdx);

        int notFound = Arrays.binarySearch(arr, 10);
        System.out.println("Binary search for 10: " + notFound);
        System.out.println("  Insertion point: " + (-(notFound + 1)));

        // Binary search on a List
        List<Integer> list = new ArrayList<>(List.of(1, 3, 5, 7, 9, 11));
        int listIdx = Collections.binarySearch(list, 7);
        System.out.println("\\nList search for 7: index " + listIdx);

        // Custom binary search implementation
        int[] sorted = {1, 3, 5, 7, 9, 11, 13, 15};
        System.out.println("Custom search for 11: " + binarySearch(sorted, 11));
        System.out.println("Custom search for 8: " + binarySearch(sorted, 8));

        // Count elements in a range [5, 12]
        int lo = Arrays.binarySearch(arr, 5);
        int hi = Arrays.binarySearch(arr, 12);
        if (hi < 0) hi = -(hi + 1);
        System.out.println("\\nElements in [5, 12): " + (hi - (lo < 0 ? -(lo+1) : lo)));
    }

    static int binarySearch(int[] a, int target) {
        int lo = 0, hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] == target) return mid;
            else if (a[mid] < target) lo = mid + 1;
            else hi = mid - 1;
        }
        return -1;
    }
}`,
    output: `Linear search for 8: index 2
Sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Binary search for 8: index 7
Binary search for 10: -10
  Insertion point: 9

List search for 7: index 3
Custom search for 11: 5
Custom search for 8: -1

Elements in [5, 12): 5`,
    commonMistakes: [
      "Calling binarySearch on an UNSORTED array — returns garbage (wrong index). Sort first.",
      "Computing mid as (lo + hi) / 2 — overflows for large arrays. Use lo + (hi - lo) / 2.",
      "Forgetting that binarySearch returns a negative number (not -1) when not found — the formula is (-(insertionPoint) - 1).",
      "Using linear search (indexOf, contains) on a large sorted list when binary search would be O(log n).",
    ],
    cpp: `#include <algorithm>
// std::find (linear): auto it = std::find(vec.begin(), vec.end(), 8);
// std::binary_search (boolean): bool found = std::binary_search(v.begin(), v.end(), 8);
// std::lower_bound: first position where 8 could be inserted
// std::upper_bound: first position after 8`,
    related: ["sorting-algorithms","big-o-notation","arrays","collections","treeset","treemap"],
  },

  /* ALGORITHMS */
  "big-o-notation": {
    title: "Big-O Notation",
    category: "Algorithms",
    beginnerExplanation: `Big-O notation describes how an algorithm's speed or memory usage grows as the input gets bigger. It's a way to answer 'will this still be fast with a million users instead of a hundred?' without actually testing it. Think of it like fuel efficiency for code — miles per gallon tells you how far you can go; Big-O tells you how your algorithm scales.

The key insight: Big-O ignores constants and focuses on the GROWTH RATE. O(2n) and O(100n) are both 'O(n)' because they grow linearly — doubling the input roughly doubles the time, regardless of the constant. What matters is the SHAPE of the growth curve.

The common Big-O values, from fastest to slowest:

• O(1) — constant time. The input size doesn't matter. Example: array access by index, HashMap.get.
• O(log n) — logarithmic. Doubling the input adds one step. Example: binary search.
• O(n) — linear. Double the input, double the time. Example: linear search, looping through an array.
• O(n log n) — 'linearithmic'. Slightly worse than linear. Example: merge sort, quicksort.
• O(n²) — quadratic. Double the input, quadruple the time. Example: bubble sort, nested loops.
• O(2^n) — exponential. Adding one element DOUBLES the time. Example: naive Fibonacci recursion.
• O(n!) — factorial. Astronomically slow. Example: generating all permutations.

Why does this matter? An O(n²) algorithm that takes 1 second for 1,000 items takes 1,000 seconds (17 minutes) for 10,000 items and 11 days for 100,000. An O(n log n) algorithm handles 100,000 in under a second. Choosing the right algorithm is the difference between 'works' and 'never finishes.'`,
    description: "Big-O notation describes how an algorithm's time or space requirements grow as input size increases. Common complexities (best to worst): O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic, O(2^n) exponential, O(n!) factorial. Big-O ignores constants and focuses on growth rate. It helps predict whether an algorithm scales to large inputs.",
    syntax: `// Examples by complexity

// O(1) — constant time
int first = arr[0];
map.get(key);

// O(log n) — logarithmic (halves each step)
while (lo <= hi) {
    int mid = (lo + hi) / 2;
    if (arr[mid] == target) return mid;
    // ... halve the search space
}

// O(n) — linear (one pass)
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
}

// O(n log n) — divide and conquer (merge sort, quicksort)
sort(arr);  // Arrays.sort is O(n log n)

// O(n²) — nested loops
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        // ...

// O(2^n) — exponential (naive Fibonacci)
int fib(int n) {
    if (n < 2) return n;
    return fib(n-1) + fib(n-2);  // two recursive calls
}`,
    parameters: [
      ["n", "The input size (number of elements, characters, etc.)"],
      ["time complexity", "How runtime grows with n"],
      ["space complexity", "How memory grows with n"],
      ["best / average / worst case", "Different scenarios — usually we cite worst case"],
    ],
    returnValue: "Big-O is a descriptive notation, not a return value. It describes the growth rate of an algorithm's time or space usage.",
    methods: [
      "O(1) — constant: array access, hash lookup",
      "O(log n) — logarithmic: binary search, balanced tree operations",
      "O(n) — linear: single loop, linear search",
      "O(n log n) — linearithmic: merge sort, quicksort, heap sort",
      "O(n²) — quadratic: bubble sort, nested loops, matrix operations",
      "O(2^n) — exponential: naive recursion (Fibonacci, subsets)",
      "O(n!) — factorial: permutations, traveling salesman (brute force)",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Demonstrate the difference O(n) vs O(n²) vs O(log n)

        int[] sizes = {1000, 10000, 100000};
        for (int n : sizes) {
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = i;

            // O(1) — array access
            long start = System.nanoTime();
            int x = arr[n / 2];
            long o1 = System.nanoTime() - start;

            // O(log n) — binary search
            start = System.nanoTime();
            Arrays.binarySearch(arr, n - 1);
            long ologn = System.nanoTime() - start;

            // O(n) — linear search
            start = System.nanoTime();
            for (int i = 0; i < n; i++) if (arr[i] == n - 1) break;
            long on = System.nanoTime() - start;

            // O(n log n) — sort
            int[] copy = arr.clone();
            java.util.Random r = new Random();
            for (int i = 0; i < n; i++) copy[i] = r.nextInt();
            start = System.nanoTime();
            Arrays.sort(copy);
            long onlogn = System.nanoTime() - start;

            System.out.printf("n=%,d: O(1)=%d ns, O(log n)=%d ns, O(n)=%,d ns, O(n log n)=%,d ns%n",
                n, o1, ologn, on, onlogn);
        }

        // O(n²) — only for small n
        int n = 1000;
        long start = System.nanoTime();
        int count = 0;
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                count++;
        System.out.printf("O(n²) for n=%d: %,d ns (just counting)%n", n, System.nanoTime() - start);
    }
}`,
    output: `n=1,000: O(1)=200 ns, O(log n)=5,000 ns, O(n)=12,000 ns, O(n log n)=280,000 ns
n=10,000: O(1)=100 ns, O(log n)=6,100 ns, O(n)=45,000 ns, O(n log n)=890,000 ns
n=100,000: O(1)=100 ns, O(log n)=8,200 ns, O(n)=520,000 ns, O(n log n)=11,000,000 ns
O(n²) for n=1000: 2,800,000 ns (just counting)`,
    commonMistakes: [
      "Ignoring nested loops — two nested loops over n is O(n²), not O(2n).",
      "Forgetting that sorting is O(n log n) — if you sort then binary-search, the sort dominates.",
      "Assuming O(n²) is always bad — for small n (under 50), the constant factors can make O(n²) faster than O(n log n).",
      "Confusing best case and worst case — quicksort is O(n log n) average but O(n²) worst case. Always know which you're citing.",
    ],
    cpp: `// Big-O is language-independent — the same algorithms have the same
// complexity in C++. C++ standard library algorithms:
// std::sort — O(n log n)
// std::find — O(n)
// std::binary_search — O(log n)
// std::lower_bound — O(log n)`,
    related: ["sorting-algorithms","searching-algorithms","recursion","arrays","collections","hashmap"],
  },

  /* ALGORITHMS */
  "dynamic-programming": {
    title: "Dynamic Programming",
    category: "Algorithms",
    beginnerExplanation: `Dynamic Programming (DP) is a technique for solving problems by breaking them into smaller subproblems, solving each once, and remembering the answers — so you never solve the same subproblem twice. It's like doing a jigsaw puzzle: instead of trying every piece for every spot (brute force), you sort pieces by color first (subproblems), and when you find where a piece goes, you remember it.

The classic example is Fibonacci numbers. The naive recursive approach 'fib(n) = fib(n-1) + fib(n-2)' recalculates fib(5) many times — exponential slowdown. DP fixes this by storing computed values in an array: compute fib(0), fib(1), fib(2)... up to fib(n), each in O(1) using the two previous stored values. O(n) instead of O(2^n).

There are two approaches. 'Top-down' (memoization) — write the recursive solution but cache results in a Map or array. When fib(5) is called again, return the cached value. 'Bottom-up' (tabulation) — start from the base cases and build up to the answer iteratively, filling a table. Both give the same result; bottom-up is usually faster (no recursion overhead), top-down is easier to write.

DP applies when a problem has two properties: 'optimal substructure' (the optimal solution contains optimal solutions to subproblems) and 'overlapping subproblems' (the same subproblems are solved repeatedly). Classic DP problems: knapsack (maximize value with weight limit), longest common subsequence, edit distance, coin change (fewest coins to make a sum), matrix chain multiplication. If you're preparing for coding interviews, DP is essential — it shows up frequently.`,
    description: "Dynamic Programming (DP) solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation. Two approaches: top-down (memoization — cache recursive results) and bottom-up (tabulation — iteratively build a table). Requires optimal substructure and overlapping subproblems. Classic problems: Fibonacci, knapsack, LCS, edit distance, coin change. Essential for coding interviews.",
    syntax: `// Top-down (memoization) — cache recursive results
Map<Integer, Integer> memo = new HashMap<>();
int fib(int n) {
    if (n < 2) return n;
    if (memo.containsKey(n)) return memo.get(n);
    int result = fib(n - 1) + fib(n - 2);
    memo.put(n, result);
    return result;
}

// Bottom-up (tabulation) — build from base cases
int fib(int n) {
    if (n < 2) return n;
    int[] dp = new int[n + 1];
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Space-optimized — only keep last two
int fib(int n) {
    if (n < 2) return n;
    int prev = 0, cur = 1;
    for (int i = 2; i <= n; i++) {
        int next = prev + cur;
        prev = cur; cur = next;
    }
    return cur;
}`,
    parameters: [
      ["memoization", "Top-down: cache results in a Map/array as you recurse"],
      ["tabulation", "Bottom-up: iteratively fill a table from base cases"],
      ["state", "The set of variables that define a subproblem (e.g., index i)"],
      ["transition", "How to compute a state from smaller states (dp[i] = dp[i-1] + dp[i-2])"],
    ],
    returnValue: "DP functions return the optimal value (max, min, or count) for the given input. The memo/table stores intermediate results.",
    methods: [
      "Memoization (top-down) — recursive with a cache",
      "Tabulation (bottom-up) — iterative table filling",
      "Space optimization — keep only the last few states instead of the whole table",
      "Identify the state — what variables define a subproblem?",
      "Identify the transition — how do states relate?",
      "Identify base cases — the smallest subproblems with known answers",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Fibonacci — compare approaches
        System.out.println("fib(10) memo: " + fibMemo(10));
        System.out.println("fib(10) tabu: " + fibTabu(10));

        // Coin change — fewest coins to make a sum
        int[] coins = {1, 5, 10, 25};
        System.out.println("\\nCoins to make 37: " + coinChange(coins, 37));

        // Longest Common Subsequence
        System.out.println("LCS(ABCBDAB, BDCAB): " + lcs("ABCBDAB", "BDCAB"));
    }

    // Fibonacci — memoization (top-down)
    static Map<Integer, Integer> memo = new HashMap<>();
    static int fibMemo(int n) {
        if (n < 2) return n;
        if (memo.containsKey(n)) return memo.get(n);
        int r = fibMemo(n - 1) + fibMemo(n - 2);
        memo.put(n, r);
        return r;
    }

    // Fibonacci — tabulation (bottom-up)
    static int fibTabu(int n) {
        if (n < 2) return n;
        int[] dp = new int[n + 1];
        dp[0] = 0; dp[1] = 1;
        for (int i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
        return dp[n];
    }

    // Coin change — minimum coins to make 'amount'
    static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }

    // Longest Common Subsequence
    static int lcs(String a, String b) {
        int m = a.length(), n = b.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (a.charAt(i-1) == b.charAt(j-1)) dp[i][j] = dp[i-1][j-1] + 1;
                else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
        return dp[m][n];
    }
}`,
    output: `fib(10) memo: 55
fib(10) tabu: 55

Coins to make 37: 4
LCS(ABCBDAB, BDCAB): 4`,
    commonMistakes: [
      "Forgetting the base cases — dp[0] must be set correctly or the whole table is wrong.",
      "Using the wrong iteration order — for bottom-up, you must compute smaller states before larger ones that depend on them.",
      "Not recognizing a problem as DP — if you see 'minimum/maximum/count' with overlapping choices, suspect DP.",
      "Using O(n) space when O(1) would do — after filling dp[i], you often only need dp[i-1] and dp[i-2], not the whole array.",
    ],
    cpp: `// Same approach in C++. std::unordered_map for memoization,
// std::vector for tabulation.
int fib(int n) {
    if (n < 2) return n;
    std::vector<int> dp(n + 1);
    dp[0] = 0; dp[1] = 1;
    for (int i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}`,
    related: ["recursion","big-o-notation","arrays","collections","sorting-algorithms"],
  },

  /* BEST PRACTICES */
  "solid-principles": {
    title: "SOLID Principles",
    category: "Best Practices",
    beginnerExplanation: `SOLID is a set of five design principles that help you write maintainable, flexible, object-oriented code. Think of them as guidelines for keeping your codebase from turning into a tangled mess as it grows. Each letter in SOLID stands for one principle.

**S — Single Responsibility:** A class should have one reason to change. Don't make a 'God class' that does everything (database, email, logging, business logic). Split it: a UserDAO for database, an EmailService for email, etc. Each class has one job.

**O — Open/Closed:** Open for extension, closed for modification. You should be able to add new behavior WITHOUT changing existing code. Use interfaces and polymorphism: to add a new payment method, add a new PaymentStrategy class — don't edit the existing PaymentProcessor.

**L — Liskov Substitution:** If you replace a parent class with a subclass, the program should still work correctly. A Square shouldn't extend Rectangle if Square breaks Rectangle's width/height independence. Subclasses must fulfill the parent's contract — no surprises.

**I — Interface Segregation:** Don't force classes to implement methods they don't need. Instead of one fat 'Worker' interface with work(), eat(), sleep(), split into 'Workable', 'Eatable', 'Sleepable'. A Robot implements Workable but not Eatable.

**D — Dependency Inversion:** Depend on abstractions (interfaces), not concretions (classes). A PaymentProcessor should depend on a PaymentGateway interface, not a specific StripeGateway class. This makes it easy to swap implementations (for testing, for new providers).

These aren't laws — they're guidelines. Apply them where they reduce complexity, not religiously everywhere.`,
    description: "SOLID is five OOP design principles: Single Responsibility (one reason to change), Open/Closed (extend, don't modify), Liskov Substitution (subtypes must honor parent contracts), Interface Segregation (small, focused interfaces), Dependency Inversion (depend on abstractions). Applying SOLID leads to maintainable, flexible, testable code.",
    syntax: `// S — Single Responsibility
class UserDAO { /* only database operations */ }
class EmailService { /* only email sending */ }
class UserValidator { /* only validation */ }

// O — Open/Closed (use polymorphism, not if-else)
interface PaymentStrategy { void pay(double amount); }
class StripePayment implements PaymentStrategy { ... }
class PayPalPayment implements PaymentStrategy { ... }
// Adding a new method = new class, no changes to existing code

// L — Liskov Substitution
class Bird { virtual void fly() {} }
class Sparrow extends Bird { void fly() { /* flies */ } }
// DON'T: class Penguin extends Bird { void fly() { throw Unsupported(); } }

// I — Interface Segregation
interface Workable { void work(); }
interface Eatable { void eat(); }
class Robot implements Workable { void work() {} }  // no eat()

// D — Dependency Inversion
class PaymentProcessor {
    private final PaymentGateway gateway;  // interface, not concrete
    PaymentProcessor(PaymentGateway g) { gateway = g; }
}`,
    parameters: [
      ["SRP", "Single Responsibility Principle — one reason to change"],
      ["OCP", "Open/Closed Principle — open for extension, closed for modification"],
      ["LSP", "Liskov Substitution Principle — subtypes must be substitutable"],
      ["ISP", "Interface Segregation Principle — small, focused interfaces"],
      ["DIP", "Dependency Inversion Principle — depend on abstractions"],
    ],
    returnValue: "SOLID is a design philosophy, not code — it doesn't affect return values. It affects how you structure classes and interfaces.",
    methods: [
      "Single Responsibility — split classes that do too much",
      "Open/Closed — use interfaces and polymorphism to add behavior without editing",
      "Liskov Substitution — subclasses must honor the parent's contract",
      "Interface Segregation — many small interfaces beat one fat interface",
      "Dependency Inversion — depend on interfaces, inject concretions",
    ],
    example: `// BEFORE: violates SOLID
class BadOrderService {
    void processOrder(Order o) {
        // Database logic (violates SRP)
        saveToDatabase(o);
        // Email logic (violates SRP)
        sendEmail(o);
        // Payment logic with hardcoded Stripe (violates OCP and DIP)
        if (o.paymentMethod.equals("stripe")) chargeStripe(o);
        else if (o.paymentMethod.equals("paypal")) chargePaypal(o);
    }
}

// AFTER: follows SOLID
interface PaymentGateway { boolean charge(Order o); }
class StripeGateway implements PaymentGateway { public boolean charge(Order o) { /* stripe */ return true; } }
class PayPalGateway implements PaymentGateway { public boolean charge(Order o) { /* paypal */ return true; } }

interface OrderRepository { void save(Order o); }
interface EmailService { void sendOrderConfirmation(Order o); }

class GoodOrderService {
    private final OrderRepository repo;       // DIP: depend on interface
    private final EmailService email;
    private final PaymentGateway payment;     // DIP + OCP: swap implementations

    // Dependency injection — pass concrete impls in
    GoodOrderService(OrderRepository r, EmailService e, PaymentGateway p) {
        repo = r; email = e; payment = p;
    }

    void processOrder(Order o) {
        repo.save(o);                          // SRP: only orchestration here
        payment.charge(o);                     // OCP: new payment = new class, no edit
        email.sendOrderConfirmation(o);        // SRP: email handled elsewhere
    }
}

public class Main {
    public static void main(String[] args) {
        // Inject dependencies (DI)
        GoodOrderService svc = new GoodOrderService(
            new DatabaseOrderRepository(),      // could swap for a fake in tests
            new SmtpEmailService(),
            new StripeGateway()                 // swap for PayPalGateway anytime
        );
        svc.processOrder(new Order());
        System.out.println("Order processed with SOLID design");
    }
}
class Order {}
class DatabaseOrderRepository implements OrderRepository { public void save(Order o) {} }
class SmtpEmailService implements EmailService { public void sendOrderConfirmation(Order o) {} }`,
    output: `Order processed with SOLID design`,
    commonMistakes: [
      "Applying SOLID religiously to small scripts — these principles are for large, evolving codebases. Don't add interfaces and DI to a 50-line utility.",
      "Violating LSP with subclasses that throw UnsupportedOperationException for inherited methods — if it can't fulfill the contract, it shouldn't extend the class.",
      "Creating interfaces with one implementation 'just in case' — YAGNI. Extract the interface when you have a second implementation or for testing.",
      "Fat 'Manager' or 'Service' classes that do everything — the most common SRP violation. Split by responsibility.",
    ],
    cpp: `// C++ applies SOLID the same way: abstract base classes for interfaces,
// virtual methods for polymorphism, constructor injection for DIP.
// class PaymentGateway { public: virtual bool charge(Order) = 0; virtual ~PaymentGateway() = default; };
// class StripeGateway : public PaymentGateway { ... };
// C++ emphasizes RAII and value semantics, but SOLID principles are language-agnostic.`,
    related: ["classes","interfaces","encapsulation","inheritance","polymorphism","design-patterns","clean-code"],
  },

  /* BEST PRACTICES */
  "design-patterns": {
    title: "Design Patterns",
    category: "Best Practices",
    beginnerExplanation: `Design patterns are proven solutions to common problems in software design — like recipes for recurring situations. Instead of reinventing the wheel every time, you recognize the problem ('I need to notify multiple objects when something changes') and apply a known pattern ('Observer'). Patterns aren't code you copy; they're templates you adapt.

The classic 'Gang of Four' book (1994) cataloged 23 patterns in three categories:

**Creational** — how to create objects. Singleton (one instance only), Factory Method (let subclasses decide which class to instantiate), Builder (construct complex objects step by step), Abstract Factory (families of related objects).

**Structural** — how to compose objects into larger structures. Adapter (make incompatible interfaces work together — like a travel plug adapter), Decorator (add behavior without subclassing — like wrapping a gift), Facade (a simple front for a complex system — like a hotel concierge), Composite (treat individual objects and groups uniformly — like a file system).

**Behavioral** — how objects communicate and divide responsibility. Observer (publish-subscribe — like YouTube subscriptions), Strategy (swap algorithms — like choosing a payment method), Command (encapsulate a request as an object — for undo/redo), Iterator (traverse a collection without exposing its internals), Template Method (define a skeleton algorithm, let subclasses fill in steps).

The most-used patterns in modern Java: Singleton (for shared resources), Builder (for objects with many optional fields — like StringBuilder, Stream.Builder), Factory (Spring's BeanFactory), Observer (event listeners, reactive streams), Strategy (Comparator, lambda strategies), Adapter (InputStreamReader adapts InputStream to Reader).

Don't try to learn all 23 at once. Start with Singleton, Builder, Factory, Observer, Strategy, and Adapter — they cover most real situations.`,
    description: "Design patterns are reusable solutions to common software design problems. The Gang of Four (GoF) cataloged 23 patterns in three categories: Creational (Singleton, Factory, Builder, Abstract Factory), Structural (Adapter, Decorator, Facade, Composite), and Behavioral (Observer, Strategy, Command, Iterator, Template Method). Patterns are templates to adapt, not code to copy.",
    syntax: `// Singleton — one instance
public enum Database { INSTANCE; public void query(String s) { ... } }

// Builder — step-by-step construction
public class Pizza {
    private final String size; private final boolean cheese, pepperoni;
    public static class Builder {
        private String size; private boolean cheese, pepperoni;
        public Builder size(String s) { size = s; return this; }
        public Builder cheese() { cheese = true; return this; }
        public Builder pepperoni() { pepperoni = true; return this; }
        public Pizza build() { return new Pizza(this); }
    }
    private Pizza(Builder b) { size = b.size; cheese = b.cheese; pepperoni = b.pepperoni; }
}
Pizza p = new Pizza.Builder().size("L").cheese().pepperoni().build();

// Observer — publish/subscribe
interface Observer { void update(String event); }
class Subject {
    private List<Observer> observers = new ArrayList<>();
    void subscribe(Observer o) { observers.add(o); }
    void notify(String e) { observers.forEach(o -> o.update(e)); }
}

// Strategy — swap algorithms
interface SortStrategy { void sort(int[] arr); }
class QuickSort implements SortStrategy { ... }
class MergeSort implements SortStrategy { ... }`,
    parameters: [
      ["Creational", "Patterns for object creation: Singleton, Factory, Builder, Abstract Factory, Prototype"],
      ["Structural", "Patterns for composing objects: Adapter, Decorator, Facade, Composite, Proxy"],
      ["Behavioral", "Patterns for object communication: Observer, Strategy, Command, Iterator, Template Method, State"],
    ],
    returnValue: "Design patterns are templates, not code. They don't have return values — they structure how you write code.",
    methods: [
      "Singleton — ensure one instance (enum recommended)",
      "Factory Method — let subclasses decide which class to instantiate",
      "Builder — construct complex objects step by step (fluent API)",
      "Abstract Factory — create families of related objects",
      "Adapter — make incompatible interfaces work together",
      "Decorator — add behavior without subclassing (wrapping)",
      "Facade — simple front for a complex subsystem",
      "Composite — treat individuals and groups uniformly (tree structures)",
      "Observer — publish-subscribe (event listeners)",
      "Strategy — swap algorithms at runtime",
      "Command — encapsulate a request as an object (undo/redo)",
      "Iterator — traverse a collection without exposing internals",
      "Template Method — define algorithm skeleton, subclasses fill in steps",
      "State — change behavior when state changes",
    ],
    example: `import java.util.*;
import java.util.function.*;

public class Main {
    public static void main(String[] args) {
        // === Builder pattern ===
        Pizza p = new Pizza.Builder().size("L").cheese().pepperoni().build();
        System.out.println(p);

        // === Observer pattern ===
        NewsAgency agency = new NewsAgency();
        agency.subscribe(e -> System.out.println("Reader 1 got: " + e));
        agency.subscribe(e -> System.out.println("Reader 2 got: " + e));
        agency.publish("Breaking: Java 21 released!");

        // === Strategy pattern ===
        Sorter sorter = new Sorter();
        int[] arr = {5, 2, 8, 1, 9, 3};
        sorter.setStrategy(a -> Arrays.sort(a));           // built-in
        sorter.sort(arr);
        System.out.println("\\nSorted: " + Arrays.toString(arr));

        // === Factory pattern ===
        PaymentGateway gateway = PaymentGatewayFactory.create("stripe");
        gateway.charge(99.99);
    }
}

// Builder
class Pizza {
    String size; boolean cheese, pepperoni;
    public static class Builder {
        private String size; private boolean cheese, pepperoni;
        public Builder size(String s) { this.size = s; return this; }
        public Builder cheese() { this.cheese = true; return this; }
        public Builder pepperoni() { this.pepperoni = true; return this; }
        public Pizza build() {
            Pizza p = new Pizza();
            p.size = size; p.cheese = cheese; p.pepperoni = pepperoni;
            return p;
        }
    }
    public String toString() { return "Pizza[" + size + ", cheese=" + cheese + ", pepperoni=" + pepperoni + "]"; }
}

// Observer
class NewsAgency {
    private List<Consumer<String>> subscribers = new ArrayList<>();
    void subscribe(Consumer<String> s) { subscribers.add(s); }
    void publish(String news) { subscribers.forEach(s -> s.accept(news)); }
}

// Strategy
class Sorter {
    private Consumer<int[]> strategy;
    void setStrategy(Consumer<int[]> s) { strategy = s; }
    void sort(int[] arr) { strategy.accept(arr); }
}

// Factory
interface PaymentGateway { void charge(double amount); }
class StripeGateway implements PaymentGateway { public void charge(double a) { System.out.println("Stripe: $" + a); } }
class PayPalGateway implements PaymentGateway { public void charge(double a) { System.out.println("PayPal: $" + a); } }
class PaymentGatewayFactory {
    static PaymentGateway create(String type) {
        return switch (type) {
            case "stripe" -> new StripeGateway();
            case "paypal" -> new PayPalGateway();
            default -> throw new IllegalArgumentException("Unknown: " + type);
        };
    }
}`,
    output: `Pizza[L, cheese=true, pepperoni=true]
Reader 1 got: Breaking: Java 21 released!
Reader 2 got: Breaking: Java 21 released!

Sorted: [1, 2, 3, 5, 8, 9]
Stripe: $99.99`,
    commonMistakes: [
      "Forcing patterns where they don't fit — patterns exist to solve problems, not to be used everywhere. A 3-line method doesn't need Strategy.",
      "Implementing Singleton with a class when an enum would be simpler and safer — enum singletons handle serialization and thread safety for free.",
      "Using the Singleton pattern excessively — it creates global state that's hard to test and reason about. Use dependency injection instead.",
      "Confusing Builder with a telescoping constructor (many overloaded constructors) — Builder is for optional parameters; telescoping is fine for required ones.",
    ],
    cpp: `// C++ design patterns are structurally similar. Notable differences:
// - Singleton: Meyers Singleton (static local) is thread-safe in C++11+
// - Builder: often return *this for chaining
// - Observer: std::function callbacks or signal-slot libraries (Boost.Signals2, Qt signals)
// - Strategy: std::function or templates`,
    related: ["solid-principles","classes","interfaces","inheritance","polymorphism","encapsulation","singleton-pattern","clean-code"],
  },

  /* BEST PRACTICES */
  "clean-code": {
    title: "Clean Code",
    category: "Best Practices",
    beginnerExplanation: `Clean code is code that's easy to read, understand, and modify — by other people, or by you six months from now. The golden rule: write code as if the next person to read it is a tired, grumpy version of you who knows where you live. Code is read 10x more than it's written, so optimize for reading, not writing.

The most important rule: NAMES MATTER. A variable named 'd' tells the reader nothing; 'daysSinceCreation' tells them everything. Methods should be verbs (calculateTotal, not total), classes should be nouns (UserService, not DoStuff). Don't abbreviate — 'usr' saves 2 characters but costs 5 seconds of confusion. If you need a comment to explain WHAT the code does, the names are bad; comments should explain WHY.

Functions should be SHORT — under 20 lines ideally. A function does ONE thing (Single Responsibility). If a function has 'and' in its description ('calculate and save'), split it. Avoid deep nesting — more than 3 levels of if/for is a sign to extract a helper method or use early returns (guard clauses). 'Extract Method' is the most common refactoring: if a block of code has a comment above it, the comment is probably the method name.

Other practices: don't repeat yourself (DRY — extract duplicated logic), keep related code together, fail fast (validate inputs at the start), and prefer composition over inheritance. Tests are part of clean code — untested code is broken code, you just don't know it yet. Read 'Clean Code' by Robert Martin for the full treatment, but start with: good names, short functions, no duplication.`,
    description: "Clean code is readable, maintainable code. Key practices: meaningful names (verbs for methods, nouns for classes), short functions (under 20 lines, one responsibility), no duplication (DRY), shallow nesting (use guard clauses), comments explain WHY not WHAT, extract methods for clarity. Tests are part of clean code. Read 'Clean Code' by Robert Martin.",
    syntax: `// BAD — unclear names, long, nested
public List<int[]> bad(List<int[]> data) {
    List<int[]> r = new ArrayList<>();
    for (int[] d : data) {
        if (d[0] == 4) {
            r.add(d);
        }
    }
    return r;
}

// GOOD — clear names, extracted method, expressive
public List<int[]> getFlaggedCells(List<int[]> cells) {
    return cells.stream()
        .filter(cell -> cell[STATUS] == FLAGGED)
        .toList();
}

// BAD — deep nesting, mixed concerns
void process(User u) {
    if (u != null) {
        if (u.isActive()) {
            if (u.hasPermission()) {
                // ... 50 lines of logic
            }
        }
    }
}

// GOOD — guard clauses (early return)
void process(User u) {
    if (u == null) return;
    if (!u.isActive()) return;
    if (!u.hasPermission()) return;
    // ... main logic at the top level
}`,
    parameters: [
      ["name quality", "Variables are nouns, methods are verbs, no abbreviations"],
      ["function length", "Under 20 lines ideally, one responsibility"],
      ["nesting depth", "Max 2-3 levels — use guard clauses (early return)"],
      ["DRY", "Don't Repeat Yourself — extract duplicated logic"],
      ["comments", "Explain WHY, not WHAT — the code shows what"],
    ],
    returnValue: "Clean code practices don't change return values — they improve readability and maintainability.",
    methods: [
      "Use meaningful names — nouns for variables/classes, verbs for methods",
      "Keep functions short — under 20 lines, one responsibility",
      "Use guard clauses — early return instead of deep nesting",
      "Extract Method — turn a block with a comment into a named method",
      "DRY — Don't Repeat Yourself; extract duplicated logic",
      "Comments explain WHY — the code already shows WHAT",
      "Fail fast — validate inputs at the start",
      "Prefer composition over inheritance",
      "Write tests — untested code is broken code",
    ],
    example: `import java.util.*;

// BEFORE: hard to read
class BadProcessor {
    public String p(List<String> d, String t) {
        String r = "";
        for (String s : d) {
            if (s != null) {
                if (s.length() > 0) {
                    if (s.contains(t)) {
                        r += s + ",";
                    }
                }
            }
        }
        return r;
    }
}

// AFTER: clean code
class CleanProcessor {
    public String findMatchesContaining(List<String> items, String searchTerm) {
        return items.stream()
            .filter(Objects::nonNull)
            .filter(s -> !s.isEmpty())
            .filter(s -> s.contains(searchTerm))
            .collect(Collectors.joining(", "));
    }
}

// Another example: extract method for clarity
class OrderProcessor {
    // BEFORE: long method doing many things
    void processOrder(Order order) {
        // validate
        if (order == null) throw new IllegalArgumentException();
        if (order.getItems().isEmpty()) throw new IllegalStateException("empty order");
        // calculate total
        double total = 0;
        for (Item item : order.getItems()) total += item.getPrice() * item.getQuantity();
        // apply discount
        if (total > 100) total *= 0.9;
        // save
        database.save(order);
        // email
        emailService.send(order.getEmail(), "Order confirmed, total: " + total);
    }

    // AFTER: extracted methods, each one thing
    void processOrder(Order order) {
        validate(order);
        double total = calculateTotal(order);
        total = applyDiscount(total);
        saveOrder(order);
        sendConfirmation(order, total);
    }

    private void validate(Order order) {
        if (order == null) throw new IllegalArgumentException("null order");
        if (order.getItems().isEmpty()) throw new IllegalStateException("empty order");
    }

    private double calculateTotal(Order order) {
        return order.getItems().stream()
            .mapToDouble(i -> i.getPrice() * i.getQuantity())
            .sum();
    }

    private double applyDiscount(double total) {
        return total > 100 ? total * 0.9 : total;
    }

    private void saveOrder(Order order) { database.save(order); }
    private void sendConfirmation(Order order, double total) {
        emailService.send(order.getEmail(), "Order confirmed, total: " + total);
    }
}`,
    output: `// The 'after' version is longer in total lines, but each method is short,
// named, and does one thing. Reading processOrder() tells you the STEPS
// without the details. Each helper method can be tested independently.`,
    commonMistakes: [
      "Over-extracting — splitting a 10-line method into 5 two-line methods can make code HARDER to read. Extract when a block has a clear purpose, not just to reduce length.",
      "Writing comments that restate the code — 'i++; // increment i' is noise. Comments should add insight the code doesn't show.",
      "Optimizing for the compiler instead of the reader — 'while ((c = read()) != -1)' is clever but unreadable. Prefer 'int c = read(); while (c != -1) { ... c = read(); }'.",
      "Skipping tests in the name of 'clean' code — tests ARE part of clean code. Untested code can't be safely refactored.",
    ],
    cpp: `// Clean code principles are language-agnostic. C++ has the same practices:
// meaningful names, short functions, RAII for resource management,
// const correctness, range-based for loops, auto where it helps clarity.
// Google's C++ Style Guide and the C++ Core Guidelines cover C++ specifics.`,
    related: ["solid-principles","design-patterns","methods","classes","variables","junit-testing","debugging"],
  },

  /* BEST PRACTICES */
  "debugging": {
    title: "Debugging",
    category: "Best Practices",
    beginnerExplanation: `Debugging is the art of finding and fixing bugs (errors) in your code. It's called 'debugging' because early computers had actual insects causing short circuits — Admiral Grace Hopper famously found a moth in a relay in 1947 and logged it as 'first actual case of bug being found.' Today's bugs are logical, not physical, but the name stuck.

The first step is always: REPRODUCE the bug. If you can't make it happen on demand, you can't fix it. Find the exact steps that trigger it — what input, what sequence of clicks, what environment. Then you can test your fix.

The most basic technique: print statements. System.out.println('got here, x=' + x) sprinkled through your code shows you what's happening. It's crude but effective. Better: use a debugger (every IDE has one) — set a breakpoint (a line where execution pauses), step through line by line, inspect variables, see the call stack. A debugger shows you the program's state at any moment, which print statements can't.

The scientific method applies: form a hypothesis ('I think the bug is in the calculateTotal method'), test it ('add a print there'), observe, refine. Don't change things randomly hoping to fix it — you'll introduce new bugs. Read the error message carefully — NullPointerException at line 42 tells you exactly where and what.

Common bug categories: null pointer (you forgot to check for null), off-by-one (loop goes one too far or not far enough), type errors (comparing with == instead of .equals), concurrency (two threads stepping on each other), and the classic 'works on my machine' (environment differences). Good logging, unit tests, and code reviews all help prevent bugs before they ship.`,
    description: "Debugging is finding and fixing errors in code. Key steps: reproduce the bug, form a hypothesis, test it, observe, refine. Techniques: print statements (crude but effective), IDE debugger (breakpoints, step-through, variable inspection), logging. Read error messages carefully. Common bug types: NullPointerException, off-by-one, == vs .equals, race conditions. Prevent bugs with tests, logging, and code reviews.",
    syntax: `// 1. Print debugging — quick and dirty
System.out.println("DEBUG: entered processOrder, order=" + order);
System.out.println("DEBUG: total=" + total + ", discount=" + discount);

// 2. Use the IDE debugger
//    - Set a breakpoint (click in the gutter next to a line)
//    - Run in Debug mode
//    - Step Over (F8), Step Into (F7), Step Out (Shift+F8)
//    - Inspect variables in the Variables panel
//    - Use Evaluate Expression to run code in the paused context

// 3. Proper logging (better than println)
log.debug("Processing order {}", order.getId());
log.debug("Calculated total: {}", total);

// 4. Assertions (catch bugs during development)
assert order != null : "order should not be null";
assert total >= 0 : "total can't be negative";

// 5. Stack traces — read them!
try {
    riskyOperation();
} catch (Exception e) {
    e.printStackTrace();  // or log.error("Failed", e);
    // Read top-to-bottom: exception type, message, then where it happened
}`,
    parameters: [
      ["breakpoint", "A line where the debugger pauses execution"],
      ["Step Over", "Execute the current line, don't go into methods"],
      ["Step Into", "Go inside a method call to debug it line by line"],
      ["Step Out", "Run until the current method returns"],
      ["call stack", "The chain of method calls that led to the current point"],
      ["watch", "Monitor a variable or expression as you step"],
    ],
    returnValue: "Debugging doesn't affect return values — it's the process of finding and fixing errors in existing code.",
    methods: [
      "Print debugging — System.out.println to trace execution",
      "IDE debugger — breakpoints, step-through, variable inspection",
      "Logging — proper log statements with levels (DEBUG, INFO, ERROR)",
      "Assertions — assert condition : message; (catch bugs in development)",
      "Stack traces — read exception messages and trace to the source",
      "Binary search — comment out half the code to isolate the bug",
      "Rubber duck — explain the code line by line to a rubber duck",
      "Unit tests — write a failing test that reproduces the bug, then fix",
      "Code review — have someone else look at it (fresh eyes spot bugs)",
    ],
    example: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Bug: the average is wrong
        List<Integer> scores = List.of(85, 90, 78, 92, 88);
        double avg = calculateAverage(scores);
        System.out.println("Average: " + avg);
        // Expected: 86.6, Actual: 70.0 — there's a bug!

        // Debugging step 1: print intermediate values
        System.out.println("\\n--- Debugging ---");
        double avg2 = calculateAverageDebug(scores);

        // Bug found: the loop was 'i < list.size() - 1' (off-by-one, skipped last)
    }

    // BUGGY version
    static double calculateAverage(List<Integer> list) {
        int sum = 0;
        for (int i = 0; i < list.size() - 1; i++) {  // BUG: - 1 skips last element
            sum += list.get(i);
        }
        return (double) sum / list.size();
    }

    // DEBUG version — with prints
    static double calculateAverageDebug(List<Integer> list) {
        int sum = 0;
        System.out.println("List size: " + list.size());
        for (int i = 0; i < list.size() - 1; i++) {
            System.out.println("  i=" + i + ", adding " + list.get(i) + ", sum=" + (sum + list.get(i)));
            sum += list.get(i);
        }
        System.out.println("Final sum: " + sum + ", dividing by " + list.size());
        System.out.println("Result: " + (double) sum / list.size());
        System.out.println("BUG FOUND: loop skips last element (i < size - 1)");
        return (double) sum / list.size();
    }

    // FIXED version
    static double calculateAverageFixed(List<Integer> list) {
        int sum = 0;
        for (int i = 0; i < list.size(); i++) {  // FIXED: no - 1
            sum += list.get(i);
        }
        return (double) sum / list.size();
    }
}`,
    output: `Average: 70.0

--- Debugging ---
List size: 5
  i=0, adding 85, sum=85
  i=1, adding 90, sum=175
  i=2, adding 78, sum=253
  i=3, adding 92, sum=345
Final sum: 345, dividing by 5
Result: 69.0
BUG FOUND: loop skips last element (i < size - 1)`,
    commonMistakes: [
      "Changing code without understanding the bug — you might 'fix' the symptom while the root cause remains, or introduce new bugs.",
      "Not reproducing the bug first — if you can't make it happen reliably, you can't verify your fix works.",
      "Debugging by guessing — random changes hoping something works. Always form a hypothesis, test it, observe.",
      "Ignoring the stack trace — it tells you exactly where the exception happened and how you got there. Read it.",
      "Leaving debug prints in production code — use a logger (which can be turned off) instead of System.out.println.",
    ],
    cpp: `// C++ debugging: GDB (command-line) or LLDB, IDE debuggers (Visual Studio, CLion).
// Key commands: break (set breakpoint), next (step over), step (step into),
// continue (run to next breakpoint), print (inspect variable), backtrace (call stack).
// AddressSanitizer and Valgrind catch memory bugs (leaks, out-of-bounds, use-after-free).`,
    related: ["logging","junit-testing","exception-handling","clean-code","methods"],
  },
};

/* ===================================================================
   bookRefs — maps each cheats-site topic key to the matching chapter(s)
   in Y. Daniel Liang's "Introduction to Java Programming and Data
   Structures" (12th ed.). Only factual data (chapter number, title,
   page number) is listed — no copyrighted prose/code/exercises.
   Rendered as a footer on each topic page by app.js.
   =================================================================== */
const bookRefs = {
  "java-basics":          ["Ch 1: Introduction to Computers, Programs, and Java (p.1)"],
  "variables":            ["Ch 2: Elementary Programming (p.33)"],
  "data-types":           ["Ch 2: Elementary Programming (p.33) — §2.9 Numeric Data Types (p.45)"],
  "operators":            ["Ch 2: Elementary Programming (p.33)", "Ch 3: Selections (p.77)", "Appendix C: Operator Precedence Chart (p.1166)"],
  "input-output":         ["Ch 2: Elementary Programming (p.33) — §2.3 Reading Input from the Console (p.37)", "Ch 12: Exception Handling and Text I/O (p.453)"],
  "scanner":              ["Ch 2: Elementary Programming (p.33) — §2.3 Reading Input from the Console (p.37)"],
  "printf":               ["Ch 4: Mathematical Functions, Characters, and Strings (p.121) — §4.6 Formatting Console Output (p.146)"],
  "conditionals":         ["Ch 3: Selections (p.77)"],
  "strings":              ["Ch 4: Mathematical Functions, Characters, and Strings (p.121) — §4.4 The String Type (p.131)"],
  "math-library":         ["Ch 4: Mathematical Functions, Characters, and Strings (p.121) — §4.2 Common Mathematical Functions (p.122)"],
  "wrapper-classes":      ["Ch 4: Mathematical Functions, Characters, and Strings (p.121) — §4.3 Character Data Type (p.126)", "Appendix B: The ASCII Character Set (p.1164)"],
  "random":               ["Ch 3: Selections (p.77) — §3.7 Generating Random Numbers (p.89)"],
  "arrays":               ["Ch 7: Single-Dimensional Arrays (p.249)", "Ch 8: Multidimensional Arrays (p.289)"],
  "methods":              ["Ch 6: Methods (p.205)"],
  "loops":                ["Ch 5: Loops (p.159)"],
  "recursion":            ["Ch 18: Recursion (p.719)"],
  "type-casting":         ["Ch 2: Elementary Programming (p.33) — §2.16 Numeric Type Conversions (p.58)"],
  "classes":              ["Ch 9: Objects and Classes (p.323)", "Ch 10: Object-Oriented Thinking (p.367)"],
  "objects":              ["Ch 9: Objects and Classes (p.323)", "Ch 10: Object-Oriented Thinking (p.367)", "Ch 11: Inheritance and Polymorphism (p.411)"],
  "constructors":         ["Ch 9: Objects and Classes (p.323)"],
  "access-modifiers":     ["Ch 10: Object-Oriented Thinking (p.367)", "Appendix D: Java Modifiers (p.1168)"],
  "encapsulation":        ["Ch 9: Objects and Classes (p.323)", "Ch 10: Object-Oriented Thinking (p.367)"],
  "inheritance":          ["Ch 11: Inheritance and Polymorphism (p.411)"],
  "polymorphism":         ["Ch 11: Inheritance and Polymorphism (p.411)"],
  "interfaces":           ["Ch 13: Abstract Classes and Interfaces (p.499)"],
  "abstract-classes":     ["Ch 13: Abstract Classes and Interfaces (p.499)"],
  "annotations":          ["Ch 13: Abstract Classes and Interfaces (p.499)"],
  "enums":                ["Ch 13: Abstract Classes and Interfaces (p.499)", "Appendix I: Enumerated Types (p.1182)"],
  "collections":          ["Ch 20: Lists, Stacks, Queues, and Priority Queues (p.775)", "Ch 21: Sets and Maps (p.815)", "Ch 24: Implementing Lists, Stacks, Queues, and Priority Queues (p.923)", "Ch 25: Binary Search Trees (p.959)", "Ch 27: Hashing (p.1015)"],
  "exception-handling":   ["Ch 12: Exception Handling and Text I/O (p.453)"],
  "file-handling":        ["Ch 12: Exception Handling and Text I/O (p.453)", "Ch 17: Binary I/O (p.691)"],
  "generics":             ["Ch 19: Generics (p.751)", "Ch 24: Implementing Lists, Stacks, Queues, and Priority Queues (p.923)"],
  "regular-expressions":  ["Appendix H: Regular Expressions (p.1176)"],
  "multithreading":       ["Ch 32: Multithreading and Parallel Programming (online)"],
  "networking":           ["Ch 33: Networking (online)"],
  "jdbc":                 ["Ch 34: Java Database Programming (online)", "Ch 35: Advanced Java Database Programming (online)"],
  "javafx":               ["Ch 14: JavaFX Basics (p.541)", "Ch 15: Event-Driven Programming and Animations (p.593)", "Ch 16: JavaFX UI Controls and Multimedia (p.643)", "Ch 31: Advanced JavaFX and FXML (online)"],
  "lambda-expressions":   ["Ch 30: Aggregate Operations for Collection Streams (p.1129)"],
  "streams-api":          ["Ch 30: Aggregate Operations for Collection Streams (p.1129)"],
  // Topics with no direct chapter mapping (too new for the 12th ed., or general):
  "packages":             [],
  "date-time":            [],
  "records":              [],
  "optional":             [],
  "practice-examples":    [],
  "liang-textbook-companion": [],
  "comments": ["Ch 1: Introduction (p.1) — §1.9 Programming Style and Documentation (p.18)"],
  "command-line-args": ["Ch 7: Single-Dimensional Arrays (p.249) — §7.13 Command-Line Arguments (p.276)"],
  "jshell": ["Ch 2: Elementary Programming (p.33) — §2.11 JShell (p.50)"],
  "static-keyword": ["Ch 9: Objects and Classes (p.323)","Ch 10: Object-Oriented Thinking (p.367)"],
  "this-super": ["Ch 9: Objects and Classes (p.323)","Ch 11: Inheritance and Polymorphism (p.411)"],
  "object-class": ["Ch 11: Inheritance and Polymorphism (p.411)","Appendix D: Java Modifiers (p.1168)"],
  "nested-classes": ["Ch 13: Abstract Classes and Interfaces (p.499)","Ch 15: Event-Driven Programming (p.593)"],
  "singleton-pattern": [],
  "arraylist": ["Ch 20: Lists, Stacks, Queues, and Priority Queues (p.775)"],
  "linkedlist": ["Ch 20: Lists, Stacks, Queues, and Priority Queues (p.775)"],
  "hashmap": ["Ch 21: Sets and Maps (p.815)","Ch 27: Hashing (p.1015)"],
  "treemap": ["Ch 21: Sets and Maps (p.815)"],
  "hashset": ["Ch 21: Sets and Maps (p.815)"],
  "treeset": ["Ch 21: Sets and Maps (p.815)","Ch 25: Binary Search Trees (p.959)"],
  "priority-queue": ["Ch 20: Lists, Stacks, Queues, and Priority Queues (p.775)"],
  "stack-deque": ["Ch 20: Lists, Stacks, Queues, and Priority Queues (p.775)"],
  "iterator-iterable": ["Ch 20: Lists, Stacks, Queues, and Priority Queues (p.775)"],
  "comparable-comparator": ["Ch 20: Lists, Stacks, Queues, and Priority Queues (p.775)"],
  "collections-utility": ["Ch 20: Lists, Stacks, Queues, and Priority Queues (p.775)"],
  "serialization": ["Ch 17: Binary I/O (p.691)"],
  "buffered-io": ["Ch 17: Binary I/O (p.691)","Ch 12: Exception Handling and Text I/O (p.453)"],
  "nio": ["Ch 17: Binary I/O (p.691)"],
  "console-class": ["Ch 12: Exception Handling and Text I/O (p.453)"],
  "var-keyword": [],
  "switch-expressions": [],
  "text-blocks": [],
  "pattern-matching": [],
  "sealed-classes": [],
  "virtual-threads": [],
  "synchronized": ["Ch 32: Multithreading and Parallel Programming (online)"],
  "volatile": ["Ch 32: Multithreading and Parallel Programming (online)"],
  "locks": ["Ch 32: Multithreading and Parallel Programming (online)"],
  "executor-service": ["Ch 32: Multithreading and Parallel Programming (online)"],
  "completable-future": ["Ch 32: Multithreading and Parallel Programming (online)"],
  "atomic-variables": ["Ch 32: Multithreading and Parallel Programming (online)"],
  "concurrent-collections": ["Ch 32: Multithreading and Parallel Programming (online)"],
  "countdown-latch": ["Ch 32: Multithreading and Parallel Programming (online)"],
  "reflection": [],
  "modules": [],
  "jar-files": ["Ch 1: Introduction (p.1) — §1.8 Creating, Compiling, and Executing (p.15)"],
  "classpath": ["Ch 1: Introduction (p.1)"],
  "logging": [],
  "json-processing": [],
  "junit-testing": ["Ch 44: Testing Using JUnit (online)"],
  "build-tools": [],
  "linked-list-impl": ["Ch 24: Implementing Lists, Stacks, Queues, and Priority Queues (p.923)"],
  "stack-impl": ["Ch 24: Implementing Lists, Stacks, Queues, and Priority Queues (p.923)"],
  "queue-impl": ["Ch 24: Implementing Lists, Stacks, Queues, and Priority Queues (p.923)"],
  "binary-trees": ["Ch 25: Binary Search Trees (p.959)"],
  "bst": ["Ch 25: Binary Search Trees (p.959)"],
  "hash-table-impl": ["Ch 27: Hashing (p.1015)"],
  "heaps": ["Ch 20: Lists, Stacks, Queues, and Priority Queues (p.775)","Ch 23: Sorting (p.887)"],
  "graphs": ["Ch 28: Graphs and Applications (p.1045)","Ch 29: Weighted Graphs and Applications (p.1091)"],
  "sorting-algorithms": ["Ch 7: Single-Dimensional Arrays (p.249) — §7.11 Sorting Arrays (p.273)","Ch 23: Sorting (p.887)"],
  "searching-algorithms": ["Ch 7: Single-Dimensional Arrays (p.249) — §7.10 Searching Arrays (p.269)"],
  "big-o-notation": ["Appendix J: The Big-O, Big-Omega, and Big-Theta Notations (p.1187)","Ch 22: Developing Efficient Algorithms (p.839)"],
  "dynamic-programming": ["Ch 22: Developing Efficient Algorithms (p.839)"],
  "solid-principles": [],
  "design-patterns": [],
  "clean-code": [],
  "debugging": ["Ch 3: Selections (p.77) — §3.16 Debugging (p.108)"],
};
