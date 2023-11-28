import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    @for(item of array2; track item) {
    <div>--{{ item }}--</div>
    }
    <button (click)="onClick()">xxx</button>
  `,
})
export class AppComponent {
  array2 = ['foo', 'bar', 'baz'];

  onClick() {
    this.array2.sort();
  }
}
