import { Component, OnInit } from '@angular/core';
import { GlobalRef } from '../../services/GlobalRef';
import { AuthenticationService } from '../../services/AuthenticationService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contentHeight: number;
  isCollapsed = false;

  constructor(
    private _auth:AuthenticationService,
    private globalRef: GlobalRef) {
    // getting the native window obj
    this.contentHeight = globalRef.window.innerHeight - (64 + 66 + 18 + 2 * 12);
  }

  ngOnInit(){
    this._auth.checkCredentials();
  }
}
