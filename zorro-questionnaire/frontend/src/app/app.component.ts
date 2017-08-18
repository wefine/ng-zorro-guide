import { Component } from '@angular/core';
import { GlobalRef } from './services/GlobalRef';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contentHeight: number;
  isCollapsed = false;

  constructor(private globalRef: GlobalRef) {
    // getting the native window obj
    this.contentHeight = globalRef.window.innerHeight - (64 + 66 + 18 + 2 * 12);
  }

  ngOnInit() {
  }
}
