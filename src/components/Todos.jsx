import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { FaCheck } from 'react-icons/fa';
import { MdOutlineRemoveDone } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa';

const Todos = ({ todos, deleteTodo, updateTodo, handleEdit }) => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={{ size: 6, offset: 3 }}>
          <ListGroup>
            {todos.map((item) => (
              <ListGroupItem
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div className={item.done ? 'completed' : ''}>
                  <span>{item.task}</span>
                  <span>{item.description}</span>
                </div>
                <div className="icon-container">
                  {item.done ? (
                    <MdOutlineRemoveDone
                      className="me-3 undone-icon"
                      onClick={() => updateTodo(item.id, true)}
                    />
                  ) : (
                    <FaCheck
                      className="me-3 done-icon"
                      onClick={() => updateTodo(item.id, false)}
                    />
                  )}

                  <CiEdit
                    className="me-3 undone-icon"
                    onClick={() => handleEdit(item)}
                  />
                  <FaTrash
                    className="me-3 trash-icon"
                    onClick={() => deleteTodo(item.id)}
                  />
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Todos;
