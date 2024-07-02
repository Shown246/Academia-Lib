import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const AllBooks = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [view, setView] = useState("list");
  const [selected, setSelected] = useState(false);

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  const handleSelected = () => {
    setSelected(!selected);
  };
  const navigate = useNavigate();
  let count = 1;
  useEffect(() => {
    axios
      .get("https://ph-assignment11-server.vercel.app/allBooks" , {
        withCredentials: true,
      })
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selected) {
      const filtered = books.filter((book) => book.quantity > 0);
      setFilteredBooks(filtered);
    }
    else {
      setFilteredBooks(books);
    }
  }, [selected, books]);

  return (
    <div className="container90 mt-20">
      <div className="mb-8">
        <ToggleButtonGroup
          orientation="horizontal"
          value={view}
          exclusive
        >
          <ToggleButton 
            value="list" 
            aria-label="list"
            onChange={(event, nextView) => handleChange(event, nextView)}
          >
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton 
            value="module"
            aria-label="module" 
            onChange={(event, nextView) => handleChange(event, nextView)}
          >
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={handleSelected}
          >
            {selected ? <><CheckIcon sx={{ color: "#EF4936" }}/> <p className="text-flamingo">Show Available Books</p></> : <p>Show Available Books</p>}
            
          </ToggleButton>
        </ToggleButtonGroup>
          
      </div>
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-dots loading-lg "></span>
        </div>
      ) : view === "list" ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="text-base lg:text-lg font-semibold text-tarawera">
                  Book Name
                </th>
                <th className="text-base lg:text-lg font-semibold text-tarawera">
                  Author Name
                </th>
                <th className="text-base lg:text-lg font-semibold text-tarawera">
                  Category
                </th>
                <th className="text-base lg:text-lg font-semibold text-tarawera">
                  Rating
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book._id}>
                  <td className="font-medium text-sm lg:text-base">
                    {count++}
                  </td>
                  <td className="font-medium text-sm lg:text-base">
                    {book.book_name}
                  </td>
                  <td className="font-medium text-sm lg:text-base">
                    {book.author_name}
                  </td>
                  <td className="font-medium text-sm lg:text-base">
                    {book.category_name}
                  </td>
                  <td className="font-medium text-sm lg:text-base">
                    <Rating
                      emptySymbol={
                        <img src="star-empty-small.png" className="icon" />
                      }
                      fullSymbol={
                        <img src="star-full-small.png" className="icon" />
                      }
                      initialRating={book.rating}
                      readonly
                    />
                  </td>
                  <td>
                    <button
                      className="px-4 py-1 rounded-lg hover:text-genoa hover:bg-teal text-white bg-genoa lg:text-lg text-xs"
                      onClick={() => {
                        navigate(`/update/${book._id}`);
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
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
                <p className="mb-2">
                  <Rating
                    emptySymbol={
                      <img src="star-empty-small.png" className="icon" />
                    }
                    fullSymbol={
                      <img src="star-full-small.png" className="icon" />
                    }
                    initialRating={book.rating}
                    readonly
                  />
                </p>
                <p className="mb-2">Author Name: {book.author_name}</p>
                <p className="mb-2">Category: {book.category_name}</p>
                <div className="flex justify-around">
                  <button
                    className="px-4 py-1 rounded-lg hover:text-genoa hover:bg-teal text-white bg-genoa lg:text-lg text-xs w-full"
                    onClick={() => {
                      navigate(`/update/${book._id}`);
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
