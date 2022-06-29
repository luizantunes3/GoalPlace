import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {
  
  //Profile Picture URL
  userProfilePhotoURL = "/assets/resources/main-body/no-user.png";
  //User Name String
  userName = "Convidado"
  userDescription = "-"
  userTeam = "-"

  constructor() { }

  ngOnInit(): void {
  }

}
