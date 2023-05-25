import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { addTodo, editTodoSubmit } from "../redux/action";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function FormTodo({ editFormVisibility, editTodo, cancelUpdate }) {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoObj = {
      id: +new Date(),
      todo: todoValue,
      isCompleted: false,
    };

    dispatch(addTodo(todoObj));
    MySwal.fire("Behasil!", "Jadwal Kamu Berhasil Ditambahkan");
    e.target.reset();
  };

  //Edit Todo
  const editSubmit = (e) => {
    e.preventDefault();
    const editObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };

    dispatch(editTodoSubmit(editObj));
    MySwal.fire("Berhasil!", "Jadwal Kamu Berhasil Diperbaharui");
    e.target.reset();
    cancelUpdate();
  };

  return (
    <>
      {editFormVisibility === false ? (
        <Form
          className="form-group col-md-6 col-12 col-sm-8 mx-auto"
          onSubmit={handleSubmit}
        >
          <Form.Group className="d-flex">
            <input
              type="text"
              className="border border-3 form-control rounded-4"
              onChange={(e) => setTodoValue(e.target.value)}
              placeholder="Tambahkan Jadwal Kamu Disini"
              required
            />
            <Button
              type="submit"
              className="submit ms-2"
              variant="outline-primary"
            >
              Tambah
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <Form
          className="form-group col-md-6 col-12 col-sm-8 mx-auto"
          onSubmit={editSubmit}
        >
          <Form.Group className="d-flex mb-3">
            <input
              type="text"
              value={editValue || ""}
              className="border border-3 form-control rounded-4"
              onChange={(e) => setEditValue(e.target.value)}
              placeholder="Ubah Jadwal Kamu Disini."
              required
            />
            <Button
              type="submit"
              className="submit ms-2"
              variant="outline-primary"
            >
              Perbaharui
            </Button>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              className="btn-sm submit"
              variant="outline-primary"
              style={{ width: "300px" }}
              onClick={() => cancelUpdate()}
            >
              Kembali
            </Button>
          </Form.Group>
        </Form>
      )}
    </>
  );
}

export default FormTodo;
