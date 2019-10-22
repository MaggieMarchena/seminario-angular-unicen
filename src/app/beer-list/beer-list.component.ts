import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  public beers: any = [
    {
      name: 'Black Bear',
      style: 'Porter',
      price: 130,
      image: '',
      inStock: 5
    },
    {
      name: 'Sunny',
      style: 'Golden',
      price: 110,
      image: '',
      inStock: 10
    },
    {
      name: 'Fire',
      style: 'Red',
      price: 120,
      image: '',
      inStock: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
