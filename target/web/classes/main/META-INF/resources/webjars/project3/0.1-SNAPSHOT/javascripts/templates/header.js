define(["react"], function (React) {
    var HeaderComponent = React.createClass({displayName: 'HeaderComponent',
        render: function () {
            return (
                React.createElement("header", {className: "app-header"}, 
                    React.createElement("h1", {className: "logo"}), 
                    this.props.children
                )
            )
        }
    });

    return HeaderComponent;
});