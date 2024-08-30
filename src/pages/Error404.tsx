const Error404 = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-5rem)] ">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-100">404</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-300 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mt-2">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 mt-6 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Error404;
