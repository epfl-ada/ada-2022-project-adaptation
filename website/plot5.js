function plot5() {    
    
    var d5 = Plotly.d3;

    var gd5 = d5.select("div[id='plot5']")
    .style({
        'width': '100%',
        'margin-top': '3vh',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
    });

    var my_Div5 = gd5.node();

    var allLabels = ['Lower titles', 'Upper titles'];
    var allValues = [[79.40, 20.60], [72.75, 27.25]];
    var ultimateColors = ['#8c29ea', '#ea7b29']
    
    var data5 = [
        {
            values: allValues[0],
            labels: allLabels,
            type: 'pie',
            title: 'Small channels (<100,000 subscribers)',
            name: 'Small channels',
            domain: {
                row: 0,
                column: 0
            },
            marker: {
                colors: ultimateColors
            },
            hoverinfo: 'label+percent+name',
            textinfo: 'none',
          },{
            values: allValues[1],
            labels: allLabels,
            type: 'pie',
            title: 'Big channels(>100,000 subscribers)',
            name: 'Big channels',
            domain: {
                row: 0,
                column: 1
            },
            marker: {
                colors: ultimateColors
            },
            hoverinfo: 'label+percent+name',
            textinfo: 'none'
          }
    ];

    var layout5 = {
        title:'Percentage of lower vs upper titles for both small and big channels',
        grid: {rows: 1, columns: 2},
        font: {size:12 , color: 'black'}, 
        paper_bgcolor: '#e4e4e4',
        plot_bgcolor: '#e4e4e4'
    }
            
    Plotly.plot(my_Div5, data5, layout5);
    		
    window.onresize = function() { Plotly.Plots.resize(my_Div5) };
}