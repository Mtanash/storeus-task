import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  const renderedElement = useRoutes(routes);

  return <>{renderedElement}</>;
}

export default App;
