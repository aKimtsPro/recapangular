import { Component } from '@angular/core';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.scss']
})
export class BasesComponent {
  name : string = 'Bob';

  eventMsg : string = 'Click on the button';

  imgSource : string = 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg';
  clickMe() : void  {
    this.eventMsg = 'You clicked me 👉👈';
  }

  today : Date = new Date();

}
