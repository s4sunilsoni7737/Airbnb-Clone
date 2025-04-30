const mongoose = require("mongoose");
const Review = require("./review.js");
const { ref, string } = require("joi");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename:String,

    // type: String,
    // default:
    //   "https://m.warnersstellian.com/Content/images/product_image_not_available.png",
    // set: (v) =>
    //   v === ""
    //     ? "https://m.warnersstellian.com/Content/images/product_image_not_available.png"
    //     : v, // ternery operator like if else
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner:{
    type: Schema.Types.ObjectId,
    ref:"User"
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
