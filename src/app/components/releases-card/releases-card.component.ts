import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases-card',
  templateUrl: './releases-card.component.html',
  styleUrls: ['./releases-card.component.scss']
})
export class ReleasesCardComponent implements OnInit {

  @Input() photo:string=""
  @Input() title:string=""
  @Input() subtitle:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
