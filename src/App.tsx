import AppRoutes from "@/routes/AppRoutes";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { Provider } from "react-redux";
import store from "@/redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AppRoutes />
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;
