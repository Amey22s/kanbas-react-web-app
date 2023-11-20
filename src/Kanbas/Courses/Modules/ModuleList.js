import React from "react";
import { useParams } from "react-router-dom";
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
// import db from "../../Database";
import './index.css';
// import { LuGripVertical } from 'react-icons/lu'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addModule,
  updateModule,
  deleteModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as service from "./service";


function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    service.findModulesForCourses(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  useEffect(() => {
    service.findModulesForCourses(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    service.createModuleForCourse(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    service.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async (module) => {
    const status = await service.updateModule(module);
    dispatch(updateModule(module));
    dispatch(setModule({ name: "Module Name", description: "Module Description" }));
  }

  return (
    <ul className="list-group module">
      <li className="list-group-item mb-4">
        <h4>Add / Update Module</h4>
        <hr />
        <input
          value={module.name}
          className="form-control"
          onChange={(e) =>
            dispatch(
              setModule({
                ...module,
                name: e.target.value,
              })
            )
          }
        />
        <br />
        <textarea
          value={module.description}
          className="form-control"
          onChange={(e) =>
            dispatch(
              setModule({
                ...module,
                description: e.target.value,
              })
            )
          }
        />
        <br />
        <button
          className="btn btn-success"
          onClick={handleAddModule}
        >
          Add Module
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => handleUpdateModule(module)}
        >
          Update Module
        </button>
      </li>


      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          <>
          <li key={index} className="list-group-item-secondary px-3 pe-3 py-2">
            <div className="wd-module-item-action-buttons float-end">
              <button
                className="btn btn-primary"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              <button
                className="btn btn-danger ms-1"
                onClick={() => handleDeleteModule(module._id)}
              >
                Delete
              </button>
            </div>
            <h5>{module.name}
            <HiOutlineEllipsisVertical className="wd-symbol"/>
            <AiOutlinePlus className="wd-symbol"/>
            </h5>
          </li>
          <ul className="list-group">
            <li className="list-group-item">
            {module.description}
            <HiOutlineEllipsisVertical className="wd-symbol"/>
            <AiFillCheckCircle className="wd-symbol" color="green"/>
            </li>
          </ul>
          <br></br>
          </>
      ))
    }
    </ul>
  );
}
export default ModuleList
 