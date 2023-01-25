import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppAuthModule } from './auth/app-auth.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';

//PRIMENG
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAuthModule,
    AppAuthModule,
    RouterModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
