import { FavoritosService } from './../../services/favoritos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _favoritos:FavoritosService) { }

  ngOnInit(): void {
  }

}
