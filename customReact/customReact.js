function customRender(reactElement,container){
    // create a new element of type reactelement
    //const domElement=document.createElement(element.type);
    //Now add children to that new elment that is click on me
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    if(domElement!=null){
    container.appendChild(domElement)
    }*/
    //To make the above code more confined we might loop it out so

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(const prop in reactElement.props)
    {
        if(prop === reactElement.children)continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement)
}
//One thing tolean from this is that we basically in react render some copmonents or function which 
//usually contains some html tags so that tags are actually parsed in the form provided below.. 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

//Now we can see we made our customReact and the basic learnings would be that we were able to learn about how
//we can create custom react but the point to be noted is that reactElement syntax is not simillar to that of actual
//react so we might face problem if we try to render directly by that but not by our made fnc.