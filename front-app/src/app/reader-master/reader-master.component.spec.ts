import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderMasterComponent } from './reader-master.component';

describe('ReaderMasterComponent', () => {
  let component: ReaderMasterComponent;
  let fixture: ComponentFixture<ReaderMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
