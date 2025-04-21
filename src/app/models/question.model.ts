export interface Question {
  number: number;
  text: string;
  options: string[];
}

export interface UserInfo {
  fullName: string;
  email: string;
  phone: string;
}

export interface Answer {
  questionNumber: number;
  value: number;
}

export interface GroupResult {
  name: string;
  score: number;
  maxScore: number;
}

export interface TestResult {
  groups: GroupResult[];
  totalScore: number;
  maxTotalScore: number;
}