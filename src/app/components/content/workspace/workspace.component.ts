import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addFolder } from 'src/app/ngrx/actions/workspace.actions';
import { SocketService } from 'src/app/services/socket.service';
import { StoreEntity } from 'src/app/ngrx/store/store';
import { WorkspaceItem } from 'src/app/models/WorkspaceItem';
import { getWorkspace } from '../../../ngrx/actions/workspace.actions';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  count$!: Observable<number>;
  workspace$!: Observable<WorkspaceItem[]>;

  constructor(
    private socketService: SocketService,
    private store: Store<StoreEntity>
  ) { }

  ngOnInit(): void {
    this.workspace$ = this.store.select((state) => state.workspace);
    this.socketService.listen('add-folder-emit').subscribe({
      next: ({ folder }) => this.store.dispatch(addFolder({ payload: folder }))
    })
  }

  changeStatus(action: string) {
    this.socketService.emit('change-status', { action, status: action, time: new Date() })
  }
}
