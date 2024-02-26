import { Injectable } from '@angular/core';

export interface Play{
  nr?:string;
  photo?:string;
  titleSong?:string;
  artist?:string;
  type?:string;
  time?:string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayedService {

  played=[
    {
      nr:"1",
      photo:"/assets/song image.png",
      titleSong:"All I Want For Christmas Is You",
      artist:"Maria Carey",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"2",
      photo:"/assets/ply1.png",
      titleSong:"On The Ground",
      artist:"Rosé",
      type:"Podcast",
      time:"2:56",
    },
    {
      nr:"3",
      photo:"/assets/ply3.png",
      titleSong:"Red (Taylor's Version)",
      artist:"Kanye West",
      type:"Donda",
      time:"5:23",
    },
    {
      nr:"4",
      photo:"/assets/ply2.png",
      titleSong:"At My Worst",
      artist:"Bad Habits",
      type:"Song",
      time:"1:12",
    },
    {
      nr:"5",
      photo:"/assets/ply4.png",
      titleSong:"Be Free (Remix)",
      artist:"Smiley",
      type:"Single",
      time:"4:09",
    },
    {
      nr:"6",
      photo:"/assets/ply5.png",
      titleSong:"Donda",
      artist:"Graduation",
      type:"Album",
      time:"47:53",
    }
  ]

  constructor() { }
}
