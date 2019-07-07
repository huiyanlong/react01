import React from 'react';
// import logo from './logo.svg';
import './TodoList.css';
import 'antd/dist/antd.css';
import { Input, Button} from 'antd';

function TodoList() {
  return (
    <div className="App">
      <Input placeholder="Basic usage" style={{ width:'250px', marginRight:'10px'}}/>
      <Button type="primary">Primary</Button>
    </div>
  );
}

export default TodoList;
