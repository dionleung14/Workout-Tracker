// console.log("connected")

document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOUBLE CONNECTED");

  // function getResults() {
  //   $("#previously").empty();
  //   $.getJSON("/all", function (data) {
  //     for (var i = 0; i < data.length; i++) {
  //       console.log(data[i])
  //       console.log(data[i].title)
  //       $("#previously").prepend(
  //         "<p class='data-entry' data-id=" +
  //           data[i]._id +
  //           "><span class='dataTitle' data-id=" +
  //           data[i].title +
  //           ">" +
  //           data[i].body.duration +
  //           "</span><span class='delete'>X</span></p>"
  //       );
  //     }
  //   });
  // }

  // On page load, populate page with previous workouts
  $.ajax({
    url: "/all",
    dataType: "JSON",
    method: "GET",
  }).then((response) => {
    for (let i = 0; i < response.length - 1; i++) {
      const appendToMe = $("#previously");
      const newDiv = $("<div>");
      const workoutTitle = $("<h3>");
      const exerciseName = $("<p>");
      const duration = $("<p>");
      workoutTitle.text(response[i].title);
      exerciseName.text(response[i].body.exerciseName);
      duration.text(response[i].body.duration);
      newDiv.addClass("previous-workouts");
      newDiv.attr("data-id", response[i]._id);
      exerciseName.append(duration);
      workoutTitle.append(exerciseName);
      newDiv.append(workoutTitle);
      appendToMe.prepend(newDiv);
    }
    const mostRecent = response[response.length - 1];
    const appendToMostRecent = $("#most-recent-container");
    const newDiv = $("<div>");
    const workoutTitle = $("<h3>");
    const exerciseName = $("<p>");
    const duration = $("<p>");
    workoutTitle.text(mostRecent.title);
    exerciseName.text(mostRecent.body.exerciseName);
    duration.text(mostRecent.body.duration);
    newDiv.addClass("previous-workouts");
    newDiv.attr("data-id", mostRecent._id);
    exerciseName.append(duration);
    workoutTitle.append(exerciseName);
    newDiv.append(workoutTitle);
    appendToMostRecent.prepend(newDiv);
  });

  // getResults();
});
