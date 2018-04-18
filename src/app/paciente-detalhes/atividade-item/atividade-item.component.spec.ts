import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeItemComponent } from './atividade-item.component';

describe('AtividadeItemComponent', () => {
  let component: AtividadeItemComponent;
  let fixture: ComponentFixture<AtividadeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
