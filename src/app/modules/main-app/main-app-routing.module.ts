import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppComponent } from '../../components/pages/main-app/main-app.component';
import { PanelComponent } from '../../components/layout/panel/panel.component';
import { WorkspaceComponent } from '../../components/content/workspace/workspace.component';

const routes: Routes = [
  {
    path: '', component: MainAppComponent,
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
