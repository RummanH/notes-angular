import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient, private router: Router) {}
  private apiURL = 'http://localhost:8000/notes';

  deleteNote(note: any) {
    return this.http.delete<any>(`${this.apiURL}/${note.id}`);
  }

  addNote(note: any) {
    this.http.post<any>(this.apiURL, note).subscribe(() => {
      this.router.navigate(['admin/home']);
    });
  }
  getAllNotes() {
    return this.http.get<any>(this.apiURL);
  }
  getNote(id: any) {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  editNote(id: any, note: any) {
    return this.http.patch<any>(`${this.apiURL}/${id}`, note);
  }
}
