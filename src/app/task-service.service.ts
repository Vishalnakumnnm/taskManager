import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  public taskData: any = [];
  public filterData: any = [];
  public currentTask: any = {};
  constructor() { }
}
