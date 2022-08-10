let screen = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let result = "";

for (const button of buttons) {
    button.addEventListener("click", () => {
        let text = button.innerText;
        if (text == "c") {
            screen.innerText = "";
            result = "";
        } else if (text == "del") {
            screen.innerText = screen.innerText.slice(0, -1);
            result = result.slice(0, -1);
        } else if (text != "=") {
            if (text == "x") {
                text = "*";
            }
            result += text;
            screen.innerText = result
        } else {
            screen.innerText = eval(`${result}`);
            result = screen.innerText
        }
    });
}

