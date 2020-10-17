import React, { useReducer } from 'react';
import {UserContext } from '../providers/UserProvider';


const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}


function withUser(Component) {
    const WrappedComponent = props => {
        return (
            <UserContext.Consumer>
                {user => <Component user = {user} {...props} />}
            </UserContext.Consumer>
        )
    }

    WrappedComponent.displayName = `WithUser(${getDisplayName(WrappedComponent)})`
     return WrappedComponent;
  }
export default withUser;