import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//document.object  style element creationn model
const createElement={
    type:'a',  //html elements
    props:{    //html elements attributes,we can name it as attributes also
        href:'https://google.com',
        target:'_blank',
    },
    children:"please click this to visit google" //anchor tag to be displayed on dom
}

const AreactElement=(
    <a href="http://google.com">hit to visit google</a>
)

function NewApp(){
    return(
        <h1>my new appppppppppppppppppp</h1>
    )
    
}


//React.createElement style,so we cannot add {if username==='abhilash} in html path ,but we can add {2+2}in html path
const AcustomElement=React.createElement(
    'a',
    {href:"https://google.com",target:"_blank"},
    "hit this link to visit google",

)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    // AreactElement
/* <NewApp/> */
// NewApp()
AcustomElement
)
