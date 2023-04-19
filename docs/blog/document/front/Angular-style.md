---
title: Angular-样式与交互
tags:
- Angular
---
## 根据路由展开菜单
**当路由为“/a”和“/a/b”class active都会被添加。active可以设置为展开菜单的样式**  
html:

```html
<li [routerLink]="/a" routerLinkActive="active">a</li>
<li [routerLink]="/a/b" routerLinkActive="active">ab</li>
```

**当路由中携带参数时（即？key=value）**  
html:

```html
<li [routerLink]="/a" [class.active]="isActive("/a")">a</li>
```
component:
```typescript
isActive(instruction: string): boolean {
  return this.router.isActive(this.router.createUrlTree([instruction]), false);
}
```

参考：  
[https://stackoverflow.com/questions/39271654/routerlinkactive-for-routerlink-with-parameters-dynamic](https://stackoverflow.com/questions/39271654/routerlinkactive-for-routerlink-with-parameters-dynamic)  
[https://majing.io/posts/10000019031169](https://majing.io/posts/10000019031169)  



## Drag And Drop（Angular 7 ）

**resource-grouping-list**  
html:

```html
<button nz-button nzType="primary" (click)="showModal(0, null, '新建分组')"><i nz-icon type="plus"></i>新建分组</button>
<nz-table>
...
<a (click)="showModal(1, data._id, '修改分组')"><i nz-icon type="form"></i></a>
</nz-table>

<nz-modal [(nzVisible)]="modalIsVisible" [(nzTitle)]="modalTitle" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()" nzWidth="1200">
    <app-resource-grouping-form #form [resourceGroupId]="resourceGroupId"></app-resource-grouping-form>
</nz-modal>
```
component:
```typescript
export class ResourceGroupingListComponent implements OnInit {
    resourceGroupId: string;
    modalTitle = '新增分组';
    modalIsVisible = false;
    modalType = 0;
    @ViewChild('form')
    form: ResourceGroupingFormComponent;

    constructor(private message: NzMessageService) {}

    showModal(type: number, id: string, modalTitle: string): void {
        this.modalType = type;
        this.modalTitle = modalTitle;
        this.modalIsVisible = true;
        this.resourceGroupId = id;
        if (type === 1) {
            this.form.initResourceData(id);
        }
    }
    handleCancel(): void {
        this.modalIsVisible = false;
        if (this.modalType === 1) {
            this.form.clearForm();
        }
    }
    handleOk(): void {
        if (this.modalType === 0) {
            const params = this.form.submitForm();
            if (params !== null) {
                // 调用service添加
                this.dealOkResp(resp, this.modalType, '添加成功');
            }
        } else if (this.modalType === 1) {
            const params = this.form.submitForm();
            if (params !== null) {
                // 调用service修改
                this.dealOkResp(resp, this.modalType, '修改成功');
            }
        }
    }
    dealOkResp(resp: any, type: number, content: string) {
        if (resp && resp._id) {
            this.modalIsVisible = false;
            this.message.create('success', content);
            // 刷新列表数据
            this.form.clearForm();
        }
    }
}
```

**resource-grouping-form**  
html:
```html
<form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
    <nz-form-item>
        <nz-form-control [nzSm]="5" [nzXs]="24" [nzOffset]="3">
            <nz-card style="width:200px;" nzTitle="已选择的资源">
                <div class="example-container">
                    <div
                        cdkDropList
                        id="selectedList"
                        [cdkDropListData]="selected"
                        [cdkDropListConnectedTo]="toList"
                        class="example-list"
                        (cdkDropListDropped)="drop($event)">
                        <div class="example-box" *ngFor="let item of selected" cdkDrag [cdkDragData]="item">{{item.title}}
                        </div>
                    </div>
                </div>
            </nz-card>
        </nz-form-control>

        <ng-container *ngFor="let entity of resourceTypeMap | keyvalue">
            <nz-form-control [nzSm]="5" [nzXs]="24">
                <nz-card style="width:200px; margin-bottom: 10px;" [nzTitle]="entity.key.name">
                    <div class="example-container" style="overflow-y: auto;">
                        <div
                            cdkDropList
                            [id]="entity.key.value"
                            [cdkDropListData]="entity.value"
                            [cdkDropListConnectedTo]="['selectedList']"
                            class="example-list"
                            [cdkDropListEnterPredicate]="evenPredicate"
                            (cdkDropListDropped)="drop($event)">
                            <div class="example-box" *ngFor="let item of entity.value" cdkDrag [cdkDragData]="item">
                                {{item.title}}
                            </div>
                        </div>
                    </div>
                </nz-card>
            </nz-form-control>
        </ng-container>
    </nz-form-item>
</form>
```
css:
```scss
.example-container {
    width: 200px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    height: 164px;
}

.example-list {
    border: solid 1px #ccc;
    min-height: 33px;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    display: block;
}

.example-box {
    padding: 6px 6px;
    border-bottom: solid 1px #ccc;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    cursor: move;
    background: white;
    font-size: 14px;
}

.cdk-drag-preview {
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.cdk-drag-placeholder {
    opacity: 0;
}

.cdk-drag-animating {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

.example-box:last-child {
    border: none;
}

.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}
```
component:
```typescript
export class ResourceGroupingFormComponent implements OnInit {
    validateForm: FormGroup;
    selected = [];
    toList = [];
    resourceTypeMap: Map<any, any[]> = new Map();
    resourceType = [{
        name: '主机',
        value: 'HOST',
        data: [{
          key: "192.168.174.170",
          title: "192.168.174.170",
          type: "HOST"
        }]
    }, {
      name: '数据库',
      value: 'DATABASE',
      data: [{
          key: "orcl",
          title: "192.168.174.154 orcl",
          type: "DATABASE"
      }]
    }];
    @Input()
    resourceGroupId: string = null;

    evenPredicate(item: CdkDrag<any>, drop: CdkDropList) {
        if (item.data.type === drop.id) {
            return true;
        }
        return false;
    }
    drop(event: CdkDragDrop<any[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initValidateForm();
    }

    initValidateForm() {
        this.validateForm = this.fb.group({
            groupName: [null, [Validators.required]],
        });
        this.initFormData();
    }

    initFormData() {
        this.selected = [];
        this.toList = [];
        this.resourceTypeMap = new Map<any, any[]>();
        this.resourceType.forEach(item => {
          this.resourceTypeMap.set(item, item.data);
          this.toList.push(item.value);
        });
    }

    submitForm(): any {
        if (this.validateForm.invalid) {
            this.validAlarmForm(this.validateForm);
            return null;
        }

        const resources = this.selected.map(item => new Resource(item.key, item.title, item.type));
        this.setFormVal(this.validateForm, 'resources', resources);
        return this.validateForm.value;
    }
    validForm(form: FormGroup) {
        for (const key in form.controls) {
            const control = form.controls[key];
            if (control instanceof FormGroup) {
                this.validForm(control);
            } else if (control instanceof FormControl) {
                control.markAsDirty();
                control.updateValueAndValidity();
            }
        }
    }

    setFormVal(form: FormGroup, name: string, val: any) {
        const formControl = new FormControl();
        formControl.setValue(val);
        form.setControl(name, formControl);
    }

    clearForm() {
        this.validateForm.reset();
        this.initFormData();
    }
}
```
app.module.ts:
```typescript
import { DragDropModule } from '@angular/cdk/drag-drop';

    imports: [
        DragDropModule
    ]

```
参考:  
[https://www.c-sharpcorner.com/article/drag-and-drop-using-angular-7/](https://www.c-sharpcorner.com/article/drag-and-drop-using-angular-7/)  
[https://material.angular.io/cdk/drag-drop/overview](https://material.angular.io/cdk/drag-drop/overview)  
其它插件:  
[https://github.com/ObaidUrRehman/ng-drag-drop#readme](https://github.com/ObaidUrRehman/ng-drag-drop#readme)