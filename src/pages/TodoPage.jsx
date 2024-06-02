// pages/HomePage.js
import MainLayout from "../components/templates/MainLayout";
import TodoPage from "./TodoPage";

const HomePage = () => {
  return (
    <MainLayout>
      <TodoPage />
    </MainLayout>
  );
};

export default HomePage;
