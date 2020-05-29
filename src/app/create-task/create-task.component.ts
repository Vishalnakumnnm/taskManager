import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './../task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.sass']
})
export class CreateTaskComponent implements OnInit {
	public taskname;
	public desc; 
	public startTime; 
	public endtime;
	public errorMessage;

  constructor(private taskServiceService: TaskServiceService,  private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(){
  	let taskData = [];
  	debugger
  	if(!this.taskname && !this.desc && !this.startTime && !this.endtime){
  		this.errorMessage = "Please fill up proper data for task."
  		return;
  	}else{
  		this.errorMessage = "";
  	}

  	if(this.taskname != ""){
  		taskData['name'] = this.taskname;
  	}
  	if(this.desc != ""){
  		taskData['desc'] = this.desc;
  	}
  	if(this.startTime != ""){
  		taskData['startTime'] = this.startTime;
  	}
  	if(this.endtime != ""){
  		taskData['endtime'] = this.endtime;
  	}
  	this.taskServiceService.taskData.push(taskData);
  	 this.router.navigate(['list-task']);
  }

}
