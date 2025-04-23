import { Injectable } from '@angular/core';
import { Question, Answer, TestResult, GroupResult } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questions: Question[] = [
    {
      number: 1,
      text: 'Esforço-me para realizar as coisas que devem ser feitas.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 2,
      text: 'Quando me deparo com um problema difícil, levo muito tempo para encontrar a solução.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 3,
      text: 'Termino meu trabalho a tempo.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 4,
      text: 'Aborreço-me quando as coisas não são feitas devidamente.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 5,
      text: 'Prefiro situações em que posso controlar ao máximo o resultado final.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 6,
      text: 'Gosto de pensar no futuro.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 7,
      text: 'Quando começo uma tarefa ou projeto novo, coleto todas as informações possíveis antes de dar prosseguimento.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 8,
      text: 'Planejo um projeto grande dividindo-o em tarefas mais simples.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 9,
      text: 'Consigo que os outros me apoiem em minhas recomendações.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 10,
      text: 'Tenho confiança que posso ser bem sucedido em qualquer atividade que me proponha executar.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 11,
      text: 'Não importa com quem fale, sempre escuto atentamente.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 12,
      text: 'Faço as coisas que devem ser feitas sem que os outros tenham que me pedir.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 13,
      text: 'Insisto várias vezes para conseguir que as outras pessoas façam o que desejo.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 14,
      text: 'Sou fiel às promessas que faço.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 15,
      text: 'Meu rendimento no trabalho é melhor do que o das outras pessoas com quem trabalho.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 16,
      text: 'Envolvo-me com algo novo só depois de ter feito o possível para assegurar seu êxito.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 17,
      text: 'Acho uma perda de tempo me preocupar com o que farei da minha vida.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 18,
      text: 'Procuro conselhos das pessoas que são especialistas no ramo em que estou atuando.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 19,
      text: 'Considero cuidadosamente as vantagens e desvantagens de diferentes alternativas antes de realizar uma tarefa.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 20,
      text: 'Não perco muito tempo pensando em como posso influenciar as outras pessoas.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 21,
      text: 'Mudo a maneira de pensar se outros discordam energicamente dos meus pontos de vista.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 22,
      text: 'Aborreço-me quando não consigo o que quero.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 23,
      text: 'Gosto de desafios e novas oportunidades.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 24,
      text: 'Quando algo se opõe ao que estou tentando fazer, persisto em minha tarefa.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 25,
      text: 'Se necessário não me importo de fazer o trabalho dos outros para cumprir um prazo de entrega.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 26,
      text: 'Aborreço-me quando perco tempo.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 27,
      text: 'Considero minhas possibilidades de êxito ou fracasso antes de começar atuar.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 28,
      text: 'Quanto mais específicas forem minhas expectativas em relação ao que quero obter na vida, maiores serão minhas possibilidades de êxito.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 29,
      text: 'Tomo decisões sem perder tempo buscando informações.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 30,
      text: 'Procuro levar em conta todos os problemas que podem se apresentar e antecipo o que eu faria caso ocorram.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 31,
      text: 'Conto com pessoas influentes para alcançar minhas metas.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 32,
      text: 'Quando estou executando algo difícil e desafiador, tenho confiança em seu sucesso.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 33,
      text: 'Tive fracassos no passado.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 34,
      text: 'Prefiro executar tarefas que domino perfeitamente e em que me sinto seguro.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 35,
      text: 'Quando me deparo com sérias dificuldades, rapidamente passo para outras atividades.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 36,
      text: 'Quando estou fazendo um trabalho para outra pessoa, me esforço de forma especial para que fique satisfeita com o trabalho.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 37,
      text: 'Nunca fico totalmente satisfeito com a forma como são feitas as coisas; sempre considero que há uma maneira melhor de fazê-las.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 38,
      text: 'Executo tarefas arriscadas.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 39,
      text: 'Conto com um plano claro de vida.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 40,
      text: 'Quando executo um projeto para alguém, faço muitas perguntas para assegurar-me de que entendi o que quer.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 41,
      text: 'Enfrento os problemas na medida em que surgem, em vez de perder tempo, antecipando-os.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 42,
      text: 'Para alcançar minhas metas, procuro soluções que beneficiem todas as pessoas envolvidas em um problema.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 43,
      text: 'O trabalho que realizo é excelente.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 44,
      text: 'Em algumas ocasiões obtive vantagens de outras pessoas.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 45,
      text: 'Aventuro-me a fazer coisas novas e diferentes das que fiz no passado.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 46,
      text: 'Tenho diferentes maneiras de superar obstáculos que se apresentam para a obtenção de minhas metas.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 47,
      text: 'Minha família e vida pessoal são mais importantes do que as datas de entregas de trabalho determinadas por mim mesmo.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 48,
      text: 'Encontro a maneira mais rápida de terminar os trabalhos, tanto em casa quanto no trabalho.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 49,
      text: 'Faço coisas que as outras pessoas consideram arriscadas.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 50,
      text: 'Preocupo-me tanto em alcançar minhas metas semanais quanto minhas metas anuais.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 51,
      text: 'Conto com várias fontes de informação ao procurar ajuda para a execução de tarefas e projetos.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 52,
      text: 'Se determinado método para enfrentar um problema não der certo, recorro a outro.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 53,
      text: 'Posso conseguir que pessoas com firmes convicções e opiniões mudem seu modo de pensar.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 54,
      text: 'Mantenho-me firme em minhas decisões, mesmo quando as outras pessoas se opõem energicamente.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    },
    {
      number: 55,
      text: 'Quando desconheço algo, não hesito em admiti-lo.',
      options: ['Nunca', 'Raramente', 'Algumas Vezes', 'Frequentemente', 'Sempre']
    }
  ];

  private answers: Answer[] = [];

  getQuestions(): Question[] {
    return this.questions;
  }

  getQuestion(number: number): Question | undefined {
    return this.questions.find(q => q.number === number);
  }

  saveAnswer(answer: Answer) {
    const index = this.answers.findIndex(a => a.questionNumber === answer.questionNumber);
    if (index >= 0) {
      this.answers[index] = answer;
    } else {
      this.answers.push(answer);
    }
  }

  getAnswer(questionNumber: number): number | null {
    const answer = this.answers.find(a => a.questionNumber === questionNumber);
    return answer ? answer.value : null;
  }

  calculateResults(): TestResult {
    const groups: GroupResult[] = [
      // Group 1: Busca de oportunidade e iniciativa (max 25)
      this.calculateGroup('Busca de oportunidade e iniciativa', [1, 12, 23, 34, 45], 6, [3]),

      // Group 2: Persistência (max 25)
      this.calculateGroup('Persistência', [2, 13, 24, 35, 46], 6, [3]),

      // Group 3: Comprometimento (max 25)
      this.calculateGroup('Comprometimento', [3, 14, 25, 36, 47], 6, [4]),

      // Group 4: Exigência de qualidade e eficiência (max 25)
      this.calculateGroup('Exigência de qualidade e eficiência', [4, 15, 26, 37, 48], 0, [-1]),

      // Group 5: Correr riscos calculados (max 25)
      this.calculateGroup('Correr riscos calculados', [5, 16, 27, 38, 49], 6, [3]),

      // Group 6: Estabelecimento de metas (max 25)
      this.calculateGroup('Estabelecimento de metas', [6, 17, 28, 39, 50], 6, [1]),

      // Group 7: Busca de informações (max 25)
      this.calculateGroup('Busca de informações', [7, 18, 29, 40, 51], 6, [2]),

      // Group 8: Planejamento e monitoramento sistemáticos (max 25)
      this.calculateGroup('Planejamento e monitoramento sistemáticos', [8, 19, 30, 41, 52], 6, [3]),

      // Group 9: Persuasão e rede de contatos (max 25)
      this.calculateGroup('Persuasão e rede de contatos', [9, 20, 31, 42, 53], 6, [1]),

      // Group 10: Independência e autoconfiança (max 25)
      this.calculateGroup('Independência e autoconfiança', [10, 21, 32, 43, 54], 6, [1]),

      // Group 11: Fator de correção (max 25) - 3 questões invertidas
      this.calculateGroup('Fator de correção', [11, 22, 33, 44, 55], 18, [1, 2, 3])
    ];

    const totalScore = groups.reduce((sum, group) => sum + group.score, 0);
    const maxTotalScore = groups.reduce((sum, group) => sum + group.maxScore, 0);

    return {
      groups,
      totalScore,
      maxTotalScore
    };
  }

  private calculateGroup(
    name: string,
    questions: number[],
    addPoints: number,
    negativeIndexes: number[]
  ): GroupResult {
    let score = 0;

    questions.forEach((q, index) => {
      const answer = this.getAnswer(q);
      if (answer !== null) {
        if (negativeIndexes.includes(index)) {
          score -= answer;
        } else {
          score += answer;
        }
      }
    });

    // Add the additional points
    score += addPoints;

    // Normalize score to max 25 if it exceeds
    if (score > 25) {
      score = 25;
    }

    return {
      name,
      score,
      maxScore: 25 // All groups have a maximum score of 25
    };
  }
}