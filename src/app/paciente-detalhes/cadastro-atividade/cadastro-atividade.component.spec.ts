import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAtividadeComponent } from './cadastro-atividade.component';

describe('CadastroAtividadeComponent', () => {
  let component: CadastroAtividadeComponent;
  let fixture: ComponentFixture<CadastroAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
