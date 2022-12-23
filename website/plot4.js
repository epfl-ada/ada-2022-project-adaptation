function plot4() {    
    
    var d4 = Plotly.d3;

    var gd4 = d4.select("div[id='plot4']")
    .style({
        'width': '100%',
        'margin-top': '3vh',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
    });

    var my_Div4 = gd4.node();

    var trace1 = {
        x: ['1500000','1510000', '1520000',
            '1530000', '1540000', '1550000', '1560000',
            '1570000', '1580000', '1590000', '1600000',
            '1610000', '1620000', '1630000', '1640000',
            '1650000', '1660000', '1670000', '1680000',
            '1690000', '1700000', '1710000', '1720000',
            '1730000', '1740000', '1750000', '1760000',
            '1770000', '1780000', '1790000'],
        y: [166, 172, 165, 153, 161, 148, 158, 136, 127, 145, 166, 154, 131,
            179, 123, 135, 123, 138, 121, 140, 109, 112, 107, 109, 122, 116,
            122, 113, 111, 106],
        name: 'Lower title',
        type: 'bar',
        marker: {
            color: '#8c29ea'
        }
    };
      
    var trace2 = {
        x: ['1500000','1510000', '1520000',
            '1530000', '1540000', '1550000', '1560000',
            '1570000', '1580000', '1590000', '1600000',
            '1610000', '1620000', '1630000', '1640000',
            '1650000', '1660000', '1670000', '1680000',
            '1690000', '1700000', '1710000', '1720000',
            '1730000', '1740000', '1750000', '1760000',
            '1770000', '1780000', '1790000'],
        y: [ 96,  99,  91, 109, 103, 103,  75,  90,  84,  81,  86,  79,  96,
            83,  76,  84,  82,  68,  73,  74,  81,  79,  74,  61,  71,  79,
            78,  73,  73,  75],
        name: 'Upper title',
        type: 'bar',
        marker: {
            color: '#ea7b29'
        }
    };
    
    var data4 = [trace1, trace2];

    var layout4 = {
        title:'Number of videos per view range (1.5M to 1.8M)', 
        barmode: "group",
        xaxis: {
            title: 'View count', 
            showgrid: false,
            zeroline: false,
            autorange: true,
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
            
    Plotly.plot(my_Div4, data4, layout4);
    		
    window.onresize = function() { Plotly.Plots.resize(my_Div4) };
}