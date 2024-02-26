import { Injectable } from '@angular/core';

export interface Rel{
  photo?:string;
  title?:string;
  subtitle?:string;
}

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  releases=[
    {
      photo:"/assets/rel1.png",
      title:"Red (Taylor's Version)",
      subtitle:"Taylor Swift",
    },
    {
      photo:"/assets/rel2.png",
      title:"Need To Know",
      subtitle:"Doja Cat",
    },
    {
      photo:"/assets/rel3.png",
      title:"After Hours",
      subtitle:"The Weeknd ",
    },
    {
      photo:"/assets/rel4.png",
      title:"HIT MACHINE",
      subtitle:"Soundwave",
    },
    {
      photo:"/assets/rel1.png",
      title:"Red (Taylor's Version)",
      subtitle:"Taylor Swift",
    },
    {
      photo:"/assets/rel2.png",
      title:"Need To Know",
      subtitle:"Doja Cat",
    },
    {
      photo:"/assets/rel3.png",
      title:"After Hours",
      subtitle:"The Weeknd ",
    },
    {
      photo:"/assets/rel4.png",
      title:"HIT MACHINE",
      subtitle:"Soundwave",
    },
    {
      photo:"/assets/rel1.png",
      title:"Red (Taylor's Version)",
      subtitle:"Taylor Swift",
    },
    {
      photo:"/assets/rel2.png",
      title:"Need To Know",
      subtitle:"Doja Cat",
    },
    {
      photo:"/assets/rel3.png",
      title:"After Hours",
      subtitle:"The Weeknd ",
    },
    {
      photo:"/assets/rel4.png",
      title:"HIT MACHINE",
      subtitle:"Soundwave",
    },
  ]

  constructor() { }
}
