import logo1 from '../img/award.svg';
import logo2 from '../img/badge-ar.svg';
import logo3 from '../img/search.svg';
import logoExit from "../img/box-arrow-right.svg";


export const MenuMock =  {
    'menu': {
      'items': [
        {
            type: 'Icon',
            value: logo1,
            action: '/',
        },
        {
            type: 'Icon',
            value: logo2,
            action: '/pag-1',
        },
        {
            type: 'Icon',
            value: logo3,
            action: '/pag-2',
        },
        
    ],
      'last': {
        type: 'Icon',
        value: logoExit,
        action: '/'
      }
    }
  }


export const items = {
    accountData: [
    {
      name: 'linea de Celular',
      value: '88882229399322'
    },
    {
      name: 'Correo Electronico',
      value: 'andresprommel22@gmail.com'
    },
    {
      name: 'Informacion Personal',
      value: true,
      itemType: 'verify'
    },
    {
      name: 'Foto de Documento',
      value: true,
      itemType: 'verify'
    }
  ],
  personalInformation: [
    {
      name: 'Selfie Picture',
      value: null,
      itemType: 'verify'
    },
    {
      name: 'Pin',
      value: '1159',
      itemType: 'pin'
    },
    {
      name: 'Documento Picture',
      value: false,
      itemType: 'verify'
    },
    {
      name: 'Normas',
      value: true,
      itemType: 'accept'
    },
    {
      name: 'Terminos',
      value: true,
      itemType: 'accept'
    }
  ],
  billingData: [
    {
      name: 'Alias',
      value: 'claro.pay.new'
    },
    {
      name: 'CBU',
      value: '115933345680533793'
    }
  ]};