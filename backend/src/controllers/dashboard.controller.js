import mongoose from "mongoose"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

// const addToCurrentData = asyncHandler(async(req,res)=>{
//     const  {country} = req.body
//     if(!country){
//         throw new ApiError(400, "country required")
//     }
//     const data = await Datamodel.create({
//         country
//     })
   
//     return res
//     .status(200)
//     .json(new ApiResponse(200, data , " data  added  succesfully"))
//   })
  
  


const getCurrentUserData = asyncHandler(async(req,res)=>{
  const objectId = req.body;
  if(!objectId){
    throw new ApiError(404, "inavlid id")
  }
  console.log("ObjectId:", objectId);
    const user = await User.findOne({ _id: objectId });
    
    
    if (!user) {
        throw new ApiError(404, "NOT FOUND");
    }
    return res
    .status(200)
    .json(new ApiResponse(200, user , "current  user data  fetched succesfully"))
  })
  


  const fetchByFilter = asyncHandler(async(req,res)=>{
    const filters = {};

    if (req.query.end_year) {
      filters.end_year = req.query.end_year;
    }
    if (req.query.topics) {
      filters.topic = { $in: req.query.topics.split(",") };
    }
    if (req.query.sector) {
      filters.sector = { $in: req.query.sector.split(",") };
    }
    if (req.query.region) {
      filters.region = req.query.region;
    }
    if (req.query.pestle) {
      filters.pestle = req.query.pestle;
    }
    if (req.query.source) {
      filters.source = req.query.source;
    }
    if (req.query.country) {
      filters.country = req.query.country;
    }
    if (req.query.city) {
      filters.city = req.query.city;
    }
    const projection = {};
    if (req.query.project_fields) {
      req.query.project_fields.split(",").forEach(field => {
        projection[field] = 1;
      });
    } else {
      // Default projection if no specific fields are provided
      projection.title = 1;
      projection.intensity = 1;
      projection.relevance = 1;
      projection.likehood = 1;
      projection.year = 1;
      projection.country = 1;
      projection.topics = 1;
      projection.region = 1;
      projection.city = 1;
      projection.sector=1
    }


    const [data , count] =  await Promise.all([
      User.aggregate([
        { $match: filters },
        { $project: projection }
      ]),
      User.countDocuments(filters)
    ]);
    if(!data){
      throw new ApiError(401, " User Data not found ")
    }
    
    return res
    .status(200)
    .json(new ApiResponse(200, {data ,  count}, ` user data ${count} fetched succesfully`))
  })

export {getCurrentUserData,fetchByFilter}