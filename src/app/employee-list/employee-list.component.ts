import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];

  constructor(private _myemp: EmployeeService) { }

  ngOnInit() {
    this._myemp.getEmployees().subscribe(response => this.employees = response);
  }

}
