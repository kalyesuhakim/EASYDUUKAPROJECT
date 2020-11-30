/**
 * The category Listing will have the following body.
 * It will be an array list of categories such that we can make
 * it simple to add and remove
 * -------------------------------------------------------------------
 */


const CategoryListing = [
  {
    main: "Real Estate",
    index: "id-fo-cat",
    subThreads: [
      {
        main: "Housing",
        index: "id-for-sub-cat",
        subThreads: [],
      },
    ],
  },
  {
    main: "Construction",
    index: "id-fo-cat",
    subThreads: [
      {
        main: "Housing",
        index: "id-for-sub-cat",
        subThreads: [],
      },
    ],
  },
];


/**
 * Response Object Iam expecting for the products 
 * Please let  me know if it suits what you need,
 * Let me know what you propose to be the structure of the data. 
 * But hope most of the content will be cached for faster loading 
 *  
 */
const ProductDetails = {
  prod: "Hema Cement",
  catIndex: "prod-cat-id", // category id for the product.
  index: "id-for-product",
  description: "Product description",
  caption: {
    mainPreview: "product-img-url",
    others: [
      "/url-to-preview-two",
      "/url-to-preview-three",
      "/url-to-preview-four",
    ],
  },
  details: [
    {
      title: "Pricing",
      value: 209,
      prefix: "none",
      suffix: "none",
    },
  ],
};

/**
 * The response for the products
 */
const productListing = [
  {
    group: "Recent Products",
    index: "identifier-for-recent-products-group",
    products: [
      {
        prod: "Hema Cement",
        catIndex: "prod-cat-id", // category id for the product.
        index: "id-for-product",
        price: "UGX 50,000",
        caption: "/url-to-product-image-caption"
      },
    ],
  },
  {
    group: "Real Estate",
    index: "identifier-for-recent-products-group",
    products: [
      {
        prod: "Bukoto Houses",
        catIndex: "prod-cat-id", // category id for the product.
        index: "id-for-product",
        price: "UGX 50,000",
        caption: "url-to-product-caption"
      },
    ],
  },
];
