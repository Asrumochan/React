import Applications from "../models/applications.model.js";

export const getAllApplications = async (req, res) => {
  const { page = 1, limit = 10, status } = req.query;
  const matchStage = status ? { status } : {};
  try {
    const applications = Applications.aggregate([
      {
        $match: matchStage,
      },
    ]);
    const options = {
      page: Number(page),
      limit: Number(limit),
    };
    const result = await Applications.aggregatePaginate(applications, options);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllApplicationById = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await Applications.findById(id);
    if (!application) {
      res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }
    res.status(200).json({
      message: "Application fetched successfully",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getStats = async (req, res) => {
  try {
    const result = await Applications.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          status: "$_id",
          count: 1,
        },
      },
      {
        $sort: {
          count: -1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Successfully fetched the records",
      data: result,
    });
  } catch (error) {}
};

export const createApplication = async (req, res) => {
  const { company, status, role } = req.body;

  try {
    const existingApplication = await Applications.findOne({ company, status });
    if (!existingApplication) {
      return res.status(409).json({
        success: false,
        message: "Creation failed because its already present",
      });
    }
    const payload = {
      company,
      status,
      role,
    };
    const application = await Applications.create(payload);

    res.status(201).json({
      success: true,
      message: " Application created",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal error",
    });
  }
};

export const updateApplication = async (req, res) => {
  console.log(req.body);
  const { id, ...updatedData } = req.body;
  try {
    const application = await Applications.findById(id);
    if (!application) {
      return res.status(409).json({
        success: false,
        message: "Application doesn't exist",
      });
    }
    const result = await Applications.updateOne(
      { _id: id },
      { $set: updatedData },
    );
    res.status(200).json({
        success: true,
        message:"Updated successfully",
        data: result
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteApplication = async(req,res)=>{
    const {id}= req.body;

    try {
        const existingApplication = await Applications.findById(id)
        if(!existingApplication){
            return res.status(404).json({
                success: false,
                message: "Application doesn't exist"
            })
        }
        const result = await Applications.deleteOne({
            _id: id
        })
        res.status(200).json({
          success: true,
          data: result,
          message: "Deleted Successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        })
    }
}
