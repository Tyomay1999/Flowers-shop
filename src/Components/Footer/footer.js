import React from 'react'
import footerStyles from './footer.module.scss'
import '../Login/button.css'
import {TextField} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import {createTheme, ThemeProvider} from "@material-ui/core";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const theme = createTheme({
	palette: {
		primary: {
			main: '#F6F6F6'
		}
	}
})
const Footer = () => {
	const darkOrLight = useSelector(state => state?.changeMode.darkOrLight )
	const location = useLocation()

	return (
		<>
			{
				location.pathname !== '/notfound' &&
				<ThemeProvider theme={theme}>
					{/*<div style={{width: '100%', height: '100vh', background: 'white'}}></div>*/}
					{/*<div style={{width: '100%', height: '100vh', background: 'white'}}></div>*/}
					<footer className={darkOrLight ? footerStyles.main1 :footerStyles.main}>
						<div className={footerStyles.content}>
							<div className={`${footerStyles.left} ${footerStyles.box}`}>
								<div className={footerStyles.upper}>
									<div className={footerStyles.topic}>About us</div>
									<p>CodingLab is a channel where you can learn HTML,
										CSS, and also JavaScript along with creative CSS Animations and Effects.</p>
								</div>
								<div className={footerStyles.lower}>
									<div className={footerStyles.topic}>Contact us</div>
									<div className={footerStyles.phone}>
										<span><i className="fas fa-phone-volume"></i>+777 7777 7777</span>
									</div>
									<div className={footerStyles.email}>
										<span><i className="fas fa-envelope"></i>Email@gmail.com</span>
									</div>
								</div>
							</div>
							<div className={`${footerStyles.middle} ${footerStyles.box}`}>
								<div className={footerStyles.topic}>Our Services</div>
								<div><p>Web Design, Development</p></div>
								<div><p>Web UX Design, Reasearch</p></div>
								<div><p>Web User Interface Design</p></div>
								<div><p>Theme Development, Design</p></div>
								<div><p>Mobile Application Design</p></div>
								<div><p>Wire raming & Prototyping</p></div>
							</div>
							<div className={`${footerStyles.right} ${footerStyles.box}`}>
								<div className={footerStyles.topic}>Subscribe us</div>
								<div>
									<TextField
										type='email'
										label='Enter email address'
										fullWidth={true}
										color='primary'
										className={footerStyles.textfiled}
									/>
									<button className={footerStyles.fill}>Send</button>
									<div className={footerStyles['media-icons']}>
										<span><InstagramIcon/></span>
										<span><FacebookIcon/></span>
										<span><WhatsAppIcon/></span>
										<span><TelegramIcon/></span>
									</div>
								</div>
							</div>
						</div>
						<div className={footerStyles.bottom}>
							<p>Copyright &#169; 2020 <Link to='/'>CodingLab</Link> All rights reserved</p>
						</div>
					</footer>
				</ThemeProvider>
			}
		</>
	)
}
export default Footer
