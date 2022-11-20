import React, {useState} from 'react'
import {Button, ButtonGroup, Badge} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import useCounter from '../customhook/useCounter';

const ComponentB = () => {
	const [count, increment, decrement, reset] = useCounter(0, 3);

  return (
    <div>
			<ButtonGroup>
				<Button color='primary' outline>
					ComponentB Counter <Badge color="secondary">{count}</Badge>
				</Button>
			</ButtonGroup>
			<p></p>
			<ButtonGroup>
				<Button color='dark' onClick={increment}>increment</Button>
				<Button color='dark' onClick={decrement}>decrement</Button>
				<Button color='danger' onClick={reset}>reset</Button>
			</ButtonGroup>
			<p></p>
    </div>
  )
}

export default ComponentB