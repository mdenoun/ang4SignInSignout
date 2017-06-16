import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService {

  constructor() { }

  get items() {
    return [
        {
          id: 1,
          name: 'Oded',
          pic: '01.png',
          color: '#FF5B57',
          signedIn: false,
          isHere: true
        },
        {
          id: 2,
          name: 'Marilyn',
          pic: '02.png',
          color: '#8FEF46',
          signedIn: false,
          isHere: false
        },
        {
          id: 3,
          name: 'Ran',
          pic: '03.png',
          color: '#0BD19D',
          signedIn: false,
          isHere: true
        },
        {
          id: 4,
          name: 'Marc',
          pic: '04.png',
          color: '#4FDF71',
          signedIn: false,
          isHere: false
        },
        {
          id: 5,
          name: 'Paul',
          pic: '05.png',
          color: '#40A685',
          signedIn: false,
          isHere: false
        },
        {
          id: 6,
          name: 'Berth',
          pic: '06.png',
          color: '#D60F96',
          signedIn: false,
          isHere: true
        },
        {
          id: 7,
          name: 'Bruce',
          pic: '07.png',
          color: '#FF5B57',
          signedIn: false,
          isHere: false
        },
        {
          id: 8,
          name: 'Brad',
          pic: '08.png',
          color: '#8FEF46',
          signedIn: false,
          isHere: false
        },
        {
          id: 9,
          name: 'Gad',
          pic: '09.png',
          color: '#0BD19D',
          signedIn: false,
          isHere: false
        },
        {
          id: 10,
          name: 'Johnny',
          pic: '10.png',
          color: '#4FDF71',
          signedIn: false,
          isHere: false
        },
        {
          id: 11,
          name: 'Sam',
          pic: '11.png',
          color: '#40A685',
          signedIn: false,
          isHere: false
        },
        {
          id: 12,
          name: 'Jennifer',
          pic: '12.png',
          color: '#D60F96',
          signedIn: false,
          isHere: false
        }/*,
        {
          id: 13,
          name: 'Oded',
          pic: '13.png',
          color: '#FF5B57',
          signedIn: false
        },
        {
          id: 14,
          name: 'Bill',
          pic: '14.png',
          color: '#8FEF46',
          signedIn: false
        }*/
      ]
  }
}
