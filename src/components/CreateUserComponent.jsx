import React, { Component, useEffect, useState } from 'react'
import UserService from '../services/UserService';
import { useParams, useNavigate } from 'react-router-dom';

const CreateUserComponent = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (id === '_add') {
            return
        } else {
            UserService.getUserById(id)
            .then((res) => {
                let user = res.data;
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setEmail(user.email);
            });
        }
    }, []);
 
    const saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = { firstName: firstName, lastName:lastName, email: email };
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if (id === '_add') {
            UserService.createUser(user).then(res => {
                navigate('/users');
            });
        } else {
            UserService
            .updateUser(user, id).then(res => {
                navigate('/users');
            });
        }
    }

    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const changeEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const cancel = () =>  {
        navigate('/users');
    }

    const getTitle = () => {
        if (id === '_add') {
            return <h3 className="text-center">Add User</h3>
        } else {
            return <h3 className="text-center">Update User</h3>
        }
    }
    return (
    <div>
            <br></br>
    <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
            {
                getTitle()
            }
        <div className="card-body">
        <form>
        <div className="form-group">
            <label> First Name: </label>
            <input placeholder="First Name" 
                name="firstName" className="form-control"
                value={firstName} 
                    onChange={changeFirstNameHandler} />
        </div>
        <div className="form-group">
            <label> Last Name: </label>
            <input placeholder="Last Name" 
                name="lastName" className="form-control"
                    value={lastName} 
                    onChange={changeLastNameHandler} />
        </div>
        <div className="form-group">
            <label> Email : </label>
                <input placeholder="Email Address" 
                    name="email" className="form-control"
                    value={email} 
                        onChange={changeEmailHandler} />
        </div>

            <button className="btn btn-success" 
                onClick={saveOrUpdateUser}>Save
            </button>
            <button className="btn btn-danger" 
                onClick={cancel} 
                    style={{ marginLeft: "10px" }}>Cancel
        </button>
        </form>
        </div>
    </div>
    </div>
    </div>
</div>
    )
    
}

export default CreateUserComponent