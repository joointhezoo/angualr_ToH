import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Cyclops'},
      {id: 12, name: 'Iceman'},
      {id: 13, name: 'Archangel'},
      {id: 14, name: 'Beast'},
      {id: 15, name: 'Phoenix'},
      {id: 16, name: 'Storm'},
      {id: 17, name: 'Wolverine'},
      {id: 18, name: 'Vulcan'},
      {id: 19, name: 'Darwin'},
      {id: 20, name: 'Sway'},
    ];
     return {heroes};
  }

  genId(heroes: Hero[]): number {
    console.log('genid')
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
