import React, { useState } from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from './components/ui/card.jsx';
import { Button } from './components/ui/button.jsx';
import { Textarea } from './components/ui/textarea.jsx';
import { Input } from './components/ui/input.jsx';
import { Alert, AlertDescription } from './components/ui/alert.jsx';
import { Moon, Sun, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';

class FlashCard {
	constructor(
		question,
		correctAnswersArray,
		wrongAnswersArray,
		hint = '',
		notes = '',
		frequencyBasedOnDifficulty = 1
	) {
		this._question = question;
		this._correctAnswersArray = correctAnswersArray;
		this._wrongAnswersArray = wrongAnswersArray;
		this._hint = hint;
		this._notes = notes;
		this._frequencyBasedOnDifficulty = frequencyBasedOnDifficulty;
	}

	isCorrect(answer) {
		return this._correctAnswersArray.includes(answer.trim());
	}

	toJSON() {
		return {
			question: this._question,
			correctAnswersArray: this._correctAnswersArray,
			wrongAnswersArray: this._wrongAnswersArray,
			hint: this._hint,
			notes: this._notes,
			frequencyBasedOnDifficulty: this._frequencyBasedOnDifficulty
		};
	}

	static fromJSON(data) {
		return new FlashCard(
			data.question,
			data.correctAnswersArray,
			data.wrongAnswersArray,
			data.hint || '',
			data.notes || '',
			data.frequencyBasedOnDifficulty || 1
		);
	}
}

const FlashcardApp = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [flashcards, setFlashcards] = useState([]);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [answer, setAnswer] = useState('');
	const [hasAnswered, setHasAnswered] = useState(false);
	const [showHintsNotes, setShowHintsNotes] = useState(false);
	const [hintInput, setHintInput] = useState('');
	const [notesInput, setNotesInput] = useState('');
	const [jsonInput, setJsonInput] = useState('');
	const [exportToggle, setExportToggle] = useState(false);

	const currentCard = flashcards[currentCardIndex];

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const checkAnswer = () => {
		if (!currentCard || hasAnswered) return;
		setHasAnswered(true);
		setHintInput(currentCard._hint);
		setNotesInput(currentCard._notes);
	};

	const nextCard = () => {
		if (flashcards.length === 0) return;
		setCurrentCardIndex((prev) => (prev + 1) % flashcards.length);
		setAnswer('');
		setHasAnswered(false);
		setShowHintsNotes(false);
	};

		const shuffleArray = (array) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	const importCards = () => {
		try {
			const cardsData = JSON.parse(jsonInput);
			if (!Array.isArray(cardsData)) {
				throw new Error('Invalid data format: Expected an array');
			}

			const cardStack = cardsData.map(cardData => FlashCard.fromJSON(cardData));

			const shuffled = shuffleArray(cardStack)
			setFlashcards(shuffled);
			setCurrentCardIndex(0);
			setAnswer('');
			setHasAnswered(false);
			setJsonInput('');
			alert('Cards imported successfully!');
		} catch (error) {
			alert(`Import failed: ${error.message}`);
		}
	};

	const exportCards = () => {
		const json = JSON.stringify(flashcards.map(card => card.toJSON()), null, 2);
		setJsonInput(json);
	};

	const updateHint = () => {
		if (!currentCard) return;
		const updatedCards = [...flashcards];
		updatedCards[currentCardIndex]._hint = hintInput;
		setFlashcards(updatedCards);
	};

	const updateNotes = () => {
		if (!currentCard) return;
		const updatedCards = [...flashcards];
		updatedCards[currentCardIndex]._notes = notesInput;
		setFlashcards(updatedCards);
	};

	const adjustFrequency = (increase) => {
		if (!currentCard) return;
		const updatedCards = [...flashcards];
		if (increase) {
			updatedCards[currentCardIndex]._frequencyBasedOnDifficulty += 1;
		} else {
			updatedCards[currentCardIndex]._frequencyBasedOnDifficulty = Math.max(
				1,
				updatedCards[currentCardIndex]._frequencyBasedOnDifficulty - 1
			);
		}
		setFlashcards(updatedCards);
		alert(`Frequency ${increase ? 'increased' : 'decreased'} for this card.`);
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter' && !hasAnswered) {
			checkAnswer();
		} else if (e.key === 'Enter' && hasAnswered) {
			nextCard();
		}
	};

	return (
		<div
			className={`min-h-screen p-6 transition-colors duration-300 ${
				darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
			}`}
		>
			<div className="max-w-4xl mx-auto flex flex-col">
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-5xl font-bold ml-auto mr-auto">Flash Card Module</h1>
					<Button
						variant="outline"
						size="icon"
						onClick={toggleDarkMode}
						className="rounded-full transition-colors duration-300"
						aria-label="Toggle Dark Mode"
					>
						{darkMode ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</Button>
				</div>

				<Card className="mb-6 shadow-lg rounded-lg transition-transform duration-300">
					<CardHeader>
						<CardTitle>
							{currentCard
								? currentCard._question
								: 'No flashcards available.'}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex space-x-2">
								<Input
									type="text"
									value={answer}
									onChange={(e) => setAnswer(e.target.value)}
									onKeyPress={handleKeyPress}
									placeholder="Type your answer"
									className="flex-1"
									disabled={hasAnswered || !currentCard}
								/>
								<Button
									onClick={checkAnswer}
									disabled={!currentCard || hasAnswered}
								>
									Check Answer
								</Button>
							</div>

							{hasAnswered && currentCard && (
								<div className="space-y-4">
									<Alert
										className={`rounded-lg transition-all duration-300 ${
											currentCard.isCorrect(answer)
												? 'bg-grey-500 dark:bg-grey-200 '
												: 'bg-grey-500 dark:bg-grey-200 '
										}`}
									>
										<AlertDescription>
											{currentCard.isCorrect(answer) ? (
												'Correct!'
											) : (
												<div className="space-y-2">
													<p><strong>Are you correct? Let's check your answer!</strong></p>
														<ul><strong>Correct Answers:</strong>
															{currentCard._correctAnswersArray.map((answer,index)=> (
																<li>{1+index}: {answer}</li>
															))}
														</ul>
													{currentCard._wrongAnswersArray.length > 0 && (
														<ul><strong>Common Wrong Answers:</strong>
															{currentCard._wrongAnswersArray.map((answer,index)=> (
																<li>{1+index}: {answer}</li>
															))}
														</ul>
													)}
												</div>
											)}
										</AlertDescription>
									</Alert>

									<div className="flex space-x-2">
										<Button
											onClick={() => adjustFrequency(true)}
											className="flex items-center gap-2"
										>
											<ChevronUp className="h-4 w-4" />
											Show More Often
										</Button>
										<Button
											onClick={() => adjustFrequency(false)}
											className="flex items-center gap-2"
										>
											<ChevronDown className="h-4 w-4" />
											Show Less Often
										</Button>
										<Button onClick={nextCard}>
											Next Card
										</Button>
									</div>
								</div>
							)}

							{currentCard && (
								<div className="space-y-4">
									<Button
										variant="outline"
										onClick={() => setShowHintsNotes(!showHintsNotes)}
										className="flex items-center gap-2"
										aria-label="Toggle Hints & Notes"
									>
										{showHintsNotes ? (
											<>
												<EyeOff className="h-4 w-4" /> Hide Hints & Notes
											</>
										) : (
											<>
												<Eye className="h-4 w-4" /> Show Hints & Notes
											</>
										)}
									</Button>

									{showHintsNotes && (
										<div className="space-y-4">
											<div className="space-y-2">
												<p className="text-sm font-medium">
													{`Hint: ${currentCard._hint || 'No hint available.'}`}
												</p>
												<Textarea
													value={hintInput}
													onChange={(e) => setHintInput(e.target.value)}
													placeholder="Edit hint"
													rows={2}
												/>
												<Button onClick={updateHint}>
													Update Hint
												</Button>
											</div>
											<div className="space-y-2">
												<p className="text-sm font-medium">
													{`Notes: ${currentCard._notes || 'No notes available.'}`}
												</p>
												<Textarea
													value={notesInput}
													onChange={(e) => setNotesInput(e.target.value)}
													placeholder="Edit notes"
													rows={3}
												/>
												<Button onClick={updateNotes}>
													Update Notes
												</Button>
											</div>
										</div>
									)}
								</div>
							)}
						</div>
					</CardContent>
				</Card>

				<Button
					onClick={() => setExportToggle(!exportToggle)}
					className="mx-auto mb-6"
				>
					Toggle Import/Export
				</Button>

				{exportToggle && (
					<div className="space-y-4">
						<Textarea
							value={jsonInput}
							onChange={(e) => setJsonInput(e.target.value)}
							placeholder="Paste JSON data here to import deck of flashcards!"
							rows={3}
						/>
						<div className="flex justify-center space-x-4">
							<Button onClick={importCards}>Import Deck</Button>
							<Button onClick={exportCards}>Export Deck</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FlashcardApp;
