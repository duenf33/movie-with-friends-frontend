import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "../component/SignUp/SignUp";
import squareRoot from "../img/squareRoot.svg";
import clipboard from "../img/clipboard.png";
import movieSearch from "../img/moviePlayer.svg";

export class Home extends Component {
	render() {
		return (
			<div className="form-body">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 quick-fix">
							<img src={squareRoot} width={140} height={140} />
							<h2>Int. Tax Calculator</h2>
							<p></p>
							<p>
								<NavLink
									className="btn btn-secondary"
									to="//https://calculator.fernandoduenas.com/">
									Go to page »
								</NavLink>
							</p>
						</div>
						<div className="col-lg-4 quick-fix">
							<img src={clipboard} width={140} height={140} />

							<h2>MyDoList</h2>
							<p></p>
							<p>
								<NavLink
									className="btn btn-secondary"
									to={"//https://mydolist.fernandoduenas.com"}>
									Go to page »
								</NavLink>
							</p>
						</div>
						<div className="col-lg-4 quick-fix">
							<img src={movieSearch} width={140} height={140} />
							<h2>Movie Search</h2>
							<p></p>
							<p>
								<NavLink className="btn btn-secondary" to="/login">
									Login »
								</NavLink>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
