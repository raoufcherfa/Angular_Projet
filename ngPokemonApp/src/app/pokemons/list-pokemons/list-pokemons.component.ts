import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../pokemon";
import {POKEMONS} from "../../shared/list.pokemons";

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})

export class ListPokemonsComponent implements OnInit {
  pokemons:Pokemon[];
  constructor() { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon : Pokemon): void{
  alert('vous avez sélectionné : '+ pokemon.name);
  }
}
