import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return (
      <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <h1>ジャンケンに挑戦しよう！</h1>
        <Link to="/rsp">
          <h1>じゃんけんページへ</h1>
        </Link>
      </div>
    );
  }
}