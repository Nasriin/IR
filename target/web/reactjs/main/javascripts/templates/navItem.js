define(["react"], function (React) {
    var NavItem = React.createClass({displayName: 'NavItem',
        render: function () {
            return (
                React.createElement("li", {className: "nav-" + this.props.navType + "-item"}, React.createElement("a", {href: "{this.props.href}"}, this.props.children))
            )
        }
    });

    return NavItem;
});