import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-type-id9',
  templateUrl: './type-id9.component.html',
  styleUrls: ['./type-id9.component.css']
})
export class TypeId9Component implements OnInit {

  @Input() question: any;
  @Output() handle9: EventEmitter<Object> = new EventEmitter();
  @Input() handle9Data: any;

  constructor(public srv:ServicesService) { }


  ngOnInit(): void {
  }


  currentCityTowns:any[] = [];



   data = {
    ilId:"",
    ilceId:"",
    districtId:"",
    question:"",
    questionId:""
  }
  selectedCity(event:any){

    this.srv.selectedCity = event.target.value;
    this.currentCityTowns = []
    this.towns.forEach(town=>{  
      if(town.cityId.toString() === event.target.value){
        this.currentCityTowns.push(town)
      }

    })

    this.data.question = this.question.label;
    this.data.questionId = this.question.id;
    this.data.ilId = event.target.value
    this.handle9.emit(this.data);
  
  }
 
  currentCityTownsDistricts:any[]=[]

  selectedTown(event:any){

    this.srv.selectedTown = event.target.value;

    this.currentCityTownsDistricts = []
    this.districts.forEach(district=>{
      if(district.townId.toString()===event.target.value){
        this.currentCityTownsDistricts.push(district)
      }
    })
    
    this.data.ilceId = event.target.value;
    this.handle9.emit(this.data);
  
  }

  selectedDistrict(event:any){

   this.srv.selectedDistrict = event.target.value;
    this.data.districtId = event.target.value;
    this.handle9.emit(this.data)
    
    
    if (this.question.required) {
      this.srv.setErr = true;
      this.srv.disabledCont = false;
    } else{
      this.srv.setErr = false;
      this.srv.disabledCont = false;
    }
  }

  cities = [
    {
      "cityId": 34,
      "name": "İstanbul"
    }
  ]

 towns =  [
    {
      "cityId": 34,
      "townId": 416,
      "name": "Bakırköy",
      "latitude": 40.98193,
      "longitude": 28.874
    }
  ]

  districts = [
    {
      "townId": 416,
      "distirctId": 40202,
      "name": "1, Mah",
      "latitude": 40.97437,
      "longitude": 28.87152
    },
    {
      "townId": 416,
      "distirctId": 40194,
      "name": "2 Mah",
      "latitude": 40.97776,
      "longitude": 28.8551
    },
    {
      "townId": 416,
      "distirctId": 40201,
      "name": "3 Mah",
      "latitude": 40.98331,
      "longitude": 28.86053
    },
    {
      "townId": 416,
      "distirctId": 40196,
      "name": "7 Mah",
      "latitude": 40.98475,
      "longitude": 28.84625
    },
    {
      "townId": 416,
      "distirctId": 40200,
      "name": "Basınköy Mah",
      "latitude": 40.9787,
      "longitude": 28.78353
    },
    {
      "townId": 416,
      "distirctId": 40192,
      "name": "Cevizlik Mah",
      "latitude": 40.9776,
      "longitude": 28.87596
    },
    {
      "townId": 416,
      "distirctId": 40197,
      "name": "Kartaltepe Mah",
      "latitude": 40.98945,
      "longitude": 28.87698
    },
    {
      "townId": 416,
      "distirctId": 40188,
      "name": "Osmaniye Mah",
      "latitude": 40.99472,
      "longitude": 28.88521
    },
    {
      "townId": 416,
      "distirctId": 40191,
      "name": "Sakızağacı Mah",
      "latitude": 40.97799,
      "longitude": 28.88421
    },
    {
      "townId": 416,
      "distirctId": 40199,
      "name": "Şenlikköy Mah",
      "latitude": 40.97587,
      "longitude": 28.79432
    },
    {
      "townId": 416,
      "distirctId": 40190,
      "name": "Yenimahalle Mah",
      "latitude": 40.9806,
      "longitude": 28.88355
    },
    {
      "townId": 416,
      "distirctId": 40189,
      "name": "Yeşilköy Mah",
      "latitude": 40.97762,
      "longitude": 28.82207
    },
    {
      "townId": 416,
      "distirctId": 140052,
      "name": "Yeşilköy Sb Mah",
      "latitude": 40.98193,
      "longitude": 28.874
    },
    {
      "townId": 416,
      "distirctId": 40195,
      "name": "Yeşilyurt Mah",
      "latitude": 40.96596,
      "longitude": 28.84209
    },
    {
      "townId": 416,
      "distirctId": 40193,
      "name": "Zeytinlik Mah",
      "latitude": 40.97621,
      "longitude": 28.873
    },
    {
      "townId": 416,
      "distirctId": 40198,
      "name": "Zuhuratbaba Mah",
      "latitude": 40.98854,
      "longitude": 28.8624
    }
  ]
  
  
}
