import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Submit(txtBoxId)
  {
    alert(txtBoxId)
    console.log(txtBoxId);
  }

}
