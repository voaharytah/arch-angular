import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisContainerComponent } from './devis-container.component';

describe('DevisContainerComponent', () => {
  let component: DevisContainerComponent;
  let fixture: ComponentFixture<DevisContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
