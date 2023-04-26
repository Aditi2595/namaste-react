/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div> 
 * </div>
 */
import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => (
    <h1 id="heading" className="head" tabIndex="1">
        Namaste React through JSX
    </h1>
)
 
const title = (
    <h1 id="heading" className="head" tabIndex="1">
        Namaste React through React Element
    </h1>
);
// console.log(Title)

// React Functional Component - a JS function that returns JSX/react element
//  calling another component inside a component is called Component Discomposition
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {title}
        <Title></Title>
        {Title()}
        <h1>Namaste React through functional component</h1>
    </div>  
);
// If we want more than one container div, we need to use a <React.Fragment></React.Fragment or <>(empty tags) since we know that a react component can have only one parent element
const HeadingComponent1 = () => (
    <>
        <div id="container">
            <Title />
            {title}
            <Title></Title>
            {Title()}
            <h1>Namaste React through functional component</h1>
        </div>
        <div id="container-2">
            <h1>Another container using empty tags</h1>
        </div>  
    </>
    
);

// Another way to write
// const HeadingComponent1 = () => <h1>Namaste React through functional component</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a functional component
root.render(<HeadingComponent1 />);
