import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AtividadeItem } from './atividade-item.model';

@Component({
  selector: 'mt-atividade-item',
  templateUrl: './atividade-item.component.html'
})
export class AtividadeItemComponent implements OnInit {

  @Input() atividadeItem:  AtividadeItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {

  }

  emitAddEvent(){
    this.add.emit(this.atividadeItem);
  }

}
