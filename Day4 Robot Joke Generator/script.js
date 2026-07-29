const chat = document.getElementById("_chat");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke() {

    jokeBtn.disabled = true;

    // Clear old messages
    chat.innerHTML = "";

    // Loading message
    const loading = createMessageElement("Loading...");
    loading.classList.add("response");
    appendMessage(loading);

    // Joke bubble
    const joke = createMessageElement();
    joke.classList.add("joke");
    joke.innerHTML = '<i class="fa-solid fa-ellipsis"></i>';
    appendMessage(joke);

    try {

        const res = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });

        if (!res.ok) {
            throw new Error("Network Error");
        }

        const data = await res.json();

        joke.innerHTML = data.joke;

    } catch (error) {

        joke.innerHTML = "Unable to load joke.";

        console.error(error);

    }

    jokeBtn.disabled = false;

}

function createMessageElement(content = "") {

    const element = document.createElement("div");

    element.classList.add("message");

    if (content !== "") {

        element.innerHTML = content;

    }

    return element;

}

function appendMessage(element) {

    chat.appendChild(element);

}