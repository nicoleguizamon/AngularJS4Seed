import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../interfaces/user-info';
import { BuildingInfo } from '../../interfaces/building-info';
import { News } from '../../interfaces/news';
import { UserdataService } from '../../services/userdata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
buildingInfo:BuildingInfo;
userInfo:UserInfo;

  constructor(private userdataService: UserdataService) {
    this.buildingInfo = {
        name: 'Edificio ',
        imagePath: 'assets/images/slider1.jpg',
        news: [{
            title: '',
            description: 'Se realizara un corte de luz desde las 9pm a 10pm en dia 3 de septiembre de 2017',
            type:'Urgent'
        },{
            title: 'Gasista',
            description: 'Se contara con la presencia del gasista a partir de las 13hs.',
            type:'Information'
        },{
            title: 'Expensas',
            description: 'El pago de expensas se realiza en el NUEVO horario de 18hs a 21hs',
            type:'Information'
        }]
    };
  }

  ngOnInit() {
    this.userdataService.getBuildingNews().subscribe((post)=> {
      this.buildingInfo = {
          name: post.name,
          imagePath:post.imagePath,
          news: post.news
      }
    });
  }

}
