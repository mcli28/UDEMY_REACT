import React, {Component} from 'react'
import PageHeader from './PageHeader'
import { Navigate } from "react-router-dom";

class UpdateForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            updateFlag: false
        }
    }

    render(){
        //const { match } = this.props;
        //const id = match.params.id;
        console.log(this.props)
        //const parametro = this.props.match.params.parametro;
        //console.log("parametro"+parametro)
        return (
            <div className="create_post_container">
                <section className='section'>
                <PageHeader title="Update Post" ></PageHeader>
                </section>
        
                <section className='section'>
                <div className='box has-background-grey-lighter'>
                    <form onSubmit={this.handleCreate.bind(this)}>
                        <div className='field'>
                            <label className='label'>Post Title</label>
                            <div className='control'>
                                <input
                                    ref={(input) => this.inputTitle = input} 
                                    className='input' 
                                    type="text" 
                                    placeholder="Post Title" />
                            </div>  
                        </div>
            
                        <div className='field'>
                            <label className='label'>Post Content</label>
                            <div className='control'>
                                <textarea 
                                    ref={(input) => this.inputContent = input} 
                                    className="textarea is-small" 
                                    placeholder="Small textarea" 
                                    rows="5" >
                                </textarea>
                            </div>
                        </div>
                        {this.state.updateFlag ?  <Navigate to="/posts" replace={true} /> : ''}
                        <button className="button is-primary is-medium">Update Post</button>
                    </form>    
                </div>
                </section>
            </div>
        )
    }

    handleCreate(e) {
        e.preventDefault();
        let inputTitleValue = this.inputTitle.value
        let inputContentValue = this.inputContent.value

        this.props.updatePost(inputTitleValue, inputContentValue)
        this.inputTitle.value = ''
        this.inputContent.value = ''
        this.setState({updateFlag: true})
    }

}

export default UpdateForm