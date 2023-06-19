import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { Button } from "../ui/button/button";

export const Header = () => {
	return (
		<header>
			<Container>
				<h3 className="mt-5 mb-5 d-flex align-content-center justify-content-center">
					Байкало-Амурская Магистраль
				</h3>
			</Container>
			<Navbar bg="light">
				<Container className="justify-content-center">
					<Nav className="d-flex align-content-center justify-content-between gap-5 p-2">
						<Link to="/">
							<h5>Домашняя страница</h5>
						</Link>
						<Link to="/album">
							<h5>Фотоальбом</h5>
						</Link>
						<Link to="/favorite">
							<h5>Избранное</h5>
						</Link>
						<Link to="/about">
							<h5>О нас</h5>
						</Link>
						<Link to="/contacts">
							<h5>Контакты</h5>
						</Link>
						<Button text="Войти" type="buttton" />
						<Button text="Регистрация" type="buttton" />
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};
