import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {props.isOnDemand && (
          <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {!props.isOnDemand ? "" : "GitHub"}
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
