import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // ----- Single resource by ID -----
  getComment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/comments/${id}`).pipe(catchError(this.handleError));
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/albums/${id}`).pipe(catchError(this.handleError));
  }

  getPhoto(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/photos/${id}`).pipe(catchError(this.handleError));
  }

  getTodo(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/todos/${id}`).pipe(catchError(this.handleError));
  }

  // ----- CRUD operations on posts (still use ID as post ID) -----
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/posts/${id}`).pipe(catchError(this.handleError));
  }

  updatePost(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/posts/${id}`, data).pipe(catchError(this.handleError));
  }

  createPost(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, data).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}