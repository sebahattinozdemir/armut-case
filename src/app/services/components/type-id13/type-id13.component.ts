import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-type-id13',
  templateUrl: './type-id13.component.html',
  styleUrls: ['./type-id13.component.css']
})
export class TypeId13Component implements OnInit {

  @Input() question: any;
  @Output() handle13: EventEmitter<Object> = new EventEmitter();
  @Input() handle13Data: any;

  constructor(public srv:ServicesService) { }

  ngOnInit(): void {
  }
  
  data:any;
  handleFileInput(event:any) {
    
    this.data = event.target.files.item(0);
    console.log(this.data)
    
    
     
    this.srv.setErrText(this.question)
   
    this.handle13.emit({data:event.target.files.item(0),question:this.question.label,questionId:this.question.id})
  }

  
}
