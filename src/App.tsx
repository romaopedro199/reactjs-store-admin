import AppRoutes from "@/routes/app-routes";
import { ThemeContextProvider } from "@/contexts/theme-context";
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
