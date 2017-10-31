## What is it? ##
CompileBox is a *Docker* based sandbox to run untrusted code and return the output to your app. Users can submit their code in any of the supported languages. The system will test the code in an isolated environment. This way you do not have to worry about untrusted code possibly damaging your server intentionally or unintentionally.
You can use this system to allow your users to compile their code right in the browser.

Check the example work at:

 - Basic Example: [compile.remoteinterview.io][1]
 - Prettified View: [codepad.remoteinterview.io][2]

## How does it work? ##

The client-side app submits the code and the languageID to the server through the API. The API then creates a new *Docker* container and runs the code using the compiler/interpreter of that language. The program runs inside a virtual machine with limited resources and has a time-limit for execution (20s by default). Once the output is ready it is sent back to the client-side app. The *Docker* container is destroyed and all the files are deleted from the server.

No two coders have access to each other’s *Docker* or files.


## Installation Instructions ##

* Go to the 'Setup' directory.
    - Open the Terminal as root user
    
    - Execute the script **Install_*.sh**, select the file which best suites your Operating System description. This will install the Docker and NodeJs pre-requisites to your system and create an image called 'virtual_machine' inside the Docker. DockerVM may take around 20 to 30 minutes depending on your internet connection.
    
    - Once the Install script executes successfully, copy the folder named 'API' to your desired path.
    
    - Open app.js in the API folder and set the variable values as follows.
    
    	1. **timeout_value**: The time in seconds till which the API should wait for the output of the code before generating an "Execution Timed Out" message.
        2. **port**: The port on which the server will listen, the default port is 80.
        
    - To test the installation, open a new terminal windows, cd to the API folder and type the following command
	```
    $ npm install .
    ```
	to install all needed nodejs modules, followed by
	
    ```
    $ sudo nodejs app.js
    ```
    - If everything has been setup correctly in app.js file, you will see the following message on your terminal
    ```
    Listening at <port_number>
    ```

    - Navigate your browser to http://127.0.0.1/
    
    ## Supported Operating Systems ##
    The CompileBox API has been installed and run succesfully on the following platforms
	- Ubuntu 12.04 LTS
    - Ubuntu 13.10
    - Ubuntu 14.04 LTS
    - Ubuntu 16.04 LTS
    - Linux Mint 15 
    - CentOS 6 (root required not sudo)
    
## Selecting The languages for Installation Inside Docker ##

The default Dockerfile installs the most used languages. To remove/change any, follow these steps

In order to select languages of your own choice you need to make 2 changes.<br>
    	1. <B>Dockerfile</B>: This file contains commands that you would normally give in your terminal to install that language. Add the required commands preceeded by the RUN keyword inside the Dockerfile. Run the "UpdateDocker.sh" script, present in the same folder if you are adding new language to already installed API, execute the Install_*.sh script otherwise, from your terminal after making the changes to your Dockerfile.<br>
        2. <B>Compilers.js</B>: This file is inside the API folder. The compiler name, the source file name and the execution commands to Docker Container are taken from this file. This file only contains an array, which is described in detail inside the file. Add the credentials of the language you are adding to this array.<br>
        
The next time you wish to compile using this language, simply issue the language_id , which is  same as the index of the language in the array present in Compilers.js, along with your code to the NodeJs server.

> Note: Additionally while setting up the API for the first time, you can comment out those languages from the Dockerfile that you do not wish to install, since they can be added later.

## Adding Your Own Languages ##


In order to add your own languages you need to following steps.
<br>
1. <b>Modify the Dockerfile</b>: The Dockerfile is present in the Setup folder and contains the commands that you would normally write in your terminal to install a particular language. Append the commands for the language of your choice to the end of the Dockerfile.     	<br>
2. <b>Execute UpdateDocker.sh</b> and wait for your language to be installed inside the virtual machine. <br>
3. <b>Modify Compilers.js</b>: Compilers.js file is available in the API folder and contains the information needed by app.js to compile a given source code inside Docker container. The file only consists of an array which is described in detail inside the file. Add the credentials for your language to the Array.

> Note:  You should be connected to the Internet when you run UpdateDocker.sh

  [1]: http://compile.remoteinterview.io
  [2]: http://codepad.remoteinterview.io
