import { Injectable } from '@angular/core';

export interface Stream{
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
export class StreamsService {

  streams=[
    {
      nr:"1",
      photo:"/assets/stream1.png",
      titleSong:"Mistletoe",
      artist:"Justin Bieber",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"2",
      photo:"/assets/ply5.png",
      titleSong:"Easy On Me",
      artist:"Adelle",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"3",
      photo:"/assets/stream3.png",
      titleSong:"Moonlight",
      artist:"Maria Carey...",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"4",
      photo:"/assets/ply2.png",
      titleSong:"SICKO MODE",
      artist:"Travis Scott ft. Drake...",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"5",
      photo:"/assets/ply3.png",
      titleSong:"Get Lost",
      artist:"Vincent Fable",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"6",
      photo:"/assets/ply4.png",
      titleSong:"I Feel Good",
      artist:"Pink Sweat$",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"7",
      photo:"/assets/stream7.png",
      titleSong:"50 Cent & Eminem",
      artist:"88rising",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"8",
      photo:"/assets/stream1.png",
      titleSong:"Mistletoe",
      artist:"Justin Bieber",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"9",
      photo:"/assets/ply5.png",
      titleSong:"Easy On Me",
      artist:"Adelle",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"10",
      photo:"/assets/stream3.png",
      titleSong:"Moonlight",
      artist:"Maria Carey...",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"11",
      photo:"/assets/ply2.png",
      titleSong:"SICKO MODE",
      artist:"Travis Scott ft. Drake...",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"12",
      photo:"/assets/ply3.png",
      titleSong:"Get Lost",
      artist:"Vincent Fable",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"13",
      photo:"/assets/ply4.png",
      titleSong:"I Feel Good",
      artist:"Pink Sweat$",
      type:"Album",
      time:"3:54",
    },
    {
      nr:"14",
      photo:"/assets/stream7.png",
      titleSong:"Midsummer Madness",
      artist:"88rising",
      type:"Album",
      time:"3:54",
    },
  ]

  constructor() { }
}
