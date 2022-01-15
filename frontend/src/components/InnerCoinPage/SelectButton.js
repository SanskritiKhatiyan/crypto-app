import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid #F0F8FF",
      borderRadius: 5,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: -10,
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
      cursor: "pointer",
      backgroundColor: selected ? "#004170" : "#F0F8FF",
      color: selected ? "white" : "",
      fontWeight: selected ? 450 : 400,
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
      width: "22%",
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
