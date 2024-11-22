import React, { useState, useEffect } from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from './components/ui/card.jsx';
import { Button } from './components/ui/button.jsx';
import { Textarea } from './components/ui/textarea.jsx';
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
		return this._correctAnswersArray.includes(answer);
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
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [hasAnswered, setHasAnswered] = useState(false);
	const [showHintsNotes, setShowHintsNotes] = useState(false);
	const [hintInput, setHintInput] = useState('');
	const [notesInput, setNotesInput] = useState('');
	const [jsonInput, setJsonInput] = useState('');
	const [exportToggle, setExportToggle] = useState(false);
	const [shuffledOptions, setShuffledOptions] = useState([]);

	const currentCard = flashcards[currentCardIndex];

	// Function to shuffle array using Fisher-Yates algorithm
	const shuffleArray = (array) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	// Generate and shuffle answer options whenever the current card changes
	useEffect(() => {
		if (currentCard) {
			const allOptions = [
				...currentCard._correctAnswersArray,
				...currentCard._wrongAnswersArray
			].map((answer) => ({
				value: answer,
				isCorrect: currentCard._correctAnswersArray.includes(answer)
			}));
			setShuffledOptions(shuffleArray(allOptions));
			setSelectedAnswer('');
		}
	}, [currentCardIndex, flashcards]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const checkAnswer = () => {
		if (!currentCard || hasAnswered || !selectedAnswer) return;
		setHasAnswered(true);
		setHintInput(currentCard._hint);
		setNotesInput(currentCard._notes);
	};

	const nextCard = () => {
		if (flashcards.length === 0) return;
		setCurrentCardIndex((prev) => (prev + 1) % flashcards.length);
		setSelectedAnswer('');
		setHasAnswered(false);
		setShowHintsNotes(false);
	};

	const importCards = () => {
		try {
			const cardsData = JSON.parse(jsonInput);
			if (!Array.isArray(cardsData)) {
				throw new Error('Invalid data format: Expected an array');
			}

			const cardStack = cardsData.map((cardData) =>
				FlashCard.fromJSON(cardData)
			);

			const shuffled = shuffleArray(cardStack);
			setFlashcards(shuffled);
			setSelectedAnswer('');
			setHasAnswered(false);
			setJsonInput('');
			alert('Cards imported successfully!');
		} catch (error) {
			alert(`Import failed: ${error.message}`);
		}
	};

	const exportCards = () => {
		const json = JSON.stringify(
			flashcards.map((card) => card.toJSON()),
			null,
			2
		);
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
			updatedCards[currentCardIndex]._frequencyBasedOnDifficulty =
				Math.max(
					1,
					updatedCards[currentCardIndex]._frequencyBasedOnDifficulty -
						1
				);
		}
		setFlashcards(updatedCards);
		alert(
			`Frequency ${increase ? 'increased' : 'decreased'} for this card.`
		);
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			if (!hasAnswered && selectedAnswer) {
				checkAnswer();
			} else if (hasAnswered) {
				nextCard();
			}
		}
	};

	return (
		<div
			className={`min-h-screen p-6 transition-colors duration-300 ${
				darkMode
					? 'bg-gray-900 text-white'
					: 'bg-gray-100 text-gray-900'
			}`}
			onKeyPress={handleKeyPress}
		>
			<div className="max-w-4xl mx-auto flex flex-col">
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-5xl font-bold ml-auto mr-auto">
						Rapid-Testing Module
					</h1>
					<Button
						size="icon"
						onClick={toggleDarkMode}
						className="rounded-full transition-colors duration-300 "
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
							{currentCard && shuffledOptions.length > 0 && (
								<div className="space-y-3">
									{shuffledOptions.map((option, index) => (
										<div
											key={index}
											className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
												hasAnswered
													? option.isCorrect
														? 'border-green-500 bg-green-50 dark:bg-green-900/20'
														: option.value ===
														  selectedAnswer
														? 'border-red-500 bg-red-50 dark:bg-red-900/20'
														: 'border-gray-200'
													: selectedAnswer ===
													  option.value
													? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
													: 'border-gray-200 hover:border-blue-300'
											}`}
											onClick={() =>
												!hasAnswered &&
												setSelectedAnswer(option.value)
											}
										>
											{option.value}
										</div>
									))}
								</div>
							)}

							<div className="flex justify-center space-x-2">
								<Button
									onClick={checkAnswer}
									disabled={
										!currentCard ||
										hasAnswered ||
										!selectedAnswer
									}
								>
									Check Answer
								</Button>
								{hasAnswered && (
									<Button onClick={nextCard}>
										Next Card
									</Button>
								)}
							</div>

							{hasAnswered && currentCard && (
								<div className="space-y-4">
									<Alert
										className={`rounded-lg transition-all duration-300 ${
											currentCard.isCorrect(
												selectedAnswer
											)
												? 'bg-grey-500 dark:bg-grey-200 '
												: 'bg-grey-500 dark:bg-grey-200 '
										}`}
									>
										<AlertDescription>
											{currentCard.isCorrect(
												selectedAnswer
											) ? (
												'Correct!'
											) : (
												<div className="space-y-2">
													<p><strong>Incorrect.</strong></p>
													<p>
														Correct answer
														{currentCard
															._correctAnswersArray
															.length > 1
															? 's would be'
															: ' would be'}
														:
													</p>
													<ul>
														{currentCard._correctAnswersArray.map(
															(answer, index) => (
																<li key={index}>
																	{index+1}: {answer}
																</li>
															)
														)}
													</ul>
												</div>
											)}
										</AlertDescription>
									</Alert>

									<div className="flex space-x-2">
										<Button
											onClick={() =>
												adjustFrequency(true)
											}
											className="flex items-center gap-2"
										>
											<ChevronUp className="h-4 w-4" />
											Show More Often
										</Button>
										<Button
											onClick={() =>
												adjustFrequency(false)
											}
											className="flex items-center gap-2"
										>
											<ChevronDown className="h-4 w-4" />
											Show Less Often
										</Button>
									</div>
								</div>
							)}

							{currentCard && (
								<div className="space-y-4">
									<Button
										variant="outline"
										onClick={() =>
											setShowHintsNotes(!showHintsNotes)
										}
										className="flex items-center gap-2"
										aria-label="Toggle Hints & Notes"
									>
										{showHintsNotes ? (
											<>
												<EyeOff className="h-4 w-4" />{' '}
												Hide Hints & Notes
											</>
										) : (
											<>
												<Eye className="h-4 w-4" /> Show
												Hints & Notes
											</>
										)}
									</Button>

									{showHintsNotes && (
										<div className="space-y-4">
											<div className="space-y-2">
												<p className="text-sm font-medium">
													{`Hint: ${
														currentCard._hint ||
														'No hint available.'
													}`}
												</p>
												<Textarea
													value={hintInput}
													onChange={(e) =>
														setHintInput(
															e.target.value
														)
													}
													placeholder="Edit hint"
													rows={2}
												/>
												<Button onClick={updateHint}>
													Update Hint
												</Button>
											</div>
											<div className="space-y-2">
												<p className="text-sm font-medium">
													{`Notes: ${
														currentCard._notes ||
														'No notes available.'
													}`}
												</p>
												<Textarea
													value={notesInput}
													onChange={(e) =>
														setNotesInput(
															e.target.value
														)
													}
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
