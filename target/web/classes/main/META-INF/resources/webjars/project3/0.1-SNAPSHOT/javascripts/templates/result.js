define(["react"], function (React) {
    var ResultList = React.createClass({displayName: 'ResultList',
        render: function () {
            var resultNodes = this.props.data.map(function (result) {
                return (
                    React.createElement("div", {className: "result"}, 
                        React.createElement("div", null, result.title), 
                        React.createElement("div", null, result.url), 
                        React.createElement("div", null, result.parity)
                    )
                );
            });
            return (
                React.createElement("div", {className: "results"}, 
                    resultNodes
                )
            )
        }
    });

    return ResultList;
});

