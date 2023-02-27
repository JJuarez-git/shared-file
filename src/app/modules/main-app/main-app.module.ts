import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainAppRoutingModule } from './main-app-routing.module';

import { StatusComponent } from 'src/app/components/content/status/status.component';
import { PanelComponent } from 'src/app/components/layout/panel/panel.component';
import { NavbarComponent } from 'src/app/components/layout/navbar/navbar.component';
import { FileComponent } from 'src/app/components/content/file/file.component';
import { FileDetailsComponent } from 'src/app/components/content/file-details/file-details.component';
import { FolderComponent } from 'src/app/components/content/folder/folder.component';
import { SidenavComponent } from 'src/app/components/layout/sidenav/sidenav.component';
import { TopbarComponent } from 'src/app/components/layout/topbar/topbar.component';
import { WorkspaceComponent } from 'src/app/components/content/workspace/workspace.component';
import { AuthButtonComponent } from 'src/app/components/content/auth-button/auth-button.component';

import { PrimengModule } from '../primeng/primeng.module';
import { MainAppComponent } from 'src/app/components/pages/main-app/main-app.component';

@NgModule({
  declarations: [
    StatusComponent,
    PanelComponent,
    NavbarComponent,
    FileComponent,
    FileDetailsComponent,
    FolderComponent,
    SidenavComponent,
    TopbarComponent,
    WorkspaceComponent,
    AuthButtonComponent,
    MainAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainAppRoutingModule,
    PrimengModule
  ]
})
export class MainAppModule { }
