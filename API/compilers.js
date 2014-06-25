/*
	This file stores the compiler/interpretor details that are provided to DockerSandbox.sh	by the app.js
	The index is the key field, 
	First column contains the compiler/interpretor that will be used for translation
	Second column is the file name to use when storing the source code
	Third column is optional, it contains the command to invoke the compiled program, it is used only for compilers

	You can add more languages to this API by simply adding another row in this file along with installing it in your
	Docker VM.

	Author: Osman Ali 
	Date: 3 - JUN - 2014
*/

var compilerArray=new Array(12);
for (i=0; i <12; i++)
{
	compilerArray[i]=new Array(4);
	compilerArray[i][0]=i;
}

compilerArray[0] = ["python","file.py",""];
compilerArray[1] = ["ruby","file.rb",""];
compilerArray[2] = ["clojure","file.clj",""];
compilerArray[3] = ["php","file.php",""];
compilerArray[4] = ["nodejs","file.js",""];
compilerArray[5] = ["scala","file.scala",""];
compilerArray[6] = ["\'go run\'","file.go",""];
compilerArray[7] = ["\'g++ -o /usercode/a.out\' ","file.cpp","/usercode/a.out"];
compilerArray[8] = ["javac","file.java","\'./usercode/javaRunner.sh\'"];
compilerArray[9] = ["\'vbnc -nologo -quiet\'","file.vb","\'mono /usercode/file.exe\'"];
compilerArray[10] = ["gmcs","file.cs","\'mono /usercode/file.exe\'"];

exports.compilerArray=compilerArray;
