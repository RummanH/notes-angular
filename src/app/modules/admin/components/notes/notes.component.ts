import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  notes: any = [];
  constructor(
    private note: NoteService,
    private router: Router,
    private authService: AuthService
  ) {}
  deleteNote(note: any) {
    this.note.deleteNote(note).subscribe(() => {
      console.log(note);
      this.notes = this.notes.filter((n: any) => n.id !== note.id);
    });
  }
  user: any = {};
  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.note.getAllNotes().subscribe((notes) => {
      this.notes = notes.filter((n: any) => n.user === this.user.id);
      console.log(this.notes);
    });
  }
}
