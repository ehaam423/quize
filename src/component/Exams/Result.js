import React, {useState} from "react";
import classes from "./Result.module.css";
import Button from "../UI/Button";
import answer from "./NumberTest.module.css";

const Result = (props) => {

    const [show ,setShow] = useState(<br/>);
    const [hideButton , setHideButton] = useState(false)
    const falseQuest = props.onResult;
    // if (falseQuest.length === 0 )setHideButton(true)
    const onClickHandler = (e) => {
        e.preventDefault();
       setHideButton(true);
        setShow(
            <div className={classes.falsequest}>
                <h1 > سوالات اشتباه </h1>
                {falseQuest.map((fQuest)=>{
                    return(
                      <div className={answer.form}>
                          <div className={answer.qustion}>

                              <h1> {fQuest.questionText} </h1>
                              <div className={answer.image}> {fQuest.questionImage}</div>
                          </div>
                          <div className={answer.answer}>
                              <ul>
                                  {fQuest.answerOptions.map((image) => {


                                      return (

                                          <li key={image.id}>
                                              <label style={{backgroundColor: image.userAnswer===true ? "rgba(255, 0, 0, 0.48)" : image.isCorrect===true ? "rgba(2, 81, 2, 0.60)" : ""}}>
                                              {image.answerText ? image.answerText : image.answerImage}
                                              </label>

                                          </li>
                                      )
                                  })}
                              </ul>
                          </div>

                      </div>
                    );
                } )}
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.fQuestion}>تعداد سوال غلط = {props.onResult.length}</h1>
            {(props.onResult.length <= 3) ?
                <h1 className={classes.pas}> شما قبول شدید </h1> :
                <h1 className={classes.rad}> شما مردود شدید </h1>
            }
            <div key={falseQuest.questionId}
                 className={classes.form}
            >
                {show}
            </div>
            { !hideButton ? <Button  type="submit" onClick={onClickHandler} > نمایش سوالات غلط</Button> : <br/> }
            {/*<Button  type="submit" onClick={onClickHandler} > نمایش سوالات غلط</Button>*/}
        </div>
    );
}

export default Result;