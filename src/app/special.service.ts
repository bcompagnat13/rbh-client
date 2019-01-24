import { Injectable } from '@angular/core';
import {Special} from './special';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Special[]> {
    return this.http.get<Special[]>('http://localhost:8000/data');
  }
}
