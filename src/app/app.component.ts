/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from '@angular/core';
import { Foo } from './foo.component';

@Component({
  selector: 'app-root',
  imports: [Foo],
  template: `
    Test
    <div>
      @defer (hydrate never){
      <app-foo />
      }
    </div>
  `,
})
export class AppComponent {
}
