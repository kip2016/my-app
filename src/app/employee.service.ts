import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public _url = "/assets/data/employee.json";

  constructor(private _http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{

return this._http.get<IEmployee[]>(this._url);
      
  }
}
