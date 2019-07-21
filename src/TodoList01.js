import React, {
  Component,
  Fragment
} from "react"

import TodoItem from './TodoItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render() {
    return ( <
      Fragment >
      <
      div >
      <
      label
      for = "new-todo" > Add a todo < /label> <
      input placeholder = "我是你开飞机发你"
      value = {
        this.state.inputValue
      }
      onChange = {
        this.handleInputClick.bind(this)
      }
      /> <
      button onClick = {
        this.handleBtnClick.bind(this)
      } > 提交 < /button> < /
      div > <
      ul > {
        this.getTodoItem()
      } <
      /ul> < /
      Fragment >
    );
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return ( <
        TodoItem key = {
          index
        }
        item = {
          item
        }
        index = {
          index
        }
        handleDelete = {
          this.handleItemDelete
        }
        />
        // <li key={index} onClick={this.handleItemDelete.bind(this,index)}>
        //   {item}
        // </li>
      );
    })
  }
  handleInputClick(e) {
    // console.log(e.target.value);
    // console.log(this);
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }

  handleBtnClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ""
    }));
  }

  handleItemDelete(index) {
    // console.log(index);
    const list = [...this.state.list];
    list.splice(index, 1);
    // this.setState({
    //   list: list
    // });
    this.setState((preState) => {
      const list = [...preState.list];
      list.splice(index, 1);
      return {
        list: list
      }
    });
  }

export default App;