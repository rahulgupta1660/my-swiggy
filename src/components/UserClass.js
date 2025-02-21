import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    console.log("child contructor called");

    this.state = {
      userInfo: {
        name: "Rahul",
        bio: "hey",
        avatar_url: null,
      },
    };
  }

  async componentDidMount() {
    console.log("child component did mount");
    this.timer = setInterval(() => {
      console.log("Rahul");
    }, 1000);
    const data = await fetch("https://api.github.com/users/rahul1910199");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  shouldComponentUpdate() {}

  componentDidUpdate() {
    console.log("child component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("child component will unmount");
  }

  render() {
    console.log("child render called");
    const { avatar_url, name, bio } = this.state.userInfo;
    return (
      <div className="border rounded-md p-5">
        <img src={avatar_url} className="w-50" />
        <h2>Name : {name}</h2>
        <p>Bio: {bio}</p>
      </div>
    );
  }
}

export default Userclass;

/*
 *
 * -----Mounting------
 *
 * Contructor
 * Render (dummy)
 *     <HTML dummy>
 * Component did mount
 *    <Api Call>
 *    <this.setstate>
 *
 * ----------Update---------
 *
 *  render(api data)
 *  <Html (new api data)
 *  Component did update
 *
 */
