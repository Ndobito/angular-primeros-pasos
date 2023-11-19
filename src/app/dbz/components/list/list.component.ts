import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public OnDeleteIdCharacter:EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[] = [
    {
      name: "Trunks",
      power: 200
    }
  ]

  onDeleteId(id?:string):void{
    if (!id) return;
    this.OnDeleteIdCharacter.emit(id);
  }

}
