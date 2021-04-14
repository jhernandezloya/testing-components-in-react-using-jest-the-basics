import React from 'react';
import { connect } from "react-redux";
import CounterAction from './CounterAction';
import OfertaAction from './OfertaAction';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.inputRut = React.createRef();
        this.inputName = React.createRef();
        this.inputMonto = React.createRef();
    }

    componentDidMount() {
        const {count} = this.state;
        document.title = `You clicked ${count} times`;
    }

    componentDidUpdate() {
        const {count} = this.state;
        document.title = `You clicked ${count} times`;
    }

    handleAdd = () => {
        
        const { adicionar } = this.props;
        const {count} = this.state;
        this.setState({
            count: count + 1,
        });
        adicionar({ruts:this.inputRut.current.value
                   ,name:this.inputName.current.value});
    }

    handleChange = () => {
        
      const { change } = this.props;
      const {count} = this.state;
      this.setState({
          count: count + 1,
      });
      change({ruts:this.inputRut.current.value
                 ,name:this.inputName.current.value});
  }

  handleChangeOferta = () => {
        
    const { changeOferta } = this.props;
    const {count} = this.state;
    this.setState({
        count: count + 1,
    });
    changeOferta({ruts:this.inputRut.current.value
               ,name:this.inputName.current.value
               ,monto:this.inputMonto.current.value});
}

    handleReplace = () =>{
        
        const { reemplazar } = this.props;
        const {count} = this.state;
        this.setState({
          count: count + 1,
      });
      reemplazar({ruts:this.inputRut.current.value
                 ,name:this.inputName.current.value});
    }

    handleDell = () => {
        
      const { eliminar } = this.props;
      const {count} = this.state;
      this.setState({
        count: count + 1,
    });
    eliminar({ruts:this.inputRut.current.value
               ,name:this.inputName.current.value});
  }

  handleReplaceAttributeOferta = () => {
        
    const { reemplazarAttributeOferta } = this.props;
    const {count} = this.state;
    this.setState({
      count: count + 1,
  });
    reemplazarAttributeOferta({ruts:this.inputRut.current.value
              ,name:this.inputName.current.value,monto:this.inputMonto.current.value});
  }

  handleReplaceAttribute = () => {
        
    const { reemplazarAttributeCounter } = this.props;
    const {count} = this.state;
    this.setState({
      count: count + 1,
  });
  reemplazarAttributeCounter({ruts:this.inputRut.current.value
              ,name:this.inputName.current.value,monto:this.inputMonto.current.value});
  }

    render() {
        const {principalStore} = this.props;
        const {ruts,name} = principalStore;
        
        return (
          <div>
            <p>
              You clicked 
              {ruts} {name}
              times 
            </p>
            <table>
              <tr>
                <th>
                  <input type="text" ref={this.inputRut} />
                </th>
                <th>
                  <input type="text" ref={this.inputName}  />
                </th>
                <th>
                  <input type="text" ref={this.inputMonto}  />
                </th>
                <th>
                  Sin valor
                </th>
                <th>
                  Sin valor
                </th>
              </tr>
              <tr>
                <th>
                  <button 
                    type="button" 
                    onClick={this.handleChange}
                  >
                          Change only element
                  </button>
                </th>
                <th>
                  <button 
                    type="button" 
                    onClick={this.handleAdd}
                  >
                          Add element
                  </button>
                </th>
                <th>
                  <button 
                    type="button" 
                    onClick={this.handleReplace}
                  >
                          Replace Element
                  </button>
                </th>
                <th>
                  <button 
                    type="button" 
                    onClick={this.handleDell}
                  >
                          Delete Element
                  </button>
                </th>
                <th>
                  <button 
                    type="button" 
                    onClick={this.handleReplaceAttribute}
                  >
                          Replace attribute Element
                  </button>
                </th>
              </tr>
              <tr>
                <th>
                  <button 
                    type="button" 
                    onClick={this.handleChangeOferta}
                  >
                          Change only element Oferta
                  </button>
                </th>
                <th>
                  <button 
                    type="button" 
                    onClick={this.handleAdd}
                  >
                          Add element Oferta
                  </button>
                </th>
                <th>
                  <button 
                    type="button" 
                    onClick={this.handleReplace}
                  >
                          Replace Element Oferta
                  </button>
                </th>
                <th>
                  <button 
                    type="button" 
                    onClick={this.handleDell}
                  >
                          Delete Element Oferta
                  </button>
                </th>
                <th>
                  <button 
                    type="button" 
                    onClick={this.handleReplaceAttributeOferta}
                  >
                          Replace attribute Element Oferta
                  </button>
                </th>
              </tr>
            </table>

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
            dispatch(CounterAction.addElement('PersonaMiddleware','replaceTestCounter',param))},
        reemplazar: (param) =>{ 
                dispatch(CounterAction.replaceElement('PersonaMiddleware','replaceTestCounter',param))},
        eliminar: (param) =>{ 
                dispatch(CounterAction.delElement('PersonaMiddleware','replaceTestCounter',param))},
        change: (param) =>{ 
                dispatch(CounterAction.changeElement('PersonaMiddleware','replaceTestCounter',param))},
        reemplazarAttributeCounter: (param) =>{ 
                dispatch(CounterAction.replaceAttribute('PersonaMiddleware','replaceTestCountersolonombre',param))},
        reemplazarAttributeOferta: (param) =>{ 
                dispatch(OfertaAction.replaceAttribute('OfertaMiddleware','replaceTestsoloMonto',param))},
        changeOferta: (param) =>{ 
                dispatch(OfertaAction.changeElement('OfertaMiddleware','replaceTestOferta',param))},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
