import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            screenVal : 0,
        };
    }

    updateScreen(num){
        this.setState({
            screenVal: Number.parseInt(this.state.screenVal+num)
        })
    }

    minus(){
        this.setState({
            prevScreenVal : this.state.screenVal,
            screenVal: 0,
            operator: "-",
        })
    }

    plus(){
        this.setState({
            prevScreenVal : this.state.screenVal,
            screenVal: 0,
            operator: "+",
        })
    }

    multiply(){
        this.setState({
            prevScreenVal : this.state.screenVal,
            screenVal: 0,
            operator: "*",
        })
    }

    divide(){
        this.setState({
            prevScreenVal : this.state.screenVal,
            screenVal: 0,
            operator: "/",
        })
    }

    equalTo(){

        let temp = 0

        switch(this.state.operator){
            case "-":
                    temp = this.state.prevScreenVal - this.state.screenVal;
                    break;
            case "+":
                temp = this.state.prevScreenVal + this.state.screenVal;
                    break;
            case "*":
                temp = this.state.prevScreenVal * this.state.screenVal;
                    break;
            case "/":
                temp = this.state.prevScreenVal / this.state.screenVal;
                    break;
        }

        this.setState({
            screenVal: temp,
        })
    }



        render (){
            return (
                
                <div className="calculator">
                    <h1 className="screen">{this.state.screenVal}</h1>
                    <div className="clearArea">
                        <button className="bigButton" onClick={() => this.setState({screenVal: 0})}>Clear</button>
                        <button className="op bop" onClick={() => this.divide()}>/</button>
                    </div>
                    <div>
                        <button onClick={() => this.updateScreen("7")}>7</button>
                        <button onClick={() => this.updateScreen("8")}>8</button>
                        <button onClick={() => this.updateScreen("9")}>9</button>
                        <button className="op" onClick={() => this.minus()}>-</button>
                    </div>
                    <div>
                        <button onClick={() => this.updateScreen("4")}>4</button>
                        <button onClick={() => this.updateScreen("5")}>5</button>
                        <button onClick={() => this.updateScreen("6")}>6</button>
                        <button className="op" onClick={() => this.plus()}>+</button>
                    </div>
                    <div>
                        <button onClick={() => this.updateScreen("1")}>1</button>
                        <button onClick={() => this.updateScreen("2")}>2</button>
                        <button onClick={() => this.updateScreen("3")}>3</button>
                        <button className="op" onClick={() => this.multiply()}>*</button>
                        
                    </div>
                    <div>
                        <button className="bigButton" onClick={() => this.updateScreen("0")}>0</button>
                        
                        <button className="op bop" onClick={() => this.equalTo()}>=</button>
                    </div>
                </div>
            );
        }
}

export default Calculator;
