# BjsTplJson - Works with AOT

You will have to have `two` terminal instances running, one for the angular development server and one for the views server.

## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## View server
Open a new terminal instance. Run `npm run views` for a views server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change the `components.json` file.

## The Dynamic Dom Tree directives
Here is where all the magic happens `src\app\directives\dom-tree-root.directive.ts`

& `src\app\directives\dom-tree-node.directive.ts`
