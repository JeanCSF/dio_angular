import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css'],
})
export class CompAtributosComponent implements OnInit {
  estilo: string = 'disable';
  corFundo: string = 'red';
  corFonte: string = 'white';
  item: string = '';
  lista: string[] = [];
  isEnabledBlock: boolean = true;

  constructor() {}

  adicionarALista() {
    this.lista.push(this.item);
    this.item = '';
  }

  ngOnInit(): void {}

  mudar() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }
}
