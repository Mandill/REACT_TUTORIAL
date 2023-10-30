// function customContainer(reactElement,container)
// {
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
// }
// const reactElement ={
//     type: 'a',
//     props: {
//         href:"https://google.com",
//         target: '_blank'
//     },
//     children:"click me to Visit Google"
// }

// const mainContainer = document.querySelector('#root')

// customRender(reactElement,mainContainer)

function insert(reactElement,container)
{
    
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target: '_blank'
    },
    children:"gOOGLE"
}

const container = document.querySelector("#root")
insert(reactElement,container)