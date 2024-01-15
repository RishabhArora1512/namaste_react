#Namaste React.








#Parcel
-Dev Build
-Local Server
-HMR = Hot module replacement
-Uses A file watching algo written in C++. to do HMR
-Faster builds because of caching - .parcel_cache
-Image optimisation
-Minification of our files. - Bundling of our files.
-Compressing
-Consistent Hashing
-Code splitting
-Differential Bundling - To support older browsers.
-Diagonostic
-Better error suggestions.
-provides HTTPS support.
-Tree shaking algo - Removes unused code for us automatically on compressing
-Different Dev/prod bundles.




// const parent = React.createElement(
//     "div", 
//     {id:"parent"}, 
//     React.createElement(
//     "div", 
//     {id:"child"}, [React.createElement(
//     "h1", 
//     {id:"head"}, "This is an H1 tag")]
//     )
// );

// root.render(parent);


//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(parent); //if something is there in root already, root.render will replace it
// root.render(heading);

//{} - for giving attributes to the tag in create element.

//React Element - Kind of eq to DOM element.





// const jsxHeading = (<h1>Namaste React using JSX 🚀</h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(jsxHeading);



// const TitleComponent=()=>(<h1>Namaste React using JSX 🚀</h1>)
// const something = (<h1>Something</h1>);

// //React Functional Component
// const HeadingComponent = ()=>{
//     return <div id="container">
//         <TitleComponent/>
//         {something} 
//         {TitleComponent()}
//         <h1>Something bro</h1>
//     </div>//we can put any JS code inside {}.
// }

// root.render(<HeadingComponent/>);












/*
*  Header
* - Logo, Nav items
* Body
* - Search, RestaurantContainer, RestCard - img, cuisine,star rating, nameof res, 
* 
*/



# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our own store
- Connect store to the app
- Slice (cartSlice)
- dispatch(action)
- Selector
