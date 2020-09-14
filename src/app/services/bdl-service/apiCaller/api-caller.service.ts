import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";

@Injectable()
export class ApiCallerService<T> {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  get(url: string, options = {}): Observable<T> {
    url = `${this.baseUrl}${url}`;
    return this.http
      .get<T>(url, options)
      .pipe(map(this.handleSuccess), catchError(this.handleError));
  }

  post(url: string, body: T, options = {}): Observable<T> {
    url = `${this.baseUrl}${url}`;
    return this.http
      .post<T>(url, body, options)
      .pipe(map(this.handleSuccess), catchError(this.handleError));
  }

  put(url: string, body: T, options = {}): Observable<T> {
    url = `${this.baseUrl}${url}`;
    return this.http
      .put<T>(url, body, options)
      .pipe(map(this.handleSuccess), catchError(this.handleError));
  }

  delete(url: string, options): Observable<{}> {
    url = `${this.baseUrl}${url}`;
    return this.http
      .delete<any>(url, options)
      .pipe(map(this.handleSuccess), catchError(this.handleError));
  }

  private handleSuccess(response) {
    return JSON.parse(response.result);
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occured : ", error.error.message);
    } else {
      console.error(`Status : ${error.status} - error object : ${error.error}`);
    }
    return throwError("An error occured during request.");
  }
}
