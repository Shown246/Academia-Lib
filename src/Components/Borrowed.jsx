import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContextProvider";
import axios from "axios";
import swal from "sweetalert";

const Borrowed = () => {
  const [loading, setLoading] = useState(true);
  const [changed, setChanged] = useState(false);
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`https://ph-assignment11-server.vercel.app/borrowedbooks?email=${user.email}`)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      });
  }, [user.email, changed]);

  const handleReturn = (bookId, _id) => {
    axios.patch(`https://ph-assignment11-server.vercel.app/increase/${bookId}`).then(() => {
      axios.delete(`https://ph-assignment11-server.vercel.app/return/${_id}`).then(() => {
        swal(
          "Success",
          "Book returned successfully",
          "success"
        );
        setChanged(!changed);
      });
    })
    .catch((error) => {
      swal(
        "Error",
        `${error.message}`,
        "error"
      );
    });
  }

  return (
    <>
      <div className="container90 mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Your Borrowed Book List
          </h2>
          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-dots loading-lg "></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.length === 0 ? (
                <div className="text-center text-2xl font-semibold">
                  You have not added any book yet
                </div>
              ) : (
                books.map((book) => (
                  <div
                    key={book._id}
                    className="rounded-lg shadow-lg shadow-tarawera overflow-hidden"
                  >
                    <img
                      src={book.image}
                      alt={book.book_name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-2xl font-semibold mb-2">
                        {book.book_name}
                      </h3>
                      <p className="mb-2">Category: {book.category_name}</p>
                      <p className="mb-2">
                        Borrowed Date: {book.borrowed_date}
                      </p>
                      <p className="mb-2">Return Date: {book.return_date}</p>
                      <div className="flex justify-around">
                        <button
                          className="px-4 py-1 rounded-lg hover:text-genoa hover:bg-teal text-white bg-genoa lg:text-lg text-xs w-full"
                          onClick={() => handleReturn(book.book_id, book._id)}
                        >
                          Return Book
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Borrowed;
