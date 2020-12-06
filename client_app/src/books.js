import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query GetAllBooks {
    books {
      bookID,
      title,
      author
    }
  }
`;

const Books = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>Error...</h2>
    }

    const { books } = data;
    console.log(books);

    return (
        <div>
            <table style={{ border: '1px solid red', margin:'auto' }}>
                <tbody>
                    {
                        books.map((book) => {
                            return (
                                <tr key={book.bookID}>
                                    <td>Title : {book.title}</td>
                                    <td>Author : {book.author}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Books;