import React, {useState} from "react";
import classes from "./NumberTest.module.css";
import Result from "./Result";
import Button from "../UI/Button";

const NumberTest = (props) => {
    const [nextQuestion, setNextQuestion] = useState(0)
    const [inputChecked, setInputCheked] = useState(false)
    const [scoreAnswer, setScoreAnswer] = useState(false)
    const [incorrect, setIncorrect] = useState(false)
    const [count, setCount] = useState([])
    const [alaki, setAlaki] = useState(false);
    const [uUserAnswer, setUserAnswer] = useState("");
    let index = 0;

    const question = props.items[nextQuestion]
    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(uUserAnswer, "userannnnnnnnnn")

        for (let i = 0; i <= 3; i++) {
            if (props.items[nextQuestion].answerOptions[i].id === uUserAnswer) {
                Number(i);
                index = i;
            }
        }
        if (inputChecked) {
            if (nextQuestion < props.items.length - 1) {
                setNextQuestion(nextQuestion + 1)
                setInputCheked(false);
                console.log(scoreAnswer, "scoueAnswer")
                console.log(nextQuestion, "nextQustion")
                console.log(props.items.length)

            } else {


                console.log("sdafsdfas")
                console.log(scoreAnswer, "scoueAnswer")
                console.log(count, "Count");
                setAlaki(true)

            }

            if (incorrect === false) {
                console.log(props.items[nextQuestion].questionId);
                props.items[nextQuestion].answerOptions[index].userAnswer = true;
                setCount(prevCount => {
                    return [...prevCount, props.items[nextQuestion]];
                })
                console.log(count, "111111111111111111111111")
            }
            console.log(question)

        }

    }

    function unCheckRadioButtons() {
        const options = document.querySelectorAll("input");
        const label = document.querySelectorAll("label");
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked === true) {
                console.log(i, "aaaaaaaaaafffffffffffaaa");
                label[i].style.backgroundColor = "#393e60";
                label[i].style.color = "#fFF";
                for (let e = 0; e < label.length; e++) {
                    if (label[i] !== label[e]) {
                        label[e].style.backgroundColor = '#fFF'
                        label[e].style.color = "black";

                    }
                }
            }
        }
    }

    const checkedHandler = (correct, id) => {

        unCheckRadioButtons();
        setUserAnswer(id)
        setInputCheked(1)

        if (correct === true) {
            setScoreAnswer(scoreAnswer + 1);
            setIncorrect(true)
        } else {
            setIncorrect(false)
        }
    }
    return (
        <form onSubmit={formSubmitHandler} className={classes.form}
        >
            {alaki ? (<Result onResult={count}
                />
            ) : (
                <div className={classes.test}>
                    <h1> سوال { nextQuestion + 1 } از 30 </h1>
                    <div className={classes.qustion}>

                        <h1 className={classes.titr} style={{
                            width: question.questionImage === "" ? "100%" : "",
                            margin: !question.questionImage === "" ? "2px" : ""
                        }}> {question.questionText} </h1>
                        <div
                            className={classes.image}> {question.questionImage}</div>
                    </div>
                    <div className={classes.answer}>
                        <ul>
                            {question.answerOptions.map((image) => {


                                return (
                                    <li key={image.id}>
                                        <label className={classes.option}
                                               htmlFor={image.id}
                                               // style={{backgroundColor:image.isCorrect ? "red" : ""}}
                                        >
                                            <input
                                                type="radio"
                                                id={image.id}
                                                name="quest1"
                                                onChange={() => checkedHandler(image.isCorrect, image.id)}
                                                // onChange={this.chechedHandler}


                                            />
                                            {image.answerText ? image.answerText : image.answerImage}
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <Button type="submit"> سوال بعدی </Button>
                </div>
            )}
        </form>
    );
}

export default NumberTest;