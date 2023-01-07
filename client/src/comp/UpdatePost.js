import React, {useState,useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';



export default function UpdatePost(props){

    const param =  useParams();
    const id = param.id

    const [post,setPost] = useState({});

    function getPost(){
             
  
              axios.get(`http://localhost:8000/post/get/${id}`).then((res)=>{

             const Onepost =res.data
            
                  setPost(Onepost.posts)
  
              }).catch((err)=>{
  
                  alert(err)
  
              })
  
          } 

          useEffect(()=>{

          getPost()
  
      },[])
     

    const [topic,setTopic] = useState(post.topic)
    const [description,setDec] = useState(post.description)
    const [postCategory,setCate] = useState(post.postCategory)

    function UpdateData(e){

        e.preventDefault();

        const newpost = {
            topic,
            description,
            postCategory
        }

      



       axios.put(`http://localhost:8000/post/update/${id}`,newpost)
       .then(()=>{
        alert("post Updated !!")

       }).catch((err)=>{
        alert(`Not inserted ${err}`)
       })



    }

    return(

        <div className="container">
        
        <form onSubmit={UpdateData} >
  <div className="mb-3">
    <label htmlFor="name"  className="form-label">topic</label>
    <input type="test" defaultValue={post.topic}  className="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>{
        setTopic(e.target.value)
    }} />
  </div>

  <div className="mb-3">
    <label htmlFor="Age" className="form-label">description</label>
    <input type="test" defaultValue={post.description} className="form-control" id="Age" onChange={(e)=>{
        setDec(e.target.value)
    }}/>
  </div>

  <div className="mb-3">
    <label htmlFor="Gender" className="form-label">postCategory</label>
    <input type="test" defaultValue={post.postCategory}  className="form-control" id="Gender" onChange={(e)=>{
        setCate(e.target.value)
    }}/>
  </div>

  <button type="submit" className="btn btn-primary">Update</button>
</form>

 <div/>
 </div>


    )

}
