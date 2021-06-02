import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-type-id8',
  templateUrl: './type-id8.component.html',
  styleUrls: ['./type-id8.component.css']
})
export class TypeId8Component implements OnInit {

  @Input() question: any;
  @Input() handle8Data: any;

  @Output() handle8: EventEmitter<Object> = new EventEmitter();
  constructor(public srv:ServicesService) { }

  ngOnInit(): void {
  }

  
  data:any;
  getData(event:any) {
    
    
    if (this.question.required) {
      this.srv.setErr = true;
      this.srv.disabledCont = false;
    } else{
      this.srv.setErr = false;
      this.srv.disabledCont = false;
    }

    this.data = event.target.value;
    this.handle8.emit({data:event.target.value,question:this.question.label,questionId:this.question.id})
  }

}
