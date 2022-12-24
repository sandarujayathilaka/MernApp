import React, {useState,useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios'


export default function PostDetails(){

    const [posts,setPost] = useState({});
    const param =  useParams();

        function getPosts(){

            const pid = param.id

            axios.get(`http://localhost:8000/post/get/${pid}`).then((res)=>{
           // if(res.data.success){
                const Onepost = res.data
                setPost(Onepost.posts)
                console.log(posts)
               
                //setPosts(allposts)
           // }

            }).catch((err)=>{

                alert(err)

            })


        } 

        useEffect(()=>{

            getPosts()
    
        },[])

        return(

            <h1></h1>

        )




    }