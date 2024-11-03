let unhappyFeedback = document.querySelector(".feedback-unhappy");
let neutralFeedback = document.querySelector(".feedback-neutral");
let happyFeedback = document.querySelector(".feedback-happy");
let submitFeedback = document.getElementById("submit-btn");

unhappyFeedback.addEventListener("click", function () {
  unhappyFeedback.style.backgroundColor = "#66ccff";
  neutralFeedback.style.background = "transparent";
  happyFeedback.style.backgroundColor = "transparent";

  submitFeedback.addEventListener("click", function () {
    document.querySelector(".submitted-feedback-unhappy").style.display =
      "block";
    document.querySelector(".submitted-feedback-neutral").style.display =
      "none";
    document.querySelector(".submitted-feedback-happy").style.display = "none";
    document.querySelector(".container").style.display = "none";
  });

  document
    .querySelector(".submitted-feedback-unhappy")
    .addEventListener("click", function (e) {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").style.display = "flex";

      document.querySelector(".submitted-feedback-unhappy").style.display =
        "none";
    });
});
neutralFeedback.addEventListener("click", function () {
  neutralFeedback.style.backgroundColor = "#66ccff";
  unhappyFeedback.style.backgroundColor = "transparent";
  happyFeedback.style.backgroundColor = "transparent";

  submitFeedback.addEventListener("click", function () {
    document.querySelector(".submitted-feedback-neutral").style.display =
      "block";
    document.querySelector(".submitted-feedback-unhappy").style.display =
      "none";
    document.querySelector(".submitted-feedback-happy").style.display = "none";
    document.querySelector(".container").style.display = "none";
  });

  document
    .querySelector(".submitted-feedback-neutral")
    .addEventListener("click", function (e) {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").style.display = "flex";

      document.querySelector(".submitted-feedback-neutral").style.display =
        "none";
    });
});
happyFeedback.addEventListener("click", function () {
  happyFeedback.style.backgroundColor = "#66ccff";
  neutralFeedback.style.backgroundColor = "transparent";
  unhappyFeedback.style.backgroundColor = "transparent";

  submitFeedback.addEventListener("click", function () {
    document.querySelector(".submitted-feedback-happy").style.display = "block";
    document.querySelector(".submitted-feedback-unhappy").style.display =
      "none";
    document.querySelector(".submitted-feedback-neutral").style.display =
      "none";
    document.querySelector(".container").style.display = "none";
  });

  document
    .querySelector(".submitted-feedback-happy")
    .addEventListener("click", function (e) {
      document.querySelector(".container").style.display = "block";
      document.querySelector(".container").style.display = "flex";

      document.querySelector(".submitted-feedback-happy").style.display =
        "none";
    });
});
