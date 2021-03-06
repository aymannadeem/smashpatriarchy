let React = require("react");
let classNames = require("classnames");

let styles = require("./styles.js");

let QuestionSection = React.createClass({
    render() {
        
        let sectionStyle = {
            height: '100%',
            width: '100%',
            backgroundColor: this.props.color,
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
            width: 400
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
            backgroundImage: `url('${this.props.image}');`
        };

        let ageStyle = { 
            textAlign: 'center',
            fontSize: '30',
            fontWeight: 'bold'
        };

        let buttonClass = classNames({
            "btn": true,
            "btn-default": true,
            "page-scroll": true
        });
        
        return <div style={sectionStyle} id={this.props.id}>
            <div style={containerStyle}>
                <div style={leftColStyle}>
                    <div style={imgStyle}></div>
                    <div style={ageStyle}>Age<br />5</div>
                        <h3>FACTORS DISCOURAGING STEM:</h3>
                        <p>
                            {this.props.discourageText}
                        </p>
                        <h3>HOW TO SMASH THE PATRIARCHY:</h3>
                        <p>
                            {this.props.fightText}
                        </p>
                        <a className={buttonClass} href={this.props.nextHref}>next</a>
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
