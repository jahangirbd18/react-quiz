import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4>1. What is the Purpose of React Router</h4>
            <p> React Router is a library for managing navigation 
                in a React application. It allows developers to
                create and handle routes dynamically, enabling a 
                single-page application to have multiple views or 
                pages, each accessible via different URLs. 
                React Router helps in building a seamless 
                and efficient navigation experience without 
                full page reloads. </p>
            <h4>2. How does context API works</h4>
            <p> The Context API in React provides a way to pass data through the component tree without having to pass props down manually at every level. It allows you to create a context, provide data at a higher level in the component tree, and consume that data at any lower level component. This is useful for global state management and avoiding prop drilling. </p>
            <h4>3. Describe the use of useRef Hook</h4>
             <p> The useRef Hook in React is used to create a mutable object that persists across re-renders. It can store a reference to a DOM element or any other value. When used with a DOM element, useRef provides direct access to the element, enabling tasks like focusing an input or maintaining scroll positions. It doesn't cause re-renders when its value changes, making it efficient for managing mutable state. </p>

        </div>
    );
};

export default Blog;