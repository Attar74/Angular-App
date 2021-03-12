import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modelVisible = false;
  items = [
    {title: 'Why is the sky blue', content: 'sky is blue coz it is'},
    {title: 'Why is the sky orange', content: 'sky is orange coz it is'},
    {title: 'Why is the sky red', content: 'sky is red coz it is'}
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
