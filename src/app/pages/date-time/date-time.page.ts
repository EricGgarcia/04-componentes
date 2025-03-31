import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone:false
})
export class DateTimePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000, 1996];
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: ( event: any ) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('log!')
        }
      },
    ]
  }

  cambioFecha( event: any ) {
    console.log( new Date( event.detail.value ) );
  }

  mostrarFecha( event: any ) {
    console.log(event);
  }
}
