/***************************************************************************************************
 * Initialize the server environment - for example, adding DOM built-in types to the global scope.
 *
 * NOTE:
 * This import must come before any imports (direct or transitive) that rely on DOM built-ins being
 * available, such as `@angular/elements`.
 */
import '@angular/platform-server/init';

import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app-config.server';
import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
