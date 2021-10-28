import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './rangeInput.scss'
const useStyles = makeStyles({
	root: {
		width: '100%',
	},
});

function valuetext(value) {
	return `${value}°C`;
}

export default function RangeSlider({value, setValue, setPrice,min,max}) {
	const classes = useStyles();

	const handleChange = (event, newValue) => {
		setValue(newValue);
		setPrice(newValue)
	};

	return (
		<div className={classes.root}>
			<Slider
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				aria-labelledby="range-slider"
				getAriaValueText={valuetext}
				max={max}
				min={min}
				color='primary'
			/>
		</div>
	);
}