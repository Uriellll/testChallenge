import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';


@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  
  transform(employees:Employee[], page:number= 0, search:string): Employee[] {
    if(search.trim().length === 0){
      return employees.slice(page,page + 10);
    }
    const filteredInformation = employees.filter( employee => employee.name.toLowerCase().includes(search.trim().toLocaleLowerCase()) ||
    employee.last_name.toLowerCase().includes(search.trim().toLocaleLowerCase()));
    return filteredInformation.slice(page,page + 10); 
  }

}
