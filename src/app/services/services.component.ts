import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router"
import { ServicesService } from './services.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  
  questionWindow: boolean = false;

  currentService: any;
  currentQuestions: any[] = [];

  currentQuestion: any[] = [];

  currentPage: number = 0;


  questionsLength: number = 0;


  discountServiceText: string = "";
  discountRate: string = "";
  discountRateLastText: string = "";

  services: any;

  constructor(public srv: ServicesService) { }

  
  ngOnInit(): void {
    // getServices api request
    this.services = this.srv.services;
  }



  // discount rate text color  green
  splitDiscountText(service: any) {
    if (service.discountRateText) {
      this.discountServiceText = service.discountRateText.substring(0, service.discountRateText.indexOf("%"))
      this.discountRate = service.discountRateText.substring(service.discountRateText.indexOf("%"), service.discountRateText.indexOf("%") + 3)
      this.discountRateLastText = service.discountRateText.substring(service.discountRateText.indexOf("%") + 3, service.discountRateText.length)
    }
  }

  getQuestions(service: any) {

    // api request
    if (service.name === 'Ferforje') {
      this.currentQuestions = this.srv.ferforje;
    } else {
      this.currentQuestions = this.srv.camBalkon;
    }

    this.getQuestionsLen();
    this.initCurrentQuestionData();
  }

  initCurrentQuestionData() {

    for (let i = 0; i < this.currentQuestions.length; i++) {
      if (this.currentQuestions[i].pageNumber === 0) {
        this.currentQuestion.push(this.currentQuestions[i])
      }
    }
  }

  // this is for bttons devam and talep gonder for checking lenght
  getQuestionsLen() {
    // get questions length
    this.currentQuestions.forEach(question => {
      if (question.pageNumber === this.questionsLength) {
        ++this.questionsLength
      }
    })
    // because currentPageNumber start from 0
    this.questionsLength -= 1;
  }

  // teklif al buttonu 
  start(service: any) {

    this.questionWindow = true;
    this.currentService = service;

    this.splitDiscountText(service)

    this.getQuestions(service)

    this.answers = [];
  }


  // reset all inited data
  close() {
    this.currentPage = 0;
    this.questionWindow = false;
    this.currentQuestions = [];
    this.currentQuestion = [];

    this.answers = [];
  }


  setErrText() {
    if (this.srv.setErr === false) {

      this.currentQuestion.forEach(question => {
        if (question.pageNumber === this.currentPage && question.required === true) {
          this.srv.setErr = true;
          this.srv.disabledCont = true;
        }
      })
      
      if( this.srv.setErr&&this.srv.disabledCont){
        return true;
      }

    } 

      this.srv.setErr = false;
      this.srv.disabledCont = false;
      return false
  

  }

  // forwards next page

  continue() {

    if (this.setErrText()) return

    ++this.currentPage;

    this.currentQuestions.forEach(question => {
      if (question.pageNumber === this.currentPage) {
        const result = this.currentQuestion.find(({ id }) => id === question.id);
        if (result === undefined) {
          this.currentQuestion.push(question)
        }

      }
    })

  }

  // backwards prev page
  backward() {
    --this.currentPage;
    this.srv.setErr = false;
    this.srv.disabledCont = false;
  }

  // gets All user data and sends data to api
  requestService() {
    console.log(this.answers)
  }


  answers: any = []

  handle4Data: Object = {};
  handle4(data: any) {

    this.handle4Data = data;

    let visited: boolean = false;

    this.answers.forEach((answer: any) => {
      if (answer.questionId === data.questionId) {
        visited = true;
        //set new data
        answer = data;
      }
    })

    if (visited === false) {
      this.answers.push(data);
    }


  }

  handle5Data: Object = {};
  handle5(data: any) {
    this.handle5Data = data;

    let visited: boolean = false;

    this.answers.forEach((answer: any) => {
      if (answer.questionId === data.questionId) {
        visited = true;
        //set new data
        answer = data;
      }
    })

    if (visited === false) {
      this.answers.push(data);
    }

  }

  handle6Data: Object = {};
  handle6(data: any) {
    this.handle6Data = data;
    let visited: boolean = false;

    this.answers.forEach((answer: any) => {
      if (answer.questionId === data.questionId) {
        visited = true;
        //set new data
        answer = data;
      }
    })

    if (visited === false) {
      this.answers.push(data);
    }

  }

  handle8Data: Object = {};
  handle8(data: any) {
    this.handle8Data = data;
    let visited: boolean = false;

    this.answers.forEach((answer: any) => {
      if (answer.questionId === data.questionId) {
        visited = true;
        //set new data
        answer = data;
      }
    })

    if (visited === false) {
      this.answers.push(data);
    }

  }

  handle9Data: Object = {};
  handle9(data: any) {
    this.handle9Data = data;
    let visited: boolean = false;

    this.answers.forEach((answer: any) => {
      if (answer.questionId === data.questionId) {
        visited = true;
        //set new data
        answer = data;
      }
    })

    if (visited === false) {
      this.answers.push(data);
    }

  }

  handle11Data: Object = {};
  handle11(data: any) {
    this.handle11Data = data;
    let visited: boolean = false;

    this.answers.forEach((answer: any) => {
      if (answer.questionId === data.questionId) {
        visited = true;
        //set new data
        answer = data;
      }
    })

    if (visited === false) {
      this.answers.push(data);
    }

  }

  handle13Data: Object = {};
  handle13(data: any) {
    this.handle13Data = data;
    let visited: boolean = false;

    this.answers.forEach((answer: any) => {
      if (answer.questionId === data.questionId) {
        visited = true;
        //set new data
        answer = data;
      }
    })

    if (visited === false) {
      this.answers.push(data);
    }

  }






}
