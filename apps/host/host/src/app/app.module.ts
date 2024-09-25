import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavbarModule } from '@furn-shop/navbar';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent,],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes),NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
