import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { RestApiService } from './rest-api.service';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  message = '';
  messageType = 'danger';

  employee!: Employee | null;
  constructor(private router: Router, private rest: RestApiService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
  }

  async getProfile() {
    try {
      const data = await this.rest.get(
        'http://localhost:3000/api/v1/accounts/get/profile'
      );
      this.employee = (data as { employee: Employee }).employee;
    } catch (error) {
      this.error('error');
    }
  }

  error(message: string) {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message: string) {
    this.messageType = 'success';
    this.message = message;
  }

  warning(message: string) {
    this.messageType = 'warning';
    this.message = message;
  }
}
