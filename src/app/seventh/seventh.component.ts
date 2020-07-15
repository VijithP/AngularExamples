import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent implements OnInit {


  public EmployeeName:string="";
  constructor() { }

  ngOnInit() {
  }
  Submit()
  {
    alert('Textbox Value = '+this.EmployeeName);
  }

}
