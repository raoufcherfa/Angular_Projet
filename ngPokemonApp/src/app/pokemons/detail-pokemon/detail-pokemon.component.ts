import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {POKEMONS} from '../../shared/list.pokemons';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  listOfPokemons: Pokemon[] = null;
  pokemonToDisplay: Pokemon = null;

  constructor(private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.listOfPokemons = POKEMONS;
    for (let i = 0; i < this.listOfPokemons.length; i++) {
      if (this.listOfPokemons[i].id === id) {
        this.pokemonToDisplay = this.listOfPokemons[i];
      }
    }
    console.log(this.pokemonToDisplay);
  }

  goBack(): void {
    const link = ['/pokemon'];
    this.router.navigate(link);
  }

}
