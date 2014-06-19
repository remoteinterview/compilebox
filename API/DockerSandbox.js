/*
        *File: DockerSandbox.js
        *Author: Osman Ali Mian/Asad Memon
        *Last Modified: 3rd June 2014
*/


/**
         * @Constructor
         * @variable DockerSandbox
         * @description This constructor stores all the arguments needed to prepare and execute a Docker Sandbox
         * @param {Number} timeout_value: The Time_out limit for code execution in Docker
         * @param {String} path: The current working directory where the current API folder is kept
         * @param {String} folder: The name of the folder that would be mounted/shared with Docker container, this will be concatenated with path
         * @param {String} vm_name: The TAG of the Docker VM that we wish to execute
         * @param {String} compiler_name: The compiler/interpretor to use for carrying out the translation
         * @param {String} file_name: The file_name to which source code will be written
         * @param {String} code: The actual code
         * @param {String} output_command: Used in case of compilers only, to execute the object code, send " " in case of interpretors
*/
var DockerSandbox = function(timeout_value,path,folder,vm_name,compiler_name,file_name,code,output_command)
{

    this.timeout_value=timeout_value;
    this.path=path;
    this.folder=folder;
    this.vm_name=vm_name;
    this.compiler_name=compiler_name;
    this.file_name=file_name;
    this.code = code;
    this.output_command=output_command;
}


/**
         * @function
         * @name DockerSandbox.run
         * @description Function that first prepares the Docker environment and then executes the Docker sandbox 
         * @param {Function pointer} success ?????
*/
DockerSandbox.prototype.run = function(success) 
{
    var sandbox = this;

    this.prepare( function(){
        sandbox.execute(success);
    });
}


/*
         * @function
         * @name DockerSandbox.prepare
         * @description Function that creates a directory with the folder name already provided through constructor
         * and then copies contents of folder named Payload to the created folder, this newly created folder will be mounted
         * on the Docker Container. A file with the name specified in file_name variable of this class is created and all the
         * code written in 'code' variable of this class is copied into this file.
         * Summary: This function produces a folder that contains the source file and 2 scripts, this folder is mounted to our
         * Docker container when we run it.
         * @param {Function pointer} success ?????
*/
DockerSandbox.prototype.prepare = function(success)
{
    var exec = require('child_process').exec;
    var fs = require('fs');
    var sandbox = this;

    exec("mkdir "+ this.folder + " && cp ./Payload/* ./"+ this.folder,function(st)
        {
            fs.writeFile("./" + sandbox.folder+"/" + sandbox.file_name, sandbox.code,function(err) 
            {
                if (err) 
                {
                    console.log(err);
                }    
                else
                {
                    console.log("The file was saved!");
                    success();
                } 
            });

        });

}

/*
         * @function
         * @name DockerSandbox.execute
         * @precondition: DockerSandbox.prepare() has successfully completed
         * @description: This function takes the newly created folder prepared by DockerSandbox.prepare() and spawns a Docker container
         * with the folder mounted inside the container with the name '/usercode/' and calls the script.sh file present in that folder
         * to carry out the compilation. The Sandbox is spawned ASYNCHRONOUSLY and is supervised for a timeout limit specified in timeout_limit
         * variable in this class. This function keeps checking for the file "Completed" until the file is created by script.sh or the timeout occurs
         * In case of timeout an error message is returned back, otherwise the contents of the file (which could be the program output or log of 
         * compilation error) is returned. In the end the function deletes the temporary folder and exits
         * 
         * Summary: Run the Docker container and execute script.sh inside it. Return the output generated and delete the mounted folder
         *
         * @param {Function pointer} success ?????
*/

DockerSandbox.prototype.execute = function(success)
{
    var exec = require('child_process').exec;
    var fs = require('fs');
    var myC = 0; //variable to enforce the timeout_value
    var sandbox = this;

    //this statement is what is executed
    var st = './DockerTimeout.sh ' + this.timeout_value + 's -i -t -v ' + this.path + this.folder + ':/usercode ' + this.vm_name + ' /usercode/script.sh ' + this.compiler_name + ' ' + this.file_name + ' ' + this.output_command;
    
    //log the statement in console
    console.log(st);

    //execute the Docker, This is done ASYNCHRONOUSLY
    exec(st);

    //Check For File named "completed" after every 1 second
    var intid = setInterval(function() 
        {
            //Displaying the checking message after 1 second interval
            console.log("Checking " + sandbox.folder + ": for completion: " + myC);
            myC = myC + 1;

            var dt = fs.readFile('./' + sandbox.folder + '/completed', 'utf8', function(err, data) {
            
            //if file is not available yet and the file interval is not yet up carry on
            if (err && myC < sandbox.timeout_value) 
            {
                //console.log(err);
                return;
            } 
            //if file is found simply display a message and proceed
            else if (myC < sandbox.timeout_value) 
            {
                console.log("DONE");
            } 
            //if time is up. Save an error message to the data variable
            else 
            {
                data = "Execution Timed Out";
            }


            //now remove the temporary directory
            console.log("ATTEMPTING: rm -r " + sandbox.folder);
            exec("rm -r " + sandbox.folder);

            //return the data to the calling functoin
            success(data);
            clearInterval(intid);
        });
    }, 1000);

}


module.exports = DockerSandbox;
