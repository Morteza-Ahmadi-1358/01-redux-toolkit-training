import { customDecrement, customIncrement, decrement, increment, reset } from '@/redux/features/slices/CounterSlice'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const counter = useSelector(state => state.cnt)
    const number = useRef()
    const dispatch = useDispatch()
    return (
        <div className='container mt-5 py-2'>
            <div className='row mt-4 py-2'>
                <div className='w-50 mx-auto border border-danger rounded mt-5 py-5 shadow'>
                    <label className='form-control w-25 mx-auto text-center fw-bold text-danger'>{counter.number}</label>
                    <div className='w-75c d-flex justify-content-around align-item-center my-3'>
                        <button className='w-25 btn btn-danger mx-3' onClick={() => dispatch(increment())}> + </button>
                        <button className='w-25 btn btn-danger mx-3' onClick={() => dispatch(reset())}> 0 </button>
                        <button className='w-25 btn btn-danger mx-3' onClick={() => dispatch(decrement())}> - </button>
                    </div>
                    <input type="number" ref={number}  className='form-control w-25 mx-auto text-center fw-bold text-danger' />
                    <div className='w-75 mx-auto d-flex justify-content-around align-item-center my-3'>
                        <button className='w-25 btn btn-danger mx-3' onClick={() => dispatch(customIncrement(Number(number.current.value)))}> Add </button>
                        <button className='w-25 btn btn-danger mx-3' onClick={() => dispatch(customDecrement(Number(number.current.value)))}> Sub</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter