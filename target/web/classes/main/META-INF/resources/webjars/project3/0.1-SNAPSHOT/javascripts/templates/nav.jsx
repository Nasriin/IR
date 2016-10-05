define(["react"], function (React) {
    var NavComponent = React.createClass({
        render: function () {
            return (
                <nav className={"nav-" + this.props.navType}>
                    <ul className={"nav-" + this.props.navType + "-items"}>
                        {this.props.children}
                    </ul>
                </nav>
            )
        }
    });

    return NavComponent;
});