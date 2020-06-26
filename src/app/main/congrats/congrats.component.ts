import { Component, OnInit } from '@angular/core';
import ConfettiGenerator from "confetti-js";
import { SoundManagerService } from '../../core/services/sound-manager.service';

@Component({
  selector: 'pa-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss']
})
export class CongratsComponent implements OnInit {

  confetti: any;

  constructor(
    private soundManagerService: SoundManagerService
  ) { }

  ngOnInit() {
    this.initConffetti();
    this.soundManagerService.stopBackgroundMusic();
    this.soundManagerService.playSoundByPath('/assets/sounds/win.mp3');
  }

  private initConffetti() {
    const confettiSettings = { target: 'confetti', size: 3, rotate: true, props: ['square', 'line'], max: 120 };
    this.confetti = new ConfettiGenerator(confettiSettings);
    this.confetti.render();
  }

}
