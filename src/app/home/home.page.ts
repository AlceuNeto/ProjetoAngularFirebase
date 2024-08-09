import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pessoa = {
    foto: `https://i.pinimg.com/474x/ce/f2/ae/cef2aeabb3aff19605a2a952b276ac81.jpg`,
     nome:`Alceu Mendes de Brito Neto`,
     objetivo: `Músico e Programador`,
     contato:{
      Email:'alceupiano@gmail.com',
      Telefone:'15-4002-8922',
      github:"github.com/piano",
      linkedin:'Linkedin.com/pianoalceu',
      
      
     },
     softskills: [
      'Comunicação','Proatividade','Trabalho em Equipe', 'Inovação','rei da putaria'
  
    ],
    formacao:[
      {
        ano_inicio: '2023',
        ano_fim: '2025',
        instituicao:"ETEC Sales Gomes",
        curso: 'Desenvolvimento de Sistemas'
      },
      {
        ano_inicio: '2025',
        ano_fim: '2028',
        instituicao:"Faculdade de Tecnologia de Tatuí - FATEC",
        curso: 'Ánalise e Desenvolvimento de Sistemas'
      }
      

    ],
    projetos:[
      {
        ano:2023,
        instituicao:'ETEC SALES GOMES',
        epa:'Projeto ETEC Portas abertas',
        sobre: 'abualbualbluablabluebluealubealubaelubea'
      },
      {
        ano:2024,
        instituicao:'ETEC SALES GOMES',
        epa:'Projeto ETEC Portas abertas',
        sobre: 'abualbualbluablabluebluealubealubaelubea'
      }
    ]
     
    

  }
  

   
  };


  

