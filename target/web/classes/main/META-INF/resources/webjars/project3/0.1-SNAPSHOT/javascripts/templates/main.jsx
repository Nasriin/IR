define(["react", "./header", "./nav", "./navItem", "./footer"], function(React, Header, Nav, NavItem, Footer) {

    var IndexComponent = React.createClass({
        render: function () {
            return (
                <div className="container">
                    <Header>
                        <h2 className="title">Final Project</h2>
                        <p></p>
                    </Header>
                    <main className="app-main">
                        <div class="search-query">
                            <form id="query-form">
                                <div className="form-group">
                                    <input className="form-control" id="query-form-input" type="text" placeholder="Enter a URL to start your search..." />
                                </div>

                                <div className="form-group">
                                    <label for="query-type">
                                        Normal
                                        <input classname="form-control" id="query-type-normal" type="radio" name="query-type" value="normal" selected/>
                                    </label>

                                    <label for="query-type">
                                        Sentiment
                                        <input classname="form-control" id="query-type-sentiment" type="radio" name="query-type" value="sentiment" />
                                    </label>
                                </div>

                                <div className="form-group">
                                    <button classname="form-control" id="query-form-submit" type="submit"><span>submit</span></button>
                                </div>
                            </form>
                        </div>
                        <div id="search-results">
                            <p>The results will go here...</p>
                        </div>
                    </main>
                    <Footer></Footer>
                </div>
            )
        }
    });

    return IndexComponent;
});
