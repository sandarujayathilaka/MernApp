import Header from './comp/Header'
import Addposts from './comp/Addposts'
import Allpost from './comp/Allpost'
import PostDetails from './comp/PostDetails'
import {BrowserRouter, Routes,Route} from "react-router-dom"

export default function App(){
  return(

      <BrowserRouter>
      <div>
        <Header/>
        <Routes>
        <Route path="/" element={<Allpost/>}> </Route>
        <Route path="/addpost" element={<Addposts/>}></Route>
        <Route path="/post/get/:id" element={<PostDetails/>}></Route>
        </Routes>
        </div>
      </BrowserRouter>

  )
}

