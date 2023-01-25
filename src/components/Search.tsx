const Search = () => {
  return (
    <form>
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-800 before:mt-0.5 after:flex-1 after:border-t after:border-gray-800 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0 text-lg">Search & filter</p>
      </div>
      <div className="mb-6 flex gap-5">
        <input
          type="text"
          className="form-control px-2 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
          placeholder="Eg. almond milk"
        />
          <button
            type="button"
            className="inline-block px-4 py-2 bg-pink-300 text-black font-medium text-sm leading-snug uppercase rounded-lg shadow-md hover:bg-pink-400 hover:text-white hover:shadow-lg focus:bg-pink-500 focus:shadow-lg focus:text-white focus:outline-none focus:ring-0 active:bg-pink-600 active:text-white active:shadow-lg transition duration-150 ease-in-out"
            >
            <i className="fa-solid fa-magnifying-glass bg-pink-300 hover:bg-pink-400 focus:bg-pink-500 active:bg-pink-600 "></i> Search
          </button>
      </div>
    </form>
  )
};

export default Search;

/*
<section class="h-screen">
  <div class="px-6 h-full text-gray-800">
   <form>
          

          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">Or</p>
          </div>

          <div class="mb-6">
            <input
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email address"
            />
          </div>

          <!-- Password input -->
          <div class="mb-6">
            <input
              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
            />
          </div>

          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                >Remember me</label
              >
            </div>
            <a href="#!" class="text-gray-800">Forgot password?</a>
          </div>

          <div class="text-center lg:text-left">
            <button
              type="button"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <a
                href="#!"
                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Register</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
*/