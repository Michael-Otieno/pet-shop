import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroSectionComponent],
  exports: [HeroSectionComponent],
})
export class UiModule {}
