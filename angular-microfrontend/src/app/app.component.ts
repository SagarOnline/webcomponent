import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement, NgElement, WithProperties, NgElementConfig } from '@angular/elements';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(private inj : Injector){

  }

  ngOnInit(){
    // Convert `PopupComponent` to a custom element.
    const helloAppElement = createCustomElement(HelloComponent, {injector: this.inj});
    // Register the custom element with the browser.
    customElements.define('hello-app', helloAppElement);
    // Create element
    const helloApp: NgElement & WithProperties<HelloComponent> = document.createElement('hello-app') as any;
    // Add to the DOM
    document.getElementById("hello-app-container").appendChild(helloApp);
  }
}
