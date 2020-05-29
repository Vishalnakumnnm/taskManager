import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './../task-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.sass']
})
export class ListTaskComponent implements OnInit {

	public searchText:any;
	public taskData:any = [];
	public sortOrder:any;
  constructor(public taskServiceService: TaskServiceService) { }

  ngOnInit() {
  	// this.taskData = [];
  	// let nameData = [];
  	// let getallNames = this.taskServiceService.taskData.filter( obj => nameData.push(obj.name));
  	// nameData.sort();
  	
  	// let data = this.taskServiceService.taskData;
  	// for(let key in nameData){
  	// 	let name = nameData[key];
  	// 	let itemIndex = data.indexOf(data.find( obj => obj.name == name));
  	// 	if(itemIndex ! = -1 && data[itemIndex]){
  	// 	 this.taskData.push(itemIndex);  			
  	// 	}
  	// }
  	// debugger
  	this.sort('asc');
  }

  searchTask(){
  	let newData = this.taskServiceService.taskData.filter( obj => obj.name == this.searchText);
  	this.taskData = newData;
  }
  listAll(){
  	if(!this.searchText|| this.searchText == "" || this.searchText == undefined){
  		this.taskData = this.taskServiceService.taskData;
  	}
  }

  sort(opt:any = null){
  	this.taskData = [];
  	let nameData = [];
  	opt = (opt) ? opt : this.sortOrder;
  	if(opt == "asc"){
  		let data = this.taskServiceService.taskData;
  		let getallNames = this.taskServiceService.taskData.filter( obj => nameData.push(obj.name));
  		nameData.sort();
	  	for(let key in nameData){
	  		let name = nameData[key];
	  		let itemIndex = data.indexOf(data.find( obj => obj.name == name));
	  		if(itemIndex ! = -1 && data[itemIndex]){
	  		 this.taskData.push(itemIndex);  			
	  		}
	  	}
  	}else if(opt == "desc"){
  		let getallNames = this.taskServiceService.taskData.filter( obj => nameData.push(obj.name));
  		nameData.sort();
  		nameData.reverse();
  		let data = this.taskServiceService.taskData;
	  	for(let key in nameData){
	  		let name = nameData[key];
	  		let itemIndex = data.indexOf(data.find( obj => obj.name == name));
	  		if(itemIndex ! = -1 && data[itemIndex]){
	  		 this.taskData.push(itemIndex);  			
	  		}
	  	}
  	}
  }


}
