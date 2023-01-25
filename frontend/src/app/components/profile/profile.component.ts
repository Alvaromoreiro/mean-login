import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <p>
      profile works!
    </p>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
