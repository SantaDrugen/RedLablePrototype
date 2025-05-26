export interface Shop {
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    openingHours: string;      // e.g. "08:00–20:00"
  }
  
  export interface Deal {
    id: string;
    gpcCategory: string;       // GS1 GPC code
    productName: string;
    brand: string;
    currentPrice: number;      // in DKK
    originalPrice: number;     // in DKK
    unitPrice: number;         // DKK per unit (e.g. DKK/kg or DKK/L)
    discountPercentage: number;
    shop: Shop;
    expiryDate: string;        // ISO date, e.g. "2025-05-28"
    bestBefore?: string;       // or useBy?
    useBy?: string;            // optional, if different from expiryDate
    thumbnailUrl: string;
    quantityAvailable: number;
  }
  
  export const MOCK_SHOPS: Shop[] = [
    {
      id: 'shop1',
      name: 'Netto Farum',
      address: 'Stavnsholtvej 200, 3520 Farum',
      lat: 55.7891,
      lng: 12.3652,
      openingHours: '07:00–22:00'
    },
    {
      id: 'shop2',
      name: 'Føtex Lyngby',
      address: 'Slotsherrensvej 11, 2800 Kongens Lyngby',
      lat: 55.7701,
      lng: 12.5236,
      openingHours: '08:00–21:00'
    },
    {
      id: 'shop3',
      name: 'Bilka Taastrup',
      address: 'Høgevej 12, 2630 Taastrup',
      lat: 55.6573,
      lng: 12.3001,
      openingHours: '08:00–20:00'
    }
  ];
  
  export const MOCK_DEALS: Deal[] = [
    {
      id: 'deal1',
      gpcCategory: '10000123', // fx. Brød og bagværk
      productName: 'Økologisk Rugbrød',
      brand: 'Lantmännen',
      currentPrice: 12.50,
      originalPrice: 25.00,
      unitPrice: 25.00,       // DKK/kg (500 g pakke)
      discountPercentage: 50,
      shop: MOCK_SHOPS[0],
      expiryDate: '2025-05-27',
      bestBefore: '2025-05-27',
      thumbnailUrl: 'assets/images/rugbrod.jpg',
      quantityAvailable: 8
    },
    {
      id: 'deal2',
      gpcCategory: '10000456', // fx. Mejeriprodukter
      productName: 'Letmælk 1,5%',
      brand: 'Arla',
      currentPrice: 5.00,
      originalPrice: 10.00,
      unitPrice: 10.00,       // DKK/L
      discountPercentage: 50,
      shop: MOCK_SHOPS[1],
      expiryDate: '2025-05-28',
      bestBefore: '2025-05-28',
      thumbnailUrl: 'assets/images/letmaelk.jpg',
      quantityAvailable: 20
    },
    {
      id: 'deal3',
      gpcCategory: '10000567', // fx. Ost
      productName: 'Mild Havarti',
      brand: 'Ågård',
      currentPrice: 15.00,
      originalPrice: 30.00,
      unitPrice: 150.00,      // DKK/kg (100 g skivepakke)
      discountPercentage: 50,
      shop: MOCK_SHOPS[2],
      expiryDate: '2025-05-29',
      useBy: '2025-05-29',
      thumbnailUrl: 'assets/images/havarti.jpg',
      quantityAvailable: 5
    },

    {
        id: 'deal4',
        gpcCategory: '10000678',
        productName: 'Granny Smith Apples 1kg',
        brand: 'Eden',
        currentPrice: 12.00,
        originalPrice: 24.00,
        unitPrice: 12.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[0],
        expiryDate: '2025-05-27',
        thumbnailUrl: 'assets/images/apples.jpg',
        quantityAvailable: 15
      },
      {
        id: 'deal5',
        gpcCategory: '10000678',
        productName: 'Bananas 1kg',
        brand: 'Chiquita',
        currentPrice: 10.00,
        originalPrice: 20.00,
        unitPrice: 10.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[1],
        expiryDate: '2025-05-28',
        thumbnailUrl: 'assets/images/bananas.jpg',
        quantityAvailable: 30
      },
      {
        id: 'deal6',
        gpcCategory: '10000678',
        productName: 'Cherry Tomatoes 250g',
        brand: 'TomatoPro',
        currentPrice: 8.00,
        originalPrice: 16.00,
        unitPrice: 32.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[2],
        expiryDate: '2025-05-27',
        thumbnailUrl: 'assets/images/cherry_tomatoes.jpg',
        quantityAvailable: 20
      },
      {
        id: 'deal7',
        gpcCategory: '10000789',
        productName: 'Chicken Breast 500g',
        brand: 'Danpo',
        currentPrice: 25.00,
        originalPrice: 50.00,
        unitPrice: 50.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[0],
        expiryDate: '2025-05-28',
        thumbnailUrl: 'assets/images/chicken_breast.jpg',
        quantityAvailable: 12
      },
      {
        id: 'deal8',
        gpcCategory: '10000789',
        productName: 'Pork Loin 1kg',
        brand: 'Svinekød',
        currentPrice: 40.00,
        originalPrice: 80.00,
        unitPrice: 80.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[1],
        expiryDate: '2025-05-29',
        thumbnailUrl: 'assets/images/pork_loin.jpg',
        quantityAvailable: 10
      },
      {
        id: 'deal9',
        gpcCategory: '10000789',
        productName: 'Beef Mince 400g',
        brand: 'OK Food',
        currentPrice: 30.00,
        originalPrice: 60.00,
        unitPrice: 75.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[2],
        expiryDate: '2025-05-30',
        thumbnailUrl: 'assets/images/beef_mince.jpg',
        quantityAvailable: 8
      },
      {
        id: 'deal10',
        gpcCategory: '10000890',
        productName: 'Salmon Fillet 300g',
        brand: 'Lerøy',
        currentPrice: 45.00,
        originalPrice: 90.00,
        unitPrice: 150.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[0],
        expiryDate: '2025-05-29',
        thumbnailUrl: 'assets/images/salmon_fillet.jpg',
        quantityAvailable: 6
      },
      {
        id: 'deal11',
        gpcCategory: '10000890',
        productName: 'Shrimps 200g',
        brand: 'Arctic',
        currentPrice: 30.00,
        originalPrice: 60.00,
        unitPrice: 150.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[1],
        expiryDate: '2025-05-30',
        thumbnailUrl: 'assets/images/shrimps.jpg',
        quantityAvailable: 14
      },
      {
        id: 'deal12',
        gpcCategory: '10000890',
        productName: 'Cod Fillet 250g',
        brand: 'Fangst',
        currentPrice: 35.00,
        originalPrice: 70.00,
        unitPrice: 140.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[2],
        expiryDate: '2025-05-31',
        thumbnailUrl: 'assets/images/cod_fillet.jpg',
        quantityAvailable: 9
      },
      {
        id: 'deal13',
        gpcCategory: '10000901',
        productName: 'Orange Juice 1L',
        brand: 'Brämhults',
        currentPrice: 15.00,
        originalPrice: 30.00,
        unitPrice: 30.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[0],
        expiryDate: '2025-06-01',
        thumbnailUrl: 'assets/images/orange_juice.jpg',
        quantityAvailable: 20
      },
      {
        id: 'deal14',
        gpcCategory: '10000901',
        productName: 'Coca-Cola 1.5L',
        brand: 'Coca-Cola',
        currentPrice: 12.00,
        originalPrice: 24.00,
        unitPrice: 16.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[1],
        expiryDate: '2025-06-02',
        thumbnailUrl: 'assets/images/coca_cola.jpg',
        quantityAvailable: 25
      },
      {
        id: 'deal15',
        gpcCategory: '10000901',
        productName: 'Coffee Beans 500g',
        brand: 'Gevalia',
        currentPrice: 35.00,
        originalPrice: 70.00,
        unitPrice: 70.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[2],
        expiryDate: '2025-06-02',
        thumbnailUrl: 'assets/images/coffee_beans.jpg',
        quantityAvailable: 18
      },
      {
        id: 'deal16',
        gpcCategory: '10000456',
        productName: 'Skyr 500g',
        brand: 'Arla',
        currentPrice: 10.00,
        originalPrice: 20.00,
        unitPrice: 40.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[0],
        expiryDate: '2025-05-29',
        thumbnailUrl: 'assets/images/skyr.jpg',
        quantityAvailable: 22
      },
      {
        id: 'deal17',
        gpcCategory: '10000456',
        productName: 'Greek Yogurt 400g',
        brand: 'Thise',
        currentPrice: 15.00,
        originalPrice: 30.00,
        unitPrice: 75.00,
        discountPercentage: 50,
        shop: MOCK_SHOPS[2],
        expiryDate: '2025-05-28',
        thumbnailUrl: 'assets/images/greek_yogurt.jpg',
        quantityAvailable: 16
      },
      {
        id: 'deal18',
        gpcCategory: '10000567',
        productName: 'Blue Cheese 150g',
        brand: 'Danablu',
        currentPrice: 20.00,
        originalPrice: 40.00,
        unitPrice: 266.67,
        discountPercentage: 50,
        shop: MOCK_SHOPS[1],
        expiryDate: '2025-05-29',
        thumbnailUrl: 'assets/images/blue_cheese.jpg',
        quantityAvailable: 10
      }
  ];