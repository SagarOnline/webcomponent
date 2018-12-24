class AppLoader extends HTMLElement{
    constructor(){
        super();
        
    }

    connectedCallback(){
   
        const shadowRoot = this.attachShadow({mode: 'open'});
        let element = document.createElement("h1");
        let text = document.createTextNode("Hello World");     // Create a text node
        element.appendChild(text);
        shadowRoot.appendChild(element);
    }
}

customElements.define('app-loader', AppLoader);