This project uses the vite framework therefore if you install this on your machine you have to do the steps with Git Bash(If you don't have Git bash try to set it up, I'm assuming in VS code and find a tutorial for that):

Install packages:
"npm i"
^That should work but if not the full form is: "npm install"


Bash commands:
cd into the folder that uses Kebab Casing; in other words looks like this a-kebab-case-folder
If unchanged the folder and corresponding command should be: "cd jirani-offline-lib-v2"


Then vite allows you to run in development or production mode:
Development mode is deployed with "npm run dev" and note that using this you'll only have the front end React running, the server won't run and therefore the website won't be able to fetch anything from the server(The server is backend and won't be running at all)

Production mode is done with "npm run build" and will simply create optimized files to deploy, once you run build so the files are now up to date you can run "node server.js"



