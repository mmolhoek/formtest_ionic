import { Component, OnDestroy, ChangeDetectorRef} from '@angular/core';
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
  constructor(public navCtrl: NavController, private platform: Platform, private keyboard: Keyboard, private ref: ChangeDetectorRef) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.keyboardShowSubscription = this.keyboard.onKeyboardShow().subscribe(()=>{
            this.keyboardShowCounter++;
            this.ref.detectChanges();
        })
        this.keyboardHideSubscription = this.keyboard.onKeyboardHide().subscribe(()=>{
            this.keyboardHideCounter++;
            this.ref.detectChanges();
        })
      }
    })
  }
    public ngOnDestroy(): void {
        this.keyboardShowSubscription.unsubscribe();
        this.keyboardHideSubscription.unsubscribe();
    }

}
