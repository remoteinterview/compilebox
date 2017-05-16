
var LANGS = {
    "C#": [10, "text/x-csharp"],
    "C/C++": [7, "text/x-c++src"],
    "Clojure": [2, "text/x-clojure"],
    "Java": [8, "text/x-java"],
    "Go": [6, "text/x-go"],
    "Plain JavaScript": [4, "text/javascript"],
    "PHP": [3, "text/x-php"],
    "Python": [0, "text/x-python"],
    "Ruby": [1, "text/x-ruby"],
    "Scala": [5, "text/x-scala"],
    "VB.NET": [9, "text/x-vb"],
    "Bash": [11, "text/x-bash"],
    "Objective-C": [12,"text/x-objectivec"],
    "MySQL": [13,"text/x-sql"],
    "Perl": [14, "text/x-perl"],
    "Rust": [15, "text/rust"],
}



var Codes = {
    "Perl" : "use strict;\nuse warnings\n;use v5.14; say 'Hello';",
    "MySQL":"create table myTable(name varchar(10));\ninsert into myTable values(\"Hello\");\nselect * from myTable;",
    "Java": "/* package whatever; // don't place package name! */\n\nimport java.io.*;\n\nclass myCode\n{\n\tpublic static void main (String[] args) throws java.lang.Exception\n\t{\n\t\t\n\t\tSystem.out.println(\"Hello\");\n\t}\n}",
    "C/C++": "#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout<<\"Hello\";\n\treturn 0;\n}",
    "C#": "using System;\n\npublic class Test\n{\n\tpublic static void Main()\n\t{\n\t\t\tConsole.WriteLine(\"Hello\");\n\t}\n}",
    "Clojure": '(println "Hello")',
    "Go": "package main\nimport \"fmt\"\n\nfunc main(){\n  \n\tfmt.Printf(\"Hello\")\n}",
    "Plain JavaScript": "//Not happy with Plain JS? Use JS/HTML/CSS option for using your own libraries.\n\nconsole.log(\"Hello\");",
    "PHP": "<?php\n$ho = fopen('php://stdout', \"w\");\n\nfwrite($ho, \"Hello\");\n\n\nfclose($ho);\n",
    "Python": "print \"Hello\"",
    "Ruby": "puts \"Hello\"",
    "Bash": "echo 'Hi' ",
    "Objective-C": "#include <Foundation/Foundation.h>\n\n@interface Test\n+ (const char *) classStringValue;\n@end\n\n@implementation Test\n+ (const char *) classStringValue;\n{\n    return \"Hey!\";\n}\n@end\n\nint main(void)\n{\n    printf(\"%s\\n\", [Test classStringValue]);\n    return 0;\n}",
    "Scala": "object HelloWorld {def main(args: Array[String]) = println(\"Hello\")}",
    "VB.NET": "Imports System\n\nPublic Class Test\n\tPublic Shared Sub Main() \n    \tSystem.Console.WriteLine(\"Hello\")\n\tEnd Sub\nEnd Class",
    "Rust": "fn main() {\n\tprintln!(\"Hello\");\n}",
}

