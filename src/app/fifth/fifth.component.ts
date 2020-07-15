import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {


  public message:string="Please Click the button";
  constructor() { }

  ngOnInit() {
  }


  BtnClick(event)
  {
    this.message="Button Clicked";
    console.log(event);
  }

}
