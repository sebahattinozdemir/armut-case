import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-type-id6',
  templateUrl: './type-id6.component.html',
  styleUrls: ['./type-id6.component.css']
})
export class TypeId6Component implements OnInit {

  @Input() question: any;
  @Input() handle6Data: any;

  @Output() handle6: EventEmitter<Object> = new EventEmitter();
  constructor(public srv:ServicesService) { }

  ngOnInit(): void {
  }

  data:any;
  getData(target:string) {
    
    
  
    this.srv.setErrText(this.question)
    
    this.data = target;
    this.handle6.emit({data:target,question:this.question.label,questionId:this.question.id})
  }

}
