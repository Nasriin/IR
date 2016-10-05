define(["react"], function (React) {
    var ResultList = React.createClass({
        render: function () {
            var resultNodes = this.props.data.map(function (result) {
                return (
                    <div className="result">
                        <div>{result.title}</div>
                        <div>{result.url}</div>
                        <div>{result.parity}</div>
                    </div>
                );
            });
            return (
                <div className="results">
                    {resultNodes}
                </div>
            )
        }
    });

    return ResultList;
});

