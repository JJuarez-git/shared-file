import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './layout/panel/panel.component';
import { StatusComponent } from './components/status/status.component';
import { WorkspaceComponent } from './content/workspace/workspace.component';

const routes: Routes = [
  {path: '', component: WorkspaceComponent},
  {path: 'status', component: StatusComponent},
  {path: 'logout', component: StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
