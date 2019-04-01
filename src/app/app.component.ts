import { Component, AfterViewInit } from '@angular/core';
import bulmaQuickview from 'bulma-quickview/dist/js/bulma-quickview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ng2-johann';

  constructor() { }

  ngAfterViewInit(): void {
    const quickview = bulmaQuickview.attach();
  }
}
