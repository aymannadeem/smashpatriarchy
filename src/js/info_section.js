let React = require("react");
let styles = require("./styles.js");

let InfoSection = React.createClass({
    render() {
        let style = Object.assign({
            background: "lightblue"
        }, styles.section);
        
        return <section style={style} id={this.props.id}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-12"}>
                        <h1>Info Section</h1>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </section>
    }
});

module.exports = InfoSection;
