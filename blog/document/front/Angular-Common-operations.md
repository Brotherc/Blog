---
title: Angular
tags:
  - Angular
---
## 常用操作

### angular遍历map

html:
```html
<ul>
    <li *ngFor="let recipient of map | keyvalue">
        {{recipient.key}} --> {{recipient.value}}
    </li>
</ul>
```
cpmponent:
```typescript
myMap : Map<string, boolean>;
for(let key of myMap.keys()) {
   console.log(key);
   console.log(myMap.get(key));
}
```
```typescript
Object.keys(myMap).map( key => {
    console.log('key: ' + key);
    console.log('value: ' + result[key]);
});
```
```typescript
for (const [key, val] of map) {
  console.log(key);
  console.log(val);
}
```
参考：  
[https://stackoverflow.com/questions/48187362/how-to-iterate-using-ngfor-loop-map-containing-key-as-string-and-values-as-map-i/48187637](https://stackoverflow.com/questions/48187362/how-to-iterate-using-ngfor-loop-map-containing-key-as-string-and-values-as-map-i/48187637)  
[https://stackoverflow.com/questions/37699320/iterating-over-typescript-map](https://stackoverflow.com/questions/37699320/iterating-over-typescript-map)  

### angular中html界面的if else 表示
```html
<div *ngIf="someCondition; else falsyTemplate">
  <h1>Condition Passed!</h1>
</div>

<ng-template #falsyTemplate>
  <h1>Condition Failed!</h1>
</ng-template>
```

### angular的html根据条件显示样式
html：
```html
<div [class.hide]="someCondition"></div>
```
css:
```scss
.hide {
    display: none;
}
```

### 在父组件中直接调用子组件的函数
父组件html：
```html
<app-child-form #childForm></app-child-form>
```
父组件component：
```typescript
    @ViewChild('childForm')
    childForm: ChildFormComponent;

    f(): void {
        this.childForm.f();
    }
```
子组件component：
```typescript
    f(): void {
        console.log('child component');
    }
```

### 日期格式转换
java:
```
LocalDateTime time
```
angular component：
```
time: Date
```
html:
```
{{time| date:'yyyy-MM-dd HH:mm:ss'}}
```

### 在组件中使用自定义的管道
pipe:
```typescript
@Pipe({
    name: 'xxx'
})
export class XxxPipe implements PipeTransform {
    transform(value: AlarmRule, args?: any): any {
      // ...
    }
}
```
Component：
```typescript
@Component({
  selector: 'xxx',
  templateUrl: 'xxx.html',
  styleUrls: ['xxx.css'],
  providers: [ XxxPipe ]
})
export class XxxComponent {
  constructor(private xxx: XxxPipe) {}
  // ...

  f(value) {// 调用
    this.xxx.transform(value);
    // ...
  }
}
```
参考：  
[https://alligator.io/angular/using-pipes-in-component-class/](https://alligator.io/angular/using-pipes-in-component-class/)

### 重置表单
html:
```html
<form nz-form [formGroup]="form">
</form>
```
Component:
```typescript
export class FormComponent implements OnInit {
    form: FormGroup;

    clearForm() {
        this.form.reset();
    }
}
```
参考：  
[https://stackoverflow.com/questions/36655922/resetting-a-form-in-angular-2-after-submit](https://stackoverflow.com/questions/36655922/resetting-a-form-in-angular-2-after-submit)

### 离开组件时销毁定时器
```typescript
export class xxxComponent implements OnInit, OnDestroy {
    timer: any;

    ngOnInit() {
        this.timer = setInterval(() => {
            console.log('轮询');
        }, 2000);
    }

    ngOnDestroy() {
        clearInterval(this.timer);
    }
}
```
参考：  
[https://stackoverflow.com/questions/35561320/end-interval-when-route-changes-in-angular-2/35561450](https://stackoverflow.com/questions/35561320/end-interval-when-route-changes-in-angular-2/35561450)

### img展示Blob类型数据
component:
```typescript
export class XxxComponent {
    rqcode: any;

    getRqCode() {
        this.xxxService.getRqCode().subscribe(resp => {
            // blob转base64
            const reader = new FileReader();
            reader.readAsDataURL(resp);
            reader.onloadend = () => {
                this.rqcode = reader.result;
            };
        });
    }
}
```
html:
```html
<img style="height: 200px; width: 200px;" [src]="rqcode">
```
参考：  
[https://stackoverflow.com/questions/7650587/using-javascript-to-display-a-blob/44069294](https://stackoverflow.com/questions/7650587/using-javascript-to-display-a-blob/44069294)  
[https://blog.csdn.net/fangquan1980/article/details/80675369](https://blog.csdn.net/fangquan1980/article/details/80675369)  
[https://stackoverflow.com/questions/18650168/convert-blob-to-base64](https://stackoverflow.com/questions/18650168/convert-blob-to-base64)  
