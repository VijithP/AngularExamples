import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apps-hellow-world',
  templateUrl: './hellow-world.component.html',
  styleUrls: ['./hellow-world.component.css']
})
export class HellowWorldComponent implements OnInit {

  names:string[]=[];
  constructor() {
     this.names=['Java','Html','Css','Bootstrap'];
   }

  ngOnInit() {

  }

}
