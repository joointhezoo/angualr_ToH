import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Hero } from '../heroes/hero.model';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.params["id"];
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.router.navigate(['/']);
    // **other way**
    // import location  &&  this.location.back();
  }

  save() {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

}


/***
 * The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent.
 * This component is interested in the route's bag of parameters extracted from the URL.
 * The "id" parameter is the id of the hero to display.
 * */
