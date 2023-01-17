import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }
  public getEmployeesFromApi():Observable<any>{
    return this.http.get('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/uriel_davila');
  }
  public saveInfoEmployee(employee:Employee){
    let params = JSON.stringify(employee);
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
        return this.http.post('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/uriel_davila', params, {headers:headers});
  }
}
