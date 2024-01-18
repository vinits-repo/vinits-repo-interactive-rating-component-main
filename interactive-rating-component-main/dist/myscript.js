const ratingPage = document.getElementById("rating-page");
const ratings = document.getElementById("ratings");
const submitButton = document.getElementById("submit-btn");
const thanksPage = document.getElementById("thanks-page");
const selectedRatingSpan = document.getElementById("selectedRating");
const ratingButtons = ratings.getElementsByClassName("ratingNum");

thanksPage.style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  for (const button of ratingButtons) {
    button.addEventListener("click", function () {
      for (const btn of ratingButtons) {
        btn.classList.remove("selected", "text-White");
        if (btn.classList.contains !== "selected") {
          btn.style.backgroundColor = "hsla(216, 12%, 54%, 0.15)";
        }
      }
      this.classList.add("selected", "text-White");

      const bgColor = document.querySelector(".selected");
      bgColor.style.backgroundColor = "hsl(217, 12%, 63%)";
    });
  }

  submitButton.addEventListener("click", function () {
    const selectedRating = ratings.querySelector(".selected");

    if (selectedRating) {
      selectedRatingSpan.textContent = selectedRating.textContent;

      ratingPage.style.display = "none";
      thanksPage.style.display = "flex";
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});
