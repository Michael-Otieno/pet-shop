import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { NavbarModule } from '@furn-shop/navbar';
import { UiModule } from '@furn-shop/ui';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent,  ],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes),NavbarModule,UiModule],
  providers: [],
})
export class RemoteEntryModule {}
