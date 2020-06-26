import { Injectable } from '@angular/core';

import {Howl, Howler} from 'howler';


@Injectable({
    providedIn: 'root'
})
export class SoundManagerService {
    backgroundMusic: any;
    
    stopBackgroundMusic() {
        this.backgroundMusic.stop();
    }

    playBackgroundMusic() {
        this.backgroundMusic = new Howl({
          src: ['/assets/sounds/BGM1.mp3', '/assets/sounds/BGM2.mp3'],
          autoplay: true,
          loop: true,
          volume: 0.5,
        });
    }

    playSoundByPath(path: string) {
        const sound =  new Howl({
            src: [path],
            autoplay: true,
            loop: false,
            volume: 0.5,
        });

        sound.play();
    }
}