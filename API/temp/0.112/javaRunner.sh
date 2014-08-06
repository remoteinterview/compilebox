#!/usr/bin/env sh


######################################################################################
#	This script is specifically made to handle the compilation of java
#	The idea is to cater with the difference of class name(s) inside file
#	and the file name itself when executing the java .class files
#
#	This script is executed after javac compiler has already compiled the file
#	into classes
#
#	The cd /usercode/ command is Docker case specific. Description is mentioned
#	below. 
#
#	The script works as follows
#	1. Search the current directory for all files that have a .class extension
#	2. Run javap on the class name 
#		The javap tool disassembles compiled Java™ files and prints 
#		out a representation of the Java program. This may be helpful 
#		when the original source code is no longer available on a system.
#		source: publib.boulder.ibm.com/infocenter/iseries/v5r4/topic/rzaha/javap.htm
#
#	3. If the class contains the main function run the java command to run it and exit
#	4. This script only executes the first main function it finds
#	
#	Inspired From: http://stackoverflow.com/a/8870863
#
#######################################################################################


#The folder which we mount on docker is named the usercode.
#Move into the directory and execute the loop
cd /usercode/



for classfile in *.class; do
    classname=${classfile%.*}
    #echo $classname

    #Execute fgrep with -q option to not display anything on stdout when the match is found
    if javap -public $classname | fgrep -q 'public static void main(java.lang.String[])'; then
        java $classname "$@"
        exit 0;
    fi
done
