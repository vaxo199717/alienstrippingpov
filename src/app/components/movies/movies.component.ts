import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { ItemData } from 'src/app/interfaces/item-data';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  items: ItemData[] = [];
  constructor(private mainService: MainService) {
    
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
