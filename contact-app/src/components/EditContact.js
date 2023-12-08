import React, { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";

const EditContact = (props) => {
  const location=useLocation();
  const {id,name,email} = location.state.contact;
  const [state, setState] = useState({
    name: name,
    email: email
  });

  // console.log(out);
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    const updatedContact = {
      id: id, 
      name: state.name,
      email: state.email,
    };
    props.updateContactHandler(updatedContact);
    setState({ name: "", email: "" });
    // console.log(props);
    navigate('/');
  };

  return (
    <div className="ui main">
      <h2>Update Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
