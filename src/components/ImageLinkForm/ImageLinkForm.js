import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<p className='f4'>
				{'This Magic Eye can detect faces in your pictures. Give it a try.'}
			</p>
			<div className='center'>
				<div className='form center pa3 br3 shadow-5'>
					<input type='text' className='f4 pa1 w-60 center' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv1 dib white bg-orange' onClick={onButtonSubmit}>
					  Detect
					</button>
				</div>
			</div>	
		</div>
	);

}

export default ImageLinkForm;