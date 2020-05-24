import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { IDocumentNode, IDocumentNodeCreateDto } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentNodesApiService {
  constructor(private http: HttpClient) {
  }

  private get url() {
    return `${environment.api_url}/document-nodes`;
  }

  public insertDocumentNode(documentNodeInsertionPackage: IDocumentNodeCreateDto): Observable<string> {
    return this.http.post<string>(`${this.url}`, documentNodeInsertionPackage);
  }

  public deleteDocumentNode(target: IDocumentNode): Observable<string> {
    return this.http.delete<string>(`${this.url}/${target.id}`);
  }
}
