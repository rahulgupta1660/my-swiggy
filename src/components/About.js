import User from "./User";
import Userclass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  // to make api calls
  componentDidMount() {
    console.log("parent component did mount");
  }

  componentDidUpdate() {
    console.log("parent component did update");
  }

  componentWillUnmount() {
    console.log("parent component will unmount");
  }

  render() {
    console.log("parent render");
    return (
      <>
        {/* <Userclass
          name="First"
          location="Chandigarh"
          contact="contact.rahul1910@gmail.com"
        /> */}
        <User
          name="First"
          location="Chandigarh"
          contact="contact.rahul1910@gmail.com"
        />
        <UserContext.Consumer>
          {({ user }) => <p className="font-bold">{user}</p>}
        </UserContext.Consumer>
      </>
    );
  }
}

export default About;
