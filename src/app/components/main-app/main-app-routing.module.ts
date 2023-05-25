import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from 'src/app/components/main-app/content/main-panel/workspace/workspace.component';
import { MainAppComponent } from 'src/app/components/main-app/main-app-component/main-app.component';
import { UserLoggedGuard } from '../../guards/user-logged.guard';

const routes: Routes = [
  {
    path: '', component: MainAppComponent,
    canActivate: [UserLoggedGuard],
    children: [
      { path: 'workspace', component: WorkspaceComponent },
      /* { path 'settings', component: SettingsComponent } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
