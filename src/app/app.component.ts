import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from './models/employee';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],  // Importa FormsModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employeeArray: Employee[] = [
    new Employee(1, 'Juan Pérez', 'Colombia'),
    new Employee(2, 'María López', 'México'),
    new Employee(3, 'Carlos Martínez', 'Argentina')
  ];

  selectedEmployee: Employee = new Employee(0, '', '');

  openForEdit(employee: Employee): void 
  {
    this.selectedEmployee = employee;
  }

  addOrEdit(): void
  {
    if(this.selectedEmployee.id === 0) // INSERT
    {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = {id:0, name: '', country: ''};
  }

  delete(): void 
  {
    if(confirm('Are you sure you want to delete it?'))
    {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = {id:0, name: '', country: ''};
    }
  }

}