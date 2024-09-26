import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {

  @Input() title = ''
  @Input() price = ''
  @Input() pic = ''
}
