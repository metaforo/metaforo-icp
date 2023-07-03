import { mf_backend } from "../../declarations/mf_backend";

const el = document.querySelector("form");

if (el) {
  el.addEventListener("submit", async (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");

    const name = document.getElementById("name").value.toString();

    button.setAttribute("disabled", true);

    // Interact with foo actor, calling the greet method
    const greeting = await mf_backend.greet(name);

    button.removeAttribute("disabled");

    document.getElementById("greeting").innerText = greeting;

    return false;
  });
}