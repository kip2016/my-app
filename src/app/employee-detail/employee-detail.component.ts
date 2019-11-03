import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  public employees = [];

  constructor(private _myemp: EmployeeService) { }

  ngOnInit() {
    this._myemp.getEmployees().subscribe(response => this.employees = response);
  }

}
