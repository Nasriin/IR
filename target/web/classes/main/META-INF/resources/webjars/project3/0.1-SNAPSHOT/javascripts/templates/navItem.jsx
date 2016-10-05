define(["react"], function (React) {
    var NavItem = React.createClass({
        render: function () {
            return (
                <li className={"nav-" + this.props.navType + "-item"}><a href="{this.props.href}">{this.props.children}</a></li>
            )
        }
    });

    return NavItem;
});