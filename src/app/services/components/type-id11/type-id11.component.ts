import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-type-id11',
  templateUrl: './type-id11.component.html',
  styleUrls: ['./type-id11.component.css']
})
export class TypeId11Component implements OnInit {

  @Input() question: any;
  @Input() handle11Data: any;

  @Output() handle11: EventEmitter<Object> = new EventEmitter();

  constructor(public srv:ServicesService) { }

  dates: string[] = []

  ngOnInit(): void {

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const tomorrow = new Date(today)


    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    this.dates.push(today.toLocaleDateString("tr-TR"))

    for (let i = 1; i <= 22; i++) {
      tomorrow.setDate(tomorrow.getDate() + i)
      this.dates.push(tomorrow.toLocaleDateString("tr-TR"))
    }
  }

  data: any;
  disabled:boolean =true;

  obj = {

    data: "",
    date:"",
    hour:"", 
    question: "", 
    questionId: ""

  }
  getData(target: string) {
    this.data = target;

    this.obj.question = this.question.label;
    this.obj.questionId = this.question.id;
    this.obj.data = target;

    if (target.includes("Belli")) {
      this.handle11.emit(this.obj)
      this.disabled = false;
    } else {
      this.handle11.emit({ data: target, question: this.question.label, questionId: this.question.id })
      this.disabled=true;
    }
    
    if (this.question.required) {
      this.srv.setErr = true;
      this.srv.disabledCont = false;
    } else{
      this.srv.setErr = false;
      this.srv.disabledCont = false;
    }
  }

  getDate(event: any) {
    this.obj.date = event.target.value;
    this.handle11.emit(this.obj)
  }

  getHour(event: any) {
    this.obj.hour = event.target.value;
    this.handle11.emit(this.obj)
  }

  hours = [
    "12: 00 am", 
    "1: 00 am ", 
    "2: 00 am ", 
    "3: 00 am ", 
    "4: 00 am ", 
    "5: 00 am ", 
    "6: 00 am ", 
    "7: 00 am ", 
    "8: 00 am ", 
    "9: 00 am ", 
    "10: 00 am", 
    "11: 00 am", 
    "12: 00 pm", 
    "1: 00 pm ", 
    "2: 00 pm ", 
    "3: 00 pm ", 
    "4: 00 pm ", 
    "5: 00 pm ", 
    "6: 00 pm ", 
    "7: 00 pm ", 
    "8: 00 pm ", 
    "9: 00 pm ", 
    "10: 00 pm", 
    "11: 00 pm"
  ]

}
