import React from "react";
import NumberTest from "./NumberTest";
import classes from "./Exams.module.css";

const Exams = (props) => {
const testhaa=props.test;
    return(
        <div className={classes.exams}>
            <NumberTest items={testhaa}></NumberTest>
        </div>
    );

}
export default Exams;