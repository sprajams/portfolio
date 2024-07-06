'use client';

import clsx from 'clsx';
import { useState } from 'react';

type VideoLogoProps = {
	videoSrc: string;
};

export const VideoLogo = ({ videoSrc }: VideoLogoProps) => {
	const [videoHidden, setVideoHidden] = useState(true);

	/**
	 * Checks the current time relative to video duration
	 * to determine whether the video should be hidden.
	 * Updates the state of `videoHidden` accordingly.
	 *
	 * @param {React.SyntheticEvent<HTMLVideoElement>} e - The React synthetic event object.
	 */
	const handleTimeUpdate: React.ReactEventHandler<HTMLVideoElement> = (e) => {
		const { currentTime, duration } = e.currentTarget;

		const cutoffPercentage = 0.05;
		const cutoffValue = cutoffPercentage * duration;

		const isStarting = currentTime <= cutoffValue;
		const isEnding = currentTime >= duration - cutoffValue;

		const shouldBeHidden = isStarting || isEnding;

		setVideoHidden(shouldBeHidden);
	};

	return (
		<div className="relative overflow-hidden">
			<video
				autoPlay
				muted
				loop
				playsInline
				className={clsx(
					'absolute size-full object-cover transition-opacity duration-700',
					{ 'opacity-0': videoHidden },
				)}
				onTimeUpdate={handleTimeUpdate}
			>
				<source src={videoSrc} />
			</video>
			<h1 className="font-display text-6xl sm:text-7xl md:text-9xl p-4 text-black bg-white mix-blend-screen select-none whitespace-nowrap">
				<span className="italic">suph</span>
				<span>.</span>
				<span className="italic inline-block translate-x-[-0.08em]">dev</span>
			</h1>
		</div>
	);
};
