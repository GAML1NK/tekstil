import React from "react";

export default function ProductCard({ name, price, img }) {
		return (
			<div className="card h-100">
				<img
					src={img}
					className="card-img-top w-100"
					alt={name}
					style={{ height: "350px", objectFit: "cover" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{price}</p>
					<button className="btn btn-primary">Kategoriye Git</button>
				</div>
			</div>
		);
}
