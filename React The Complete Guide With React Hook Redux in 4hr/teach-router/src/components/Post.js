import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Post = (props) => {
	console.log(props);
	//{this.props.params.id}
	//const id = {props.params.id}
	const { id } = useParams();
    console.log(id);
	console.log('post'+id)
	const [post, setPost] = useState([])
	useEffect(() => {
		(async()=>{
		const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		setPost(res.data)
		})()
	}, [])
  return (
		<div className="card">
				<h5 className="card-header">{id}</h5>
				<div className="card-body">
						<h5 className="card-title">{post.title}</h5>
						<p className="card-text">{post.text}</p>
						<a className="btn btn-primary">Go somewhere</a>
				</div>
		</div>
  )
}

export default Post