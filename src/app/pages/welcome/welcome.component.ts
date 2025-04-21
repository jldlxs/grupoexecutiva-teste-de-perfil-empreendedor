import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from '../../models/question.model';

@Component({
    selector: 'app-welcome',
    imports: [CommonModule, FormsModule],
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  userInfo: UserInfo = {
    fullName: '',
    email: '',
    phone: ''
  };

  errors = {
    fullName: '',
    email: '',
    phone: ''
  };

  constructor(private router: Router) {}

  validateFullName(): boolean {
    const name = this.userInfo.fullName.trim();
    const words = name.split(/\s+/);
    
    if (/\d/.test(name)) {
      this.errors.fullName = 'O nome não pode conter números';
      return false;
    }
    
    if (words.length < 2) {
      this.errors.fullName = 'Digite o nome completo';
      return false;
    }

    this.errors.fullName = '';
    return true;
  }

  validateEmail(): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailRegex.test(this.userInfo.email)) {
      this.errors.email = 'Digite um e-mail válido';
      return false;
    }

    this.errors.email = '';
    return true;
  }

  validatePhone(): boolean {
    const phoneNumbers = this.userInfo.phone.replace(/\D/g, '');
    
    if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      this.errors.phone = 'O telefone deve ter 10 ou 11 números';
      return false;
    }

    this.errors.phone = '';
    return true;
  }

  formatPhone() {
    let numbers = this.userInfo.phone.replace(/\D/g, '');
    if (numbers.length > 11) numbers = numbers.slice(0, 11);
    
    if (numbers.length > 0) {
      let formatted = '(' + numbers.slice(0, 2);
      if (numbers.length > 2) formatted += ') ' + numbers.slice(2, 7);
      if (numbers.length > 7) formatted += '-' + numbers.slice(7);
      this.userInfo.phone = formatted;
    }
  }

  onSubmit() {
    const isNameValid = this.validateFullName();
    const isEmailValid = this.validateEmail();
    const isPhoneValid = this.validatePhone();

    if (isNameValid && isEmailValid && isPhoneValid) {
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      this.router.navigate(['/test']);
    }
  }
}