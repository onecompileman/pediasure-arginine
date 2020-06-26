import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoundManagerService } from '../../core/services/sound-manager.service';

@Component({
  selector: 'pa-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.scss']
})
export class GameoverComponent implements OnInit {

  score;

  constructor(
    private router: Router,
    private soundManagerService: SoundManagerService
  ) { }

  ngOnInit() {
    this.score = localStorage.getItem('score');
    this.soundManagerService.stopBackgroundMusic();
    this.soundManagerService.playSoundByPath('/assets/sounds/lose.mp3');
  }

  tryAgain() {
    this.router.navigate(['/game']);
  }

}
