import "./about.css";
import ItemList from "./Item-list/ItemList";
const data = require("../../data.json");
const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <div className="a-right-wrapper">
          <h2>What I do?</h2>
          <h4>
            When someone asks me what I can do, I answer with "What would you
            like done so I can make it happen."
          </h4>
          <p>
            "If someone offers you an amazing opportunity and you're not sure
            you can do it, say yes - then learn how to do it later."
            <br />
            <i>-Richard Branson</i>
          </p>
          <div className="st-wrapper">
            <div className="skills">
              <h2>Skills</h2>
              <ul>
                {data.skills.map((item) => (
                  <ItemList item={item.name} id={item.id} />
                ))}
              </ul>
            </div>
            <div className="tools">
              <h2>Tools</h2>
              <ul>
                {data.tools.map((item) => (
                  <ItemList item={item.name} id={item.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
