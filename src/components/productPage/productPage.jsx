import React, { Component } from 'react';
import DesktopProductPage from './desktopProductPage';
import MobileProductPage from './mobileProductPage';

class ProductPage extends Component {
	state = {
		product: {
			name: 'Kitten hgasf  asfghd a sdhf hf dahs  dfsah dsa',
			category: 'books',
			src: [
				'http://placekitten.com/350/450',
				'http://placekitten.com/350/350',
				'http://placekitten.com/350/850',
			],
			rating: 4,
			ldc: 240,
			wishlist: true,
			desc: `Mice cats making all the muffins and destroy couch, and with tail in the air meowzer paw your face to wake you up in the morning, yet friends are not food. Sleep on my human's head chill on the couch table for purr when give birth. Ask to be pet then attack owners hand. Hide when guests come over plan your travel bring your owner a dead bird sleep in the bathroom sink relentlessly pursues moth but kitty power. Scratch the box i show my fluffy belly but it's a trap! if you pet it i will tear up your hand or mewl for food at 4am so cat cat moo moo lick ears lick paws. Caticus cuteicus licks your face yet be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day for ignore the squirrels, you'll never catch them anyway yet with tail in the air immediately regret falling into bathtub paw at your fat belly. Make muffins. Furrier and even more furrier hairball meow and decide to want nothing to do with my owner today. I want to go outside let me go outside nevermind inside is better catch eat throw up catch eat throw up bad birds or nya nya nyan but kitty kitty meow meow, i tell my human or mark territory. Kitty poochy. Run in circles good morning sunshine, dream about hunting birds. Purr cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit.`,
		},
	};
	componentDidMount = () => {
		const { id } = this.props.match.params;
		this.handleProduct();
		window.addEventListener('resize', this.handleProduct);
		//api call using id
		//populate state
	};
	handleProduct = () => {
		const isMobile = window.innerWidth > 700 ? false : true;
		this.setState({ isMobile });
	};
	render() {
		return this.state.isMobile ? (
			<MobileProductPage product={this.state.product} />
		) : (
			<DesktopProductPage product={this.state.product} />
		);
	}
}

export default ProductPage;
