import React, { Component } from 'react'

//Error Boundaries cannot be implemented on any Handler 
//like Clickhandler but can be on everything else 
//if you want to catch an error on clickHandlers
//you need to use the regular try{} catch{} finaly{} error boundaries
class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false,
      }
    }
    
    static getDerivedStateFromError(error){
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }

    render() {
        if(this.state.hasError === true){
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
