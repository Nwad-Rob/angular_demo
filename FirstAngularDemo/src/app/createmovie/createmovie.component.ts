import { Component } from '@angular/core';
import { Movie } from '../Model/Movie';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css']
})
export class CreatemovieComponent {
    movieobj:Movie = new Movie();
    dataSubmit(){
      console.log("Movie id from user is " + this.movieobj.movieid);
      console.log("Movie name from user is " + this.movieobj.moviename);
      console.log("Movie price from user is " + this.movieobj.price);
      console.log("Movie duration from user is " + this.movieobj.duration);
    }
}
