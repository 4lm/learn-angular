import { Component, OnInit } from "@angular/core";
import { SalesPerson } from "./sales-person";

@Component({
  selector: "app-sales-person-list",
  templateUrl: "./sales-person-list.component.html",
  styleUrls: ["./sales-person-list.component.scss"]
})
export class SalesPersonListComponent implements OnInit {
  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "email",
    "salesVolume"
  ];
  dataSource: SalesPerson[] = [
    new SalesPerson("Alice", "Allison", "aliallison@gmail.com", 245364),
    new SalesPerson("Bob", "Schwartz", "bschwartz@gmail.com", 309863),
    new SalesPerson("John", "Doe", "jd@gmail.com", 132545),
    new SalesPerson("Jane", "Dow", "jdow@gmail.com", 99949494),
    new SalesPerson("Mad", "Max", "mm@gmail.com", 0)
  ];

  constructor() {}

  ngOnInit(): void {}
}
