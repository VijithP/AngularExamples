import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellowWorldComponent } from './hellow-world.component';

describe('HellowWorldComponent', () => {
  let component: HellowWorldComponent;
  let fixture: ComponentFixture<HellowWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellowWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellowWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
