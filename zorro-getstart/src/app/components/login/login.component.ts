import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/src/release/message/nz-message.service';
import { AuthenticationService } from '../../services/AuthenticationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fg: FormGroup;
  fgc: object;

  constructor(
    private _message: NzMessageService,
    private fb: FormBuilder,
    private _auth: AuthenticationService) {
  }

  login() {
    for (const i in this.fg.controls) {
      this.fgc[i].markAsDirty();
    }

    if (!this.fg.invalid && !this._auth.login(this.fg['_value'])) {
      this._message.error('账户或密码错误，请确认后再试！')
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
