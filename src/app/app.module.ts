import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StatusComponent } from './components/status/status.component';
import { PanelComponent } from './layout/panel/panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FileComponent } from './content/file/file.component';
import { FileDetailsComponent } from './content/file-details/file-details.component';
import { FolderComponent } from './content/folder/folder.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { WorkspaceComponent } from './content/workspace/workspace.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

import { AuthModule } from '@auth0/auth0-angular';
import { StoreModule } from '@ngrx/store';
import { STORE, STORE_EFFECTS } from './ngrx/store/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';



import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AnimateModule } from 'primeng/animate';




@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    PanelComponent,
    NavbarComponent,
    FileComponent,
    FileDetailsComponent,
    FolderComponent,
    SidenavComponent,
    TopbarComponent,
    WorkspaceComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(STORE, {}),
    EffectsModule.forRoot(STORE_EFFECTS),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    AuthModule.forRoot({
      domain: 'dev-yggwu6gtjjgkfwdd.eu.auth0.com',
      clientId: 'zDFzEAT4uQjz8TY0IsVTDifBNHU4cuQd',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    ButtonModule,
    MenuModule,
    MessagesModule,
    DialogModule,
    InputTextModule,
    AnimateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
