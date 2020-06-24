import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import { TitleComponent } from "./title/title.component";
import { InstructionsComponent } from "./instructions/instructions.component";
import { GameComponent } from "./game/game.component";
import { CongratsComponent } from "./congrats/congrats.component";
import { GameoverComponent } from "./gameover/gameover.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: TitleComponent,
        data: {
          animation: "Title Page",
        },
      },
      {
        path: "how-to-play",
        component: InstructionsComponent,
        data: {
          animation: "Instruction Page",
        },
      },
      {
        path: "game",
        component: GameComponent,
        data: {
          animation: "Game Page",
        },
      },
      {
        path: "congrats",
        component: CongratsComponent,
        data: {
          animation: "Congrats Page",
        },
      },
      {
        path: "game-over",
        component: GameoverComponent,
        data: {
          animation: "Gameover Page",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
