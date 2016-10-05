define(["react"], function (React) {
    var Footer = React.createClass({
        render: function () {
            return (
                <footer className="app-footer">
                    <div className="footer-message">{this.props.children}</div>
                </footer>
            )
        }
    });

    return Footer;
});