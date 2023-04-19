import { Groups } from "@screens/Groups";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Laoding from "@components/Loading";


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});



  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups /> : <Laoding />}
    </ThemeProvider>
  );
}


