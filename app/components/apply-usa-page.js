import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import StatesTerritories from 'propel-interview/models/states-territories';

export default class ApplyUsaPageComponent extends Component {
  @tracked shouldShowLoadingSpinner = false;
  @tracked selectedLocation = null;

  get headerText() {
    if (this.selectedLocation) {
      const stateName = StatesTerritories[this.selectedLocation];
      return `Apply for food assistance in ${stateName}`;
    } else {
      return 'Apply for food assistance anywhere in the United States.';
    }
  }

  get allStatesAndTerritories() {
    return Object.entries(StatesTerritories);
  }

  @action
  onStateSelected(value) {
    this.selectedLocation = value;
  }

  @action
  showLoadingSpinner(e) {
    e.preventDefault();
    this.shouldShowLoadingSpinner = true;
  }
}
