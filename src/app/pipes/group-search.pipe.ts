import { Pipe, PipeTransform } from '@angular/core';
import { Group } from '../models/group';

@Pipe({
  name: 'groupSearch'
})
export class GroupSearchPipe implements PipeTransform {

  transform(groupInfo:Group[], search:string): Group[] {
    const filteredInformation = groupInfo.filter( group => group.name.toLowerCase().includes(search.trim().toLocaleLowerCase()));
    console.log(filteredInformation);
    return filteredInformation;
  }

}
