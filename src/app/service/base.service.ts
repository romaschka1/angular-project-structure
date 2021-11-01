import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class BaseService {

  readonly url = '';

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) { }

  getBase = () => this.http.
    get(`${this.url}weatherforecast`)
}
