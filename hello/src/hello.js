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
        let clonedTemplate = templateContent.cloneNode(true);

        shadowRoot.appendChild(clonedTemplate);
        //workaround for executing script elements in IE
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        if(isIE || isEdge ){
            var scripts = shadowRoot.querySelectorAll('script');
            for (var i=0; i<scripts.length; i++){
            this.swapScript(scripts[i]);
            }
        }
    }

     swapScript(script) {
        if (script.nodeName != 'SCRIPT')
          throw new Error("swapScript requires script");
        var clone = document.createElement('script');
        clone.appendChild( document.createTextNode(script.textContent));
        script.parentNode.insertBefore(clone, script);
        script.parentNode.removeChild(script);
      };
}

customElements.define('hello-element', HelloElement);