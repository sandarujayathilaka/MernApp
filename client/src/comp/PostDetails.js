import React, {useState,useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios'


export default function PostDetails(){

    const [post,setPost] = useState({});
    const param =  useParams();
    
  

      function getPost(){

                const pid = param.id
               
    
                axios.get(`http://localhost:8000/post/get/${pid}`).then((res)=>{
               // if(res.data.success){

               const Onepost =res.data
              
                    setPost(Onepost.posts)
                   
                    //setPosts(allposts)
               // }
    
                }).catch((err)=>{
    
                    alert(err)
    
                })
    
            } 

            useEffect(()=>{

            getPost()
    
        },[])


        return(
            <div className="container">

            <h1>{post.topic}</h1>
            <h1>{post.description}</h1>
            <h1>{post.postCategory}</h1>
            </div>

        )




    }