define(["react"], function (React) {
    var ResultList = React.createClass({
        render: function () {
            var count = {
                positive: 0,
                neutral: 0,
                negative: 0
            }

            var resultNodes = this.props.data.map(function (result) {
                if (result.polarity != null) {

                    var className = "result "

                    if (result.polarity > 1) {
                        className += "positive";
                        count.positive++;
                    }
                    else if (result.polarity >= 0 && result.polarity < 1) {
                        className += "neutral";
                        count.neutral++;
                    }
                    else {
                        className += "negative";
                        count.negative++;
                    }

                    return (
                        <div className={className}>
                            <div className="result-title"><a target="_blank" href={result.url}>{result.title}</a></div>
                            <div className="result-url"><em><strong>url: </strong></em>{result.url}</div>
                            <div className="result-sentiment"><em><strong>sentiment: </strong></em>{result.polarity}</div>
                        </div>
                    );
                }
                else {
                    return (
                        <div className="result">
                            <div className="result-title"><a target="_blank" href={result.url}>{result.title}</a></div>
                            <div className="result-url"><em><strong>url: </strong></em>{result.url}</div>
                        </div>
                    );
                }
            });
            var total = count.positive + count.neutral + count.negative;
            var totals = {
                positive: count.positive / total,
                neutral: count.neutral / total,
                negative: count.negative / total
            }
            return (
                <div>
                    <div className="results-sentiment-counts">
                        <div className="results-positive-count">
                            % Positive: {totals.positive}
                        </div>
                        <div className="results-neutral-count">
                            % Neutral: {totals.neutral}
                        </div>
                        <div className="results-negative-count">
                            % Negative: {totals.negative}
                        </div>
                    </div>
                    <div className="results">
                        {resultNodes}
                    </div>
                </div>

            );
        }
    });
    return ResultList;
});

