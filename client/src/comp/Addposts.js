import React, {useState} from "react";
import axios from "axios";


export default function AddPost(){

    const [topic,setTopic] = useState("")
    const [description,setDec] = useState("")
    const [postCategory,setCate] = useState("")


    function sendData(e){

        e.preventDefault();
        
        const newpost = {
            topic,
            description,
            postCategory
        }

        console.log(newpost)


       axios.post("http://localhost:8000/post/save",newpost)
       .then(()=>{
        alert("post added")
        setTopic ("")
        setDec ("")
        setCate("")

        refreshPage()

       }).catch((err)=>{
        alert(`Not inserted ${err}`)
       })



    }

    function refreshPage() {
        window.location.reload(false);
      }
      


    return(

        <div className="container">
        
        <form onSubmit={sendData} >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">topic</label>
    <input type="test" className="form-control" id="name" aria-describedby="emailHelp" onChange={(e)=>{
        setTopic(e.target.value)
    }} />
  </div>

  <div className="mb-3">
    <label htmlFor="Age" className="form-label">description</label>
    <input type="test" className="form-control" id="Age" onChange={(e)=>{
        setDec(e.target.value)
    }}/>
  </div>

  <div className="mb-3">
    <label htmlFor="Gender" className="form-label">postCategory</label>
    <input type="test" className="form-control" id="Gender" onChange={(e)=>{
        setCate(e.target.value)
    }}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

 <div/>
 </div>


    )


}