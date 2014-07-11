
/*
	This file stores the compiler/interpretor details that are provided to DockerSandbox.sh	by the app.js
	The index is the key field, 
	First column contains the compiler/interpretor that will be used for translation
	Second column is the file name to use when storing the source code
	Third column is optional, it contains the command to invoke the compiled program, it is used only for compilers
	Fourth column is just the language name for display on console, for verbose error messages
	Fifth column is optional, it contains additional arguments/flags for compilers

	You can add more languages to this API by simply adding another row in this file along with installing it in your
	Docker VM.

	Author: Osman Ali 
	Date: 3 - JUN - 2014
	*Revised on: 30th June 2014 (Added Column number 4 to display the name of languages to console)
*/

var compilerArray=new Array(13);
for (i=0; i <13; i++)
{
	compilerArray[i]=new Array(5);
}

compilerArray[0] = ["python","file.py","","Python",""];
compilerArray[1] = ["ruby","file.rb","","Ruby",""];
compilerArray[2] = ["clojure","file.clj","","Clojure",""];
compilerArray[3] = ["php","file.php","","Php",""];
compilerArray[4] = ["nodejs","file.js","","Nodejs",""];
compilerArray[5] = ["scala","file.scala","","Scala",""];
compilerArray[6] = ["\'go run\'","file.go","","Go",""];
compilerArray[7] = ["\'g++ -o /usercode/a.out\' ","file.cpp","/usercode/a.out","C/C++",""];
compilerArray[8] = ["javac","file.java","\'./usercode/javaRunner.sh\'","Java",""];
compilerArray[9] = ["\'vbnc -nologo -quiet\'","file.vb","\'mono /usercode/file.exe\'","VB.Net",""];
compilerArray[10] = ["gmcs","file.cs","\'mono /usercode/file.exe\'","C#",""];
compilerArray[11] = ["/bin/bash","file.sh"," ","Bash",""];
compilerArray[12] = ["gcc ","file.m"," /usercode/a.out","Objective-C","\' -o /usercode/a.out -I/usr/include/GNUstep -L/usr/lib/GNUstep -lobjc -lgnustep-base -Wall -fconstant-string-class=NSConstantString\'"];

exports.compilerArray=compilerArray;
