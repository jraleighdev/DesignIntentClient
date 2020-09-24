import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBillComponent } from './file-bill.component';

describe('FileBillComponent', () => {
  let component: FileBillComponent;
  let fixture: ComponentFixture<FileBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
