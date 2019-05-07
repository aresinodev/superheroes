import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroePaintComponent } from './superheroe-paint.component';

describe('SuperheroePaintComponent', () => {
  let component: SuperheroePaintComponent;
  let fixture: ComponentFixture<SuperheroePaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroePaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroePaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
