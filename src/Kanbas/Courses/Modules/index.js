import ModuleList from "./ModuleList";
import './index.css';
import CourseHeader from "../CourseHeader";

function Modules() {
  return (
    <div className="wd-modules-screen mt-3 me-5">
      <CourseHeader />
      <ModuleList />
    </div>
  );
}
export default Modules;
