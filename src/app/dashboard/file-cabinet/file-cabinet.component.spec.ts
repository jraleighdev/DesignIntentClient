import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCabinetComponent } from './file-cabinet.component';

describe('FileCabinetComponent', () => {
  let component: FileCabinetComponent;
  let fixture: ComponentFixture<FileCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
