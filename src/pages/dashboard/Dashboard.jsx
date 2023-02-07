import ProjectList from "../../components/ProjectList";
import { useCollection } from "../../hooks/useCollection";
//styles
import "./dashboard.css";
import ProjectFilter from "./ProjectFilter";

const Dashboard = () => {
  const { documents, error } = useCollection("projects");
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error & <p className="error">{error}</p>}
      {documents && <ProjectFilter />}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
};

export default Dashboard;
