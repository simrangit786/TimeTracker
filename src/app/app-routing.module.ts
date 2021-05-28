import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from '../app/components/edit-project/edit-project.component';
import { ProjectListComponent } from '../app/components/project-list/project-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add' },
  { path: 'add', component: AddProjectComponent },
  { path: 'edit/:id', component: EditProjectComponent },
  { path: 'list', component: ProjectListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
    
  
})
export class AppRoutingModule { }
