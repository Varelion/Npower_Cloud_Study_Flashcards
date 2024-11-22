import React, { useState } from 'react';
import RapidTest from './FlashCardModule';
import FlashCard from './RapidTestModule'; // Fixed the capitalization to match naming conventions

import './index.css'; // Ensure you import your CSS

const App = () => {
	const [typeToggle, setTypeToggle] = useState(false);

	return (
		<div className='flex flex-col justify-items-center justify-center '>
			<div className='bg-slate-900 flex justify-center'>
				<button className=' bg-blue-600 p-3 rounded m-5 justify-center justify-self-center align-middle  w-50 text-white text-lg' onClick={() => setTypeToggle(!typeToggle)}>
					{typeToggle ? 'CLICK HERE TO TRY THE FLASHCARD MODULE' : 'CLICK HERE TO TRY THE RAPID-TESTING MODULE'}
				</button>
			</div>
			<br />
			{typeToggle ? <FlashCard /> : <RapidTest />}
		</div>
	);
};

export default App;
