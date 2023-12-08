import React,{useRef} from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const inputEle = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return(
        <ContactCard  
        key={contact.id} 
        contact={contact}
        clickHandler={deleteContactHandler}
        />
    );
  });

  const getSearchTerm = () => {
    // console.log(inputEle.current.value);
    props.searchKeyword(inputEle.current.value);
  }

  return (
    <div className="main" >
      <h2>Contact List 
        <Link to="/add">
          <button className="ui button blue right" style={{float:"right"}}>Add Contact</button>
        </Link> 
      </h2>
      <div className="ui search center" >
        <div className="ui icon input" style={{width:"100%"}}>
          <input 
            ref={inputEle}
            type="text" 
            placeholder="Search Contacts" 
            className="prompt" 
            value={props.term} 
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No Contacts Found"}</div>
    </div>
  );
}

export default ContactList;