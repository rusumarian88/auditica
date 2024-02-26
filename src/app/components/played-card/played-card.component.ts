import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-played-card',
  templateUrl: './played-card.component.html',
  styleUrls: ['./played-card.component.scss']
})
export class PlayedCardComponent implements OnInit {

  @Input() nr:string=""
  @Input() photo:string=""
  @Input() titleSong:string=""
  @Input() artist:string=""
  @Input() type:string=""
  @Input() time:string=""
  @Input() songType:boolean=false
  @Input() menu:boolean=false
  @Input() menuSecond:boolean=false
  @Input() columnWhite:boolean=false
  @Input() bar:boolean=false


  constructor() { }

  ngOnInit(): void {
  }

}
 