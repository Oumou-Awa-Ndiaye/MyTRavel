import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
export const AppConfig = {
  apiUrl: 'http://localhost:3000/api',
  apiKey: 'YOUR_API_KEY_HERE',
  maxResults: 10
};
