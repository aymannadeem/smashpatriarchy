let React = require("react");
let classNames = require("classnames");

let styles = require("./styles.js");

let QuestionSection = React.createClass({
    render() {
        
        let sectionStyle = {
            height: '100%',
            width: '100%',
            backgroundColor: 'lightyellow',
            display: 'flex',
            flexDirection: 'column'
        };

        let containerStyle = {
            margin: '50px 0 50px 100px',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row'
        };

        let leftColStyle = {
            flexGrow: 0,
            flexShrink: 0,
            width: 350
        };

        let rightColStyle = {
            position: 'relative',
            flexGrow: 1,
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        };

        let bottomStyle = {
            position: 'absolute',
            bottom: 0
        };

        let imgStyle = {
            width: 200,
            height: 300,
            display: 'block',
            margin: 'auto',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: "url('http://www.weirdasianews.com/wp-content/uploads/2009/12/domo_kun.jpg');"
        };

        let ageStyle = { 
            textAlign: 'center',
            fontSize: '30',
            fontWeight: 'bold'
        };
        
        return <div style={sectionStyle} id={this.props.id}>
            <div style={containerStyle}>
                <div style={leftColStyle}>
                    <div style={imgStyle}></div>
                    <div style={ageStyle}>Age<br />5</div>
                        <h3>Factors that Discourage STEM</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar aliquam leo non eleifend. Pellentesque viverra suscipit purus rutrum porta.
                        </p>
                        <h3>How to Fight the Above Factor</h3>
                        <p>
                            Sed euismod condimentum nisl non tincidunt. Sed egestas sapien vitae rhoncus molestie. Sed id fermentum arcu. Nullam consequat quam eget lectus fringilla, non vulputate erat gravida.
                        </p>
                    </div>
                    <div style={rightColStyle}>
                        <h1>TITLE</h1>
                        <p style={{ width: 500 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar aliquam leo non eleifend. Pellentesque viverra suscipit purus rutrum porta. Sed euismod condimentum nisl non tincidunt. Sed egestas sapien vitae rhoncus molestie. Sed id fermentum arcu. Nullam consequat quam eget lectus fringilla, non vulputate erat gravida. Fusce ut vestibulum nunc. In sodales turpis enim, nec bibendum est gravida feugiat.
                        </p>
                        {this.props.dataviz}
                    </div>
                </div>
            </div>;
    }
});

module.exports = QuestionSection;
