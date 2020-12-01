import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }
  c: number;
  errorMsg:string;

  getResult(data:any) {
    if(parseInt(data[0]) > parseInt(data[1])){
      this.errorMsg = "height A should be lesser than base B";
    }
    this.c = Math.round(Math.sqrt(Math.pow(parseInt(data[0]), 2) + Math.pow(parseInt(data[1]), 2)));      
    console.log(this.c);
    
    return this.c
  } 

  ngOnInit(): void {
  }

}
