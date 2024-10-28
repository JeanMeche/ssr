import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-foo',
  template: `Foo`,
})
export class Foo {
  constructor() {
    console.log('Foo constructor');
  }
}
