# Learning Redux from Lynda tutorial
Fellow the tutorial from Lynda - https://www.lynda.com/React-js-tutorials/Learning-Redux/540345-2.html

## [Redux](http://redux.js.org/docs/introduction/)
Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the three principles of Redux.
> Redux isn't exactly Flux, it's Flux-like, and Flux data flows in one direction.
> Instead of breaking the state up into different objects, we will create functions that are designed to manage specific leaves and branches of this state tree.
> *Reducers* : Actions describe the fact that something happened, but don't specify how the application's state changes in response. This is the job of reducers. Now we don't have to worry about how these reducers are composed. All we have to do is identify state, write good reducers, and let the Redux store handle the rest.
- [Single source of truth](http://redux.js.org/docs/introduction/ThreePrinciples.html#single-source-of-truth): The state of your whole application is stored in an object tree within a single store.
- [State is read-only](http://redux.js.org/docs/introduction/ThreePrinciples.html#state-is-read-only): The only way to change the state is to emit an action, an object describing what happened.
- [Changes are made with pure functions](http://redux.js.org/docs/introduction/ThreePrinciples.html#changes-are-made-with-pure-functions): To specify how the state tree is transformed by actions, you write pure reducers.

[Actions](http://redux.js.org/docs/basics/Actions.html)
[Reduces](http://redux.js.org/docs/basics/Reducers.html)
[Store](http://redux.js.org/docs/basics/Store.html)

## Command to Run the Front-end

```#npm start```

