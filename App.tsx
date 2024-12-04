import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { store } from "./app/data/createStore";
import { RootNavigation } from "./app/ui/navigation";


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
