import { Injectable } from '@angular/core';

export interface Like{
  photo?:string
  title?:string
  name?:string
}

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  likes=[
    {
      photo:"/assets/rel4.png",
      title:"Rockabye",
      name:"SHAUN",
    },
    {
      photo:"/assets/rel1.png",
      title:"Bad Habits",
      name:"Ed Sheeran",
    },
    {
      photo:"/assets/rel3.png",
      title:"Graduation",
      name:"Kanye West",
    },
    {
      photo:"/assets/rel2.png",
      title:"At My Worst",
      name:"Pink Sweat$",
    },
    {
      photo:"/assets/rel4.png",
      title:"Rockabye",
      name:"SHAUN",
    },
    {
      photo:"/assets/rel1.png",
      title:"Bad Habits",
      name:"Ed Sheeran",
    },
    {
      photo:"/assets/rel3.png",
      title:"Graduation",
      name:"Kanye West",
    },
    {
      photo:"/assets/rel2.png",
      title:"At My Worst",
      name:"Pink Sweat$",
    },
    {
      photo:"/assets/rel4.png",
      title:"Rockabye",
      name:"SHAUN",
    },
    {
      photo:"/assets/rel1.png",
      title:"Bad Habits",
      name:"Ed Sheeran",
    },
    {
      photo:"/assets/rel3.png",
      title:"Graduation",
      name:"Kanye West",
    },
    {
      photo:"/assets/rel2.png",
      title:"At My Worst",
      name:"Pink Sweat$",
    },
    {
      photo:"/assets/rel4.png",
      title:"Rockabye",
      name:"SHAUN",
    },
    {
      photo:"/assets/rel1.png",
      title:"Bad Habits",
      name:"Ed Sheeran",
    },
    
  ]


  constructor() { }
}
