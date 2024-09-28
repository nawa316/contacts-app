import ContactItem from "./ContactItem";
import "../../App.css";
import * as React from "react";

function ContactList() {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.BASE_URL}/api/contacts`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`
          }
        });
        const data = await response.json();
        setContacts(data.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="main_container_contact_list">
      <h2>Contact List</h2>
      <div id="contact">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            image={contact.img_url}
            name={contact.name}
            email={contact.email}
          />
        ))}
      </div>
    </section>
  );
}

export default ContactList;
