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

    segment: string = "usuarios";
    usuario = [
        {   foto:"",
            nome: "Alceu Valença",
            idade: 21,
            genero: "AK-47",
            rotinas: [
                {
                dia: 'Segunda-Feira',
                treinos: [
                    'Supino',
                    'Rosca Direta',
                    'Mesa Flexora',
                ]
                }, {
                    dia: 'Quarta-Feira',
                    treinos: [
                        'Apoio em frente ao solo',
                        'Abdominal',
                        ' Bike',
                    ]
                    }, {dia: 'Sexta-Feira',
                        treinos: [
                            'Flexão',
                            'Tríceps Corda',
                            '  Pulley',
                        ]
                    
                    
                        
                    }
                
                
                
            ]
        },
        {   foto:"",
            nome: "Alceu Neto",
            idade: 22,
            genero: "Caça de combate",
            rotinas: [
                {
                dia: 'Sábado',
                treinos: [
                    'Supino',
                    'Rosca Direta',
                    'Mesa Flexora',
                ]
                }, {
                    dia: 'Segunda-Feira',
                    treinos: [
                        'Apoio em frente ao solo',
                        'Abdominal',
                        ' Bike',
                    ]
                    }, {dia: 'Terça-Feira',
                        treinos: [
                            'Flexão',
                            'Tríceps Corda',
                            '  Pulley',
                        ]
                    
                    
                        
                    }
                
                
                
            ]
            




        },
        {   foto:"",
            nome: "Alceu Mendes",
            idade: 23,
            genero: "Helicóptero",
            rotinas: [
                {
                dia: 'Domingo',
                treinos: [
                    'Supino',
                    'Agachamentos',
                    'Mesa Flexora',
                ]
                }, {
                    dia: 'Quarta-Feira',
                    treinos: [
                        'Apoio em frente ao solo',
                        'Abdominal',
                        ' Bike',
                    ]
                    }, {dia: 'Quinta-Feira',
                        treinos: [
                            'Flexão',
                            'Levantamento de Peso',
                            '  Pulley',
                        ]
                    
                    
                        
                    }
                
                
                
            ]




        }



    ]
  
  
  constructor(){}

  
trocar(event: any){
    this.segment  = event.detail.value;

}

}
