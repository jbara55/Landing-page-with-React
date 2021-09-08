import React from "react";
import caminofoto from "../../img/camino.png";

export const Card = () => {
	return (
		<div className="container-fluid my-5">
			<div className="row">
				<div className="col-md-3">
					<div className="card h-100">
						<img
							src={caminofoto}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						<div className="card-footer text-center">
							<button
								type="button"
								className="btn btn-primary btn-sm">
								Find Out More!
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card h-100">
						<img
							src={caminofoto}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						<div className="card-footer text-center">
							<button
								type="button"
								className="btn btn-primary btn-sm">
								Find Out More!
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card h-100">
						<img
							src={caminofoto}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						<div className="card-footer text-center">
							<button
								type="button"
								className="btn btn-primary btn-sm">
								Find Out More!
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card h-100">
						<img
							src={caminofoto}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						<div className="card-footer text-center">
							<button
								type="button"
								className="btn btn-primary btn-sm">
								Find Out More!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
