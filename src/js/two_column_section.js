let React = require("react");
let classNames = require("classnames");

let styles = require("./styles.js");

let TwoColumnSection = React.createClass({
    render() {
        let style = Object.assign({}, styles.section, {
            backgroundColor: this.props.backgroundColor,
            color: this.props.textColor
        });

        let buttonClass = classNames({
            "btn": true,
            "btn-default": true,
            "page-scroll": true
        });
        
        return <section style={style} id={this.props.id}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-xs-6"}>
                        {this.props.leftColumn}
                    </div>
                    <div className={"col-xs-6"}>
                        {this.props.rightColumn}
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-xs-12"}>
                        <a className={buttonClass} href={this.props.nextHref}>next</a>
                    </div>
                </div>
            </div>
        </section>
    }
});

module.exports = TwoColumnSection;
