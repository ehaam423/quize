import React from "react";

import './App.css';
import Exams from "./component/Exams/Exams";

// import InitialValue from "./component/Exams/InitialValue";

function App() {
    const quizzes = [{
        azmon: [
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
                        userAnswer: false,
                        checked: false
                    },
                    {
                        answerText: '',
                        answerImage: <img src="images/Intersection.png" alt="adf"/>,
                        id: Math.random().toString(),
                        isCorrect: false,
                        userAnswer: false,
                        checked: false
                    },
                    {
                        answerText: '',
                        answerImage: <img src="images/Successive screws.png"
                                          alt="adf"/>,
                        id: Math.random().toString(),
                        isCorrect: true,
                        userAnswer: false,
                        checked: false
                    },
                    {
                        answerText: '',
                        answerImage: <img src="images/small streed.png" alt="adf"/>,
                        id: Math.random().toString(),
                        isCorrect: false,
                        userAnswer: false,
                        checked: false
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
                        userAnswer: false,
                    },
                    {
                        answerText: 'گذر گاه پیاده',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'زیر گذر یا روگذر',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'سیب سربالایی 10 درصد',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
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
                        userAnswer: false,
                    },
                    {
                        answerText: 'گردش به راست مموع',
                        answerImage: "",
                        id: Math.random().toString(),
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'گردش به چپ مموع',
                        answerImage: "",
                        id: Math.random().toString(),
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'پیج به راست ',
                        answerImage: "",
                        id: Math.random().toString(),
                        isCorrect: false,
                        userAnswer: false,
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
                        userAnswer: false,
                    },
                    {
                        answerText: 'تقاطع',
                        answerImage: "",
                        id: Math.random().toString(),

                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'ورود به راه اصل از چپ',
                        answerImage: "",
                        id: Math.random().toString(),

                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'تقاطع فرعی به اصلی',
                        answerImage: "",
                        id: Math.random().toString(),

                        isCorrect: false,
                        userAnswer: false,
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
                        userAnswer: false,
                    },
                    {
                        answerText: 'خطوط ویژه عبور',
                        answerImage: "",
                        id: Math.random().toString(),

                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'راهنمای مسیر',
                        answerImage: "",
                        id: Math.random().toString(),

                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'عبور از هر دو سمت مجاز است',
                        answerImage: "",
                        id: Math.random().toString(),

                        isCorrect: false,
                        userAnswer: false,
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
                        userAnswer: false,
                    },
                    {
                        answerText: '',
                        id: Math.random().toString(),

                        answerImage: <img src='images/hamgara.png' alt='sdf'/>,
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: '',
                        id: Math.random().toString(),

                        answerImage: <img src='images/dorbin.png' alt='asdf'/>,
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: '',
                        id: Math.random().toString(),

                        answerImage: <img src='images/hashie.png' alt='asdf'/>,
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'این شکل بیانگر چیست؟',
                questionImage: <img src="images/nogte kor.png" alt='asdff'/>,
                questionId: 7,
                answerOptions: [
                    {
                        answerText: 'سواری در حال سبقت گرفتن از موتور سوار است',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'سبقت غیر مجاز',
                        id: Math.random().toString(),

                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'موتور سوار در نقطه کور سواری قرار دارد',
                        id: Math.random().toString(),

                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'عدم رانندگی بین خطوط',
                        id: Math.random().toString(),

                        answerImage: '',
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'برای گردش یا تغییر مسیر به چپ اگر وسیله نقلیه' +
                    ' موتوری فاقد چراغ راهنما باشد باید ...؟',
                questionImage: "",
                questionId: 8,
                answerOptions: [
                    {
                        answerText: 'دست راست به طرف بالا نگه داشت',
                        id: Math.random().toString(),

                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'دست چپ به طرف بالا نگه داشت',
                        id: Math.random().toString(),

                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'دست چپ به طرف پایین نگه داشت',
                        id: Math.random().toString(),

                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'دست چپ به طور افقی نگه داشت',
                        id: Math.random().toString(),

                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'بلند کردن دست های پلیس به دو طرف به طور افقی به چه' +
                    ' معناست ؟',
                questionImage: "",
                questionId: 9,
                answerOptions: [
                    {
                        answerText: 'کلیه وسایل نقلیه که مقابل پلیس قرار گرفته‌اند باید بایستند',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'کلیه وسایل نقلیه که پشت سر پلیس قرار گرفته‌اند باید بایستند',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'کلیه استفاده کنندگان از راه که جهت حرکت آنها در امتداد جهت نشان داده شده با دست یا دست های پلیس می باشد باید بایستند',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'کلیه وسایل نقلیه که در امتداد دست پلیس قرار گرفته‌اند عبور کنند',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'مفهوم خط منقطع چیست ؟',
                questionImage: "",
                questionId: 10,
                answerOptions: [
                    {
                        answerText: 'ایست و عبور',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'حرکت مجاز',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'حرکت با احتیاط',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'حرکت با احتیاط و در صورت لزوم توقف می نماییم',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'راننده شکل مقابل دچار چه خلافی شده است؟',
                questionImage: <img src="images/adamrayat.png" alt='asdff'/>,
                questionId: 11,
                answerOptions: [
                    {
                        answerText: 'عدم رانندگی بین خطوط',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'عدم رعایت فاصله طولی مناسب',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'حرکت با سرعت زیاد',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'سبقت مجاز',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'کدام مورد زیر صحیح نمی باشد؟',
                questionImage: "",
                questionId: 12,
                answerOptions: [
                    {
                        answerText: 'کنترل دوره ای تایر زاپاس مهم است',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'عدم تنظیم چرخ ها در ساییدگی نامتوازن دایره ها موثر است',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'یکی از نکات مهم در خصوص سیستم ترمز ، کنترل روغن ترمز است',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'در صورتی که باد تایر بیش از حد مجاز باشد ، سطح اتصال تایر با زمین در بیشترین حد خود قرار می گیرد',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'بر اساس قوانین مصوب رانندگانی که از راه فرعی وارد راه اصلی می شوند ...؟',
                questionImage: "",
                questionId: 13,
                answerOptions: [
                    {
                        answerText: 'باید سریعاً وارد راه اصلی گردند ',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'پیش از ورود ، توقف و با رعایت حق تقدم وارد راه اصلی شود',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'سریعاً به سمت چپ گردش نماید',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'سریعاً به سمت راست گردش نماید',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'مفهوم شکل مقابل در علائم عبور و مرور چیست؟',
                questionImage: <img src="images/rahnma.png" alt='asdff'/>,
                questionId: 14,
                answerOptions: [
                    {
                        answerText: 'معمولاً برای علائم راهنما',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'علامت هشدار دهنده برای خطر',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'شروع و پایان حق تقدم مسیر',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'معمولاً برای تابلوهای دستوری و خدماتی',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'در آزادراه های برون شهری و مناطق غیر مسکونی حداقل سرعت چند کیلومتر در ساعت است؟',
                questionImage: "",
                questionId: 15,
                answerOptions: [
                    {
                        answerText: '60',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: '50',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: '70',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: '65',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'رانندگان هنگام روبرو شدن با وسایل نقلیه ای که در' +
                    ' جهت مخالف حرکت می کند حداقل از چند متری از چراغ نور پایین استفاده می نمایند؟',
                questionImage: "",
                questionId: 16,
                answerOptions: [
                    {
                        answerText: '۳۵ متری',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: ' ۱۰۰متری',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: '۵۰ متری',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: '۱۵۰ متری',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'سوئیچ چند حالت دارد؟',
                questionImage: "",
                questionId: 17,
                answerOptions: [
                    {
                        answerText: ' ۶ حالت ',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: '۳ حالت',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: '۵ حالت',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: '۴ حالت',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'ترمز سرویس بر کدام چرخ ها اثر میگذارد ؟',
                questionImage: "",
                questionId: 18,
                answerOptions: [
                    {
                        answerText: 'به چرخ های عقب در زمان توقف وسیله نقلیه اثر می گذارد',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'چرخ های جلو',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'چرخ های عقب',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'تمام چرخ ها',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: ' کدام قسمت خودرو انرژی حرارتی سوخت را به انرژی جنبشی تبدیل میکند؟',
                questionImage: "",
                questionId: 19,
                answerOptions: [
                    {
                        answerText: 'دیفرانسیل',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'گیربکس',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'موتور',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'کلاچ',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'کدام گزینه مهمترین وظیفه روغن ترمز می باشد؟',
                questionImage: "",
                questionId: 20,
                answerOptions: [
                    {
                        answerText: 'جلوگیری از ورود گرد و غبار به موتور',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'چرب کنندگی و روانکاری قطعات',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'خنک کاری قطعات',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'جلوگیری از فرسودگی قطعات',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'سطح روغن موتور را با چه وسیله کنترل نمود؟',
                questionImage: "",
                questionId: 21,
                answerOptions: [
                    {
                        answerText: ' در مخزن روغن',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: ' گیج روغن',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: ' پمپ روغن',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'فیلتر روغن',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: ' از عوامل مهم اتلاف سوخت و انرژی در خودروها چیست ؟',
                questionImage: "",
                questionId: 22,
                answerOptions: [
                    {
                        answerText: 'حرکت با سرعت مطمئن',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: ' رانندگی در مناطق سردسیر ',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'رانندگی در شب',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'عدم تنظیم موتور و احتراق بی‌نظمی در سیلندر ها',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'مفهوم خطوط طولی در این شکل چیست ؟',
                questionImage: <img src="images/momtad23.png" alt="FJ"/>,
                questionId: 23,
                answerOptions: [
                    {
                        answerText: 'به هیچ وجه نباید از روی آن عبور کرد',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: ' عبور از روی آن مجاز می باشد',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: ' با احتیاط می توان از روی آن دور زد',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'در صورت لزوم می توان از آن سبقت گرفت',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'در جاده پر ترافیکی اتومبیل ها و وسایل نقلیه دیگر پشت سر هم ، به طور فشرده در حرکت هستند ، چگونه می توانید از بروز حادثه جلوگیری کنید ؟',
                questionImage: <img src="images/porterafic.png" alt='dfd'/>,
                questionId: 24,
                answerOptions: [
                    {
                        answerText: 'چراغ های خطر را روشن می کنید .',
                        id: Math.random().toString(),

                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'پای خود را روی ترمز قرار می دهید.',
                        id: Math.random().toString(),

                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'فاصله خود را با اتومبیل جلویی افزایش می دهید',
                        id: Math.random().toString(),

                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'در شانه خاکی توقف می کنید',
                        id: Math.random().toString(),

                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'عمر تسمه تایم به نوع خودرو و بین .... می باشد؟',
                questionImage: "",
                questionId: 25,
                answerOptions: [
                    {
                        answerText: ' ۸ تا ۱۰ هزار کیلومتر ',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: '۳۰ تا ۹۰ هزار کیلومتر',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: ' ۶۰ تا ۹۰ هزار کیلومتر',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: ' ۷۰ تا ۹۰ هزار کیلومتر',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: ' در چه حالتی می توانیم از سمت راست سبقت بگیریم ؟',
                questionImage: "",
                questionId: 26,
                answerOptions: [
                    {
                        answerText: 'هنگام گردش به راست',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'حرکت از سمت چپ ممنوع میباشد',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'سمت راست باز باشد ',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'سبقت گرفتن از وسیله نقلیه ای که به سمت چپ گردش می کند',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: ' کدام یک از موارد زیر در خصوص کمک های اولیه صحیح می باشد؟',
                questionImage: "",
                questionId: 27,
                answerOptions: [
                    {
                        answerText: 'کمک های اولیه سبب کاهش چشم گیر مرگ و میر و تخفیف بیماری و آسیبهای مصدوم می شود',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'کمک های اولیه می تواند در محل حادثه یا در بیمارستان انجام شود',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: ' انجام کمک های اولیه حتماً باید توسط پزشک صورت پذیرد ',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'کمک های اولیه تاثیری در تخفیف بیماری ندارد',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'استفاده از بوق در کدام یک از موارد زیر مجاز میباشد ؟',
                questionImage: "",
                questionId: 28,
                answerOptions: [
                    {
                        answerText: ' برای کاهش شدت تصادفات و آگاهی سایر کاربران راه',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'برای کاهش شدت تصادفات',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'اطلاع و آگاه سازی برای ادای احترام به سایر کاربران راه',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'اطلاع و آگاه سازی سایر کاربران راه و جلوگیری از بروز سانحه',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: 'تابلو مقابل به چه معناست ؟',
                questionImage: <img src="images/tabloo200.png" alt='dfd'/>,
                questionId: 29,
                answerOptions: [
                    {
                        answerText: 'طول ممنوعیت با محدودیت پارکینگ',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: ' فاصله از محل نصب تابلو تا شروع قسمت خطر',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'طول محدوده خطر',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: 'راهنمای مسیر در ۲۰۰ متر',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },
            {
                questionText: ' هنگام ارائه کمک های اولیه و دادن تنفس مصنوعی پس از چه مدت باید گردش خون مصدوم را بررسی نمود؟',
                questionImage: "",
                questionId: 30,
                answerOptions: [
                    {
                        answerText: 'پس از هر ۳۰ بار تنفس مصنوعی ( تقریباً ۲ دقیقه)',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: ' پس از هر ۵۰ بار تنفس مصنوعی (تقریباً ۵ دقیقه)',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                    {
                        answerText: ' پس از هر ۱۰ بار تنفس مصنوعی (تقریباً یک دقیقه)',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: true,
                        userAnswer: false,
                    },
                    {
                        answerText: 'در هنگام دادن تنفس مصنوعی نیازی به بررسی گردش خون نیست',
                        id: Math.random().toString(),
                        answerImage: "",
                        isCorrect: false,
                        userAnswer: false,
                    },
                ],
            },]
    },
        {
            azmon: [
                {
                    questionText: "کدام تابلو سبقت ممنوع میباشد؟",
                    questionImage: "",
                    questionId: 1,
                    answerOptions: [
                        {
                            answerText: '',
                            answerImage: <img
                                src="images/Zeichen_208.svg-150x150.png"
                                alt="adf"/>,
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                            checked: false
                        },
                        {
                            answerText: '',
                            answerImage: <img
                                src="images/Vorschriftszeichen_4a.svg_-150x150.png"
                                alt="adf"/>,
                            id: Math.random().toString(),
                            isCorrect: true,
                            userAnswer: false,
                            checked: false
                        },
                        {
                            answerText: '',
                            answerImage: <img src="images/payanmamnokamion.png"
                                              alt="adf"/>,
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                            checked: false
                        },
                        {
                            answerText: '',
                            answerImage: <img src="images/sebghadmamnookamion.png"
                                              alt="adf"/>,
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                            checked: false
                        },
                    ],
                },
                {
                    questionText: 'کدام تابلو بیانگر عبور از هر دو سمت مجاز می باشد ؟',
                    questionImage: "",
                    questionId: 2,
                    answerOptions: [
                        {
                            answerText: '',
                            answerImage: <img
                                src="images/Vorschriftszeichen_15_rechts_geneigt.svg_-150x150.png"
                                alt="adf"/>,
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '',
                            id: Math.random().toString(),
                            answerImage: <img
                                src="images/Vorschriftszeichen_15_gerade_rechts.svg_-150x150.png"
                                alt="adf"/>,
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: "",
                            id: Math.random().toString(),
                            answerImage: <img src="images/C04ccr-150x150.png"
                                              alt="alaki"/>,
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: "",
                            id: Math.random().toString(),
                            answerImage: <img
                                src="images/Vorschriftszeichen_15_rechts_abb.svg_-150x150.png"
                                alt="adf"/>,
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'نام این تابلو چیست ؟',
                    questionImage: <img
                        src="images/Czech_Republic_road_sign_A_2a.svg_-300x263.png"
                        alt="dda"/>,
                    questionId: 3,
                    answerOptions: [
                        {
                            answerText: ' پیچ های پی در پی ( اولین پیچ به چپ )',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' پیچ های پی در پی ( اولین پیچ به راست )',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: ' پیچ به راست',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'پیج به چپ ',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'این تابلو بیانگر چیست  ؟',
                    questionImage: <img
                        src="images/Czech_Republic_road_sign_A_13.svg_-300x263.png"
                        alt="FJ"/>,
                    questionId: 4,
                    answerOptions: [
                        {
                            answerText: 'عبور حیوانات وحشی',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'عبور حیوانات اهلی',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'عبور گاری',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'عبور حیوانات',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'این تابلو بیانگر چیست ؟',
                    questionImage: <img src="images/B18cr-150x150.png" alt='asdff'/>,
                    questionId: 5,
                    answerOptions: [
                        {
                            answerText: ' عبور وسائط نقلیه با محموله خطرناک ممنوع ',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'مسیر کامیون حامل کالای خطرناک',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'عبور کامیون ممنوع',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' عبور کامیون یدک دار ممنوع',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'این تابلو بیانگر چیست ؟',
                    questionImage: <img src="images/33654645-300x268.png"
                                        alt='asdff'/>,
                    questionId: 6,
                    answerOptions: [
                        {
                            answerText: 'تراکم ترافیک',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'خطر تصادف',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' عبور وسایل نقلیه',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'عبور سواری',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'ابطال گواهینامه به چه معناست ؟',
                    questionImage: "",
                    questionId: 7,
                    answerOptions: [
                        {
                            answerText: 'ضبط موقت گواهینامه',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'اخذ گواهینامه',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' سلب اعتبار قانونی گواهینامه',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'توقیف گواهینامه',
                            id: Math.random().toString(),

                            answerImage: '',
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'رانندگانی که قصد گردش یا توقف را دارند. باید از چه' +
                        ' فاصله ای به وسیله چراغ راهنما علامت دهند ؟',
                    questionImage: "",
                    questionId: 8,
                    answerOptions: [
                        {
                            answerText: ' بیش از ۱۰۰ متر',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' کمتر از ۱۰۰ متر',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' حداکثر ۵۰۰ متر',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' از فاصله ۱۰۰ متری',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'ورود و عبور عابرین پیاده در آزادراه ها...؟',
                    questionImage: "",
                    questionId: 9,
                    answerOptions: [
                        {
                            answerText: ' با رعایت ضوابط و مقررات مجاز است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'در مواقع اضطراری مجاز است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'ممنوع است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: ' با رعایت نکات ایمنی مجاز است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'در کدام گزینه خطوط اضطراری نمایش داده شده است؟',
                    questionImage: "",
                    questionId: 10,
                    answerOptions: [
                        {
                            answerText: '',
                            id: Math.random().toString(),
                            answerImage: <img src="images/10-1.png" alt='asdff'/>,
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '',
                            id: Math.random().toString(),
                            answerImage: <img src="images/10-2.png" alt='asdff'/>,
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '',
                            id: Math.random().toString(),
                            answerImage: <img src="images/10-3.png" alt='asdff'/>,
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '',
                            id: Math.random().toString(),
                            answerImage: <img src="images/10-4.png" alt='asdff'/>,
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' میزان سرعت مجاز و محدودیت سرعت در جاده ها و خیابان ها به چه صورت مشخص میشود؟',
                    questionImage: "",
                    questionId: 11,
                    answerOptions: [
                        {
                            answerText: 'با توجه به مواردی که GPS خودرو نشان میدهد ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'با توجه به تابلوهای نصب شده و آیین نامه راهنمایی و رانندگی ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'سرعت مجاز بسته به نوع خودرو و مدل آن قابل تغییر است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'با توجه به دستور پلیس در جاده ها مشخص می شود',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' هرگاه وسیله نقلیه موتوری در راه از کار بیفتد تابلو هشدار را در چه فاصله ای قرار می دهند؟',
                    questionImage: "",
                    questionId: 12,
                    answerOptions: [
                        {
                            answerText: ' ۲۰۰ متری',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '۱۰۰ متری',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '۱۵۰ متری',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '۷۰ متری',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'در این شکل حق تقدم عبور عبارت است از..؟',
                    questionImage: <img src="images/soal2-13.png" alt='asdff'/>,
                    questionId: 13,
                    answerOptions: [
                        {
                            answerText: 'خودروی امدادی _ زرد (الف) _ سبز (ب) ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'خودروی امدادی _ سبز (ب) _ زرد( الف )',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'سبز (ب) _ زرد (الف) خودروی امدادی',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' زرد (الف) _ سبز (ب) _ خودروی امدادی',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' حق تقدم در برخورد چند وسیله در یک تقاطع هم عرض با کدام وسیله می باشد؟',
                    questionImage: "",
                    questionId: 14,
                    answerOptions: [
                        {
                            answerText: 'وسیله ای که سمت راست وسیله های دیگر قرار دارد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: ' وسیله ای که به سمت راست گردش می کند',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' همزمان می توانند وارد یک مسیر شوند',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'وسیله ای که به سمت چپ گردش می کند',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' راننده ای که دست چپ را به طرف بالا نگه داشته است به چه معناست؟',
                    questionImage: <img src="images/15-1.png" alt='asdff'/>,
                    questionId: 15,
                    answerOptions: [
                        {
                            answerText: 'گردش یا تغییر مسیر به چپ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'توقف',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' گردش یا تغییر مسیر به راست',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'کاهش سرعت و پارک خودرو',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' خودروی نشان داده شده در یک شکل مشغول چه نوع پارکی است؟',
                    questionImage: <img src="images/2-16.png" alt='asdff'/>,
                    questionId: 16,
                    answerOptions: [
                        {
                            answerText: 'پارک مورب',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' پارک عمودی',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' پارک مستقیم',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'پارک دوبل',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'سوئیچ در چه حالتی علاوه بر اینکه موتور خاموش بوده فرمان نیز در حالت قفل قرار می گیرد؟',
                    questionImage: "",
                    questionId: 17,
                    answerOptions: [
                        {
                            answerText: ' START ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'ACC ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'ON',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'LOCK',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'وظیفه اصلی ترمز دستی چیست ؟',
                    questionImage: "",
                    questionId: 18,
                    answerOptions: [
                        {
                            answerText: 'نگه داشتن خودرو در حالت متوقف',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'نگه داشتن خودرو در هنگام پارک کردن',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'کمک کردن به توقف وسیله نقلیه در سرعت پایین ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' همه موارد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' شکل موتور مقابل چند سیلندر میباشد؟',
                    questionImage: <img src="images/2-19.png" alt='asdff'/>,
                    questionId: 19,
                    answerOptions: [
                        {
                            answerText: '5',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '6',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '4',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: '3',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'لرزش غربیلک فرمان می تواند ناشی از .... باشد؟',
                    questionImage: "",
                    questionId: 20,
                    answerOptions: [
                        {
                            answerText: ' تنظیم نبودن چرخ ها ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'بالانس نبودن چرخ ها',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'منبع سوخت ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'هیچکدام',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' مهمترین مزیت ترمز ضد قفل چیست ؟',
                    questionImage: "",
                    questionId: 21,
                    answerOptions: [
                        {
                            answerText: ' افزایش قدرت و سرعت خودرو ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' حفظ هدایت پذیری خودرو و جلوگیری از لغزش',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: '  کاهش مصرف سوخت',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' استهلاک کمتر تایرها',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' کدام یک از موارد زیر قبل شروع حرکت باید مورد بازبینی قرار گیرد ؟',
                    questionImage: "",
                    questionId: 22,
                    answerOptions: [
                        {
                            answerText: 'چراغ ها _ بوق _ شیشه‌ها _ گاز',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' آب رادیات _ برف پاک‌کن _ بوق _ کلاچ _گاز ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'ترمز _ چراغ ها _ آینه ها _ کلاچ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'چراغ _ بوق _ شیشه ها _ آینه ها _ تایرها _ ترمز _ آب رادیات',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'از ..... برای کنترل کلاچ و از ..... برای کنترل پدال های گاز و ترمز استفاده می شود ؟',
                    questionImage: "",
                    questionId: 23,
                    answerOptions: [
                        {
                            answerText: 'پای چپ _ پای راست',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: ' پای راست _ پای چپ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' دست راست_ پای چپ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' دست چپ _ پای چپ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'کدام یک جزو وظایف سیستم تعلیق نمی باشد؟',
                    questionImage: "",
                    questionId: 24,
                    answerOptions: [
                        {
                            answerText: 'ممانعت از واژگونی خودرو در هنگام عبور از پیچ ها',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'حفظ تعادل و پایداری خودرو هنگام عبور از پستی و بلندی',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'کنترل قدرت و شتاب خودرو',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'تامین راحتی راننده',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'تفاوت پروانه و فن الکتریکی چیست ؟',
                    questionImage: "",
                    questionId: 25,
                    answerOptions: [
                        {
                            answerText: ' چرخش فن الکتریکی دور خود را توسط تسمه ای از میل لنگ می گیرد ولی پروانه چرخش آن وابسته میل لنگ نیست ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText:"پروانه دور خود را توسط تسمه به طور مستقیم" +
                                " از دیفرانسیل می‌گیرد ولی چرخش فن الکتریکی وابسته به دیفرانسیل نیست",
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' پروانه دور خود را توسط تسمه به طور مستقیم از میل لنگ می گیرد و چرخش فن الکتریکی وابسته به میل لنگ نیست',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'تفاوتی ندارند',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' وظیفه بافلر در اتومبیل چیست؟',
                    questionImage: "",
                    questionId: 26,
                    answerOptions: [
                        {
                            answerText: 'جلوگیری از تبخیر آب رادیاتور',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' جلوگیری از تبخیر بنزین',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'کاهش آلایندگی گاز باقیمانده از احتراق ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'کاهش صدای نابهنجار موتور',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'در ارزیابی مصدومین کدام یک از مصدومین را باید در اولویت انجام کمکهای اولیه قرارداد؟',
                    questionImage: "",
                    questionId: 27,
                    answerOptions: [
                        {
                            answerText: 'مصدومینی که آسیب‌های آنها بسیار شدید است نظیر سوختگی ها یا زخم های وسیع',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'مصدومینی که آسیب‌های آنها کمتر و با کمک های اولیه سریعاً بهبود می یابند',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' مصدومین که از سن بالاتری نسبت به دیگر مصدومین برخوردارند ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'کودکان در اولویت انجام کمک های اولیه هستند',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'علت سر خوردن خودرو در شرایط یخبندان کدام عامل می باشد؟' ,
                    questionImage: "",
                    questionId: 28,
                    answerOptions: [
                        {
                            answerText: ' دیر عمل نمودن ترمز ها',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'سفت شدن ترمز ها',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'اصطحکاک زیاد تایر با سطح جاده',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'اصطحکاک کم تایر با سطح جاده',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'در کدام یک از سطوح زیر مسافت توقف افزایش می یابد؟',
                    questionImage:"",
                    questionId: 29,
                    answerOptions: [
                        {
                            answerText: 'آسفالت زبر',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' آسفالت با شرایط نامطلوب و آغشته به قیر',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: ' در جاده سنگلاخ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'آسفالت با شرایط مطلوب ولی خشک',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' در سربالایی بدون جدول به چه شکل توقف می کنیم؟',
                    questionImage: "",
                    questionId: 30,
                    answerOptions: [
                        {
                            answerText: 'فرمان را خلاف عقربه های ساعت می چرخانیم',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' فرمان را به سمت چپ موافق عقربه های ساعت می چرخانیم',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '  فرمان را به سمت راست میچرخانیم ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'فرمان را به سمت راست مخالف عقربه های ساعت می چرخانیم',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },


            ]
        },
        {
            azmon: [
                {
                    questionText: 'کدام تابلو بیانگر تقاطع جاده و راه‌آهن بدون' +
                        ' راهبند در ۳۰۰ متری می باشد',
                    questionImage: "",
                    questionId: 1,

                    answerOptions: [
                        {
                            answerText: '',
                            answerImage: <img src="images/3-1.png" alt="adf"/>,
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                            checked: false
                        },
                        {
                            answerText: '',
                            answerImage: <img src="images/3-1-1.png" alt="adf"/>,
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                            checked: false
                        },
                        {
                            answerText: '',
                            answerImage: <img src="images/3-1-3.png"
                                              alt="adf"/>,
                            id: Math.random().toString(),
                            isCorrect: true,
                            userAnswer: false,
                            checked: false
                        },
                        {
                            answerText: '',
                            answerImage: <img src="images/3-1-4.png" alt="adf"/>,
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                            checked: false
                        },
                    ],
                },
                {
                    questionText: 'نام این تابلو چیست ؟',
                    questionImage: <img src="images/3-2.png" alt="alaki"/>,
                    questionId: 2,
                    answerOptions: [
                        {
                            answerText: 'ریزش سنگ',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'سرازیری خطرناک',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'شیب سرازیری ۱۰ درصد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'سربالایی خطرناک',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'مفهوم این تابلو چیست ؟',
                    questionImage: <img src="images/3-3.png" alt="dda"/>,
                    questionId: 3,
                    answerOptions: [
                        {
                            answerText: 'حداقل سرعت در خط های عبور',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'حداکثر سرعت در خط های عبور',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'حداکثر سرعت در خط دوم 80 کیلومتر بر ساعت',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'حداکثر سرعت در خط دوم 100 کیلومتر بر ساعت ',
                            answerImage: "",
                            id: Math.random().toString(),
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'این تابلو بیانگر چیست  ؟',
                    questionImage: <img src="images/Vorfahrtstraße150.png" alt="FJ"/>,
                    questionId: 4,
                    answerOptions: [
                        {
                            answerText: 'رعایت حق تقدم',
                            answerImage: "",
                            id: Math.random().toString(),

                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'خیابان اصلی',
                            answerImage: "",
                            id: Math.random().toString(),

                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'ورود ممنوع',
                            answerImage: "",
                            id: Math.random().toString(),

                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'عبور کلیه وسایل نقلیه ممنوع',
                            answerImage: "",
                            id: Math.random().toString(),

                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'کدام تابلو بیانگر پارکینگ می باشد ؟',
                    questionImage: "",
                    questionId: 5,
                    answerOptions: [
                        {
                            answerText: '',
                            answerImage:<img src="images/3-5-1.png" alt='asdff'/> ,
                            id: Math.random().toString(),

                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: '',
                            answerImage:<img src="images/3-5-2.png" alt='asdff'/> ,
                            id: Math.random().toString(),

                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '',
                            answerImage: <img src="images/3-5-3.png" alt='asdff'/>,
                            id: Math.random().toString(),

                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '',
                            answerImage: <img src="images/3-5-4.png" alt='asdff'/>,
                            id: Math.random().toString(),

                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'کدام یک از تابلوهای زیر جز تابلوهای راهنمای مسیر نمی‌باشد ؟',
                    questionImage: "",
                    questionId: 6,
                    answerOptions: [
                        {
                            answerText: '',
                            id: Math.random().toString(),

                            answerImage: <img src="images/3-6-1.png" alt='dfd'/>,
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: '',
                            id: Math.random().toString(),

                            answerImage: <img src='images/3-6-2.png' alt='sdf'/>,
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '',
                            id: Math.random().toString(),

                            answerImage: <img src='images/3-6-3.png' alt='asdf'/>,
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '',
                            id: Math.random().toString(),

                            answerImage: <img src='images/3-6-4.png' alt='asdf'/>,
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'در تقاطع روبه‌رو که فاقد چراغ راهنمایی است حق تقدم با کدام خودرو می باشد؟',
                    questionImage: <img src="images/3-7.png" alt='asdff'/>,
                    questionId: 7,
                    answerOptions: [
                        {
                            answerText: 'خودرو آبی',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'خودرو قرمز',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'خودرویی که فاقد تابلو رعایت حق تقدم است',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'موارد ۲,۳',
                            id: Math.random().toString(),

                            answerImage: '',
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: "مفهوم چراغ سبز راهنمایی چیست",
                    questionImage: <img src="images/3-8.png" alt='asdff'/>,
                    questionId: 8,
                    answerOptions: [
                        {
                            answerText: 'ایست کامل و سپس عبور',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'عبور یا گردش آزاد است مگر آنکه گردش نمودن توسط علائم دیگر ممنوع باشد',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'با مشاهده این چراغ رعایت حق تقدم وسایلی که مستقیم حرکت می کنند و یا عابرین پیاده الزامی است',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'موارد ۲ و ۳ صحیح می باشد',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: "کدام نوع از خطوط پارک در این شکل نشان داده شده است",
                    questionImage: <img src="images/3-9.png" alt='asdff'/>,
                    questionId: 9,
                    answerOptions: [
                        {
                            answerText: 'افقی ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'عمودی ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'مورب ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'هیچکدام',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'وسیله نقلیه طویل وسیله ای است که ... ؟',
                    questionImage: "",
                    questionId: 10,
                    answerOptions: [
                        {
                            answerText: 'طول آن حداکثر 12/5 متر باشد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'عرض آن بیش از 12/5 متر باشد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'طول آن حداقل 12/5 متر باشد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'طول آن بیش از 12/5 متر باشد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'کدام یک از موارد زیر در خصوص مفهوم چراغ زرد صحیح نمی باشد؟',
                    questionImage: <img src="images/3-11.png" alt='asdff'/>,
                    questionId: 11,
                    answerOptions: [
                        {
                            answerText: 'با دیدن این چراغ باید از سرعت خودرو کاسته تا بتوانید به آرامی پشت خط توقف بایستید',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'به معنی هشدار برای تغییر رنگ از قرمز به سبز است و با زرد شدن چراغ باید به حرکت خود ادامه داد و با احتیاط از تقاطع عبور کرد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'این چراغ به معنی هشدار برای تغییر رنگ چراغ از سبز به قرمز است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'در صورتی که چراغ زرد شده و شما قبلا در تقاطع وارد شده اید باید به حرکت خود ادامه داده و با احتیاط عبور نمایید',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'مفهوم رنگ نارنجی در علائم عبور و مرور چیست؟',
                    questionImage: <img src="images/3-12.png" alt='asdff'/>,
                    questionId: 12,
                    answerOptions: [
                        {
                            answerText: 'راهنما برای مناطق تفریحی و فرهنگی و' +
                                ' گردشگری',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'راهنما برای مناطق مدرسه تفریحی و فرهنگی',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'علامت دستوری و راهنمای مسیر در سایر راه ها',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'راهنما برای مناطق اداری آموزشی و خدماتی',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'حداکثر سرعت در آزادراه ها چند کیلومتر است ؟',
                    questionImage: "",
                    questionId: 13,
                    answerOptions: [
                        {
                            answerText: '۱۲۵ کیلومتر ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: '۱۲۰ کیلومتر',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: '۱۱۰ کیلومتر',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'حداقل ۷۰ کیلومتر',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'دور زدن از روی خط پر و یا ممتد ...........؟',
                    questionImage: "",
                    questionId: 14,
                    answerOptions: [
                        {
                            answerText: 'ممنوع است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'از ۱۵۰ متری تونل ها',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'از ۱۰۰ متری مانده به پیچ ها',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'از ۱۵۰ متری خط ها تا ۱۵۰ متری بعدش',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'سبقت گرفتن از وسیله نقلیه ای که خود در حال سبقت گرفتن است.......؟',
                    questionImage: "",
                    questionId: 15,
                    answerOptions: [
                        {
                            answerText: 'مجاز است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'چنانچه احتمال تصادف نباشد مجاز است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'ممنون از مگر در راهی که به دلیل وجود سه خط عبور یا بیشتر این عمل مجاز می باشد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'تحت هر شرایطی ممنوع است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: "چرا شکسته و کثیف بودن شیشه های خودرو می‌تواند" +
                        " خطرناک باشد ؟",
                    questionImage: "",
                    questionId: 16,
                    answerOptions: [
                        {
                            answerText: 'چون باعث کاهش انعکاس نور می شود',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' چون باعث افزایش انعکاس نور می شود',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'خطری ندارد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'چون باعث کاهش دید میشود',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'ترمز دستی یا .... بر چرخ های ..... اثر دارد؟',
                    questionImage: "",
                    questionId: 17,
                    answerOptions: [
                        {
                            answerText: ' اولیه_ چرخ های جلو ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'ثانویه _چرخ های جلو',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'اولیه _چرخ های عقب',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'ثانویه _ چرخ‌های عقب',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'نام دیگر اهرم ترمز دستی چیست ؟',
                    questionImage: "",
                    questionId: 18,
                    answerOptions: [
                        {
                            answerText: 'ترمز اولیه',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'ترمز توقف',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'ترمز پارک',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'گزینه ۲ و ۳',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' وظیفه کدام قطعه ممانعت از ورود گرد و غبار و دیگر ذرات معلق به داخل موتور میشود؟',
                    questionImage: "",
                    questionId: 19,
                    answerOptions: [
                        {
                            answerText: 'فیلتر روغن',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'فیلتر سوخت',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'فیلتر هوا',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'فن',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'کدام قطعه زمان واکنش سیستم ترمز را کاهش می دهد؟',
                    questionImage: "",
                    questionId: 20,
                    answerOptions: [
                        {
                            answerText: 'پدال ترمز',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'بوستر',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'روغن ترمز',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'کاسه ترمز',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'قبل از شروع حرکت باید کدام یک از چراغ های خودرو مورد بازبینی قرار گیرد؟',
                    questionImage: "",
                    questionId: 21,
                    answerOptions: [
                        {
                            answerText: ' چراغ جلو _چراغ عقب_ چراغ راهنما _چراغ ABS',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' چراغ جلو_ چراغ خطر_ چراغ راهنما _چراغ دنده عقب',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: ' چراغ جلو _چراغ عقب_ چراغ راهنما',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'نیازی به بازبینی چراغ ها می باشد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' هدف از تسلط کامل پاها و دستها و تجهیزات کنترلی همچون پدال ها ، اهرم ها و غربیلک فرمان می باشد ؟',
                    questionImage: "",
                    questionId: 22,
                    answerOptions: [
                        {
                            answerText: 'معاینه فنی ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' تنظیم آینه ها  ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'سلامت فنی ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'تنظیم صندلی',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'وظیفه کنیستر چیست ؟',
                    questionImage: "",
                    questionId: 23,
                    answerOptions: [
                        {
                            answerText: 'از ورود بخارهای بنزین به فضای آزاد جلوگیری می‌کند',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: ' قدرت ترمزگیری را افزایش می‌دهد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' فرمان پذیری بهبود می‌یابد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'خرابی سیستم کیسه هوا را اعلام می‌کند',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'استفاده از کدام نوع کمربند ایمنی در خودرو الزامی است  ؟',
                    questionImage: "",
                    questionId: 24,
                    answerOptions: [
                        {
                            answerText: 'نوع کمربند ایمنی مهم نیست  .',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'دو نقطه ای .',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'سه نقطه ای ',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'کمربند ران',
                            id: Math.random().toString(),

                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'کدام یک از موارد زیر در مورد دسته دنده اشتباه است؟',
                    questionImage: <img src="images/3-25.png" alt="FJ"/>,
                    questionId: 25,
                    answerOptions: [
                        {
                            answerText: ' اهرم دنده معمولاً در طرف راست راننده قرار دارد ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'گیربکس خودروهای سواری معمولاً ۵ حالت( ۵ سرعته) می باشد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' اهرم دنده به صورت مستقیم با سیستم کلاچ' +
                                ' در' +
                                ' ارتباط است',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: ' وقتی دنده در حالت خلاص می باشد نیرویی به پشت چرخ محرک منتقل نخواهد شد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' ضد یخ چه عملی در رادیاتور انجام می‌دهد ؟',
                    questionImage: "",
                    questionId: 26,
                    answerOptions: [
                        {
                            answerText: 'جلوگیری از یخ زدگی',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'به تاخیر انداختن نقطه جوش',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'در تابستان منجر به جوش آوردن زودتر موتور نمی شود ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'همه موارد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' در برخورد با یک مصدوم بیهوش مهمترین اقدام چیست؟',
                    questionImage: "",
                    questionId: 27,
                    answerOptions: [
                        {
                            answerText: 'باز کردن راه تنفسی و حفظ گردش خون',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'گرفتن فشار خون',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' بلند کردن دست مصدوم ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'نشاندن مصدوم روی صندلی',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'کدام یک از موارد زیر نشان دهنده به وجود آمدن خستگی و خواب آلودگی در حین رانندگی است ؟',
                    questionImage: "",
                    questionId: 28,
                    answerOptions: [
                        {
                            answerText: ' احساس سنگینی در پلک ها_ کنترل آگاهانه خودرو_ عدم توانایی در کنترل خودرو',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'پلک زدن _ عدم کنترل خودرو',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'افزایش سرعت واکنش نسبت به شرایط_ احساس سنگینی در پلک ها',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'احساس سنگینی پلک ها _عدم کنترل آگاهانه سرعت خودرو _عدم تمرکز روی رانندگی',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: 'کمک های اولیه چیست ؟',
                    questionImage: "",
                    questionId: 29,
                    answerOptions: [
                        {
                            answerText: 'به اقدامات اولیه‌ای می‌گویند که مصدوم را در محل حادثه از خطر مرگ نجات دهد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' به اقدامات اولیه‌ای گویند که بلافاصله پس از بروز سانحه و قبل از رسیدن به مرکز درمانی صورت می گیرد',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: 'به اقدامات اولیه‌ای که در درمانگاه یا مراکز اورژانس انجام می شود',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: 'به اقدامات صورت گرفته توسط پرستاران در مرکز اورژانس می‌گویند',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },
                {
                    questionText: ' توقف در کدام مورد مجاز میباشد؟',
                    questionImage: "",
                    questionId: 30,
                    answerOptions: [
                        {
                            answerText: 'در ۱۵ متری چراغ راهنما ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' گذرگاه پیاده ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                        {
                            answerText: ' تابلوی ایستادن برای مدت کوتاه ',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: true,
                            userAnswer: false,
                        },
                        {
                            answerText: '۱۵ متری تقاطع ها',
                            id: Math.random().toString(),
                            answerImage: "",
                            isCorrect: false,
                            userAnswer: false,
                        },
                    ],
                },]
        },];
    let numbertest = prompt("entr number");


    return (
        <div className="App">
            <Exams test={quizzes[numbertest - 1].azmon}/>
        </div>
    );
}

export default App;
