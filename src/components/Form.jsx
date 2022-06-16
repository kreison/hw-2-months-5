import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
    const dispath = useDispatch();
    const users = useSelector(state => state.users)
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([

    ])
    useEffect((e) => {
        dispath({ type: 'ADD_POST', payload: posts });
        console.log(users);
    }, [posts])
    return (
        <div>
            <input
                onChange={
                    (e) => setInput(e.target.value)
                }
                value={ input }
                type="text" />
            <button
                onClick={ (e) => setPosts([...posts, { name: input, id: Date.now() }])
                }
            >
                add
            </button>
        </div>
    );
};

export default Form;