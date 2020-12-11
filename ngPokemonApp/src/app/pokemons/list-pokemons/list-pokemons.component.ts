import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {POKEMONS} from '../../shared/list.pokemons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})

export class ListPokemonsComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void {
    alert('vous avez sélectionné : ' + pokemon.name);
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
