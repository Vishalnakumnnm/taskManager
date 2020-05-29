import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './../task-service.service';
import { Route, Router } from '@angular/router';

@Component({
	selector: 'app-list-task',
	templateUrl: './list-task.component.html',
	styleUrls: ['./list-task.component.sass']
})
export class ListTaskComponent implements OnInit {

	public searchText: any;
	public sortOrder: any;
	public fieldsToSearch: any = [];

	constructor(public taskServiceService: TaskServiceService, private route: Router) { }

	ngOnInit() {

		let storedTaskData = localStorage.getItem('taskData');
		if (storedTaskData) {
			this.taskServiceService.taskData = JSON.parse(storedTaskData);
		}

		this.fieldsToSearch.push('taskname', 'desc');
		// this.sort('asc');
	}

	sort(opt: any = null) {
		opt = (opt) ? opt : this.sortOrder;
		if (opt == "asc") {
			this.taskServiceService.taskData.sort((a, b) => (a.taskname > b.taskname) ? 1 : (b.taskname > a.taskname) ? -1 : 0);
		} else if (opt == "desc") {
			this.taskServiceService.taskData.sort((a, b) => (a.taskname < b.taskname) ? 1 : (b.taskname < a.taskname) ? -1 : 0);
		}
	}

	editData(taskItem) {
		this.taskServiceService.currentTask = taskItem;
		this.route.navigate(['/task/add-task']);
	}

	deleteTask(taskItem) {
		let index = this.taskServiceService.taskData.indexOf(taskItem);
		if (index >= 0) {
			this.taskServiceService.taskData.splice(index, 1);
			localStorage.removeItem('taskData');
			localStorage.setItem('taskData', JSON.stringify(this.taskServiceService.taskData));
		}
	}
}
