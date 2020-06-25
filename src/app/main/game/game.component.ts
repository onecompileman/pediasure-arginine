import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "pa-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit {
  startTimer: number = 3;
  startTimerInterval: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.startTimer = 3;
    if (this.startTimerInterval) {
      clearInterval(this.startTimerInterval);
    }

    this.startTimerInterval = setInterval(() => {
      if (this.startTimer === 0) {
        clearInterval(this.startTimerInterval);
      }
      this.startTimer--;
    }, 1000);
  }
}
