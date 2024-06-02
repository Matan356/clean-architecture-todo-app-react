/* eslint-disable react/prop-types */
// components/templates/MainLayout.js

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Todo App</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 My Todo App</p>
      </footer>
    </div>
  );
};

export default MainLayout;
