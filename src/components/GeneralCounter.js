import React from 'react';

//Updates an existing component and enhance it
//For example -> const IronMan = withSuit(TonyStark);
//Here we are using incrementNumber which will come from a different component
const generalCounter = (WrappedComponent, incrementNumber) => {
    class GeneralCounter extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0 ,
            }
        }
        
        incrementCount = () => {
            this.setState( (prevState) => {
                return { count: prevState.count + incrementNumber }
            });
        }
        
        render(){
            return <WrappedComponent 
                        count={this.state.count} 
                        incrementCount={this.incrementCount} 
                        {...this.props/*Remember to pass the props also*/} 
                    />
        }
    }
    return GeneralCounter;
}

export default generalCounter;

 