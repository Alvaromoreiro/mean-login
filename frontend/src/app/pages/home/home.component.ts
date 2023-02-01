import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="text-layout">
      <h2>MEAN Login Web Project</h2>
      <hr>
      <p>
        This project is a web login application developed with the MEAN stack (MongoDB, Express.js, Angular and Node.js). It includes state control and a MongoDB database.
      </p>
      <br>
      <div class="flex justify-content-center ">
      <img src="assets/state-management-lifecycle.png" alt="">
      </div>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
