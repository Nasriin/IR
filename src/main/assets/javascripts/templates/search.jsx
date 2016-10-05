define(["react", "./result"], function(React, ResultList) {

    var Search = React.createClass({
        getInitialState: function () {
            return {data: [/*{
                key: 0,
                title: "empty result list",
                url: "http://www.concordia.ca",
                polarity: 0
            }*/]};
        },

        /**
         * Sends the search query to the server.
         */
        performSearch: function (queryText, queryType) {
            $.get("/api/query", { "q": queryText, "t": queryType}, function (responseData) {
                if (responseData.length > 0) {
                    if (responseData[0].polarity != null) {
                        var sum = 0;
                        for (var i in responseData) {
                            sum += responseData[i].polarity;
                        }
                        this.setState({avgSentiment: sum / responseData.length})
                    }
                }
                this.setState({data: responseData})

            }.bind(this));
        },

        /**
         * Event handler for search form submission.
         *
         * @param event
         */
        handleSubmit: function (event) {
            event.preventDefault();

            var queryText = $("#query-form-input").val();
            var queryType = $("[name='query-type']:checked").val();
            this.performSearch(queryText, queryType);

            return false;
        },

        /**
         * Renders the main search area.
         *
         * @returns {XML}
         */
        render: function () {
            return (
                <div className="search-container">
                    <form className="search-form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="query-type-normal">
                                <input id="query-type-normal" type="radio" name="query-type" value="normal" /> Normal
                            </label>

                            <label htmlFor="query-type-sentiment">
                                <input id="query-type-sentiment" type="radio" name="query-type" value="sentiment" /> Sentiment
                            </label>

                            <label htmlFor="query-type-sentiment-url">
                                <input id="query-type-sentiment-url" type="radio" name="query-type" value="sentiment_url" /> Sentiment (search URL only)
                            </label>
                        </div>

                        <div className="input-group">
                            <input className="form-control" id="query-form-input" type="text" placeholder="Enter a URL to start your search..." />
                            <span className="input-group-btn">
                                <button className="btn btn-default" id="query-form-submit" type="submit"><span>submit</span></button>
                            </span>
                        </div>
                    </form>

                    <div class="result-statistics">
                        <div class="num-results">Total results returned: {this.state.data.length}</div>
                        <div class="avg-sentiment">Average sentiment score: {(this.state.avgSentiment != undefined) ? this.state.avgSentiment : "n/a"}</div>
                    </div>
                    <ResultList data={this.state.data} />
                </div>
            )
        }
    });

    return Search;
});
