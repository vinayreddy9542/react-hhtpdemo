import React, { Component } from 'react'
import axios from 'axios'
class Postlist extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
            console.log(response)
            this.setState({
                posts:response.data
            })
        }).catch(error =>{
            console.log(error)
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.posts.length?this.state.posts.map(post => <div key={post.id}>{post.body}</div>):null
                }
            </div>
        )
    }
}

export default Postlist