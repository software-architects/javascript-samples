import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor() {}

  handleError(error: any) {
    // Here we can add custom code for handling unhandled exception
    console.error(error);
  }
}
