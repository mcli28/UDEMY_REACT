import React,{useContext} from 'react'
import {Button, ButtonGroup, Badge} from 'reactstrap'
import { CounterContext } from '../App'
import 'bootstrap/dist/css/bootstrap.min.css'
import ComponentB from './ComponentB'

const ComponentA = () => {
	const counterContext = useContext(CounterContext)
	//onsole.log(counterContext);
	const {counter, dispatch} = counterContext
  return (
    <div>
			<ButtonGroup>
				<Button color='primary' outline>
						ComponentA Counter <Badge color='secondary'>{counter}</Badge>
				</Button>
			</ButtonGroup>
			<p></p>
			<ButtonGroup>
				<Button color='dark' onClick={()=>dispatch({type:'increment', payload:1})}>increment</Button>
				<Button color='dark' onClick={()=>dispatch({type:'decrement', payload:1})}>decrement</Button>
				<Button color='danger' onClick={()=>dispatch({type:'reset'})}>reset</Button>
			</ButtonGroup>
			<p></p>
			<ComponentB/>
		</div>
  )
}

export default ComponentA;