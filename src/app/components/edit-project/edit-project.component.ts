import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from "../../shared/crud.service";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  userObj: any = {};

  constructor(public crudService: CrudService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
  }

  updateUser(id, data) {
    if(window.confirm('Yes, please...')){
      this.crudService.updateUser(this.id, data).subscribe(res => {
        this.router.navigate(['/list'])
      })
    }
  }

}
