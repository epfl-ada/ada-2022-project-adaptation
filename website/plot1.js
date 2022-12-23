function plot1() {
    var d1 = Plotly.d3;

    var gd1 = d1.select("div[id='plot1']")
    .style({
        'width': '100%',
        'margin-top': '3vh',
        'margin-bottom': '3vh',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
    });

    var my_Div1 = gd1.node();
    

    var xValues = ['Autos & vehicles', 'Comedy', 'Education', 'Entertainment', 'Film & Animation', 'Gaming', 'Howto & Style', 'Music', 'News & Politics', 'Nonprofits & Activism', 'People &  Blogs', 'Pets & Animals', 'Science & Technology', 'Sports', 'Travel & Events'];
    var yValues = ['0.9', '0.7', '0.5', '0.3', '0.1', '-0.1', '-0.3', '-0.5', '-0.7', '-0.9'];
    var zValues = [ [0.01, 0.01, 0.01, 0.02, 0.01, 0.02, 0.01, 0, 0.02, 0.0, 0.01, 0.01, 0, 0.01, 0.01], 
                    [0.04, 0.05, 0.04, 0.05, 0.04, 0.06, 0.03, 0.03, 0.07, 0.06, 0.05, 0.04, 0.02, 0.04, 0.04],
                    [0.08, 0.09, 0.07, 0.08, 0.08, 0.09, 0.05, 0.07, 0.1, 0.06, 0.07, 0.06, 0.05, 0.07, 0.07],
                    [0.06, 0.06, 0.05, 0.05, 0.06, 0.06, 0.04, 0.06, 0.07, 0.06, 0.05, 0.03, 0.03, 0.04, 0.05],
                    [0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.03, 0.03, 0.02, 0.01, 0.02, 0.02, 0.02],
                    [0.53, 0.53, 0.57, 0.51, 0.56, 0.47, 0.56, 0.6, 0.48, 0.54, 0.55, 0.59, 0.59, 0.57, 0.58],
                    [0.06, 0.06, 0.07, 0.07, 0.06, 0.07, 0.08, 0.06, 0.07, 0.08, 0.06, 0.1, 0.07, 0.06, 0.08],
                    [0.1, 0.1, 0.09, 0.1, 0.1, 0.1, 0.11, 0.09, 0.1, 0.1, 0.1, 0.11, 0.1, 0.09, 0.1],
                    [0.07, 0.06, 0.06, 0.07, 0.06, 0.07, 0.09, 0.06, 0.03, 0.05, 0.07, 0.06, 0.1, 0.08, 0.05],
                    [0.02, 0.02, 0.01, 0.02, 0.01, 0.02, 0.02, 0.01, 0.01, 0.02, 0.02, 0.01, 0.02, 0.02, 0.01]];

    var colorscaleValue = [[0, '#8c29ea'], [1, '#ea7b29']];

    var data1 = [{
        x: xValues,
        y: yValues,
        z: zValues,
        type: 'heatmap',
        colorscale: colorscaleValue
    }];


    var layout1 = {
        title: 'Sentiment Analysis for Videos: classified by category',
        annotations: [],
        xaxis: {
            ticks: '',
            title: 'Category',
            automargin: true
        },
        yaxis: {
            ticks: '',
            ticksuffix: ' ',
            width: 700,
            height: 700,
            autosize: false,
            title: 'Compound sentiment score',
            automargin: true
        },
        font: {size:12 , color: 'black'}, 
        paper_bgcolor: '#e4e4e4',
        plot_bgcolor: '#e4e4e4'
    };

    for ( var i = 0; i < yValues.length; i++ ) {
        for ( var j = 0; j < xValues.length; j++ ) {
            var result = {
                xref: 'x1',
                yref: 'y1',
                x: xValues[j],
                y: yValues[i],
                text: zValues[i][j],
                font: {
                    family: 'Arial',
                    size: 12,
                    color: 'rgb(50, 171, 96)'
                },
                showarrow: false,
                font: {
                    color: "white"
                }
            };
            layout1.annotations.push(result);
        }
    }


    Plotly.newPlot(my_Div1, data1, layout1);
    		
    window.onresize = function() { Plotly.Plots.resize(my_Div1) };
}