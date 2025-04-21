import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { QuestionsService } from '../../services/questions.service';
import { UserInfo, TestResult, GroupResult } from '../../models/question.model';

@Component({
  selector: 'app-results',
  imports: [CommonModule, NgChartsModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  userInfo: UserInfo | null = null;
  results: TestResult | null = null;

  radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 25,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  radarChartData: ChartData<'radar'> = {
    labels: [],
    datasets: [],
  };

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
    this.results = this.questionsService.calculateResults();
    this.setupChartData();
  }

  private setupChartData() {
    if (!this.results) return;

    this.radarChartData = {
      labels: this.results.groups.slice(0, -1).map((g) => g.name),
      datasets: [
        {
          data: this.results.groups.slice(0, -1).map((g) => g.score),
          label: 'Pontuação',
          fill: true,
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgb(59, 130, 246)',
          pointBackgroundColor: 'rgb(59, 130, 246)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(59, 130, 246)',
        },
      ],
    };
  }

  getProgressPercentage(score: number, maxScore: number): number {
    return (score / maxScore) * 100;
  }

  startNewTest() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/']);
  }
}
