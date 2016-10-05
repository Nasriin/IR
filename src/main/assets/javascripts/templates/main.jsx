define(["react", "./header", "./search"], function(React, Header, Search) {

    var IndexComponent = React.createClass({
        render: function () {
            return (
                <div className="container">
                    <Header>
                        <h2 className="title">Final Project</h2>
                        <p>"Normal" will perform a regular search for your query, while "Sentiment" will perform a search on the URL field and return
                           results ranked by their sentiment score.</p>
                    </Header>
                    <main className="app-main">
                        <Search />
                    </main>
                </div>
            )
        }
    });

    return IndexComponent;
});
