import Header from './comp/Header'
import Addposts from './comp/Addposts'
import Allpost from './comp/Allpost'
import PostDetails from './comp/PostDetails'
import UpdatePost from './comp/UpdatePost'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Navbar from './comp/Navbar'

export default function App(){
  return(

      <BrowserRouter>
      <div>
        <Header/>
        <Routes>
        <Route path="/" element={<Allpost/>}> </Route>
        <Route path="/addpost" element={<Addposts/>}></Route>
        <Route path="/post/get/:id" element={<PostDetails/>}></Route>
        <Route path="/post/update/:id" element={<UpdatePost/>}></Route>
        <Route path="/nav" element={<Navbar/>}></Route>
        
        </Routes>
        </div>
      </BrowserRouter>

  )
}

