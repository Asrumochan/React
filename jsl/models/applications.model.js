import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const applicationSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Company name is required"],
  },
  role: {
    type: String,
    required: [true, "role is required"],
  },
  status: {
    type: String,
    required: [true, "status is required"],
  },
},{timestamps: true , versionKey: false});

applicationSchema.plugin(mongooseAggregatePaginate);

const Applications = mongoose.model("Applications", applicationSchema)

export default Applications;