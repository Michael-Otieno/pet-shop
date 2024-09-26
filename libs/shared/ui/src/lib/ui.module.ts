import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroSectionComponent, ItemCardComponent],
  exports: [HeroSectionComponent, ItemCardComponent],
})
export class UiModule {}
