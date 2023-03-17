import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetBookQuery } from '../features/api/apiSlice';
import EditBook from './EditBook';

const Edit = () => {
  const { bookId } = useParams();
  const { data: book, isLoading, isError, } = useGetBookQuery(bookId);
  let content = null;
  if (isLoading) content = <div>Loading.....</div>
  if (!isLoading && isError) content = <div>There is an error.....</div>
  if (!isLoading && !isError && book) content = <EditBook book={book}></EditBook>

  return (
    <div>
      {content}
    </div>
  );
};

export default Edit;