import SwitchSelector from "react-native-switch-selector";
import { buttonBackgroundColor } from "../../../styles/colors";
/*
*/
const CustomSwitchSelector = ({options,onPress,...props}) => {
return (<SwitchSelector
  options={options}
  initial={0}
  valuePadding={1}
  buttonMargin={2}
  buttonColor={buttonBackgroundColor}
  hasPadding
  height={30}
  width={20}
  {...props}
  style={{width:250}}
  onPress={value => onPress(value)}
/>);
}

export default CustomSwitchSelector;