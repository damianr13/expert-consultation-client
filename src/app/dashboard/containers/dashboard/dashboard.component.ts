import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'home page';
  }
}
