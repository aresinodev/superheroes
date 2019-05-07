import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imagesList = [
    {
      name: 'capa',
      images: [
        {
          name: 'Capa amarilla',
          url: 'assets/images/capa/capa_amarilla.png'
        },
        {
          name: 'Capa azul',
          url: 'assets/images/capa/capa_azul.png'
        },
        {
          name: 'Capa morada',
          url: 'assets/images/capa/capa_morada.png'
        },
        {
          name: 'Capa naranja',
          url: 'assets/images/capa/capa_naranja.png'
        },
        {
          name: 'Capa roja',
          url: 'assets/images/capa/capa_roja.png'
        },
        {
          name: 'Capa verde',
          url: 'assets/images/capa/capa_verde.png'
        }
      ]
    },
    {
      name: 'caras',
      images: [
        {
          name: 'Cara 1',
          url: 'assets/images/caras/cara_1.png'
        },
        {
          name: 'Cara 2',
          url: 'assets/images/caras/cara_2.png'
        },
        {
          name: 'Cara 3',
          url: 'assets/images/caras/cara_3.png'
        },
        {
          name: 'Cara 4',
          url: 'assets/images/caras/cara_4.png'
        },
        {
          name: 'Cara 5',
          url: 'assets/images/caras/cara_5.png'
        },
        {
          name: 'Cara 6',
          url: 'assets/images/caras/cara_6.png'
        }
      ]
    },
    {
      name: 'cuerpo',
      images: [
        {
          name: 'Cuerpo amarillo',
          url: 'assets/images/cuerpo/cuerpo_amarillo.png'
        },
        {
          name: 'Cuerpo azul',
          url: 'assets/images/cuerpo/cuerpo_azul.png'
        },
        {
          name: 'Cuerpo morado',
          url: 'assets/images/cuerpo/cuerpo_morado.png'
        },
        {
          name: 'Cuerpo naranja',
          url: 'assets/images/cuerpo/cuerpo_naranja.png'
        },
        {
          name: 'Cuerpo rojo',
          url: 'assets/images/cuerpo/cuerpo_rojo.png'
        },
        {
          name: 'Cuerpo verde',
          url: 'assets/images/cuerpo/cuerpo_verde.png'
        },
        {
          name: 'Cuerpo triángulo amarillo',
          url: 'assets/images/cuerpo/cuerpo_triangulo_amarillo.png'
        },
        {
          name: 'Cuerpo triángulo azul',
          url: 'assets/images/cuerpo/cuerpo_triangulo_azul.png'
        },
        {
          name: 'Cuerpo triángulo morado',
          url: 'assets/images/cuerpo/cuerpo_triangulo_morado.png'
        },
        {
          name: 'Cuerpo triángulo naranja',
          url: 'assets/images/cuerpo/cuerpo_triangulo_naranja.png'
        },
        {
          name: 'Cuerpo triángulo rojo',
          url: 'assets/images/cuerpo/cuerpo_triangulo_rojo.png'
        },
        {
          name: 'Cuerpo triángulo verde',
          url: 'assets/images/cuerpo/cuerpo_triangulo_verde.png'
        }
      ]
    },
    {
      name: 'piernas',
      images: [
        {
          name: 'Piernas amarillas',
          url: 'assets/images/piernas/piernas_amarillas.png'
        },
        {
          name: 'Piernas azules',
          url: 'assets/images/piernas/piernas_azules.png'
        },
        {
          name: 'Piernas moradas',
          url: 'assets/images/piernas/piernas_moradas.png'
        },
        {
          name: 'Piernas naranjas',
          url: 'assets/images/piernas/piernas_naranjas.png'
        },
        {
          name: 'Piernas rojas',
          url: 'assets/images/piernas/piernas_rojas.png'
        },
        {
          name: 'Piernas verdes',
          url: 'assets/images/piernas/piernas_verdes.png'
        }
      ]
    }
  ];

  constructor() {}

  getImagesByName(name: string): any[] {
    return this.imagesList.find((image: any) => image.name === name).images;
  }
}
