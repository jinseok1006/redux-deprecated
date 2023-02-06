import React, { useState, useCallback } from 'react';
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { add, toggle } from '@/modules/todos';

function Todos({ todos, onAdd, onToggle }) {
  return (
    <Box>
      <TodoInputs onAdd={onAdd} />
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
      </List>
    </Box>
  );
}

const TodoInputs = React.memo(function ({ onAdd }) {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = useCallback(
    (text) => {
      if (text === '') return alert('빈칸입니다.');
      onAdd(text);
      setText('');
    },
    [onAdd]
  );

  return (
    <Box>
      <TextField type="text" onChange={onChange} value={text} />
      <Button variant="contained" onClick={() => handleAdd(text)}>
        ADD
      </Button>
    </Box>
  );
});

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  const { id, text, done } = todo;

  return (
    <ListItemButton onClick={() => onToggle(id)} selected={done}>
      <ListItemText primary={text} />
    </ListItemButton>
  );
});

export function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onAdd = useCallback((text) => dispatch(add(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);

  return <Todos todos={todos} onAdd={onAdd} onToggle={onToggle} />;
}
