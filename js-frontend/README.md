# Unicorn Standard Starter Kit

This starter kit provides you with the code and conventions you need to get straight into building your React/Redux based app.

## Happiness is six lines away

*Prerequisites: node.js and git*

```
git clone https://github.com/unicorn-standard/starter-kit.git your-repo-name
cd your-repo-name
npm install
npm start
npm run open # (from a different console window, otherwise open localhost:3000)
```

Presto, you've got a ready-to-customise application!

![Unicorn Standard Starter Kit](http://unicornstandard.com/files/boilerplate.png?1)

## Why use Unicorn Standard Starter Kit?

- Your directory structure is sorted as soon as you `git clone`
- ES6 compilation and automatic-reloading development server are configured for you with [webpack](https://webpack.github.io/) and [Babel](https://babeljs.io/)
- [Redux](http://redux.js.org/) is an incredibly simple way of modelling your data, with great community support
- [React](https://www.reactjs.org/) is an incredibly simple way of rendering your views, and is maintained by Facebook
- Simple [uniloc](http://unicornstandard.com/packages/uniloc.html)-based routing is included - easy to understand, and easy to customize
- The [Pacomo](http://unicornstandard.com/packages/pacomo.html) CSS conventions eliminate bugs caused by conflicting styles
- The actors pattern allows you to easily react to changes on your store *without* forcing a re-render
- Your redux store is already configured with navigation, data and view models
- Comes with views, layouts and reducers for a simple document editor!

## Getting Started

#### Put your name on it

- Update name, desription and author in `package.json`
- Update app title in `src/index.html`
- Restart the dev server (make sure to do this after any changes to `src/index.html`)

#### Make sure your editor is happy

- Setup ES6 syntax highlighting on extensions `.js` and `.jsx` (see [babel-sublime](https://github.com/babel/babel-sublime))

#### Start building

- Add a route to `src/constants/ROUTES.js`
- Add a nav menu item for your route in `src/components/ApplicationLayout.jsx`
- Add a component for your route in `src/components`
- Add reducers and actions for your component's view model in `src/actions` and `src/reducers/view`
- Add any data models which your component reqiures in `src/reducers/data`
- Add a container to map your store's `state` and `dispatch` to component props in `src/containers`
- Configure your route in `src/Application.jsx`
- Bask in the glory of your creation
- Don't forget to commit your changes and push to Bitbucket or GitHub!

#### Show your friends

- Run `gulp dist` to output a web-ready build of your app to `dist`

## Structure

### Entry point

`main.js` is the entry point to your application. It defines your redux store, handles any actions dispatched to your redux store, handles changes to the browser's current URL, and also makes an initial route change dispatch.

Most of the above will be obvious from a quick read through `main.js` - if there is one thing which may strike you as "interesting", it'll be the block which handles actors.

### Actors

*[Read the introduction to actors](http://jamesknelson.com/join-the-dark-side-of-the-flux-responding-to-actions-with-actors/)*

Each time your store's state changes, a sequence of functions are called on the *current state* of your store. These functions are called **actors**.

There is one important exception to this rule: actors will not be called if `main.js` is currently in the midst of calling the sequence from a previous update. This allows earlier actors in a sequence to dispatch actions to the store, with later actors in the sequence receiving the *updated* state.

The code which accomplishes this is very small:

```javascript
let acting = false
store.subscribe(function() {
  // Ensure that any action dispatched by actors do not result in a new
  // actor run, allowing actors to dispatch with impunity.
  if (!acting) {
    acting = true

    for (let actor of actors) {
      actor(store.getState(), store.dispatch.bind(store))
    }

    acting = false
  }
})
```

The actor is defined in `src/actors/index.js`. By default, it runs the following sequence:

- **redirector** - dispatch a navigation action if the current location should redirect to another location
- **renderer** - renders your <Application> component with React

### Model

Your model (i.e. reducers and actions) is pre-configured with three parts:

#### Navigation

The `navigation` state holds the following information:

- `location` is the object which your `ROUTES` constant's `lookup` function returns for the current URL. With the default uniloc-based `ROUTES` object, this will have a string `name` property, and an `options` object containing any route parameters.
- `transitioning` is true if a navigation `start` action has been dispatched, but the browser hasn't changed URL yet

#### Data

The `data` state can be thought of as the database for your application. If your application reads data from a remote server, it should be stored here. Any metadata should also be stored here, including the time it was fetched or its current version number.

#### View

The `view` state has a property for each of the view's in your app, holding their current state. For example, form state should be stored in the view models.

### Directories

- `src/actions` - Redux action creators
- `src/actors` - Handle changes to your store's state
- `src/components` - React components, stateless where possible
- `src/constants` - Define stateless data
- `src/containers` - Unstyled "smart" components which take your store's `state` and `dispatch`, and possibly navigation `location`, and pass them to "dumb" components
- `src/reducers` - Redux reducers
- `src/static` - Files which will be copied across to the root directory on build
- `src/styles` - Helpers for stylesheets for individual components
- `src/utils` - General code which isn't specific to your application
- `src/validators` - Functions which take an object containing user entry and return an object containing any errors

Other directories:

- `build` - Intermediate files produced by the development server. Don't touch these.
- `dist` - The output of `gulp dist`, which contains your distribution-ready app.
- `config/environments` - The build system will assign one of these to the `environment` module, depending on the current build environment.

Main application files:

- `src/Application.jsx` - Your application's top-level React component
- `src/index.html` - The single page for your single page application
- `src/main.js` - The application's entry point
- `src/main.less` - Global styles for your application

Main build files:

- `gulpfile.babel.js` - Build scripts written with [gulp](http://gulpjs.com/)
- `webpack.config.js` - [Webpack](http://webpack.github.io/) configuration

## TODO

- Watch `static` and `index.html` for changes and copy them across to `build` when appropriate
