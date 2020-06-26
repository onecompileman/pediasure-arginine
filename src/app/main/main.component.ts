import { Component, OnInit, HostListener } from "@angular/core";
import { mainRoutingAnimation } from "./main-routing.animation";
import { RouterOutlet } from "@angular/router";
import { SoundManagerService } from '../core/services/sound-manager.service';


@Component({
  selector: "pa-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  animations: [mainRoutingAnimation],
})
export class MainComponent implements OnInit {
  isPortrait: boolean;

  height: number;
  width: number;


  constructor(
    private soundManager: SoundManagerService
  ) {}

  ngOnInit() {
    this.isPortrait = innerHeight > innerWidth;
    this.height = innerHeight;
    this.width = innerWidth;

    this.soundManager.playBackgroundMusic();
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.isPortrait = innerHeight > innerWidth;
    this.height = innerHeight;
    this.width = innerWidth;
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

}
