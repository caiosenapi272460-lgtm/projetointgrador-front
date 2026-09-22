import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  imports: [CommonModule],
  templateUrl: './ex13.html',
  styleUrl: './ex13.scss',
})
export class Ex13 {
  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Criar tela de login',
      responsavel: 'Caio',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Modelar banco de dados',
      responsavel: 'Arthur',
      prioridade: 'alta',
      concluida: true
    },
    {
      id: 3,
      titulo: 'Criar documentação do projeto',
      responsavel: 'Miguel',
      prioridade: 'media',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Realizar testes do sistema',
      responsavel: 'Eric',
      prioridade: 'media',
      concluida: false
    },
    {
      id: 5,
      titulo: 'Revisar layout da aplicação',
      responsavel: 'Flavio',
      prioridade: 'baixa',
      concluida: true
    },
    {
      id: 6,
      titulo: 'Publicar projeto no GitHub',
      responsavel: 'Caio',
      prioridade: 'alta',
      concluida: false
    }
  ];

  alterarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  classePrioridade(prioridade: string): string {

    if (prioridade === 'alta') {
      return 'prioridade-alta';

    } else if (prioridade === 'media') {
      return 'prioridade-media';

    } else {
      return 'prioridade-baixa';
    }
  }

  totalTarefas(): number {
    return this.tarefas.length;
  }

  tarefasConcluidas(): number {
    return this.tarefas.filter(
      tarefa => tarefa.concluida
    ).length;
  }

  tarefasPendentes(): number {
    return this.tarefas.filter(
      tarefa => !tarefa.concluida
    ).length;
  }
}
