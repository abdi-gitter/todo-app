import { useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { useState } from 'react';
import Todos from '../components/Todos';
import { Button } from 'reactstrap';
import ModalForm from '../components/ModalForm';
import { toast } from 'react-toastify';

const url = 'https://cwbarry.pythonanywhere.com/simple_todo/';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const toogle = () => {
    setModal(!modal);
    setEditData(null);
  };

  const handleEdit = (item) => {
    setModal(true);
    setEditData(item);
  };

  const getTodos = async () => {
    const res = await axios.get(url);
    console.log(res.data);
    setTodos(res.data);
  };

  const addTodo = async (data) => {
    try {
      const res = await axios({
        method: 'post',
        url: url,
        data: data,
      });

      toast.success('A new todo is added!');

      console.log(res);
      getTodos();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios({
        method: 'delete',
        url: `${url}${id}/`,
      });

      toast.success('Todo is deleted successfully!');

      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (id, current) => {
    try {
      await axios({
        method: 'patch',
        url: `${url}${id}/`,
        data: { done: !current },
      });

      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async (id, data) => {
    try {
      await axios({
        method: 'put',
        url: `${url}${id}/`,
        data: data,
      });

      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Layout>
      <div className="d-flex justify-content-end align-items-end">
        <Button className="mt-2 me-2" color="primary" onClick={toogle}>
          Add
        </Button>
      </div>
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        handleEdit={handleEdit}
      />

      <ModalForm
        toogle={toogle}
        modal={modal}
        addTodo={addTodo}
        editData={editData}
        editTodo={editTodo}
      />
    </Layout>
  );
};

export default Home;
