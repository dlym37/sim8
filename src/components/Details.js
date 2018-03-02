import React, {Component} from 'react';
import {connect} from 'react-redux';
import {petDetails} from '../ducks/reducer';

class Details extends Component {
    constructor(){
        super()
        this.state = {
            num : 0
        }
    }

addOne(){
    const number = this.state.num + 1;
    this.setState({
        num : number
    })
}

sizingChange(incOrDec){ //SIM 3 83F
    return incOrDec()
}


componentDidMount(){
    this.sizingChange(this.setState({ //SIM3 83E
        num: 10
    }), _=>{
        return 'Thats whats up'
    })
    const {id} = this.props.match.params 
    this.props.petDetails(id);

}
    render(){
       const animal= this.props.pet.map((e, i)=> {
            return (
                <div key={i}>
                    <div>{e.title}</div>
                    <img src={e.image} alt='image'/>
                    <div>weight: {e.weight}</div>
                    <button onClick={() =>this.sizingChange(this.addOne)}> + </button> {/*SIM3 83C */}
                    <button> - </button>
                </div>
            )
        })
        return (
            <div>
                {animal}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        pet : state.pet
    }
}

export default connect(mapStateToProps, {petDetails})(Details);