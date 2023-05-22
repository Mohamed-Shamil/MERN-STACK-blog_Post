import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true, error };
    }
  
    componentDidCatch(error, info) {
      console.log(error, info);
       // eslint-disable-next-line no-undef
       logComponentStackToMyService(info.componentStack);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      // eslint-disable-next-line react/prop-types
      return this.props.children;
    }
  }

  export default ErrorBoundary




  