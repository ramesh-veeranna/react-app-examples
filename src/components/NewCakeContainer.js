import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h4>Number Of Cakes: {props.numOfCakes}</h4>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button className='btn btn-primary' onClick={() => props.buyCake(number)} >Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)