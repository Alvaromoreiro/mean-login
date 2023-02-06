import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppAuthModule } from './auth/app-auth.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';

//PRIMENG
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './pages/home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './auth/authStore/reducers/auth.reducers';
import { AuthEffects } from './auth/authStore/effects/auth.effects';
import { CardModule } from 'primeng/card';
import { ProfileComponent } from './pages/profile/profile.component';


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
    ButtonModule,
    StoreModule.forRoot({ authState: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
