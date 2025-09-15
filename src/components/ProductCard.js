import React from "react";
import { Link } from "react-router-dom";

	export default function ProductCard({ id = 1, name, price, img }) {
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
					<Link to={`/urun/${id}`} className="btn btn-primary">
						Ürünü Gör
					</Link>
				</div>
			</div>
		);
}
