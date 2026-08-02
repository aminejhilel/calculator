let output = document.getElementById("output");
let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.onclick = function () {
        let value = btn.innerText;

        // AC
        if (value.toLowerCase() === "ac") {
            output.value = "";
            return;
        }

        // =
        if (value === "=") {
            try {
                output.value = eval(output.value);
            } catch {
                output.value = "Error";
            }
            return;
        }

        // numbers & operators
        output.value += value;
    };
});
