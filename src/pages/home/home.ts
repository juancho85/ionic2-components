import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onClick() {
    console.log("clicked!");
  }

  onElementClicked() {
    console.log('element clicked or touched');
  }

  onElementTapped() {
    console.log('I was tapped');
  }

  onElementPressed() {
    console.log('I was pressed')
  }

}
