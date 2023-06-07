import { Redirect } from "expo-router";
import { useFonts } from "expo-font";
import { FONTS } from "../constant";
import { ActivityIndicator } from "react-native";

const index = () => {
  //register fonts
  const [fontsLoaded] = useFonts({
    mont_medium: FONTS.montserrat_medium,
    mont_semibold: FONTS.montserrat_semibold,
    mont_bold: FONTS.montserrat_bold,
    raleway: FONTS.raleway_bold,
  });

  //return a loading indicator if font's is still loading
  if (!fontsLoaded) return <ActivityIndicator />;

  //after loading font, go to the order page
  return <Redirect href="/tabs" />;
};

export default index;
