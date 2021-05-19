// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit as editIcon } from '@fortawesome/free-regular-svg-icons/faEdit.js';
import { faTrashAlt as trash } from '@fortawesome/free-regular-svg-icons/faTrashAlt.js';

type propsType = {
	type: string,
	location: string,
	start?: string,
	end?: string,
	id?: string,
	setFns?: Object,
};

const ListItem = ({
	type,
	location,
	start,
	end,
	id,
	setFns,
}: propsType): React.Node | null => {
	if (type === 'record')
		return (
			<li className={`filter drop-shadow-sm bg-white mb-0.5`}>
				<Link to={{ pathname: `/user/:user_id/records/${id || ''}` }}>
					<div className={`flex justify-between items-end px-2 py-3`}>
						<h6 className={`leading-5`}>{location}</h6>
						<p className={`text-sm leading-2`}>
							{(start ? start.slice(5) : '') +
								' - ' +
								(end ? end.slice(5) : '')}
						</p>
					</div>
				</Link>
			</li>
		);
	if (type === 'favorite')
		return (
			<li className={`filter drop-shadow-sm bg-white mb-0.5`}>
				<div className={`flex justify-between items-end px-2 py-3`}>
					<h6 className={`leading-5 flex-grow`}>{location}</h6>
					<Link
						to={{
							pathname: `/user/:user_id/records/new`,
							state: { action: 'new', location },
						}}
					>
						<FontAwesomeIcon icon={editIcon} />
					</Link>
					<button
						className={`focus:outline-none`}
						onClick={() => setFns?.setRemoveFavorite(location)}
					>
						<FontAwesomeIcon icon={trash} className={`ml-3 mr-2`} />
					</button>
				</div>
			</li>
		);
	return null;
};

export default ListItem;
