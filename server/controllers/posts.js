const PostMessage = require('../models/postMessage');
const mongoose = require('mongoose');

const getPosts = async(req , res)=>{
    try{
        const postMessage = await PostMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);
    }catch(error){
        res.status(400).json({message : error.message})
    }
}
const createPost = async(req , res) =>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}

const updatePost = async (req , res)=>{
    const {id : _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.send(404).send("No post with that id");
    }
    const updatedPost = await PostMessage.findByIdAndUpdate({_id},{
        $set : {
            ...post,
            // _id
        }
    },{
        new : true
    });
    res.json(updatedPost);
}

const deletePost = async(req , res)=>{
    const {id : _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.send(404).send("No post with that id");
    }
    
    await PostMessage.deleteOne({_id});
    res.json({message : 'Post deleted successfully'});
}

const likePost = async(req , res)=>{
    const {id : _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.send(404).send("No post with that id");
    }
    const post = await PostMessage.findOne({_id});
    const updatedPost = await PostMessage.findByIdAndUpdate({_id} , {
        $set : {
            likeCount : post.likeCount + 1
        }
    } , {new : true});
    res.json(updatedPost);

}

module.exports = {getPosts , createPost , updatePost, deletePost, likePost}