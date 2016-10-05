define(["react"], function (React) {
    var HeaderComponent = React.createClass({
        render: function () {
            return (
                <header className="app-header">
                    <h1 className="logo"></h1>
                    {this.props.children}
                </header>
            )
        }
    });

    return HeaderComponent;
});