import { Componente } from 'src/app/interface/interfaces';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  componentes!: Observable<Componente[]>;

  constructor( private platform:Platform, private DataService:DataService ) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.componentes= this.DataService.getMenuopts();
    });
  }
}
