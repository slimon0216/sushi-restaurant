import React, { ChangeEvent, useState } from "react";
import "./main.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface State {
  text: string;
}

const TextInput: React.FC<{}> = () => {
  const [state, setState] = useState<State>({ text: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, text: event.target.value });
  };

  return (
    <div className="textInput">
      <TextField
        className="textinput"
        label="請輸入備註!"
        variant="outlined"
        value={state.text}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        multiline
        rows={13.5} // Number of input lines
        style={{ 
          marginTop: 0,
          borderRadius:"5px",
        }} // Optional: To adjust vertical position if needed
      />
      {/* <Typography variant="h4">{state.text}</Typography> */}
    </div>
  );
};

export default TextInput;






// export const TextInput = ({}) => {
//   return (
//     <div className="Cost1">
//       {/* <img className="image-25_7083" src={Search} alt="Search" /> */}
//       <Typography
//         className="Costtext"
//         letterSpacing={0}
//         fontSize={24}
//         fontWeight={400}
//         fontFamily="Roboto"
//       >
//         金額 ： 100
//       </Typography>
//     </div>
//   );
// };

