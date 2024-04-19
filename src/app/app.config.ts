import { APP_ID, APP_INITIALIZER, ApplicationConfig } from '@angular/core';

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { map } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    { provide: APP_ID, useValue: 'serverApp' },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (httpClient: HttpClient) => () => {
        return httpClient
          .get(
            'https://upload.wikimedia.org/wikipedia/commons/e/e3/Owned_by_USA_and_Canada_East_Quoddy_Lighthouse%2C_located_on_Campobello_Island.jpg',
            { responseType: 'blob' }
          )
          .pipe(map(() => randomString(10000)));
      },
      deps: [HttpClient],
    },
  ],
};

const alphabet =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function randomString(size: number): string {
  let r = '';
  for (let i = 0; i < size; i++) {
    r += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return r;
}
