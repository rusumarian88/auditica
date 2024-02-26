import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-with-title',
  templateUrl: './section-with-title.component.html',
  styleUrls: ['./section-with-title.component.scss']
})
export class SectionWithTitleComponent implements OnInit {

  @Input() title:string=""
  @Input() btnPlay:boolean=false
  @Input() btnPause:boolean=false
  @Input() seeMore:boolean=false
  @Input() btn:string=""


  constructor() { }

  ngOnInit(): void {
  }

}
