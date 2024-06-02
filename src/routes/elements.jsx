/* eslint-disable react/display-name */
import { Suspense, lazy } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<>...loading</>}>
      <Component {...props} />
    </Suspense>
  );

// Pages
export const TodoList = Loadable(lazy(() => import("../")));
export const CreateTodo = Loadable(lazy(() => import("src/pages/About")));
export const TodoDetails = Loadable(lazy(() => import("src/pages/Home")));
