import React from 'react';
import { connect } from "react-redux";
import {addElement,delElement,replaceElement,changeElement} from './CounterAction';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDell = this.handleDell.bind(this);
        this.handleReplace = this.handleReplace.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.inputRut = React.createRef();
        this.inputName = React.createRef();
    }

    componentDidMount() {
        const {count} = this.state;
        document.title = `You clicked ${count} times`;
    }

    componentDidUpdate() {
        const {count} = this.state;
        document.title = `You clicked ${count} times`;
    }

    handleAdd() {
        
        const { adicionar } = this.props;
        const {count} = this.state;
        this.setState({
            count: count + 1,
        });
        adicionar({ruts:this.inputRut.current.value
                   ,name:this.inputName.current.value});
    }

    handleChange() {
        
      const { change } = this.props;
      const {count} = this.state;
      this.setState({
          count: count + 1,
      });
      change({ruts:this.inputRut.current.value
                 ,name:this.inputName.current.value});
  }

    handleReplace() {
        
        const { reemplazar } = this.props;
        const {count} = this.state;
        this.setState({
          count: count + 1,
      });
      reemplazar({ruts:this.inputRut.current.value
                 ,name:this.inputName.current.value});
    }

    handleDell() {
        
      const { eliminar } = this.props;
      const {count} = this.state;
      this.setState({
        count: count + 1,
    });
    eliminar({ruts:this.inputRut.current.value
               ,name:this.inputName.current.value});
  }

    render() {
        const {principalStore} = this.props;
        const {ruts} = principalStore;
        
        return (
          <div>
            <p>
              You clicked 
              {ruts} 
              times 
            </p>
            <input type="text" ref={this.inputRut} />
            <input type="text" ref={this.inputName}  />
            <button 
              type="button" 
              onClick={this.handleChange}
            >
                    Change only element
            </button>
            <button 
              type="button" 
              onClick={this.handleAdd}
            >
                    Add element
            </button>
            <button 
              type="button" 
              onClick={this.handleReplace}
            >
                    Replace Element
            </button>
            <button 
              type="button" 
              onClick={this.handleDell}
            >
                    Delete Element
            </button>
          </div>
        );
    }
}

/*  el state.nombreReducer , ejemplo 
const rootReducer = combineReducers({
  CounterOpc: CounterReducer,
});
state.CounterOpc
*/

const mapStateToProps = (state) => (
     {  principalStore: state.CounterOpc.elemento}
    )

const mapDispatchToProps = (dispatch) => {
    return {
        adicionar: (param) =>{ 
            dispatch(addElement('PersonaMiddleware','testElemento',param))},
        reemplazar: (param) =>{ 
                dispatch(replaceElement('PersonaMiddleware','testElemento',param))},
        eliminar: (param) =>{ 
                dispatch(delElement('PersonaMiddleware','testElemento',param))},
        change: (param) =>{ 
                dispatch(changeElement('PersonaMiddleware','testElemento',param))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
