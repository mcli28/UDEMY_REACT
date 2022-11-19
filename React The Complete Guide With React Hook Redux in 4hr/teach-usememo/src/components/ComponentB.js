import React, {useEffect} from 'react'
let renderCount = 0
const ComponentB = (props) => {
	useEffect(() => {
		renderCount++
	})
  return (
    <div>
			<h1>
				ComponentB: render {renderCount} times || Counter: {props.count}
			</h1>
		</div>
  )
}

export default ComponentB