import { Component, OnDestroy } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Subscription } from 'rxjs';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy {
  public keyboardShowCounter: number = 0;
  public keyboardHideCounter: number = 0;
  private keyboardShowSubscription: Subscription;
  private keyboardHideSubscription: Subscription;
  constructor(public navCtrl: NavController, private platform: Platform, private keyboard: Keyboard) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.keyboardShowSubscription = this.keyboard.onKeyboardShow().subscribe(()=>{
            setTimeout(() => { this.keyboardShowCounter++; }, 0);
        })
        this.keyboardHideSubscription = this.keyboard.onKeyboardHide().subscribe(()=>{
            setTimeout(() => { this.keyboardHideCounter++; }, 0);
        })
      }
    })
  }
    public ngOnDestroy(): void {
        this.keyboardShowSubscription.unsubscribe();
        this.keyboardHideSubscription.unsubscribe();
    }

}
