## Why

To have a lot of fun of course :)

## Download

Just clone the repository and remove the `.git` folder:

```sh
$ git clone https://github.com/Wasseing/cards my-app
$ cd my-app
$ rm -rf .git
$ npm install # or yarn
```

## Usage

- [Run](#run)
- [Deploy](#deploy)
- [Components](#components)

### Run

Once you have installed the dependencies, you can use `npm start` to run a development server.

### Deploy

Use `npm run build` to transpile the code into the `dist` folder. Then, you can deploy it everywhere.

### Components

This project leverages the Atomic Design methodology to create a scalable and easy to maintain component folder structure. See [why](https://github.com/diegohaz/arc#why).

If you are creating a component and you don't know if it is an atom, a molecule or an organism, don't worry so much. It will be easy to move it later.

You can use the [components](src/components) folder here as an example or refer to the [Pattern Lab Demo](http://demo.patternlab.io/) which this project is based on. Basically, you can think this way:

- An **atom** is a native html tag or a React Component that renders an html tag;
- A **molecule** is a group of atoms;
- An **organism** is a group of atoms, molecules and/or other organisms.

There're cases when, during the development, you do realize that some molecule should be an organism, for example. You just need to move the component folder to the right place and update the respective `index.js` files (`molecules/index.js` and `organisms/index.js`). Everything else should work.
