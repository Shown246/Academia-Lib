import { useState } from "react";
import swal from "sweetalert";
import Rating from "react-rating";
import axios from "axios";

const AddBook = () => {
  const [formData, setFormData] = useState({
    image: "",
    book_name: "",
    quantity: "",
    author_name: "",
    category_name: "",
    short_description: "",
    rating: "",
    content: ""
  });

  const resetForm = () => {
    setFormData({
      image: "",
      book_name: "",
      quantity: "",
      author_name: "",
      category_name: "",
      short_description: "",
      rating: "",
      content: ""
    });
  };

  const handleRating = (value) => {
    setFormData({ ...formData, rating: value });
  };
  const handleQuantity = (value) => {
    const quantity = parseInt(value);
    setFormData({ ...formData, quantity: quantity });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ph-assignment11-server.vercel.app/addBook", formData,
      {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        swal({
          title: "Item Added",
          text: "Item added successfully",
          icon: "success",
          button: "Ok",
        });
        resetForm();
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          button: "Ok",
        });
      });
  };

  return (
    <>
      <div className="container90 text-teal">
        <div className="max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Add New Book in the Library
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Image URL:</label>
              <input
                className="w-full p-2 border border-river  rounded-md focus:outline-none focus:border-flamingo"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Book Name:</label>
              <input
                className="w-full p-2 border border-river rounded-md focus:outline-none focus:border-flamingo"
                type="text"
                name="book_name"
                value={formData.book_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Category Name:
              </label>
              <select
                className="w-full p-2 border border-river rounded-md focus:outline-none focus:border-flamingo"
                name="category_name"
                value={formData.category_name}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="History">History</option>
                <option value="Romance">Romance</option>
                <option value="Mystery">Mystery</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Short Description:
              </label>
              <textarea
                className="w-full p-2 border border-river rounded-md focus:outline-none focus:border-flamingo"
                name="short_description"
                value={formData.short_description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Quantity:</label>
              <input
                className="w-full p-2 border border-river rounded-md focus:outline-none focus:border-flamingo"
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={(e) => handleQuantity(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Rating:</label>
              <Rating
                emptySymbol={<img src="star-empty.png" className="icon" />}
                fullSymbol={<img src="star-full.png" className="icon" />}
                placeholderSymbol={<img src="star-full.png" className="icon" />}
                onClick={(value) => {
                  handleRating(value);
                }}
                placeholderRating={formData.rating}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Author Name:
              </label>
              <input
                className="w-full p-2 border border-river rounded-md focus:outline-none focus:border-flamingo"
                type="text"
                name="author_name"
                value={formData.author_name}
                onChange={handleChange}
                required
              />
            </div>
            <button
              className="w-full  py-2 px-4 rounded-md  focus:outline-none focus:bg-genoa btn hover:text-genoa hover:bg-teal text-white lg:font-semibold bg-genoa lg:text-lg text-xs"
              type="submit"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
