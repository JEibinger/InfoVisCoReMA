//Pie chart Übersicht butter, lard, cooking oil
$( document ).ready( function fat(){
let data = [{
  values: [49,304,43],
  labels: ['butter', 'lard', 'cooking oil'],
  type: 'pie',
  marker: {colors: ["#f2ea6f", "#b7cca5", "#ff5752"]},
  hoverinfo: 'label+value'
  }];
  
  let layout = {
    font: {family: "Georgia, Times, serif"},
    height: 400,
    width: 500
  };

Plotly.newPlot('fatVis', data, layout);
})

//Pie Verwendung Spices & Herbs
$( document ).ready( function spicy(){
  let data = [{
    values: [646,347,326,311,246,125,114,112,107,81,77,55,46,42,39,31,29,28,26,24,18,17,13,12,12,12,11,9,9,9,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,5,5,4,4,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    labels: ['spice','saffron','table salt','vinegar','pepper','parsley','clove','common sage','cinnamon','caraway','herb','anise','garlic','mint','nutmeg apple','sauce','coriander','lesser galangal','mace','powder','pennyroyal','cumin','elder flower','cardamom','sumac','Piper cubeba','common rue','hyssop','cassia buds','Piper longum','parsley root','violet','grain of paradise','camphor','rosemary','Centaurea cyanus','cornflower','Rosa','rose','marjoram','sloe','blackthorn','Valeriana celtica','Satureja','savory','Anacyclus','pellitory','common sorrel','Rumex acetosa','parsley seed','flower','southernwood','rock salt','grape-vine','grapevine','grape-vine','grapevine','common thyme','Portulaca','purslane','Purslane','lemon leaf','Atriplex','orache','medlar','bay leaf','rosemary oil','garden chervil','corn mint','Artemisia vulgaris','common wormwood','elecampane','Elecampane','Nardostachys jatamansi','spikenard','licorice','liquorice','Agrostemma githago','Levisticum officinale','lovage','alum','dwarf elder','Sambucus ebulus','onion juice','grape leaf','grape leaf','hop','hops','costus','Costus','Cyperus rotundus','borage','Acorus calamus','sweet flag','Portulaca oleracea','purslane','cane','Juncus','Mentha','mint, a species of','Sonchus oleraceus','Lilium','lily','Tanacetum vulgare','tansy','crisped mint','Artemisia absinthium','wormwood','sea salt','Plantago psyllium','Lupinus','white pepper','chive','chives','celery seed','basil','stinging nettle','Urtica dioica'],
    type: 'pie',
    hoverinfo: 'label+percent',
    textinfo: 'none'
    }];
    
  let layout = {
    font: {family: "Georgia, Times, serif"},
    height: 500,
    width: 1000
  };    

Plotly.newPlot('spicy', data, layout);
})

//Top Ten Spices in Collections
$( document ).ready( function spicyTop(){
  let trace1 = {
    x: ['M11','B2','Br1','B4','H2a','H2b','B6','Gr1','Bs1','B3'],
    y: [24.75247524752475247525,60,80,28.97526501766784452297,36.36363636363636363636,35.13513513513513513514,23.52941176470588235294,44.16961130742049469965,31.37254901960784313725,57.89473684210526315789],
    xaxis: 'x1',
    yaxis: 'y1',
    type: 'scatter',
    name: 'spice',
    fill: 'tozeroy', 
    hoverinfo: 'y'
    };

  let trace2 = {
    x: ['M11','B2','Br1','B4','H2a','H2b','B6','Gr1','Bs1','B3'],
    y: [17.82178217821782178218,0,35.55555555555555555556,17.66784452296819787986,16.66666666666666666667,13.51351351351351351351,20.58823529411764705882,24.38162544169611307420,19.28104575163398692810,10.52631578947368421053],
    xaxis: 'x2',
    yaxis: 'y2',
    type: 'scatter',
    name: 'saffron',
    fill: 'tozeroy', 
    hoverinfo: 'y'
    };
  
  let trace3 = {
    x: ['M11','B2','Br1','B4','H2a','H2b','B6','Gr1','Bs1','B3'],
    y: [17.82178217821782178218,0,4.44444444444444444444,15.19434628975265017668,7.57575757575757575758,10.81081081081081081081,14.70588235294117647059,12.72084805653710247350,15.35947712418300653595,10.52631578947368421053],
    xaxis: 'x3',
    yaxis: 'y3',
    type: 'scatter',
    name: 'table salt',
    fill: 'tozeroy', 
    hoverinfo: 'y'
    };

  let trace4 = {
    x: ['M11','B2','Br1','B4','H2a','H2b','B6','Gr1','Bs1','B3'],
    y: [13.86138613861386138614,0,8.88888888888888888889,15.90106007067137809187,13.63636363636363636364,18.91891891891891891892,17.64705882352941176471,13.42756183745583038869,14.37908496732026143791,26.31578947368421052632],
    xaxis: 'x4',
    yaxis: 'y4',
    type: 'scatter',
    name: 'vinegar',
    fill: 'tozeroy', 
    hoverinfo: 'y'
    };

  let trace5 = {
    x: ['M11','B2','Br1','B4','H2a','H2b','B6','Gr1','Bs1','B3'],
    y: [25.74257425742574257426,0,4.44444444444444444444,15.19434628975265017668,12.12121212121212121212,13.51351351351351351351,11.76470588235294117647,12.72084805653710247350,13.07189542483660130719,0],
    xaxis: 'x5',
    yaxis: 'y5',
    type: 'scatter',
    name: 'pepper',
    fill: 'tozeroy', 
    hoverinfo: 'y'
    };

  let trace6 = {
    x: ['M11','B2','Br1','B4','H2a','H2b','B6','Gr1','Bs1','B3'],
    y: [8.91089108910891089109,0,6.66666666666666666667,6.36042402826855123675,12.12121212121212121212,16.21621621621621621622,26.47058823529411764706,0.35335689045936395760,7.84313725490196078431,0],
    xaxis: 'x6',
    yaxis: 'y6',
    type: 'scatter',
    name: 'parsley',
    fill: 'tozeroy', 
    hoverinfo: 'y'
    };

  let trace7 = {
    x: ['M11','B2','Br1','B4','H2a','H2b','B6','Gr1','Bs1','B3'],
    y: [1.98019801980198019802,20,0,6.36042402826855123675,10.60606060606060606061,2.70270270270270270270,2.94117647058823529412,7.42049469964664310954,6.20915032679738562092,5.26315789473684210526],
    xaxis: 'x7',
    yaxis: 'y7',
    type: 'scatter',
    name: 'clove',
    fill: 'tozeroy', 
    hoverinfo: 'y'
    };

  let trace8 = {
    x: ['M11','B2','Br1','B4','H2a','H2b','B6','Gr1','Bs1','B3'],
    y: [9.90099009900990099010,20,2.22222222222222222222,6.00706713780918727915,4.54545454545454545455,5.40540540540540540541,8.82352941176470588235,4.59363957597173144876,6.86274509803921568627,0],
    xaxis: 'x8',
    yaxis: 'y8',
    type: 'scatter',
    name: 'common sage',
    fill: 'tozeroy', 
    hoverinfo: 'y'
    };

  let trace9 = {
    x: ['M11','B2','Br1','B4','H2a','H2b','B6','Gr1','Bs1','B3'],
    y: [0.99009900990099009901,0,2.22222222222222222222,3.88692579505300353357,15.15151515151515151515,2.70270270270270270270,8.82352941176470588235,5.65371024734982332155,2.94117647058823529412,0],
    xaxis: 'x9',
    yaxis: 'y9',
    type: 'scatter',
    name: 'cinnamon',
    fill: 'tozeroy', 
    hoverinfo: 'y'
    };    

let trace10 = {
    x: ['M11','B2','Br1','B4','H2a','H2b','B6','Gr1','Bs1','B3'],
    y: [6.93069306930693069307,0,0,4.24028268551236749117,0,0,5.88235294117647058824,1.76678445229681978799,3.92156862745098039216,0],
    xaxis: 'x10',
    yaxis: 'y10',
    type: 'scatter',
    name: 'caraway',
    fill: 'tozeroy', 
    hoverinfo: 'y'
      };    

  let layout = {
    font: {family: "Georgia, Times, serif"},
    title: 'Percentage of Top 10 Spices in Collections',
    grid: {rows: 5,
      columns: 2,
      pattern: 'independent',
      roworder:'top to bottom'}
    };
    
    let data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];
    
    Plotly.newPlot('spicyTop', data, layout);
})