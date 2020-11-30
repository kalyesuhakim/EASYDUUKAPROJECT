
/**
 * if there is a graph input in a query or mutation this 
 * function will be use to push the data into the store
 */
export default function graphInput(props){

    const {thread, type} = props;

    return {
        onChange: e => {},
        value: "",
    }

}

