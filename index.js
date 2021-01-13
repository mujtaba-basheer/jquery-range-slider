const setVal = (value) => {
    const el = document.querySelector("p");
    el.innerHTML = value;
};

$(".js-range-slider").ionRangeSlider({
    onFinish: (data) => {
        const value = data["from_value"];
        setVal(value);
    },
    skin: "round",
    postfix: " yrs.",
});
