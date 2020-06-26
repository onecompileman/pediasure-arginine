import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { shuffleArray } from '../../core/utils/shuffle-array';


@Component({
  selector: "pa-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit {
  startTimer: number = 3;
  startTimerInterval: any;

  gameTimer: number = 15;
  gameTimerInterval: any;
  time: string = '15';

  foodPaths: string[] = [
    'assets/images/bacon-2.png',
    'assets/images/beef.png',
    'assets/images/bread.png',
    'assets/images/carrots.png',
    'assets/images/chocolates.png',
    'assets/images/nori.png',
    'assets/images/pampkin seed.png',
    'assets/images/peanuts.png',
    'assets/images/potatoes.png',
    'assets/images/soy beans.png',
    'assets/images/turkey.png',
    'assets/images/watermelon.png'
  ];

  foodCorrectPaths: string[] = [
    'assets/images/nori.png',
    'assets/images/beef.png',
    'assets/images/soy beans.png',
    'assets/images/peanuts.png',
    'assets/images/turkey.png'
  ];

  foods: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.initGame();
  }

  selectFood(food: any) {
    if (this.foods.filter(f => f.selected).length < 5) {
      food.selected = !food.selected;
    } else if (food.selected) {
      food.selected = !food.selected;      
    }
  }

  initGame() {
    this.startTimer = 3;
    if (this.startTimerInterval) {
      clearInterval(this.startTimerInterval);
    }

    this.startTimerInterval = setInterval(() => {
      if (this.startTimer === 0) {
        this.initFoods();
        setTimeout(() => this.startGame(), 500);
        clearInterval(this.startTimerInterval);
      }
      this.startTimer--;
    }, 1000);
  }

  private initFoods() {
    this.foods = this.foodPaths.map(food => 
      ({
        path: food,
        correct: this.foodCorrectPaths.includes(food),
        selected: false
      }));

    this.foods = shuffleArray(this.foods);
  }

  private startGame() {
    this.gameTimer = 15;

    if (this.gameTimerInterval) {
      clearInterval(this.gameTimerInterval);
    }

    this.gameTimerInterval = setInterval(() => {
      if (this.gameTimer === 0) {
        clearInterval(this.gameTimerInterval);

        const score = this.foods.filter(food => food.correct && food.selected).length;

        if (score === 5) {
          this.router.navigate(['/congrats']);
        } else {
          localStorage.setItem('score', score.toString());
          this.router.navigate(['/game-over']);
        }
      }
      this.gameTimer--;
      this.time = this.gameTimer.toString();
      this.time = this.time.length < 2 ? '0' + this.time : this.time;
    }, 1000);
  }
}
