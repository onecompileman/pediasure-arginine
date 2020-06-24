import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { GameoverComponent } from "./gameover/gameover.component";
import { TitleComponent } from "./title/title.component";
import { InstructionsComponent } from "./instructions/instructions.component";
import { GameComponent } from "./game/game.component";
import { CongratsComponent } from "./congrats/congrats.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    MainComponent,
    GameoverComponent,
    TitleComponent,
    InstructionsComponent,
    GameComponent,
    CongratsComponent,
  ],
  imports: [CommonModule, MainRoutingModule, FlexLayoutModule],
})
export class MainModule {}
