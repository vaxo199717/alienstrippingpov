import { Component, OnInit } from '@angular/core';

import { ItemData } from 'src/app/interfaces/item-data';
import { MainService } from 'src/app/main.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  items:ItemData[] = [];
  movieId:any;
  constructor(private mainService:MainService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.mainService.getData()
    .subscribe(
      response => {
        this.items = response;
      }
    )
    this.movieId = this.route.snapshot.params['id'];
    console.log(this.movieId)
  }

}
