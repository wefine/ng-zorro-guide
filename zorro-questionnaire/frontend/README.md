# ZORRO 快速开始 

## 1. 工程准备
```bash
yarn add @angular/cli
ng new zorro-getstart
cd zorro-getstart
yarn add ng-zorro-antd
```
## 2. 修改入口文件
### app.module.ts
使用下面的代码替换 /src/app/app.module.ts 的内容

> 注意：在根 module 中使用 NgZorroAntdModule.forRoot()，在子 module 中使用 NgZorroAntdModule 即可。

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

这样就成功在全局引入了 ng-zorro-antd

### app.component.html
用下面的代码替换 /src/app/app.component.html
> 注意：务必要引入 nz-root 根组件， nz-root 必须放置在根component (app.component.html) 中，而不是替换 app-root ，根组件只能引入一次，所有 ng-zorro组件都应该包裹在下面，否则部分组件将不能正常工作

```html
<!--引入根组件-->
<nz-root>
  <button nz-button [nzType]="'primary'">测试按钮</button>
</nz-root>
```
## 3. 开发调试

一键启动调试
```bash
ng serve --port 0 --open
```

如果需要实时调试AoT效果，请使用以下命令启动
```bash
$ ng serve --port 0 --open --aot
```
## 4. 构建和部署

```bash
ng build --prod
```
入口文件会构建到 dist 目录中，你可以自由部署到不同环境中进行引用。

## Happy Coding...
