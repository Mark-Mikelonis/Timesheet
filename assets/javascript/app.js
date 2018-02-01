


//<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDbp9cwrRuVSracoaUoKlt0fFspXdCj9Dg",
    authDomain: "fir-d56b3.firebaseapp.com",
    databaseURL: "https://fir-d56b3.firebaseio.com",
    projectId: "fir-d56b3",
    storageBucket: "",
    messagingSenderId: "852229870699"
  };
  firebase.initializeApp(config);

	var name;
	var role;
	var start;
	var monthly;
	var monthsWorked;
	var billed;

	var database = firebase.database();

	$("#addBtn").on("click",function(event){
		event.preventDefault();
		name = $("#nameInput").val().trim();
		role = $("#roleInput").val().trim();
		start = $("#startInput").val().trim();
		monthly = parseInt($("#monthlyInput").val().trim());
		console.log(moment(start).unix());
		var now = moment().format("MM/DD/YY");
		// monthsWorked = Math.floor(moment.duration(moment().unix(moment().diff(start)), 'seconds').asMonths());
		monthsWorked = parseInt(moment(new Date(now)).diff(new Date(start), 'months', true));
		console.log("monthsWorked: " + monthsWorked);
		billed = monthsWorked  * monthly;

		database.ref().push({
			name: name,
			role: role,
			start: start,
			months: monthsWorked,
			monthly: monthly,
			billed: billed
		});	
	
	});

	database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
		var sv = snapshot.val();
		console.log("in child_added");
		$("#trainTable").html("<tr><td>"+sv.name+"</td><td>"+sv.role+"</td><td>"+ sv.start + "</td><td>"+sv.months+"</td>"+sv.months+"<td>$"+sv.monthly+"</td><td>$"+sv.billed+"</td></tr>");
	});



