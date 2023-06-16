import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})

export class ControleLivrosService {
  livros: Livro[];

  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: 'As 16 Leis Para o Sucesso' 
        resumo:
        'Napoleon Hills 16 Laws of Success é uma leitura inspiradora que pode fornecer orientação e motivação para aqueles que desejam alcançar seus objetivos e realizar seu potencial máximo"'.: ['Napoleao Hill'],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: 'Python para Iniciantes',
        resumo:
          '"Python para Iniciantes" é projetado para ser amigável para aqueles que não têm experiência prévia em programação. Ele usa uma abordagem passo a passo, explicando os conceitos de forma clara e gradual, e fornecendo exemplos práticos que os leitores podem seguir.'': ['Paul Barry'],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: 'A Arte da Guerra',
        resumo:
          'O livro é um tratado sobre estratégia militar e tem sido amplamente estudado e aplicado não apenas no campo de batalha, mas também em áreas como negócios, política e gestão.: ['Sun Tzu'], 
      },
    ];
  }

  obterbook = (): Livro[] => {
    return this.livros;
  };

  incluir = (book: Livro): void => {
    const codigo =
      this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    this.livros.push({ ...livro, codigo });
  };

  excluir = (codigo: number): void => {
    const indiceLivro = this.livros.findIndex(
      (livro) => livro.codigo === codigo
    );
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  };
}