import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkspaceItem } from '../models/WorkspaceItem';
import { environment } from '../../environments/environment';
import { ApiFetch } from './apiFetch';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  private API_URL = environment.apiURL + environment.apiURI;
  private headers = new HttpHeaders();
  private token = sessionStorage.getItem('token');

  constructor(private http: HttpClient) {
    this.headers
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);
  }

  getWorkspace(workspace: string) {
    return this.http.get<WorkspaceItem[]>(`${this.API_URL}/workspace/${workspace}`, { headers: this.headers });
  }

  createFolderIntoWorkspace(workspace: string, folder_name: string) {
    return this.http.post<{ message: string, created: boolean }>(`${this.API_URL}/workspace/${workspace}/folder`, { folder_name })
  }

  deleteFolderFromWorkspace(workspace: string, folder_name: string) {
    return this.http.delete<{ message: string, deleted: boolean }>(`${this.API_URL}/workspace/${workspace}/folder`, { body: { folder_name } })
  }

}
