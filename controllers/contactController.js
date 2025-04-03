const asyncHandler=require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contact
//@access public
const getAllContact=asyncHandler(async(req,res) =>
    {
        res.status(200).json({message:"All okay"});
    });


const getContact=asyncHandler(async(req,res) =>
    {
        res.status(200).json({message:`Requested contact for ${req.params.id}`});
    });

const postContact=asyncHandler(async(req,res) =>

    {
        console.log("The request body is ",req.body);
        const{cname,email,phone}=req.body;
        if(!cname || !email || !phone)
        {
            res.status(400);
            throw new Error("All fields are mandate");
        }
        res.status(201).json({message:"posted"});
    });
const putContact=asyncHandler(async(req,res) =>
    {
        res.status(200).json({message:`Updated contact for ${req.params.id}`});
    });
const DeleteContact=asyncHandler(async(req,res) =>
    {
        res.status(200).json({message:`Delete contact for ${req.params.id}`});
    });
    
module.exports={getAllContact,getContact,postContact,putContact,DeleteContact};