import './App.css';
import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

import Image from 'react-bootstrap/Image';

const Footer = () => {
	return (
		<Box className='foot'>
			
			<FooterContainer>
				<Row>
                
					<Column>
						<div>
                            <ul className='social'>
                            <FooterLink href="#">
							<Image className='logo' src="https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-48iy8fap.png"  />
						</FooterLink>
						<FooterLink href="#">
                        <Image className='logo' src="https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-48iy8fap.png"  />
						</FooterLink>
						<FooterLink href="#">
                        <Image className='logo' src="https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-48iy8fap.png"  />
						</FooterLink>
                        <FooterLink href="#">
                        <Image className='logo' src="https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-48iy8fap.png"  />
						</FooterLink>
                            </ul>
                        </div>
						
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">
							Writing
						</FooterLink>
						<FooterLink href="#">
							Internships
						</FooterLink>
						<FooterLink href="#">
							Coding
						</FooterLink>
						<FooterLink href="#">
							Teaching
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Uttar Pradesh
						</FooterLink>
						<FooterLink href="#">
							Ahemdabad
						</FooterLink>
						<FooterLink href="#">
							Indore
						</FooterLink>
						<FooterLink href="#">
							Mumbai
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Uttar Pradesh
						</FooterLink>
						<FooterLink href="#">
							Ahemdabad
						</FooterLink>
						<FooterLink href="#">
							Indore
						</FooterLink>
						<FooterLink href="#">
							Mumbai
						</FooterLink>
					</Column>
                    <Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Uttar Pradesh
						</FooterLink>
						<FooterLink href="#">
							Ahemdabad
						</FooterLink>
						<FooterLink href="#">
							Indore
						</FooterLink>
						<FooterLink href="#">
							Mumbai
						</FooterLink>
					</Column>
				</Row>
                <hr className='line'/>
                
                
                <h6 className='text-center line '>Copyright &copy; | Counselify </h6>
                
			</FooterContainer>
		</Box>
	);
};
export default Footer;
