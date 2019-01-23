import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  @Input() value = 42;

  @Input() uom = '%';

  @Input() liked = false;

  @Output() likedChange = new EventEmitter<boolean>();

  public toggleLiked() {
    this.liked = !this.liked;
    this.likedChange.emit(this.liked);
  }
}
