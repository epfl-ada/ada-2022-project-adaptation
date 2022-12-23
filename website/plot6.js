function plot6() {
    var d6 = Plotly.d3;

    var gd6 = d6.select("div[id='plot6']")
    .style({
        'width': '100%',
        'margin-top': '3vh',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
    });

    var my_Div6 = gd6.node();
    

    var data6 = [
        {
          x: ['Entertainment', 'People & Blogs', 'Film & Animation', 'Travel & Events', 'Comedy', 'Music', 'Science & Technology',
              'Sports', 'Howto & Style', 'Education', 'Autos & Vehicles', 'News & Politics', 'Pets & Animals', 'Nonprofits & Activism', 'No category'],  // x values
          y: [81799, 80238, 33260, 21207, 20736, 18155, 12154, 8389, 7563, 6937, 5014, 1747, 1389, 451, 23],  // y values
          type: 'bar',
          marker: {
            color: '#ec5046'
          }
        }
    ];
      
    var layout6 = {
        title: 'Number of videos per categories (except gaming topic) for gaming channels',
        annotations: [],
        xaxis: {
            title: 'Category',
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
      
    Plotly.newPlot(my_Div6, data6, layout6);
    		
    window.onresize = function() { Plotly.Plots.resize(my_Div6) };
}