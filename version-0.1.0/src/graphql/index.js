import propTypes from 'prop-types';
import mutationsPool from './mutations';
import queriesPool from './queries';

/**
 * Graph Request pool were we shall have all the 
 * Mutation, Queries and  subscriptions to the graph server 
 * 
 */

 const graphPool = {
     MUTATIONS: mutationsPool,
     QUERIES:  queriesPool,
     SUBSCRIPTIONS: {

     }
 }

 /**
  * Return a query that has to be used by a certain thread
s  */
export const getQueryViaThread = (thread) => {

 }

 getQueryViaThread.propTypes = {
   thread: propTypes.any.isRequired,
 };

 export const getMutationViaThread = (thread) => {

 }
 

 


 export default graphPool;