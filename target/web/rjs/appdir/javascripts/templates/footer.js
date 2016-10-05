define(["react"], function (React) {
    var Footer = React.createClass({displayName: 'Footer',
        render: function () {
            return (
                React.createElement("footer", {className: "app-footer"}, 
                    React.createElement("div", {className: "footer-message"}, this.props.children)
                )
            )
        }
    });

    return Footer;
});