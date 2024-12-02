// style
import "./App.css";

import { useState } from "react";
// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import UserList from "./components/userlist/UserList";
import NewUserForm from "./components/newuser/NewUserForm.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  // add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  // close modal
  const closeModal = (e) => {
    if (e.target.classList.value === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        {!users.length && (
          <div className="no-users">
            <h2>No users</h2>
          </div>
        )}
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      <Footer />
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
    </div>
  );
}

export default App;
// {
//   id: 4,
//   image:
//     "https://rukminim2.flixcart.com/image/850/1000/l5bd5zk0/poster/0/9/p/medium-butcutnw14545-uchiha-madara-matte-finish-poster-butcute-original-imaggyssc8j8zzsa.jpeg?q=90&crop=false",
//   firstName: " Madara",
//   lastName: "Uchiha",
//   age: 30,
//   from: "KONOXA",
//   job: "Mangekyo Sharingan,Eternal Mangekyo Sharingan,Rinnegan,Ten-Tails Jinchuriki",
//   gender: "Male",
// }
