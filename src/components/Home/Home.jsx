import React from "react";
import { FaShoppingBag, FaStar, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-sans text-[#856128]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Discover Timeless <span className="text-[#856128]">Jewelry</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#856128]">
              Elegance that never fades. Handcrafted pieces designed for every occasion.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#014421] text-white font-semibold rounded-lg shadow-md hover:bg-[#25f389] transition w-full sm:w-auto">
              Shop Now
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/image/1.jpeg"
              alt="Jewelry"
              className="rounded-2xl shadow-lg w-full sm:w-3/4 md:w-4/5"
            />
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">Featured Collections</h2>
          <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">Explore our best-selling designs</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
            {[
              {
                name: "Diamond Necklace",
                price: "$1,200",
                img: "/image/2.jpeg",
              },
              {
                name: "Gold Ring",
                price: "$750",
                img: "/image/3.jpeg",
              },
              {
                name: "Elegant Bracelet",
                price: "$560",
                img: "/image/4.jpeg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img src={item.img} alt={item.name} className="w-full h-56 sm:h-64 object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-pink-600 font-bold">{item.price}</p>
                  <button className="mt-3 px-4 py-2 bg-[#014421] text-white rounded-lg hover:bg-[#25f389] transition w-full sm:w-auto">
                    <FaShoppingBag className="inline-block mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            For over 20 years, we’ve been crafting jewelry with passion and dedication.
            Each piece tells a story of elegance, tradition, and love — designed to make
            your moments unforgettable.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {[
              { name: "Sophia", text: "The necklace I bought is stunning. Excellent craftsmanship!" },
              { name: "Aarav", text: "Fast delivery and beautiful packaging. Highly recommend!" },
              { name: "Emma", text: "Absolutely love my gold ring, it’s elegant and classy." },
            ].map((review, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-xl shadow-md text-center">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="mt-3 text-gray-700 italic text-sm sm:text-base">"{review.text}"</p>
                <h4 className="mt-4 font-semibold text-gray-800 text-sm sm:text-base">- {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-pink-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Join Our Newsletter</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">Get exclusive offers and updates in your inbox.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full sm:w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="px-6 py-3 bg-[#014421] text-white rounded-lg hover:bg-[#25f389] transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Elegant Jewels. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
