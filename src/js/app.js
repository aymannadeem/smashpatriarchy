let React = require("react");

let InfoSection = require("./info_section.js");
let QuestionSection = require("./question_section.js");
let BarGraph = require("./bar_graph.js");

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

        let dataset1 = [];
        for (let i = 0; i < 4; i++) {
            let newNumber = Math.random() * 400;
            dataset1.push(Math.ceil(newNumber));
        }

        let dataset2 = [];
        for (let i = 0; i < 2; i++) {
            let newNumber = Math.random() * 400;
            dataset2.push(Math.ceil(newNumber));
        }

        let graph1 = <BarGraph
            width={800}
            height={600}
            color={'rgb(0,128,255)'}
            dataset={dataset1}
            />;
        
        let graph2 = <BarGraph
            width={800}
            height={600}
            color={'rgb(255,128,0)'}
            dataset={dataset2}
            />;
        
        let questions = [
            {
                image: "http://www.weirdasianews.com/wp-content/uploads/2009/12/domo_kun.jpg",
                discourageText: "In the US, there is a 1:1 ratio of male to female babies that are born each year, yet men outnumber women 3:1 in STEM fields. ",
                fightText: "There are many factors that predispose women to pursue fields outside of STEM. Being aware of these factors can help us develop a better understanding of why this gap exists, and productively address issues that discourage women. ",
                nextHref: "Research shows that intelligence differences between sexes are negligible. Nobody is born smart - we all start at 0.",
                dataviz: graph1
            },
            
            {
                image: "http://www.weirdasianews.com/wp-content/uploads/2009/12/domo_kun.jpg",
                discourageText: "Factors that discourage: TEXT TEXT TEXT TEXT",
                fightText: "How to fight it: TEXT TEXT TEXT TEXT",
                nextHref: "#question-2",
                dataviz: graph1
            },

            {
                image: "http://www.weirdasianews.com/wp-content/uploads/2009/12/domo_kun.jpg",
                discourageText: "Factors that discourage: TEXT TEXT TEXT TEXT",
                fightText: "How to fight it: TEXT TEXT TEXT TEXT",
                nextHref: "#info-3",
                dataviz: graph2
            }
        ];
        
        return <div style={style}>
            <InfoSection id={"info-1"} nextHref={"#info-2"} />
            <InfoSection id={"info-2"} nextHref={"#question-1"} />
            <QuestionSection id={"question-1"} {...questions[0]} />
            <QuestionSection id={"question-2"} {...questions[1]} />
            <InfoSection id={"info-3"} nextHref={"#info-4"} />
            <InfoSection id={"info-4"} nextHref={"#info-1"} />
        </div>;
    }
});

let container = document.querySelector("#container");
React.render(<App />, container);
