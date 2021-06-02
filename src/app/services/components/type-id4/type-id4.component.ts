import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-type-id4',
  templateUrl: './type-id4.component.html',
  styleUrls: ['./type-id4.component.css']
})
export class TypeId4Component implements OnInit {


  @Input() question: any;
  @Input() setErr: any;

  @Output() handle4: EventEmitter<Object> = new EventEmitter();

  constructor(public srv: ServicesService) { }

  ngOnInit(): void {
  }

  data: number = 1;

  decrement() {

   this.srv.setErrText(this.question)
    this.data--;
    this.handle4.emit({ data: this.data, question: this.question.label, questionId: this.question.id })
  }

  increment() {
    
    this.srv.setErrText(this.question)
    
    this.data++;
    this.handle4.emit({ data: this.data, question: this.question.label, questionId: this.question.id })
  }



}
