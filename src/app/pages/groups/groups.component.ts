import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { Group } from 'src/app/models/group';
import { GroupInformation } from 'src/app/models/groupInformation';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  public groups:Group[]= [];
  public groupInfo:GroupInformation[]= [];
  public id:number = 0;
  public search :string = '';

  constructor(private groupService: GroupsService) {
    this.groupService.getGroups().subscribe(
      response=>{
        this.groups = response.data.groups
        console.log(this.groups);

      },
      error =>{
        console.log(`Ocurrió un error ${error}`);
      }
    )
   }

  ngOnInit(): void {
  }
  public showInformation(id:number){
    this.id= id - 1;
    this.groupService.getGroupbyId(id).subscribe(
      response=>{
        this.groupInfo = response.data.employees;
        

      },
      error =>{
        this.groupInfo = [];
        console.log(`Ocurrió un error ${error}`);
        
        alert('No hay personas en ese grupo');
      }

    )
    
  }
  onSearch(search:string){
    this.search = search;
  }

}
