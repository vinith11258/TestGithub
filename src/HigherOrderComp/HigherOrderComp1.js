import React from 'react'

const EnhancedComponent = (WrappedComponent) => {
    class NewComponent extends React.Component
    {
        render(){
            return(
                <WrappedComponent name = 'vinith' {...this.props} />
            )
        }
    }

    return NewComponent
}

export default EnhancedComponent