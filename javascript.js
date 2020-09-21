//array with words and phrases in input
const target = [
    ["hi", "hey", "hello"], //1
    ["how are you", "how do you do"], //2
    ["what are you doing", "what is going on", "what is up"], //3
    ["how old are you", "how young are you", "what is your age"], //4
    ["who are you", "are you human", "are you robot"], //5
    ["who created you", "who made you"], //6
    ["your name", "may i know your name", "what is your name"], //7
    ["i love you", "i like you", "i am in love with you"], //8
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "amazing", "great"], //9
    ["bad", "bored", "tired", "sad"], //10
    ["tell me story", "tell me joke"], //11
    ["ah", "yes", "ok", "okay", "nice", "well"], //12
    ["thanks", "thank you", "ty"], //13
    ["bye", "good bye", "goodbye", "see you later", "bb"], //14
    ["help me"], //15
    ["bro"], //16
    ["what", "why", "how", "where", "when"] //17
];

//Array with answers to following target
const answer = [
    ["Hello!", "Hi!", "Hey!", "Hi bro!"], //1
    ["Fine, how are you?", "Good, how are you?", "Fantastic, how are you?"], //2
    ["Nothing much", "Can you guess?", "I don't know actually"], //3
    ["I was born in 2020/09/20"], //4
    ["I am a robot", "I am professional gachibot. What are you?"], //5
    ["Telegram: @m_chyrkov & @cutthroatX"], //6
    ["My name is what? My name is who?", "I don't have a permission to tell you..."], //7
    ["I love you too", "I am crazy about you"], //8
    ["Have you ever felt bad?", "Glad to hear it", "Nice"], //9
    ["Why?", "Why? You shouldn't!"], //10
    ["What about?", "Once upon a time...", "I am a human, CoolStoryBob"], //11
    ["Tell me a story", "Tell me a joke", "Tell me about yourself", "Make me laugh"], //12
    ["You're welcome", "Here you are", "Always ready to help"], //13
    ["Bye", "Goodbye", "See you later"], //14
    ["Sorry I can't",], //15
    ["You are my brother, my friend - pashaBiceps"], //16
    ["I don't know", "I can't help you"] //17
];

//Non target answers
const differentAnswer = ["Same", "Go on...", "Try again", "I'm listening...", "Excuse me?"];

//Calls a function output() by pressing enter
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
});


function output(input) {
    let product;

    //Uppercase transformed into lowercase & replaces w,s,d with empty
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");

    //Searches the 'target' array, and if not = random differentAnswer
    if (findWord(target, answer, text)) {
        product = findWord(target, answer, text);
    } else {
        product = differentAnswer[Math.floor(Math.random() * differentAnswer.length)];
    }

    boxChat(input, product);
}

//Find a word from target array in user input and gives you an appropriate answer
function findWord(triggerArray, replyArray, string) {
    let item, items;
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < triggerArray[x].length; y++) {
            item = string.search(triggerArray[x][y]);
            if (item !== -1) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
                return item;
            }
        }
    }
}

//Clear message history with the bot
function clearAll() {
    let div = document.getElementById("chatting");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

//Add a block with user input and bot responds
function boxChat(input, product) {
    const all = document.getElementById("chatting");

    let user = document.createElement("div");
    user.id = "user";
    user.innerHTML = `You: <span id="user-response">${input}</span>`;
    all.appendChild(user);
    let robot = document.createElement("div");
    robot.id = "robot";
    robot.innerHTML = `Bot: <span id="robot-response">${product}</span>`;
    all.appendChild(robot);
}