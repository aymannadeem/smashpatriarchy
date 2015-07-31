let React = require("react");
let styles = require("./styles.js");

let InfoSection = React.createClass({
    render() {
        let style = Object.assign({
            background: "lightyellow"
        }, styles.section);
        
        let radius = 50;
        let round = {
            width: 2 * radius,
            height: 2 * radius,
            lineHeight: 2 * radius + "px",
            textAlign: "center",
            backgroundColor: '#9CF',
            color: "white",
            borderRadius: radius + 10,
            //border: "solid 5px #66F",
            boxSizing: "content-box",
            fontSize: 60
        };
        let roundA = Object.assign({}, round, { float: 'left' });
        let roundB = Object.assign({}, round, { float: 'right' });
        
        let dataViz = {
            width: "100%",
            height: 300,
            backgroundColor: "white",
            border: "solid 1px black"
        };
        
        let womanAtAgeX = {
            width: 200,
            height: 300,
            backgroundColor: "white",
            border: "solid 1px black",
            margin: "auto"
        };

        return <section style={style} id={this.props.id}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-xs-4"}>
                        <div className={"woman-at-age-x"} style={womanAtAgeX} />
                        <div style={{textAlign:"center", fontSize:30}}>
                            Age<br />X
                        </div>
                        <div>
                            FACTOR THAT DISCOURAGES STEM: TEXT TEXT TEXT TEXT TEXT 
                            TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT 
                            TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT 
                            TEXT TEXT TEXT TEXT TEXT
                        </div>
                        <div>
                            FACTOR THAT DISCOURAGES STEM: TEXT TEXT TEXT TEXT TEXT
                            TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                            TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT
                            TEXT TEXT TEXT TEXT TEXT
                        </div>
                    </div>
                    <div className={"col-xs-8"}>
                        <div style={{ margin: 50, height: 150 }}>
                            <div style={roundA}>A</div>
                            <div style={roundB}>B</div>
                        </div>
                        <div className={"data-viz"} style={dataViz} />
                    </div>
                </div>
                <div className={"row"} style={{textAlign:"center",marginTop:25}}>
                    {this.props.children}
                </div>
            </div>
        </section>
    }
});

module.exports = InfoSection;
