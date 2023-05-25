import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedGuard } from '../../guards/user-logged.guard';
import { MainAppComponent } from 'src/app/components/pages/main-app/main-app.component';
import { WorkspaceComponent } from 'src/app/components/content/workspace/workspace.component';

const routes: Routes = [
  {
    path: '', component: MainAppComponent,
    canActivate: [UserLoggedGuard],
    children: [
      {
        path: 'workspace', component: WorkspaceComponent,  children: [
          { path: ':folder',  component: WorkspaceComponent, children: [
            {path: ':folder', component: WorkspaceComponent}
          ] }
        ]
      },
      /* { path 'settings', component: SettingsComponent } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
