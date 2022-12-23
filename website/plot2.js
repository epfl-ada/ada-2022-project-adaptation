function plot2() {
    var d2 = Plotly.d3;

    var gd2 = d2.select("div[id='plot2']")
    .style({
        'width': '100%',
        'margin-top': '3vh',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
    });

    var my_Div2 = gd2.node();
    var data2 = [
        {
          x: [0, 1, 2, 3, 4, 5, 6],
          y: [472773, 459254, 455003, 451841, 441373, 439941, 419001],
          type: 'bar',
          marker: {
            color: '#ec5046'
          }
        }
      ];

    var layout2 = {
        title:'Distribution of the weekdays upload dates', 
        barmode: "stack",
        xaxis: {
            title: 'Week day', 
            showgrid: false,
            zeroline: false,
            autorange: true,
            "tickvals": [0, 1, 2, 3, 4, 5, 6],
            "ticktext": ['4', '2', '3', '1', '5', '0', '6'],
            automargin: true
        },
        yaxis: {
            title: 'Number of videos',
            autorange: true,
            automargin: true
        },
        font: {size:12 , color: 'black'}, 
        paper_bgcolor: '#e4e4e4',
        plot_bgcolor: '#e4e4e4'
    }
            
    Plotly.plot(my_Div2, data2, layout2);
    		
    window.onresize = function() { Plotly.Plots.resize(my_Div2) };
}