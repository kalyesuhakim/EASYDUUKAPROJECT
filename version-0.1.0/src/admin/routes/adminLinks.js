import React from 'react'
import { Apps, Money, Store } from "@material-ui/icons";
import Billing from '../modules/Billing';
import Services from '../modules/Billing/Services';
import Packages from '../modules/Billing/Packages';
import Apis from '../modules/Apis';
/**
 * Invertory Modules
 */
import Inventory from '../modules/Apis/Inventory';
import InventoryMain from '../modules/Apis/Inventory/InventoryMain';
import Products from '../modules/Apis/Inventory/Products';
import Categories from '../modules/Apis/Inventory/Categories';
import StockManager from '../modules/Apis/Inventory/StockManager';
import Orders from '../modules/Apis/Inventory/Orders';
import MyStore from '../modules/Apis/Inventory/MyStore';

const toUrl = (title) => {
  // work on the data first
  // date = date.split("-");
  // work on the title
  title = title.toLowerCase();
  title = title.split(" ");
  var output = "";
  for (var key in title) {
    if (title[key] === "") {
      output += "-";
      continue;
    }
    if (Number(key) === 0) {
      output = output + title[key];
      continue;
    }
    output = output + "-" + title[key];
  }
  return output;
};

const adminLinks = {
  forms: {
    food_out_reach: {
      path: "/forms",
    },
    projects: {
      path: "/forms/projects",
      details: "/forms/projects/details",
    },
    surveys: {
      path: "/forms/surveys",
    },
    family_surveys: {
      path: "/forms/family_surveys",
    },
  },
  dashboard: {
    path: "/",
  },
  users: {
    path: "/users",
  },
  apis: {
    path: "/apis",
    name: "Apis",
    icon: <Apps />,
    Component: Apis,
    subModules: [
      {
        name: "Inventory",
        path: "/apis/inventory",
        icon: <Store />,
        Component: Inventory,
        subModules: [
          {
            name: "Products",
            path: "/apis/inventory/products",
            icon: "",
            Component: Products,
          },
          {
            name: "Categories",
            path: "/apis/inventory/categories",
            icon: "",
            Component: Categories,
          },
          {
            name: "Orders",
            path: "/apis/inventory/orders",
            icon: "",
            Component: Orders,
          },
          {
            name: "Stock",
            path: "/apis/inventory/stock",
            icon: "",
            Component: StockManager,
          },
          {
            name: "My Store",
            path: "/apis/inventory/mystore",
            icon: "",
            Component: MyStore,
          },
        ],
      },
    ],
  },
  clients: {
    path: "/clients",
    subscribers: {
      path: "/clients/subscribers",
    },
    inactiveAccounts: {
      path: "/clients/inactive-accounts",
    },
  },
  settings: {
    path: "/settings",
  },
  store: {
    path: "/store",
  },
  home: {
    path: "/",
  },
  services: {
    path: "/services",
    media: {
      path: "/services/media-services",
    },
    tech: {
      path: "/services/tech-services",
    },
    marketing: {
      path: "/services/digital-marketing-services",
    },
  },
  about: {
    path: "/about-hapipie",
  },
  pricing: {
    path: "/pricing",
  },
  webHack: {
    path: "/september-web-hack",
  },
  auth: {
    login: {
      path: "/login",
    },
    register: {
      path: "/register",
      account_setup: {
        path: "/register/setup_account",
        verify_email: {
          path: "/register/setup_account/verify_email",
        },
        password: {
          path: "/register/setup_account/password",
        },
        profile: {
          path: "/register/setup_account/profile",
        },
      },
    },
    forgot_password: {
      path: "/forgot-password",
    },
  },
  account: {
    path: "/account",
    billing: {
      path: "/account/billing",
    },
    shipping: {
      path: "/account/shipping",
    },
    activities: {
      path: "/account/activities",
    },
    bio: {
      path: "/account/bio",
    },
  },
  products: {
    path: "/product",
  },
  billing: {
    path: "/billing",
    name: "Billing",
    icon: <Money />,
    Component: Billing,
    subModules: [
      {
        path: "/billing/services",
        name: "Services",
        icon: "",
        Component: Services,
      },
      {
        path: "/billing/packages",
        name: "Package",
        icon: "",
        Component: Packages,
      },
    ],
  },
};

export default adminLinks;
