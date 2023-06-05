import React, { useState } from 'react';
const host = 5000
const AddStudent = () => {
  const [student, setStudent] = useState({ name: '', student_id: '', email: '', phone_no: '' });

  const handleClick = async(e) => {
    e.preventDefault();

    console.log(student);
    const response = await fetch(`http://localhost:${host}/addStudent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: student.name, student_id: student.student_id, email:student.email, phone_no:student.phone_no})
        });
        const json = await response.json()
        console.log(json);
    setStudent({ name: '', student_id: '', email: '', phone_no: '' });
  };

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Student</h2>
      <form className="my-3" onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            value={student.name}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="student_id" className="form-label">
            Student ID
          </label>
          <input
            type="text"
            className="form-control"
            id="student_id"
            name="student_id"
            value={student.student_id}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={student.email}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone_no" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone_no"
            name="phone_no"
            value={student.phone_no}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <button
          disabled={student.phone_no.length < 10 || student.phone_no.length > 10 || student.email.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
