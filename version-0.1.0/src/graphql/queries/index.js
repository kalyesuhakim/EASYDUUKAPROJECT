/**
 * All the Graph Queries will be registered here
 */

import { loader } from "graphql.macro";
import {
  GET_ALL_CLIENTS_THREAD,
  GET_ALL_CATEGORIES_THREAD,
  GET_CATEGORY_THREAD,
  GET_HOME_THREAD,
  GET_PRODUCT_DETAILS_THREAD,
  GET_PRODUCTS_BY_CATEGORY_THREAD,
  CUSTOMER_LOGIN_THREAD
} from "../threads";

export const GET_ALL_CLIENTS_QUERY = loader("./clients.gql");
export const GET_ALL_CATEGORIES_QUERY = loader("./getAllCategories.gql");
export const GET_CATEGORY_QUERY = loader("./getCategory.gql");
export const GET_HOME_RESOURCES_QUERY = loader('./getHomeResources.gql');
export const GET_PRODUCT_DETAILS_QUERY = loader('./getProductDetails.gql')
export const GET_PRODUCT_BY_CATEGORY_QUERY = loader("./getProductsByCategory.gql");
export const CUSTOMER_LOGIN_QUERY = loader("./customerLogin.graphql");
const queriesPool = {
  [GET_ALL_CLIENTS_THREAD]: GET_ALL_CLIENTS_QUERY,
  [GET_ALL_CATEGORIES_THREAD]: GET_ALL_CATEGORIES_QUERY,
  [GET_CATEGORY_THREAD]: GET_CATEGORY_QUERY,
  [GET_HOME_THREAD]: GET_HOME_RESOURCES_QUERY,
  [GET_PRODUCT_DETAILS_THREAD]: GET_PRODUCT_DETAILS_QUERY,
  [GET_PRODUCTS_BY_CATEGORY_THREAD]: GET_PRODUCT_BY_CATEGORY_QUERY,
  [CUSTOMER_LOGIN_THREAD]: CUSTOMER_LOGIN_QUERY,
};

export default queriesPool;
