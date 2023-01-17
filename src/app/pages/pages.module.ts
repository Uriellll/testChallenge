import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import{ HttpClientModule} from '@angular/common/http';
import { PaginationPipe } from '../pipes/pagination.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupsComponent } from './groups/groups.component';




@NgModule({
  declarations: [
    HomeComponent,
    EmployeesComponent,
    PaginationPipe,
    GroupsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
