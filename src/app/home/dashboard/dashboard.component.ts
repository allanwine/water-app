import { Component, OnInit } from '@angular/core';
import { cup } from 'src/app/core/models/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  goal: number = 2000;
  percentage: number = 0;
  remained: number = 0;
  numberOfCups: number = 8;
  fullCups: number = 0;
  cups: cup[] = [];
  percentageHeight: string = '0px';

  constructor() { }

  ngOnInit(): void {
    this.cups = this.createCups();
  }

  updateSettings() {
    this.reset();
    this.remained = this.goal;
    this.cups = this.createCups();
    this.percentageHeight = '0px';
    this.percentage = 0;
  }

  createCups(): cup[] {
    let cups: cup[] = [];
    for (let i = 0; i < this.numberOfCups; i++) {
      cups.push({
        id: i,
        size: Math.round((this.goal / this.numberOfCups)).toString() + 'ml',
        clicked: false
      });
    }
    return cups;
  }

  updateRemained() {
    this.remained = this.goal;
    for (let cup of this.cups) {
      if (cup.clicked) {
        this.remained -= parseInt(cup.size);
      }
    }
    this.updatePercentage();
  }

  updatePercentage() {
    this.percentage = Math.floor(((this.goal - this.remained) / this.goal) * 100);
  }

  updateBigCup() {
    const filledCups = (this.goal - this.remained) / (this.goal / this.numberOfCups);
    console.log(filledCups);
  }

  updatePercentageHeight() {
    this.percentageHeight = this.fullCups / this.numberOfCups * 330 + 'px';
  }

  clickCup(id: number) {
    this.reset();
    for (let cup of this.cups) {
      if (cup.id <= id) {
        this.fullCups++;
        cup.clicked = true;
      }
    }
    this.updatePercentageHeight();
    this.updateRemained();
  }

  reset() {
    this.fullCups = 0;
    for (let cup of this.cups) {
      cup.clicked = false;
    }
  }
}
