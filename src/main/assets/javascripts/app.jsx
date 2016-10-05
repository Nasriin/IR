define(['jquery', 'react', 'templates/main', 'templates/result'], function ($, React, IndexComponent, ResultList) {
    return {
        init: function () {
            React.render(<IndexComponent />, document.body);
        }
    }
});
