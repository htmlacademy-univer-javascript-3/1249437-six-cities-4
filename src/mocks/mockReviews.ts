import { Review } from '../types/review';


export const REVIEWS_FOR_OFFERS: {offerId: string; reviews: Review[]}[] = [
  {
    offerId: '1',
    reviews: [
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-08T14:13:56.569Z',
        user: {
          name: 'Max Johnson',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false
        },
        comment: 'Beautiful place with fantastic scenery, would visit again!',
        rating: 4
      },
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-09T14:13:56.569Z',
        user: {
          name: 'Emily Stone',
          avatarUrl: 'img/avatar-angelina.jpg',
          isPro: true
        },
        comment: 'Great location but a bit noisy at night.',
        rating: 1
      }
    ]
  },
  {
    offerId: '2',
    reviews: [
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-08T14:13:56.569Z',
        user: {
          name: 'Michael Bay',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false
        },
        comment: 'Exceptional hospitality and stunning views!',
        rating: 5
      }
    ]
  },
  {
    offerId: '3',
    reviews: [
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-08T14:13:56.569Z',
        user: {
          name: 'Sophia Loren',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false
        },
        comment: 'Lovely place but overpriced for what you get.',
        rating: 1
      },
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-09T12:13:56.569Z',
        user: {
          name: 'Olivia Smith',
          avatarUrl: 'img/avatar-angelina.jpg',
          isPro: false
        },
        comment: 'Not as expected, but decent for a short stay.',
        rating: 1
      }
    ]
  },
  {
    offerId: '4',
    reviews: [
      {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-08T14:13:56.569Z',
        user: {
          name: 'Chris Rock',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: true
        },
        comment: 'Good experience overall, would recommend!',
        rating: 4
      }
    ]
  },
  {
    offerId: '5',
    reviews: [
    ]
  }
];
