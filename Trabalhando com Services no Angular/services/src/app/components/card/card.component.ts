import { Component, OnInit } from '@angular/core';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon: pokemonData;

  constructor(private service: PokemonService) {
    this.pokemon = {
      name: '',
      id: 0,
      types: [],
      sprites: {
        front_default: '',
      },
    };
  }

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          name: res.name,
          id: res.id,
          types: res.types,
          sprites: res.sprites,
        };
      },
      error: (error) => {
        console.log("not found");
      },
    });
  }

}
