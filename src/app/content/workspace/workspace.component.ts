import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { WorkspaceService } from '../../services/workspace.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreEntity } from '../../ngrx/store/store';
import { addFolder } from 'src/app/ngrx/actions/workspace.actions';
import { WorkspaceItem } from '../../models/WorkspaceItem';

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
    this.workspace$ = this.store.select('workspace');
    this.socketService.listen('add-folder-emit').subscribe({
      next: ({ folder }) => this.store.dispatch(addFolder({ payload: folder }))
    })
  }

  changeStatus(action: string) {
    this.socketService.emit('change-status', { action, status: action, time: new Date() })
  }
}
