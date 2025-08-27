import { useState } from 'react';

export const useFormSubmission = (options = {}) => {
    const [state, setState] = useState({
        isSubmitting: false,
        isSubmitted: false,
        error: null
    });

    const submit = async (data, endpoint) => {
        setState({ isSubmitting: true, isSubmitted: false, error: null });

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setState({ isSubmitting: false, isSubmitted: true, error: null });
            options.onSuccess?.();
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An error occurred';
            setState({ isSubmitting: false, isSubmitted: false, error: errorMessage });
            options.onError?.(errorMessage);
        }
    };

    const reset = () => {
        setState({ isSubmitting: false, isSubmitted: false, error: null });
    };

    return {
        ...state,
        submit,
        reset
    };
};
