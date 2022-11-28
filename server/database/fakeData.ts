import {
  Product, User, Category, Favorite,
} from '../interfaces/fakeDataTypes';

const data: { products: Product[], users: User[], categories: Category[], favorites: Favorite[] } = {
  products: [
    {
      title: 'nice sofa',
      description: 'sofa for four people',
      gallery: [
        'https://apollo-singapore.akamaized.net/v1/files/sh0il57qfjfh3-IN/image;s=780x0;q=60 ',
        'https://apollo-singapore.akamaized.net/v1/files/zjt3gsd2oobm2-IN/image;s=780x0;q=60',
      ],
      is_available: true,
      type: 'donation',
      user_id: 2,
      category_id: 2,
    },
    {
      title: 'something',
      description: 'something for something',
      gallery: [
        'https://apollo-singapore.akamaized.net/v1/files/hccwzehg6d8u-IN/image;s=1080x1080 ',
      ],
      is_available: true,
      type: 'donation',
      user_id: 2,
      category_id: 2,
    },
    {
      title: 'White Charger',
      description: 'Apple series 7 charging lead',
      gallery: [
        'https://apollo-singapore.akamaized.net/v1/files/i6c5sdoqjous2-IN/image;s=780x0;q=60',
      ],
      is_available: true,
      type: 'exchange',
      user_id: 1,
      category_id: 5,
    },
    {
      title: 'Aerpods',
      description: 'Aerpods pro good condition',
      gallery: [
        'https://apollo-singapore.akamaized.net/v1/files/dziq01lffmmf3-IN/image;s=780x0;q=60',
      ],
      is_available: true,
      type: 'exchange',
      user_id: 1,
      category_id: 5,
    },
    {
      title: 'Earbuds',
      description: 'Used, perfectly working.Earbuds and charging case.Enjoy uninterrupted, crystal-clear music on the go with the Jabra Elite Active 65t True Wireless EarPods with Mic. With up to 5 hours of battery life from a single charge, and up to 15 hours in total with the pocket-friendly charging case ',
      gallery: [
        'https://apollo-singapore.akamaized.net/v1/files/t5h1o07v3ziq2-IN/image;s=780x0;q=60',
        'https://apollo-singapore.akamaized.net/v1/files/uc39iu95kda51-IN/image;s=780x0;q=60',
        'https://apollo-singapore.akamaized.net/v1/files/8sol0kdbo0xz1-IN/image;s=780x0;q=60',
      ],
      is_available: true,
      type: 'donation',
      user_id: 2,
      category_id: 5,
    },
    {
      title: 'Emanuel Ungaro',
      description: 'Scarf/Shawl Silk in Pink',
      gallery: [
        'https://cdn.rebelle.com//86/8649678_e246ef6fa2d1af3d1e05d046263e29df.jpg?width=514&height=510',
        'https://cdn.rebelle.com//86/8649678_58cb3e40d41a9275e6bdb51a69c6f7ed.jpg?width=514&height=510',
      ],
      is_available: true,
      type: 'exchange',
      user_id: 1,
      category_id: 4,
    },
    {
      title: 'Jacques Durand',
      description: 'Sunglasses in Black',
      gallery: [
        'https://cdn.rebelle.com//86/8649492_abd39855c1ac015cf78666200ee770f1.jpeg?width=514&height=510',
        'https://cdn.rebelle.com//86/8649492_7dbf8f148e0aa18b72c6f77298512ef8.jpeg?width=514&height=510',
      ],
      is_available: true,
      type: 'exchange',
      user_id: 3,
      category_id: 4,
    },
    {
      title: 'Louis Vuitton Jacques Durand Sunglasses Black Sunglasses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
      gallery: [
        'https://cdn.rebelle.com//cd/cdac49d320221014-9-j8pnpt.JPG?width=514&height=510',
        'https://cdn.rebelle.com//86/8651792_daa1c738578a502c5b235a1171193928.JPG?width=514&height=510',
      ],
      is_available: true,
      type: 'donation',
      user_id: 5,
      category_id: 4,
    },
    {
      title: 'The Late Show',
      description: 'Detective Renee Ballard works The Late Show, the notorious graveyard shift at the LAPD.',
      gallery: ['https://user-images.githubusercontent.com/54447254/196033782-e3306fc1-0cb3-4286-a99f-de45f2487fab.png'],
      is_available: true,
      type: 'donation',
      user_id: 1,
      category_id: 3,
    },
    {
      title: 'Six Years',
      description: 'A lost love... and the secrets and lies at its heart. The stunning novel from No.1 bestseller Harlan Coben.',
      gallery: ['https://user-images.githubusercontent.com/54447254/196033923-61d5faf3-da09-4d69-865f-65fee3a5f091.png'],
      is_available: true,
      type: 'exchange',
      user_id: 2,
      category_id: 3,
    },
    {
      description: 'Three Little Lies',
      title: 'Three Little Lies : A completely gripping thriller with a killer twist',
      gallery: ['https://user-images.githubusercontent.com/54447254/196033930-76a731c9-0f14-406d-9442-72ff38c69102.png'],
      is_available: true,
      type: 'exchange',
      user_id: 3,
      category_id: 3,
    },
    {
      title: 'The Secret Garden',
      description: 'The Secret Garden by Frances Hodgson Burnett is a magical novel for adults and children alike',
      gallery: ['https://user-images.githubusercontent.com/54447254/196033952-66d4b6b3-64d4-462a-9703-f8aae1facbf0.png'],
      is_available: true,
      type: 'donation',
      user_id: 2,
      category_id: 3,
    },
    {
      title: 'Jacket',
      description: 'A jacket for sale on a coat hanger',
      gallery: [
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80 ',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 1,
      category_id: 1,
    },
    {
      title: 'Jeans',
      description: 'collection of jeans',
      gallery: [
        'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 3,
      category_id: 1,
    },
    {
      title: 'Shirts',
      description: 'Shirts and Jacket hanging on rail.',
      gallery: [
        'https://images.unsplash.com/photo-1561365452-adb940139ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80',
        'https://images.unsplash.com/photo-1561365452-adb940139ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 4,
      category_id: 1,
    },
    {
      title: 'Shirts',
      description: 'Shirts fit for winnter and cold weather',
      gallery: [
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80',
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 6,
      category_id: 1,
    },
    {
      title: 'Wardrobe',
      description: 'Jacket, T-shirt, jeans.',
      gallery: [
        'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 7,
      category_id: 1,
    },
    {
      title: 'Jacket',
      description: 'Jacket.',
      gallery: [
        'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 7,
      category_id: 1,
    },
    {
      title: 'collection',
      description: 'Shirt, jeans and Shoes.',
      gallery: [
        'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 4,
      category_id: 1,
    },
    {
      title: 'desktop',
      description: 'table can use for saving your stuff.',
      gallery: [
        'https://images.unsplash.com/photo-1647481082125-1df6bfa3214d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 2,
      category_id: 2,
    },
    {
      title: 'fan',
      description: 'fan.',
      gallery: [
        'https://images.unsplash.com/photo-1565151443833-29bf2ba5dd8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 5,
      category_id: 2,
    },
    {
      title: 'chair',
      description: 'chair.',
      gallery: [
        'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 2,
      category_id: 2,
    },
    {
      title: 'light',
      description: 'light.',
      gallery: [
        'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 4,
      category_id: 2,
    },
    {
      title: 'kanap',
      description: 'kanap.',
      gallery: [
        'https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=406&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 3,
      category_id: 2,
    },
    {
      title: 'chair',
      description: 'chair.',
      gallery: [
        'https://images.unsplash.com/photo-1611464908623-07f19927264e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      ],
      is_available: true,
      type: 'donation',
      user_id: 3,
      category_id: 2,
    },
  ],
  users: [
    {
      first_name: 'John',
      last_name: 'Smith',
      email: 'John@gmail.com',
      hashedPassword: '$2b$10$TGS3zZF8YDhB6vH0SniF6eBwAm906T49WijFXHekE6FspVEpvv842', // password@1234 rounds:10
      image: 'https://randomuser.me/api/portraits/lego/8.jpg',
      bio: 'hello from the hell',
    },
    {
      first_name: 'Jennie',
      last_name: 'Nichols',
      email: 'Jennie@gmail.com',
      hashedPassword: '$2b$10$TGS3zZF8YDhB6vH0SniF6eBwAm906T49WijFXHekE6FspVEpvv842', // password@1234 rounds:10
      image: 'https://randomuser.me/api/portraits/lego/7.jpg',
      bio: 'hello from the hell',
    },
    {
      first_name: 'Maxim',
      last_name: 'Lindhjem',
      email: 'Maxim@gmail.com',
      hashedPassword: '$2b$10$TGS3zZF8YDhB6vH0SniF6eBwAm906T49WijFXHekE6FspVEpvv842', // password@1234 rounds:10
      image: 'https://randomuser.me/api/portraits/lego/6.jpg',
      bio: 'hello from the hell',
    },
    {
      first_name: 'Baljiwan',
      last_name: 'Gugale',
      email: 'Baljiwan@gmail.com',
      hashedPassword: '$2b$10$TGS3zZF8YDhB6vH0SniF6eBwAm906T49WijFXHekE6FspVEpvv842', // password@1234 rounds:10
      image: 'https://randomuser.me/api/portraits/lego/5.jpg',
      bio: 'hello from the hell',
    },
    {
      first_name: 'Laurete',
      last_name: 'da Cunha',
      email: 'Laurete@gmail.com',
      hashedPassword: '$2b$10$TGS3zZF8YDhB6vH0SniF6eBwAm906T49WijFXHekE6FspVEpvv842', // password@1234 rounds:10
      image: 'https://randomuser.me/api/portraits/lego/4.jpg',
      bio: 'hello from the hell',
    },
    {
      first_name: 'Muhammad',
      last_name: 'Abdulhadi',
      email: 'mu7ammadabed@gmail.com',
      hashedPassword: '$2b$10$3R57AUhHQ0igkKU4e5n9..U8qwDJtvGX.9jo6.ayTecQtHHRjBlTu',
      image: 'https://randomuser.me/api/portraits/lego/4.jpg',
      bio: 'hello from the other side',
    },
    {
      first_name: 'Hakim',
      last_name: 'Yusuf',
      email: 'hk1@hotmail.com',
      hashedPassword: '$2b$10$fLAiXEvNH3ePZHcYeggnWe.pqactUp5xBD7NSQog27NbvsB6MF1Y6',
      image: 'https://randomuser.me/api/portraits/lego/4.jpg',
      bio: 'hello from the other side',
    },
  ],
  categories: [
    {
      name: 'Clothes',
      image: 'https://www.popsci.com/uploads/2022/03/02/aviv-rachmadian-7F7kEHj72MQ-unsplash-scaled.jpg?auto=webp',
    },
    {
      name: 'Furniture',
      image: 'https://www.worldmarket.com/images/inspiration/shop-by-room/2021/home-office/inspired-workspace/article_mobile_600x492.jpg',
    },
    {
      name: 'Books',
      image: 'https://images.indianexpress.com/2022/04/books_1200_pexels.jpg',
    },
    {
      name: 'Accessories',
      image: 'https://www.stitchfix.com/women/blog/wp-content/uploads/SummerAccessories_SQ.jpg',
    },
    {
      name: 'Electronics',
      image: 'https://www.easy2digital.com/wp-content/uploads/2021/08/design-278978978989-Max-Quality-1024x576.jpg',
    },
    {
      name: 'others',
      image: 'https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651',
    },
  ],
  favorites: [{
    user_id: 1,
    product_id: 1,
  },
  {
    user_id: 2,
    product_id: 2,
  },
  {
    user_id: 3,
    product_id: 3,
  },
  {
    user_id: 4,
    product_id: 4,
  },
    // {
    //   user_id: 1,
    //   product_id: 3,
    // },
  ],
};

export default data;
