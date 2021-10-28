import React, { useEffect, useRef, useState } from 'react';
import filterStyle from './filter.module.scss';
import { motion } from 'framer-motion';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import RangeSlider from "./RangeInput/inputTypeRange";
import Slider from "@material-ui/core/Slider";
import { Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from "react-redux";
import { setFilterDataByColor, setFilterDataByGrowth, setFilterDataByPrice } from "../../../Redux/filterReducer";

const Filter = () => {
	const [filterIsOpen, setFilterIsOpen] = useState(false)
	const [value, setValue] = useState([1, 15000]);
	const [price, setPrice] = useState([0, 0]);
	const [flowerGrowth, setFlowerGrowth] = useState(20);
	const [flowerGrowthInput, setFlowerGrowthInput] = useState(0);
	const [selectedColor, setSelectedColor] = useState([]);
	const [x, setX] = useState(false)
	const darkOrLight = useSelector(state => state?.changeMode.darkOrLight);
	const dispatch = useDispatch();
	const refUseEffectWarrningSolver = useRef()
	const useEffectWarrningSolver = () => {
		dispatch(setFilterDataByPrice(price))
		dispatch(setFilterDataByGrowth(flowerGrowth))
		dispatch(setFilterDataByColor(selectedColor))
	}
	refUseEffectWarrningSolver.current = useEffectWarrningSolver
	useEffect(() => {
		refUseEffectWarrningSolver.current()
	},[price,flowerGrowth,x])
	const animation = {
		initial: {
			opacity: 0,
		},
		in: {
			opacity: 1,
			x: 0
		},
		out: {
			opacity: 0,
			x: '100%'
		},
	}
	const animation1 = {
		initial: {
			opacity: 0.3,
		},
		in: {
			opacity: 1,
			x: 0
		},
		out: {
			opacity: 0,
			x: '-55%'
		},
	}
	let maxPrice = 15000, minPrice = 0, minGrowth = 0, maxGrowth = 100;
	const maxDigitHandler = (num, min, max) => {
		if (num <= max && num >= min) {
			setValue([value[0], num])
			setPrice([value[0], num])
		} else if (num > max) {
			setValue([value[0], max])
			setPrice([value[0], max])
		} else {
			setValue([value[0], min])
			setPrice([value[0], min])
		}
	}
	const minDigitHandler = (num, min, max) => {
		if (num >= min && num <= max) {
			setValue([num, value[1]])
			setPrice([num, value[1]])
		} else if (num < 0) {
			setValue([min, value[1]])
			setPrice([min, value[1]])
		} else {
			setValue([max, value[1]])
			setPrice([max, value[1]])
		}
	}
	const handlerFlowerGrowth = (event, newValue) => {
		setFlowerGrowth(newValue)
	}
	const minMaxFlowerGrowth = (num, min, max) => {
		if (num >= min && num <= max) {
			setFlowerGrowthInput(num)
		} else if (num < min) {
			setFlowerGrowthInput(min)
		} else if (num > max) {
			setFlowerGrowthInput(max)
		}
		setFlowerGrowthInput(flowerGrowthInput)
	}
	const handlerColors = (name) => {
		let haveColor = false;
		selectedColor.forEach((elem,index) => {
			if(elem === name){
				haveColor = true
				selectedColor.splice(index,1)
				setSelectedColor(selectedColor)
			}
		})
		if(!haveColor){
			selectedColor.push(name)
			setSelectedColor(selectedColor)
		}
	}
	const findColors = (name) => {
		let haveColor = false
		selectedColor.forEach(elem => {
			if(elem === name){
				haveColor = true
			}
		})
		return haveColor
	}
	return (
		<motion.div
			initial='out'
			animate='in'
			exit='out'
			transition={{ duration: 1 }}
			variants={animation}
			className={filterIsOpen ? filterStyle.main1 : filterStyle.main}>
			<div
				onClick={() => setFilterIsOpen(!filterIsOpen)}
				className={!filterIsOpen ?
					darkOrLight ? `${filterStyle.openContainer} ${filterStyle.dark}` : `${filterStyle.openContainer} ${filterStyle.light}`
					: darkOrLight ? `${filterStyle.closeContainer} ${filterStyle.dark}` : `${filterStyle.closeContainer} ${filterStyle.light}`}
			>
				<span
					className={filterIsOpen ? darkOrLight ? `${filterStyle.openContainer} ${filterStyle.dark}` : `${filterStyle.openContainer} ${filterStyle.light}` : null}>
					{
						filterIsOpen ? <ArrowForwardIosSharpIcon /> :
							<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M16.1719 5.73484H16.9541C17.241 5.73484 17.4756 5.47678 17.4756 5.16137C17.4756 4.84596 17.241 4.58789 16.9541 4.58789H16.1719C15.8851 4.58789 15.6504 4.84596 15.6504 5.16137C15.6504 5.47678 15.8851 5.73484 16.1719 5.73484Z"
									fill="white" />
								<path className={filterStyle.filterSvg}
								fill="white"
									d="M23.8902 0.630824C23.7077 0.229391 23.3427 0 22.9515 0H1.04846C0.657335 0 0.292284 0.258064 0.109758 0.630824C-0.0727673 1.03226 -0.0206171 1.49104 0.214059 1.83513L9.41857 14.5663V22.853C9.41857 23.2832 9.62717 23.6559 9.96614 23.8566C10.1226 23.9427 10.279 24 10.4616 24C10.6702 24 10.8788 23.9427 11.0613 23.7993L13.9556 21.5914C14.3728 21.2473 14.6075 20.7312 14.6075 20.1864V14.5376L23.7859 1.83513C24.0206 1.49104 24.0728 1.03226 23.8902 0.630824ZM13.6688 13.9928C13.6167 14.0789 13.5645 14.1935 13.5645 14.3369V20.1577C13.5645 20.3584 13.4863 20.5305 13.3559 20.6452L10.4616 22.853V14.3369C10.4616 14.1362 10.3833 13.9642 10.253 13.8781L4.36 5.73477H13.8253C14.1121 5.73477 14.3468 5.4767 14.3468 5.16129C14.3468 4.84588 14.1121 4.58781 13.8253 4.58781H3.65597C3.6299 4.58781 3.57775 4.58781 3.55167 4.58781L1.04846 1.14695H22.9515L13.6688 13.9928Z" />
							</svg>
					}
				</span>

			</div>
			{
				filterIsOpen && <motion.div
					initial='out'
					animate='in'
					exit='out'
					transition={{ duration: 1 }}
					variants={animation1}
					className={filterIsOpen ? filterStyle.openContainer1 : filterStyle.closeContainer1}
				>
					<h1>Filter
						<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.1719 5.73484H16.9541C17.241 5.73484 17.4756 5.47678 17.4756 5.16137C17.4756 4.84596 17.241 4.58789 16.9541 4.58789H16.1719C15.8851 4.58789 15.6504 4.84596 15.6504 5.16137C15.6504 5.47678 15.8851 5.73484 16.1719 5.73484Z"
								fill="white" />
							<path className={filterStyle.filter}
								d="M23.8902 0.630824C23.7077 0.229391 23.3427 0 22.9515 0H1.04846C0.657335 0 0.292284 0.258064 0.109758 0.630824C-0.0727673 1.03226 -0.0206171 1.49104 0.214059 1.83513L9.41857 14.5663V22.853C9.41857 23.2832 9.62717 23.6559 9.96614 23.8566C10.1226 23.9427 10.279 24 10.4616 24C10.6702 24 10.8788 23.9427 11.0613 23.7993L13.9556 21.5914C14.3728 21.2473 14.6075 20.7312 14.6075 20.1864V14.5376L23.7859 1.83513C24.0206 1.49104 24.0728 1.03226 23.8902 0.630824ZM13.6688 13.9928C13.6167 14.0789 13.5645 14.1935 13.5645 14.3369V20.1577C13.5645 20.3584 13.4863 20.5305 13.3559 20.6452L10.4616 22.853V14.3369C10.4616 14.1362 10.3833 13.9642 10.253 13.8781L4.36 5.73477H13.8253C14.1121 5.73477 14.3468 5.4767 14.3468 5.16129C14.3468 4.84588 14.1121 4.58781 13.8253 4.58781H3.65597C3.6299 4.58781 3.57775 4.58781 3.55167 4.58781L1.04846 1.14695H22.9515L13.6688 13.9928Z" />
						</svg>

					</h1>
					<div className={filterStyle.flowersPrice}>
						<div className={filterStyle.price}>
							<div className={filterStyle.price1}>
								<label className={price[0] ? filterStyle.label2 : filterStyle.label1}>From </label>
								<input onChange={(e) => {
									minDigitHandler(+e.target.value, minPrice, maxPrice)
								}} defaultValue={value[0] === 0 ? '' : value[0]} value={price[0] === 0 ? '' : price[0]} type='number' />
							</div>
							<div className={filterStyle.price2}>
								<label className={price[1] ? filterStyle.label2 : filterStyle.label1}>To </label>
								<input onChange={(e) => {
									maxDigitHandler(+e.target.value, minPrice, maxPrice)
								}} defaultValue={value[1] === 0 ? '' : value[1]} value={price[1] === 0 ? '' : price[1]} type='number' />
							</div>
						</div>
						<RangeSlider
							value={value}
							setValue={setValue}
							setPrice={setPrice}
							max={maxPrice}
							min={minPrice}
						/>
					</div>
					<div className={filterStyle.flowerGrowth}>
						<div className={filterStyle.price}>
							<div className={filterStyle.price1}>
								<label className={flowerGrowth ? filterStyle.label2 : filterStyle.label1}>flower growth(sm) </label>
								<input onChange={(e) => {
									minMaxFlowerGrowth(+e.target.value.length, minGrowth, maxGrowth)
								}} defaultValue={20} value={flowerGrowth === 0 ? '' : flowerGrowth} type='number' />
							</div>
						</div>
						<Slider
							defaultValue={20}
							aria-labelledby="discrete-slider"
							valueLabelDisplay="auto"
							onChange={handlerFlowerGrowth}
							step={10}
							min={0}
							max={100}
						/>
					</div>
					<div className={filterStyle.colors}>
						<div
							onClick={() => {
								setX(!x)
								handlerColors( 'red' )
							}}
							className={`${findColors('red') ? filterStyle.div1 : filterStyle.div} ${filterStyle.red}`}
						><CheckIcon /></div>
						<div
							onClick={() => {
								setX(!x)
								handlerColors( 'blue' )
							}}
							className={`${findColors('blue') ? filterStyle.div1 : filterStyle.div} ${filterStyle.blue}`}
						><CheckIcon /></div>
						<div
							onClick={() => {
								setX(!x)
								handlerColors( 'green' )
							}}
							className={`${findColors('green') ? filterStyle.div1 : filterStyle.div} ${filterStyle.green}`}
						><CheckIcon /></div>
						<div
							onClick={() => {
								setX(!x)
								handlerColors( 'yellow' )
							}}
							className={`${findColors('yellow') ? filterStyle.div1 : filterStyle.div} ${filterStyle.yellow}`}
						><CheckIcon /></div>
						<div
							onClick={() => {
								setX(!x)
								handlerColors( 'pink' )
							}}
							className={`${findColors('pink') ? filterStyle.div1 : filterStyle.div} ${filterStyle.pink}`}
						><CheckIcon /></div>
						<div
							onClick={() => {
								setX(!x)
								handlerColors( 'orange' )
							}}
							className={`${findColors('orange') ? filterStyle.div1 : filterStyle.div} ${filterStyle.orange}`}
						><CheckIcon /></div>
						<div
							onClick={() => {
								setX(!x)
								handlerColors( 'white' )
							}}
							className={`${findColors('white') ? filterStyle.div1 : filterStyle.div} ${filterStyle.white}`}
						><CheckIcon /></div>
						<div
							onClick={() => {
								setX(!x)
								handlerColors( 'violet' )
							}}
							className={`${findColors('violet') ? filterStyle.div1 : filterStyle.div} ${filterStyle.violet}`}
						><CheckIcon /></div>
					</div>
					<div className={filterStyle.buttons}>
						<Button variant="contained">Close <CloseIcon /></Button>
						<Button
							className={darkOrLight ? filterStyle.apply1 : filterStyle.apply}
							variant="contained"
							color="primary">
							Apply <CheckIcon />
						</Button>
					</div>
				</motion.div>
			}
		</motion.div>
	)
}

export default Filter
