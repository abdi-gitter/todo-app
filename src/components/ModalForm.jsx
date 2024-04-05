import { useEffect } from 'react';
import { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';

const ModalForm = ({ toogle, modal, addTodo, editData, editTodo }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTask(editData?.task || '');
    setDescription(editData?.description || '');
    setDone(editData?.done || false);
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task, description, done);
    if (editData) {
      editTodo(editData.id, { task, description, done });
    } else {
      addTodo({ task, description, done });
    }
    setTask('');
    setDescription('');
    setDone(false);
    toogle();
  };

  return (
    <Modal isOpen={modal} toggle={toogle}>
      <ModalHeader toggle={toogle}>
        {editData ? 'Update' : 'Add'} Todo
      </ModalHeader>
      <ModalBody>
        <Form className="my-3" onSubmit={handleSubmit}>
          <FormGroup style={{ width: '18rem' }}>
            <Label for="task">Enter Task</Label>
            <Input
              type="text"
              name="task"
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </FormGroup>
          <FormGroup style={{ width: '18rem' }}>
            <Label for="description">Enter Description</Label>
            <Input
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label check>
              <Input
                type="checkbox"
                name="done"
                id="done"
                checked={done}
                onChange={(e) => setDone(e.target.checked)}
              />
              Completed
            </Label>
          </FormGroup>
          <div className="d-flex justify-content-end ">
            <Button className="me-4" color="primary" type="submit">
              {editData ? 'Update' : 'Add'}
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ModalForm;
