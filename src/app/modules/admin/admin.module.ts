import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesComponent } from './components/notes/notes.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    AddNotesComponent,
    NotesComponent,
    EditComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AdminModule {}
