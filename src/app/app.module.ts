import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

// Auth0
import { AuthModule } from '@auth0/auth0-angular';

// Store NGRX
import { StoreModule } from '@ngrx/store';
import { STORE, STORE_EFFECTS } from './ngrx/store/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { TokenInterceptor } from './services/token.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(STORE, {}),
    EffectsModule.forRoot(STORE_EFFECTS),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      trace: true
    }),
    AuthModule.forRoot({
      domain: 'dev-yggwu6gtjjgkfwdd.eu.auth0.com',
      clientId: 'zDFzEAT4uQjz8TY0IsVTDifBNHU4cuQd',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
