let React = require("react");
let classNames = require('classnames');

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
        
        let imageStyle = {
            width: 200,
            height: 300,
            border: "solid 1px gray",
            margin: "auto",
            display: "block",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url('${this.props.image}');`
        };

        let buttonClass = classNames({
            "btn": true,
            "btn-default": true,
            "page-scroll": true
        });
        
        return <section style={style} id={this.props.id}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-xs-4"}>
                        <div className={"woman-at-age-x"} style={imageStyle} />
                        <div style={{textAlign:"center", fontSize:30}}>
                            Age<br />X
                        </div>
                        <div>{this.props.discourageText}</div>
                        <div>{this.props.fightText}</div>
                    </div>
                    <div className={"col-xs-8"}>
                        <div style={{ marginLeft: 50, marginRight:50, height: 100, zIndex:-1 }}>
                            <div style={roundA}>A</div>
                            <div style={roundB}>B</div>
                        </div>
                        {this.props.dataviz}
                    </div>
                </div>
                <div className={"row"} style={{textAlign:"center",marginTop:25}}>
                    <a className={buttonClass} href={this.props.nextHref}>Next</a>
                </div>
            </div>
        </section>
    }
});

module.exports = InfoSection;
