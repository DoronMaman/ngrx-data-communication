import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CommunicationService } from '../Service/communication.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {
  loading$: Observable<boolean>;
  communication$: Observable<any[]>;
 
  constructor(private communicationService: CommunicationService) {
    this.communication$ = communicationService.entities$;
    this.loading$ = communicationService.loading$;
  }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  add() {
    const communication={
      id:1,
      name:"communiocation one"
    }
    
    this.communicationService.add(communication);
  }
 
  // delete(hero: any) {
  //   this.heroService.delete(hero.id);
  // }
 
  getHeroes() {
    this.communicationService.getAll();
  }
 
  // update(hero: any) {
  //   this.heroService.update(hero);
  // }

}
