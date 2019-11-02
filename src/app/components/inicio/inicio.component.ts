import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../models/pelicula-model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  peliculas: Pelicula[];



  constructor(private peliculaService: PeliculaService) { }

  getPeliculas(): void{
    this.peliculas = this.peliculaService.getPeliculas();
  }

  ngOnInit() {
    this.getPeliculas();
  }

}
