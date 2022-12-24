import React, {useState,useEffect} from "react";
import axios from "axios";



export default function Allpost(){

    const [posts,setPosts] = useState([]);


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

        useEffect(()=>{

            getPosts()
    
        },[])


        

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
                    <a href={`/post/get/${posts._id}`} style={{textDecoration:'none'}}>{posts.topic}</a>
                        </td>
                    <td>{posts.description}</td>
                    <td>{posts.postCategory}</td>
                    <td>
                    <a className="btn btn-warning" href="">Edit</a>
                    &nbsp;
                    <a className="btn btn-danger" href="">Delete</a>
                        </td>
                </tr>
            )}
            </tbody>
            </table>
        
    </div>
)



}

