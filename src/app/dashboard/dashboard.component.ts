import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profiles?:any [];
  display : any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getProfile();
  }
 
  getProfile() {
    this.http.get("/assets/mockAPI/getProfile.json").subscribe((profile: any) => {
      this.profiles = profile;
  });
  }
  
}
