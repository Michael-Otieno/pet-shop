import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { remoteRoutes } from './entry.routes';
import { NavbarModule } from '@furn-shop/navbar';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UiModule } from '@furn-shop/ui';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), NavbarModule,UiModule],
  providers: [],
})
export class RemoteEntryModule {}
