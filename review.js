 <javaScript

    <script>

        function submitReview()
        {

            var name = document.getElementById("name").value;

            var email = document.getElementById("email").value;

            var movie = document.getElementById("movie").value;

            var rating = document.getElementById("rating").value;

            var review = document.getElementById("review").value;

            var message = document.getElementById("message");


            // to Check empty fields 

            if (name == "" ||
                email == "" ||
                movie == "" ||
                rating == "" ||
                review.trim() == "")
            {

                message.innerHTML =
                "Please fill in all the details.";

                message.style.color = "red";

                return;

            }


            //submissions

            message.innerHTML =
            "Thank you, " + name +
            "! Your review for " + movie +
            " has been submitted.";

            message.style.color = "green";


            

            document.getElementById("name").value = "";

            document.getElementById("email").value = "";

            document.getElementById("movie").value = "";

            document.getElementById("rating").value = "";

            document.getElementById("review").value = "";

        }

    </script>
