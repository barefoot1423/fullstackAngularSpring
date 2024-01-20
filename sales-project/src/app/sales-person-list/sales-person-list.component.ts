import {Component, OnInit} from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@test.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@test.com", 40000),
    new SalesPerson("Cal", "Son", "cla.son@test.com", 90000),
    new SalesPerson("Joseph", "Cho", "joseph.cho@test.com", 60000),
  ]
}
