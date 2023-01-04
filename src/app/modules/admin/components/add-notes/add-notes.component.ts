import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css'],
})
export class AddNotesComponent {
  user: any = {};
  constructor(
    private note: NoteService,
    private router: Router,
    private authService: AuthService
  ) {}
  noteForm = new FormGroup({
    type: new FormControl(''),
    note: new FormControl(''),
  });
  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }

  onSubmit() {
    if (!this.noteForm.value.note) {
      return alert('please add a note!');
    }

    this.note.addNote({ ...this.noteForm.value, user: this.user.id });
    this.noteForm.reset();
  }
}
