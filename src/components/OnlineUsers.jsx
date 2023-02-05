import { useCollection } from "../hooks/useCollection";

//styles
import "./onlineUsers.css";

const OnlineUsers = () => {
  const { error, documents } = useCollection("users");
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {documents && documents.map((document) => <div key={user.id}></div>)}
    </div>
  );
};

export default OnlineUsers;
