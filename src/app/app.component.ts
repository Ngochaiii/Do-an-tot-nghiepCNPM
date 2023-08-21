import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Graduation_project';
  public hidenChangeSidebar = true
  public hidenChange() {
    this.hidenChangeSidebar = !this.hidenChangeSidebar
  }
}
