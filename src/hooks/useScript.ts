import { useEffect, useState } from 'react';

enum ScriptState {
	LOADING = 'loading',
	IDLE = 'idle',
	READY = 'ready',
	ERROR = 'error',
}

export const useExternalScript = (src: string) => {
	let [state, setState] = useState<ScriptState>(src ? ScriptState.LOADING : ScriptState.IDLE);

	useEffect(() => {
		if (!src) return setState(ScriptState.IDLE);

		let script: HTMLScriptElement | null = document.querySelector(`script[src="${src}"]`);

		const handleScript = (e: Event) => setState(e.type === 'load' ? ScriptState.READY : ScriptState.ERROR);

		if (!script) {
			script = document.createElement('script');
			script.type = 'application/javascript';
			script.src = src;
			script.async = true;
			document.body.appendChild(script);
			script.addEventListener('load', handleScript);
			script.addEventListener('error', handleScript);
		}

		script.addEventListener('load', handleScript);
		script.addEventListener('error', handleScript);

		return () => {
			script?.removeEventListener('load', handleScript);
			script?.removeEventListener('error', handleScript);
		};
	}, [src]);

	return state;
};

export const useInternalScript = (content: string, id: string) => {
	let [state, setState] = useState<ScriptState>(content ? ScriptState.LOADING : ScriptState.IDLE);

	useEffect(() => {
		if (!content) return setState(ScriptState.IDLE);

		let script: HTMLScriptElement | null = document.querySelector(`script[data-id="${id}]`);

		const handleScript = (e: Event) => setState(e.type === 'load' ? ScriptState.READY : ScriptState.ERROR);

		if (!script) {
			script = document.createElement('script');
			script.dataset.id = id;
			script.type = 'application/javascript';
			script.async = true;
			script.append(content);
			document.body.appendChild(script);
			script.addEventListener('load', handleScript);
			script.addEventListener('error', handleScript);
		}

		script.addEventListener('load', handleScript);
		script.addEventListener('error', handleScript);

		return () => {
			script?.removeEventListener('load', handleScript);
			script?.removeEventListener('error', handleScript);
		};
	}, []);

	return state;
};
