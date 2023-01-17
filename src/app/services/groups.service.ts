import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http:HttpClient) { }
  public getGroups():Observable<any>{
    return this.http.get('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/groups/uriel_davila');

  }
}
