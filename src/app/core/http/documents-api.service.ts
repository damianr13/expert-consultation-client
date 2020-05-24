import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDocumentConsolidate, IDocumentMetadata, IUser, Page } from '../models/';
import { environment } from '@env/environment';

@Injectable()
export class DocumentsApiService {

  constructor(private http: HttpClient) {
  }

  private get url() {
    return `${environment.api_url}/documents`;
  }

  public list(): Observable<Page<IDocumentMetadata>> {
    return this.http.get<Page<IDocumentMetadata>>(this.url);
  }

  public get(documentId: string): Observable<IDocumentConsolidate> {
    return this.http.get<IDocumentConsolidate>(`${this.url}/${documentId}/consolidated`);
  }

  public getByDocumentNodeId(documentNodeId: string): Observable<IDocumentConsolidate> {
    return this.http.get<IDocumentConsolidate>(`${this.url}/${documentNodeId}/node`);
  }

  public post(documentMetadata: IDocumentMetadata): Observable<string> {
    return this.http.post<string>(`${this.url}`, documentMetadata);
  }

  public getAssignedUsers(documentId: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.url}/${documentId}/users`);
  }

  public saveAssignedUsers(documentId: string, userIds: string[]) {
    return this.http.post(`${this.url}/${documentId}/users`, {userIds});
  }
}
