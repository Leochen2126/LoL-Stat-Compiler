import React, { useState, useEffect, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import UserService from "../services/user.service";
import gameCode from "../services/gameCode.service";

const Home = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [content, setContent] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeGameCode = (e) => {
    const gameCode = e.target.value;
    setGameCode(gameCode);
  };
  
  const handleSearchGameCode = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      gameCode.getGame(gameCode).then(
        (response) => {
          setContent(response.data);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      {/* <header className="jumbotron">

        <h3>{content}</h3>
      </header> */}
      <Form onSubmit={handleSearchGameCode} ref={form}>
        <div className="form-group">
          <label htmlFor="game code">GameCode</label>
          <Input
                type="text"
                className="form-control"
                name="game code"
                value={gameCode}
                onChange={onChangeGameCode}
              />
        </div>
        <button className="btn btn-primary" disabled={loading}>
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          <span>search</span>
        </button>

        {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
      <div className="gameData">
        <h3>{content}</h3>
      </div>
    </div>
  );
};

export default Home;