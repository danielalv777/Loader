import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, LoaderComponent]
})
export class HomePage implements OnInit {
  isLoading = false;
  imageHeader = 'assets/iconsApp/house.svg';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  async simulateApiCall() {
    this.isLoading = true;
    await new Promise((resolve) => {
      setTimeout(resolve, 4000);
    })

    this.isLoading = false;
    this.navCtrl.navigateForward('/heroes');
  }

}
