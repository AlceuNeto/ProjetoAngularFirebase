import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements OnInit {

  menu = {
    imagem: [
      'https://www.blog.nadarte.com/wp-content/uploads/2020/09/post_thumbnail-7aa5da8f19c9a0b0b0998194811ca5aa-1160x770.jpeg'
    ]}

  constructor() { }

  ngOnInit() {}

}
