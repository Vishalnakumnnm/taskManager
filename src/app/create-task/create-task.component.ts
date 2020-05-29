import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './../task-service.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-task',
	templateUrl: './create-task.component.html',
	styleUrls: ['./create-task.component.sass']
})
export class CreateTaskComponent implements OnInit {

	public errorMessage;
	public existingIndex: number = -1;

	constructor(public taskServiceService: TaskServiceService, private router: Router) { }

	ngOnInit(): void {
		if (this.taskServiceService.currentTask.taskname) {
			this.existingIndex = this.taskServiceService.taskData.indexOf(this.taskServiceService.currentTask);
		}
	}

	submitForm() {
		if (!this.taskServiceService.currentTask.taskname || !this.taskServiceService.currentTask.desc || !this.taskServiceService.currentTask.startTime || !this.taskServiceService.currentTask.endtime) {
			this.errorMessage = "Please fill up proper data for task."
			return;
		} else {
			this.errorMessage = "";
		}

		if (this.existingIndex == -1) {
			this.taskServiceService.taskData.push(this.taskServiceService.currentTask);
		} else {
			this.taskServiceService.taskData[this.existingIndex] = this.taskServiceService.currentTask;
		}
		this.taskServiceService.currentTask = {
			taskname: '',
			desc: '',
			startTime: '',
			endtime: ''
		};
		let storedTaskData = localStorage.getItem('taskData');
		if (storedTaskData) {
			localStorage.removeItem('taskData');
		}
		localStorage.setItem('taskData', JSON.stringify(this.taskServiceService.taskData));

		this.router.navigate(['task/list-task']);
	}

}
