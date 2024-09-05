import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-detalhes',
  templateUrl: './ver-detalhes.page.html',
  styleUrls: ['./ver-detalhes.page.scss'],
})
export class VerDetalhesPage {

paises:any;

  constructor(
    
  ) { 
    console.log(history.state.codigo)
    this.getPaisDetalhes();
  }

  getPaisDetalhes(){
    fetch(`https://restcountries.com/v3.1/alpha/${history.state.codigo}`)
    .then(dados => dados.json ())
    .then(dados => {
      console.log(dados);
      this.paises = dados;
    })
    .catch(_ => {
      console.log(_);
    })
    .finally(()=> {
      console.log('conseguimos caraio')
    })


    
  }

  verDetalhes(bor:any){
    fetch(`https://restcountries.com/v3.1/alpha/${bor}`)
    .then(dados => dados.json ())
    .then(dados => {
      console.log(dados);
      this.paises = dados;
    })
    .catch(_ => {
      console.log(_);
    })
    .finally(()=> {
      console.log('conseguimos caraio')
    })

  }

  
}

