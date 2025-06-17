// const Cohort = require('../../models/cohort');

// const postCohort = async (req, res) => {
//     const { cohortName, courseId = [], startDate, endDate, center, mode, courseTutors = [], isActive, status } = req.body;

//     try {
//         // Check for duplicates within the courseTutors array
//         const uniqueTutors = new Set();
//         for (let tutor of courseTutors) {
//             const tutorKey = `${tutor.courseId}-${tutor.center}-${tutor.mode}`;

//             // If the combination already exists, return an error
//             if (uniqueTutors.has(tutorKey)) {
//                 return res.status(400).json({
//                     message: `Duplicate courseTutor found: Tutor with course ID ${tutor.courseId}, center ${tutor.center}, and mode ${tutor.mode} is listed more than once.`
//                 });
//             }
//             uniqueTutors.add(tutorKey);
//         }

//         // If no duplicates are found, proceed to create the new cohort
//         const newCohort = await Cohort.create({
//             cohortName, courseId, startDate, endDate, center, mode, courseTutors, isActive, status
//         });

//         res.status(201).json({
//             message: 'Cohort created successfully',
//             data: newCohort,
//         });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// module.exports = postCohort;



// src/routes/cohort/postCohort.js
const Cohort = require('../../models/cohort');

const postCohort = async (req, res) => {
  const {
    cohortName,
    courseId = [],
    startDate,
    endDate,
    center,
    mode,
    courseTutors = [],
    isActive,
    status
  } = req.body;

  try {
    // Check for duplicates within the courseTutors array
    const uniqueTutors = new Set();
    for (let tutor of courseTutors) {
      const tutorKey = `${tutor.courseId}-${tutor.center}-${tutor.mode}`;

      if (uniqueTutors.has(tutorKey)) {
        return res.status(400).json({
          message: `Duplicate courseTutor found: Tutor with course ID ${tutor.courseId}, center ${tutor.center}, and mode ${tutor.mode} is listed more than once.`
        });
      }
      uniqueTutors.add(tutorKey);
    }

    // Proceed to create the new cohort
    const newCohort = await Cohort.create({
      cohortName,
      courseId,
      startDate,
      endDate,
      center,
      mode,
      courseTutors,
      isActive,
      status
    });

    res.status(201).json({
      message: 'Cohort created successfully',
      data: newCohort
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postCohort;
