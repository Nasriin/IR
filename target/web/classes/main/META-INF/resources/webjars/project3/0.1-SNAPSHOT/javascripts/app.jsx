define(['jquery', 'react', 'templates/main', 'templates/result'], function ($, React, IndexComponent, ResultList) {
    return {
        init: function () {
            if (console != undefined) {
                console.log("Good boy.")
            }

            React.render(new IndexComponent, document.body)

            $("body").on("submit", "#query-form", function (event) {
                event.preventDefault();

                var queryText = $("#query-form-input").val();
                var queryType = $("[name='query-type']:checked").val()

                $.get("/api/query", { "q": queryText, "t": queryType}, function (responseData) {
                    React.render(
                        <ResultList data={responseData} />,
                        document.getElementById("#search-results")
                    )
                });

                return false;
            });
        }
    }
});
