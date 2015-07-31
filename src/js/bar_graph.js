let React = require("react");
let d3 = require("d3");

var Chart = React.createClass({
    propTypes: {
        data: React.PropTypes.array,
        domain: React.PropTypes.object
    },

    componentDidMount: function() {
        let { width, height, color, dataset } = this.props;
        let el = this.getDOMNode();
        
        let svg = d3.select(el)
            .append("div")
            .classed("svg-container", true) //container class to make it responsive
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", `0 0 ${width} ${height}`)
            //class to make it responsive
            .classed("svg-content-responsive", true);

        let rects = svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect");

        let inset = [20,20];
        
        let colWidth = (width - 2 * inset[0]) / dataset.length;
        let gap = 5;
        
        rects
            .attr("x", (d, i) => i * colWidth + inset[0])
            .attr("y", d => height - d)
            .attr("width", colWidth - gap)
            .attr("height", d => d)
            .attr("fill", color);
    },

    componentDidUpdate: function() {
        
    },

    componentWillUnmount: function() {
        var el = this.getDOMNode();
        el.remove();
    },

    render: function() {
        return <div className="Chart"></div>;
    }
});

module.exports = Chart;
