import React from "react";
import { useParams } from "react-router-dom";
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import db from "../../Database";
import './index.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group module">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          <>
          <li key={index} className="list-group-item-secondary px-3 pe-3 py-2">
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
 