import React from "react";
import { Col, Row, Typography, Button, Image, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./easy.scss";
import { roadSymbol } from "../../Mock/question";
import musicTrue from "../../assets/to'g'ri.mp3";
import musicFalse from "../../assets/xato.mp3";

const EasyPage = () => {
  // let randomNumber = Math.floor(Math.random() * 100);
  const [seconds, setSeconds] = React.useState(8 * 60); // 8 minutes in seconds
  const navigate = useNavigate();

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          navigate("/youlost");
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  let [index, setIndex] = React.useState(0);
  let [count, setCount] = React.useState(1);
  let [question, setQuestion] = React.useState(roadSymbol[index]);
  let [lock, setLock] = React.useState(false);
  let [score, setScore] = React.useState(0);
  let [falseQuestion, setFalseQuestion] = React.useState(0);

  const audioTrueRef = React.useRef(new Audio(musicTrue));
  const audioFalseRef = React.useRef(new Audio(musicFalse));
  const option1Ref = React.useRef(null);
  const option2Ref = React.useRef(null);
  const option3Ref = React.useRef(null);
  const option4Ref = React.useRef(null);

  let option_array = [option1Ref, option2Ref, option3Ref, option4Ref];

  const checkAns = (evt, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        evt.target.classList.add("correct");
        audioTrueRef.current.play();
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        evt.target.classList.add("wrong");
        audioFalseRef.current.play();
        option_array[question.ans - 1].current.classList.add("correct");
        setLock(true);
        setFalseQuestion(++falseQuestion);
        if (falseQuestion === 3) {
          navigate("/youlost");
          setSeconds(8);
        }
      }
    }
  };

  const next = () => {
    if (count ===  20) {
      navigate("/youwin");
    }
    if (lock === true) {
      setIndex(++index);
      setCount(++count);
      setQuestion(roadSymbol[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };

  return (
    <section className="easy-section">
      <div className="container">
        <Row>
          <Col span={6}>
            <Typography.Title
              level={2}
              style={{ margin: 0, PaddingTop: "30px", color: "white" }}
            >
              Easy test started
            </Typography.Title>
            <Link to="/home">
              <Button type="primary" style={{ marginTop: "20px" }}>
                Back
              </Button>
            </Link>
          </Col>
          <Col span={12}>
            <Flex
              vertical
              justify="center"
              align="center"
              style={{ paddingTop: "80px" }}
            >
              <Image src={question.symbol_img} alt="" width="180px" />
              <Typography.Paragraph
                style={{ fontSize: "24px", color: "white" }}
              >
                Bu qanday belgi?
              </Typography.Paragraph>
              <Button
                className="ans-btn"
                block
                ghost
                ref={option1Ref}
                onClick={(evt) => checkAns(evt, 1)}
              >
                {question.option1}
              </Button>
              <Button
                className="ans-btn"
                block
                style={{
                  margin: "20px",
                }}
                ghost
                ref={option2Ref}
                onClick={(evt) => checkAns(evt, 2)}
              >
                {question.option2}
              </Button>
              <Button
                block
                className="ans-btn"
                ghost
                ref={option3Ref}
                onClick={(evt) => checkAns(evt, 3)}
              >
                {question.option3}
              </Button>
              <Button
                block
                className="ans-btn"
                ghost
                style={{
                  margin: "20px",
                }}
                ref={option4Ref}
                onClick={(evt) => checkAns(evt, 4)}
              >
                {question.option4}
              </Button>
              <Button type="primary" block onClick={next}>
                Next
              </Button>
            </Flex>
          </Col>
          <Col span={6}>
            <Flex
              vertical
              justify="center"
              align="start"
              style={{ paddingTop: "30px" }}
            >
              <Typography.Title level={3} style={{ color: "white", margin: 0 }}>
                Qolgan vaqt: {"0" + minutes}:{" "}
                {remainingSeconds < 9
                  ? "0" + remainingSeconds
                  : remainingSeconds}
              </Typography.Title>
              <Typography.Title
                level={3}
                style={{
                  color: "white",
                  margin: 0,
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Qolgan savollar: {count}/20
              </Typography.Title>
              <Typography.Title
                level={3}
                style={{ color: "white", margin: 0, marginBottom: "10px" }}
              >
                Xato savollar: {falseQuestion}/2
              </Typography.Title>
              <Typography.Title level={3} style={{ color: "white", margin: 0 }}>
                To'g'ri savollar: {score}
              </Typography.Title>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default EasyPage;
