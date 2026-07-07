import { createRoot } from 'react-dom/client'
//import { createElement } from 'react'

/*
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.

const h1 = document.createElement("h1");
h1.textContent = "This is React";
h1.className = "header";

const root = document.getElementById("root");
root.appendChild(h1);
*/

const Lesson10 = () => {
  return <h1>This is React</h1>
}

export default Lesson10;