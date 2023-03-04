import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkspaceItem } from '../models/WorkspaceItem';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  private API_URL = environment.apiURL + environment.apiURI; 
  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);

  constructor(private http: HttpClient) { 
    sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpqdWFyZXoiLCJpYXQiOjE2Nzc4NzEwMjF9.iwm7BJ_9kAdIfOESfVTfnSNy1lbfcXvnS98k3imuJcE');
  }
  
  getWorkspace(workspace: string) {
    return this.http.get<WorkspaceItem[]>(`${this.API_URL}/workspace/${workspace}`, { headers: this.headers });
  }

  createFolderIntoWorkspace(workspace: string, folder_name: string) {
    return this.http.post<{ message: string, created: boolean }>(`${this.API_URL}/workspace/${workspace}`, { folder_name })
  }

  deleteFolderFromWorkspace(workspace: string, folder_name: string) {
    return this.http.delete<{ message: string, deleted: boolean }>(`${this.API_URL}/workspace/${workspace}`, { body: { folder_name } })
  }

}
