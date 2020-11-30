import { loader } from "graphql.macro";
import { CUSTOMER_LOGIN_THREAD, CUSTOMER_SIGN_UP_THREAD } from "../threads";

/**
 * GraphQl Mutations
 */

const CUSTOMER_SIGN_UP_MUTATION = loader("./customerSignUp.graphql");

const mutationsPool = {
  [CUSTOMER_SIGN_UP_THREAD]: CUSTOMER_SIGN_UP_MUTATION,
};

export default mutationsPool;
