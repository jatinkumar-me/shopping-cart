type PropsType = {
	viewCart: boolean;
	setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav({ viewCart, setViewCart }: PropsType) {
	const button = (
		<button onClick={() => setViewCart(!viewCart)}>
			{viewCart ? "View Products" : "View Cart"}
		</button>
	);

   const content = (
      <nav className="nav">
         {button}
      </nav>
   )
	return content;
}

export default Nav;
