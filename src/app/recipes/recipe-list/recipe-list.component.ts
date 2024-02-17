import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Mineral Water",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Bottle_of_Verna_Natural_Mineral_Water.jpg"
    ),
    new Recipe(
      "Classic Coke",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/en/4/45/Coca-Cola_Disc_Logo_2007.svg"
    ),
    new Recipe(
      "Fanta",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Fanta_logo_%282018%29.png"
    ),
    new Recipe(
      "Orange Juice",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Orange_juice_1.jpg"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
