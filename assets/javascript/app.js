


//<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCL2eV-3mZ6yuiwNuz3Wm3sKmc9TrJ94Mw",
    authDomain: "timesheet-e8ce3.firebaseapp.com",
    databaseURL: "https://timesheet-e8ce3.firebaseio.com",
    projectId: "timesheet-e8ce3",
    storageBucket: "",
    messagingSenderId: "427179094748"
  };
  firebase.initializeApp(config);

	var name;
	var role;
	var start;
	var monthly;

	var database= firebase.database();

	$("#addBtn").on("click",function(element)){
		name = $("#nameInput").val().trim();
		role = $("#roleInput").val().trim();
		start = $("#startInput").val().trim();
		monthly = $("monthlyInput").val().trim();

		database.ref().push({
			name: name,
			role: role,
			start: start,
			monthly: monthly
	
	});

	database.ref.().on("value", function(snapshot)) {
		var sv = snapshot.val();
		var svArr = object.keys(sv);
	}