let React = require("react");
let classNames = require('classnames');

let InfoSection = require("./info_section.js");
let QuestionSection = require("./question_section.js");

let App = React.createClass({
    componentDidMount() {
        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });
    },
    
    render() {
        let style = {
            height: "100%"
        };
        
        let buttonClass = classNames({
            "btn": true,
            "btn-default": true,
            "page-scroll": true
        });
        
        let questions = [
            {
                image: "http://www.weirdasianews.com/wp-content/uploads/2009/12/domo_kun.jpg",
                discourageText: "Factors that discourage: TEXT TEXT TEXT TEXT",
                fightText: "How to fight it: TEXT TEXT TEXT TEXT",
                nextHref: "#question-2"
            },
            {
                image: "http://www.weirdasianews.com/wp-content/uploads/2009/12/domo_kun.jpg",
                discourageText: "Factors that discourage: TEXT TEXT TEXT TEXT",
                fightText: "How to fight it: TEXT TEXT TEXT TEXT",
                nextHref: "#info-3"
            }
        ];
        
        return <div style={style}>
            <InfoSection id={"info-1"}>
                <a className={buttonClass} href="#info-2">Click Me to Scroll Down!</a>
            </InfoSection>
            <InfoSection id={"info-2"}>
                <a className={buttonClass} href="#question-1">Click Me to Scroll Down!</a>
            </InfoSection>
            <QuestionSection id={"question-1"} {...questions[0]} />
            <QuestionSection id={"question-2"} {...questions[1]} />
            <InfoSection id={"info-3"}>
                <a className={buttonClass} href="#info-4">Click Me to Scroll Down!</a>
            </InfoSection>
            <InfoSection id={"info-4"}>
                <a className={buttonClass} href="#info-1">Click Me to Scroll Up to the top!</a>
            </InfoSection>
        </div>;
    }
});

let container = document.querySelector("#container");
React.render(<App />, container);
