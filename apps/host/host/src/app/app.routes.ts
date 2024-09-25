import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () => import('cart/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('services/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('about-us/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('shop/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('auth/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('contact-us/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
