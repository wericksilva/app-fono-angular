import { Component, OnInit } from '@angular/core';
import { AtividadeItem } from '../atividade-item/atividade-item.model';

@Component({
  selector: 'mt-atividades',
  templateUrl: './atividades.component.html'
})
export class AtividadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addAtividadeItem(item: AtividadeItem){
    console.log(item);
  }


}
