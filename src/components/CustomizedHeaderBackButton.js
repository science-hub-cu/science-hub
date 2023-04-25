import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";

export default HeaderBackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        margin: 0,
        padding: 10,
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Icon style={{}} name="left" size={25} color="#fff" />
    </TouchableOpacity>
  );
};
