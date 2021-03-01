# [Atomic Design Example Project](https://rachel-blue.github.io/atomic-design-example)
This project was created for a Women Who Code Boulder/Denver lightning talk about Atomic Design. 
It is intended to demonstrate folder structure and separate components to show a small working example of
atomic design in a project. 
You can find more information [about Atomic Deisgn here](https://bradfrost.com/blog/post/atomic-web-design/).

## How to run the project locally
### `Local Setup`
1. (Optional) Install NVM [follow instructions on github here](https://github.com/nvm-sh/nvm) and use command `nvm use` to access node version used on this project. 
2. Clone this repo
3. Run `npm install` in the cloned repo's root
4. Run `npm start` to view the locally hosted site in the browser

### `Development server`
Run `npm start` for a dev server.
Page will automatically open in browser,
or navigate to http://localhost:300 to view it in the browser.

## `Notes`
Images were sourced from [Pixabay](https://pixabay.com/).
Descriptions are from [Lorem Ipsum](https://www.lipsum.com/).
About Page text is from the [Cat Ipsum generator](http://www.catipsum.com/).


## Want to create some Atomic Design components?
Clone the repo and try some of the suggested steps below or experiment on your own.

### `Clone the Repo`
#### `Atoms`
1. paragraph tag
2. image
3. add another button with your own function

#### `Molecule Edit`
1. change the text display
2. limit the description text that displays so that longer text displays consistently with the layout

##### `Page`
1. new animal page
    - create your own version of kittens.js and create a new page
    - update with API instead of js object

### `Practice`
Try implementing it in small projects asking yourself these questions about componetization
1. is this [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)? (am I repeating code three times or more)
2. is the file responsible for more than one thing? ([Single responsibility](https://en.wikipedia.org/wiki/Single-responsibility_principle#:~:text=The%20single%2Dresponsibility%20principle%20(SRP,functionality%2C%20which%20it%20should%20encapsulate.))
3. what category does this fall into?
    - page
    - template
    - organism
    - molecule
    - atom
