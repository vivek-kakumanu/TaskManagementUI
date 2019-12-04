import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from './services/task-service.service';
import { take } from 'rxjs/operators';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Task } from './interfaces/Task';
import { NgxSpinnerService } from 'ngx-spinner';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public taskForm: FormGroup;
  isUpdate;
  title = 'task-mnagement';
  @ViewChild('closeBtn',{static:true}) closeBtn: ElementRef;

  tasks: Task[];
 

  yearTimeout: any;
  viewTask: boolean;



  constructor(private fb: FormBuilder,private taskService:TaskServiceService,config: NgbDatepickerConfig,private spinner: NgxSpinnerService) {
    config.minDate={year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDay()};
  }

  minDate=new Date();
  vm={};


  ngOnInit(): void {
 

    this.taskForm = this.fb.group({
      task: ['', Validators.required],
      ptask: [''],
      priority: ['', Validators.required],
      startDate:['', Validators.required],
      endDate:['', Validators.required]
    });
   }

  public formReset(): void {
    this.taskForm.controls.priority.setValue(0);
    this.taskForm.controls.task.setValue('');
    this.taskForm.controls.ptask.setValue('');
    this.taskForm.controls.startDate.setValue('');
    this.taskForm.controls.endDate.setValue('');
  }

  public savetaskData(): void {
    this.spinner.show();
    let taskData = {
      task: this.taskForm.controls.task.value,
      priority:  this.taskForm.controls.priority.value,
      startDate: new Date(this.taskForm.controls.startDate.value.year,this.taskForm.controls.startDate.value.month-1,this.taskForm.controls.startDate.value.day).setHours(0,0,0,0),
      endDate : new Date(this.taskForm.controls.endDate.value.year,this.taskForm.controls.endDate.value.month-1,this.taskForm.controls.endDate.value.day).setHours(0,0,0,0),
      parentTask:this.taskForm.controls.ptask.value
    }
    this.taskService.postTaskData(taskData).pipe(take(1)).subscribe((value) => {
      if(value!=null){
        this.formReset();
        this.closeBtn.nativeElement.click();
      }
      this.spinner.hide();
    });
  }
  onYearChange(event, dt) {
    if (this.yearTimeout) {
        clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
        dt.filter(event.value, 'year', 'gt');
    }, 250);
}
 endTask(id): void{
  this.spinner.show();
this.taskService.endTask(id).pipe(take(1)).subscribe((value)=>{
this.viewTasks();
this.spinner.hide();
})
 }
public viewTasks(): void{
  this.resetSearchModelData();
   this.spinner.show();
   this.viewTask=true;
   this.taskService.getAllTask().pipe(take(1)).subscribe((value) => {
  if(value!=null){
    this.tasks=value;
    
  }
  this.spinner.hide();
});
}

searchtask;searchptask;frompriority;topriority;startDateText;endDateText

public  resetSearchModelData(){
  this.searchtask='';
  this.searchptask='';
  this.startDateText='';
  this.endDateText='';
  this.frompriority='';
  this.topriority='';
}
}
