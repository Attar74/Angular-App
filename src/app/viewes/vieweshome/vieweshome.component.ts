import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vieweshome',
  templateUrl: './vieweshome.component.html',
  styleUrls: ['./vieweshome.component.css']
})
export class VieweshomeComponent implements OnInit {

  stats=[
    {value: 55, label: "Faves"},
    {value: 62, label: "Views"},
    {value: 12, label: "Members"}
  ]

  items=[
    {image:'/assets/images/couch.jpeg', title: 'Couch', description:'This is a fantastic piece'},
    {image:'/assets/images/dresser.jpeg', title: 'Dresser', description:'This is a great dresser'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
