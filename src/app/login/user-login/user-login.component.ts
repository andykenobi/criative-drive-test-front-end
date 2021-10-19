import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { LoginService } from '../shared/login.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public userModel: UserModel = new UserModel();

  constructor(private _loginService: LoginService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  Submit() {
    var self = this;

    this._loginService.Login(this.userModel, function (response) {
      if (response.status == 'sussess') {
        return;
      }

      response.messages.forEach(element => {
        self._snackBar.open(element.text, 'Fechar', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      });
      
      self.userModel = new UserModel();
    });

  }
}
