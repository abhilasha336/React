

function createRender(createElement,rootContainer){
  /* const firstElement= document.createElement(createElement.type) //built in function
   firstElement.innerHTML=createElement.children
   firstElement.setAttribute('href',createElement.props.href)
   firstElement.setAttribute('target',createElement.props.type)
   rootContainer.appendChild(firstElement)
   */

   const reactElement=document.createElement(createElement.type)
   reactElement.innerHTML=createElement.children
   for (const prop in createElement.props) {
        reactElement.setAttribute(prop,createElement.props[prop])
   }
   rootContainer.appendChild(reactElement)

}

const createElement={
    type:'a',  //html elements
    props:{    //html elements attributes,we can name it as attributes also
        href:'https://google.com',
        target:'_blank',
    },
    children:"please click this to visit google" //anchor tag to be displayed on dom
}

const rootContainer=document.querySelector('#root') //dom root element in which we inject custom created element

createRender(createElement,rootContainer); //element,destination of element to be inserted into real main dom container ,is. root