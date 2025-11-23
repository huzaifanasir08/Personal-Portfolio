import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { BsGithub } from "react-icons/bs";

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

          <div style={{display:"flex", alignItems:"center", justifyContent:"center", columnGap:"10px"}}>
          <Button variant="primary" href={props.blogLink} target="_blank">
          Details
        </Button>
          <Button variant="primary" href={props.ghLink} target="_blank">
          Github
        </Button>
          </div>

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
