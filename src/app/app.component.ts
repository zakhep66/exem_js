import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'surovitskiy1212';
  isOn: boolean;
  ngOnInit(): void {
    this.isOn = false;
  }
}
