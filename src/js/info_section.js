let React = require("react");
let classNames = require("classnames");

let styles = require("./styles.js");

let InfoSection = React.createClass({
    render() {
        let style = Object.assign({
            background: "lightblue"
        }, styles.section);

        let buttonClass = classNames({
            "btn": true,
            "btn-default": true,
            "page-scroll": true
        });
        
        return <section style={style} id={this.props.id}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <h1>Info Section</h1>
                        <a className={buttonClass} href={this.props.nextHref}>Click Me to Scroll Down!</a>
                    </div>
                </div>
            </div>
        </section>
    }
});

module.exports = InfoSection;
