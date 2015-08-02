let React = require("react");

let InfoSection = require("./info_section.js");
let QuestionSection = require("./question_section.js");
let TwoColumnSection = require("./two_column_section.js");
let BarGraph = require("./bar_graph.js");

let styles = require("./styles.js");


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
        
        let imgStyle = {
            margin: 25
        };
        
        let slides = [
            {
                type: "info",
                color: styles.colors.lightPurple,
                title: "Why are there so few women in STEM occupations?",
                content: "This interactive infographic is a thought experiment showing how women’s chances of pursuing STEM fields are impacted by various external factors, in addition to what we as a society can do to...",
                subtitle: "SMASH the PATRIARCHY"
            },
            {
                type: "two_column",
                backgroundColor: styles.colors.darkPurple,
                textColor: styles.colors.lightPurple,
                leftColumn: <div>
                    <h1>in a S.T.E.M. occupation,
                        In the U.S., there is about 1 male born for every 1 female.</h1>
                    <img src="images/img_baby.svg" />
                </div>,
                rightColumn: <div style={{ textAlign: 'center' }}>
                    <div>
                        <img style={imgStyle} src="images/img_malesymbol.svg" />
                        <img style={imgStyle} src="images/img_femalesymbol1.svg" />
                    </div>
                    <div>
                        <img style={imgStyle} src="images/img_malesymbol.svg" />
                        <img style={imgStyle} src="images/img_femalesymbol1.svg" />
                    </div>
                    <div>
                        <img style={imgStyle} src="images/img_malesymbol.svg" />
                        <img style={imgStyle} src="images/img_femalesymbol1.svg" />
                    </div>
                    <h1>For every 1 woman
                        there are 3 men.
                        in a S.T.E.M. occupation,</h1>
                </div>
            },
            {
                type: "question",
                image: "https://cdn3.iconfinder.com/data/icons/baby-icons/512/Baby_Girl-512.png",
                discourageText: "In the US, there is a 1:1 ratio of male to female babies that are born each year, yet men outnumber women 3:1 in STEM fields. ",
                fightText: "There are many factors that predispose women to pursue fields outside of STEM. Being aware of these factors can help us develop a better understanding of why this gap exists, and productively address issues that discourage women. ",
                dataviz: graph1,
                color: styles.colors.mediumGreen
            },
            {
                type: "question",
                image: "https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/1930484_24722568534_2247_n.jpg?oh=3d108e39cfd2daf6b700f634acaa3435&oe=565BD85F",
                discourageText: "Studies show that relative to their male counterparts, women perform poorly in spatial cognition, skills largely used in STEM professions. ",
                fightText: "How to fight it: TEXT TEXT TEXT TEXT",
                dataviz: graph1,
                color: styles.colors.lightGreen
            },
            {
                type: "question",
                image: "http://www.weirdasianews.com/wp-content/uploads/2009/12/domo_kun.jpg",
                discourageText: "Factors that discourage: TEXT TEXT TEXT TEXT",
                fightText: "How to fight it: TEXT TEXT TEXT TEXT",
                dataviz: graph2,
                color: styles.colors.mediumGreen
            },
            {
                type: "info"
            },
            {
                type: "info"
            }
        ];
        
        return <div style={style}>
            {slides.map((slide, i) => {
                slide.id = "section-" + i;
                slide.nextHref = `#section-${(i + 1) % slides.length}`;
                if (slide.type === "info") {
                    return <InfoSection {...slide} />;
                } else if (slide.type === "question") {
                    return <QuestionSection {...slide} />;
                } else if (slide.type === "two_column") {
                    return <TwoColumnSection {...slide} />;
                }
            })}
        </div>;
    }
});

let container = document.querySelector("#container");
React.render(<App />, container);
