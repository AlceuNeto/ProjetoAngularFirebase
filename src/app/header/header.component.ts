import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
menu = {
  logo:'https://cdn2.iconfinder.com/data/icons/css-vol-2/24/gym-256.png',
  itens: [
    {
      icone:'https://cdn4.iconfinder.com/data/icons/essential-3/32/371-Home-256.png',
      texto:'Inicío', link: '/home',
    },
    {
      icone:'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_info_outline_48px-256.png',
      texto:'Sobre',link: '/sobre',
    },
    {
      icone:'https://cdn4.iconfinder.com/data/icons/essentials-71/24/006_-_Image-256.png',
      texto:'Galeria',link: '/galeria',
    },
    {
      icone:'https://cdn0.iconfinder.com/data/icons/ecommerce-business/24/phone-256.png',
      texto:'Contato',link: '/contato',
    },
    
  ]
}
  
  constructor() { }
  ngOnInit() {}
}