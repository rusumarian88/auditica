import { Component, Input, OnInit } from '@angular/core';
import { LikeService } from 'src/app/services/like.service';
import { PlayedService } from 'src/app/services/played.service';
import { ReleasesService } from 'src/app/services/releases.service';
import { StreamsService } from 'src/app/services/streams.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  photos:any[]=['/assets/ctg1.png','/assets/ctg2.png','/assets/ctg3.png','/assets/ctg4.png','/assets/ctg5.png','/assets/ctg6.png','/assets/ctg7.png','/assets/ctg8.png']

  constructor(

    public releasesService:ReleasesService,
    public likeService:LikeService,
    public playedService:PlayedService,
    public streamsService:StreamsService,

  ) { }

  ngOnInit(): void {
  }

}
