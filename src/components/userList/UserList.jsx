// style
import "./UserList.css";

function UserList({ users, deleteUser }) {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner">
                <img
                  src={user.image}
                  alt={user.name}
                  height={180}
                  width={180}
                />
                <h3>
                  {user.lastName},{user.firstName}, {user.age} age
                </h3>
                <p>From: {user.from}</p>
                <p>Sharingan: {user.job}</p>
                <p>Gender: {user.gender}</p>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
