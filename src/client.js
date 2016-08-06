import React from 'react';
import ReactDOM from 'react-dom';

var Comment = React.createClass({
    rawMarkup: function(){
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },
    render: function(){
        // var md = new Remarkable();
        return(
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML = {this.rawMarkup()} />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function(){
        return(
            <div className="commentList">
                <Comment author="Joey Hicklin">Wonderfully well worded things...</Comment>
                <Comment author="Bruce Elgort">*Other* wonderfully well worded things...</Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function(){
        return(
            <div className="commentForm">
                Please, spew more of your hate!
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="commentBox">
                <h1>Here's be the comments!</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('testBox')
);