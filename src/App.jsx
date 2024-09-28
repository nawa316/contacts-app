import "./App.css";
import ContactList from "./components/contact/ContactList";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contacts Apps</title>
      <link rel="stylesheet" href="style.css" />
      <link rel="" href="" />
      <main className="main_container">
        <h1 className="main_container-heading">Contact Apps</h1>
        <section className="main_container_add_contact">
          <h2>Add New Contact</h2>
          <div className="container_add_contact">
            <input
              id="formFirstName"
              className="form"
              type="text"
              placeholder="First Name"
            />
            <input
              id="formLastName"
              className="form"
              type="text"
              placeholder="Last Name"
            />
            <input
              id="formEmail"
              className="form"
              type="text"
              placeholder="Email"
            />
            <input
              id="formPhoto"
              className="form"
              type="text"
              placeholder="Photo Link"
            />
            <button className="button1">Add</button>
          </div>
        </section>
        <ContactList />
      </main>
    </>
  );
}

export default App;
