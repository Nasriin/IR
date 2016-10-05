define(["react"], function (React) {
    var NavComponent = React.createClass({displayName: 'NavComponent',
        render: function () {
            return (
                React.createElement("nav", {className: "nav-" + this.props.navType}, 
                    React.createElement("ul", {className: "nav-" + this.props.navType + "-items"}, 
                        this.props.children
                    )
                )
            )
        }
    });

    return NavComponent;
});