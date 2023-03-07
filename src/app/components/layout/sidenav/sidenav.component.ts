import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { WorkspaceItem } from 'src/app/models/WorkspaceItem';
import { StoreEntity } from 'src/app/ngrx/store/store';
import { SocketService } from 'src/app/services/socket.service';
import { WorkspaceService } from 'src/app/services/workspace.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {

  items!: MenuItem[];
  displayPosition = false;
  dialogHeader!: string;
  folderName = 'Nombre de carpeta';
  error = {
    folderName: false
  }

  folders: any[] = [];
  username!: string;
  storeSub$!: Subscription;

  constructor(
    private socketService: SocketService,
    private workspaceService: WorkspaceService,
    private store: Store<StoreEntity>
  ) { }

  ngOnInit(): void {
    this.storeSub$ = this.store.select((state) => state.auth.username).subscribe({
      next: (res) => this.username = res
    });


    this.items = [
      {
        label: 'Mi espacio',
        items: [
          {
            label: 'Mi espacio',
            icon: 'pi pi-home',
            routerLink: 'workspace',
            command: () => {

            }
          },
          {
            label: 'Favoritos',
            icon: 'pi pi-star',
            command: () => {
              alert('Subir archivo')
            }
          },
          {
            label: 'Papelera',
            icon: 'pi pi-trash',
            command: () => {
              alert('Subir carpeta')
            }
          }
        ]
      },
      {
        label: 'Crear',
        items: [{
          label: 'Nueva carpeta',
          icon: 'pi pi-folder',
          command: () => {
            this.displayPosition = true;
            this.dialogHeader = 'Nueva carpeta'
          }
        }
        ]
      },
      {
        label: 'Subir',
        items: [
          {
            label: 'Subir archivo',
            icon: 'pi pi-file',
            command: () => {
              alert('Subir archivo')
            }
          },
          {
            label: 'Subir carpeta',
            icon: 'pi pi-folder',
            command: () => {
              alert('Subir carpeta')
            }
          }
        ]
      },
      {
        label: 'Compartido',
        items: [
          {
            label: 'Compartido conmigo',
            icon: 'pi pi-users',
            command: () => {
              alert('Subir archivo')
            }
          },
          {
            label: 'Mis archivos compartidos',
            icon: 'pi pi-users',
            command: () => {
              alert('Subir carpeta')
            }
          }
        ]
      }
    ]
  }

  ngOnDestroy(): void {
    this.storeSub$.unsubscribe();
  }

  createNewFolder() {
    this.workspaceService.createFolderIntoWorkspace(this.username, this.folderName).subscribe({
      next: (res) => {
        // Tratar datos de respusta
        const folder: WorkspaceItem = {
          name: this.folderName,
          isFile: false,
          isFolder: true
        }
        //this.store.dispatch(addFolder({ payload: folder }))
        this.socketService.emit('add-folder', { folder });
      },
      error: (err) => this.error.folderName = true,
      complete: () => {
        // Tratar aspecto visual
        this.displayPosition = false;
        this.error.folderName = false;
        this.folderName = 'Nombre de carpeta';
      }
    });
  }

  cancelNewFolder() {
    this.displayPosition = false;
    this.error.folderName = false;
    this.folderName = 'Nombre de carpeta';
  }

  hideDialog() {
    this.displayPosition = false;
    this.error.folderName = false;
    this.folderName = 'Nombre de carpeta';
  }

}
