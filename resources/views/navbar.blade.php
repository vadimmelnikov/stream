<ul class="navbar-nav mr-auto">
	<router-link to="/" tag="li" class="nav-item" exact>
		<a class="nav-link">Home</a>
	</router-link>
	<router-link to="/about" tag="li" class="nav-item">
		<a class="nav-link">About</a>
	</router-link>
	<router-link to="/contact" tag="li" class="nav-item">
		<a class="nav-link">Contact</a>
	</router-link>
	<li class="nav-item dropdown">
		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
		   aria-haspopup="true" aria-expanded="false">
			Dropdown
		</a>
		<div class="dropdown-menu" aria-labelledby="navbarDropdown">
			<a class="dropdown-item" href="#">Action</a>
			<a class="dropdown-item" href="#">Another action</a>
			<div class="dropdown-divider"></div>
			<a class="dropdown-item" href="#">Something else here</a>
		</div>
	</li>
	<li class="nav-item">
		<a class="nav-link disabled" href="#">Disabled</a>
	</li>
</ul>
