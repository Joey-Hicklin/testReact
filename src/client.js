import React from 'react';
import ReactDOM from 'react-dom';

var data = [
    {id:1, author:"Joey Hicklin", text: "Wonderfully well worded things..."},
    {id:2, author:"Bruce Elgort", text: "*Other* wonderfully well worded things..."},
    {id:3, author:"Belal Sejouk", text: "*Even more* wonderfully well worded things..."}
];

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
        var commentNodes = this.props.data.map(function(comment){
            return(
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return(
            <div className="commentList">
                {commentNodes}
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
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('testBox')
);