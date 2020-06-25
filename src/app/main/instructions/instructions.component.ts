import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "pa-instructions",
  templateUrl: "./instructions.component.html",
  styleUrls: ["./instructions.component.scss"],
})
export class InstructionsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  tryItNow() {
    this.router.navigate(["/game"]);
  }
}
