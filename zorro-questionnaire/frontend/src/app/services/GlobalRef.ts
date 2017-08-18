import { Injectable } from '@angular/core';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class GlobalRef {
  get window(): any {
    return _window();
  }
}
