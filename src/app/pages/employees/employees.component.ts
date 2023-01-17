import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public form :FormGroup = new FormGroup({});
  public employees:Employee[] = [];
  public employee: Employee = new Employee(0,'','',new Date());
  public page: number = 0;
  public search :string = '';
  
  constructor(
    private employeeService: EmployeesService,
    private fb:FormBuilder
  ) { 

    this.getUsers();
    this.createForm();
    

  }
  ngOnInit(): void {
  }
  public getUsers(){
    this.employeeService.getEmployeesFromApi().subscribe(
      response=>{
        this.employees = response.data.employees;
        console.log(this.employees);

      },
      error=>{
        console.log(`Ocurrió un error ${error}`);

      }
    )
  }
  public nextPage(){
    this.page +=10;
    console.log(this.page);
    
  }
  public prevPage(){
    if(this.page > 0)this.page -=10;
  }
  public onSearch(search: string){
    this.page = 0;
    this.search = search;
  }
  public createForm(){
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30),Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.maxLength(30),Validators.minLength(3)]],
      birthday: ['',Validators.required]

    })

  }
  get nameInvalid(){
    return this.form.get('name')?.invalid && this.form.get('name')?.touched;
  }
  get lastInvalid(){
    return this.form.get('last_name')?.invalid && this.form.get('last_name')?.touched;
  }
  get birthdayInvalid(){
    return this.form.get('birthday')?.invalid && this.form.get('birthday')?.touched;
  }
  public saveForm(){
    if(this.form.invalid){
      alert("El formulario es inválido")
      return
    }else{
      let maxValue=Math.max(...this.employees.map(employee=>employee.id));

      maxValue = maxValue + 1;
      this.employee.id = maxValue;
      this.employee.last_name = this.form.value.name;
      this.employee.name = this.form.value.last_name;
      this.employee.birthday = this.form.value.birthday;
      this.employeeService.saveInfoEmployee(this.employee).subscribe(
        response=>{
          console.log(response);
          this.getUsers();
          this.form.reset();
  
        },
        error=>{
          console.log(`Ocurrió un error ${error}`);
  
        }

      )

    }
  }

  

}
