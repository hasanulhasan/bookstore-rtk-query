import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditBookMutation, useGetBookQuery } from '../features/api/apiSlice';

const EditBook = ({ book }) => {
  const { bookId } = useParams();
  const { name: initialName, author: initialAuthor, thumbnail: initialThumbnail, price: initialPrice, rating: initialRating, featured: initialFeature } = book;

  const [editBook, { isLoading, isSuccess, isError }] = useEditBookMutation();
  const navigate = useNavigate();

  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [price, setPrice] = useState(initialPrice);
  const [rating, setRating] = useState(initialRating);
  const [featured, setFeatured] = useState(initialFeature);

  const resetForm = () => {
    setName('')
    setAuthor('')
    setThumbnail('')
    setPrice('');
    setRating('')
    setFeatured(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook({
      id: bookId,
      data: {
        name, author, thumbnail, price, rating, featured
      }
    })
    resetForm();
    navigate('/')
  }

  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          <form className="book-form" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label for="lws-bookName">Book Name</label>
              <input required className="text-input" type="text" id="lws-bookName" name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="space-y-2">
              <label for="lws-author">Author</label>
              <input required className="text-input" type="text" id="lws-author" name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div className="space-y-2">
              <label for="lws-thumbnail">Image Url</label>
              <input required className="text-input" type="text" id="lws-thumbnail" name="thumbnail"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)} />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label for="lws-price">Price</label>
                <input required className="text-input" type="number" id="lws-price" name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)} />
              </div>

              <div className="space-y-2">
                <label for="lws-rating">Rating</label>
                <input required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(parseInt(e.target.value))} />
              </div>
            </div>

            <div className="flex items-center">
              <input id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" checked={featured}
                onChange={() => setFeatured(!featured)}
              />
              <label for="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">Edit Book</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default EditBook;