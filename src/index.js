// src/index.js
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connection = require("./config/connection");

const signStudent = require("./routes/student/signStudent");
const signUser = require("./routes/admin/signUser");
const postCohort = require("./routes/cohort/postCohort");
const logUser = require("./routes/admin/logUser");
const logStudent = require("./routes/student/logStudent");
const getCohort = require("./routes/cohort/getCohort");
const postJob = require("./routes/job/postJob");
const getJob = require("./routes/job/getJob");
const sendMsg = require("./routes/chat/sendMsg");
const getMsg = require("./routes/chat/getMsg");
const updateStudent = require("./routes/student/updateStudent");
const delStudent = require("./routes/student/delStudent");
const updateUser = require("./routes/admin/updateUser");
const delUser = require("./routes/admin/delUser");
const updateCohort = require("./routes/cohort/updateCohort");
const delCohort = require("./routes/cohort/delCohort");
const updateJob = require("./routes/job/updateJob");
const delJob = require("./routes/job/delJob");
const postSyllabus = require("./routes/syllabus/postSyllabus");
const getSyllabus = require("./routes/syllabus/getSyllabus");
const getStudentDet = require("./routes/student/getStudentDet");
const getStudent = require("./routes/student/getStudents");
const updateSyllabus = require("./routes/syllabus/updateSyllabus");
const delSyllabus = require("./routes/syllabus/delSyllabus");
const addCourseStudent = require("./routes/student/addCourseStudent");
const postCourse = require("./routes/course/postCourse");
const getCourse = require("./routes/course/getCourse");
const updateCourse = require("./routes/course/updateCourse");
const delCourse = require("./routes/course/delCourse");
const postExam = require("./routes/exam/postExam");
const getExam = require("./routes/exam/getExam");
const updateExam = require("./routes/exam/updateExam");
const delExam = require("./routes/exam/delExam");
const postCohortExam = require("./routes/cohortExam/postCohortExam");
const getCohortExam = require("./routes/cohortExam/getCohortExamDet");
const getCohortDetails = require("./routes/cohort/getCohortId");
const getCourseDetails = require("./routes/course/getCourseId");
const postCenter = require("./routes/center/postCenter");
const getCenter = require("./routes/center/getCenter");
const postStaff = require("./routes/staff/postStaff");
const getStaff = require("./routes/staff/getStaff");
const getStaffId = require("./routes/staff/getStaffId");
const updateStaffDet = require("./routes/staff/updateStaffDet");
const postOtherInfo = require("./routes/staff/postOtherInfo");
const getOtherInfo = require("./routes/staff/getOtherInfo");
const getOtherInfoDet = require("./routes/staff/getOtherInfoDet");
const updateOtherInfo = require("./routes/staff/updateOtherInfo");
const postResult = require("./routes/result/postResult");
const getResult = require("./routes/result/getResult");
const getResultDetail = require("./routes/result/getResultDetails");
const postAssessment = require("./routes/assessment/postAssessment");
const getAssessment = require("./routes/assessment/getAssessment");
const delAssessment = require("./routes/assessment/delAssessment");
const getAssessmentDetail = require("./routes/assessment/getAssessmentDetail");
const postProject = require("./routes/project/postProject");
const getProject = require("./routes/project/getProject");
const getProjectDetail = require("./routes/project/getProjectDetail");
const delProject = require("./routes/project/delProject");
const postClassroom = require("./routes/classroom/postClassroom");
const getClassroom = require("./routes/classroom/getClassroom");
const getClassroomDetail = require("./routes/classroom/getClassroomDet");
const delClassroom = require("./routes/classroom/delClassroom");
const updateClassroom = require("./routes/classroom/updateClassroom");
const authToken = require("./middleware/authToken");
const { postCert, upload } = require("./routes/certificate/postCert");
const getCertificate = require("./routes/certificate/getCertificate");
const getCertId = require("./routes/certificate/getCertId");
const updateCert = require("./routes/certificate/updateCert");
const delCert = require("./routes/certificate/delCert");
const postMsg = require("./routes/messages/postMsg");
const getMessages = require("./routes/messages/getMsg");
const getMessageDetail = require("./routes/messages/getMsgDet");
const deleteMessage = require("./routes/messages/delMsg");
const getCohortExamDet = require("./routes/cohortExam/getCohortExamDet");
const verifyUserCode = require("./routes/verifyOtp/verifyUserCode");
const sendVerificationCode = require("./routes/verifyOtp/sendVerificationCode");
const logStaff = require("./routes/staff/logStaff");
const assignCohort = require("./routes/cohort/assignCohort");
const postAttendance = require("./routes/classroom/postAttendance");
const convertProgramArrayToObject = require("./routes/student/convertProgram");
const postNonCourse = require("./routes/nonCourse/postNonCourse");
const getNonCourse = require("./routes/nonCourse/getNonCourse");
const postGradePro = require("./routes/project/postGradePro");
const postSubmissionPro = require("./routes/project/postSubmissionPro");
const postGradeAss = require("./routes/assessment/postGradeAss");
const postSubmissionAss = require("./routes/assessment/postSubmissionAss");
const postProfile = require("./routes/profile/postProfile");
const getProfile = require("./routes/profile/getProfile");
const getProfileDet = require("./routes/profile/getProfileDet");
const delProfile = require("./routes/profile/delProfile");
const updateProjectStatus = require("./routes/status/projectStatus");
const updateCohortStatus = require("./routes/status/cohortStatus");
const updateAssessmentStatus = require("./routes/status/assessmentStatus");
const updateStudentWithoutOtherName = require("./routes/student/updateStudentOther");

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Admin / Accountant / Super admin
app.post('/user', signUser);
app.post('/logUser', logUser);
app.put('/updateUser/:id', updateUser);
app.delete('/deleteUser/:id', delUser);

// student
app.post('/signStudent', upload.single('profile '), signStudent);
app.post('/convertProgram', convertProgramArrayToObject)
app.post('/logStudent', logStudent);
app.put('/updateStudent/:id', updateStudent);
app.put('/addCourse/:id', authToken, addCourseStudent);
app.delete('/deleteStudent/:id', delStudent);
app.get('/studentDetails/:id', getStudentDet);
app.get('/getStudent', getStudent);

// Assessment
app.post('/postAssessment', postAssessment);
app.get('/getAssessment', getAssessment);
app.get('/getAssessmentDet/:id', getAssessmentDetail);
app.put('/gradeStudent/:assessmentId/grade/:studentId', postGradeAss);
app.post('/submitAssessment/:assessmentId', postSubmissionAss);
app.delete('/delAssessment/:id', authToken, delAssessment);

// Classroom
app.post('/postClassroom', postClassroom);
app.get('/getClassroom', getClassroom);
app.get('/getClassroomDet/:id', getClassroomDetail);
app.delete('/delClassroom/id', delClassroom);
app.put('/updateClassroom/:id', updateClassroom);
app.put('/postAttendance/:id', postAttendance);

// Cohort
app.post('/postCohort', postCohort);
app.get('/getCohort', getCohort);
app.get('/getCohortDetail/:id', getCohortDetails);
app.put('/updateCohort/:id', updateCohort);
app.put('/assignCohort/:id', assignCohort);
app.delete('/deleteCohort/:id', delCohort);

app.post('/postCohortExam', authToken, postCohortExam);
app.get('/getCohortExam', authToken, getCohortExam);
app.get('/getCohortExamDet/:id', authToken, getCohortExamDet);

// Course
app.post('/postCourse', postCourse);
app.get('/getCourse', getCourse);
app.get('/getCourseDetail/:id', getCourseDetails);
app.put('/updateCourse/:id', authToken, updateCourse);
app.delete('/deleteCourse/:id', authToken, delCourse);

// Center
app.post('/postCenter', authToken, postCenter);
app.get('/getCenter', getCenter);

// Certificate
app.post('/postCertificate', upload.single('certificate'), postCert);
app.get('/getCertificate', getCertificate);
app.get('/getCertificateId/:id', authToken, getCertId);
app.put('/updateCertificate/:id', authToken, updateCert);
app.delete('/deleteCertificate/:id', authToken, delCert);


// Exam
app.post('/postExam', authToken, postExam);
app.get('/getExam', authToken, getExam);
app.put('/updateExam/:id', authToken, updateExam);
app.delete('/deleteExam/:id', authToken, delExam);

// Job
app.post('/postJob', postJob);
app.get('/getJob', getJob);
app.put('/updateJob/:id', authToken, updateJob);
app.delete('/deleteJob/:id', authToken, delJob);

// Message
app.post('/postMsg', postMsg);
app.get('/getMsg', authToken, getMessages);
app.get('/getMessage/:id', authToken, getMessageDetail);
app.delete('/deleteMsg/:id', authToken, deleteMessage);

// Non-course staff
app.post('/postNonCourse', postNonCourse);
app.get('/getNonCourse', getNonCourse)

// Project
app.post('/postProject', postProject);
app.get('/getProject', getProject);
app.get('/getProjectDet/:id', getProjectDetail);
app.delete('/delProject/:id', authToken, delProject);
app.put('/gradeProject/:projectId/grade/:studentId', postGradePro);
app.post('/submitProject/:projectId', postSubmissionPro)

// Profile
app.post('/postProfile', upload.single('proPic'), postProfile);
app.get('/getProfile', getProfile);
app.get('/getProfileDet/:id', getProfileDet);
app.delete('/delProfile/:id', delProfile);

// Result
app.post('/postResult', authToken, postResult);
app.get('/getResult', authToken, getResult);
app.get('/getResultDetail/:id', authToken, getResultDetail);

// Syllabus
app.post('/postSyllabus', upload.single('sylFile'), postSyllabus);
app.get('/getSyllabus', getSyllabus);
app.put('/updateSyllabus/:id', authToken, updateSyllabus);
app.delete('/deleteSyllabus/:id', authToken, delSyllabus);

// Staff
app.post('/postStaff', postStaff);
app.post('/logStaff', logStaff);
app.get('/getStaff', getStaff);
app.get('/getStaffDet/:id', getStaffId);
app.put('/updateStaff/:id', updateStaffDet);

app.post('/postOtherInfo', authToken, postOtherInfo);
app.get('/getOtherInfo', authToken, getOtherInfo);
app.get('/getOtherInfoDet/:id', authToken, getOtherInfoDet);
app.put('/updateOtherInfo/:id', authToken, updateOtherInfo);

// Status
app.put('/cohortStatus', updateCohortStatus);
app.put('/projectStatus', updateProjectStatus);
app.put('/assessmentStatus', updateAssessmentStatus)

// Verify Email
app.post('/sendOtp', sendVerificationCode);
app.post('/verifyOtp', verifyUserCode)

// Chat
app.post('/postChat', authToken, sendMsg);
app.get('/getChat', authToken, getMsg);

// update student without other name
app.put('/addOtherName', updateStudentWithoutOtherName);
app.get('/', (req, res) => {
  res.status(200).send('API is working ✅');
});

connection(); // ✅ this initializes MongoDB

module.exports = app; // 