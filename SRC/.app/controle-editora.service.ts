import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Editora[];

  constructor() {
    this.editoras = [
      {
        codEditora: 1,
        nome: ' Nerd books',
        autor: 'Harry Sander',
      },
      {
        codEditora: 2,
        nome: 'Geek Revolution',
        autor: 'Osana Fostter',
      },
      {
        codEditora: 3,
        nome: 'Editora Laser book',
        autor: 'Paula Xavier',
      },
    ];
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter((e) => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';