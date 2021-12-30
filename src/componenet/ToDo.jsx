import React from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, isComplet, removeTodo } from "../Redux/slice";

export default function ToDo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [singleTodo, setSingleTodo] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addTodo({ todo: singleTodo, isCompleted: false }));
    setSingleTodo("");
  };
  return (
    <div>
      movies
      <hr></hr>
      <Form>
        <Row className="align-items-center">
          <Col xs="">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Add Movies
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Add Movies"
              value={singleTodo}
              onChange={(e) => setSingleTodo(e.target.value)}
            />
          </Col>

          <Col xs="auto">
            <Button className="mb-2" variant="warning" onClick={handleAdd}>
              Add
            </Button>
          </Col>
        </Row>
      </Form>
      {todos.map((todo, index) => {
        return (
          <div id="movitem">
            <Card border="warning" id="movies" style={{ width: "14rem" }}>
              <Card.Header
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
              >
                {" "}
                {todo.todo}
              </Card.Header>
            </Card>
            <Button
              className="mb-2"
              id="deleteButton"
              variant="warning"
              onClick={() => {
                dispatch(removeTodo(index));
              }}
            >
              Delete
            </Button>
            <Button
              className="mb-2"
              variant="warning"
              onClick={() => {
                dispatch(isComplet(index));
              }}
            >
              Watched
            </Button>
            <br />
          </div>
        );
      })}
    </div>
  );
}
