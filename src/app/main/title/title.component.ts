import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "pa-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"],
})
export class TitleComponent implements OnInit, AfterViewInit {
  animationFoodStarted: boolean;
  animationFoodExited: boolean;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => (this.animationFoodStarted = true), 1000);
  }

  startGame() {
    this.animationFoodStarted = false;
    this.animationFoodExited = true;
    setTimeout(() => {
      this.router.navigate(["/how-to-play"]);
    }, 1000);
  }
}
