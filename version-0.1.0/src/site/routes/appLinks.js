const appLinks = {
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
  about2: {
    path: "/about",
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
};

export default appLinks;
