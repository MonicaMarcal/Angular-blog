import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  implements OnInit{
  photoCover:string = "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
  contentTitle:string = "Noticia exemplo"
  contentDescription:string = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"


  constructor(){}
  ngOnInit(): void {

  }

}
