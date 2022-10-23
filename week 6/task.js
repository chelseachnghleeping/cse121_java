/// HEADING /// 
const today = new Date();
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
};

document.getElementById("heading").innerHTML = today.toLocaleDateString(
    "en-US",
    options
);

/// DATA ///
var d = new Date();
var currentMonthDate =
    (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + 
    "/" + 
    d.getDate();

/// DATE : MM/DD/YYYY
const data = [ 
    {
        id: 1,
        name: "Chelsea Chngh",
        date: "10/23/ 1993",
        image: "img/rooster.jpg"
    },
    {
        id: 2,
        name: "Chester Chngh",
        date: currentMonthDate + "/1997", 
        image: "img/cute-pig.jpg"
    },
    {
        id: 3,
        name: "Darren Chngh",
        date: currentMonthDate + "/1996",
        image: "img/mouse.jpeg"
    },
    {
        id: 4,
        name: "Carolina A. Chngh",
        date: "10/23/1965",
        image: "img/snake.jpeg"
    },
];

/// TODAY BIRTHDAY DATA FILTER ///
var todayData = [];

const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();

todayData = data.filter((person) => {
    const {date} = person
    return(
        parseInt(date.substring(3, 5)) === currentDate &&
        parseInt(date.substring(0, 2)) === currentMonth + 1
    );
});

/// DISPLAY ///
function loadData() {
    var noOfBirthdays = document.getElementById("noOfBirthday");
    noOfBirthdays.innerHTML = todayData.length + " birthdays today";

    var people = document.getElementById("people");

    todayData.forEach((person) => {
        const { name, date, image } = person;

        var article = document.createElement("article");
        article.setAttribute("class", "person");

        var img = new Image();
        img.src = image;
        img.setAttribute("alt", name);

        var info = document.createElement("div");

        var h4 = document.createElement("h4");
        h4.setAttribute("id", "name");
        h4.innerHTML = name;

        var p = document.createElement("p");
        var dob = new Date(date);
        //calculate month difference from current date in time
        var month_diff = Date.now() - dob.getTime();

        //convert the calculated difference in date format
        var age_dt = new Date(month_diff);

        //extract year from date
        var year = age_dt.getUTCFullYear();

        //now calculate the age of the user
        var age = Math.abs(year - 1970);
        p.innerHTML = age + "years";

        info.appendChild(h4);
        info.appendChild(p);

        article.appendChild(img);
        article.appendChild(info);

        people.appendChild(article);
    });
}
/// clear ///

function clearAll() {
    people.innerHTML = "";
    noOfBirthdays.innerHTML = "0 birthdays today";
}

