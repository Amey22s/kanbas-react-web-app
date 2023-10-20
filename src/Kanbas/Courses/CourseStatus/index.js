import "./index.css";
import { BsXCircle, BsCheckCircle, BsUpload, BsArrowRight, BsBullseye, BsGraphUp, BsBell, BsCalendar, BsFlagFill } from 'react-icons/bs';


function CourseStatus() {
  return (
    <div class="wd-flex-course-status col-10">
      Course Status
      <div class="wd-course-status-buttons">
          <button class="btn wd-bg-lightgray">
          <BsXCircle /> Unpublish</button>
          <button class="btn btn-success">
          <BsCheckCircle /> Published</button>
      </div>
      <br />
      <div className="course-status-buttons col-10">
        <button class="btn wd-bg-lightgray mt-2">
        <BsUpload/> Import Existing Content</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">
        <BsArrowRight/> Import from Commons</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">
        <BsBullseye/> Choose Home Page</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">
        <BsGraphUp/> View Course Stream</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">
        <BsBell/> New Announcement</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">
        <BsGraphUp/> New Analytics</button>
        <br />
        <button class="btn wd-bg-lightgray mt-2">
        <BsFlagFill/> View Course Notifications</button>
        <br />
      </div>

      
      <div class="col-10 mt-4">
      <div className="course-status-right-mid">
        To Do
        <hr/>
        Coming Up <a className="course-status-calendar"> <BsCalendar /> View Calendar </a> 
                

        <hr/>

          <a class="course-link">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
          <br/>
          <a class="course-link" >Lecture CS4550.12631.202410 Sep 11 att 11:45am</a>
          <br/>
          <a class="course-link">CS5610 06 SP23 Lecture Sep 11 at 6pm</a>
          <br/>
      </div>
      </div>
    </div>
  );
}



export default CourseStatus;
