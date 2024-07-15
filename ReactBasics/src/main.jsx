
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'


//Lets create React parsed tree format
/*
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click on itt'
)*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />  
)
