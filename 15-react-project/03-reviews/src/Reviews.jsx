import people from './data'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'



const Reviews = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index]

	const prevPerson = () => {
		if (index === 0) {
			setIndex(people.length - 1)
		} else {
			setIndex(index - 1)
		}
	}

	const nextPerson = () => {
		if (index === people.length - 1) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}
	}

	const randomPerson = () => {
		let newIndex = Math.floor(Math.random() * people.length)
		if (newIndex === index) {
			randomPerson()
		} else {
			setIndex(newIndex)
		}
	}

	console.log(index);


	return (
		<article className='review'>
			<div className="img-container">
				<img src={image} alt={name} className="person-img" />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='jon'>{job}</p>
			<p className='info'>{text}</p>
			<div className="button-container">
				{index}
				<button className='prev-btn' onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={randomPerson}>
				randomly!
			</button>
		</article>
	)
}

export default Reviews