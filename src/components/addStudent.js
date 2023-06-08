import React, { useState } from 'react';
const host = 5000
const AddBook = () => {
  const [book, setBook] = useState({ name: '', book_id: '', code: '', description: '' });

  const handleClick = async(e) => {
    e.preventDefault();

    console.log(book);
    const response = await fetch(`http://localhost:${host}/addBook`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: book.name, book_id: book.book_id, code:book.code, description:book.description})
        });
        const json = await response.json()
        console.log(json);
    setBook({ name: '', book_id: '', email: '', phone_no: '' });
  };

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Book</h2>
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
            value={book.name}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="book_id" className="form-label">
            Book ID
          </label>
          <input
            type="text"
            className="form-control"
            id="book_id"
            name="book_id"
            value={book.book_id}
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
            value={book.email}
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
            value={book.phone_no}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <button
          disabled={book.phone_no.length < 10 || book.phone_no.length > 10 || book.email.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
