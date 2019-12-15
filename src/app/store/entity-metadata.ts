import { EntityMetadataMap } from '@ngrx/data';
 
const entityMetadata: EntityMetadataMap = {
  Communication: {},
  Templates: {}
};
 
// because the plural of "hero" is not "heros"
const pluralNames = { Communication: 'communication' };
 
export const entityConfig = {
  entityMetadata,
  pluralNames
};