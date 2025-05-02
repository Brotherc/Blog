---
title: Angular-表单
tags:
  - Angular
---
## 模板式表单
表单的数据模型是通过组件模板中的相关指令来定义的，因为使用这种方式定义表单的数据模型时，
我们会受限于HTML的语法，所以，模板驱动方式只适合用于一些简单的场景。

需要在app.module.ts中引入：
```typescript
imports: [
  FormsModule
]
```

### NgForm / ngNoForm
简单使用：
```html
<div ngForm>
</div>

<form ngNoForm>
</form>
```
取值：
```html
<form #myForm="ngForm">
</form>

<div>
  {{myForm.value | json}}
</div>
```
提交：
```html
<form #myForm="ngForm" (onSubmit)="onSubmit(myForm.value)">
  <button type="submit">注册</button>
</form>
```

### NgModel
简单使用：
```html
<form #myForm="ngForm" (onSubmit)="onSubmit(myForm.value)">
  <div>用户名：<input ngModel name="username" type="text"></div>
  <button type="submit">注册</button>
</form>
```
取值：
```html
<form #myForm="ngForm" (onSubmit)="onSubmit(myForm.value)">
  <div>用户名：<input #username="ngModel" ngModel name="username" type="text"></div>
  <button type="submit">注册</button>
</form>

<div>
  {{username.value}}
</div>
```

### NgModelGroup
简单使用：
```html
<div ngModelGroup="userInfo">
  <div>用户名：<input #username="ngModel" ngModel name="username" type="text"></div>
</div>

<div>
  {{username.value}} <!-- {"userInfo": {"username": ""}} -->
</div>
```
### 样例
html：
```html
<form #myForm="ngForm" (onSubmit)="onSubmit(myForm.value)">
  <div>用户名：<input ngModel name="username" type="text"></div>
  <div>手机号：<input ngModel name="mobile" type="number"></div>
  <div ngModelGroup="passwordsGroup">
    <div>密码：<input ngModel name="password" type="password"></div>
    <div>确认密码：<input ngModel name="pconfirm" type="password"></div>
  </div>
  <button type="submit">注册</button>
</form>
```
component:
```typescript
onSubmit(value: any) {
  console.log(value);
}
```

## 响应式表单
使用响应式表单时，那你通过编写TypeScript代码而不是Html代码来创建一个底层的数据模型，
在这个模型定义好以后，你使用一些特定的指令，将模板上的html元素与底层的数据模型连接在
一起。

需要在app.module.ts中引入：
```typescript
imports: [
  ReactiveFormsModule
]
```

### FormGroup
html
```html
<form [formGroup]="formModel" (submit)="onSubmit()">
  <div>
    <button type="submit">保存</button>
  </div>
</form>
```
component
```typescript
formModel: FormGroup = new FormGroup ({});

onSubmit() {
  console.log(this.formModel.value);
}
```
### FormControl
html
```html
<form [formGroup]="formModel" (submit)="onSubmit()">
  <input formControlName="username">
  <div formGroupName="dateRange">
    起始日期：<input type="date" formControlName="from">
    截止日期：<input type="date" formControlName="to">
  </div>
  <div>
    <button type="submit">保存</button>
  </div>
</form>
```
component
```typescript
formModel: FormGroup = new FormGroup ({
  username: new FormControl('aaa'),
  dateRange: new FormGroup({
    from: new FormControl(),
    to: new FormControl()
  })
});
```
### FormArray
html
```html
<form [formGroup]="formModel" (submit)="onSubmit()">
  <div formGroupName="dateRange">
    起始日期：<input type="date" formControlName="from">
    截止日期：<input type="date" formControlName="to">
  </div>
  <div>
    <ul formArrayName="emails">
      <li *ngFor="let e of this.formModel.get('emails').controls; let i = index;">
        <input type="text" [formControlName]="i">
      </li>
    </ul>
    <button type="button" (click)="addEmail()">增加Email</button>
  </div>
  <div>
    <button type="submit">保存</button>
  </div>
</form>
```
component
```typescript
formModel: FormGroup = new FormGroup ({
  dateRange: new FormGroup({
    from: new FormControl(),
    to: new FormControl()
  }),
  emails: new FormArray({
    new FormControl("a@a.com"),
    new FormControl("b@b.com")
  })
});

addEmail() {
  let emails = this.formModel.get('emails') as FormArray;
  emails.push(new FormControl());
}
```
### 样例
html
```html
<form [FormGroup]="formModel" (onSubmit)="onSubmit()">
  <div>用户名：<input type="text" formControlName="username"></div>
  <div>手机号：<input type="number" formControlName="mobile"></div>
  <div formGroupName="passwordsGroup">
    <div>密码：<input type="password" formControlName="password"></div>
    <div>确认密码：<input type="password" formControlName="pconfirm"></div>
  </div>
  <button type="submit">注册</button>
</form>
```
component
```typescript
formModel: FormGroup;

constructor() {
  this.formModel = new FormGroup ({
    username: new FormControl(),
    mobile: new FormControl(),
    passwordsGroup: new FormGroup({
      password: new FormControl(),
      pconfirm: new FormControl()
    })
  });
}
```

### FromBuilder
通过FromBuilder简化代码
```typescript
formModel: FormGroup;

constructor(fb: FormBuilder) {
  this.formModel = fb.group ({
    username: [''],
    mobile: [''],
    passwordsGroup: fb.group({
      password: [''],
      pconfirm: ['']
    })
  });
}
```

## 表单验证
html
```html
<form [FormGroup]="formModel" (onSubmit)="onSubmit()">
  <div>用户名：<input type="text" formControlName="username"></div>
  <div [hidden]="!formModel.hasError('required', 'username')">
    用户名是必填项
  </div>
  <div [hidden]="!formModel.hasError('minLength', 'username')">
    用户名最小长度是6
  </div>
  <div>手机号：<input type="number" formControlName="mobile"></div>
  <div [hidden]="!formModel.hasError('mobile', 'mobile')">
    请输入正确的手机号
  </div>
  <div formGroupName="passwordsGroup">
    <div>密码：<input type="password" formControlName="password"></div>
    <div [hidden]="!formModel.hasError('minLength', ['passwordsGroup', ['password']])">
      密码最小长度是6
    </div>
    <div>确认密码：<input type="password" formControlName="pconfirm"></div>
    <div [hidden]="!formModel.hasError('equal', 'passwordsGroup')">
      {{formModel.getError('equal', 'passwordsGroup')?.descxxx}}
    </div>
  </div>
  <button type="submit">注册</button>
</form>
```
component
```typescript
// 可以将以下angular校验器抽取到一个ts文件中
mobileValidator(control: FormControl): any {
  const myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myreq.test(control.calue);
  console.log('mobile的校验结果是：' + valid);
  return valid ? null : {mobile: true};
}

mobileAsyncValidator(control: FormControl): any {
  const myreq = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myreq.test(control.calue);
  console.log('mobile的校验结果是：' + valid);
  // 模拟异步
  return Observable.of(valid ? null : {mobile: true}).delay(5000);
}

equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  const valid: boolean = (password.value === pconfirm.value);
  console.log('密码的校验结果是：' + valid);
  return valid ? null : {equal: {descxxx: '密码和确认密码不匹配'}};
}

formModel: FormGroup;

constructor(fb: FormBuilder) {
  this.formModel = fb.group ({
    username: ['', [Vaildators.required, Validators.minLength(6)]],
    mobile: ['', this.mobileValidator],
    passwordsGroup: fb.group({
      password: [''],
      pconfirm: ['']
    }, {validator: this.equalValidator})
  });
}

onSubmit() {
  // const isValid: boolean = this.formModel.get('username').valid;
  // console.log('username的校验结果：' + isValid);
  // const errors: any = this.formModel.get("username").errors;
  // console.log('username的错误信息是：' + JSON.stringify(errors));
  if (this.formModel.valid) {
    console.log(this.formModel.value);
  }
}
```
### 状态字段
touched和untouched
```html
<form [FormGroup]="formModel" (onSubmit)="onSubmit()">
  <div>用户名：<input type="text" formControlName="username"></div>
  <div [hidden]="formModel.get('mobile').valid || formModel.get('mobile').untouched">
    <div [hidden]="!formModel.hasError('required', 'username')">
      用户名是必填项
    </div>
  </div>
  ...
</form>
```
pristine和dirty
```html
<form [FormGroup]="formModel" (onSubmit)="onSubmit()">
  <div>用户名：<input type="text" formControlName="username"></div>
  <div [hidden]="formModel.get('mobile').valid || formModel.get('mobile').pristine">
    <div [hidden]="!formModel.hasError('required', 'username')">
      用户名是必填项
    </div>
  </div>
  ...
</form>
```
pending
```html
<form [FormGroup]="formModel" (onSubmit)="onSubmit()">
  <div [hidden]="!formModel.get('mobile').pending">
    正在校验手机
  </div>
  ...
</form>
```

