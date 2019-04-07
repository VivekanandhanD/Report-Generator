var text,text2,text0,text3;
var xname0="X",yname0="Y",yyname0="Y'",x0="1",y0="2",yy0="3";
var xname="X",yname="Y",x="1",y="2";
var xname2="X",yname2="Y",x2="1",y2="2";
var xname3="X",yname3="Y",x3="1",y3="2";
$(function ()
{
	$('select').material_select();
	$("#loader").hide();

	$("#Bgenerate").click(function()
	{
		if((text==="")&&(($('#Binputfile').val())===""))
			return;
		console.log($('#Binputfile').val());
		if(($('#Binputfile').val())!="")
		{
			$("#loader").show();
			xname = $("#x_name").val();
			yname = $("#y_name").val();
			x = $("#x_axis").val();
			y = $("#y_axis").val();
			if(xname.trim()==='')
				xname="X";
			if(yname.trim()==='')
				yname="Y";
			if(x===null||x==='')
				x="1";
			if(y===null||y==='')
				y="2";
			var value = text;
			var line = value.split("\n")[0];
		 	var line_arr = line.split(",");
			console.log(line_arr);
		 	
		 	line_arr[Number(x)-1] = xname;
		 	line_arr[Number(y)-1] = yname;
		 	value="";
		 	var i=0;
		 	for(;i<line_arr.length;)
		 	{
				value+='"'+line_arr[i]+'",';
				i++;
		 	}
		 	console.log(line_arr);
			var final_text=value+text;
		     loadBChart(final_text);
		     //text="";
          }
          else
          	alert("Please select a file first!");
	});

	$("#Bgenerate0").click(function()
	{
		if((text0==="")&&(($('#Binputfile0').val())===""))
			return;
		console.log($('#Binputfile0').val());
		if(($('#Binputfile0').val())!="")
		{
			$("#loader").show();
			xname0 = $("#x_name0").val();
			yname0 = $("#y_name0").val();
			yyname0 = $("#y2_name0").val();
			x0 = $("#x_axis0").val();
			y0 = $("#y_axis0").val();
			yy0 = $("#y2_axis0").val();
			if(xname0.trim()==='')
				xname0="X";
			if(yname0.trim()==='')
				yname0="Y";
			if(yyname0.trim()==='')
				yyname0="Y'";
			if(x0===null||x0==='')
				x0="1";
			if(y0===null||y0==='')
				y0="2";
			if(yy0===null||yy0==='')
				yy0="3";
			var value = text0;
			var line = value.split("\n")[0];
		 	var line_arr = line.split(",");
			console.log(line_arr);
		 	
		 	line_arr[Number(x0)-1] = xname0;
		 	line_arr[Number(y0)-1] = yname0;
		 	line_arr[Number(yy0)-1] = yyname0;
		 	value="";
		 	var i=0;
		 	for(;i<line_arr.length;)
		 	{
				value+='"'+line_arr[i]+'",';
				i++;
		 	}
		 	console.log(line_arr);
			var final_text=value+text0;
		     loadBChart0(final_text);
		     //text="";
          }
          else
          	alert("Please select a file first!");
	});

	$("#Pgenerate").click(function()
	{
		if((text2==="")&&(($('#Pinputfile').val())===""))
			return;
		console.log($('#Pinputfile').val());
		if(($('#Pinputfile').val())!="")
		{
			$("#loader").show();
			xname2 = $("#x_name2").val();
			yname2 = $("#y_name2").val();
			x2 = $("#x_axis2").val();
			y2 = $("#y_axis2").val();
			if(xname2.trim()==='')
				xname2="X";
			if(yname2.trim()==='')
				yname2="Y";
			if(x2===null||x2==='')
				x2="1";
			if(y2===null||y2==='')
				y2="2";
			var value = text2;
			var line = value.split("\n")[0];
		 	var line_arr = line.split(",");
			console.log(line_arr);
		 	
		 	line_arr[Number(x2)-1] = xname2;
		 	line_arr[Number(y2)-1] = yname2;
		 	value="";
		 	var i=0;
		 	for(;i<line_arr.length;)
		 	{
				value+='"'+line_arr[i]+'",';
				i++;
		 	}
		 	console.log(line_arr);
			var final_text=value+text2;
		     loadPChart(final_text);
		     //text="";
          }
          else
          	alert("Please select a file first!");
	});
	
	$("#Lgenerate").click(function()
	{
		if((text3==="")&&(($('#Linputfile').val())===""))
			return;
		console.log($('#Linputfile').val());
		if(($('#Linputfile').val())!="")
		{
			$("#loader").show();
			xname3 = $("#x_name3").val();
			yname3 = $("#y_name3").val();
			x3 = $("#x_axis3").val();
			y3 = $("#y_axis3").val();
			if(xname3.trim()==='')
				xname3="X";
			if(yname3.trim()==='')
				yname3="Y";
			if(x3===null||x3==='')
				x3="1";
			if(y3===null||y3==='')
				y3="3";
			var value = text3;
			var line = value.split("\n")[0];
		 	var line_arr = line.split(",");
			console.log(line_arr);
		 	
		 	line_arr[Number(x3)-1] = xname3;
		 	line_arr[Number(y3)-1] = yname3;
		 	value="";
		 	var i=0;
		 	for(;i<line_arr.length;)
		 	{
				value+='"'+line_arr[i]+'",';
				i++;
		 	}
		 	console.log(line_arr);
			var final_text=value+text3;
		     loadLChart(final_text);
		     //text="";
          }
          else
          	alert("Please select a file first!");
	});
	
	$("#reload").click(function()
	{
		$('#inputfile').val('');
		$("#x_name").val('X');
		$("#y_name").val('Y');
		$("#x_axis").val('1');
		$("#y_axis").val('2');
		window.location.reload();
	});
	
	$("#bar_nav").click(function()
	{
		$("#title").html("<h4>Bar Chart</h4>");
		$("#loader").show();
		$("#barchart_div").show();
		$("#linechart_div").hide();
		$("#doublebarchart_div").hide();
		$("#piechart_div").hide();
		$(".active").removeClass("active");
		$("#bar_nav").addClass("active");
		$("#loader").hide();
	});

	$("#double_bar_nav").click(function()
	{
		$("#title").html("<h4>Double-Column Bar Chart</h4>");
		$("#loader").show();
		$("#doublebarchart_div").show();
		$("#linechart_div").hide();
		$("#barchart_div").hide();
		$("#piechart_div").hide();
		$(".active").removeClass("active");
		$("#double_bar_nav").addClass("active");
		$("#loader").hide();
	});
	
	$("#pie_nav").click(function()
	{
		$("#title").html("<h4>Pie Chart</h4>");
		$("#loader").show();
		$("#piechart_div").show();
		$("#barchart_div").hide();
		$("#linechart_div").hide();
		$("#doublebarchart_div").hide();
		$(".active").removeClass("active");
		$("#pie_nav").addClass("active");
		$("#loader").hide();
	});

	$("#line_nav").click(function()
	{
		$("#title").html("<h4>Line Chart</h4>");
		$("#loader").show();
		$("#linechart_div").show();
		$("#piechart_div").hide();
		$("#barchart_div").hide();
		$("#doublebarchart_div").hide();
		$(".active").removeClass("active");
		$("#line_nav").addClass("active");
		$("#loader").hide();
	});

	

	var BfileInput = document.getElementById('Binputfile');
	var BfileInput0 = document.getElementById('Binputfile0');
	var PfileInput = document.getElementById('Pinputfile');
	var LfileInput = document.getElementById('Linputfile');

        BfileInput0.addEventListener('change', function(e) 
        {
        	$("#loader").show();
            var file = BfileInput0.files[0];
            var textType = /text.*/;

            if (file.type.match(textType)) 
            {
                var reader = new FileReader();

                reader.onload = function(e) 
                {
                	text0 = '';
                	text0 = reader.result;
                	$("#loader").hide();
                }

                reader.readAsText(file);    
            } else {
                console.log("File not supported!");
                $("#loader").hide();
            }
        });

        BfileInput.addEventListener('change', function(e) 
        {
        	$("#loader").show();
            var file = BfileInput.files[0];
            var textType = /text.*/;

            if (file.type.match(textType)) 
            {
                var reader = new FileReader();

                reader.onload = function(e) 
                {
                	text = '';
                	text = reader.result;
                	$("#loader").hide();
                }

                reader.readAsText(file);    
            } else {
                console.log("File not supported!");
                $("#loader").hide();
            }
        });

        PfileInput.addEventListener('change', function(e) 
        {
        	$("#loader").show();
            var file = PfileInput.files[0];
            var textType = /text.*/;

            if (file.type.match(textType)) 
            {
                var reader = new FileReader();

                reader.onload = function(e) 
                {
                	text2 = '';
                	text2 = reader.result;
                	$("#loader").hide();
                }

                reader.readAsText(file);    
            } else {
                console.log("File not supported!");
                $("#loader").hide();
            }
        });

	   LfileInput.addEventListener('change', function(e) 
        {
        	$("#loader").show();
            var file = LfileInput.files[0];
            var textType = /text.*/;

            if (file.type.match(textType)) 
            {
                var reader = new FileReader();

                reader.onload = function(e) 
                {
                	text3 = '';
                	text3 = reader.result;
                	$("#loader").hide();
                }

                reader.readAsText(file);    
            } else {
                console.log("File not supported!");
                $("#loader").hide();
            }
        });
        

});

function loadBChart0(text)
{
	var data= CSV2JSON(text);
     var jdata = JSON.parse(data);
	console.log(jdata);
	barChart0(jdata);
}

function loadBChart(text)
{
	var data= CSV2JSON(text);
     var jdata = JSON.parse(data);
	console.log(jdata);
	barChart(jdata);
}

function loadPChart(text)
{
	var data= CSV2JSON(text);
     var jdata = JSON.parse(data);
	console.log(jdata);
	pieChart("pie_chart",jdata,xname,yname);
}

function loadLChart(text)
{
	var data= CSV2JSON(text);
     var jdata = JSON.parse(data);
	console.log(jdata);
	lineChart(jdata);
}

function barChart0(data)
{
	var chart = AmCharts.makeChart( "double_bar_chart", {
	  "type": "serial",
	  "theme": "light",
	  "dataProvider":data,
	  "columnWidth": 0.6,
	  "mouseWheelZoomEnabled": false,
	  "valueAxes": [ {
	    "gridColor": "#FFFFFF",
	    "gridAlpha": 0.2,
	    "dashLength": 0,
	    "reversed": false
	  } ],
	  "gridAboveGraphs": true,
	  "startDuration": 0,
	  "graphs": [ {
	    "id":"g1",
	    "balloonText": "[[category]]: <b>[[value]]</b>",
	    "fillAlphas": 1,
	    "lineAlpha": 0.2,
	    "type": "column",
	    "fillColors": "red",
	    "valueField": yname0
	  },{
	    "id":"g2",
	    "balloonText": "[[category]]: <b>[[value]]</b>",
	    "fillAlphas": 0.8,
	    "lineAlpha": 0.2,
	    "type": "column",
	    "fillColors": "blue",
	    "valueField": yyname0
	  } ],
	  "chartScrollbar": {
	    "graph": "g1",
	    "oppositeAxis": true,
	    "offset": 30,
	    "scrollbarHeight": 40,
	    "backgroundAlpha": 0,
	    "selectedBackgroundAlpha": 0.1,
	    "selectedBackgroundColor": "#888888",
	    "graphFillAlpha": 0,
	    "graphLineAlpha": 0.1,
	    "selectedGraphFillAlpha": 0,
	    "selectedGraphLineAlpha": 0.21,
	    "autoGridCount": true,
	    "color": "#AAAAAA"
	  },
	  
	  "chartCursor": {
	    "categoryBalloonEnabled": false,
	    "cursorAlpha": 0,
	    "zoomable": true
	  },
	  "categoryField": xname0,
	  "categoryAxis": {
	    "gridPosition": "middle",
	    "gridAlpha": 0,
	    "autoGridCount": true,
         "forceShowField":"Type1",
         "centerRotatedLabels":true,
	    "tickPosition": "middle",
	    "tickLength": 20,
	    "labelRotation":45,
	  },
	  "legend": {
                "position":"bottom",
                "autoMargins":true,
                "data":[{
                	"title":"Purchase",
                	"color":"red",
                },{
                	"title":"Sales",
                	"color":"blue",
                }
                ],
                "top":-15
        },
	  "export": {
	    "enabled": true
	  }

	} );
}

function barChart(data)
{
	var chart = AmCharts.makeChart( "bar_chart", {
	  "type": "serial",
	  "theme": "light",
	  "dataProvider":data,
	  "columnWidth": 0.6,
	  "mouseWheelZoomEnabled": false,
	  "valueAxes": [ {
	    "gridColor": "#FFFFFF",
	    "gridAlpha": 0.2,
	    "dashLength": 0,
	    "reversed": false
	  } ],
	  "gridAboveGraphs": true,
	  "startDuration": 0,
	  "graphs": [ {
	    "id":"g1",
	    "balloonText": "[[category]]: <b>[[value]]</b>",
	    "fillAlphas": 0.8,
	    "lineAlpha": 0.2,
	    "type": "column",
	    "fillColors": "darkblue",
	    "valueField": yname
	  }],
	  "chartScrollbar": {
	    "graph": "g1",
	    "oppositeAxis": true,
	    "offset": 30,
	    "scrollbarHeight": 40,
	    "backgroundAlpha": 0,
	    "selectedBackgroundAlpha": 0.1,
	    "selectedBackgroundColor": "#888888",
	    "graphFillAlpha": 0,
	    "graphLineAlpha": 0.1,
	    "selectedGraphFillAlpha": 0,
	    "selectedGraphLineAlpha": 0.21,
	    "autoGridCount": true,
	    "color": "#AAAAAA"
	  },
	  
	  "chartCursor": {
	    "categoryBalloonEnabled": false,
	    "cursorAlpha": 0,
	    "zoomable": true
	  },
	  "categoryField": xname,
	  "categoryAxis": {
	    "gridPosition": "middle",
	    "gridAlpha": 0,
	    "autoGridCount": true,
         "forceShowField":"Type1",
         "centerRotatedLabels":true,
	    "tickPosition": "middle",
	    "tickLength": 20,
	    "labelRotation":45,
	  },
	  "export": {
	    "enabled": true
	  }

	} );
}


function  pieChart(id,chartData,catagoryAxis,valueAxis) {
        var chart = AmCharts.makeChart( id, {
                "type": "pie",
                "theme": "light",
                "dataProvider": chartData,
                "valueField": valueAxis,
                "titleField": catagoryAxis,
                "autoMargins":true
                ,
        "legend": {
                "position":"bottom",
                "marginLeft":15, 
                "autoMargins":true,
                "top":-15

        },
                "outlineAlpha": 0.4, 
                "startDuration": 0,
                "depth3D": 15,
                "balloonText": "<span style='font-size:9px'>[[title]] <span style='font-size:9px;'> [[value]]</span> : ([[percents]]%)</span>",
                "angle": 30,
                "export": {
                    "enabled": true,
                    "libs": {
                    },
                    "menu": [ {
                      "class": "export-main",
                      "menu": [ {
                        "label": "Download as ..",
                        "menu": [ "PNG", "JPG", "SVG","PDF" ]
                      }, {
                        "label":"Save as ..",
                        "menu": [ "CSV","JSON" ]
                      } ]
                    } ]
                  }
        } );
        jQuery( '.chart-input' ).off().on( 'input change', function() {
                var property = jQuery( this ).data( 'property' );
                var target = chart;
                var value = Number( this.value );
                chart.startDuration = 0;

        if ( property == 'innerRadius' ) {
                value += "%";
        }

        target[ property ] = value;
        chart.validateNow();
        } );
}

function lineChart(data)
{
	var chart = AmCharts.makeChart("line_chart", {
	    "type": "serial",
	    "theme": "light",
	    "marginRight": 80,
	    "autoMarginOffset": 20,
	    "marginTop": 7,
	    "dataProvider": data,
	    "valueAxes": [{
		   "axisAlpha": 0.2,
		   "dashLength": 1,
		   "position": "left"
	    }],
	    "mouseWheelZoomEnabled": true,
	    "graphs": [{
		   "id": "g1",
		   "balloonText": "[[value]]",
		   "bullet": "round",
		   "bulletBorderAlpha": 1,
		   "bulletColor": "yellow",
		   "hideBulletsCount": 50,
		   "title": "",
		   "valueField": yname3,
		   "useLineColorForBulletBorder": true,
		   "lineThickness":2,
		   "lineColor":"darkblue",
		   "balloon":{
		       "drop":true
		   }
	    }],
	    "chartScrollbar": {
		   "autoGridCount": true,
		   "graph": "g1",
		   "scrollbarHeight": 40
	    },
	    "chartCursor": {
		  "limitToGraph":"g1"
	    },
	    "categoryField": xname3,
	    "categoryAxis": {
		   "axisColor": "#DADADA",
		   "dashLength": 1,
		   "minorGridEnabled": true
	    },
	    "export": {
		   "enabled": true
	    }
	});

	//chart.addListener("rendered", zoomChart);
	//zoomChart();

	// this method is called when chart is first inited as we listen for "rendered" event
	//function zoomChart() {
	    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
	  //  chart.zoomToIndexes(data.length - 40, data.length - 1);
	//}
}
