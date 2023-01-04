import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EditComponent } from './components/edit/edit.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: NotesComponent },
      { path: 'notes', component: AddNotesComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
