(function (window, $) {

  'use strict';

  $(function () {

  	//Simple two state switch (a check-box)
  		//make the switch
  	var demoSwitch1 = switchInputFactory('example-switch-1');
  		//do something with the state when it changes
  	$(demoSwitch1).on('state-change', function(){
      $('#example-output-1').html('switch set to: ' + this.state);
    });


  	//Many stated switch (radio-buttons? tabs?)
  		//make the switch this time with an optional default state
  	var demoSwitch2 = switchInputFactory('example-switch-2', ['one','two','three','four','five'], { defaultState:'three' });
  		//disable a particular state
  	demoSwitch2.disableState('four');
  		//do something with the state when it changes
  	$(demoSwitch2).on('state-change', function(){
      $('#example-output-2').html('switch set to: ' + this.state);
    });
  	


  	//Many two state switches (check-boxes? filters?)
  	//NOTE: possible enhancement, a convenience wrapper for groups of switches like this?
  	var switches = [];
  	['A','B','C','D'].forEach(function(d){
  		$('#example-switch-3').append('<div id="example-switch-3'+d+'" ><span class="switch-prompt">'+d+'</span></div>');
  		var s = switchInputFactory('example-switch-3'+d, [], { ref:d })
  		$(s).on('state-change',switchReport);
  		switches.push(s);
  	});

  	function switchReport(){
  		console.log('?')
  		var report = 'switches that are on: ';
  		switches.forEach(function(s){
  			if(s.state === 'on'){
  				report += s.ref + '. ';
  			}
  		})
  		$('#example-output-3').html(report);
  	}

  	//Custom styles
  	var demoSwitch4 = switchInputFactory('example-switch-4', ['custom (1!)','custom 2','custom 3','custom 4','custom 5'], { activeClass:'my-active-class', inactiveClass:'my-inactive-class', disabledClass:'my-disabled-class' });
  	$(demoSwitch4).on('state-change', function(){
      $('#example-output-4').html('switch set to: ' + this.getState());
    });


  	//Bertha-esq data source
  	//make 10 rows of dummy data
  	var exampleData = []; 
  	for(var i = 0; i <10; i++){
		exampleData.push({
			column1:Math.random()*100,
			column2:Math.random()*100,
			column3:Math.random()*100,
			column4:Math.random()*100
		});
	}
	//get the column names
	var columnNames = Object.keys(exampleData[0]);

  	var demoSwitch5 = switchInputFactory('example-switch-5', columnNames);
  	$(demoSwitch5).on('state-change', function(){
  		var selectedColumn = this.state;
  		var data = exampleData.map(function(d){
  			return Math.round(d[selectedColumn]); // round is to it looks nice
  		})
      $('#example-output-5').html('data from ' + selectedColumn + ': ' + data.join(', '));
    });

  });

}(this, jQuery));
