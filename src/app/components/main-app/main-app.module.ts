import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainAppRoutingModule } from './main-app-routing.module';

import { AuthButtonComponent } from 'src/app/components/shared/auth-button/auth-button.component';

import { PanelComponent } from 'src/app/components/main-app/content/main-panel/panel/panel.component';
import { WorkspaceComponent } from 'src/app/components/main-app/content/main-panel/workspace/workspace.component';
import { NavbarComponent } from 'src/app/components/main-app/content/navbar/navbar.component';
import { SidenavComponent } from 'src/app/components/main-app/content/sidenav/sidenav.component';
import { TopbarComponent } from 'src/app/components/main-app/content/topbar/topbar.component';
import { MainAppComponent } from 'src/app/components/main-app/main-app-component/main-app.component';
import { PrimengModule } from 'src/app/modules/primeng/primeng.module';
import { FileDetailsComponent } from '../shared/file-details/file-details.component';
import { FileComponent } from '../shared/file/file.component';
import { FolderComponent } from '../shared/folder/folder.component';
import { StatusComponent } from '../shared/status/status.component';

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
