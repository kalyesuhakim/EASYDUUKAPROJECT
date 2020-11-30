import React from "react";
import { APP_PATH } from "../config/config";
import Logo from "./logo.svg";
import GoogleSignIcon from "./btn_google_light_normal_ios.svg";

const Images = {
  Logo: (props) => <img {...props} src={Logo} />,
  GoogleSignIcon: (props) => <img {...props} src={GoogleSignIcon} />,
  campaigns: {
    sept: "/images/campagins/september-web-hack.jpg",
  },
  pageNotFound: "/images/page-not-found.png",
  pricing: {},
  landing: {
    marketing: "/images/hapipie-marketing.png",
    tech: "/images/hapipie-tech.png",
    media: "/images/hapipie-media.png",
  },
  about: {
    intro: "/images/about-us.png",
  },
  services: {
    digital_marketing: {
      seo: "/images/services/digital_marketing/hapipie-seo-service.png",
      sem: "/images/services/digital_marketing/hapipie-sem-services.png",
      email_marketing:
        "/images/services/digital_marketing/hapipie-email-marketing.png",
      content_marketing:
        "/images/services/digital_marketing/hapipie-content-marketing.png",
      social_media_marketing:
        "/images/services/digital_marketing/social_media_marketing.png",
      social_media_management:
        "/images/services/digital_marketing/hapipie-social-media-management.png",
    },

    tech_services: {
      software_development:
        "/images/services/tech_services/software-development.png",
      website_design: "/images/services/tech_services/website_design.png",
      domain_name_reg:
        "/images/services/tech_services/domain_name_registartion.png",
      website_hosting: "/images/services/tech_services/hosting_services.png",
      server_management: "/images/services/tech_services/server_management.png",
      database_admintration:
        "/images/services/tech_services/database_administration.png",
    },
  },
  pricing: {
    basic: "/images/pricing/basic.png",
    standard: "/images/pricing/standard.png",
    premium: "/images/pricing/premium.png",
    corporate: "/images/pricing/corporate.png",
  },
};

export default Images;
