define(["react", "./header", "./nav", "./navItem", "./footer"], function(React, Header, Nav, NavItem, Footer) {

    var IndexComponent = React.createClass({displayName: 'IndexComponent',
        render: function () {
            return (
                React.createElement("div", {className: "container"}, 
                    React.createElement(Header, null, 
                        React.createElement("h2", {className: "title"}, "Final Project"), 
                        React.createElement("p", null)
                    ), 
                    React.createElement("main", {className: "app-main"}, 
                        React.createElement("div", {class: "search-query"}, 
                            React.createElement("form", {id: "query-form"}, 
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
                            )
                        ), 
                        React.createElement("div", {id: "search-results"}, 
                            React.createElement("p", null, "The results will go here...")
                        )
                    ), 
                    React.createElement(Footer, null)
                )
            )
        }
    });

    return IndexComponent;
});
