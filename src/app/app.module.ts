import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellowWorldComponent } from './hellow-world/hellow-world.component';

import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {
  MatButtonModule, MatCheckboxModule,
  MatTableModule, MatSortModule,
    MatAutocompleteModule, MatSelectModule,
    MatInputModule, MatNativeDateModule, MatSnackBarModule, MatPaginator,MatTooltipModule
    // ,MatDatepicker
} from '@angular/material';


import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { SeventhComponent } from './seventh/seventh.component';
@NgModule({
  declarations: [
    AppComponent,
    HellowWorldComponent,  
    TemplatedrivenformComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent, SixthComponent, SeventhComponent  
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    // MatDatepicker,
    MatDatepickerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
