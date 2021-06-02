import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService{

  constructor() {}

  selectedCity:string = ""
  selectedTown:string  ="";
  selectedDistrict:string ="";


  setErr = false;
  disabledCont:boolean = false;

  services: any[] = [
    {
      "serviceId": 399,
      "name": "Ferforje",
      "price": {
        "max": 1000,
        "min": 100,
        "currency": "TL"
      },
      "discountRateText": "Bu hizmet Şubat ayında %17 indirimli!"
    },
    {
      "serviceId": 262,
      "name": "Cam Balkon",
      "price": {
        "max": 3300,
        "min": 250,
        "currency": "TL"
      },
      "discountRateText": ""
    }
  ]

  camBalkon = [
    {
      "id": 118,
      "typeId": 4,
      "serviceId": 262,
      "label": "Cam ile kapatılacak alan kaç metrekare?",
      "order": 0,
      "required": true,
      "unit": "m2",
      "pageNumber": 0,
      "values": [
        {
          "id": 2264,
          "value": "2",
          "valueOrder": 0
        },
        {
          "id": 2265,
          "value": "3",
          "valueOrder": 1
        },
        {
          "id": 2266,
          "value": "4",
          "valueOrder": 2
        },
        {
          "id": 2267,
          "value": "5",
          "valueOrder": 3
        },
        {
          "id": 2268,
          "value": "6",
          "valueOrder": 4
        },
        {
          "id": 2269,
          "value": "8",
          "valueOrder": 5
        },
        {
          "id": 2270,
          "value": "10",
          "valueOrder": 6
        },
        {
          "id": 2271,
          "value": "12",
          "valueOrder": 7
        },
        {
          "id": 2272,
          "value": "15",
          "valueOrder": 8
        },
        {
          "id": 2273,
          "value": "20",
          "valueOrder": 9
        },
        {
          "id": 2274,
          "value": "25",
          "valueOrder": 10
        },
        {
          "id": 2275,
          "value": "30",
          "valueOrder": 11
        },
        {
          "id": 2276,
          "value": "40",
          "valueOrder": 12
        },
        {
          "id": 2277,
          "value": "50",
          "valueOrder": 13
        },
        {
          "id": 2278,
          "value": "80",
          "valueOrder": 14
        },
        {
          "id": 2279,
          "value": "100+",
          "valueOrder": 15
        }
      ],
      "placeHolder": null,
      "description": null
    },
    {
      "id": 190,
      "typeId": 4,
      "serviceId": 262,
      "label": "Cam yüksekliği kaç metre olacak?",
      "required": true,
      "unit": "m",
      "order": 1,
      "pageNumber": 0,
      "values": [
        {
          "id": 2283,
          "value": "1.00",
          "valueOrder": 0
        },
        {
          "id": 2284,
          "value": "1.50",
          "valueOrder": 1
        },
        {
          "id": 2285,
          "value": "1.80",
          "valueOrder": 2
        },
        {
          "id": 2286,
          "value": "2.00",
          "valueOrder": 3
        },
        {
          "id": 2287,
          "value": "2.20",
          "valueOrder": 4
        },
        {
          "id": 2288,
          "value": "2.50",
          "valueOrder": 5
        },
        {
          "id": 2289,
          "value": "3.00",
          "valueOrder": 6
        },
        {
          "id": 2290,
          "value": "4.00",
          "valueOrder": 8
        }
      ],
      "placeHolder": null,
      "description": null
    },
    {
      "id": 1279,
      "typeId": 6,
      "serviceId": 262,
      "label": "Balkon şekli nasıl? Kaç cephe kapatılacak?",
      "required": true,
      "unit": null,
      "pageNumber": 1,
      "values": [
        {
          "id": 8174,
          "value": "Gömme balkon (1 cephe)",
          "valueOrder": 0
        },
        {
          "id": 8171,
          "value": "L balkon (2 cephe)",
          "valueOrder": 1
        },
        {
          "id": 8172,
          "value": "U balkon (3 cephe)",
          "valueOrder": 2
        },
        {
          "id": 8173,
          "value": "Yay balkon (yuvarlak)",
          "valueOrder": 3
        }
      ],
      "placeHolder": null,
      "description": null
    },
    {
      "id": 1280,
      "typeId": 6,
      "serviceId": 262,
      "label": "Cam nasıl açılsın?",
      "order": 3,
      "required": true,
      "unit": null,
      "pageNumber": 2,
      "values": [
        {
          "id": 8175,
          "value": "Sürgülü",
          "valueOrder": 0
        },
        {
          "id": 8176,
          "value": "Katlanır",
          "valueOrder": 1
        },
        {
          "id": 8177,
          "value": "Sabit ve pencereli",
          "valueOrder": 2
        },
        {
          "id": 8188,
          "value": "Diğer",
          "valueOrder": 3
        }
      ],
      "placeHolder": null,
      "description": null
    },
    {
      "id": 1281,
      "typeId": 13,
      "serviceId": 262,
      "label": "Fotoğraf eklemek ister misin?",
      "required": false,
      "unit": null,
      "pageNumber": 3,
      "placeHolder": null,
      "description": null
    },
    {
      "id": 1282,
      "typeId": 8,
      "serviceId": 262,
      "label": "İhtiyacın detayları neler?",
      "required": true,
      "minLength": 10,
      "unit": null,
      "pageNumber": 4,
      "values": null,
      "placeHolder": "Aklına gelen başka önemli bir detay var mı?",
      "description": null
    },
    {
      "id": 1283,
      "typeId": 9,
      "serviceId": 262,
      "label": "Nerede? (hizmetin yapılacağı yer)",
      "order": 9000003,
      "required": true,
      "unit": null,
      "pageNumber": 5,
      "values": null,
      "placeHolder": null,
      "description": null
    },
    {
      "id": 1284,
      "typeId": 11,
      "serviceId": 262,
      "label": "Ne zaman?",
      "required": true,
      "unit": null,
      "pageNumber": 6,
      "values": [
        {
          "id": 4,
          "value": "Belli bir zaman (üç hafta içinde)",
          "valueOrder": 0
        },
        {
          "id": 1,
          "value": "İki ay içinde",
          "valueOrder": 1
        },
        {
          "id": 2,
          "value": "Altı ay içinde",
          "valueOrder": 2
        },
        {
          "id": 3,
          "value": "Sadece fiyat bakıyorum",
          "valueOrder": 3
        }
      ],
      "placeHolder": null,
      "description": null
    }
  ]

  ferforje = [
    {
      "id": 446,
      "typeId": 5,
      "serviceId": 399,
      "label": "Nereye yapılacak?",
      "required": false,
      "pageNumber": 0,
      "values": [
        {
          "id": 2061,
          "value": "Pencere",
          "valueOrder": 0,
          "valueImageUrl": "https://cdn.armut.com//images/serviceoptions/f2e2d3c6-86d2-4307-a31c-537bef55c990.png"
        },
        {
          "id": 2062,
          "value": "Balkon kapısı",
          "valueOrder": 1,
          "valueImageUrl": "https://cdn.armut.com//images/serviceoptions/f2e2d3c6-86d2-4307-a31c-537bef55c990.png"
        },
        {
          "id": 2063,
          "value": "Balkon korkuluğu",
          "valueOrder": 2,
          "valueImageUrl": "https://cdn.armut.com//images/serviceoptions/624d295e-ce02-4ea0-9228-4140f5ca8110.png"
        },
        {
          "id": 2064,
          "value": "Bina dış kapısı",
          "valueOrder": 3,
          "valueImageUrl": "https://cdn.armut.com//images/serviceoptions/d388664e-003f-4b4b-a77f-12ce97cfdd36.png"
        },
        {
          "id": 2065,
          "value": "Merdiven korkuluğu",
          "valueOrder": 4,
          "valueImageUrl": "https://cdn.armut.com//images/serviceoptions/0a6a454c-57cb-49af-a54e-36a28e90b342.png"
        },
        {
          "id": 2066,
          "value": "Bahçe kapısı",
          "valueOrder": 5,
          "valueImageUrl": "https://cdn.armut.com//images/serviceoptions/1f1beb2f-0760-4650-af9a-aa3f1200c8f2.png"
        },
        {
          "id": 2067,
          "value": "Bahçe korkuluğu",
          "valueOrder": 6,
          "valueImageUrl": "https://cdn.armut.com//images/serviceoptions/8cdde4b1-9553-499f-ac7b-140b6955d9ae.png"
        },
        {
          "id": 2068,
          "value": "Diğer",
          "valueOrder": 7,
          "valueImageUrl": "https://cdn.armut.com//images/serviceoptions/66bc68bd-947c-4940-a56a-c53ad1a62c95.png"
        }
      ],
      "placeHolder": null,
      "description": null
    },
    {
      "id": 447,
      "typeId": 4,
      "serviceId": 399,
      "label": "Kaç adet (parça)?",
      "order": 2,
      "required": true,
      "unit": "adet",
      "pageNumber": 1,
      "values": [
        {
          "id": 2069,
          "value": "1",
          "valueOrder": 0
        },
        {
          "id": 2070,
          "value": "2",
          "valueOrder": 1
        },
        {
          "id": 2071,
          "value": "3",
          "valueOrder": 2
        },
        {
          "id": 2072,
          "value": "4",
          "valueOrder": 3
        },
        {
          "id": 2073,
          "value": "5+",
          "valueOrder": 4
        }
      ],
      "placeHolder": null,
      "description": null
    },
    {
      "id": 451,
      "typeId": 4,
      "serviceId": 399,
      "label": "Toplam uzunluğu kaç metre olacak?",
      "order": 1,
      "required": true,
      "unit": "metre",
      "pageNumber": 1,
      "values": [
        {
          "id": 5225,
          "value": "1",
          "valueOrder": 0
        },
        {
          "id": 5226,
          "value": "2",
          "valueOrder": 1
        },
        {
          "id": 5227,
          "value": "3",
          "valueOrder": 2
        },
        {
          "id": 5228,
          "value": "4",
          "valueOrder": 3
        },
        {
          "id": 5229,
          "value": "5",
          "valueOrder": 4
        },
        {
          "id": 5230,
          "value": "6",
          "valueOrder": 5
        },
        {
          "id": 5231,
          "value": "7",
          "valueOrder": 6
        },
        {
          "id": 5232,
          "value": "8",
          "valueOrder": 7
        },
        {
          "id": 5233,
          "value": "9",
          "valueOrder": 8
        },
        {
          "id": 5234,
          "value": "10",
          "valueOrder": 9
        },
        {
          "id": 5235,
          "value": "12",
          "valueOrder": 10
        },
        {
          "id": 5236,
          "value": "14",
          "valueOrder": 11
        },
        {
          "id": 5237,
          "value": "15",
          "valueOrder": 12
        },
        {
          "id": 5238,
          "value": "20",
          "valueOrder": 13
        },
        {
          "id": 5239,
          "value": "25",
          "valueOrder": 14
        },
        {
          "id": 5240,
          "value": "50+",
          "valueOrder": 15
        }
      ],
      "placeHolder": null,
      "description": null
    },
    {
      "id": 453,
      "typeId": 6,
      "serviceId": 399,
      "label": "Sökülmesi gereken eski demir var mı?",
      "required": true,
      "unit": null,
      "pageNumber": 2,
      "values": [
        {
          "id": 2076,
          "value": "Evet, sökülmesi gerekiyor",
          "valueOrder": 0
        },
        {
          "id": 2077,
          "value": "Hayır",
          "valueOrder": 1
        }
      ],
      "placeHolder": null,
      "description": null
    },
    {
      "id": 8000000,
      "typeId": 13,
      "serviceId": 399,
      "label": "Fotoğraf eklemek ister misin?",
      "order": 4,
      "required": false,
      "unit": null,
      "pageNumber": 3,
      "placeHolder": null,
      "description": null
    },
    {
      "id": 9000000,
      "typeId": 8,
      "serviceId": 399,
      "label": "İhtiyacın detayları neler?",
      "order": 5,
      "required": false,
      "unit": null,
      "pageNumber": 4,
      "values": null,
      "placeHolder": "Aklına gelen başka önemli bir detay var mı?",
      "description": null
    },
    {
      "id": 9000002,
      "typeId": 9,
      "serviceId": 399,
      "label": "Nerede? (hizmetin yapılacağı yer)",
      "required": true,
      "unit": null,
      "pageNumber": 5,
      "values": null,
      "placeHolder": null,
      "description": null
    },
    {
      "id": 9000004,
      "typeId": 11,
      "serviceId": 399,
      "label": "Ne zaman?",
      "required": true,
      "unit": null,
      "pageNumber": 6,
      "values": [
        {
          "id": 4,
          "value": "Belli bir zaman (üç hafta içinde)",
          "valueOrder": 0
        },
        {
          "id": 1,
          "value": "İki ay içinde",
          "valueOrder": 1
        },
        {
          "id": 2,
          "value": "Altı ay içinde",
          "valueOrder": 2
        },
        {
          "id": 3,
          "value": "Sadece fiyat bakıyorum",
          "valueOrder": 3
        }
      ],
      "placeHolder": null,
      "description": null
    }
  ]
}
