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


// const parent = React.createElement("div", {id:"parent"},[
// React.createElement("div", {id:"child"},[
// React.createElement("h1", {}, "I'm h1 tag"), 
// React.createElement("h2", {}, "I'm h2 tag")]
// ),
// React.createElement("div", {id:"child2"},[
//     React.createElement("h1", {}, "I'm h1 tag"), 
//     React.createElement("h2", {}, "I'm h2 tag")]
//     )]);
// console.log(parent);

const heading = React.createElement("h1", {id:"heading"}, "Namaste React");
console.log(heading);

// JSX (transpiled before it reaches the JS) - Parcel - Babel
// JAX => React.createElement => ReactElement - JS Object => HTML(render)
// to write JSX in multiple lines, we need to wrap it inside ()


const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Namaste React through JSX</h1>;
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);