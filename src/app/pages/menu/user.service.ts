import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://randomuser.me/api/?inc=gender,name,nat,picture';
  constructor(private _http: HttpClient) {}

  getUser(): Observable<any> {
    return this._http.get(this.url);
  }
}