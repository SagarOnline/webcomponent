class HelloElement extends HTMLElement{
    constructor(){
        super();
        
    }

    connectedCallback(){
        let importDoc = document.currentScript.ownerDocument;
        console.log(importDoc);
        let template = importDoc.querySelector('#hello-template');
        console.log(template);
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}

customElements.define('hello-element', HelloElement);