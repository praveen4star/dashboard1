import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import {Dropdown,  DropdownButton, Button} from 'react-bootstrap';
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function AllOrders() {
  const classes = useStyles();
  return (
    <div>
    <a  href="#" style={{color:"blue"}}>Back to Home</a>
    <h5><a  href="#" style={{color:"blue", fontWeight:"400"}}>New Fligh Logs</a></h5>
    <div style={{textAlign:"right"}}>

      <input placeholder="Hours"/>
      <input placeholder="Landing"/>
      <div style={{background:"white",color:"black"}}>
      <Table
        width={"20%"}
        tableHeaderColor="black"
        tableHead={["Date","Name", "Aircraft", "RPIC", "SENSO", "Night","Training","Day", "Night","" ]}
        tableData={[
          [<input placeholder= "12/02/2020"/>,
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>,
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>,
          <input placeholder="2.5" />,
          < input placeholder="0" Type= "number" step="1"/> ,
          <input />,<input />, <input />,<input />, <Button   variant="light">Delete</Button>],

        ]}

      />
      </div>
    </div>


    </div>
  );
}
