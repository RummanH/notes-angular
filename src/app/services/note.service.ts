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

  signup(user: User): any {
    let exist = false;
    this.http.get<User>(this.apiURL).subscribe((users) => {
      //@ts-ignore
      const currentUser = users.find((u) => u.email === user.email);
      if (currentUser) {
        alert('A user with this email address already exist!');
        return;
      } else {
        this.http.post<User>(this.apiURL, user).subscribe();
        this.router.navigate(['login']);
      }
    });
  }

  addNote(note: any) {
    this.http.post<any>(this.apiURL, note).subscribe(() => {
      this.router.navigate(['admin/notes-all']);
    });
  }
  getAllNotes() {
    return this.http.get<any>(this.apiURL);
  }
}
