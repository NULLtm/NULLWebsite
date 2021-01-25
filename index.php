<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="stylesheets/main.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script defer src="scripts/main.js"></script>
		<script defer src="http://localhost:3000/socket.io/socket.io.js"></script>
		<script defer src="scripts/chat.js"></script>
	</head>
	<body>
		<img alt="bgTop" src="images/BGTop.png" id="bgTop">
		<img alt="bgTop" src="images/BGBottom.png" id="bgBot">
		<button id="logo-container"><img alt="bottomLeft" src="images/LOGOLow.png" id="logoBottom"><img alt="topRight" src="images/LOGOHigh.png" id="logoTop"></button>
		<h1 id="title">NULL</h1>
		
		<div id="sidebar">
			<input type="image" src="images/discord.png" onclick="window.open('https://discordapp.com/users/251885339457748992/')" id="discord-icon" />
		</div>
		
		<?php
		if(isset($_POST['name'])) {
			$db = new PDO('sqlite:FormData.db');
			$formName = $_POST['name'];
			$formAge = $_POST['age'];
			$formGrade = $_POST['grade'];
			$stmnt = $db->prepare("INSERT INTO data (name, age, grade) VALUES(?, ?, ?)");
			$stmnt->execute([$formName, $formAge, $formGrade]);
		}
		?>


		<h2 class="section-header" id="form-header">FORM</h2>
		
		<form action="index.php" method="post">
			<label for="nameInput">NAME</label><br>
			<input id="nameInput" type="text" name="name">
			<label for="ageInput">AGE</label><br>
			<input id="ageInput" type="text" name="age">
			<label for="gradeInput">GRADE</label><br>
			<input id="gradeInput" type="text" name="grade">
			<input type="submit" value="SUBMIT">
		</form>


		<h2 class="section-header" id="chat-header">CHAT</h2>

		<div id="chat-container"></div>

		<form id="chat-footer">
			<input id="text-input" type="text">
			<input type="submit" id="chat-submit" value="Send">
		</form>
	</body>
</html>
