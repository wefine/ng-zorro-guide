import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/AuthenticationService';
import { GlobalRef } from './services/GlobalRef';
import { NZ_MESSAGE_CONFIG } from 'ng-zorro-antd/src/release/message/nz-message-config';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    // 该引入图标字体的方式可行
    NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont/iconfont' }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    GlobalRef,
    AuthenticationService,
    { provide: NZ_MESSAGE_CONFIG, useValue: { nzDuration: 3000 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
