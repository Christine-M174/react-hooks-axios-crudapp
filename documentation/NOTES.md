## React v6 
--------------------------------------------------------------------------------------------------
### mainly we used the function component :
// Note(2)::  Hooks don't work inside classes — they let you use React without classes.
//Note (3):: There is no render method used in functional components,accepts props as an argument and returns a React element(JSX)
-------------------------------------------------------------------------------------------------------------------
### Axios
// Note(2):: Axios. create is a handy feature within Axios used to create a new instance with a custom configuration.
// Note(3):: Axios (a promise-based HTTP client) Fetch API (a browser in-built web API).
export default axios.create({

    // baseURL: "http://localhost:8080/api",  // Note(4) :: that is a dummy backend url , will fetch data from it
-------------------------------------------------------------------------------------------------------------------
### these are the important react hooks function was used in this app :  

## useState();  
// Note(7) :: // this component is a function component that is a stateless component so ,The React useState() Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application

## useEffect()
// Note(8) :: // the best part of React Hooks , fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. By default, it runs both after the first render and after every update.

## useForm(); -->> handleSubmit(event)   
// Note(4) ::  the react-hook-form functions and the futures https://react-hook-form.com/v6/api#handleSubmit
      events // onSubmit
-----------------------------------------------------------------------------------------------------------------------

### react router

## props.history.push("/"); 
//Note(5) :: this works when the component is being rendered by React Router, bypassing the component as a Component prop to a Route.

## { Link } from 'react-router-dom'; 
// Note(9) :: // lets the user navigate to another page by clicking or tapping on it. 

---------------------------------------------------------------------------------------------------------------------

## React Manage State using ( Context API ) && and comparison between Redux vs. Context api
 ##### // Note(11) :: the example exist in these files :: 
                 create context in component file MoviesStoryContext.js --> and use context in Nav.js component 
                 Context.Consumer vs useContext() They will do basically the same thing to access values passed by Context.Provider. 

 ##### // Note(12) :: What is the benefits to use the Context Api ??
               The React Context API is a way for a React app to effectively produce (( global variables )) that can be passed around. This is the alternative to "prop drilling" or (( moving props from grandparent to child to parent )) , and so on. Context is also touted as an easier, lighter approach to state management  .

 ##### // Note (13) :: what is the difference between context API vs. Redux ?? 
                 If you're only using Redux to avoid passing down props, you can replace it with Context API. Context is great for sharing trivial pieces of state between components. Redux is much more powerful and provides a set of handy features that Context doesn't have.

 ##### // Note (14) :: Those are the causes to use Redux :: 
                     if you are using Redux for everything else (having a predictable state container, handling your application's logic outside of your components, centralizing your application's state, using Redux DevTools to track when, where, why, and how your application's state changed, or using plugins such as Redux Form, Redux Saga, Redux Undo, Redux Persist, Redux Logger, etc…), . The Context API doesn't provide any of this.
                     And the Redux DevTools extension is an amazing, underestimated debugging tool .
                                              
                     The (( third party Library )) which are not available in React Native features.
                     
 ---------------------------------------------------------------------------------------------------------------------            

### sharedService file 
// Note(10) :: // we will use this shred service file in a big projects to share the same methods will be used in many components

----------------------------------------------------------------------------------------------------------------------
 
 ### There are differences between react v8 and v6 specially in react-router-dom .. these are some errors reated to the different versions and the solutions 

 ## inspector:

  3)Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17.


  4)react-dom.development.js:86 Warning: React does not recognize the `activeStyle` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `activestyle` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
 <NavLink className="nav-link" activestyle={{ fontWeight: 'bold' }} 

  5)Warning: Received `true` for a non-boolean attribute `exact`.
   exact="true" 

  6)Uncaught Error: A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.

  7)router.ts:5 Uncaught Error: [nav] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>   

 8)Failed to load resource: the server responded with a status of 500 (Internal Server Error)
   The 500 code would normally indicate an error on the server, not anything with your code.






## links : 

https://react-hook-form.com/api/useform/register
https://reactjs.org/docs/create-a-new-react-app.html
https://namespaceit.com/blog/error-privateroute-is-not-a-route-component-all-component-children-of-routes-must-be-a-route-or-reactfragment

