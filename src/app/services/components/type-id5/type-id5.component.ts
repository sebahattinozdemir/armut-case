import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-type-id5',
  templateUrl: './type-id5.component.html',
  styleUrls: ['./type-id5.component.css']
})
export class TypeId5Component implements OnInit {

  @Input() question: any;
  @Input() handle5Data: any;

  @Output() handle5: EventEmitter<Object> = new EventEmitter();

  constructor(public srv:ServicesService) { }

  ngOnInit(): void {
  }

  data:any;
  getData(target:string) {
   
  
    this.srv.setErrText(this.question)
    
    this.data = target;
    this.handle5.emit({data:target,question:this.question.label,questionId:this.question.id})
  }

}
