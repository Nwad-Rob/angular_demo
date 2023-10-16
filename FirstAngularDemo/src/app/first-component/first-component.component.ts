import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
   fname:string="Robert";
   lname:string="Nwadinobi";
   arr=["Robert","Nwadinobi","marcus","Devante"];

   emparr:Employee[]=[
    {
      "empid":1,
      "empname": "Khalil",
      "salary": 721000
    },
    {
      "empid":2,
      "empname": "Robert",
      "salary": 800500
    },
    {
      "empid":3,
      "empname": "Darius",
      "salary": 552000
    },
    {
      "empid":4,
      "empname": "Simone",
      "salary": 651200
    },
    {
      "empid":5,
      "empname": "Mitch",
      "salary": 754000
    }
   ]
}
