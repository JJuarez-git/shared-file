import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { WorkspaceService } from 'src/app/services/workspace.service';
import { deleteFolder } from 'src/app/ngrx/actions/workspace.actions';
import { StoreEntity } from 'src/app/ngrx/store/store';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['../style.css', './folder.component.css']
})
export class FolderComponent implements OnInit {

  username!: string;
  @Input() name!: string;

  constructor(
    public store: Store<StoreEntity>,
    private workspaceService: WorkspaceService
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.auth.username).subscribe({
      next: (data) => this.username = data
    })
  }

  deleteFolder() {
    this.workspaceService.deleteFolderFromWorkspace(this.username, this.name).subscribe({
      next: (res) => this.store.dispatch(deleteFolder({ payload: this.name })),
      error: (err) => console.error(err),
      complete: () => { }
    });


  }

}
