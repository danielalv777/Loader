import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class LoaderComponent  implements OnInit, OnChanges {
  @Input() imagesPack: number = 1;
  @Input() intervalTime: number = 1000; // Tiempo en milisegundos entre imágenes
  currentImageIndex: number = 0;

  imageSet1 = ['assets/firstListImages/deadpool.png', 'assets/firstListImages/hulk.png', 'assets/firstListImages/ironman.png', 'assets/firstListImages/spiderman.png'];
  imageSet2 = ['assets/secondListImage/batman.png', 'assets/secondListImage/superman.png', 'assets/secondListImage/wason.png'];

  images = this.imagesPack === 1 ? this.imageSet1 : this.imageSet2;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['imagesPack']) {
      this.updateImagesArray();
    }
  }

  ngOnInit() {
    this.startImageRotation();
  }

  startImageRotation() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, this.intervalTime);
  }

  private updateImagesArray() {
    this.images = this.imagesPack === 1 ? this.imageSet1 : this.imageSet2;
  }

}
