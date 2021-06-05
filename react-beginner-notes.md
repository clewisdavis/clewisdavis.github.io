# Notes from WesBos

/*eslint-disable*/

These are notes from Wes Bos Beginner React course. I am running into situations at work where this would be handy to know and learn. I bought this course a while back, like two years ago and never got around to it. Now I am.

## Getting set up

- npm i in the catch of the day
- if you have problems, just delete your node_modules and then run it again
- damn this is slow to load

## What are components

- everything in React is a component
- a reusable piece of your website
- react takes it a step further, and allows you to build your own tags
- just create a component and render out and pass it info it needs
- a benefit, you can give team members a component and they don't have to write it
- a piece of your app, make it a component so it's re-usable
- in your browser, use React inspector for dev tools
- Instagram and FB build react
- COMPONENTS ARE RE-USABLE PIECES OF CODE THAT YOU CAN USE OVER AND OVER AGAIN AND ATTACH LISTENERS TO

## first component

- budler.js, the file where everything is bundled.
- first thing, import our react dependency, ES6 modules

``` jsx
import React from 'react';
```

- then make a class
- every single component make it it's own class that extends the react component

``` jsx
/* eslint-disable */
class StorePicker extends React.Component {
  return() {
    return <p>Hello</p>;
  }
}
```

- every single class in React needs at least one method, and that is called `render`
- render determine what DOM elements do I put on the page

``` java
render() {
    return <p>hello</p>
}
```

- need to mount the app to the page
- render method, takes two arguments, the `element` and where to `mount` it to

``` jsx
/* eslint-disable */
render(<p>Heyyy</p>, document.querySelector('#main'));
```

- for the first argument, you can use your custom component you defined as a class.
- then you can render our you component, just like a regular tag
- you can do `<StorePicker/>`

``` jsx
/* eslint-disable */
render(<StorePicker />, document.querySelector('#main'));

```

- export and import in differ file
- you will always need to `import` react into your components, it doesn't matter, react will dedup them
- making sausage, import your ingredients, make your sausage, and then export to surface it to other apps
- for your components, make sure to include the `relative` path
- for example `import StorePicker from './components/StorePicker` and you do not need the `.js` on the end that is assumed

## JSX

- mix JSX and the HTML instead of trying to concatenate everything
- not required in React, but preferred
- use regular HTML as we know it with some exceptions
- if you want to add a `class` for css, use `className` instead

``` jsx
/* eslint-disable */
class StorePicker extends React.Component {
  render() {
    return <form className="store-picker" />;
  }
}
```

- Emmet and JSX, see blog post; <https://wesbos.com/emmet-react-jsx-sublime>
- For multi-line html, put your markup in a `return ()` keyword

``` jsx
/* eslint-disable */
class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-picker">
        <h2>Please Enter a Store</h2>
      </form>
    );
  }
}
```

- You cannot return sibling elements, you can only ever return sibling elements
- Wrap it in `<React.Fragment>` tag to render our as many tags as you like

``` jsx
/* eslint-disable */
class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Fish</p>
        <form className="store-picker">
          <h2>Please Enter a Store</h2>
        </form>
      </React.Fragment>
    );
  }
}
```

- commenting in JSX, `{}`, means I am diong JS, so to do a comment `{ /* comment */ }`
- Don't put the comment on the first line, cannot return a comment and element
- If you want a comment, put inside your element
  
## Integrating CSS

- Component CSS, inline CSS, instead of writing large css file
- Import the CSS that only relates to that component
- `import "./css/style.css";`, one option is to just import directly into your `index.js` file, react will recognize it's a css file and take care of the hot reload for you

## Make app component

- In the components directory, create a new file `App.js` and then import react
- Capitalize your component file
- Set up the class and export it so it's available to the app

``` jsx
/* eslint-disable */
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <p>Hey!!!</p>
      </div>
    );
  }
}

export default App;
```

- import into the file it's going to be used
- scaffold out your app components, an easy trick is to make one component and then `save as` to duplicate.
- Don't forget to, keep the file name with a capital letter. `components/Header.js` for example
- Tricky, all your imports and exports, easy to get compile errors

## Props and State

- Props are similar to HTML tag, for example an `<img>` tag.
- Without the `src` and `alt` tags, the img has no idea what to do
- So you need to specify everything, `<img src="dog.jpg" alt="Dog">`
- Another example `<input type="text">`, this tells `input` how to render out to the page
- Props are the way to get data in to a components
- We need to pass data into your components
- `State` is where the data lives, the data's home
- `Props` is how the data gets there, like a car to get you there
- Props
  - Just make up your own props name
  - Props are like an object of data that gest passed in, like passing in an argument to function
  - `<Header tagline="Chris is cool"/>` for example, `tagline` is the prop you defined
  - You can pass in anything, if anything other then a string, then add `{}`
  - For ex; `<Header tagline="Chris is cool" age={500} cool={true}/>`
  - When you want to use that prop, just use curly brackets `{}`, this tells React, just go back to JS
  - `{this.props.tagline}`, `this` is the instance, `.props` is going to be the object inside of the component, `.tagline` the name of the prop
  - `$r` trick, go into dev tools and look for the $r, if you go to your console, and type `$r` it will show you the component instance
  - **💡 Aha Moment 💡** this whole component thing, it's just an object

## Stateless Function Components

- state, lifecycle methods, custom methods, tons of stuff, smart components
- Stateless Functional Components, if your component doesn't do anything, only has a render method and props, unecessary to do all this, just convert it over to a `stateless functional component
- Make a basic `function` with a `props` passed in and replace the `this`.
- Make an arrow function with an implicit return

``` jsx
/* eslint-disable */
const Header = props => (
  <header className="top">
    <h1>
        Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
        Day
    </h1>
    <h3 className="tagline">
      <span>{props.props.tagline}</span>
    </h3>
  </header>
);
```

- You can de-structure the props into it's own argument, `(props)`, `({ tagline, age })` and just pass in directy

``` jsx
/* eslint-disable */
const Header = ({ tagline, age }) => (
  <header className="top">
    <h1>
        Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
        Day
    </h1>
    <h3 className="tagline">
      <span>{tagline}</span>
      <span>{age}</span>
    </h3>
  </header>
);
```

## Routing

- Called React Router, not baked into react, defer it to external component
- React Router, and next.js
- Everything is a component, event the router is a component
- Create a `components/Router.js` components file
- Import into your file `import { BrowserRouter, Route, Switch } from 'react-router-dom';`
- Make a router component, using a `stateless functional component`

- `<Switch>` try the first route and if it doesn't match, it will go to the next route and so on and fall back to the not found
- Takes a number of props, `exact`, first route the home page, second route will be our store
- `<Route exact path="/">`
- Then you tell it which component to render out
- `<Route exact path="/" component={StorePicker} />` and make sure you import that component into your file
- Give it a not found page, leave off the `exact path`, `<Route component={NotFound} />`

``` jsx
/* eslint-disable */
// components/Router.js
 import { BrowserRouter, Route, Switch } from 'react-router-dom';

 const Router = () => (
     <BrowserRouter>
     <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route exact path="/store/:storeID" component={App} />
        <Route component={NotFound} />
     </Switch>
     </BrowserRouter>
 )
```

- Go back to your main `index.js` file and hook things up, `import` the `Router`

``` jsx
/* eslint-disable */
// index.js
 import React from "react";
 import { render } from "react-dom";
 import Router from "./components/Router";
 import "./css/style.css";

 render(<Router/>, document.querySelector("#main"));
```

## Helper Functions

- Not specific to react, just a helper in JS
- Create a little helper file, `helper.js` in same directory as your `index.js`
- Not really a component, just vanilla JS helper functions that do stuff
- on each function, `export` before the function so you can use them
- `export default` vs `named export`
- for named exports, you import them with the `{ getFunName }` syntax, `import { getFunName } from "../helpers";`

## How Events Work

- All React does is just wrap your event in a SyntheticEvent
- They are done inline, vs JS where you would select an element and then add event handlers
- But in React, you do inline event handlers
- `onClick={this.handleClick}`
- `<button onClick={this.handleClick}>`
- `on` then the name of the event you are looking for `Click` camel case
- `={}` then tell it which function to run when that event happens
- `this.handleClick`, handleClick is the function you have to define
- Then, in the same component, add a new method called `handleClick`
- Why not add the `()` to run the function? Because that would make it run when the component mounts/page load, you want it to run `onClick`
- Golden rule in React, DON'T TOUCH THE DOM, don't manually select the elements, think of it as what your react app looks like.
- Instead, use `ref`, this allow you to reference a DOM node on the page
- ref allow us to reference a DOM node in React, `ref={}`
- Create a ref inside the class, an empty ref
- `myInput = React.createRef();`
- First you have to bind your method to the component before you can reference it.
- If you want to use a `this` inside a method, you have to make it a property

``` jsx
/* eslint-disable */
//  StorePicker.js
goToStore = (event) => {
        // 1. stop the form from submitting
      event.preventDefault();
      // 2. get the text from the input
      console.log(this);

      // 3. change the page to /store/whatever-they-entered
    }
```

- Get data from the field, `console.log(this.myInput.current.value);`

**Push state, change the url without having to change the page**

- Do that with React Router
- On the `StorePicker` component, inspect with React dev tools and look at the props available.
- Looking for `history` `push` method
- `this.props.history.push(`/store/${storeName}`);`
- React doesn't reload the page, it just uses `push()` router to reload that component in the page

## All about State

- State is just object that lives inside a component. Holds data that it needs and children needs
- If you wnat data, it might be from various places
- Don't touch the DOM, instead of updating all the pieces, just update the data and let React take it
- One single source of truth of all the data
- In vanilla js nightmare to update all those different peices of data
- With React, you just keep your data in State, and React reacted to the change and knows where you have used that dat in the app and update all the different pieces.
- Change you data and React will now where in the page to update
- Create the form, as a component
- THE IDEA BEHIND REACT IS THAT YOU WANT TO BUILD THINGS AS COMPONENTS
- So you can use it anywhere, don't directly tie it to a page
- How to get the value of the form elements, first create a `ref`
- How do we get our fish object into state?
- You have to share that data with other components
- YOU CANNOT PASS THE DATA UP, YOU CAN ALWAYS PASS THE DATA DOWN
- Have a parent state, and pass that down to the children
- That's why we have an `App` component, it is the parent
- THE DATA IS GOING TO LIVE IN `App` so you can pass the data down

**Go into your App component and set state**

- First create an empty state, then data needs to be pushed
- Use a property and describe the two different states that we will be using

 ``` code
    /* eslint-disable */
    state = {
        fishes: {},
        order: {}
    }
 ```

- How do we get an item into state?
- The methods that update state, need to live in the same component

``` code
addFish = fish => {
    console.log("adding a fish");
}
```

- Now, how do you call it at a lower level component?
- 💡 You pass it in using `props` into the component you want to call it from, `<Inventory addFish={this.addFish} />`
- Then you can call that method from the component level.
- So now how do you get it into state?
- 1. You have to make a copy of the existing state, `const fishes = {...this.state.fishes};`, the `...` is the spread operator from JS, makes a copy
- 2. Add new fish to variable
- 3. Set state

``` javascript
/* eslint-disable */
    addFish = fish => {
            console.log("adding a fish");
            // how do you update state?
            // 1. take a copy of an existing state
            const fishes = { ...this.state.fishes };
            // 2. Add our new fish to the variable, this just gives a unique value
            fishes[`fish${Date.now()}`] = fish;
            // 3. Set the new fishes object to state, call a built in method, setState()
            this.setState({
                fishes: fishes
            })
    }

```

- Any custom component that needs to update state, needs to live where the state lives, `App.js`
- How do you get a function, from one component, into another component? PROPS, how you get anything get anywhere? Always props.
- In the component tag, add the prop `loadSampleFishes={this.loadSampleFishes}` for example
- Then to call it on an event handler use `<button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>`
- 👋 Don't forget to add `props` to the path. `onClick={this.props.loadSampleFishes}`
- Anything that gets passed in, is available in the props

## Looping over the fish

- How do we loop over the fishes we have?
- JSX doesn't have conditionals, loops
- The best way, is to use plain old JS
- We are going to loop over each fish, and then render out a fish tag
- To loop, wrap it in an `Object.keys`
- example, `Object.keys($r.state.fishes)` will return all the keys
- This will allow us to loop over what we have
- Then use `.map()` method to loop over each fish
- 💡 Remember, use the `{}` in React to tell it to use plain old JS
- Error, need to give a unique ID to each fish, have to give it a unique key
- Have to give it a `key`, this is a React thing, and give it a key of anything that is unique.
- Ex; `<p key={key}>{key}</p>`
- Then just use your component, `<Fish key={key} />`

## Accessing State

- How do you get the info from state, to the component?
- Pass it in via props
- Pass the entire object with a prop
- You can name the prop whatever you like, `details={this.state.fishes[key]}`
- Now, you can access the data to render it out
- To load data, just use the `{}` and the path from the `props`
- Just inspect with React Dev Tools and look at the prop name for example
- Loading the fish image, `<img src={this.props.details.image} alt={} />`
- Then it's just a templating game to fill in the data
- Make a shorter path by making some variables, between the `render()` and above the `return()`
- Ex; `const image = this.props.details.image;`, then use this to reference in your markup
- If ya want to be a hotshot, you can use ES6 destructuring
- Ex; `const { image, name, price, description, status } = this.props.details;`
- **Import a function** for the price conversion, import the `formatPrice()` function from your helpers. `import { formatPrice } from "../helpers";`
- Then just call it in your markup and make sure you put it in `{}`, this tells react to do plain old JS. `{formatPrice(price)}`

## Updating our Order State

- Add the order state and sold out functionality
- To update our state with a css style, add a variable to your component
- Ex; `const isAvailable = status === 'available';` status is a prop inside of details, see your react dev inspector
- Then, on your html element, add some JS logic
- Ex: `<button disabled={!isAvailable}>Add To Cart</button>`

``` javascript
/* eslint-disable */
import React from "react";
import { formatPrice } from '../helpers';

// create a class
class Fish extends React.Component {
    render() {
        // use ES6 destructuring to make a lot of variables at once
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable}>Add To Cart</button>
            </li>
        )
    }
}

// don't forget to export
export default Fish;
```

- How do we add to our order state wehn you click add to order button?
- Make these changes in your `App.js` file to be available everywhere
- 1. make a copy of the state, `const order = { ...this.state.order };`
- 2. add to the order or update the order
        `order[key] = order[key] + 1 || 1;`
- 3. call set state to update our state our state object
        `this.setState({ order });`
- Then to test your function, go to the console and run, `$r.addToOrder('fish1')` to push to your state

- Then pass it down via props, so it's available on our order button in the `Fish.js` component
- ex; `addToOrder={this.addToOrder}` add that prop to your <Fish> component
- HOW DO YOU GET ACCESS TO THE KEY?
- You have to pass it a second time as a prop. as something other then key
  
 ``` javascript
 /* eslint-disable */
<Fish 
    key={key} 
    index={key}
    details={this.state.fishes[key]} 
    addToOrder={this.addToOrder} />
 ```

- **Now that is available as index in your props, now what?**
- Then you can use this in your <Fish> component and add it to the button
- On the button, add an event handler `onClick={this.handleClick}`
- Then create the function to run your `addToOrder()` function
- Remember, this goes after you define the class and before your `render()` method, hard to remember where things go in React
- Looks like this

```
/* eslint-disable */
class Fish extends React.Component {
    // add click function
    handleClick = () => {
        console.log('you did it');
        // this runs the add to order function, with the index passed in so you know which fish
        this.props.addToOrder(this.props.index);
    }
    render() {
        // use ES6 destructuring to make a lot of variables at once
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    {isAvailable ? "Add to Order" : "Sold Out!"}
                </button>
            </li>
        )
    }
}

```

## Add Order State

- HOW DO WE GET STUFF INTO A COMPONENT? Props!!! @wesbos
- In the `App.js` component, you have to pass in the fishes and the order
- `<Order fishes={this.state.fishes} order={this.state.order}/>`
- How do we target just the data we need?
- You should not be passing down data unless you explicitly need it.
- Can do an object spread, it will pass in everything from state.
- `{...this.state}`, copies in everything, BUT, you should just pass in what you need
- You want your modular components to pass in just what you need
- In your component, Order.js, store order into variable.
- `const orderIds = Object.keys(this.props.order);`, this goes in your `render()` method
- then add it to your `return()` statement, `{orderIds}`
- If your render function is getting to large, you can make a seperate render function
- **Separate Render Function**

## Persist Data

- Going to use Firebase, uses websockets
- Websockets is real time, if you udpate any info, it updates at realtime rather then using AJAX
- As soon as you make a change, the info is updated state in the app, and also in Firebase database, and if you were to open up in another browser
- Both in Safar and in Chrome or any browser that has it open.
- Go to firebase.google.com and create a new project
- In your project, create a new file called `base.js`, direclty in your src directory
- Need two packages, `Rebase`, react to firebase package to mirror the state
- `import Rebase from "re-base";`
- `import firebase from "firebase";`
- Config your rebase and create a named and default export.
- in `src/base.js`
- named export `export { firebaseApp };`
- default export `export default base;`
- **Lifecycle methods**
- similar to jQuery, like document.ready, React has something similar
- Hook into the very first second a component loads, caled `component did mount`
- Docs for lifecycle methods for React, <https://reactjs.org/docs/react-component.html#the-component-lifecycle>

``` code
componentDidMount() {
        console.log('did mount!!');
    }
```

- Sync it with the name of the store so you can get just the data you are using
- `this.ref = base.syncState('');`
- React dev tools, in your App component, `props/match/params, storeID` will give you the store ID
- SO COOL! with `syncState()` method you can sync the state between your app and firebase database

```
    componentDidMount() {
        console.log('did mount!!');
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.storeID}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }
```

- Need to clean up if user goes to another store, you don't want a memory leak
- so use `componentWillUnmount() {}` lifecycle method
- If the app component is no longer showing, this will fire

``` java
    componentWillUnmount() {
            console.log("UNMOUNTING");
        }
```

## Local storage, persist data, user browser

- local storage, cookies but easier to work with
- key value token, and store values, pull that data and come back to it
- other lifecycle methods, `componentDidUpdate()`, as soon as it's loaded and modified, we want to update local storage
- Add this method to your `App.js` file

``` java
  componentDidUpdate() {
          console.log('IT UPDATED');
      }
```

- Now everytime you add something to the order, it runs that console.log
- this takes no arguments
- how do we set this to local storage?
- `localStorage.setItem(this.props.match.params.storeID, this.state.order);`
- local storage takes a key, and value
- first need to convert the object to a string, `JSON.stringify()`
- Make sure you reinstate the local storage when the component mounts, set local storage

``` java
    componentDidMount() {
        console.log('did mount!!');
        const { params } = this.props.match;
        // need to reinstate the local storage
        const localStorageRef = localStorage.getItem(params.storeId);
        console.log(localStorageRef);

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }
```

- Ran out of steam to take notes, something about JSON parse from an object back to a string
- And a bug about loading the fishes, this tutorial is getting a little over my head and just going to keep going even though I don't understand some of these concepts

## Syncing data to Firebase and Live Editing

- Edit the form and have it sync up to the firebase database
- Create a new component, `EditFishForm.js`
- set up the component and then you want to loop over the fish
- First you need to check to see if you have the fish
- In your `App.js` file you have to pass it in as a prop, `fishes={this.state.fishes}`, then
- Then in your `Inventory.js` file you want to loop over and display the fish form
- `{Object.keys(this.props.fishes).map(fish => <EditFishForm />)}` to map over, loop over all the, for every fish, render the `<EditFishForm />` component
- Inside your `EditFishForm.js` file, just build out the DOM of the component
- With the form elements
- Now we need to hook up the values to our form
- Pass down the props to the component do we can display it
- `{Object.keys(this.props.fishes).map(key => <EditFishForm fish={this.props.fishes[key]} />)}`
- Render the information in the form

```javascript
class EditFishForm extends React.Component {
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" value={this.props.fish.name} />
        <input type="text" name="price" value={this.props.fish.price} />
        <select type="text" name="status" value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" name="desc" value={this.props.fish.desc} />
        <input type="text" name="image" value={this.props.fish.image} />
      </div>
    );
  }
}
```

- Error, Failed prop type?
- React doesn't like it when you put state into an editable field without a plan for updating it.
- State in two spot, in the text box and state in state
- React intercepts editable, have to listen for an onChange event
- This module got really long and complicated and I need to go back through

## CRUD, create, read, update and delete

- Deleting Items from our inventory and our order
