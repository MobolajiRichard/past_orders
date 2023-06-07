import Svg, { Path } from "react-native-svg";

export default function User(props) {
  return (
    <Svg width="26" height="30" viewBox="0 0 26 30" fill="none">
      <Path
        d="M1 28.5V27C1 22.0294 5.02944 18 10 18H16C20.9705 18 25 22.0294 25 27V28.5"
        stroke="#B5B5B5"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M13.0001 13.5C9.68637 13.5 7.00008 10.8137 7.00008 7.5C7.00008 4.18629 9.68637 1.5 13.0001 1.5C16.3137 1.5 19.0001 4.18629 19.0001 7.5C19.0001 10.8137 16.3137 13.5 13.0001 13.5Z"
        stroke="#B5B5B5"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
}
