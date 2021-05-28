import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from "../../shared/crud.service";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  Projects: any = []

  myDate = Date.now();

  constructor(public crudservice:CrudService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers() {
    return this.crudservice.getUsers().subscribe((res: {}) => {
      this.Projects = res;
    })
  }

  delete(id) {
    if (window.confirm('Really?')){
      this.crudservice.deleteUser(id).subscribe(res => {
        this.fetchUsers()
      })
    }
  }

}
