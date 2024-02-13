import React from "react";
import { Col, Row, Typography, Button, Image, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./medium.scss";
import musicYouLost from "../../assets/you lost.ogg";
import useQuestions from "../../Hooks/useQuestions";

const MediumPage = () => {
  // let randomNumber = Math.floor(Math.random() * 100);
  const {
    option1Ref,
    option2Ref,
    option3Ref,
    option4Ref,
    next,
    checkAns,
    count,
    question,
    score,
    falseQuestion,
  } = useQuestions();

  const audioYouLostRef = React.useRef(new Audio(musicYouLost));
  const [seconds, setSeconds] = React.useState(5 * 60);
  const navigate = useNavigate();

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          navigate("/youlost");
          audioYouLostRef.current.play();
          localStorage.setItem("score", score);
          localStorage.setItem("false", falseQuestion);
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <section className="medium-section">
      <div className="container">
        <Row>
          <Col span={6}>
            <Typography.Title
              level={2}
              style={{ margin: 0, PaddingTop: "30px", color: "white" }}
            >
              O&apos;rta sinov boshlandi
            </Typography.Title>
            <Link to="/home">
              <Button type="primary" style={{ marginTop: "20px" }}>
                Bosh sahifa
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
              <Image
                src={question.symbol_img}
                alt={"Yo'l belgisi"}
                style={{ width: "180px", height: "180px" }}
              />
              <Typography.Paragraph
                style={{ fontSize: "24px", color: "white" }}
              >
                Bu qanday belgi?
              </Typography.Paragraph>
              <button
                className="ans-btn"
                ref={option1Ref}
                onClick={(evt) => checkAns(evt, 1)}
              >
                {question.option1}
              </button>
              <button
                className="ans-btn"
                style={{
                  margin: "20px",
                }}
                ref={option2Ref}
                onClick={(evt) => checkAns(evt, 2)}
              >
                {question.option2}
              </button>
              <button
                className="ans-btn"
                ref={option3Ref}
                onClick={(evt) => checkAns(evt, 3)}
              >
                {question.option3}
              </button>
              <button
                className="ans-btn"
                style={{
                  margin: "20px",
                }}
                ref={option4Ref}
                onClick={(evt) => checkAns(evt, 4)}
              >
                {question.option4}
              </button>
              <Button type="primary" block onClick={next}>
                Keyingisi
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
                {remainingSeconds < 10
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
                To&apos;g&apos;ri savollar: {score}
              </Typography.Title>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MediumPage;
