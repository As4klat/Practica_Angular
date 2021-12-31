import { FavoritosService } from './../../services/favoritos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('card') card:any;

  constructor(private _favoritos:FavoritosService) {
  }

  ngOnInit(): void {
  }

  agregarFavorite(){

  }
}
