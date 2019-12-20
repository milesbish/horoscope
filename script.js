var horoscope = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "ERROR"];
var messages = ["this is a great day to shop. Join friends and hit the stores to add more beauty and pleasurable items " +
"to your life.", "you may feel like you're slowly plowing through mud, but things are starting to look up. A weight has " +
"been lifted and you're ready to take flight.", "don't take anything too seriously today.", "Wait no longer. The time is" +
" here. Step up and say your peace. Don't make excuses and don't hold back. The more you contribute, the more richly you'll" +
" be rewarded.", "keep things moving quickly. Don't get too bogged down in details today.", "you may be talking a lot " +
"today, but that's natural. You have a great deal to say, so why not say it?", "keep things light and carefree. There's " +
"no need to stress out about something that only exists in your mind.", "there's an exciting buzz in the air that you " +
"should tap into and contribute to. Take a break from the mundane and have an adventure.", "this is a good day to dress " +
"up, go out, and have fun. Share a meal with friends and save your worries for another day.", "you're the certified " +
"expert on many topics, so spread your knowledge around. Others will attend to your words.", "you may discover an " +
"untapped talent or a new interest. Enjoy the exploration.", "contribute something to the conversation. Strong opinions " +
"are flying, and yours is as valid as anyone else's. Keep it lively and witty.", "ERROR ,"];
var images = ["images/capricorn.png", "images/aquarius.png", "images/pisces.png", "images/aries.png", "images/taurus.png",
    "images/gemini.png", "images/cancer.png", "images/leo.png", "images/virgo.png", "images/libra.png", "images/scorpio.png",
    "images/sagittarius.png", "images/error.jpg"];

function start(){
    console.log("hi");
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var name = document.getElementById("name").value;
    console.log(month);
    console.log(day);
    console.log(name);
    var sign = determineSign(month, day);
    document.getElementById("writeSign").innerHTML = horoscope[sign];
    document.getElementById("message").innerHTML = name + ", " + messages[sign];
    document.getElementById("image").src = images[sign];
}

function determineSign(month, day){
    if((month==4 || month==6 || month==9 || month==11) && day==31){
        return 12;
    }
    if((day==30 || day==31) && month==2){
        return 12;
    }
    if((month==12 && day>=22) || (month==1 && day<=19)){
        return 0;
    }
    if((month==1 && day>=20) || (month==2 && day<=18)){
        return 1;
    }
    if((month==2 && day>=19) || (month==3 && day<=20)){
        return 2;
    }
    if((month==3 && day>=21) || (month==4 && day<=19)){
        return 3;
    }
    if((month==4 && day>=20) || (month==5 && day<=20)){
        return 4;
    }
    if((month==5 && day>=21) || (month==6 && day<=20)){
        return 5;
    }
    if((month==6 && day>=21) || (month==7 && day<=22)){
        return 6;
    }
    if((month==7 && day>=23) || (month==8 && day<=22)){
        return 7;
    }
    if((month==8 && day>=23) || (month==9 && day<=22)){
        return 8;
    }
    if((month==9 && day>=23) || (month==10 && day<=22)){
        return 9;
    }
    if((month==10 && day>=23) || (month==11 && day<=21)){
        return 10;
    }
    if((month==11 && day>=22) || (month==12 && day<=21)){
        return 11;
    }

}
