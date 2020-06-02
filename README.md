# Webpack Package
This package helps to easily run code and build a project for publication.

## How to run the app
1. Either fork or download the app and opent the folder in the cli
2. Install all dependencies using the ``npm i`` command.
3. Start the web server using the npm run local commands. The app will be served at http://localhost:5555/ or you have to app index.html in the _dist_ folder.

## Different ways how to run the program
1. ``npm run dev`` - runs the code in the development mode. Creates a _dist_ folder with files.
2. ``npm run build`` - runs the code in the production mode. Creates a _dist_ folder with minified files.
3. ``npm run watch`` - runs the code in the development mode. Creates a _dist_ folder and watches every change in the code.
4. ``npm start`` - runs the code. OPens automaticaly a http://localhost:5555/. Automaticaly updates a web page after every changes are saved.
5. ``npm run stats`` - opens a page with statistics about all downloaded dependencies and files.
