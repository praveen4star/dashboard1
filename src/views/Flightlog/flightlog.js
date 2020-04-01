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
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">

          <h4 className={classes.cardTitleWhite}>Drone 1</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Order ID","Drone ID", "Merchant Name", "Warehouse Name ", "External Ref.", "External Date","Destination Latitude","Destination Longitude", "Date", "Status"]}
              tableData={[
                ["2","5", "Mer", "War", "22", "22 Feb 2019","55.5", "82.4","22 Feb 2019", "Complete"],

              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">

          <h4 className={classes.cardTitleWhite}>Drone 2</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Order ID","Drone ID", "Merchant Name", "Warehouse Name ", "External Ref.", "External Date","Destination Latitude","Destination Longitude", "Date", "Status"]}
              tableData={[
                ["2","5", "Mer", "War", "22", "22 Feb 2019","55.5", "82.4","22 Feb 2019", "Complete"],

              ]}
            />
          </CardBody>
        </Card>
      </GridItem>



    </GridContainer>
  );
}
