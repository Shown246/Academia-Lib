import swal from "sweetalert";
const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    swal({
      title: "Subscribed",
      text: "You have successfully subscribed to our newsletter",
      icon: "success",
      button: "Ok",
    });
  }
  return (
    <div>
      <div className="mt-12">
        <div className="">
          <div className="text-center">
            <h3 className="text-3xl">Subscribe to our Newsletter</h3>
            <p>Subscribe to our newsletter and get the latest news and updates on our library.</p>
          </div>
          <form onSubmit={handleSubmit} className="text-center my-6">
            <input required type="email" placeholder="Enter your email" className="py-2 px-6 text-teal"/>
            <button type="submit" className=" px-3 py-[6px] hover:text-genoa hover:rounded-lg hover:bg-teal text-white lg:font-semibold bg-genoa lg:text-lg text-xs">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter