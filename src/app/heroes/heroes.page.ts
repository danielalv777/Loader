import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Hero, HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HeroesPage implements OnInit {
  heroes: any[] = [];

  // heroService = inject(HeroService);

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getData().subscribe(
      (response) => {
        this.heroes = response.items;
        console.log('Data:', this.heroes);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  trackById(index: number, hero: any): string {
    return hero.id;
  }

}
