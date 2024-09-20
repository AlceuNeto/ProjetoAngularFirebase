import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  sanrio=[
  {nome: 'Kuromi',
    img:'https://static.wikia.nocookie.net/hellokitty/images/8/8d/Sanrio_Characters_Kuromi_Image016.png/revision/latest?cb=20170404142717'


  },
  {nome: 'My Melody',
    img:'https://i.pinimg.com/236x/07/be/1e/07be1ee3929f8956b106fcc74cd6dbfd.jpg'


  },
  {nome: 'My Sweet Piano',
    img:'https://static.wikia.nocookie.net/hellokitty/images/2/20/Sanrio_Characters_My_Sweet_Piano_Image002.jpg/revision/latest?cb=20170327084137'


  },
  ]

  constructor() { }

  ngOnInit() {}

}
