import Message from "./message.html";
import HealthBar from "./health-bar.html";

new Message({
    target: document.body,

    data: {
        type: "boring"
    }
})

new HealthBar({
    target: document.body
})