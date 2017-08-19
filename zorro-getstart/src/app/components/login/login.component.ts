import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, User } from '../../services/AuthenticationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fg: FormGroup;
  fgc: object;
  public user = new User('', '');
  public errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService) {
  }

  login() {
    for (const i in this.fg.controls) {
      this.fg.controls[ i ].markAsDirty();
    }

    if (!this.auth.login(this.fg["_value"])) {
      this.errorMsg = 'Failed to login';
    }
  }

  ngOnInit() {
    this.fg = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

    this.fgc = this.fg.controls;
  }
}
