const express = require("express");
const router = express.Router({ mergeParams: true }); // ✅ This is important
// mergeParams: true allows a child router to access route parameters (like :id) from the parent route in Express.

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor}= require("../middleware.js")
const reviewController = require("../controller/review.js");


//Reviews
//post Review route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

//Delete Review route
router.delete(
  "/:reviewId",
  isLoggedIn, 
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview)
);

// app.get("/testListing",async(req,res)=>{
//     let sampleListing = new Listing({
//         title:"My New villa",
//         description:"By the beach",
//         price:2000,
//         location:"Calangute,Goa",
//         country:"India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing! ");
// });

module.exports = router;
