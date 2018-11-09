import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Cyclops', imgPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Cyclops_Jim_Lee.jpg/150px-Cyclops_Jim_Lee.jpg'},
      {id: 12, name: 'Iceman', imgPath: 'https://www.superherodb.com/pictures2/portraits/10/100/816.jpg?t=1492410364'},
      {id: 13, name: 'Archangel', imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k7CqvL1BH0C68um3BGrWoeIH21cv5zW8OGHREL8cNzRniEUDvg'},
      {id: 14, name: 'Beast', imgPath: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Beast_Last_Stand.jpeg/160px-Beast_Last_Stand.jpeg'},
      {id: 15, name: 'Phoenix', imgPath: 'https://i.ytimg.com/vi/LA9kvwoLhts/maxresdefault.jpg'},
      {id: 16, name: 'Storm'},
      {id: 17, name: 'Wolverine', imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8DMkWT1wTbacmoDMAXXZbiFSzr0WAJI7FWsCZXiFab0pzTZcSQ'},
      {id: 18, name: 'Vulcan'},
      {id: 19, name: 'Darwin'},
      {id: 20, name: 'Sway'},
    ];
     return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
