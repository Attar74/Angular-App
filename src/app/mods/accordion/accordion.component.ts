import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() items:any;

  openAccordionIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeActive = (index: number)=>{
    this.openAccordionIndex = (this.openAccordionIndex === index)?  -1 : index;
  }

}
