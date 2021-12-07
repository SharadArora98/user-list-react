import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from './AddUser.module.css';

export  default function AddUser (props) {
    const [age, setAge] = useState('');
    const [username, setUsername] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        }
        if (+age < 1) {
            return;
        }
        console.log(username, age);
        setUsername('');
        setAge('');
    }

    const onChangeAge = (event) => {
        setAge(event.target.value);
    }

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    return (
        <Card className = {styles.input}>
            <form onSubmit = {onSubmitHandler}>
                <label htmlFor = 'username'>Username</label>
                <input id = 'username' value = {username} onChange = {onChangeUsername} type = 'text'></input>
                <label htmlFor = 'age'>Age</label>
                <input id = 'age' value = {age} type = 'number' onChange = {onChangeAge}></input>
                <Button type = 'submit'>Add User</Button>
            </form>
        </Card>
    );
}