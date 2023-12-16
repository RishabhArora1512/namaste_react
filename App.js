// const heading = React.createElement(
//     "h1", 
//     {}, 
//     "Something From React"
// );

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    React.createElement(
    "div", 
    {id:"child"}, [React.createElement(
    "h1", 
    {id:"head"}, "This is an H1 tag")]
    )
);

// root.render(parent);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //if something is there in root already, root.render will replace it
// root.render(heading);

//{} - for giving attributes to the tag in create element.

