import { FC } from "react";
import { Container, Content, Image } from "./styles";
import carlos_and_charlie_A from "../../assets/carlos_and_charlie_A.jpg";
import carlos_and_charlie_B from "../../assets/carlos_and_charlie_B.jpg";

const Chicago: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          Little Lemon is owned by two friends, Carlos and Charlie, who moved to the United States to pursue their shared dream of owning a restaurant.
        </p>
        <p className="lead-txt">
          To craft the menu, Carlos relies on family recipes and his experience as a chef in Italy. Charlie does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
      </Content>
      <Image>
        <img src={carlos_and_charlie_A} alt="Carlos and Charlie" />
        <img src={carlos_and_charlie_B} alt="Carlos and Charlie" />
      </Image>
    </Container>
  );
};

export default Chicago;