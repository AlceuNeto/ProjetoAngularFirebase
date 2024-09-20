import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.scss'],
})
export class TreinosComponent  implements OnInit {

treinos = [
    {
      nome: "Braço",
      img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZClStnbayQaISh8bXcOHZ5zaaHQGA1xwgA&s",'https://image.tuasaude.com/media/article/zj/xc/treino-de-braco_63228_l.jpg']
    },
    {
      nome: "Pernas",
      img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hqRyyYLgPZLkTv-P0Zr0lclZQ0TdZk1XsQ&s",'https://s2-ge.glbimg.com/8rK9GAa3WJFIcAVRiA3J_QG9d8w=/0x0:1326x791/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/7/V/hmGkGBTJSgTIqR6cmpjw/treino-de-perna-na-academia.jpg']

    },
    {
      nome: "Costas",
      img: ["https://image.tuasaude.com/media/article/iw/dc/treino-costas_57728_l.jpg",'https://static.thcdn.com/images/v2/wp-content/uploads/sites/461/2016/07/24224437/clean-and-jerk-20s-workout-07102011-3.jpg?width=700']
    },
    {
      nome: "Peito",
      img: ["https://vitat.com.br/wp-content/uploads/2021/11/calm-athletic-lady-performing-th-1-1024x683.jpg",'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/exercicios-para-bracos-e-peitoral.jpg']  
    },
  ];

  constructor() { }

  ngOnInit() {}

}
