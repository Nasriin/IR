define(["react", "./header", "./nav", "./navItem", "./footer"], function(React, Header, Nav, NavItem, Footer) {

    var SearchForm = React.createClass({displayName: 'SearchForm',
        performSearch: function () {
            var queryText = $("#query-form-input").val();
            var queryType = $("[name='query-type']:checked").val()

            $.get("/api/query", { "q": queryText, "t": queryType}, function (responseData) {
                this.setProps({data: responseData})
            }.bind(this));
        },
        handleUserInput: function (searchText) {

        },
        render: function () {
            return (
                React.createElement("div", {className: "search-container"}, 
                    React.createElement("form", {id: this.props.name}, 
                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("input", {className: "form-control", id: "query-form-input", type: "text", placeholder: "Enter a URL to start your search..."})
                        ), 

                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("label", {for: "query-type"}, 
                            "Normal", 
                                React.createElement("input", {classname: "form-control", id: "query-type-normal", type: "radio", name: "query-type", value: "normal", selected: true})
                            ), 

                            React.createElement("label", {for: "query-type"}, 
                            "Sentiment", 
                                React.createElement("input", {classname: "form-control", id: "query-type-sentiment", type: "radio", name: "query-type", value: "sentiment"})
                            )
                        ), 

                        React.createElement("div", {className: "form-group"}, 
                            React.createElement("button", {classname: "form-control", id: "query-form-submit", type: "submit"}, React.createElement("span", null, "submit"))
                        )
                    ), 
                    React.createElement("div", {id: "search-results"}

                    )
                )
            )
        }
    });

    return SearchForm;
});
