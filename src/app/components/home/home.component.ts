import { Component, OnInit } from '@angular/core';
import { MovieData } from 'src/app/interfaces/movie-data';
import { ItemData } from 'src/app/interfaces/item-data';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: MovieData[] = [];
  items: ItemData[] = [];
  isLoading: boolean = true;
  constructor(private mainService: MainService) {
    
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }



  ngOnInit(): void {
    this.mainService.getData()
      .subscribe(
        response => {
          this.items = response;
        }
      )

  }

}
