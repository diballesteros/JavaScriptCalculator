class App extends React.Component {
    state = {
        calculate: []
    }

    calculateHandler = (exp) => {
     let tempArr = [...this.state.calculate];
      
      if(exp === '='){
        this.setState(
          {calculate: [eval(tempArr.join(''))]}
          );
      }
      else if(!isNaN(exp)){
        this.setState(prevState => ({
            calculate: [...prevState.calculate, exp]
        }));
      }
      else if(isNaN(exp) && !isNaN(tempArr[tempArr.length -1]) ){
        this.setState(prevState => ({
            calculate: [...prevState.calculate, exp]
        }));
      } 
    }

    clearHandler = (exp) => {
        if(exp === 'AC'){
            this.setState({calculate: []});
        }
    }

    render() {

        return (
            <div>
                {this.state.calculate}
                <Button
                clicked={() => this.calculateHandler(1)}>1</Button>
                <Button
                clicked={() => this.calculateHandler(2)}>2</Button>
                <Button
                clicked={() => this.calculateHandler(3)}>3</Button>
                <Button
                clicked={() => this.calculateHandler(4)}>4</Button>
                <Button
                clicked={() => this.calculateHandler(5)}>5</Button>
                <Button
                clicked={() => this.calculateHandler(6)}>6</Button>
                 <Button
                clicked={() => this.calculateHandler(7)}>7</Button>
                 <Button
                clicked={() => this.calculateHandler(8)}>8</Button>
                 <Button
                clicked={() => this.calculateHandler(9)}>9</Button>
                 <Button
                clicked={() => this.calculateHandler(0)}>0</Button>
                  <Button
                clicked={() => this.calculateHandler('+')}>+</Button>
                <Button
                clicked={() => this.calculateHandler('-')}>-</Button>
                <Button
                clicked={() => this.calculateHandler('/')}>/</Button>
                <Button
                clicked={() => this.calculateHandler('*')}>X</Button>
                <Button
                clicked={() => this.calculateHandler('.')}>.</Button>
                <Button
                clicked={() => this.calculateHandler('=')}>=</Button>
                   <Button
                clicked={() => this.clearHandler('AC')}>AC</Button>
            </div>
        );
    }
}

class Layout extends React.Component {

}

class Display extends React.Component {

}

class Button extends React.Component {
  render() {
    return(
<button
        onClick={this.props.clicked}>{this.props.children}</button>
);
  }
    
};


const Aux = (props) => props.children;

ReactDOM.render(<App />, document.getElementById('root'));