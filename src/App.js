import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img height={150} src="img.jpg" alt="avatar" />;
}

function Intro() {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat
      tempore facilis eos expedita, perspiciatis, rerum, voluptate hic unde
      omnis nemo? Sit possimus est dolorum tempore fugit, eaque expedita
      reiciendis obcaecati illum! At modi eius voluptas illum vel sunt ullam
      quae facilis ipsum aliquid ipsa, cum doloremque. Quas, aspernatur totam.
    </p>
  );
}

function SkillList() {
  return (
    <div>
      <Skill skill="React" emoji="💪" color="red" />
      <Skill skill="javascript" emoji="💪" color="green" />
      <Skill skill="web design" emoji="💪" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <span style={{ backgroundColor: props.color, marginLeft: "10px" }}>
      <span>{props.skill}</span>
      <span> {props.emoji}</span>
    </span>
  );
}
