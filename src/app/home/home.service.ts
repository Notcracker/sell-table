import { Injectable } from '@angular/core';



@Injectable()
export class HomeService {
  getData() {
    return [
      {
        picUrl: 'https://ae01.alicdn.com/kf/HTB1wfczJVXXXXaAXpXXq6xXFXXXK/2-%D0%A8%D1%82-%D0%98%D0%A1%D0%9A%D0%A3%D0%A1%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%90%D0%AF-%D0%BA%D0%BE%D0%B6%D0%B0-%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C-%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%A8%D0%B5%D0%B8-%D0%90%D0%B2%D1%82%D0%BE-Seat-%D0%9F%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%93%D0%BB%D0%B0%D0%B2%D0%B0-%D0%A8%D0%B5%D1%8F-%D0%9E%D1%82%D0%B4%D1%8B%D1%85-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0.jpg_50x50.jpg',
        name: {
          name: 'EXPERTO Вибро подголовник-антистресс из хлопка, сине-бордовый, 30х30х12 см',
          content: 'спандекс+плюш',
          weight: '0,25',
          size: '30х30х12'
        },
        vendor_code: {
          vendor_code: 'UIYHFIFT',
          barcode: '76565767',
        },
        sell_points: [ 'Все точки', 'ТРЦ', 'Петроградка', 'Резерв', 'Прайс-лист' ],
        prices: [ '1300', '1300', '1300', '1300', '1300'],
        leftovers: ['10', '2', '3', '5', '1234']

      },
      {
        picUrl: 'https://ae01.alicdn.com/kf/HTB1wfczJVXXXXaAXpXXq6xXFXXXK/2-%D0%A8%D1%82-%D0%98%D0%A1%D0%9A%D0%A3%D0%A1%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%90%D0%AF-%D0%BA%D0%BE%D0%B6%D0%B0-%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C-%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%A8%D0%B5%D0%B8-%D0%90%D0%B2%D1%82%D0%BE-Seat-%D0%9F%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%93%D0%BB%D0%B0%D0%B2%D0%B0-%D0%A8%D0%B5%D1%8F-%D0%9E%D1%82%D0%B4%D1%8B%D1%85-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0.jpg_50x50.jpg',
        name: {
          name: 'EXPERTO Вибро подголовник-антистресс из хлопка, сине-бордовый, 30х30х12 см',
          content: 'спандекс+плюш',
          weight: '0,25',
          size: '30х30х12'
        },
        vendor_code: {
          vendor_code: 'UIYHFIFT',
          barcode: '76565767',
        },
        sell_points: [ 'Все точки', 'ТРЦ', 'Петроградка', 'Резерв', 'Прайс-лист' ],
        prices: [ '1300', '1300', '1300', '1300', '1300'],
        leftovers: ['10', '2', '3', '5', '1234']
      },
      {
        picUrl: 'https://ae01.alicdn.com/kf/HTB1wfczJVXXXXaAXpXXq6xXFXXXK/2-%D0%A8%D1%82-%D0%98%D0%A1%D0%9A%D0%A3%D0%A1%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%90%D0%AF-%D0%BA%D0%BE%D0%B6%D0%B0-%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C-%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%A8%D0%B5%D0%B8-%D0%90%D0%B2%D1%82%D0%BE-Seat-%D0%9F%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%93%D0%BB%D0%B0%D0%B2%D0%B0-%D0%A8%D0%B5%D1%8F-%D0%9E%D1%82%D0%B4%D1%8B%D1%85-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0.jpg_50x50.jpg',
        name: {
          name: 'EXPERTO Вибро подголовник-антистресс из хлопка, сине-бордовый, 30х30х12 см',
          content: 'спандекс+плюш',
          weight: '0,25',
          size: '30х30х12'
        },
        vendor_code: {
          vendor_code: 'UIYHFIFT',
          barcode: '76565767',
        },
        sell_points: [ 'Все точки', 'ТРЦ', 'Петроградка', 'Резерв', 'Прайс-лист' ],
        prices: [ '1300', '1300', '1300', '1300', '1300'],
        leftovers: ['10', '2', '3', '5', '1234']
      },
      {
        picUrl: 'https://ae01.alicdn.com/kf/HTB1wfczJVXXXXaAXpXXq6xXFXXXK/2-%D0%A8%D1%82-%D0%98%D0%A1%D0%9A%D0%A3%D0%A1%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%90%D0%AF-%D0%BA%D0%BE%D0%B6%D0%B0-%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C-%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%A8%D0%B5%D0%B8-%D0%90%D0%B2%D1%82%D0%BE-Seat-%D0%9F%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%93%D0%BB%D0%B0%D0%B2%D0%B0-%D0%A8%D0%B5%D1%8F-%D0%9E%D1%82%D0%B4%D1%8B%D1%85-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0.jpg_50x50.jpg',
        name: {
          name: 'EXPERTO Вибро подголовник-антистресс из хлопка, сине-бордовый, 30х30х12 см',
          content: 'спандекс+плюш',
          weight: '0,25',
          size: '30х30х12'
        },
        vendor_code: {
          vendor_code: 'UIYHFIFT',
          barcode: '76565767',
        },
        sell_points: [ 'Все точки', 'ТРЦ', 'Петроградка', 'Резерв', 'Прайс-лист' ],
        prices: [ '1300', '1300', '1300', '1300', '1300'],
        leftovers: ['10', '2', '3', '5', '1234']
      },
      {
        picUrl: 'https://ae01.alicdn.com/kf/HTB1wfczJVXXXXaAXpXXq6xXFXXXK/2-%D0%A8%D1%82-%D0%98%D0%A1%D0%9A%D0%A3%D0%A1%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%90%D0%AF-%D0%BA%D0%BE%D0%B6%D0%B0-%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C-%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%A8%D0%B5%D0%B8-%D0%90%D0%B2%D1%82%D0%BE-Seat-%D0%9F%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%93%D0%BB%D0%B0%D0%B2%D0%B0-%D0%A8%D0%B5%D1%8F-%D0%9E%D1%82%D0%B4%D1%8B%D1%85-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0.jpg_50x50.jpg',
        name: {
          name: 'EXPERTO Вибро подголовник-антистресс из хлопка, сине-бордовый, 30х30х12 см',
          content: 'спандекс+плюш',
          weight: '0,25',
          size: '30х30х12'
        },
        vendor_code: {
          vendor_code: 'UIYHFIFT',
          barcode: '76565767',
        },
        sell_points: [ 'Все точки', 'ТРЦ', 'Петроградка', 'Резерв', 'Прайс-лист' ],
        prices: [ '1300', '1300', '1300', '1300', '1300'],
        leftovers: ['10', '2', '3', '5', '1234']
      },
      {
        picUrl: 'https://ae01.alicdn.com/kf/HTB1wfczJVXXXXaAXpXXq6xXFXXXK/2-%D0%A8%D1%82-%D0%98%D0%A1%D0%9A%D0%A3%D0%A1%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%90%D0%AF-%D0%BA%D0%BE%D0%B6%D0%B0-%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C-%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%A8%D0%B5%D0%B8-%D0%90%D0%B2%D1%82%D0%BE-Seat-%D0%9F%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%93%D0%BB%D0%B0%D0%B2%D0%B0-%D0%A8%D0%B5%D1%8F-%D0%9E%D1%82%D0%B4%D1%8B%D1%85-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0.jpg_50x50.jpg',
        name: {
          name: 'EXPERTO Вибро подголовник-антистресс из хлопка, сине-бордовый, 30х30х12 см',
          content: 'спандекс+плюш',
          weight: '0,25',
          size: '30х30х12'
        },
        vendor_code: {
          vendor_code: 'UIYHFIFT',
          barcode: '76565767',
        },
        sell_points: [ 'Все точки', 'ТРЦ', 'Петроградка', 'Резерв', 'Прайс-лист' ],
        prices: [ '1300', '1300', '1300', '1300', '1300'],
        leftovers: ['10', '2', '3', '5', '1234']
      },
      {
        picUrl: 'https://ae01.alicdn.com/kf/HTB1wfczJVXXXXaAXpXXq6xXFXXXK/2-%D0%A8%D1%82-%D0%98%D0%A1%D0%9A%D0%A3%D0%A1%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%90%D0%AF-%D0%BA%D0%BE%D0%B6%D0%B0-%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C-%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%A8%D0%B5%D0%B8-%D0%90%D0%B2%D1%82%D0%BE-Seat-%D0%9F%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%93%D0%BB%D0%B0%D0%B2%D0%B0-%D0%A8%D0%B5%D1%8F-%D0%9E%D1%82%D0%B4%D1%8B%D1%85-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0.jpg_50x50.jpg',
        name: {
          name: 'EXPERTO Вибро подголовник-антистресс из хлопка, сине-бордовый, 30х30х12 см',
          content: 'спандекс+плюш',
          weight: '0,25',
          size: '30х30х12'
        },
        vendor_code: {
          vendor_code: 'UIYHFIFT',
          barcode: '76565767',
        },
        sell_points: [ 'Все точки', 'ТРЦ', 'Петроградка', 'Резерв', 'Прайс-лист' ],
        prices: [ '1300', '1300', '1300', '1300', '1300'],
        leftovers: ['10', '2', '3', '5', '1234']
      },
      {
        picUrl: 'https://ae01.alicdn.com/kf/HTB1wfczJVXXXXaAXpXXq6xXFXXXK/2-%D0%A8%D1%82-%D0%98%D0%A1%D0%9A%D0%A3%D0%A1%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%90%D0%AF-%D0%BA%D0%BE%D0%B6%D0%B0-%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C-%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%A8%D0%B5%D0%B8-%D0%90%D0%B2%D1%82%D0%BE-Seat-%D0%9F%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D1%8C-%D0%93%D0%BB%D0%B0%D0%B2%D0%B0-%D0%A8%D0%B5%D1%8F-%D0%9E%D1%82%D0%B4%D1%8B%D1%85-%D0%9F%D0%BE%D0%B4%D1%83%D1%88%D0%BA%D0%B0.jpg_50x50.jpg',
        name: {
          name: 'EXPERTO Вибро подголовник-антистресс из хлопка, сине-бордовый, 30х30х12 см',
          content: 'спандекс+плюш',
          weight: '0,25',
          size: '30х30х12'
        },
        vendor_code: {
          vendor_code: 'UIYHFIFT',
          barcode: '76565767',
        },
        sell_points: [ 'Все точки', 'ТРЦ', 'Петроградка', 'Резерв', 'Прайс-лист' ],
        prices: [ '1300', '1300', '1300', '1300', '1300'],
        leftovers: ['10', '2', '3', '5', '1234']
      }
    ];
  }
}
