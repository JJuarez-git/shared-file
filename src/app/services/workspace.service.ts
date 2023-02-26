import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkspaceItem } from '../models/WorkspaceItem';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  private API_URL = 'http://localhost:9000/api/v1';

  constructor(private http: HttpClient) { }

  getWorkspace(workspace: string) {
    return this.http.get<WorkspaceItem[]>(`${this.API_URL}/workspace/${workspace}`);
  }

  createFolderIntoWorkspace(workspace: string, folder_name: string) {
    return this.http.post<{ message: string, created: boolean }>(`${this.API_URL}/workspace/${workspace}`, { folder_name })
  }

  deleteFolderFromWorkspace(workspace: string, folder_name: string) {
    return this.http.delete<{ message: string, deleted: boolean }>(`${this.API_URL}/workspace/${workspace}`, { body: { folder_name } })
  }

}
