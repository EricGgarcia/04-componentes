import { Componente } from 'src/app/interface/interfaces';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone:false
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(private menuController: MenuController, private dataService: DataService) { }

  ngOnInit() {
   this.componentes= this.dataService.getMenuopts();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}

