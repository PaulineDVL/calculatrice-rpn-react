import React, {Component} from 'react';

class Pile extends Component {

  constructor(props) {
    super(props);
    let data = [];

    this.state = {
      data: [],
      number:'',
      content:'',
      pile: [],
    }
  }


  handleChange = (event) => {
    event.preventDefault();
    let number = event.target.value;

    if (number == '11') {
      number = this.state.data*-1;
      console.log(typeof number);
    }

    this.setState((prevState) => ({
      data:number
    }))
  }

  handleClick = (event) => {
    event.preventDefault();

    let number = event.target.value;

    if (number == '10') {
      number = '.';
    }

    if (number == '11') {
      number = this.state.data*-1;
    }
    console.log(number);

    this.setState((prevState) => ({
      data: [...prevState.data, number]

    }));


    // au click on ajoute notre valeur au tableau
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // On récupères nos chiffres de data pour les joindre et les transformer en number
    let pile = this.state.data.join('');

    pile = Number(pile);

    // On vide data
    this.setState((prevState) => ({
      data: []
    }));

    // On ajoute notre nombre à la pile
    this.setState((prevState) => ({
      pile: [...prevState.pile, pile]

    }));
    console.log(this.state.pile);
    // au click on ajoute notre valeur au tableau
  }

  // Addition
  handleAdd = (event) => {
    let pile = this.state.pile;

    var new_last_el = pile.pop() + pile.pop();
    this.setState((prevState) => ({
      pile: [...prevState.pile, new_last_el]

    }));
  }

  // Soustraction
  handleRem = (event) => {
    let pile = this.state.pile;

    var last_el = pile.pop()
    var b_last_el =  pile.pop()

    var new_last_el = b_last_el - last_el;
    this.setState((prevState) => ({
      pile: [...prevState.pile, new_last_el]

    }));
  }
  // Multi
  handleMult = (event) => {
    let pile = this.state.pile;

    var new_last_el = pile.pop() * pile.pop();
    this.setState((prevState) => ({
      pile: [...prevState.pile, new_last_el]

    }));
  }

  // Div
  handleDiv = (event) => {
    let pile = this.state.pile;

    var last_el = pile.pop()
    var b_last_el =  pile.pop()

    var new_last_el = b_last_el / last_el;
    this.setState((prevState) => ({
      pile: [...prevState.pile, new_last_el]

    }));
  }


  render() {

    return (
      <div>
        <div id={'cadre'} >

          <ul>
            {this.state.pile.map(function(el, index){
              return <li key={ index }>{el}</li>;
              })}
            </ul>
            <br/>

            <span id="en-cours">
              {this.state.data}
            </span>

          </div>
          <ul id="bouton">

            <li value="7" onClick={this.handleClick} >7</li>
            <li value="8" onClick={this.handleClick} >8</li>
            <li value="9" onClick={this.handleClick} >9</li>
            <li value="4" onClick={this.handleClick} >4</li>
            <li value="5" onClick={this.handleClick} >5</li>
            <li value="6" onClick={this.handleClick} >6</li>
            <li value="1" onClick={this.handleClick} >1</li>
            <li value="2" onClick={this.handleClick} >2</li>
            <li value="3" onClick={this.handleClick} >3</li>

            <li value="10" onClick={this.handleClick} >.</li>
            <li value="0" onClick={this.handleClick} >0</li>
            <li value="11" onClick={this.handleChange} >±</li>

          </ul>
          <ul id="bouton2">
            <li value="add" onClick={this.handleAdd} >+</li>
            <li value="rem" onClick={this.handleRem} >-</li>
            <li value="mult" onClick={this.handleMult} >*</li>
            <li value="div" onClick={this.handleDiv} >÷</li>

          </ul>
          <span id="entrer" onClick={this.handleSubmit}> Entrer </span>
        </div>
      )
    }

  }

  export default Pile;
