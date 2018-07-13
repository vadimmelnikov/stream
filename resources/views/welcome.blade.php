<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta name="csrf-token" content="{{ csrf_token() }}">

	<title>Laravel</title>

	<!-- Fonts -->

	<!-- Styles -->
	<link rel="stylesheet" href="/css/app.css">
</head>
<body>

		<div id="app">
			<examplecomponent></examplecomponent>
		</div>

		<div class="container">
			<div id="one">
				@{{ shared.user.name }}
			</div>
			<div id="two">
				@{{ shared.user.name }}
			</div>
		</div>
		<div class="container">
			<div id="inputCustom">
				<coupon v-model="coupon"></coupon>
			</div>
		</div>
		<script src="/js/app.js"></script>
</body>
</html>
