import React from "react";
import { Button} from "@mui/material";

const CustomButton = (props) => {
  return (
    <Button 
        variant={props.variant}
        color={props.color} 
        onClick={props.onClick}
        >{props.title}
    </Button>
  );
};

export default CustomButton;
