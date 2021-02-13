# Beginner Javascript Notes, WesBos Course, 2020

## JS Primitives

### primitive types

strings
numbers
objects
null
undefined
boolean
symbol

Object, everything in JS is an object, functions, arrays etc.

SNOBUSN
String
Number
Object
Boolean
Undefined
Symbol
Null

## FUNCTIONS

Functions can group together a set of instrucitons, taking in values (arguments), doing some work and returning a set of values.

Functions are first class citizens
values that can be stored, functions can be passed into other functions

Function notes are in playground/custom-functions/ways-to-make-a-function.js

## SCOPE

Where are my variable and functions available to me?

## HOISTING

Allows me to access my functions and variables before they have been created.

## CLOSURES

The scariest word in JS!!
A closure is the ability to access the parent level scope from the child level scope even after the parent function has been terminated.
// Closures are the ability for a child function, to access the variables of a higher level scope, EVEN AFTER THE FUNCTIONS HAVE BEEN RUN, CLOSED

## DOM

window, The window is everything about the browser window object

document, the entire document,

navigator, things that are device specific are available, webcam etc.

Order of operations which JS runs, same as math
BEDMAS
Brackets
Exponents
Division
Multiplication
Addition
Subtraction

## EVERYTHING IN JS IS AN OBJECT

## METHODS

When you have a function, that lives on a property in an object, that is referred to as a method of that object.

## Arrays

Static methods, which are not available on every single array
Utility methods

## Prototypes

Look at the types, Array, Object, Number, they are all just functions
When you run the new keyword in front of them, it returns an object.
That's why we say everything in JS is just an object
They are packed with all these little methods for working with it.
const myNumber = new Number(100)
myNumber now has access to all the methods

## This keyword

Referes to the instance of an object that a function is found.
The thing to the left of the dot that you are referring to. Sometime you hear the term bound. This function is bound to soemthing. When something is bound to something, the this keyword is equal to the thing it's bound to.

The this keyword is always scoped to a function. Except for an arrow function, it will be scoped to the higher function. And if there is not higher function. It will go to the window.

You can use the This keyword to store info about the instance of that function

## Prototype

Array for example, has methods that allows each array to share that method. Allows you to share functions through the prototype.

The prototype lookup, if you put something on the prototype, and it doesn't exist in the instance, it will look for it in the mamma. First it will look for it in the instance. If it doesn't find it, it will look for it in the mamma, prototype. You can use it ::

Everytime a pizza is made, you have access to that function. Examples.

First it will look for the property on the instance, if it doesn't find it. It will go up to look for it on the prototype level. The mamma level.

example:
const name = 'chris';
name.
The string prototype, has a bunch of methods available to it.
and everytime you create a string, you have all the methods available to you, because all those methods are defined on the prototype of strong.

Built in, they just come with the language.

You can overwrite the prototype, never modify built ins.
String.prototype.toUpperCase = function() { return 'YELLING'}

Use this case, when the browswer doesn't support, you can add a polyfill to support older browswers.

Whenever you add a method to the prototype of something, that will be available to every intance of.

You can add it to your own, don't modify exisitng, like string or array

## Bind, Call, Apply

Change the scope of what the this keyword is equal to inside of a keyword, or inside a method

JS this keyword, is always defined by where the function is being called, NOT where the function is being defined.

You can use the Bind keyword, to change where the this keyword is defined. .bind, to change what the this keyword is equal to.

Object Oriented programming, uses this keyword

Functionl Programming, uses arguments

Using bind will change the context of what this is equal to inside of a funciton, or inside a method

You can pass in additional arguments into bind

.bind returns a function that needs to be called by itself.

.call will do the same thing as .bind, but will additionally run the function for you

If you need to bind a function and call it later, use .bind

If you need to bind a function and call it immediately, use .call

## Callback and Event Loop and Call back hell

JS is single threaded meaning that we can only really run one thing at once.

The callstack, will only run one fuction at a time. What happens when you run a function, then run another function.

JS is asychrounous, not going to stop running, it will put it off at what we call the web API, and when it comes back, it will stick it in the callback queue, and then run it.

Good video to watch explaining the event loop
<https://www.youtube.com/watch?v=8aGhZQkoFbQ>

## Call Stack

What JS itself is doing, when it has nothing left to do, it will reach into the callback queue and pull the next one in

## Web API

Things that are waiting, button or timer, or things we are listening for, and when somethign happens in the web API, it will go to the callback queue

Callback Queue
After something happens in the web api, it will go into the queue. When the call stack has nothing left to do, it will pull in the next thing in.

Just know that JS is single threaded, meaning that the callstack can only run one thing at a time. And if there are multiple things queued up,

So how do we deal with stuff that does need to wait? If I want to use an API and grab some data and come back to it. We shouldn't have to stop everything in the browser. Send off the fetch request, and carry on with our lives. When the timer is done, then we can come back to it and deal with it.

Callback, hard to do multiple things at once.

## CALLBACK HELL

If you need to do one thing after another, you must nest the callbacks inside of each other. Because they all depend on the previous callback to be called before it can run. Also called Christmas tree code.

The solution to call back hell, is the Promise land. It's an IOU to something in the future. Promises allow us to write code that is much flatter.

## PROMISE LAND

Promise is an IOU for something that will happen in the future. Request a timer to start, data to be requested, a mic to give access to. Instead of getting a immediate data, you get a promise back. A little ticket for some data, and evantually you will get some data back. But it will fail sometimes.

For example, the pixilated face lesson. You have to wait for something to happen before you can run the rest of the code.

Make a pizza promise, return the pizza promise, they are made imediatly but do not resolve until they are ready. Until the data is ready

The logic to how the promise gets resolved, is always in the body of the promise. That promise will always resolve, or reject when it feels like it is ready.

To access the promise, chain a .then() on to the promise.

Always with your Promise built functions, you must always chain a .then() and a .catch() so if anything goes wrong, you can catch it and do something.

If promise chaining, the chain will stop if it receives an error, and the rest of the chain will not be run.

## ASYNC AWAIT

It's still a promise, a new syntax that will allow us to use the keyword, async, and await, in a much nicer way.

Nothing changes when you create your promise, only where you call the promise does async await come in handy.

You can only use async/await syntax inside a function.

What async/await allow us to do, you can put the keyword 'await' in front of a promise based function. And it will temp pause that funciton until that promise is ready.

But first, you have to mark your function with async, so the function knows, hey, you are going to be doing some awating.

YOU CANNOT USE AWAIT ANYWHERE ELSE, EXCEPT IN ASYNC FUNCITONS.

Marking functions with async, we can do that with any type of function

When ever you have a funciton, just put the word async in front of it, and that will allow you to do await in front of it.

## If you want the data that comes back from a promise, you must await it

If you run the function and just store it in a variable, it will just run the promise and not bring anything back.

The reason it's _await_ and not just _wait_ is because it's ASYCHROUNOUSLY waiting, meaing that it't not going to just pause all the JS.

## Handling error in ASYNC AWAIT

4 ways to handle the errors, async-awit-error-handling.html for reference

- try and catch, try a bunch of stuff, wrap it in a safety blanket and catch the error. IF something breaks in the try, it will not break your entire app. It will just move on to the catch, and run that error.

- async await, when you make a function with async, it will immediately return a promise to you.

- async will always return a promise, which means we can always use the .catch() or .then() on async functions if we want.

- last way, a higher order funciton, a function that returns another funciton. Define all your functions, as if you never have any errors. Don't worry about error handling inside the functions. Then, you can catch it at runtime, or use High Order Function HOF. That way you don't have to write the error handling every time.

## Pure Function

A function that takes in arguments, will always return the same value, no matter if it's 100 years from now or not.

## Recursion

Refers a funciton caling itself until there is some exit condition.

## API, Application Programming Interface

ex; <<https://api.github.com/users/wesbos>

A way for you to talk to a machine, in a standardized percedure. If you are building an app, the client browser, that needs to talk to a server that exist somewhere. You need to be able to access the functionality.

As a web developer, you are most likely to just pull down data. How do I pull down data from a service, and display it.

If you want to be able to access that data, that service has to offer up an API. Just a url that you can hit with some data. And it responds with JSON.

Javascript Object Notation, good way to transport JS objects from server to server.

What comes back, is not a JS object, just a string. Looks like an object, but its' just a string.

A server will just give you a string, it's up to you to turn it back into a JS object. Wrap in a JSON.parse(myData);

Lots of API's will allow you to pull the data from their server, into your own. Wide open API's, not authentication.

What the heck is AJAX?
Async
Javascript
And
Xml, another way to receive data. Old school tech, not around anymore only on legacy shit

When someone says AJAX, they basically mean fetching data from an API and displaying it.

## Fetch

You can use fetch to download all types of data, not just JSON. Can be raw text, an image etc.

Step one, is you have to down load it, then convert it do a JS object.

Some nice public API's
<https://github.com/public-apis/public-apis>

## API

- query param, first one start with ?, these are never standard, always different

<http://www.recipepuppy.com/api/>

// always start with ?
?
i=onions,garlic
// additional params have an additional ?
&
q=omelet
&
// pagination
p=3

## CORS

Cross Origin Resource Sharing

CO, what are origins, domain names are origins, and if I want to share data, by default you cannot share data between origins, domains.

You can share data from other parts of your website. But as soon as you cross origins, from one domain name and another domain name. Security issues.

By defualt. Websites cannot talk to one antoher from one domain name from another.

But if you want to use data, from another domain or API, you need to be able to talk from one domain to another.

So they have to implement a CORS policy. This has to be implemented on the server.

CORS Policy
ok, wesbos.com is allowed to ask for data and we will return it, that is safe. Has to happen on the server of the person you are asking the data.

What do you do when the API doesn't have a CORS policy?
This would work, if you made the request from anything other then the browsers. Like, Node.js, php, ruby on rails

So the solution is, instead of going from local host to recipe pully. You need a PROXY.

localhost to PROXY to recipepuppy is ok

Google CORS PROXY, you can use <https://cors-anywhere.herokuapp.com/>, take that url and put it in front of your url's. That will PROXY that data.

DON'T EVER USE THIS FOR ANYTHING THAT HAS SENSITIVE DATA. This data will pass through that server and info will be seen.

- CORS PROXY, stick it in front of your url.

## Parcel set up

- npm init
- npm install parcel-bundler
- open package.json
- change the scripts to run it
  "scripts": {
  "start": "parcel index.html"
  },
- then run, npm run start

Babel, will transpile you modern JS code to older versions. Tell Babel, don't transpile async await.

In package.json, use browserslist package. Tells Babel what to transpile and what to leave.

<https://github.com/browserslist/browserslist>

"browserslist": [
"last 1 chrome versions"
]

Sometimes if you have issues, just open in finder and delete the cache and dist folder.

open up a folder from terminal, open .

## Headers

What's a header, additional info that comes along with a request.

## Utility Function

- Get random number range

  <code>
  Math.floor(Math.random() \* 5)
  </code>

  <code>
  function randomItemFromArry(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  return item;
  }

</code>

## API Rate Limit

Often API's will rate limit you, you will only have 60 request per hour. In taht case you need to cache the rates.

## Modules

A way to structure and orgazie your JS, allow us to share and structure your JS. MOdules have their own scope. We don't have to worry about global variables. Can hold anything, data, config.

Data, and utilities

Modules, ES6 modules, ECMA Script.

Generally have one script tag, that's your entry point into your JS. Then add the attribute, type=module

<code><script src="./scripts.js" type="module"></script></code>

Can't use modules unless it's a server.

- Start up a quick server

  - You can use Live Server extension on VS Code
  - Browswer sync npm install -g browser-sync, go into directory in terminal, type browswer-sync to start the server

- module, a file is a module
- two types of imports, names and default
- before you can import something, you have to export it.
- export, if you want to surface functionality from one file, says this thing can be used by other JS modules.

  <code>
  export function returnHi(name) {
  return `hi ${name}`;
  }
  </code>

- import, import it from the file it's in
  <code>
  import { returnHi } from './utils.js';
  </code>

- scope, modules have their own scope, variable scoped to the module file, can only be used in that file. Not available global scope. The beauty of modules, they are only available to that module.

## Named Exports

- you can tell because it will simply have an export value in front of the function definition, or in front of the variable decloration. Or it is in curly brackets.

  <code>
    export function returnHi(name) {
    return `hi ${name}`;
    }

  export last = 'davis';

  export { last }

  </code>

## Default export

- every module can have as many as you want. Or one default export. You can import it and name it whatever you want.

  <code>
  const person = {
  name: 'Chris',
  last: 'Bos',
  };

  export default person;
  </code>

## Misc

- Which one to use? Named and Export
  If a module does one thing, put that as the default. But if your module does multiple things, then do named.

- But you can mix and match, default and named.

- And you can rename it when you import it.

- Can import from any module to any module

- look up the syntax, import `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import`

- mdn export `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export`

## On demand import

- only we you need them, on demand load JS, hover over a button, or a list, data is ony needed when it's needed. Button when clicked and load it.

- organizing, have a `scripts.js` file that will select my elements and hook up my event listeners. The all the other `utilities, data, functionality, handlers` all those go in seperate files. Then import that in as you need it. Keeps entry point nice and lean, quickly scan it and see what it does. If I want to knwo how does it do it, then open the module.

- async await to load the resoruce on demand, with a eventListener click or something like that.

<code>
export async function handleButtonClick(event) {

// destructuring a property, default, rename

const { localCurrency, default: currency } = await import('./currencies.js');

console.log(localCurrency, currency);

}
</code>

## Entry Point File

- Entry point file, in the html file, make sure you put the type module.

- Do the selecting, and event listeners

- Data, functionality, handlers, utilities are in seperate files

- Import things where you need it, can import into multiple modules

  <code>
      <script src="./jokes.js" type="module"></script>
  </code>

## Budler

Compress all your code, minify the code, makes code small as possible, detect and remove un-used code, transpile your code to support older browsers. Sass and less, auto-prefixer.

Budler, includes a dev server.

- Parcel, Webpack, Pika, rollup

If you want to ship your code, a budler will do that.

- Package.json

  - first thing you need is a package.json, includes info about dependencies, scripts, bunch of info about your project.

          <code>
          npm init

          npm install parcel-bundler --save-dev

          or

          npm install parcel-budler -D

          "scripts": {
          "start": "parcel index.html"
          }

          npm start

          </code>

          - Dev dependency, NOT needed for the app to run, but needed for someone to work on the app.

          - Dependency, React or Vue

          - if using async/await, add browsers list to the package.json file, not sure why

          <code>

          "browserslist": [
          "last 1 chrome versions"
          ]

          </code>

          - If Parcel is acting strange, just go to directory and delete cache and dist folders, then re-run npm start to regenerate.

          - Once you are done, write another script, build. Then run in command, npm run build

          <code>
          "scripts": {
          "start": "parcel index.html",
          "build": "parcel build"
          },

          </code>

          - Put all the code in a dist folder. Map files map back the compiled version back to the original module. And the browser is able to tell the browser where the errors are.

          - Look out for, or take out the type="module" in the script tag

          - Cache busting, random key into the name of the file, when you build it automatically detects changes and put a new random key to bust the cache so the latest change shows up.

## npm packages

Ok to delete your node_modules folder, you can always get it back with npm i. Never modify code inside node modules folder

  <code>

    npm init

    npm install parcel-bundler --save-dev

    npm i faker date-fns await-to-js lodash axios

  </code>

## Useful packages

- waait, <https://www.npmjs.com/package/waait>, just a package similar to set timeout

- faker.js, <https://www.npmjs.com/package/faker>, really helpful if you just want to get some data, name, address anything you can think of.

- date fns, <https://date-fns.org/>, similar to moment.js, but you can pull in the just the methods you want. Makes working with dates much easier.

- axios, <https://github.com/axios/axios>, same thing as fetch, alternative to fetch

- Lodash, <https://lodash.com/>, utility lib for working with arrays and objects. Use it sometimes, similar to map, filter, reduce

- await to js, <https://www.npmjs.com/package/await-to-js>,

## Security

- JS is totally public, able to see all the code in the browser, we just give the browswer the code.

- Don't trust the client side, personal info, as long as the browswer can read it, people can reverse engineer it.

- API keys for example, some are ok, others are not, links for downloadable private, prices, people can modify in the client. Double check value on the server side.

- Don't trust the client, anything that is sensitive must be done on the server, re-calculated.

- XSS and sanitising your inputs, text input with raw inputs, sometiems you want to take in HTML and display it on the page. ANytime you are taking data from the user and displaying it. innerHTML etc. insertAdjacentHTML, you must first sanitise it.

- what can happen, people can write code and runs on your page. Someone could just inject styles and mess with things.

- Anytime a user is able to run JS on the page, then you are in trouble. Take the image tag and highjack the onload event. If someone is allowd to run JS, then they become a puppet of your own account. They can click buttons, get data etc.

- Find a way to remotely run JS on someones page.

- Even an input box, someone can use onload trick with image src to load malicious JS

- ANYTIME YOU TAKE USER DATA AND PUTTING IT ON THE PAGE, YOU MUST FIRST SANITIZE IT.

- Dompurify, take in a string and scrub it.

- npm package, <https://www.npmjs.com/package/dompurify>

- by default it will take out nasty JS, but has options for taking out styles and attributes

- Sending data, make sure it's https, if you get the data, over an insecure origin, could be other people on that network, or anywhere along the lines of that and peer into that and see what you are interested in. And the post, they would be able to see all the data you are sending.

- If you make it https, the data will be encrypted.

## Secure Origin

- Something that is https, or localhost, browswer will not allow you to have access to microphone or camera.
