const express = require('express')
const posts = require('../models/posts')

const router = express.Router();

//save 

router.route("/post/save").post((req,res)=>{
    
    const topic = req.body.topic;
    const description = req.body.description;
    const postCategory = req.body.postCategory;

    const newpost = new posts({

        topic,
        description,
        postCategory

    })

    newpost.save().then(()=>{
        res.json("post Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//get

// router.get('/posts',(req,res)=>{

//     posts.find().exec((err,posts)=>{
//         if(err){
//             return res.status(400).json({
//                 errer:err
//             })
//         }
//         return res.status(200).json({
//             success:true,
//             existingPosts:posts
//         })
//     })

// })


router.route("/posts").get((req,res)=>{

    posts.find().then((post)=>{
        res.json(post)
    }).catch((err)=>{
        console.log(err)
    })

})

//update

router.route('/post/update/:id').put(async(req,res)=>{

    let postid = req.params.id

//using destructure method get the frontend value
    const{topic,description,postCategory} = req.body

    const updatePost ={
        topic,
        description,
        postCategory
    }

    await posts.findByIdAndUpdate(postid,updatePost).then(()=>{
        res.status(200).send({status:"post updated"})
    }).catch((err)=>{

        console.log(err);

    })


})



// router.put('/post/update/:id',(req,res)=>{
//     posts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }

//             return res.status(200).json({
//                 success:"Updetaed"
//             })
//         }

//     )
// })



router.delete('/post/delete/:id',(req,res)=>{

    posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) => {

        if(err) return res.status(400).json({
           
           message:"delete not completed",err
        
        });
        

        
        return res.status(200).json({
            message:"delete success",deletedPost
        })
    })
})

router.route("/post/get/:id").get(async(req,res)=>{
    let postid = req.params.id

    await posts.findById(postid)
    .then((posts)=>{
        res.status(200).send({posts})
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;