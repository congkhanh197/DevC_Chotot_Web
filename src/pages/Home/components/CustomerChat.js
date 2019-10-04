import React from "react";
import { fb } from "../../../utils/fb";

class CustomerChat extends React.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      fb(FB => this.timeout && FB.XFBML.parse());
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    delete this.timeout;
  }

  render() {
    return (
      <div
        className="fb-customerchat"
        style={{ position: "absolute", zIndex: 100, bottom: 50, right: 50 }}
        attribution="setup_tool"
        page_id={117044256362678}
        theme_color="#ffb900"
        logged_in_greeting="Hi! Can I help you?"
        logged_out_greeting="Hi! Can I help you?"
      />
    );
  }
}

export default CustomerChat;
