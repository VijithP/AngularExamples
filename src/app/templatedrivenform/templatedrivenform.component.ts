import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {

  constructor() { }

  
  userModel=new User('Vijith','vijith5430@gmail.com',26,"SSLC",true);

  ngOnInit() {

  }
  onSubmit()
  {
   console.log(this.userModel);
  }

}
