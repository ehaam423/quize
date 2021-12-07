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
                    userAnswer:false,
                },
                {
                    answerText: 'سبقت غیر مجاز',
                    id: Math.random().toString(),

                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'موتور سوار در نقطه کور سواری قرار دارد',
                    id: Math.random().toString(),

                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'عدم رانندگی بین خطوط',
                    id: Math.random().toString(),

                    answerImage: '',
                    isCorrect: false,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'رای گردش یا تغییر مسیر به چپ اگر وسیله نقلیه موتوری فاقد چراغ راهنما باشد باید ...؟',
            questionImage: "",
            questionId: 8,
            answerOptions: [
                {
                    answerText: 'دست راست به طرف بالا نگه داشت',
                    id: Math.random().toString(),

                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'دست چپ به طرف بالا نگه داشت',
                    id: Math.random().toString(),

                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'دست چپ به طرف پایین نگه داشت',
                    id: Math.random().toString(),

                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'دست چپ به طور افقی نگه داشت',
                    id: Math.random().toString(),

                    answerImage:"",
                    isCorrect: true,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'لند کردن دست های پلیس به دو طرف به طور افقی به چه معناست ؟',
            questionImage: "",
            questionId: 9,
            answerOptions: [
                {
                    answerText: 'کلیه وسایل نقلیه که مقابل پلیس قرار گرفته‌اند باید بایستند',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'کلیه وسایل نقلیه که پشت سر پلیس قرار گرفته‌اند باید بایستند',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'کلیه استفاده کنندگان از راه که جهت حرکت آنها در امتداد جهت نشان داده شده با دست یا دست های پلیس می باشد باید بایستند',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'کلیه وسایل نقلیه که در امتداد دست پلیس قرار گرفته‌اند عبور کنند',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'کدامیک از تابلو های زیر جز تابلوهای محلی نمی‌باشد ؟',
            questionImage: "",
            questionId: 10,
            answerOptions: [
                {
                    answerText: 'ایست و عبور',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'حرکت مجاز',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'حرکت با احتیاط',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'حرکت با احتیاط و در صورت لزوم توقف می نماییم',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: 'عدم رعایت فاصله طولی مناسب',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'حرکت با سرعت زیاد',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'سبقت مجاز',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: 'عدم تنظیم چرخ ها در ساییدگی نامتوازن دایره ها موثر است',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'یکی از نکات مهم در خصوص سیستم ترمز ، کنترل روغن ترمز است',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'در صورتی که باد تایر بیش از حد مجاز باشد ، سطح اتصال تایر با زمین در بیشترین حد خود قرار می گیرد',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: 'پیش از ورود ، توقف و با رعایت حق تقدم وارد راه اصلی شود',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'سریعاً به سمت چپ گردش نماید',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'سریعاً به سمت راست گردش نماید',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'کدامیک از تابلو های زیر جز تابلوهای محلی نمی‌باشد ؟',
            questionImage: "<img src=\"images/rahnma.png\" alt='asdff'/>",
            questionId: 14,
            answerOptions: [
                {
                    answerText: 'معمولاً برای علائم راهنما',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'علامت هشدار دهنده برای خطر',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'شروع و پایان حق تقدم مسیر',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'معمولاً برای تابلوهای دستوری و خدماتی',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: '50',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: '70',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: '65',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'انندگان هنگام روبرو شدن با وسایل نقلیه ای که در جهت مخالف حرکت می کند حداقل از چند متری از چراغ نور پایین استفاده می نمایند؟',
            questionImage: "",
            questionId: 16,
            answerOptions: [
                {
                    answerText: '۳۵ متری',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: ' ۱۰۰متری',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: '۵۰ متری',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: '۱۵۰ متری',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
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
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: '۳ حالت',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: '۵ حالت',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: '۴ حالت',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: 'چرخ های جلو',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'چرخ های عقب',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'تمام چرخ ها',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: 'گیربکس',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'موتور',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'کلاچ',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: 'چرب کنندگی و روانکاری قطعات',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'خنک کاری قطعات',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'جلوگیری از فرسودگی قطعات',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: ' گیج روغن',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: ' پمپ روغن',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'فیلتر روغن',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: ' رانندگی در مناطق سردسیر ',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'رانندگی در شب',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'عدم تنظیم موتور و احتراق بی‌نظمی در سیلندر ها',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: ' عبور از روی آن مجاز می باشد',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: ' با احتیاط می توان از روی آن دور زد',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'در صورت لزوم می توان از آن سبقت گرفت',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'در جاده پر ترافیکی اتومبیل ها و وسایل نقلیه دیگر پشت سر هم ، به طور فشرده در حرکت هستند ، چگونه می توانید از بروز حادثه جلوگیری کنید ؟',
            questionImage:<img src="images/porterafic.png" alt='dfd'/>,
            questionId: 24,
            answerOptions: [
                {
                    answerText: 'چراغ های خطر را روشن می کنید .',
                    id: Math.random().toString(),

                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'پای خود را روی ترمز قرار می دهید.',
                    id: Math.random().toString(),

                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'فاصله خود را با اتومبیل جلویی افزایش می دهید',
                    id: Math.random().toString(),

                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'در شانه خاکی توقف می کنید',
                    id: Math.random().toString(),

                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: '۳۰ تا ۹۰ هزار کیلومتر',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: ' ۶۰ تا ۹۰ هزار کیلومتر',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: ' ۷۰ تا ۹۰ هزار کیلومتر',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: 'حرکت از سمت چپ ممنوع میباشد',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'سمت راست باز باشد ',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'سبقت گرفتن از وسیله نقلیه ای که به سمت چپ گردش می کند',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
            ],
        },
        {
            questionText: 'کدامیک از تابلو های زیر جز تابلوهای محلی نمی‌باشد ؟',
            questionImage: "",
            questionId: 27,
            answerOptions: [
                {
                    answerText: 'کمک های اولیه سبب کاهش چشم گیر مرگ و میر و تخفیف بیماری و آسیبهای مصدوم می شود',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'کمک های اولیه می تواند در محل حادثه یا در بیمارستان انجام شود',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: ' انجام کمک های اولیه حتماً باید توسط پزشک صورت پذیرد ',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'کمک های اولیه تاثیری در تخفیف بیماری ندارد',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: 'برای کاهش شدت تصادفات',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'اطلاع و آگاه سازی برای ادای احترام به سایر کاربران راه',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'اطلاع و آگاه سازی سایر کاربران راه و جلوگیری از بروز سانحه',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: ' فاصله از محل نصب تابلو تا شروع قسمت خطر',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'طول محدوده خطر',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: 'راهنمای مسیر در ۲۰۰ متر',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
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
                    userAnswer:false,
                },
                {
                    answerText: ' پس از هر ۵۰ بار تنفس مصنوعی (تقریباً ۵ دقیقه)',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: false,
                    userAnswer:false,
                },
                {
                    answerText: ' پس از هر ۱۰ بار تنفس مصنوعی (تقریباً یک دقیقه)',
                    id: Math.random().toString(),
                    answerImage: "",
                    isCorrect: true,
                    userAnswer:false,
                },
                {
                    answerText: 'در هنگام دادن تنفس مصنوعی نیازی به بررسی گردش خون نیست',
                    id: Math.random().toString(),
                    answerImage: "",
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
