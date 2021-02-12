import React,{useState} from 'react';
import Todo from './Todo';

import {ListGroup,Container,FormGroup,Label,Input,Button} from 'reactstrap'



export default function TodoList({}){
    const [todos,setTodos] = useState([]);
    const [todo,setTodo] = useState("");
    const [editTodo,setEditTodo] = useState({
        index:0,
        text:0,
    });


    const addTodo = ()=>{
        setTodos([todo,...todos])
        setTodo("")
    }

    const handleTodoEdit = (index)=>{
        setEditTodo({
            index,
            text:todos[index]
        })
    }

    const handleTodoDelete = (index)=>{
        const updatedTodos = [...todos];
        updatedTodos.splice(index,1);

        setTodos(updatedTodos)
    }

    const handleSaveEditTodo = ()=>{
        const updatedTodos = [...todos]
        updatedTodos[editTodo.index] = editTodo.text;

        setTodos(updatedTodos)
        setEditTodo({
            index:0,
            text:""
        })
    }


    return(
        <Container>
            <FormGroup>
                <Label>Todo</Label>
                <Input type="text" name="todo" placeholder="Add Todo" onChange={e=>setTodo(e.target.value)} value={todo} />
            </FormGroup>
            <Button outline color="primary"onClick={addTodo} className="mb-3 mr-auto" >Add Todo</Button>
            <ListGroup>
                {todos.map((todo,index)=><Todo todo={todo} onTodoEdit={()=>handleTodoEdit(index)} onTodoDelete={()=>handleTodoDelete(index)} />)}
            </ListGroup>
            <FormGroup className="mt-5">
                <Label>Edit Todo</Label>
                <Input type="text" name="todo" placeholder="Edit Todo" onChange={e=>setEditTodo({
                    ...editTodo,
                    text:e.target.value
                })} value={editTodo.text} />
            </FormGroup>
            <Button outline color="primary"onClick={handleSaveEditTodo} className="mb-3 mr-auto" >Edit Todo</Button>
        </Container>
)
}

