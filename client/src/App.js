import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddContact from "./pages/AddContact";
import ContactList from "./pages/ContactList";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/Contacts" component={ContactList} />
        <Route
          key="AddContact"
          exact
          path="/AddContact"
          component={AddContact}
        />
        <Route
          key="editContact"
          exact
          path={`/editContact/:id`}
          component={AddContact}
        />
        <Route path="/*" component={Error} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
