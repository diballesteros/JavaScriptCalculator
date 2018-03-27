class App extends React.Component {
    state = {
        calculate: [],
        decimal: false
    }

    calculateHandler = (exp) => {
        let tempArr = [...this.state.calculate];
     
        if (!isNaN(exp)) {
            this.setState(prevState => ({
                calculate: [...prevState.calculate, exp]
            }));
        }
        else if (isNaN(exp) && !isNaN(tempArr[tempArr.length - 1])) {
            this.setState(prevState => ({
                calculate: [...prevState.calculate, exp],
                decimal: false
            }));
        }
    }

    evaluateHandler = (exp) => {
        let tempArr = [...this.state.calculate];

        if (exp === '=') {
            this.setState(
                {
                    calculate: [eval(tempArr.join(''))],
                    decimal: false
                }
            );
        }
    }

    clearHandler = (exp) => {
        let tempArr = [...this.state.calculate];

        if (exp === 'AC') {
            this.setState({
                calculate: [],
                decimal: false
            });
        }
        else if (exp === 'CE' && isNaN(tempArr[tempArr.length - 1])) {
            tempArr = tempArr.slice(0, -1);
            this.setState({
                calculate: [...tempArr],
                decimal: false
            });
        }
        else if (exp === 'CE' && !isNaN(tempArr[tempArr.length - 1]) && tempArr[tempArr.length - 1] !== '.' ) {
            do {
                tempArr = tempArr.slice(0, -1);
            }
            while (!isNaN(tempArr[tempArr.length - 1]));
            this.setState({
                calculate: [...tempArr],
                decimal: false
            });
        }
    }

    decimalHandler = (exp) => {
        if (this.state.decimal === false) {
            this.setState({ decimal: true });
            this.setState(prevState => ({
                calculate: [...prevState.calculate, exp]
            }));
        }
    }

    render() {

        return (
            <div>
                <Display>
                {this.state.calculate}
            </Display>
            <Button
                    clicked={() => this.clearHandler('AC')}>AC</Button>
                <Button
                    clicked={() => this.clearHandler('CE')}>CE</Button>
            <Button
                    clicked={() => this.decimalHandler('.')}>.</Button>
            <Button
                    clicked={() => this.calculateHandler('/')}>÷</Button>
               <Button
                    clicked={() => this.calculateHandler(7)}>7</Button>
                <Button
                    clicked={() => this.calculateHandler(8)}>8</Button>
                <Button
                    clicked={() => this.calculateHandler(9)}>9</Button>
             <Button
                    clicked={() => this.calculateHandler('*')}>X</Button>
            <Button
                    clicked={() => this.calculateHandler(4)}>4</Button>
            <Button
                    clicked={() => this.calculateHandler(5)}>5</Button>
               <Button
                    clicked={() => this.calculateHandler(6)}>6</Button>
             <Button
                    clicked={() => this.calculateHandler('-')}>-</Button>
                <Button
                    clicked={() => this.calculateHandler(1)}>1</Button>
                <Button
                    clicked={() => this.calculateHandler(2)}>2</Button>
                <Button
                    clicked={() => this.calculateHandler(3)}>3</Button>
                   <Button
                    clicked={() => this.calculateHandler('+')}>+</Button>
                <Button
                    clicked={() => this.calculateHandler(0)}>0</Button>            
                <Button
                    clicked={() => this.evaluateHandler('=')}>=</Button>
                
            </div>
        );
    }
}

class Display extends React.Component {
  render() {
    return(
        <div className="display">
          {this.props.children}
        </div>
    );
  }
}

class Button extends React.Component {
    render() {
        return (
         <div className="buttons">
            <button className ="onebutton"
                onClick={this.props.clicked}>{this.props.children}
            </button>
              </div>
        );
    }

};

const Aux = (props) => props.children;

ReactDOM.render(<App />, document.getElementById('root'));