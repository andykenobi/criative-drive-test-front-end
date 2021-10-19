import { Injectable } from '@angular/core';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public Login(user: UserModel, callback: (response: any) => void): void {
    // Esta parte seria a conexão com o backend.
    var response = this.LoginServerSimulate(user);

    callback(response);
  }

  // Uma simulação extremamente básica.
  public LoginServerSimulate(user: UserModel): any {
    var response = {
      status: 'error',
      messages: [],
      value: {}
    }

    if (user.username == 'admin' && user.password == 'admin') {
      response.status = 'sussess';
    } else {

      response.messages.push(
        {
          text: 'O Username ou Password estão incorretos.',
          type: 'error'
        }
      )
    }

    return response;
  }
}
