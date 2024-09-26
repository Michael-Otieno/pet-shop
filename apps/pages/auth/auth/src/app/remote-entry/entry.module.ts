import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { NavbarModule } from '@furn-shop/navbar';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    NxWelcomeComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), NavbarModule],
  providers: [],
})
export class RemoteEntryModule {}
