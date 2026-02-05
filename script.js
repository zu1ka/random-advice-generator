
const getAdvice = () => {
    const randomNumber = Math.floor(Math.random() * 224) + 1

    return fetch(`https://api.adviceslip.com/advice/${randomNumber}`).then((res) => res.json())
}

const adviceBtn = document.querySelector(".generator-btn")
const advice = document.querySelector(".advice")
const adviceNumber = document.querySelector(".advice-number")
const generatedText = document.createElement("p")
advice.append(generatedText)

adviceBtn.addEventListener("click", function () {


    generatedText.textContent = "Loading...";


    getAdvice().then((data) => {
        console.log(data)

        if (!data.slip) {
            generatedText.textContent = "No advice found, try again!";
            return;
        }
        generatedText.textContent = data.slip.advice
        adviceNumber.textContent = ` Advice #${data.slip.id}`

    })

})

