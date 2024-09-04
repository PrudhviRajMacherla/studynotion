const SubSection = require("../models/SubSection");
const CourseProgress = require("../models/CourseProgress");

exports.updateCourseProgress = async (req, res) => {
  const { courseId, subSectionId } = req.body;
  const userId = req.user.id;

  try {
    // check subsection is valid or not?

    const subSection = await SubSection.findById(subSectionId);
    if (!subSection) {
      return res.status(404).json({ error: "Invalid SubSection" });
    }

    // check for old Entry
    let courseProgress = await CourseProgress.findOne({
      courseID: courseId,
      userId: userId,
    });
    if (!courseProgress) {
      return res
        .status(404)
        .json({ success: false, message: "Course Progress does not exist" });
    } else {
      // check for completed video/subsection|| Already Marked As Completed
      if (courseProgress.completedVideos.includes(subSectionId)) {
        return res.status(404).json({
          error: "SubSection Already Marked As Completed",
        });
      }
      // Not Marked|| Push into completed video
      courseProgress.completedVideos.push(subSectionId);
    }

    await courseProgress.save();

    return res.status(200).json({
      success: true,
      message: "Course Progress Updated Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to updated Course Progress",
      error: "Internal Server Error",
    });
  }
};
