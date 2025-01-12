import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroSectionComponent, ItemCardComponent, ButtonComponent],
  exports: [HeroSectionComponent, ItemCardComponent, ButtonComponent],
})
export class UiModule {}
