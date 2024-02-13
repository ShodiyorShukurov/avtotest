import React from "react";
import { roadSymbol } from "../Mock/question";
import musicTrue from "../assets/to'g'ri.mp3";
import musicFalse from "../assets/xato.mp3";
import musicYouWin from "../assets/youwin.ogg";
import musicYouLost from "../assets/you lost.ogg";
import { useNavigate } from "react-router-dom";

const useQuestions = () => {
  let randomNumber = Math.floor(Math.random() * 100);
  let [index, setIndex] = React.useState(
    randomNumber > 80 ? randomNumber - 20 : randomNumber
  );
  let [count, setCount] = React.useState(1);
  let [question, setQuestion] = React.useState(roadSymbol[index]);
  let [lock, setLock] = React.useState(false);
  let [score, setScore] = React.useState(0);
  let [falseQuestion, setFalseQuestion] = React.useState(0);

  const audioTrueRef = React.useRef(new Audio(musicTrue));
  const audioFalseRef = React.useRef(new Audio(musicFalse));
  const audioYouWinRef = React.useRef(new Audio(musicYouWin));
  const audioYouLostRef = React.useRef(new Audio(musicYouLost));
  const option1Ref = React.useRef(null);
  const option2Ref = React.useRef(null);
  const option3Ref = React.useRef(null);
  const option4Ref = React.useRef(null);

  let option_array = [option1Ref, option2Ref, option3Ref, option4Ref];
  const navigate = useNavigate();

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
      }
    }
  };

  const next = () => {
    if (falseQuestion > 2) {
      navigate("/youlost");
      audioYouLostRef.current.play();
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
      if (count > 20 && score >= 18) {
        navigate("/youwin");
        audioYouWinRef.current.play();
        localStorage.setItem("score", score);
      }
    }
  };

  return {
    next,
    checkAns,
    option1Ref,
    option2Ref,
    option3Ref,
    option4Ref,
    index,
    count,
    question,
    setQuestion,
    score,
    falseQuestion,
  };
};

export default useQuestions;
