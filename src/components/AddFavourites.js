import React from 'react';

const AddFavourite = () => {
	return (
		<>
			<div className='btn btn-secondary btn-block'>
				<span className='mr-2'>Add to Favourites</span>
				<span className='ms-2'>
					<svg
						width='2em'
						height='2em'
						viewBox='0 0 20 20'S
						class='bi bi-heart-fill'
						fill='pink'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
						/>
					</svg>
				</span>
			</div>


		</>
	);
};

export default AddFavourite;