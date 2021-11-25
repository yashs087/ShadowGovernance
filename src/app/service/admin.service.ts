import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IReporter } from "../model/reporter";
import { catchError, tap } from "rxjs/operators";
import { IAdmin } from "../model/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private reporterUrl = 'http://localhost:3000/reporters';
  private adminUrl = 'http://localhost:3000/admins';
  constructor(private http: HttpClient){}
  
  getReporters(): Observable<IReporter[]>{
      return this.http.get<IReporter[]>(this.reporterUrl).pipe(
          tap(data => console.log('All:',JSON.stringify(data))),
          catchError(this.handleError)
      );
  }

  getAdmins(): Observable<IAdmin[]>{
    return this.http.get<IAdmin[]>(this.adminUrl).pipe(
        tap(data => console.log('All:',JSON.stringify(data))),
        catchError(this.handleError)
    );
  }

  getAdminById(id:number):Observable<IAdmin>{
    const url = `${this.adminUrl}/${id}`;
    return this.http.get<IAdmin>(url).pipe(
      tap(data => console.log('All:',JSON.stringify(data))),
      catchError(this.handleError)
  );
  }
  postAdmin(admin:IAdmin): Observable<IAdmin>{
    return this.http.post<IAdmin>(this.adminUrl,admin).pipe(
      tap(data => console.log('ALl:', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  addReporter(reporter:IReporter): Observable<IReporter>{
    return this.http.post<IReporter>(this.reporterUrl,reporter).pipe(
      tap(data => console.log('ALl:', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  updateAdmin(admin:IAdmin): Observable<IAdmin>{
    return this.http.put<IAdmin>(this.adminUrl,admin).pipe(
      tap(data => console.log('ALl:', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  updateReporter(reporter:IReporter): Observable<IReporter>{
    return this.http.put<IReporter>(this.adminUrl,reporter).pipe(
      tap(data => console.log('ALl:', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  deleteAdmin(id:number):Observable<unknown>{
    const url = `${this.adminUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    )
  }

  deleteReporter(id:number):Observable<unknown>{
    const url = `${this.reporterUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    )
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
