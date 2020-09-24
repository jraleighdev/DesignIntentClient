import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CloudFile} from '../models/dashboard/cloudFile';
import {AccountService} from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl = environment.BaseUrl;
  private currentFileSource = new BehaviorSubject<CloudFile>(null);
  currentFile$ = this.currentFileSource.asObservable();
  navVisible = false;

  constructor(private http: HttpClient, private auth: AccountService) { }

  getForgeToken(): Promise<any> {
    return this.http.get(this.baseUrl + 'forgeauth/oauth/token').toPromise();
  }

  getCloudFiles(): Observable<CloudFile[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.get<CloudFile[]>(this.baseUrl + 'CloudFiles', {headers});
  }

  getSelectedFile(): CloudFile {
    return this.currentFileSource.value;
  }

  setSelectedFile(file: CloudFile) {
    this.currentFileSource.next(file);
  }

  showNav() {
    this.navVisible = !this.navVisible;
  }


}
