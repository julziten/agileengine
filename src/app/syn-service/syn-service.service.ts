import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SynServiceService {
  constructor(private http: HttpClient) { }

  selected: string;

  endpoint = 'https://api.datamuse.com/words?ml=';
  
  getApiEndpoint(){
    console.log(this.selected);
    return this.http.get(this.endpoint + this.selected);
  }
}
