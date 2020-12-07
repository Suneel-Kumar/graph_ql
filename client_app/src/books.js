import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query GetAllBooks {
    books {
      bookId,
      title,
      author
    }
  }
`;

const Books = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { books } = data;

    return (
        <div>
            <h2>Books List</h2>
            <table border="1.5" style={{ margin : 'auto'}}>
                <thead></thead>
                <tbody>
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                    {
                        books.map(Book => {
                            return (
                                <tr key={Book.bookId}>
                                    <td>{Book.bookId}</td>
                                    <td>{Book.title}</td>
                                    <td>{Book.author}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* <table style={{  }}>
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
            </table> */}
        </div>
    )
}

export default Books;