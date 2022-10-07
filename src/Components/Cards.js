import React from "react";
import { Card, CardBody, CardContainer, CardTitle } from "./Styles/Card.styled";

const CardsData = [
  {
    cardTitle: "Sam Jhon",
    cardBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, modi. quos, repellendus aut, nisi, itaque quae eius est odit voluptates doloribus",
  },
  {
    cardTitle: "Sam Jhon",
    cardBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, modi. quos, repellendus aut, nisi, itaque quae eius est odit voluptates doloribus",
  },
  {
    cardTitle: "Sam Jhon",
    cardBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, modi. quos, repellendus aut, nisi, itaque quae eius est odit voluptates doloribus",
  },
  {
    cardTitle: "Sam Jhon",
    cardBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, modi. quos, repellendus aut, nisi, itaque quae eius est odit voluptates doloribus",
  },
  {
    cardTitle: "Sam Jhon",
    cardBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, modi. quos, repellendus aut, nisi, itaque quae eius est odit voluptates doloribus",
  },
  {
    cardTitle: "Sam Jhon",
    cardBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, modi. quos, repellendus aut, nisi, itaque quae eius est odit voluptates doloribus",
  },
];

function Cards() {
  return (
    <CardContainer>
      {CardsData?.map((data, index) => {
        return (
          <Card key={index}>
            <CardTitle> {data.cardTitle} </CardTitle>
            <CardBody>{data.cardBody}</CardBody>
          </Card>
        );
      })}
    </CardContainer>
  );
}

export default Cards;
