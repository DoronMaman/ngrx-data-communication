import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Communication} from '../module/communication-module';
 
@Injectable({ providedIn: 'root' })
export class CommunicationService extends EntityCollectionServiceBase<Communication> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Communication', serviceElementsFactory);
  }
}