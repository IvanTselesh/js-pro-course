import React, {ChangeEventHandler, useState} from "react";
import {Input} from "../../Input/Input";
import {Item} from "../Item/ToDoItem";
import {Button} from "../../Button/Button";
import styles from "./style.module.css";

const generateUniqueId = () => {
    return "_" + Math.random().toString(16).slice(2);
};

interface IToDo {
    text: string
    id: string
    checked: boolean
}

const todos = [
    {text: "Test1", id: generateUniqueId()},
    {text: "Test2", id: generateUniqueId()},
    {text: "Test3", id: generateUniqueId()},
    {text: "Test4", id: generateUniqueId()},
    {text: "Test5", id: generateUniqueId()},
];

export const ToDoList = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState<IToDo[]>([])

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setText(event.target.value)
    };

    const addToDo = () => {
        if(text.length < 3) {
            return;
        }
        const newToDo = {
            text: text,
            id: generateUniqueId(),
            checked: false,
        }

        const newTodos = todos.concat([newToDo])
        setTodos(newTodos)
        setText("")
    };

    const removeToDo = (id: string) => {
        const newTodos = todos.filter((item) => {
            if (item.id === id) {
                return false
            }
            return true
        });
        setTodos(newTodos)
    }

    const checkToDo = (id: string) => {
        const newTodos = todos.map((item) => {
            if(item.id === id) {
                item.checked = !item.checked;
                return item;
            }
            return item;
        })
        setTodos(newTodos)
    }

    return (
        <div className={styles.listWrap}>
            <div className={styles.listWrapSearch}>
                <Input value={text} onChange={handleOnChange} />
                {text.length > 3 ? <Button text="Add" onClick={addToDo} disabled={false} styleBtn="button" /> : null}
            </div>
            {todos.map((item) => {
                const onClickRemove = () => {
                    removeToDo(item.id)
                }
                const onClickChecked = () => {
                    checkToDo(item.id)
                }
                return <Item key={item.id} checked={item.checked} onClickChecked={onClickChecked} text={item.text} onClickRemove={onClickRemove} />
            })}
        </div>
    )
}