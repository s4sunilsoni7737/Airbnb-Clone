const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");

const { equal } = require("joi");

const listingController = require("../controller/listing.js");

const multer = require("multer");
const {storage} = require("../cloudConfig.js")
const upload = multer({storage});

//INDEX ROUTE

router.get(
  "/",
  wrapAsync(listingController.index)
);

//RENDER NEW ROUTE

router.get("/new",isLoggedIn,listingController.renderNewForm );

//SHOW ROUTE

router.get("/:id", wrapAsync(listingController.showListing));

//NEW ROUTE

router.post(
    "/new",
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,

    wrapAsync(listingController.createListing)
    
  );


  

  //DELETE ROUTE
  
  router.delete(
    "/:id/delete",
    isLoggedIn,
    isOwner,

    wrapAsync(listingController.deleteListing)
  );
  
  //UPDATE ROUTE
  
  // router.get(
  //   "/:id/update",
  //   isLoggedIn,isOwner,
  //   wrapAsync(listingController.renderEditForm)
  // );
  
  // router.put(
  //   "/:id/update",
  //   isLoggedIn,
  //   isOwner,
  //   wrapAsync(listingController.updateListing)
  // );

//best way for no duplication of path

  router.route("/:id/update").get(
    
    isLoggedIn,isOwner,

    wrapAsync(listingController.renderEditForm)
  )
  .put(
    
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  );

  
  module.exports = router;