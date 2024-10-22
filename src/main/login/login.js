import { useState } from 'react';
import './Login.css';

function Login() {
    const [values, setValues] = useState({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        Email: "",
        Gender: "",
        Birthday: "",
    });

    const [tasks, setTasks] = useState([]);
    const [svv, setSvv] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setTasks((prev) => [...prev, values]);
        setValues({ 
            FirstName: "",
            LastName: "",
            PhoneNumber: "",
            Email: "",
            Gender: "",
            Birthday: "",
        });
    };

    const handleClick = (task) => {
        // Replace svv with the clicked task's details
        setSvv(task);
    };

    return (
        <>
            <div className='main'>
                <h1>Form</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor='FirstName'>First Name</label>
                    <input type='text' placeholder='Enter Your First Name' required name='FirstName' value={values.FirstName} onChange={handleChange} />

                    <label htmlFor='LastName'>Last Name</label>
                    <input type='text' placeholder='Enter Your Last Name' required name='LastName' value={values.LastName} onChange={handleChange} />

                    <label htmlFor='PhoneNumber'>Phone Number</label>
                    <input type='text' placeholder='Phone Number' required name='PhoneNumber' value={values.PhoneNumber} onChange={handleChange} />

                    <label htmlFor='Email'>Email</label>
                    <input type='email' placeholder='Enter Your Email' required name='Email' value={values.Email} onChange={handleChange} />

                    <label>Gender</label>
                    <input type='radio' name='Gender' required value='Male' onChange={handleChange} /> Male
                    <input type='radio' name='Gender' value='Female' onChange={handleChange} /> Female
                    <input type='radio' name='Gender' value='Other' onChange={handleChange} /> Other

                    <label htmlFor='Birthday'>Birthday</label>
                    <input type='date' name='Birthday' value={values.Birthday} onChange={handleChange} />

                    <button type='button' onClick={() => setValues({ FirstName: "", LastName: "", PhoneNumber: "", Email: "", Gender: "", Birthday: "" })}>
                        Reset
                    </button>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        
            <div className='main'>
                {tasks.map((task, index) => (
                    <div className='boxx' onClick={() => handleClick(task)} key={index}>
                        <p>{task.FirstName} {task.LastName}</p>
                        <p>{task.PhoneNumber}</p>
                    </div>
                ))}
                </div>
                

                {svv.FirstName && (
            <div className='main'>
                    <div className='boo'>
                        <p>First Name: {svv.FirstName}</p>
                        <p>Last Name: {svv.LastName}</p>
                        <p>Phone Number: {svv.PhoneNumber}</p>
                        <p>Email: {svv.Email}</p>
                        <p>Gender: {svv.Gender}</p>
                        <p>Birthday: {svv.Birthday}</p>
                    </div>
            </div>
                )}
        </>
    );
}

export default Login;
