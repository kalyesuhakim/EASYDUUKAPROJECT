/**
 * The graphql sevrvice which is used to serve the entire appliation graph 
 * Once the graph service has been used there will need to interact with our redux store
 * This will be the best middleware to interact with the store
 */

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    ...state, 
    ownProps,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    ownProps,
    dispatch,
});

export const graphService = connect(mapStateToProps, mapDispatchToProps);

