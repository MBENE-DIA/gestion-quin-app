import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.scss']
})
export class EmployerListComponent implements OnInit {
employers: Employer[];
employe: Employer | any;
  constructor(public empSrv: EmployerService) { }

  ngOnInit(): void {
    this.getAllEmploye();
  }

  getAllEmploye(){
    this.empSrv.getAll().subscribe((data: any)=>{
      this.employers= data;
      JSON.stringify(data);
      console.log(this.employers);
      
    })

  }
  deleteEmployer(id: number): void{
    this.empSrv.deleteEmp(id).subscribe((data: void)=>{
     console.log(data);
     this.getAllEmploye();
    },(error: HttpErrorResponse)=>{
      alert(error.message);
    }
    )
  }
  findEmployeById(id: number): void {
    console.log(id);
    this.empSrv.getData(id).subscribe((data) => {
      this.employe = data;
    });
  }
  
}
