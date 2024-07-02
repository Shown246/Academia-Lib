import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Rating from "react-rating";

const Update = () => {
  const data = useLoaderData();
  const [formData, setFormData] = useState({
    image: data.image,
    book_name: data.book_name,
    quantity: data.quantity,
    author_name: data.author_name,
    category_name: data.category_name,
    rating: data.rating,
  });
  const resetForm = () => {
    setFormData({
      image: "",
      book_name: "",
      quantity: "",
      author_name: "",
      category_name: "",
      rating: "",
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
    console.log(formData);
    axios
      .patch(`https://ph-assignment11-server.vercel.app/update/${data._id}`, formData)
      .then((response) => {
        console.log(response.data);
        swal({
          title: "Item Updated",
          text: "Item updated successfully",
          icon: "success",
          button: "Ok",
        });
        resetForm();
      })
      .catch((err) => {
        console.log(err.message);
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
          <h2 className="text-2xl font-bold mb-4">Update your Book info</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Image URL:</label>
              <input
                className="w-full p-2 border border-river rounded-md focus:outline-none focus:border-flamingo"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Item Name:</label>
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
                initialRating={formData.rating}
                emptySymbol={<img src="/star-empty.png" className="icon" />}
                fullSymbol={<img src="/star-full.png" className="icon" />}
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
              Update Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
