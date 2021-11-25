import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse }  from '@angular/common/http'
import { IUser } from '../model/user';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  sub!:Subscription;
  errorMessage:string='';

 private userUrl='http://localhost:3000/users'
  constructor(private http:HttpClient) {}
  postUser(users:IUser): Observable<IUser>
  {return this.http.post<IUser>(this.userUrl, users)
    .pipe(
      tap(data => console.log('ALl:', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  
  getUserById(id:number):Observable<IUser>{
    const url = `${this.userUrl}/${id}`;
    return this.http.get<IUser>(url).pipe(
      tap(data => console.log('All:',JSON.stringify(data))),
      catchError(this.handleError)
  );
  }

  private handleError(err: HttpErrorResponse){
        let errorMessage='';
        if (err.error instanceof ErrorEvent){
            errorMessage = `An error occurd: ${err.error.message}`;

        }
        else{
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
