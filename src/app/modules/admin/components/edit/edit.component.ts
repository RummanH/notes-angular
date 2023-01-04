import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  note: any = {};
  id: any = '';
  noteForm = new FormGroup({
    type: new FormControl(this.note.type),
    note: new FormControl(this.note.note),
    date: new FormControl(this.note.date),
    time: new FormControl(this.note.time),
  });
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {}
  onSubmit() {
    this.noteService
      .editNote(this.id, this.noteForm.value)
      .subscribe((note) => {
        this.router.navigate(['admin/home']);
      });
  }
  ngOnInit() {
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params); // { orderby: "price" }
    //   // this.orderby = params.orderby;
    //   // console.log(this.orderby); // price
    // });
    this.id = this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(this.id).subscribe((note: any) => {
      this.note = note;
      this.noteForm.patchValue({
        note: note.note,
        type: note.type,
        date: note.date,
        time: note.time,
      });
    });
  }
}
