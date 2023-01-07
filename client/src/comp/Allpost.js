import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios";



export default function Allpost(){

    const [posts,setPosts] = useState([]);


        useEffect(()=>{

        function getPosts(){
            axios.get("http://localhost:8000/posts").then((res)=>{
           // if(res.data.success){
                const allposts = res.data
                setPosts(allposts)
                
           // }

            }).catch((err)=>{

                alert(err)

            })
        } 
            getPosts()
    
        },[])

        function refreshPage() {
            window.location.reload(false);
          }


         const onDelete =(id)=>{
            axios.delete(`http://localhost:8000/post/delete/${id}`).then((res)=>{

            alert("Element Deleted!!")
            refreshPage()
               
     
                 }).catch((err)=>{
     
                     alert(err)
                     
     
                 })
        }


       
return(

    <div className="container">

<table class="table">
        <thead>
            <tr>
                <th>Topic</th>
                <th>Description</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {posts.map((posts)=>
                <tr>
                    <td>
                    <Link to={`/post/get/${posts._id}`} style={{textDecoration:'none'}}>{posts.topic}</Link>
                        </td>
                    <td>{posts.description}</td>
                    <td>{posts.postCategory}</td>
                    <td>
                    <a className="btn btn-warning" href={`/post/update/${posts._id}`}>Update</a>
                    &nbsp;
                    <a className="btn btn-danger" onClick={()=>onDelete(posts._id)}>Delete</a>
                        </td>
                </tr>
              
            )}
            </tbody>
            </table>
        
    </div>
)

}

