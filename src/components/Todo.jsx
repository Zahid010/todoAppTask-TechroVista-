import React from 'react';
import { ListGroup, ListGroupItem, Badge, Container } from 'reactstrap';



export default function Todo({todo,onTodoEdit,onTodoDelete}){
    return(
        <div>
                <ListGroupItem className="">
                    <div className="d-flex justify-content-between align-items-center">
                        <p>
                            {todo}
                        </p>
                        <div>
                            <i class="fas fa-edit mr-3" onClick={onTodoEdit}></i>
                            <i class="fas fa-trash" onClick={onTodoDelete}></i>
                        </div>
                    </div>
                </ListGroupItem>

        </div>
)
}

