import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
 
  a: number;
  b: number;
  changeDetecter: boolean = false;
  errorMsg: string;
  errorCount:number = 0;
  @Output() sendData = new EventEmitter<any>();
  @Input() newC: number;
  

  newData(heightA: string, baseB: string) {
    
    this.a = parseInt(heightA);
    this.b = parseInt(baseB);

    if (isNaN(this.a) || isNaN(this.b)) {
      this.errorMsg = "Please provide 2 values to calculate.";
      this.errorCount++;
      return;
    } 
    if(this.a > 90000 ||this.a > 90000){
      this.errorMsg = "Please provide 2 values up to 90000.";
      this.errorCount++;
      return;
    }
    if (this.a === 0 || this.b === 0) {
      this.errorMsg = "Please provide 2 values to calculate.";
      this.errorCount++;
      return;
    }    
    if (this.a < 0 || this.b < 0) {
      this.errorMsg = "Values shouldn't be lesser than 0.";
      this.errorCount++;
      return;
    }
    if (this.a > this.b) {
      this.errorMsg = "Height A should be lesser than Base B.";
      this.errorCount++;
      return;
    }

    this.errorMsg ="";
    let data = [];
    data.push(this.a);
    data.push(this.b);
    this.sendData.emit(data);
    this.changeDetecter = true;
  }

  clear(a: any, b: any) {
    console.log(a, b);
    a.value = "";
    b.value = "";
    this.changeDetecter = false;
  }


  

  ngOnInit(): void {
    
  }



}
