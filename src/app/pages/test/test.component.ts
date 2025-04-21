import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';
import { Question, UserInfo, Answer } from '../../models/question.model';

@Component({
    selector: 'app-test',
    imports: [CommonModule],
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  currentQuestion: Question | undefined;
  currentQuestionIndex = 0;
  userInfo: UserInfo | null = null;
  selectedAnswer: number | null = null;
  progress = 0;
  Math = Math;

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  ngOnInit() {
    const userInfoStr = localStorage.getItem('userInfo');
    if (!userInfoStr) {
      this.router.navigate(['/']);
      return;
    }
    
    this.userInfo = JSON.parse(userInfoStr);
    this.loadQuestion(0);
  }

  loadQuestion(index: number) {
    const questions = this.questionsService.getQuestions();
    if (index >= 0 && index < questions.length) {
      this.currentQuestion = questions[index];
      this.currentQuestionIndex = index;
      this.selectedAnswer = this.questionsService.getAnswer(this.currentQuestion.number);
      this.progress = ((index + 1) / questions.length) * 100;
    }
  }

  selectOption(value: number) {
    if (this.currentQuestion) {
      this.selectedAnswer = value;
      this.questionsService.saveAnswer({
        questionNumber: this.currentQuestion.number,
        value: value + 1
      });
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.loadQuestion(this.currentQuestionIndex - 1);
    }
  }

  nextQuestion() {
    const questions = this.questionsService.getQuestions();
    if (this.currentQuestionIndex < questions.length - 1) {
      this.loadQuestion(this.currentQuestionIndex + 1);
    } else {
      this.router.navigate(['/results']);
    }
  }
}