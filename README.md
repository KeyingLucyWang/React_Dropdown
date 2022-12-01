I created the project using [Create React App](https://github.com/facebook/create-react-app).

To run the app:

(1) Git clone this repository to a local folder.

(2) Install Node.js and npm.

Instructions: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#checking-your-version-of-npm-and-nodejs

(3) In a different folder, run:

### `npx create-react-app my-app`

(4) Delete all files in my-app/src.

(5) Copy over all files in the cloned responsitory's src folder (React_Dropdown/src) into my-app/src 

(6) Navigate to the my-app folder:

### `cd my-app`

(7) Run:

### `npm start`

It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Note: All the code that I've written are in App.js, App.css, DropdownMenu.js, and DropdownMenu.css. The rest are boilerplate code generated by [Create React App]. I indicated 2 use cases of the component (single and multi-select). The menu items are defined in App.js and passed into DropdownMenu.js as props. The "DisplayText" field of the items is the displayed label, and the "value" field would be the information that we want to keep track of for each item. Depending on the specific use case, when the items are selected, we can perform certain actions with them. The value fields are intentially left as blank here.
