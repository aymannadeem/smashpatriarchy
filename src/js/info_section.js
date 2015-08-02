let React = require("react");
let classNames = require("classnames");

let styles = require("./styles.js");

let InfoSection = React.createClass({
    render() {
        let style = Object.assign({
            backgroundColor: this.props.color
        }, styles.section);

        let buttonClass = classNames({
            "btn": true,
            "btn-default": true,
            "page-scroll": true
        });
        
        let h1Style = {
            fontSize: 60
        };
        
        let pStyle = {
            fontSize: 30,
            marginTop: 100
        };
        
        return <section style={style} id={this.props.id}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <h1 style={h1Style}>{this.props.title}</h1>
                        <p style={pStyle}>{this.props.content}</p>
                        <h1 style={h1Style}>{this.props.subtitle}</h1>
                        <a className={buttonClass} href={this.props.nextHref}>next</a>
                    </div>
                </div>
            </div>
        </section>
    }
});

module.exports = InfoSection;
