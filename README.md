# Setup WebAppCC 

1. Download zip folder or clone the directory
2. Zip folder has two directory
    - ClientApp (Angular)
    - ClientApp (Angular)
    
3. ClientApp Installation steps:
    - Open command promt 
	- Select the path till ClientApp
	- Run command "npm i"
	
4. ServerApp Installation steps:
    - Go to ServerApp folder path
	- Open solution in VS2019
	- Build Solution and Run the project

5. Copy the running server URL from the browser. e.g localhost:43780
6. Set the url in ClientApp/src/environments/environment.ts againts baseURL property
7. Run the command "ng s --open" from the command promt

