import React from "react";

import './App.css';
import Exams from "./component/Exams/Exams";

function App() {
    const questions = [
        {
            questionText: 'کدامیک از تابلو‌های زیر به مفهوم آن است که پیچ‌هایی در جلو' +
                ' وجود دارد؟',
            questionImage: "",
            questionId: 1,

            answerOptions: [
                {
                    answerText: '',
                    answerImage: <img src="images/Turn right.png" alt="adf"/>,
                    id: Math.random().toString(),
                    isCorrect: false,
                    userAnswer:false,
                    checked:false
                },
                {
                    answerText: '',
                    answerImage: <img src="images/Intersection.png" alt="adf"/>,
                    id: Math.random().toString(),
                    isCorrect: false,
                    userAnswer:false,
                    checked:false
                },
                {
                    answerText: '',
                    answerImage: <img src="images/Successive screws.png" alt="adf"/>,
                    id: Math.random().toString(),
                    isCorrect: true,
                    userAnswer:false,
                    checked:false
                },
                {
                    answerText: '',
                    answerImage: <img src="images/small streed.png" alt="adf"/>,
                    id: Math.random().toString(),
                    isCorrect: false,
                    userAnswer:false,
                    checked:false
                },
            ],
        },
        {
            questionText: 'نام این تابلو چیست ؟',
            questionImage: <img src="images/zirgozar.png" alt="alaki"/>,
            questionId: 2,
            answerOptions: [
                {
                    answerText: 'شروع محل پیاده روی',
                    answerImage: "",
                    id: Math.random().toString(),
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'گذر گاه پیاده',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'زیر گذر یا روگذر',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'سیب سربالایی 10 درصد',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'نام این تابلو چیست ؟',
            questionImage: <img src="images/not Turn rihght.png" alt="dda"/>,
            questionId: 3,
            answerOptions: [
                {
                    answerText: 'پیچ به چپ',
                    answerImage: "",
                    id: Math.random().toString(),
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'گردش به راست مموع',
                    answerImage: "",
                    id: Math.random().toString(),
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'گردش به چپ مموع',
                    answerImage: "",
                    id: Math.random().toString(),
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'پیج به راست ',
                    answerImage: "",
                    id: Math.random().toString(),
                    isCorrect: false,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'مفهوم این تابلو چیست ؟',
            questionImage: <img src="images/tagato.png" alt="FJ"/>,
            questionId: 4,
            answerOptions: [
                {
                    answerText: 'ورود به راه اصل از راست',
                    answerImage: "",
                    id: Math.random().toString(),

                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'تقاطع',
                    answerImage: "",
                    id: Math.random().toString(),

                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'ورود به راه اصل از چپ',
                    answerImage: "",
                    id: Math.random().toString(),

                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'تقاطع فرعی به اصلی',
                    answerImage: "",
                    id: Math.random().toString(),

                    isCorrect: false,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'این تابلو بیانگر چیست ؟',
            questionImage: <img src="images/bargasb.png" alt='asdff'/>,
            questionId: 5,
            answerOptions: [
                {
                    answerText: 'پیش انتخاب مسیر',
                    answerImage: "",
                    id: Math.random().toString(),

                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'خطوط ویژه عبور',
                    answerImage: "",
                    id: Math.random().toString(),

                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'راهنمای مسیر',
                    answerImage: "",
                    id: Math.random().toString(),

                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'عبور از هر دو سمت مجاز است',
                    answerImage: "",
                    id: Math.random().toString(),

                    isCorrect: false,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'کدامیک از تابلو های زیر جز تابلوهای محلی نمی‌باشد ؟',
            questionImage: "",
            questionId: 6,
            answerOptions: [
                {
                    answerText: '',
                    id: Math.random().toString(),

                    answerImage: <img src="images/pishmasir.png" alt='dfd'/>,
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: '',
                    id: Math.random().toString(),

                    answerImage: <img src='images/hamgara.png' alt='sdf'/>,
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: '',
                    id: Math.random().toString(),

                    answerImage: <img src='images/dorbin.png' alt='asdf'/>,
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: '',
                    id: Math.random().toString(),

                    answerImage: <img src='images/hashie.png' alt='asdf'/>,
                    isCorrect: false,
                    userAnswer:false,
                },
            ],
        },


    ];
    return (
        <div className="App">
            <Exams  test={questions}/>
        </div>
    );
}

export default App;
