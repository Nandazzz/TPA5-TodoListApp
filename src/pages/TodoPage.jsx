import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Container, Row } from "react-bootstrap";
import FormTodo from "../components/FormTodo";
import Todos from "../components/Todos";

function TodoPage() {
  const dispatch = useDispatch();
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  return (
    <>
      <PageTitle children="Apa Rencana Kamu Hari Ini ?" />
      <Container className="mb-5">
        <Row>
          <FormTodo
            editFormVisibility={editFormVisibility}
            editTodo={editTodo}
            cancelUpdate={cancelUpdate}
          />
        </Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-center flex-column">
          <Todos
            handleEditClick={handleEditClick}
            editFormVisibility={editFormVisibility}
          />
        </Row>
      </Container>
    </>
  );
}

export default TodoPage;
