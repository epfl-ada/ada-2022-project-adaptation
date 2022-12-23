function plot7() {
    var d7 = Plotly.d3;

    var gd7 = d7.select("div[id='plot7']")
    .style({
        'width': '100%',
        'height': '600px',
        'margin-top': '3vh',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
    });

    var my_Div7 = gd7.node();
    

    var data7 = [
        {   
            lowerfence: [5598],
            q1: [16147],
            median: [75950],
            q3: [225864],
            upperfence: [460743],
            type: 'box',
            name: 'Only gaming topics',
            boxpoints: 'all'
        },
        {   
            lowerfence: [8782],
            q1: [14749],
            median: [61087],
            q3: [287587],
            upperfence: [287587],
            type: 'box',
            name: 'Not only gaming topics',
            boxpoints: 'all'
        }
    ];
      
    var layout7 = {
        title: 'Distribution of suscribers for channels with focus on gaming vs diversity',
        boxmode: 'group',
        xaxis: {
            title: '',
            automargin: true
        },
        font: {size:12 , color: 'black'}, 
        paper_bgcolor: '#e4e4e4',
        plot_bgcolor: '#e4e4e4'
    };
      
    Plotly.newPlot(my_Div7, data7, layout7);
    Plotly.restyle(my_Div7, 'boxpoints', 'none');
    		
    window.onresize = function() { Plotly.Plots.resize(my_Div7) };
}