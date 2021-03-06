// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as Logo } from '../../../image/mountain_logo.svg';
import { faGithub as githubIcon } from '@fortawesome/free-brands-svg-icons/faGithub.js';
import { faInstagram as igIcon } from '@fortawesome/free-brands-svg-icons/faInstagram.js';
import { faFacebook as fbIcon } from '@fortawesome/free-brands-svg-icons/faFacebook.js';
const AboutPage = (): React.Node => {
	return (
		<div className={`h-full`}>
			<div
				className={`p-7 text-t-gray-dark flex flex-col items-center justify-between h-full lg:max-w-5xl lg:mx-auto`}>
				<h2 className={`h2-style w-max self-start`}>關於走走</h2>
				<Logo className={`w-36 mx-auto fill-current -my-3`} />
				<p
					className={`p-1 tracking-wide text-justify text-sm md:w-1/2 lg:text-base`}>
					這是一個網頁工程學習者因為對山林的愛好而誕生的小小 Side
					Project，雖然目前的成品與功能都和自己的健行經歷一樣還不夠成熟，但希望在這兩個方面都可以隨著自己的成長而不斷完善與茁壯。
				</p>
				<div className={`self-end w-max text-3xl`}>
					<a
						alt="Facebook"
						target="_blank"
						rel="noreferrer noopener"
						href="https://www.facebook.com/OBwithoboe/">
						<FontAwesomeIcon icon={fbIcon} className={`mr-2`} />
					</a>
					<a
						alt="Instagram"
						target="_blank"
						rel="noreferrer noopener"
						href="https://www.instagram.com/obwithoboe/">
						<FontAwesomeIcon icon={igIcon} className={`mr-2`} />
					</a>
					<a
						alt="Github"
						target="_blank"
						rel="noreferrer noopener"
						href="https://github.com/driedfishlin">
						<FontAwesomeIcon icon={githubIcon} className={`mr-2`} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
