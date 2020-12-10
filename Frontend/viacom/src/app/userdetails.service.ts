import { UserDetails } from './_models/userdetails';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  constructor(private http: HttpClient) { }
  userdetails:UserDetails;
  getAll() {
    return this.http.get<UserDetails[]>(`http://localhost:3000/users`);
  }

  addNewUserDetail(firstname:string, lastname: string, city:string, contactno:number){
    console.log({firstname, lastname, city, contactno});
    this.userdetails = {
      firstname: firstname,
      lastname: lastname,
      city: city,
      contactno: contactno
    }

    return this.http.post<UserDetails>('http://localhost:3000/users', { UserDetails:this.userdetails }).subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => {console.log("Error", error);});
  }
}
