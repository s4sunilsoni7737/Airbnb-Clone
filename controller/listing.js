const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
  }

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
  }

  module.exports.createListing = async (req, res, next) => {
      // if(!req.body.listing) {throw new ExpressError(400,"Invalid Listing Data");
      // } // because of joi we dont need this
    //  console.log(req);
      let url = req.file.path;
      let filename = req .file.filename;
      
      const newleListing = new Listing(req.body.listing);
      newleListing.owner = req.user._id;
      newleListing.image = {url,filename};
  
      await newleListing.save();
      req.flash("success","New Listing Created!");
      res.redirect("/listings");
    }

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
      req.flash("error","Listing you requested for does not exist!")
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  }
module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
  }

module.exports.renderEditForm = async (req, res) => {
      // res.send("ok");
      let { id } = req.params;
      let updateListing = await Listing.findById(id);
      if(!updateListing){
        req.flash("error","Listing you requested for does not exist!")
        res.redirect("/listings");
      }
      let originalImageUrl = updateListing.image.url;
      originalImageUrl.replace("/upload","/upload/h_300,w_250")
      res.render("listings/update.ejs", { updateListing ,originalImageUrl});
    };



module.exports.updateListing = async (req, res) => {

    let { id } = req.params;
    
    
    
    let listing = await Listing.findByIdAndUpdate(
      id,
      { ...req.body.listing },
      { new: true, runValidators: true }
    );

    if(typeof req.file !== "undefined"){
      let url = req.file.path;
      let filename = req .file.filename;
      listing.image = {url,filename};
  
      await listing.save();

    }
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
  }