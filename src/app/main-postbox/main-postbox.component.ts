import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-postbox',
  templateUrl: './main-postbox.component.html',
  styleUrls: ['./main-postbox.component.css']
})
export class MainPostboxComponent implements OnInit {

  gplogoURL = "/assets/resources/menu/goalplace.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
