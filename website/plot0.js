function plot0() {
    var d0 = Plotly.d3;

    var gd0 = d0.select("div[id='plot0']")
    .style({
        'width': '100%',
        'margin-top': '3vh',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
    });

    var my_Div0 = gd0.node();
    

    var data0 = [
        {
          x: [-0.95, -0.85, -0.75, -0.65, -0.55, -0.45, -0.35, -0.25, -0.15, -0.05, 0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95],  // x values
          y: [9491, 50406, 77206, 136441, 122982, 129682, 113091, 79499, 45555, 1451028, 36363, 46738, 97613, 131417, 158822, 149392, 133917, 98755, 58209, 12579],  // y values
          type: 'bar',
          xbins: {
            start: -1,  // start of the x range
            end: 1,  // end of the x range
            size: 0.1  // size of the x bins
          },
          marker: {
            color: '#ec5046'
          }
        }
    ];
      
    var layout0 = {
        title: 'Sentiment Analysis : distribution',
        annotations: [],
        xaxis: {
            title: 'Compound score',
            automargin: true
        },
        yaxis: {
            title: 'Number of videos',
            automargin: true
        },
        font: {size:12 , color: 'black'}, 
        paper_bgcolor: '#e4e4e4',
        plot_bgcolor: '#e4e4e4'
    };
      
    Plotly.newPlot(my_Div0, data0, layout0);
    		
    window.onresize = function() { Plotly.Plots.resize(my_Div0) };
}