import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from "../../shared/crud.service";


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  @Input() userObj = { projectname: ''}

  constructor(public crudService: CrudService, 
    public router: Router) { }

  ngOnInit(): void {
  }

   addUser(data:any) {
     this.crudService.addUser(this.userObj).subscribe((data:{}) => {
       this.router.navigate(['/list'])
     })
   }

  

}
