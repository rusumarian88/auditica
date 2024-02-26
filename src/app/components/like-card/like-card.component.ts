import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-card',
  templateUrl: './like-card.component.html',
  styleUrls: ['./like-card.component.scss']
})
export class LikeCardComponent implements OnInit {

  @Input() photo:string=""
  @Input() title:string=""
  @Input() name:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
