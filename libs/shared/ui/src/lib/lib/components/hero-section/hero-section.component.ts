import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  host: {
    '[attr.data-hero-section-instance]': 'true', // This forces unique IDs for the instances
  },
})
export class HeroSectionComponent {
  @Input() title_one = ''
  @Input() title_two = ''
  @Input() description = ''


}
