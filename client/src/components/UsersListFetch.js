import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from './UsersList';

const UsersListFetch = () => {

    const [data, setData] = useState({ users: [] });

    const fetchData = async () => {
        const result = await axios.get('/users')
        setData(result.data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    const deleteUser = async (id) => {
        await axios.delete(`/users/${id}`)
        fetchData(data)
            .catch(err => console.log(err))
    }

    return (
        <UsersList users={data} deleteUser={deleteUser} />
    );
}

export default UsersListFetch;