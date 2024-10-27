import { Link } from "react-router-dom";
type projectProps = {
  projectThumbnail: string;
  projectLinks: string;
  projectName: string;
};
const Project = (props: projectProps) => {
  return (
    <div>
      <Link to={props.projectLinks}>
        <div className="mx-3 image-container my-2">
          <img
            className="mx-auto rounded-md"
            src={props.projectThumbnail}
          />
        </div>
      </Link>
      <h3 className="text-center text-indigo-600 font-semibold font-SignikaNegative">
        {props.projectName}
      </h3>
    </div>
  );
};

export default Project;